import { DataTypes } from 'sequelize';
import {sequelizeExtranet} from '../config/db-connect.js';


const CategoryNumbersExtranet = sequelizeExtranet.define('Category-Numbers-Extranet', {
    idTable: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    hotelId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sale: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    countNumbers: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

export default CategoryNumbersExtranet;