import {DomListener} from './DomListener';

interface DomOptions {
  name: string,
  listeners: Array<string>
}

export abstract class ExcelComponent extends DomListener {
  constructor($root: HTMLElement, options: DomOptions) {
    super($root, options.listeners)
  }

  static className: string
  toHTML(): string {
    return ''
  }

  init() {
    this.initDOMListeners()
  }
}
