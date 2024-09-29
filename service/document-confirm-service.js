import DocumentConfirmExtranet from "../models/document-confirm-extranet-model.js";


class DocumentConfirmService {
    async getDocumentConfirm() {
        const result = await DocumentConfirmExtranet.findAll();
        if (result) {
            return result
        }
    }
    async getDocumentConfirmById(hotelId) {
        const result = await DocumentConfirmExtranet.findOne({where: {hotelId: hotelId}});
        if (result) {
            return result
        }
    }
    async getDocumentConfirmByUserId(userId) {
        try {
            const result = await DocumentConfirmExtranet.findOne({ where: { userId: userId } });
            return result || null;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
    async createDocumentConfirm(documentInfo) {
        try {
            const newDocument = await DocumentConfirmExtranet.create(documentInfo);
            return newDocument;
        } catch (error) {
            console.error("Ошибка при создании контракта:", error);
            return null; // Возвращаем null в случае ошибки
        }
    }

    async updateDocumentConfirm(hotelId, documentInfo) {
        const result = await DocumentConfirmExtranet.update(documentInfo, {where: {hotelId: hotelId}});
        return result
    }

    async deleteDocumentConfirm(idDoc) {
        const result = await DocumentConfirmExtranet.destroy({where: {idDoc: idDoc}});
        return result
    }
}

export default new DocumentConfirmService()