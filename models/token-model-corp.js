// Token Model
import { DataTypes } from 'sequelize';
import { sequelizeExtranet } from '../config/db-connect.js';
import UsersCorp from "./users-corp-model.js";

const TokenModel = sequelizeExtranet.define('Token-Model-Corp', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    refreshToken: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

TokenModel.belongsTo(UsersCorp, { foreignKey: 'idTable' });
// Указываем, что внешний ключ 'userId' модели TokenModelExtranet соответствует полю 'id' модели Users-Extranet

export default TokenModel;