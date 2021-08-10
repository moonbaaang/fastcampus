function doubleTypeFunction(a:number | string){
  if (typeof a === 'string'){
    return a.replace('x', 'X');
  }

  return a.replace('Y', 'y') // replace라는 메소드가 존재하지 않음
}

doubleTypeFunction(10);

function foo(a?: number|null){
  if (a===null)return;

  console.log('display before');
  console.log(a?.valueOf());
  console.log('display after');
}

foo();


// 인터페이스를 이용해 타입 유형을 검사
interface Foo{
  foo: string;
  common: string;
}

function isFoo(arg: any): arg is Foo {
  return arg.foo !== undefined;
}

console.log(isFoo({foo: 'ok', common: 'wow'}));