import CardBank from "../models/card-bank-model.js";
import {encrypt} from "../utils/encryption.js";

class CardBankService {
    async initCardHandler(id) {
        try {
            const cards = await CardBank.findAll({where: {userId: id}});
            console.log("cards", cards);
            return { success: true, data: cards };
        } catch (error) {
            console.error("Error in getAllRatingObject:", error);
            return { success: false, error: "Failed to get ratings" };
        }
    }
    async addCardHandler(data) {
        const { cardNumber, userId, date, cardName, previewCard, cardHolder, expiryDate, cvc } = data;
        try {
            // Зашифровываем номер карты и CVC
            const encryptedCardNumber = encrypt(cardNumber);
            const encryptedCVC = encrypt(cvc);

            // Проверка на уникальность номера карты
            const existingCard = await CardBank.findOne({ where: { cardNumber: encryptedCardNumber.content } });
            if (existingCard) {
                return { success: false, error: "Card with this number already exists" };
            }

            // Создаем новую карту
            const newCard = await CardBank.create({
                cardNumber: encryptedCardNumber.content,
                cardHolder,
                previewCard,
                cardName: cardName,
                userId: userId,
                date: date,
                expiryDate,
                cvc: encryptedCVC.content,
                iv: encryptedCardNumber.iv // Сохраняем вектор инициализации для расшифровки
            });

            return { success: true, data: newCard };
        } catch (error) {
            console.error("Error in createRatingObject:", error);
            return { success: false, error: "Failed to create card" };
        }
    }


    async updateCardHandler(userId, data) {
        try {
            const cards = await CardBank.findOne({cards: data}, {where: {userId: userId}});
            console.log("cards",cards);
            return { success: true, data: cards };
        } catch (error) {
            console.error("Error in getAllRatingObject:", error);
            return { success: false, error: "Failed to get ratings" };
        }
    }
    async deleteCardHandler(id) {
        console.log("id",id);
        try {
            // Ищем карту по идентификатору вектора инициализации (IV)
            const card = await CardBank.findOne({ where: { iv: id } });
            console.log("card",card);
            if (!card) {
                // Если карта не найдена, возвращаем ошибку
                return { success: false, message: 'Card not found' };
            }

            // Удаляем найденную карту
            await card.destroy();

            return { success: true, message: 'Card deleted successfully' };
        } catch (error) {
            console.error("Error in deleteCardHandler:", error);
            return { success: false, message: 'Failed to delete card' };
        }
    }

}

export default new CardBankService()


