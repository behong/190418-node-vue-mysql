const Mydb = require('./mydb');

module.exports = function(app,pool){

    app.get('/', (req, res) => {
        //res.send("Hello NodeJS!! 한글테스트");
        //res.json(testJson)
        // view ejs 
        res.render('index', {name: '홍길동'});
    });
    //survey
    app.post('/apis/adminkey', (req, res) => {
        let key = req.body.key;
        if( key === '1212' || key === 'surveykey!!!'){
            res.status(200).json();
        }else{
            res.status(403).json();
        }
    });


    app.get('/apis/surveys', (req, res) => {
        let mydb = new Mydb(pool);
        mydb.execute( conn =>{
            conn.query("select * from Survey limit 1000", (err,ret) =>{
                res.json(ret);
            });
        });            
    });

    app.get('/apis/surveys/:id', (req, res) => {
        let id = req.params.id;
        let mydb = new Mydb(pool);
        mydb.execute( conn =>{
            conn.query("select * from Survey where id = ?",[id] ,(err,ret) =>{
                if(err) throw err;
                res.json(ret[0]);
            });
        });            
    });

    app.put('/apis/surveys/:id', (req, res) => {
        let id = req.params.id,
            title = req.body.title,
            state = req.body.state;
        let mydb = new Mydb(pool);
        mydb.executeTx( conn =>{
            conn.query("update Survey set title=? ,state=? where id = ?",[title,state,id] ,(err,ret) =>{
                if( err){
                    conn.rollback();
                    throw err;
                }
                res.json(ret.affectedRows);
                conn.commit();
            });
        });            
    });

    app.post('/apis/surveys', (req, res) => {
        let title = req.body.title
        let mydb = new Mydb(pool);
        mydb.executeTx( conn =>{
            conn.query("insert into Survey(title,state) values(?,0)",[title] ,(err,ret) =>{
                if( err){
                    conn.rollback();
                    throw err;
                }
                res.json(ret.affectedRows);
                conn.commit();
            });
        });            
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