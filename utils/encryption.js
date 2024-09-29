import crypto from "crypto"
const algorithm = 'aes-256-ctr'; // Симметричный алгоритм шифрования
import secret from "../config/auth-config.js"

// Функция шифрования
export function encrypt(text) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(secret.ENCRYPTOR, 'hex'), iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
}

// Функция расшифровки
export function decrypt(hash) {
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secret.ENCRYPTOR, 'hex'), Buffer.from(hash.iv, 'hex'));
    const decrypted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

    return decrypted.toString();
}
