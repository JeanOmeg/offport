import { ILogin } from '../../interfaces/login/login-interface'
import { db } from '../../util/db'
import { DataTypes } from 'sequelize'

const tabela = 'login'

export const LoginModel = db.define<any, ILogin>(
  tabela, {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true
    },
    id_tipo_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipo_usuario',
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
    login: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    data_criacao: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: new Date().toLocaleString()
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
)
