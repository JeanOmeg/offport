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
    id_condominio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'condominio',
        key: 'id'
      }
    },
    id_morador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'morador',
        key: 'id'
      }
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
      type: DataTypes.BOOLEAN
    },
    vaga: {
      type: DataTypes.TEXT
    },
    data_entrada: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: new Date().toLocaleString()
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
