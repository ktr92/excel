/* eslint-disable @typescript-eslint/no-explicit-any */
type tSelector = string | HTMLElement | Element
 interface IStyle {
  [key: string]: string | number,
  width?: string,
  height?: string,
  opacity?: number,
  right?: string,
  bottom?: string
}
export interface ICell {
  row: number,
  col: number
}
// Class for work at DOM
export class Dom {
  $el: HTMLElement | Element
  constructor(selector: tSelector) {
    this.$el = typeof selector === 'string' ?
    document.querySelector(selector) :
    selector
  }
  // set or get element's HTML
  html(html?: string): Dom | string {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.outerHTML.trim()
  }

  text(text?: string) {
    if (typeof text === 'string') {
      this.$el.textContent = text
      return this
    }
    if (this.$el.tagName.toLocaleLowerCase() === 'input') {
      return (this.$el as HTMLInputElement).value.trim()
    }

    return this.$el.textContent.trim()
  }

  clear() {
    this.html('')
    return this
  }

  on(eventType: string, callback: (ev: Event) => any) {
    this.$el.addEventListener(eventType, callback)
  }
  off(eventType: string, callback: (ev: Event) => any) {
    this.$el.removeEventListener(eventType, callback)
  }

  append(node: Dom | Element) {
    if (node instanceof Dom) {
      node = node.$el
    }
    this.$el.append(node)
    /* if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    } */

    return this
  }

  closest(selector: string): Dom {
    return $(this.$el.closest(selector))
  }

  getCoords() {
    return this.$el.getBoundingClientRect()
  }

  findAll(selector: string) {
    return this.$el.querySelectorAll(selector)
  }
  find(selector: string) {
    return $(this.$el.querySelector(selector))
  }

  css(styles: IStyle) {
    Object
        .keys(styles)
        .forEach((key: string) => (this.$el as HTMLElement).style[key] = styles[key])
  }

  addClass(className: string) {
    this.$el.classList.add(className)
  }
  removeClass(className: string) {
    this.$el.classList.remove(className)
  }

  id(): string {
    return (this.$el as HTMLElement).dataset.id
  }

  focus() {
    (this.$el as HTMLElement).focus()
    return this
  }

  idCell(): ICell {
    const parsed = (this.id() as string).split(':')
    const cell: ICell = {
      row: +parsed[0],
      col: +parsed[1]
    }
    return cell
  }

  get data() {
    return (this.$el as HTMLElement).dataset
  }
}

export function $(selector: tSelector) {
  return new Dom(selector)
}

// create new element with specific classes
$.create = (tagName: string, classes=''): Dom => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }

  return $(el)
}
