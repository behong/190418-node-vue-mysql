const ogs = require('open-graph-scraper'),
      HashMap =require('hashmap'),
      Crypto = require('crypto-js'),
      SHA256 = ('crypto-js/sha256');

// 암호화 키
const Ekey = "nodevue";

module.exports = {
    makeMap(key,value){
        const map = new HashMap();
        map.set(key,value);
        console.log("key ===", map.get(key))
        return map;
    },
    ogsinfo(url, fn){
        return ogs({url:url},(err,ret) =>{
            fn(err,ret)
        });
    },
    encrypt(data,key){
        return Crypto.AES.encrypt(data,key || Ekey).toString();
        //return Crypto.AES.encrypt(data,key || EKey).toString();
    },
    decrypt(data,key){
        //return Crypto.AES.decrypt(data,key || Ekey).toString();
        return Crypto.AES.decrypt(data,key || Ekey).toString(Crypto.enc.Utf8);
    },
    //단방향 암호화
    encryptSha2(data,key){
        if(!data) return null;
        key = key||Ekey;
        try {
            return Crypto.SHA256(data+key).toString();
        } catch (error) {
            console.error("Error encryptSha2 ::::" , error);
        }
    }
};