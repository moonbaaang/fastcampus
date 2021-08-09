// 지연 함수
function delay(ms:nubmer): Promise<string>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.floor(Math.random()*10)%2 ===0 ){
        resolve('success');
      } else {
        reject('failure');
      }
    }, ms);
  }); 
}

delay(3000)
.then((result:string) => {
  console.log('done promise!' + result);
  })
.catch((error:string) => {
  console.error('fail promise! ' + error);
  });


// 비동기함수
async function main(){
  try {
    const result = await delay(3000); // promise 객체를 반환하는 함수가 있다면 그 함수 앞에 await라는 오퍼레이터만 붙이면 됨
    console.error('done async!' + result);
  } catch(e) {
    console.error('fail async!' + e);
  }
}

main();


