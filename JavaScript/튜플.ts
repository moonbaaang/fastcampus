// 배열을 확장한 성질, 타이핑을 하면서 제약사항을 걸 수 있음
// 배열은 원소의 개수를 제약할 수 없으나 튜플은 원소의 개수를 제약할수있음

const address: [number, string, string] = [14023, '서울시', '종로구']

let [zipcode, address1] = address;

zipcode = '12345';

type BookInfo = [string, string, number];

const BookData : BookInfo[] = [
  ['헨리 8세', '셰익스피어', 1884],
  ['헨리 8세', '셰익스피어', 1884],
];

BookData.push(['a','b',23]);

function getArrayOne(): any[]{
  return [14023, '서울시', '송파구'];
}

type Address = [number, string, string]

function getArrayTwo(): Address{
  return [14023, '서울시', '송파구'];
}

let address2 = getArrayTwo()[2];

address2 = 12; // 송파구 라는 위치에 number타입을 넣으려 하면 에러 발생