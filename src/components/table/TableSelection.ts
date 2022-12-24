import {Dom} from 'src/core/dom'

export class TableSelection {
  static className = 'selected'
  group: Array<Dom>
  constructor() {
    this.group = []
  }

  select($el: Dom): void {
    this.clear()
    this.group.push($el)
    $el.addClass('selected')
  }

  clear() {
    this.group.forEach($el => $el.removeClass(TableSelection.className))
    this.group = []
  }

  /* selectGroup(): void {

  } */
}
