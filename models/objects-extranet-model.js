import { DataTypes } from 'sequelize';
import {sequelizeExtranet} from '../config/db-connect.js';


const ObjectsExtranet = sequelizeExtranet.define('Objects-Extranet', {
    idTable: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    hotelId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    note: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    emailGuest: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    property_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    typeObj: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    countNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    stars: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    last_price_info: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    distance: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    metro: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    status: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    propertyRules: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    political_cancel: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    nutrition: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    shortFacilities: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    minimumNightStay: {
        type: DataTypes.INTEGER,
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
    location: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    district: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default ObjectsExtranet;