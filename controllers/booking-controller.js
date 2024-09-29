import BookingService from "../service/booking-service.js";
import ApiError from "../exceptions/api-error.js";


class BookingController {
    async getAllBooking(req, res, next) {
        try {
            const data = await BookingService.getAllBooking()
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async getBookingArchiveToEmail(req, res, next) {
        try {
            const email = req.params.email
            if (!email) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await BookingService.getBookingArchiveToEmail(email)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async getBookingActiveToId(req, res, next) {
        try {

            const id = req.params.id
            if (!id) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await BookingService.getBookingActiveToId(id)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async getAllBookingByObject(req, res, next) {
        try {
            const hotelId = req.params.hotelId
            if (!hotelId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await BookingService.getAllBookingByObject(hotelId)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async getBooking(req, res, next) {
        try {
            const id = req.params.id
            const data = await BookingService.getBooking(id)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async getBookingReporting(req, res, next) {
        try {
            const id = req.params.id
            const data = await BookingService.getBookingReporting(id)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async createBooking(req, res, next) {
        try {
            const {numberId, dataBooking, dataNumber,userId, updateUser } = req.body;
            if (!numberId && !dataBooking && !dataNumber && !updateUser && !userId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
          const result =  await BookingService.createBooking( numberId, dataBooking, dataNumber, updateUser, userId)
            res.json(result)
        } catch (error) {
            next(error);
        }
    }
    async createBookingCorp(req, res, next) {
        try {
            const {numberId, dataBooking, dataNumber,userId, updateUser } = req.body;
            if (!numberId && !dataBooking && !dataNumber && !updateUser && !userId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const result =  await BookingService.createBookingCorp( numberId, dataBooking, dataNumber, updateUser, userId)
            res.json(result)
        } catch (error) {
            next(error);
        }
    }
    async updateBooking(req, res, next) {
        try {
            const id = req.params.id
            const {numberId, data, dataNumber} = req.body;
            if (!id && !data && !numberId && !dataNumber) {
                return new ApiError.BadRequest("Некорректные данные")
            }
           const result = await BookingService.updateBooking(id, data, numberId, dataNumber)
            res.json(result)
        } catch (error) {
            next(error);
        }
    }

    async deleteBooking(req, res, next) {
        try {
            const id = req.params.id
            const {numberId, dataNumber, userId, userUpdate} = req.body;
            console.log("numberId",numberId)
            console.log("dataNumber",dataNumber)
            console.log("userId",userId)
            console.log("updateUser",userUpdate)
            if (!id && !numberId && !dataNumber && !userId && !userUpdate) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const result =  await BookingService.deleteBooking(id, dataNumber, numberId, userId, userUpdate)
            res.json(result)
        } catch (error) {
            next(error);
        }
    }

}

export default new BookingController()