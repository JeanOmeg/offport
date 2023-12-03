import { IUsuario } from '../../interfaces/usuario/usuario-interface'
import { db } from '../../util/db'
import { DataTypes } from 'sequelize'

const tabela = 'usuario'

export const UsuarioModel = db.define<any, IUsuario>(
  tabela, {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true
    },
    id_tipo_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipo_usuario',
        key: 'id'
      }
    },
    nome: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    login: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    senha: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    telefone: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    endereco: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bairro: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cidade: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    funcao: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: 'Porteiro'
    },
    turno: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    empresa: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    observacao: {
      type: DataTypes.TEXT
    },
    data_criacao: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: new Date().toLocaleString()
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
