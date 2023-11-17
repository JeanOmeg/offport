import { IVisitante } from '../../interfaces/visitante/visitante-interface'
import { db } from '../../util/db'
import { DataTypes, Sequelize } from 'sequelize'

const tabela = 'visitante'

export const VisitanteModel = db.define<any, IVisitante>(
  tabela, {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      allowNull: false,
      defaultValue: Sequelize.literal('uuid_generate_v4()')
    },
    id_condominio: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'condominio',
        key: 'id'
      }
    },
    id_usuario: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id'
      }
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    documento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contato: {
      type: DataTypes.STRING,
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
      type: DataTypes.STRING
    },
    data_entrada: {
      type: DataTypes.DATE,
      allowNull: false
    },
    data_saida: {
      type: DataTypes.DATE
    },
    observacao: {
      type: DataTypes.STRING(5000)
    },
    data_criacao: {
      type: DataTypes.DATE,
      allowNull: false
    },
    data_edicao: {
      type: DataTypes.DATE
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
)
