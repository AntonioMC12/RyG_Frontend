import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  secretKey = 'YourSecretKeyForEncryption&Descryption';
  constructor() {}

  encrypt(value: string): string {
    console.log(CryptoJS.enc.Utf8.parse(this.secretKey));

    let key = CryptoJS.enc.Utf8.parse(this.secretKey);
    let iv = CryptoJS.enc.Utf8.parse(this.secretKey);
    let encrypted = CryptoJS.AES.encrypt(
      CryptoJS.enc.Utf8.parse(value.toString()),
      key,
      {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    );

    return encrypted.toString();
  }

  decrypt(textToDecrypt: string) {
    let key = CryptoJS.enc.Utf8.parse(this.secretKey);
    let iv = CryptoJS.enc.Utf8.parse(this.secretKey);
    let decrypted = CryptoJS.AES.decrypt(textToDecrypt, key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
