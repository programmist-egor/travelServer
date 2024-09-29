import ApiError from "../exceptions/api-error.js";
import ChatSupportService from "../service/chat-support-service.js";


class ChatSupportController {
    async getAllUsers(req, res, next) {
        try {
            const data = await ChatSupportService.getAllUsers()
            return res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async getMsgUser(req, res, next) {

        const userId = req.params.userId;
        console.log("userId",userId);
        try {
            const data = await ChatSupportService.getMsgUser(userId)
            return res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async viewMessage(req, res, next) {
        const userId = req.params.userId;
        try {
            if (!userId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await ChatSupportService.viewMessage(userId)
            return res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async saveMessage(req, res, next) {
        const userId = req.params.userId;
        const {msg} = req.body;
        try {
            if (!userId && !msg) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await ChatSupportService.saveMessage(userId, msg)
            return res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async newDialogue(req, res, next) {
        try {
            const {dialogue} = req.body;
            if (!dialogue) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await ChatSupportService.newDialogue(dialogue)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async deleteDialogue(req, res, next) {
        try {
            const userId = req.params.userId;
            if (!userId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await ChatSupportService.deleteDialogue(userId)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }

}

export default new ChatSupportController()