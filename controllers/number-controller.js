import ApiError from "../exceptions/api-error.js";
import NumberService from "../service/number-service.js";


class NumberController {
    async getAllNumbers(req, res, next) {
        try {
            const hotelId = req.params.hotelId;
            if (!hotelId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await NumberService.getAllNumbers(hotelId)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async getAllHotelIdNumbers(req, res, next) {
        try {
            const {hotelIds} = req.body;
            if (!hotelIds) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await NumberService.getAllHotelIdNumbers(hotelIds)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async getNumberById(req, res, next) {
        try {
            const numberId = req.params.numberId;
            if (!numberId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await NumberService.getNumberById(numberId)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async createNumber(req, res, next) {
        try {
            const {dataNumber} = req.body;
            console.log("dataNumber",dataNumber);
            if (!dataNumber) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await NumberService.createNumber(dataNumber)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async updateNumber(req, res, next) {
        try {
            const numberId = req.params.numberId;
            const {dataNumber} = req.body;
            if (!numberId && !dataNumber) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            await NumberService.updateNumber(numberId, dataNumber)
        } catch (error) {
            next(error);
        }
    }
    async deleteNumberById(req, res, next) {
        try {
            const numberId = req.params.numberId;
            const {categoryId} = req.body;
            if (!numberId && !categoryId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
           const data = await NumberService.deleteNumberById(numberId, categoryId)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }

    async deleteNumbersByLastCategory(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await NumberService.deleteNumbersByLastCategory(id)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }

    async deleteAllNumbersByCategory(req, res, next) {
        try {
            const categoryId = req.params.categoryId;
            if (!categoryId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await NumberService.deleteAllNumbersByCategory(categoryId)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async deleteAllNumberByObject(req, res, next) {
        try {
            const hotelId = req.params.hotelId;
            if (!hotelId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await NumberService.deleteAllNumberByObject(hotelId)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }



}

export default new NumberController()