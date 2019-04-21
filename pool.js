const mysql   = require("mysql"),
      util    = require('util'),
      Promise = require("bluebird");

Promise.promisifyAll(mysql);
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_INFO = {
  host     : '115.71.233.22',
  user     : 'testuser',
  password : 'testuser!@#',
  database : 'testdb',
  multipleStatements: true,
  connectionLimit:5,
  waitForConnections:false
};

//Singleton 접속 커넥션 제어를 위해 싱글톤으로..

module.exports = class {
    constructor(dbinfo) {
      dbinfo = dbinfo || DB_INFO;
      this.pool = mysql.createPool(dbinfo);
    }
  
    connect() {
      //getConnectionAsync 다 사용하고 >> disposer 호출  then..then..
      return this.pool.getConnectionAsync().disposer(conn => {
        return conn.release();
      });
    }
  
    // 메모리에 올라간 pool 해지
    end() {
      this.pool.end( function(err) {
        util.log(">>>>>>>>>>>>>>>>>>>>>>>>>>> End of Pool!!");
        if (err)
          util.log("ERR pool ending!!");
      });
    }
  };
  