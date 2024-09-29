import ContractExtranet from "../models/contract-model.js";


class ContractService {
    async getDataContract() {
        const result = await ContractExtranet.findAll();
        if (result) {
            return result
        }
    }
    async getContractById(hotelId) {
        const result = await ContractExtranet.findOne({where: {hotelId: hotelId}});
        if (result) {
            return result
        } else {
            return null
        }
    }
    async getContractByUserId(userId) {
        try {
            const result = await ContractExtranet.findOne({ where: { userId: userId } });
            return result || null;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
    async createContract(contractData) {
        try {
            const newContract = await ContractExtranet.create(contractData);
            return newContract;
        } catch (error) {
            console.error("Ошибка при создании контракта:", error);
            return null; // Возвращаем null в случае ошибки
        }
    }

    async updateContract(hotelId, contractData) {
        const result = await ContractExtranet.update(contractData, {where: {hotelId: hotelId}});
        return result
    }

    async deleteContract(hotelId) {
        const result = await ContractExtranet.destroy({where: {hotelId: hotelId}});
        return result
    }
}

export default new ContractService()