const util = require('util');
const utils = require('../utils')

let url = "https://www.daum.net";

utils.ogsinfo(url,(err,res) =>{
    util.log(err,res);
});