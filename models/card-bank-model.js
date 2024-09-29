import {DataTypes} from 'sequelize';
import {sequelizeExtranet} from '../config/db-connect.js';


const CardBank = sequelizeExtranet.define('Card-Bank', {
    idTable: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    iv: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cardName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    previewCard: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cardNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cardHolder: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    expiryDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cvc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default CardBank;