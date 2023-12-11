import { api } from 'boot/axios'

export default async function visitanteDeletarService (id: number): Promise<void> {
  try {
    await api.delete(`visitante/deletar/${id}`)
  } catch (error) {
    console.log(error)
  }
}
