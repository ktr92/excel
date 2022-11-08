class Dom {}

export function $() {
  return new Dom()
}

// create new element with specific classes
$.create = (tagName: string, classes=''): HTMLElement => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }

  return el
}
