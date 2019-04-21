const Mydb = require('./mydb');

module.exports = function(app,pool){

    app.get('/', (req, res) => {
        //res.send("Hello NodeJS!! 한글테스트");
        //res.json(testJson)
        // view ejs 
        res.render('index', {name: '홍길동'});
    });
    
    app.get('/test/:email', (req, res) => {
        testJson.email = req.params.email;  // cf. req.body, req.query
        testJson.qs = req.query.qs;
        res.json(testJson);
    });
    
    app.put('/apis/replies/:bno/:rno', (req, res) => {
        let bno = req.params.bno,
            rno = req.params.rno,
            replytext= req.body.replytext;
        let mydb = new Mydb(pool);
        mydb.executeTx( conn =>{
            conn.query("update Reply set replyText = ? where rno = ? ", [replytext,rno],(err,ret) =>{
                if( err){
                    conn.rollback();
                    throw err;
                }
                res.json(ret.affectedRows);
                conn.commit();
            });
        });    
    
    });
    
    
    app.get('/apis/replies/:bno', (req, res) => {
        let bno = req.params.bno;
        let mydb = new Mydb(pool);
        mydb.execute( conn =>{
            conn.query("select * from Reply where bno=? limit 10", [bno],(err,ret) =>{
                res.json(ret);
            });
        });    
    
    });
    
    
    // 싱글톤 pool Test http://localhost:7000/dbtest/user1
    app.get('/dbtest/:user', (req,res)=>{
        let user = req.params.user;
        let mydb = new Mydb(pool);
        mydb.execute( conn =>{
            conn.query("select * from User where uid=?", [user],(err,ret) =>{
                res.json(ret);
            });
        });
    });
    

}