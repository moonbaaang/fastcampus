// https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators
// javascript 

//구조분해
const colors = ['red', 'yellow', 'black'];
const Colors = {
  blue: 'blue',
  green: 'green',
  white: 'white',
};

//const red = colors[0];
//const yellow = colors[1];
//const black = colors[2];

const [red, yellow, black] = colors; // 위와같은 효과를 냄
const [, yellow] = colors; // 이와같이 사용 또한 가능
const { green } = Colors; // 빼오고 싶은 것들을 작성

yellow;

let a = 10;
let b = '10';

if (a == b){
  // 동등비교
}

if (a === b){
  // 일치 연산
}

// 조건 삼항 연산자
if (a === b){
  a = 0;
} else {
  a = 1;
}

// 이를 축약
a = (a===b) ? 1 : 2;

typeof(a)
typeof a

(function c(){
  // 함수를 괄호안에 넣으면 변수처럼 사용 가능
})