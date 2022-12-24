import {DomListener} from './DomListener';
import {Dom} from './dom'

interface DomOptions {
  name: string,
  listeners: Array<string>
}

export abstract class ExcelComponent extends DomListener {
  constructor($root: Dom, options: DomOptions) {
    super($root, options.listeners)
    this.prepare()
  }

  prepare(): void {
    return void 0
  }

  static className: string
  toHTML(): string {
    return ''
  }

  init() {
    this.initDOMListeners()
  }

  destroy() {
    this.removeDOMListeners()
  }
}
