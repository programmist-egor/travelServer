import SettingPageService from "../service/setting-page-service.js";


class SettingPageController {
    async getSettingPage(req, res, next) {
        try {
            console.log("HELLO")
            const data = await SettingPageService.getSettingPage()
            res.json(data);
        } catch (error) {
            next(error);
        }
    }
}

export default new SettingPageController();