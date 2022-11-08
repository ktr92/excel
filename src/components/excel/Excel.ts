import {ExcelComponent} from 'src/core/ExcelComponent'
import {$} from 'src/core/dom'

type ExcelArray = Array<Constructor>

interface Constructor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any): ExcelComponent,
  className: string
}

interface ExcelOptions {
  components: ExcelArray
}

export class Excel {
  className = 'excel'
  private $el: HTMLElement
  private components: ExcelArray
  constructor(
    private selector: string,
    private options: ExcelOptions
  ) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }

  private getRoot() {
    const $root = $.create('div', 'excel')

    this.components.forEach(Component => {
      // eslint-disable-next-line max-len
      const $el = $.create('div', Component.className)
      const component = new Component($el)
      $el.innerHTML = component.toHTML()
      $root.append($el)
    })

    return $root
  }

  public render() {
    this.$el.append(this.getRoot())
  }
}
