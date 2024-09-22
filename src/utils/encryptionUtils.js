import CryptoJS from "crypto-js";

export const encryptNote = (content, password) => {
  return CryptoJS.AES.encrypt(content, password).toString();
};

export const decryptNote = (encryptedContent, password) => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedContent, password);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    return null; // Return null if decryption fails
  }
};
