import ObjectService from "../service/object-service.js";
import ApiError from "../exceptions/api-error.js";

class ObjectController {
    async getAllObject(req, res, next) {
        try {
            const data = await ObjectService.getAllObject()
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async getObject(req, res, next) {
        try {
            const hotelId = req.params.hotelId
            if(!hotelId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await ObjectService.getObject(hotelId)
            return res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async getObjectByUserId(req, res, next) {
        try {
            const userId = req.params.userId
            if(!userId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await ObjectService.getObjectByUserId(userId)
            return res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async searchObject(req, res, next) {
        try {
            const {requestParameters} = req.body
            if(!requestParameters) {
                return new ApiError.BadRequest("Некорректные данные")
            }
           const data = await ObjectService.searchObject( requestParameters)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async updateObject(req, res, next) {
        try {
            const hotelId = req.params.hotelId
            const {dataObjectSetting} = req.body
            if(!hotelId && !dataObjectSetting) {
               return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await ObjectService.updateObject(hotelId, dataObjectSetting)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async deleteObject(req, res, next) {
        try {
            const hotelId = req.params.hotelId
            if(!hotelId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data =  await ObjectService.deleteObject(hotelId)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }

}

export default new ObjectController()