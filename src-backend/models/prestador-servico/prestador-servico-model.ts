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
    apartamento: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bloco: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    garagem: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    vaga: {
      type: DataTypes.TEXT
    },
    servico: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    empresa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contato: {
      type: DataTypes.TEXT
    },
    endereco: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    complemento: {
      type: DataTypes.TEXT
    },
    bairro: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cidade: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    estado: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pais: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    data_entrada: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    data_saida: {
      type: DataTypes.TEXT,
      allowNull: false
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
