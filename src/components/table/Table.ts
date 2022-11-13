import {ExcelComponent} from '../../core/ExcelComponent';
import {Dom} from '../../core/dom'
import {createTable} from './table.template';

export class Table extends ExcelComponent {
  constructor($root: Dom) {
    super($root, {
      name: 'Table',
      listeners: ['input']
    })
  }

  static className = 'excel__table'
  onInput() {
    console.log(this)
  }
  onClick() {
    console.log(this)
  }

  toHTML() {
    return createTable(20)
  }
}
