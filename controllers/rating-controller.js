import ApiError from "../exceptions/api-error.js";
import RatingService from "../service/rating-service.js";


class RatingController {
    async getAllRatingObject(req, res, next) {
        const hotelId = req.params.hotelId;
        try {
            if (!hotelId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await RatingService.getAllRatingObject(hotelId)
            return res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async getOneReviewUser(req, res, next) {
        const bookingId = req.params.bookingId;
        try {
            if (!bookingId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await RatingService.getOneReviewUser(bookingId)
            return res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async checkRatingObject(req, res, next) {
        const userId = req.params.userId;
        const {hotelId} = req.body;
        try {
            if (!userId && !hotelId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await RatingService.checkRatingObject(userId, hotelId)
            return res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async getAllCityRatingObject(req, res, next) {
        const city = req.params.city;
        try {
            if (!city) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await RatingService.getAllCityRatingObject(city)
            return res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async createRatingObject(req, res, next) {
        try {
            const {rating, hotelId} = req.body;
            console.log("rating",rating);
            if (!rating && !hotelId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await RatingService.createRatingObject(rating, hotelId)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }

}

export default new RatingController()