import { IPrestadorServico } from '../../interfaces/prestador-servico/prestador-servico-interface'
import { db } from '../../util/db'
import { DataTypes, Sequelize } from 'sequelize'

const tabela = 'prestador_servico'

export const PrestadorServicoModel = db.define<any, IPrestadorServico>(
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
    apartamento: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bloco: {
      type: DataTypes.STRING,
      allowNull: false
    },
    garagem: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    vaga: {
      type: DataTypes.STRING
    },
    servico: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
    empresa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contato: {
      type: DataTypes.STRING
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    complemento: {
      type: DataTypes.STRING
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pais: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data_entrada: {
      type: DataTypes.DATE,
      allowNull: false
    },
    data_saida: {
      type: DataTypes.DATE,
      allowNull: false
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
