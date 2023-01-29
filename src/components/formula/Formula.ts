/* eslint-disable @typescript-eslint/no-explicit-any */
import {ExcelComponent} from '../../core/ExcelComponent';
import {Dom} from '../../core/dom'
import {$} from '../../core/dom';

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
    super.init()

    this.$formula = this.$root.find('#formula ')

    this.$on('table:typing', text => {
      this.$formula.text(text)
    })
    this.$on('table:select', text => {
      this.$formula.text(text)
    })
  }

  onInput(e: any) {
    this.$emit('formula:typing', $(e.target).text())
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div id="formula" class="input" contenteditable spellcheck="false"></div>
    `
  }

  onKeydown(event: KeyboardEvent) {
    const {key} = event
    switch (key) {
      case 'Enter':
      case 'Tab':
        event.preventDefault()
        this.$emit('formula:done')
        break
    }
  }
}
