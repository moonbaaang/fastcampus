// 변수나 함수 > 스코프라는 공간에 생성
// 스코프 > 전역, 함수, 블록 스코프
// 전역 스코프 > 어플리케이션 실행시 생성, 종료시 삭제
// 함수 스코프 > 함수를 통해 만들 수 있는 스코프 공간, 함수 호출 진입 시 생성, 리턴 시 삭제
// 블록 스코프 > 코드를 묶고 있는 공간, 블록 내부로 진입 시 생성, 종료 시 삭제

let myname = 'moon'; // 전역 스코프

function foo(){
  let x = 10;

  console.log(myname) // 스코프 중첩 > 내부 스코프에서 외부 스코프 접근 가능
  console.log(x);
  bar(); // 함수가 밑에 있는데 호출됨??? >> 호이스팅 > 스코프가 생성될때 스코프 안에 만들어야할 함수나 변수들을 미리 만들고 시작함
  // 단, 함수식에서는 호이스팅이 불가능
  /*
    zoo() // 실행되지 않음
    const zoo = function(){

    }
  */

  function bar(){
    let y = 10;

    console.log(x);
    console.log(myname);
  }

  if(x === 10){
    let x = 100;
  
    console.log(x);
  }

  bar();
  console.log(x);
}

foo();

//console.log(x); // 불가능