import {ExcelComponent} from 'src/core/ExcelComponent'
import {$, Dom} from 'src/core/dom'

interface Constructor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any): ExcelComponent,
  className: string
}
type ExcelArray = Array<Constructor>
type InstancesArray = Array<ExcelComponent>

interface ExcelOptions {
  components: ExcelArray
}

export class Excel {
  className = 'excel'
  private $el: Dom
  private components: ExcelArray
  private instances: InstancesArray
  constructor(
    private selector: string,
    private options: ExcelOptions
  ) {
    this.$el = $(selector)
    this.components = options.components || []
  }

  private getRoot() {
    const $root = $.create('div', 'excel')

    this.instances = this.components.map(Component => {
      // eslint-disable-next-line max-len
      const $el = $.create('div', Component.className)
      const component = new Component($el)
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })

    return $root
  }

  public render() {
    this.$el.append(this.getRoot())
    this.instances.forEach(component => component.init())
    console.log(this.instances)
  }
}
