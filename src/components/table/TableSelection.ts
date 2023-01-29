import {Dom} from 'src/core/dom'

export class TableSelection {
  static className = 'selected'
  group: Array<Dom>
  current: Dom
  constructor() {
    this.group = []
    this.current = null
  }

  select($el: Dom): void {
    this.clear()
    this.current = $el
    this.group.push($el)
    $el.focus().addClass('selected')
  }

  clear() {
    this.group.forEach($el => $el.removeClass(TableSelection.className))
    this.group = []
  }

  selectGroup($group: Array<Dom>): void {
    this.clear()
    this.group = $group
    this.group.forEach($el => $el.addClass(TableSelection.className))
  }
}
