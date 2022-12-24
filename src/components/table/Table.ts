/* eslint-disable @typescript-eslint/no-unused-vars */
import {ExcelComponent} from '../../core/ExcelComponent';
import {Dom} from '../../core/dom'
import {createTable} from './table.template';
import {resizeHandler} from './table.resize';

export class Table extends ExcelComponent {
  constructor($root: Dom) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown']
    })
  }

  static className = 'excel__table'
  onClick() {
    console.log('click')
  }

  onMousedown(event: Event) {
    if (event.target instanceof HTMLElement) {
      if (event.target.dataset.resize) {
        resizeHandler(this.$root, event)
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
}
