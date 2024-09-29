import { DataTypes } from 'sequelize';
import {sequelizeExtranet} from '../config/db-connect.js';


const SettingPageObject = sequelizeExtranet.define('Setting-Page-Object', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    checkIn: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    checkOut: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dataRange: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    guest: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    location: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default SettingPageObject;