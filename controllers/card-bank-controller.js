import ApiError from "../exceptions/api-error.js";
import CardBankService from "../service/card-bank-service.js";


class CardBankController {
    async initCardHandler(req, res, next) {
        const id = req.params.id;
        try {
            if (!id) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await CardBankService.initCardHandler(id)
            return res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async addCardHandler(req, res, next) {
        try {
            const {data} = req.body;
            console.log("data",data);
            if (!data) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const card = await CardBankService.addCardHandler(data)
            res.json(card)
        } catch (error) {
            next(error);
        }
    }
    async updateCardHandler(req, res, next) {
        const userId = req.params.userId;
        const {hotelId} = req.body;
        try {
            if (!userId && !hotelId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await CardBankService.updateCardHandler(userId, hotelId)
            return res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async deleteCardHandler(req, res, next) {
        const id = req.params.id;
        try {
            if (!id) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await CardBankService.deleteCardHandler(id)
            return res.json(data)
        } catch (error) {
            next(error);
        }
    }


}

export default new CardBankController()