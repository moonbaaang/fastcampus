const { enable } = require("colors");


function double(x){
  return x*2;
}

function calcValue(a, b, cb){ // 콜백함수를 통해 결과를 받아야함
  setTimeout(() => {
    cb(a+b);
  }, 1000)
}
const x = double(100);
const y = x;

const r = calcValue(10, 20, (result)=>{
  console.log(result)
}) 

const z = r;

console.log(y)


// promise
// promise한테 넘겨는 이 함수는 누가 호출하나? promise내부에서 promise가 호출, 이때 2개의 함수 인자를 줌
// resolve / reject

const p = new Promise((resolve, reject) => {
  setTimeout(()=> {
    resolve('OK'); // 성공
  }, 2000)
  //reject('fail'); // 실패
})

// 성공 시 p의 then 메소드로 받음
p.then(function(ok){
  console.log('첫번째 성공');
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('두번째 성공')
    }, 3000);
  });
})
.then(function(ok){
  console.log(ok);
})
.catch(function(error){
  console.log(error);
})

// 실패시 catch함수로 받음
