/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {ExcelComponent} from '../../core/ExcelComponent';
import {$, Dom} from '../../core/dom'
import {createTable} from './table.template';
import {resizeHandler} from './table.resize';
import {TableSelection} from './TableSelection';
import {matrix, nextSelector} from './table.functions';

export class Table extends ExcelComponent {
  constructor($root: Dom, options: any) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown', 'input'],
      ...options
    })
  }

  static className = 'excel__table'
  /*   onClick(event: Event) {

  } */

  onMousemove() {
    console.log('mousemove')
  }

  onMouseup() {
    console.log('mouseup')
  }

  toHTML() {
    return createTable(20)
  }

  prepare(): void {
    this.selection = new TableSelection()
  }

  init() {
    super.init()
    const $cell = this.$root.find('[data-id="0:0"]')
    this.selection.select($cell)
    this.$on('formula:typing', (text:string) => {
      this.selection.current.text(text)
    })

    this.$on('formula:done', () => {
      this.selection.current.focus()
    })
  }

  onMousedown(event: MouseEvent) {
    if (event.target instanceof HTMLElement) {
      if (event.target.dataset.resize) {
        resizeHandler(this.$root, event)
      } else {
        if (event.target.dataset.type === 'cell') {
          const $target = $(event.target)
          if (event.shiftKey) {
            const $cells: Array<Dom> = matrix($target, this.selection.current)
                .map(id => this.$root.find(`[data-id="${id}"]`))
            this.selection.selectGroup($cells)
          } else {
            this.selection.select($target)
          }
        }
      }
    }
  }

  onInput(e: any) {
    this.$emit('table:typing', e.target.textContent.trim())
  }

  onKeydown(event: KeyboardEvent) {
    const keys = [
      'Enter',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'ArrowDown',
      'ArrowUp'
    ]

    const {key} = event

    if (keys.includes(key) && !event.shiftKey) {
      event.preventDefault()
      const id = this.selection.current.idCell()
      const $next = this.$root.find(nextSelector(key, id))
      this.selection.select($next)
    }
  }
}
