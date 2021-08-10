// JSON > 데이터를 교환하기 위한 포맷 
// 데이터를 주고받아야할 필요성이 있을 때 자바스크립트나 타입스크립트 입장에서는 객체를 주고 받으면 효율적.

const jsonString = `
  {
    "name": "MBJ",
    "age": 30,
    "bloodType": "AB"
  }
`;

// JSON은 키에 "를 덮어야 하고 "(쌍따옴표)만 지원, 마지막 속성의 ,를 지원하지 않음
// value의 종류가 제한적>> 문자열, 숫자, 배열, 객체, boolean

const myJson = JSON.parse(jsonString); // 객체화 됨

console.log(myJson.name);

console.log(JSON.stringify(myJson)); // 객체를 문자열화

// json은 객체이기 때문에 함수를 작성할 수 없음
// json객체에 문제가 있다면? (" 를 써야하는데 ' 를 썼을 경우) > 프로그램 종료 (예외)
// json을 사용할 때는 항상 예외처리가 필수

try {
  const myJson = JSON.parse(jsonString);
  console.log(myJson.name);
  console.log(JSON.stringify(myJson));
} catch(e) {  
  console.log('json parsing error')
} 