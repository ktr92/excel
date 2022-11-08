import {DomListener} from './DomListener';

export abstract class ExcelComponent extends DomListener {
  static className: string
  toHTML(): string {
    return ''
  }
}
