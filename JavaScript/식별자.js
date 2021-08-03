// developer.moziㅣla.org 참고
/*
  대소구분 x 유니코드 사용
  $, _ , 숫자 로 구성할 수 있으나 숫자로 시작할 수 없음 + 공백 시작 불가
  식별자는 코드의 일부, 문자열은 데이터이기에 식별자와 문자열은 다름
  어떤 경우 문자열을 분석해 식별자로 사용할 수 있음
*/

let age = 10;
const AGE = 10; // 상수는 대문자로 작성하는 것이 규칙(컨벤션)
// 키워드 식별자 = 데이터

function setAge() { // 카멜 케이스 (nomally)/ 스네이크케이스(set_age)

}

const o = {
  age : 10, //age : 식별자
  ['myName'] : '김',
}

console.log(o.age)
o.myName; // 데이터가 식별자화 되었음 이럴 경우 식별자 명명규칙을 따르지 않아도 됨
o['123my Name']; // 명명규칙에 어긋난 경우 이렇게 사용
