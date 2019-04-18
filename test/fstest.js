// 동기 테스트

const fs = require('fs');
const Util = require('util')
const wrFile = "message.txt";

// 파일 생성 후 읽는 코드( 다 될때까지 아래로 안내려감...)
fs.writeFileSync(wrFile, '하이 Node.js', (err) => {
  if (err) throw err;
  Util.log('The file has been saved!');
});

//따로 빼면 동기처리가 안됨
fs.readFile(wrFile,'utf-8',(err,data) =>{
    if (err) throw err;
    Util.log("생성된 파일 읽기=== " ,data)
})


// sync 없이 생성
// message.txt파일에 Hello Node.js 쓰기 
//const data = new Uint8Array(Buffer.from('Hello Node.js'));
//const wrFile = "message.txt";
// fs.writeFile(wrFile, '하이 Node.js', (err) => {
//   if (err) throw err;
  //여기다 넣으면 동기처리가 되지만...
//   fs.readFile(wrFile,'utf-8',(err,data) =>{
//     if (err) throw err;
//     Util.log("생성된 파일 읽기=== " ,data)
//   })
//   Util.log('The file has been saved!');
// });

