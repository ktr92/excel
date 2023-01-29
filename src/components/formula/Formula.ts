/* eslint-disable @typescript-eslint/no-explicit-any */
import {ExcelComponent} from '../../core/ExcelComponent';
import {Dom} from '../../core/dom'

export class Formula extends ExcelComponent {
  constructor($root: Dom, options: any) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      ...options
    })
  }

  static className = 'excel__formula'

  init() {
    this.$on('table:typing', (text:string) => {
      this.$root.find('.input').text(text)
    })
  }

  onInput(e: any) {
    const text = e.target.textContent.trim()
    this.$emit('formula:typing', text)
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }

  onKeydown(event: KeyboardEvent) {
    const {key} = event
    switch (key) {
      case 'Enter':
        event.preventDefault()
        this.$emit('formula:done')
        break
    }
  }
}
