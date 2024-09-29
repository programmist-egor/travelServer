import SettingPageObject from "../models/setting-page-object-model.js";


class SettingPageService {
    async getSettingPage() {
        return await SettingPageObject.findAll()
    }
}

export default new SettingPageService()