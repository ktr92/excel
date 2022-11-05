import {ExcelComponent} from 'src/core/ExcelComponent'

type ExcelClass = new () => ExcelComponent

interface ExcelOptions<ExcelClass> {
  components: Array<ExcelClass>
}

export class Excel {
  private $el: HTMLElement
  private components: ExcelClass[]
  constructor(
    private selector: string,
    private options: ExcelOptions<ExcelClass>
  ) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }

  private getRoot() {
    const $root = document.createElement('div')

    this.components.forEach(Component => {
      const component = new Component()
      $root.insertAdjacentHTML('beforeend', component.toHTML())
    })

    return $root
  }

  public render() {
    this.$el.append(this.getRoot())
  }
}
