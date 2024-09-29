import { DataTypes } from 'sequelize';
import {sequelizeExtranet} from '../config/db-connect.js';


const UsersCorp = sequelizeExtranet.define('Users-Corp', {
    idTable: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    jobTitle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nameCompany: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cityCompany: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    note: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    isActivated: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    isConfirmPhone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    codeConfirmForPhone: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    twoStepVerification: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    twoStepVerificationType: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    activationCodeEmail: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    currency: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    language: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bookingList: {
        type: DataTypes.JSON,
        allowNull: true,
    },
    companyDetails: {
        type: DataTypes.JSON,
        allowNull: true,
    },
    accountDetails: {
        type: DataTypes.JSON,
        allowNull: true,
    },
});

export default UsersCorp;