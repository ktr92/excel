import {ExcelComponent} from '../../core/ExcelComponent';
import {Dom} from '../../core/dom'

export class Header extends ExcelComponent {
  constructor($root: Dom, options: any) {
    super($root, {
      name: 'Header',
      ...options
    })
  }

  static className = 'excel__header'
  onInput() {
    console.log(this)
  }
  onClick() {
    console.log(this)
  }

  toHTML() {
    return `
      <input type="text" class="input" value="Новая таблица" />

      <div>

        <div class="button">
          <i class="material-icons">delete</i>
        </div>

        <div class="button">
          <i class="material-icons">exit_to_app</i>
        </div>

      </div>
    `
  }
}
