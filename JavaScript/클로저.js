// 1씩 증가하는 값을 호출하는 함수 (함수가 값을 기억하고 있어야함)
let saveNumber = 1;

function increment(){
  return saveNumber++;
}

console.log(increment())
console.log(increment())
console.log(increment())
// 단 saveNumber를 보호하지 못함 > 어디에서든 접근가능



function increment(){
  let saveNumber = 1;
  
  return function(){
    return saveNumber++; // closer공간에 다시 저장
  }
}

const inc = increment();

console.log(inc())
console.log(inc())
console.log(inc())