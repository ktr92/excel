const CODES = {
  A: 65,
  Z: 90
}

function toColumn(col: string, index: number) {
  return `
    <div class="column" data-type="resizable" data-col="${index}">
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `
}
/*
function toCell(row: number, col: number):string {
  return `<div class="cell" data-col="${col}" data-row="${row}" contenteditable></div>`
} */

function toCell(row: number) {
  return function(_: never, col: number):string {
    return `<div class="cell" data-col="${col}" data-id="${row}:${col}" data-type="cell" contenteditable></div>`
  }
}

function createRow(content: string, index?: string) {
  const resize = index
    ? '<div class="row-resize"  data-resize="row"></div>'
    : ''
  return `
    <div class="row"  data-type="resizable">
      <div class="row-info">
        ${index || ''}
        ${resize}
      </div>

      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_: never, index: number): string {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15): string {
  const colsCount = CODES.Z - CODES.A + 1
  const rows: Array<string> = []

  const cols: string = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')

  rows.push(createRow(cols))

  for (let row = 0; row < rowsCount; row++) {
    const cells: string = new Array(colsCount)
        .fill('')
        .map(toCell(row))
        .join('')
    rows.push(createRow(cells, (row + 1).toString()))
  }

  return rows.join('')
}
