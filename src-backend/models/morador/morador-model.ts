import { IMorador } from '../../interfaces/morador/morador-interface'
import { db } from '../../util/db'
import { DataTypes } from 'sequelize'

const tabela = 'morador'

export const MoradorModel = db.define<any, IMorador>(
  tabela, {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    apartamento: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bloco: {
      type: DataTypes.TEXT
    },
    telefone: {
      type: DataTypes.TEXT
    },
    email: {
      type: DataTypes.TEXT,
      unique: true
    },
    garagem: {
      type: DataTypes.TEXT
    },
    vaga: {
      type: DataTypes.TEXT
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
