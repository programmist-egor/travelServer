import {DataTypes} from 'sequelize';
import {sequelizeExtranet} from '../config/db-connect.js';


const Rating = sequelizeExtranet.define('Rating', {
    idTable: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    bookingId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hotelId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cleanliness: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mood: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    timelyCheckIn: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    priceQuality: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    photoMatch: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    qualityService: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dignity: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    flaws: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Rating;