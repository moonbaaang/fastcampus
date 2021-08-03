// https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions

// 함수 정의문
function myFn(x) {
  return x+100;
}

const result = myFn(100)
//또는 const result = myFn(100, 200, 300) // 함수 호출은 실패하지 않음

console.log(result)

// 익명함수
console.log(function () { 
  return 100
})

// 자바스크립트는 함수를 변수로 넣을 수 있음 (값으로 취급)
// 함수식
const myFnV2 = function () {
  return 100;
};

myFnV2();

// 즉시실행함수
(function (){
  console.log("즉시실행 함수 실행!")
})();

// 함수를 호출하는 절차
// 괄호 열고닫기 / call 이라는 함수를 이용하여 호출 / apply 를 이용해 호출
// 함수가 호출된다는것은 동일
myFnV2();
sum.call(null, 10, 20, 30); // context객체, 인자1, 인자2, 인자3 / 가변인자가 아닌 경우 코드 자체를 변경해야할 수도 있음

sum.apply(null, [10, 20, 30]); // context객체, [인자1, 인자2, 인자3], 배열을 바깥쪽에서 선언하고(arr), arr를 전달해도 됨
const arr = [1,2,3,4,5]
sum.apply(null, arr)

// 가변인자 > 함수에 더 많은 인자를 제출함
function sum(a, b, c) { 
  return a+b+c;
}

const abcSum = sum(10,20,30);


// 유사 배열 (arguments) 고전적인 방법, 단, 문제 발생 
// > sum 함수는 외부에서 보이지 않음 > 가변인자를 처리하는지? 인자를 받지 않는지 판단이 어려움
// > 함수 사용법에 대한 정보를 거의 주지 않음 > 표현이 매우 제한적

function sum(){
  let s = 0;

  for (let i=0; i<arguments.length; i++){
    s = s + arguments[i];
  }
}

// 때문에 대안이 생김 > Rest Parameter (전개 파라미터)
// 가변인자를 사용한다는 것을 충분히 명시함
function sum(...args){
  let s = 0;
  for (let i=0; i<args.length; i++){
    s = s + args[i];
  }
  return s;
}

// a,b 는 필수적임을 표시
function sum(a, b, ...args){
  let s = 0;
  for (let i=0; i<args.length; i++){
    s = s + args[i];
  }
  return s;
}


// 변형 함수
// 1. 화살표 함수 > 익명 함수가 기본적, 반드시 변수에 넣어야함
const sumV2 = (a, b, ...args) => {
  let s = 0;
  for (let i=0; i<args.length; i++){
    s = s + args[i];
  }
  return s;
}

const ten = () => 100; // 코드가 한줄일때 {} (브레이스), return 생략 가능
const ten = (x,y) => 100+x+y;
const ten = x => 100+x; // 인자가 하나일때 () 생략 가능
const ten = (x,y) => {
  return 100+x+y;
}


//생성기 함수, 최초 호출시 함수가 실행되지 않고 실행준비상태만 된 후 객체 반환,
// 이 안에는 함수가 실행 준비를 마쳤으니 그 함수를 실행할 도구를 담은 객체를 반환
// 함수에 들어갔다 나왔다의 동작을 가능하게 함
function* gen(){
  yield 10;
  yield 20;
  return 30;
}

const g = gen(); 
// generator 호출, 제어할 객체가 반환됨
// next 메소드가 반환, generator과 커뮤니케이션 가능
// 값을 줄 수도 있고, 준 값을 받을 수도 있음
// return도 사용할 수 있지만 generator만의 yield를 사용 가능
g.next();
g.next();
g.next();
