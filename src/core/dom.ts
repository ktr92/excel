/* eslint-disable @typescript-eslint/no-explicit-any */

// Class for work at DOM
export class Dom {
  private $el: HTMLElement
  constructor(selector: string | HTMLElement) {
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
}

export function $(selector: string | HTMLElement) {
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
