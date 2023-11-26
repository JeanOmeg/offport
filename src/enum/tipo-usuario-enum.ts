export enum ETipoUsuario {
  controlador = 1,
  sindico = 2,
  administrador = 3
}

export const lista_tipo_usuario_enum = [
  { value: ETipoUsuario.controlador, label: 'Controlador', ordem: 1 },
  { value: ETipoUsuario.sindico, label: 'Síndico', ordem: 2 },
  { value: ETipoUsuario.administrador, label: 'Administrador', ordem: 3 }
]
