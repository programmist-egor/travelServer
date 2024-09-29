import ChatSupportModel from "../models/chat-support-model.js";

class ChatSupportService {
    async getAllUsers() {
        try {
            const users = await ChatSupportModel.findAll();
            return { success: true, data: users };
        } catch (error) {
            console.error("Error in getAllRatingObject:", error);
            return { success: false, error: "Failed to get ratings" };
        }
    }
    async getMsgUser(userId) {
        try {
            const user = await ChatSupportModel.findOne({ where: {  userId } });

            if (user) {
                return { success: true, data: user };
            } else {
                return { success: false, error: "Пользователь не найден" };
            }
        } catch (error) {
            console.error("Ошибка в getMsgUser:", error);
            return { success: false, error: "Не удалось получить данные пользователя" };
        }
    }
    async viewMessage(userId) {
        try {
            const user = await ChatSupportModel.update({ newMsgUser: 0 }, { where: {userId: userId} });
            return { success: true, data: user };
        } catch (error) {
            console.error("Error in getAllRatingObject:", error);
            return { success: false, error: "Failed to get ratings" };
        }
    }
    async saveMessage(userId, msg) {
        try {
            const res = await ChatSupportModel.findOne({ where: {  userId } });
            const newMsgSupport = res.dataValues.newMsgSupport
            const user = await ChatSupportModel.update({ messages: msg, newMsgSupport: newMsgSupport + 1 }, { where: { userId} });
            return { success: true, data: user };
        } catch (error) {
            console.error("Error in saveMessage:", error);
            return { success: false, error: "Failed to update messages" };
        }
    }
    async newDialogue(dialogue) {
        try {
            await ChatSupportModel.create(dialogue);
            return { success: true, message: "Dialogue created successfully" };
        } catch (error) {
            console.error("Error in createRatingObject:", error);
            return { success: false, error: "Failed to create rating" };
        }
    }
    async deleteDialogue(userId) {
        try {
            const msg = JSON.stringify([])
            await ChatSupportModel.update(msg, {where: {userId: userId}});
            return { success: true, message: "Dialogue  delete successfully" };
        } catch (error) {
            console.error("Error in createRatingObject:", error);
            return { success: false, error: "Failed to create rating" };
        }
    }
}

export default new ChatSupportService()


