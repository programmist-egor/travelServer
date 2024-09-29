// Token Model
import { DataTypes } from 'sequelize';
import { sequelizeExtranet } from '../config/db-connect.js';
import UsersYooking from "./users-yooking-model.js";

const TokenModel = sequelizeExtranet.define('Token-Model-Yooking', {
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

TokenModel.belongsTo(UsersYooking, { foreignKey: 'idTable' });
// Указываем, что внешний ключ 'userId' модели TokenModelExtranet соответствует полю 'id' модели Users-Extranet

export default TokenModel;