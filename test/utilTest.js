const util = require('util');
const utils = require('../utils')


return ;

let = map = utils.makeMap('name','hong');
util.log("map>>>>>>>>>>>>>>  ", map.get('name'));

return ;

let str = "NodeJS";
let enc = utils.encrypt(str)
util.log("enc 암호 :",utils.encrypt(enc));
let dec = utils.decrypt(enc)
util.log("dec 복호 :", dec);

util.log("sha256 단방향 암호 :", utils.encryptSha2(str));

return;
// ogs test
let url = "https://www.daum.net";

utils.ogsinfo(url,(err,res) =>{
    util.log(err,res);
});