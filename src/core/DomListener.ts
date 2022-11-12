import {capitalize} from './utils'
import {Dom} from './dom'

export abstract class DomListener {
  constructor(public $root: Dom, public listeners: Array<string>) {
    if (!$root) {
      throw new Error('No $root provided for DomListenter');
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any

  initDOMListeners(): void {
    this.listeners.forEach(listener => {
      const method: string = this.getMethodName(listener)
      if (!this[method]) {
        const name = this.name || ''
        throw new Error(
            `Method ${method} is not implemented in ${name} Component`
        )
      }
      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method])
    })
  }

  removeDOMListeners(): void {
    this.listeners.forEach(listener => {
      const method: string = this.getMethodName(listener)
      this.$root.off(listener, this[method])
    })
  }

  private getMethodName(eventName: string): string {
    return 'on' + capitalize(eventName)
  }
}
