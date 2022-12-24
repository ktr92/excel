/* eslint-disable @typescript-eslint/no-unused-vars */
import {ExcelComponent} from '../../core/ExcelComponent';
import {$, Dom} from '../../core/dom'
import {createTable} from './table.template';
import {resizeHandler} from './table.resize';
import {TableSelection} from './TableSelection';

export class Table extends ExcelComponent {
  constructor($root: Dom) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown']
    })
  }

  static className = 'excel__table'
  /*   onClick(event: Event) {

  } */

  onMousedown(event: MouseEvent) {
    if (event.target instanceof HTMLElement) {
      if (event.target.dataset.resize) {
        resizeHandler(this.$root, event)
      }
      if (event.target.dataset.type === 'cell') {
        if (event.shiftKey === true) {
          const $target = $(event.target)
          this.selection.select($target)
        } else {
          const $target = $(event.target)
          this.selection.select($target)
        }
      }
    }
  }

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
  }
}
