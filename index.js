const express = require('express'), app = express();

const bodyParser= require('body-parser');

const rest = require('./rest');

const Pool = require('./pool');

const testJson = require('./test/test.json');

const pool = new Pool();
      
app.use(express.static('public'));

app.set('views',__dirname+ '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        
    } else {
        next();
    }
});
    
app.use(bodyParser.json({limit: '10mb'})); 
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

rest(app,pool);

 const server = app.listen(7000, function(){
    console.log("Express's started on port 7000");
});
