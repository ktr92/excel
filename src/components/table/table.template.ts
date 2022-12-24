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

function toCell(_: never, col: number):string {
  return `<div class="cell" data-col="${col}" contenteditable></div>`
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

  for (let i = 0; i < rowsCount; i++) {
    const cells: string = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('')
    rows.push(createRow(cells, (i + 1).toString()))
  }

  return rows.join('')
}
