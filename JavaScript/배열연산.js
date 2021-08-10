const books = [
  "헨리 6세",
  "리처드 3세",
  "실수 연발",
  "말괄량이 길들이기",
  "헨리 8세",
];

// 배열의 연산 종류 > 순회 (forEach), map, filter (객체.키.include()), reduce 

books.forEach((book, idx, books) => {
  console.log(book, idx);
});

books.forEach((book, idx) => {
  console.log(book, idx);
});

// map 함수
const bookObjects = books.map((book) => {
  return {
    title: book,
    author: undefined
  };
});

console.log(bookObjects);

// 이중 map 함수
const ShakespeareOneBooks = books
  .map((book) => ({
    title: book
  }))
  .map((book) => ({
    ...book,
    author: "william Shakespeare"
  }));
// 메소드 체이닝

console.log(ShakespeareOneBooks)

// 재활용성을 늘린 코드작성
const bookTitleToBookObject = (book) => ({title:book});
const makeAuthor = (name) => (book) => ({
  ...book,
  author: name
});

const shakespeareTwoBooks = books
  .map(bookTitleToBookObject)
  .map(makeAuthor("William Shakespeare"))

console.log(shakespeareTwoBooks)

// 필터링
const henry = shakespeareTwoBooks.filter((book) =>
  book.title.includes("헨리")
);

console.log(henry)


//누적함수
const someNumbers = [10, 5, 3, 14, 56];
const sumNumber = someNumbers.reduce((a, b) => a+b, 0);

console.log(sumNumber)


// reduce 함수
const someObjects = [
  {border: "none"},
  {fontSize: 24},
  {className: "box sm-box"}
];

const someObject = someObjects.reduce(
  (a, b) => ({ ...a, ...b}),
  {}
);
console.log(someObject)