// 함수를 일반적인 값처럼 변수에 넣음
// 인자로 전달되는 함수

function ul(child: string): string {
  return '<ul>${child}</ul>';
}

function ol(child: string): string{
  return '<il>${child}</ol';
}

function makeLI(
  container: (child: string) => string, //,  함수
  contents: string[] // 배열
): string{
  const liList = [];

  for (const content of contents){
    liList.push(`<li>${content}</li`);
  }
  return container(liList.join(''));
}

const htmlUL = makeLI(ul, ['월', '화', '수', '목', '금', '토', '일']);
const htmlOL = makeLI(ol, ['봄', '여름', '가을' ,'겨울']);

console.log(htmlUL);
console.log(htmlOL);