// @types > 타입스크립트를 제공하지 않는 라이브러리가 타입스크립트를 제공하도록 패키지 제공
import {v4} from 'uuid'; // typescript를 제공하지 않는 것도 많음 npm install uuid

// https://www.npmjs.com/package/@types/uuid // npm install @types/uuid


type UniqObject = {
  id: string;
  [key: string]: string | number | boolean;
}

const makeObject = (): UniqObject => ({
  id:'1234',
})

// id 가 객체마다 유일한 값이 들어갔으면 >> uuid라는 유니크한 값을 문자열 값으로 생성하는 라이브러리
console.log(makeObject());
console.log(makeObject());