import { ILogin } from '../../interfaces/login/login-interface'
import { db } from '../../util/db'
import { DataTypes, Sequelize } from 'sequelize'

const tabela = 'login'

export const LoginModel = db.define<any, ILogin>(
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
    id_tipo_usuario: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'tipo_usuario',
        key: 'id'
      }
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
    refresh_token: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
    data_criacao: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
)
