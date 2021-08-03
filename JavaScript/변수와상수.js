// javascript

let x = 10; // 수정 가능
const y = 200; // 수정 불가능 
const obj = {
  height: 200,
  width: 300,
}

x = 300;
// y = 250  > 코드 종료
obj.height = 300; // obj의 전체적인 것을 변경할 수는 없으나 내부적인 값은 변경 가능