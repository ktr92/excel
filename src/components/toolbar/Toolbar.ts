import {ExcelComponent} from '../../core/ExcelComponent';
import {Dom} from '../../core/dom'

export class Toolbar extends ExcelComponent {
  constructor($root: Dom) {
    super($root, {
      name: 'Toolbar',
      listeners: ['input']
    })
  }

  static className = 'excel__toolbar'
  onInput() {
    console.log(this)
  }
  onClick() {
    console.log(this)
  }

  toHTML() {
    return `
      <div class="button">
        <i class="material-icons">format_align_left</i>
      </div>

      <div class="button">
        <i class="material-icons">format_align_center</i>
      </div>

      <div class="button">
        <i class="material-icons">format_align_right</i>
      </div>

      <div class="button">
        <i class="material-icons">format_bold</i>
      </div>

      <div class="button">
        <i class="material-icons">format_italic</i>
      </div>

      <div class="button">
        <i class="material-icons">format_underlined</i>
      </div>
    `
  }
}
