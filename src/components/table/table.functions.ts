import {Dom, ICell} from 'src/core/dom'
import {range} from 'src/core/utils'

export function matrix($target: Dom, $current: Dom) {
  const target: ICell = $target.idCell()
  const current: ICell = $current.idCell()

  const cols = range(current.col, target.col)
  const rows = range(current.row, target.row)

  return cols.reduce((acc, col) => {
    rows.forEach(row => {
      acc.push(`${row}:${col}`)
    })
    return acc
  }, [])
}

export function nextSelector(key: string, {col, row}: ICell): string {
  const MIN_VALUE = 0
  switch (key) {
    case 'Enter':
    case 'ArrowDown':
      row++
      break
    case 'Tab':
    case 'ArrowRight':
      col++
      break
    case 'ArrowLeft':
      col = col - 1 < MIN_VALUE ? MIN_VALUE : col - 1
      break
    case 'ArrowUp':
      row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1
      break
  }

  return `[data-id="${row}:${col}"]`
}
