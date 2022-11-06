import {DomListener} from './DomListener';

export abstract class ExcelComponent extends DomListener {
  className: string
  toHTML(): string {
    return ''
  }
}
