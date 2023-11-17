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
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
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
      type: DataTypes.INTEGER
    },
    garagem: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
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
      allowNull: false
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
