import { ITipoUsuario } from '../../interfaces/tipo-usuario/tipo-usuario-interface'
import { db } from '../../util/db'
import { DataTypes } from 'sequelize'

const tabela = 'tipo_usuario'

export const TipoUsuarioModel = db.define<any, ITipoUsuario>(
  tabela, {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true
    },
    role: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false
    },
    data_criacao: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: new Date()
    },
    data_edicao: {
      type: DataTypes.TEXT
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
)
