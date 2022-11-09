// Class for work at DOM
export class Dom {
  private $el
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

  append(node: Dom | Element) {
    if (node instanceof Dom) {
      node = node.$el
    }

    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }

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
