import { ICondominio } from '../../interfaces/condominio/condominio-interface'
import { db } from '../../util/db'
import { DataTypes } from 'sequelize'

const tabela = 'condominio'

export const CondominioModel = db.define<any, ICondominio>(
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
    endereco: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bairro: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cidade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tipo: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: 'Residencial'
    },
    qtd_apartamento: {
      type: DataTypes.INTEGER
    },
    qtd_bloco: {
      type: DataTypes.INTEGER
    },
    garagem: {
      type: DataTypes.TEXT
    },
    qtd_vaga: {
      type: DataTypes.INTEGER
    },
    sindico: {
      type: DataTypes.TEXT
    },
    telefone_sindico: {
      type: DataTypes.TEXT
    },
    email_sindico: {
      type: DataTypes.TEXT
    },
    telefone_condominio: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email_condominio: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    administradora: {
      type: DataTypes.TEXT
    },
    telefone_administradora: {
      type: DataTypes.TEXT
    },
    email_administradora: {
      type: DataTypes.TEXT
    },
    seguranca: {
      type: DataTypes.TEXT
    },
    telefone_seguranca: {
      type: DataTypes.TEXT
    },
    email_seguranca: {
      type: DataTypes.TEXT
    },
    servicos_gerais: {
      type: DataTypes.TEXT
    },
    telefone_servicos_gerais: {
      type: DataTypes.TEXT
    },
    email_servicos_gerais: {
      type: DataTypes.TEXT
    },
    observacao: {
      type: DataTypes.TEXT
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
