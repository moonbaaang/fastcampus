let a = 10;
let b = a;

// a, b 모두 10

b = 20;

let o = {
  isLoading : false,
};

let o2 = o

o2.isLoading = true; // o 또한 true로 변경됨
// 객체는 객체의 위치값만 저장됨 ( 복사가 아님 )
// 객체형 데이터 타입은 객체가 한 곳에 저장되어있는데 그 위치값만 저장됨
// 참조 메커니즘, 객체는 유니크, 대입문을 통해선 복사되지 않음

function foo(o) { 
  o.isLoading = true;
}

foo(o)

