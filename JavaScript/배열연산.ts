type Book = {
  title: string;
  copyright?: string;
  author?: string;
}

const books : string[] = [
  "헨리 6세",
  "리처드 3세",
  "실수 연발",
  "말괄량이 길들이기",
  "헨리 8세",
];

// 배열의 연산 종류
// 순회
books.forEach((book:string, idx:number, books:string[]) => {
  console.log(book, idx);
});

books.forEach((book:string, idx:number) => {
  console.log(book, idx);
});
// (원소 그 자체, 인덱스값, 배열 원본 전체에 접근해야할 경우 배열 전체)

// map 함수
const bookObjects : Book[] = books.map((book: string) => {
  return {
    title: book,
    author: undefined
  };
});

console.log(bookObjects);
// 함수가 리턴한 값을 모아 하나의 배열로 만든 후 순회가 끝나면 반환
// 배열의 데이터를 입력받아 새로운 데이터로 만들어 반환하는게 매우 편리함 (문자열을 객체로 변환)

// map함수를 두번 사용
const ShakespeareOneBooks: Book[] = books
  .map((book: string) => ({
    title: book
  }))
  .map((book: Book) => ({
    ...book,
    author: "william Shakespeare"
  }));
// 메소드 체이닝

console.log(ShakespeareOneBooks)


// 이를 재활용성을 늘려 작성.
const bookTitleToBookObject = (book: string) => ({title:book});
const makeAuthor = (name: string) => (book: Book) => ({
  ...book,
  author: name
});

const shakespeareTwoBooks: Book[] = books
  .map(bookTitleToBookObject)
  .map(makeAuthor("William Shakespeare"))

console.log(shakespeareTwoBooks)


// 필터링 (값을 함수로 받음)
const henry: Book[] = shakespeareTwoBooks.filter((book: Book) =>
  book.title.includes("헨리")
);

console.log(henry)


//누적함수
const someNumbers : number[] = [10, 5, 3, 14, 56];
const sumNumber = someNumbers.reduce((a: number, b:number) => a+b, 0);
// 주어진 함수가 리턴한 값을 모아 최종으로 리턴한 값을 리턴
// reduce(function, index)
console.log(sumNumber)

type SomeObject = {
  [key: string]: string | number;
};

const someObjects: SomeObject[] = [
  {border: "none"},
  {fontSize: 24},
  {className: "box sm-box"}
];

const someObject: SomeObject = someObjects.reduce(
  (a: SomeObject, b:SomeObject) => ({ ...a, ...b}),
  {}
);
// reduce함수 > 객체를 모두 합쳐 하나의 객체로 만들 수 있음
console.log(someObject)