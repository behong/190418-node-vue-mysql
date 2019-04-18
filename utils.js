const ogs = require('open-graph-scraper'),
      HashMap =require('hashmap'),
      Crypto = require('crypto-js'),
      SHA256 = ('crypto-js/sha256');

module.exports = {
    ogsinfo(url, fn){
        return ogs({url:url},(err,ret) =>{
            fn(err,ret)
        });
    }
}      