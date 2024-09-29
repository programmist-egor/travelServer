import nodeMailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();




class MailService {
    constructor() {
        this.transporter = nodeMailer.createTransport({
            host: 'smtp.beget.com',
            port: 465,
            secure: true,
            auth: {
                user: "info@yooking.ru",
                pass: "vw4Yn&Zu",
            },
        });
    }

    // Отправка письма с кодом подтверждения на указанный email
    async sendConfirmPhoneCodeMail(to, code) {
        return await this.transporter.sendMail({
            from: "info@yooking.ru",
            to,
            subject: "Код подтверждения ",
            text: "",
            html:
                `
            <div>
                <h1>Код для подтверждения</h1>
                <p>Здравствуйте!</p>
                <p>Поздравляем Вас с регистрацией в EXTRANET.YOOKING.RU!</p>
                <p>Вы получили это письмо, так как ваш email: ${to} был указан при регистрации.</p>
                <p>Скопируйте код и подтвердите Вашу почту.</p>
                <span style="color: #ff6200; font-size: 20px; margin: 20px: font-weight: bold;">${code}</span>
            </div>
            `
        });
    }

    // Отправка письма с кодом подтверждения на указанный email для восстановления пароля
    async sendRestorePasswordEmailCodeMail(to, code) {
        return await this.transporter.sendMail({
            from: "info@yooking.ru",
            to,
            subject: "Восстановление пароля",
            text: "",
            html:
                `
            <div>
                <h1>Код для восстановления пароля</h1>
                <p>Здравствуйте!</p>
                <p>Для восстановления пароля скопируйте код и отправите его для подтверждения Вашей почты</p>
                <span style="color: #ff6200; font-size: 20px; margin: 20px: font-weight: bold;">${code}</span>
            </div>
            `
        });
    }

    // Отправка письма с кодом подтверждения на указанный email для восстановления пароля
    async sendConfirmEmailCodeMail(to, code) {
        return await this.transporter.sendMail({
            from: "info@yooking.ru",
            to,
            subject: "Подтверждение почты",
            text: "",
            html:
                `
            <div>
                <h1>Код для подтверждения почты</h1>
                <p>Здравствуйте!</p>
                <p>Для подтверждения почты скопируйте код и отправите его.</p>
                <span style="color: #ff6200; font-size: 20px; margin: 20px: font-weight: bold;">${code}</span>
            </div>
            `
        });
    }

    // Отправка письма с уведомлением, что пароль поменялся
    async sendRestorePasswordMail(to) {
        return await this.transporter.sendMail({
            from: "info@yooking.ru",
            to,
            subject: "Ваш пароль поменялся",
            text: "",
            html:
                `
            <div>
                <p>Здравствуйте!</p>
                <p>Вы успешно восстановили пароль, теперь снова можете пользоваться нашими сервисами.</p>
            </div>
            `
        });
    }
}

export default new MailService();