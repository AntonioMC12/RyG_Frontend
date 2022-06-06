import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  constructor() {}
  
  keySize = 256;
  ivSize = 128;
  iterations = 100;
  secretKey = "Secret Password";
  
  encrypt (msg) {
    var salt = CryptoJS.lib.WordArray.random(128/8);
  
    var key = CryptoJS.PBKDF2(this.secretKey, salt, {
        keySize: this.keySize/32,
        iterations: this.iterations
      });
  
    var iv = CryptoJS.lib.WordArray.random(128/8);
  
    var encrypted = CryptoJS.AES.encrypt(msg, key, { 
      iv: iv, 
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
    });
  
    var transitmessage = salt.toString()+ iv.toString() + encrypted.toString();
    return transitmessage;
  }
  
   decrypt (transitmessage) {
    var salt = CryptoJS.enc.Hex.parse(transitmessage.substr(0, 32));
    var iv = CryptoJS.enc.Hex.parse(transitmessage.substr(32, 32))
    var encrypted = transitmessage.substring(64);
  
    var key = CryptoJS.PBKDF2(this.secretKey, salt, {
        keySize: this.keySize/32,
        iterations: this.iterations
      });
  
    var decrypted = CryptoJS.AES.decrypt(encrypted, key, { 
      iv: iv, 
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
  
    })
    var decryptedStr = decrypted.toString(CryptoJS.enc.Utf8);
    return decryptedStr;
  }
  
  /*encrypt(value: string): string {
    console.log(value);
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
    console.log(encrypted.toString());
    return encrypted.toString();
  }

  decrypt(a: string) {
    let textToDecrypt = "FPStVDGTfsiG+9XYUvsuMQ==";
    console.log(textToDecrypt);
    let key = CryptoJS.enc.Utf8.parse(this.secretKey);
    let iv = CryptoJS.enc.Utf8.parse(this.secretKey);
    let decrypted = CryptoJS.AES.decrypt(textToDecrypt, key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    let decryptedStr = decrypted.toString(CryptoJS.enc.Utf8);
    console.log(decryptedStr);
    return decryptedStr;
  }*/
}
