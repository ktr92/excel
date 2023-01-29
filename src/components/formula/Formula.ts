/* eslint-disable @typescript-eslint/no-explicit-any */
import {ExcelComponent} from '../../core/ExcelComponent';
import {Dom} from '../../core/dom'

export class Formula extends ExcelComponent {
  constructor($root: Dom, options: any) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
      ...options
    })
  }

  static className = 'excel__formula'

  onInput(e: any) {
    console.log(e.target.textContent.trim())
  }
  onClick() {
    console.log(this)
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }
}
