const util    = require('util'),
      Promise = require("bluebird");

const Pool = require('../pool')      
const sql1 ="update User set lastlogin = now() where uid='user1'";
const sql2 ="update User set lastlogin = now() where uid='user2'";
const pool = new Pool();


    exxcute( conn =>{

        Promise.all([
            conn.queryAsync(sql1),
            conn.queryAsync(sql2)
        ]).then( r =>{
            for (let i=0; i < r.length; i++ )
                util.log(`sql${i+1}=`,r[i].affectedRows);
                conn.commit();
                pool.end();
        }).catch( e =>{
            conn.rollback();
            pool.end();
        }); 

    }); 

    function exxcute(fn){
        Promise.using( pool.connect(), conn =>{
            conn.beginTransaction( teerr=>{

                fn(conn);

            });
        });
    }

    // 위 트랜잭션 모듈화 ..

    // Promise.using( pool.connect(), conn => {
    //     conn.beginTransaction( txerr =>{

    //         Promise.all([
    //             conn.queryAsync(sql1),
    //             conn.queryAsync(sql2)
    //         ]).then( r =>{
    //             for (let i=0; i < r.length; i++ )
    //                 util.log(`sql${i+1}=`,r[i].affectedRows);
    //                 conn.commit();
    //                 pool.end();
    //         }).catch( e =>{
    //             conn.rollback();
    //             pool.end();
    //         });

    //     })
    // });
    
    
    // 2개 쿼리 한번에 (트랙잭션 없음)
    // Promise.using( pool.connect(), conn => {
    //     Promise.all([
    //     conn.queryAsync(sql1),
    //     conn.queryAsync(sql2)
    
    //     ]).then( r => {
    //         util.log("End of Then!!!!!!!!!!!!!!!!!!!");
    //         util.log("sql1=", r[0].affectedRows);
    //         util.log("sql2=", r[1].affectedRows);
    //         pool.end();
    //     }).catch(err=>{
    //        util.log(err);
    //        pool.end();
    //     });
    // });
  
    // Promise.using( pool.connect(), conn =>{
    //     conn.queryAsync(sql1)
    //         .then( console.log)
    //         .catch( err =>{
    //             console.log(err);
    //         });
    //     pool.end();
    // });

    // Promise.using( pool.connect(), conn => {
    //     conn.queryAsync(sql1, (err, ret) => {
    //         util.log("sql1=", ret.affectedRows);
    //     });
    //     pool.end()
    // });              