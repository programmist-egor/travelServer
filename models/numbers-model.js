import {sequelizeExtranet} from "../config/db-connect.js";
import {DataTypes} from "sequelize";

const NumberExtranet = sequelizeExtranet.define('Number-Extranet', {
    idTable: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hotelId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    area: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    countBedrooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    has_wifi: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    guestCount: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    priceBase: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    roomAmenitiesOption: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    nutrition: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    freeCancellation: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    isBookable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    bookingList: {
        type: DataTypes.JSON,
        allowNull: true,
    },
});

export default NumberExtranet;