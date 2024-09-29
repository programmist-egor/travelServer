import ApiError from "../exceptions/api-error.js";
import ObjectsExtranet from "../models/objects-extranet-model.js";
import CategoryNumbersExtranet from "../models/category-number-extranet-model.js";
import PhotoObjectExtranet from "../models/photo-object-extranet-model.js";
import PhotoNumberObjectExtranet from "../models/photo-number-object-model.js";
import NumberExtranet from "../models/numbers-model.js";
import {parseJSONPropertiesInArray} from "../utils/json-parse-object.js";
import {literal, Op} from "sequelize";



class ObjectService {
    async getAllObject() {
        const result = await ObjectsExtranet.findAll();
        if (result) {
            return result
        }
    }

    async getObject(hotelId) {
        const result = await ObjectsExtranet.findOne({where: {hotelId: hotelId}});
        if (result) {
            return result
        }
    }
    async getObjectByUserId(userId) {
        const result = await ObjectsExtranet.findAll({where: {userId: userId}});
        if (result) {
            return result
        }
    }
    async searchObject(requestParameters) {
        const { city } = requestParameters;
        try {
            const resultObject= await ObjectsExtranet.findAll({where: {city: city.city}});
            const resultNumbers = await NumberExtranet.findAll({where: {city: city.city}});
            return {resultObject, resultNumbers}; // Возвращаем найденные номера, которые не попадают в диапазон
        } catch (error) {
            console.error("Ошибка при поиске номера:", error);
            throw new Error("Ошибка при создании объекта");
        }
    }

    async updateObject(hotelId, dataObjectSetting) {
        const [updatedRows] = await ObjectsExtranet.update(dataObjectSetting, {where: {hotelId: hotelId}});
        if (updatedRows === 0) {
            throw new ApiError.BadRequest("Нет такого пользователя!");
        }
    }

    async deleteObject(hotelId) {
        await ObjectsExtranet.destroy({where: {hotelId: hotelId}});
        await CategoryNumbersExtranet.destroy({where: {hotelId: hotelId}})
        await PhotoObjectExtranet.destroy({where: {hotelId: hotelId}})
        await PhotoNumberObjectExtranet.destroy({where: {hotelId: hotelId}})
        await NumberExtranet.destroy({where: {hotelId: hotelId}})
    }

}

export default new ObjectService();