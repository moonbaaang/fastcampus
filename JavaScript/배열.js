const books = [];

books[0] = "book1";
books[1] = "book2";
books[2] = "book3";

books.push("book4");
books.push("book5");
books.push("book6");


console.log(books);
console.log(books.length);

books.pop() // 뒤에서 빼옴
console.log(books)
console.log(books.length)

const oneBooks = books.slice(0,2);

console.log(oneBooks);
console.log(books)

const twoBooks = books.splice(1,2,'햄릿', '오설로',' 리어왕')

console.log('twobooks')
console.log(twoBooks)
console.log(books)

twoBooks.shift() // pop과 반대(?) 맨 앞의 요소를 삭제

console.log(twoBooks)

twoBooks.unshift("First") // push는 맨 뒤 추가, unshift는 맨 앞 추가

console.log(twoBooks)

const allBooks = books.join('!!'); // default = ','

console.log(allBooks)

const splitBooks = allBooks.split('!!') // 문자열을 나눠 배열로 만듦
console.log(splitBooks)

const nextBooks = oneBooks.concat(twoBooks); // 배열의 합침
console.log(nextBooks)

const nextBookList = [...oneBooks, ...twoBooks] // 배열의 합침, 배열을 풀어 합칠지 선택함
const innerBookList = [...oneBooks, twoBooks]
const outerBookList = [oneBooks, ...twoBooks]
console.log(nextBookList)
console.log(innerBookList)
console.log(outerBookList)