const CODES = {
  A: 65,
  Z: 90
}

function toColumn(col: string) {
  return `
    <div class="column">${col}</div>
  `
}

function toCell():string {
  return `<div class="cell" contenteditable></div>`
}

function createRow(content: string, index?: string) {
  return `
    <div class="row">
      <div class="row-info">${index || ''}</div>
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
