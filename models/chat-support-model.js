import { DataTypes } from 'sequelize';
import { sequelizeExtranet } from '../config/db-connect.js';


const ChatSupportModel = sequelizeExtranet.define('Chat-Support-Yooking', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    messages: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    newMsgSupport: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    newMsgUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING
    }
});


// Указываем, что внешний ключ 'userId' модели TokenModelExtranet соответствует полю 'id' модели Users-Extranet

export default ChatSupportModel;