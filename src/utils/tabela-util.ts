export function dadosParaExibir () {
  const elemento = document.querySelector('div.q-table__bottom.row.items-center') as Element
  elemento.classList.replace('justify-end', 'justify-start')
  elemento.removeChild(elemento.firstChild as ChildNode)
  elemento.classList.add('text-bold', 'text-subtitle1')
}

export function getPaginationLabel (_firstRowIndex: number, _endRowIndex: number, totalRowsNumber: number): string {
  return `Visitantes Cadastrados - ${totalRowsNumber}`
}
