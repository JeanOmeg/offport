import { IUsuario } from '../../interfaces/usuario/usuario-interface'
import { db } from '../../util/db'
import { DataTypes } from 'sequelize'

const tabela = 'usuario'

export const UsuarioModel = db.define<any, IUsuario>(
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
      references: {
        model: 'condominio',
        key: 'id'
      }
    },
    id_tipo_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipo_usuario',
        key: 'id'
      }
    },
    nome: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    login: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    senha: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    telefone: {
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
    funcao: {
      type: DataTypes.TEXT
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
