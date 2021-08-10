// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Iteration_protocols

/*

이터레이터 프로토콜에는 반환값 객체에 next라는 메소드가 있어야함
done과 value 속성이 있어야 함
generater가 이터레이터 프로토콜을 구현하였기 때문

*/

const myIterable = {}

// Symbol > 유일한 값을 만들어내는 용도
myIterable[Symbol.iterator] = function* () {
  let i = 1;
  while(i<=100){
    yield i++;
  }
};

for (const n of myIterable){ // next 를 호출하는 함수가 없는데? > iteration protocol을 준수하기에 next와 value를 참조
  console.log(n);
}