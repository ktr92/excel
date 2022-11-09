/* eslint-disable @typescript-eslint/no-empty-function */
export abstract class DomListener {
  constructor(public $root: HTMLElement, public listeners: Array<string>) {
    if (!$root) {
      throw new Error('No $root provided for DomListenter');
    }
  }

  initDOMListeners(): void {}

  removeDOMListeners(): void {}
}
