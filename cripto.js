const CryptoJS = require("crypto-js");

const secretKey = "batatinhafrita";

function encrypt(text) {
    return CryptoJS.AES.encrypt(text, secretKey).toString();
}

function decrypt(encryptedText) {
    const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}

const mensagem = "Texto confidencial";
const encryptedMessage = encrypt(mensagem);
const decryptedMessage = decrypt(encryptedMessage);

console.log("Texto original:", mensagem);
console.log("Texto criptografado:", encryptedMessage);
console.log("Texto descriptografado:", decryptedMessage);