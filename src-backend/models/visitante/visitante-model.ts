import { IVisitante } from '../../interfaces/visitante/visitante-interface'
import { db } from '../../util/db'
import { DataTypes } from 'sequelize'

const tabela = 'visitante'

export const VisitanteModel = db.define<any, IVisitante>(
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
    documento: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    morador: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    controlador: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    contato: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    apartamento: {
      type: DataTypes.INTEGER
    },
    bloco: {
      type: DataTypes.TEXT
    },
    garagem: {
      type: DataTypes.TEXT
    },
    vaga: {
      type: DataTypes.TEXT
    },
    data_entrada: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    data_saida: {
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
