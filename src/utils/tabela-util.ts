export function dadosParaExibir (): void {
  const div_icone = document.querySelector('div.q-table__bottom.row.items-center.q-table__bottom--nodata') as Element
  if (div_icone) {
    div_icone.classList.add('justify-center', 'text-h6', 'text-bold', 'text-negative')
  } else {
    const dados_cadastrados = document.querySelector('#q-app > div > div.q-page-container > main > div > div.q-card__section.q-card__section--vert.row.items-center.justify-center.q-pa-none.q-mb-sm > div > div.q-table__bottom.row.items-center.justify-end') as Element
    dados_cadastrados.removeChild(dados_cadastrados.firstChild as ChildNode)
    dados_cadastrados.classList.add('text-h6', 'text-primary')
  }
}

export function getPaginationLabel (_firstRowIndex: number, _endRowIndex: number, totalRowsNumber: number): string {
  return `Dados Cadastrados - ${totalRowsNumber}`
}
