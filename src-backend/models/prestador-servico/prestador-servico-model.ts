import { IPrestadorServico } from '../../interfaces/prestador-servico/prestador-servico-interface'
import { db } from '../../util/db'
import { DataTypes } from 'sequelize'

const tabela = 'prestador_servico'

export const PrestadorServicoModel = db.define<any, IPrestadorServico>(
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
    servico: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    empresa: {
      type: DataTypes.TEXT
    },
    data_entrada: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: new Date()
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
