import {$, Dom} from '../../core/dom'

export function resizeHandler($root: Dom, event: Event) {
  if (event.target instanceof HTMLElement) {
    const $resizer = $(event.target)
    const resizer = event.target
    const $parent = $resizer.closest('[data-type="resizable"]')
    const coords = $parent.getCoords()
    const type = resizer.dataset.resize
    const sideProp = type === 'col' ? 'bottom' : 'right'
    let value = '0px'

    $resizer.css({
      'opacity': 1,
      [sideProp]: '-2000px'
    })
    document.onmousemove = e => {
      if (type === 'col') {
        const delta = e.pageX - coords.right
        $resizer.css({
          'right': -delta + 'px'
        })
        value = coords.width + delta + 'px';
      } else {
        const delta = e.pageY - coords.bottom
        $resizer.css({
          'bottom': -delta + 'px'
        })
        value = coords.height + delta + 'px';
      }
    }

    document.onmouseup = () => {
      document.onmousemove = null
      if (type === 'col') {
        $parent.css({'width': value})
        $root.findAll(`[data-col="${$parent.data.col}"]`).forEach(el => (el as HTMLElement).style.width = value)
        $resizer.css({
          'opacity': 0,
          'bottom': '0px',
          'right': '0px'
        })
      } else {
        $parent.css({'height': value})
        $resizer.css({
          'opacity': 0,
          'bottom': '0px',
          'right': '0px'
        })
      }
    }
  }
}
