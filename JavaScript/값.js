/*
  JS https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures
  TS https://typescript-kr.github.io/pages/basic-types.html
*/

// js 에서 객체
const Color = {
  Red: 1,
  Blue: 2,
  Green: 3,
};

Color.Red;


// ts 에서 Enum (index는 0부터 시작함)
enum Color {
  Red, Blue, Green
}

//또는(index를 조정하거나 수동으로 모든 값 설정 가능)
enum Color{
  Red = 1, Blue, Green
}
Color.Red;