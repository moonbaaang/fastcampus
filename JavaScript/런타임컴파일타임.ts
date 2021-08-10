// 컴파일 타임에서 체크하더라도 런타임까지 온전히 커버되지 못하는 상황이 존재
// 자바스크립트에서는 타이핑이 제거 > 런타임오류의 발생 원인
function add(x: number, y: number): number {
  return x+y;
}

add(10, 20);

// 10, 20이 아닌 서버로부터 데이터가 넘어오는 상황인 경우
type ObjType = {
  x: number;
  y: number;
}

const json = `{"x":10, "y":20}`;
// 여기서 `{"x":"abc", "y":20}`;로 데이터를 공급받을 경우 문제가 발생
const obj = JSON.parse(json) as ObjType;

add(obj.x, obj.y);