import { DataTypes } from 'sequelize';
import {sequelizeExtranet} from '../config/db-connect.js';


const PhotoNumberObjectExtranet = sequelizeExtranet.define('Photo-Number-Object-Extranet', {
    idTable: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idImg: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hotelId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numberId: {
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
    nameObject: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preview: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default PhotoNumberObjectExtranet;