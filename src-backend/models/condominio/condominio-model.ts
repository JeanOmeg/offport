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
    contato_condominio: {
      type: DataTypes.TEXT,
      allowNull: false
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
      type: DataTypes.INTEGER,
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
    tipo: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: 'Residencial'
    },
    apartamentos: {
      type: DataTypes.INTEGER
    },
    blocos: {
      type: DataTypes.INTEGER
    },
    sindico: {
      type: DataTypes.TEXT
    },
    contato_sindico: {
      type: DataTypes.TEXT
    },
    administradora: {
      type: DataTypes.TEXT
    },
    contato_administradora: {
      type: DataTypes.TEXT
    },
    seguranca: {
      type: DataTypes.TEXT
    },
    contato_seguranca: {
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
