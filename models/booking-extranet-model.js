import { DataTypes } from 'sequelize';
import {sequelizeExtranet} from '../config/db-connect.js';


const BookingExtranet = sequelizeExtranet.define('Booking-Extranet', {
    idTable: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    review:{
        type: DataTypes.JSON,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numberId: {
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
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    note: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    nameObject: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nameNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    checkInTime: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    checkOutTime: {
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
    guestCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    guest: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    amount: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    priceNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    typePayment: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    prepayment: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default BookingExtranet;