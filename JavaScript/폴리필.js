// 트랜스파일러를 이용해 개발(babel, typescript) 
// 기본적으로 브라우저가 지원하지 않는 자바스크립트 코드를 지원할 수 있는 코드로 변환하는 일을 하는게 Babel
// 어떻게? 기존 자바스크립트 코드로 상위 자바스크립트 코드를 대신 구현 > 폴리필

Array.prototype.MyMap = function(cb){
  let arr = [];

  for(let i=0; i<this.length; i++){
    arr.push(cb(this[i], i, this));
  }

  return arr;
}

console.log([1,2,3].MyMap((n) => n*2))

// core-js > 폴리필 API