export abstract class DomListener {
  constructor(public $root: HTMLElement) {
    if (!$root) {
      throw new Error('No $root provided for DomListenter');
    }
  }
}
