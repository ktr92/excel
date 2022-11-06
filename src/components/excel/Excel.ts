import {ExcelComponent} from 'src/core/ExcelComponent'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor = new (...args: any) => ExcelComponent

type ExcelArray = Array<Constructor>

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
    const $root = document.createElement('div')
    $root.classList.add(this.className)

    this.components.forEach(Component => {
      const $el = document.createElement('div')
      const component = new Component($el)
      $el.classList.add(component.className)
      $el.innerHTML = component.toHTML()
      $root.append($el)
    })

    return $root
  }

  public render() {
    this.$el.append(this.getRoot())
  }
}
