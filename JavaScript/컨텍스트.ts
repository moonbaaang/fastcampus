const person = {
  name: 'M B J',
  age: 26,
  getAge(){
    return this.age;
  }
};

person.age;
person.getAge();

const age = person.getAge; // person의 getAge를 따로 호출
//age(); // age값을 접근 불가, 소유자확인이 불가능 (this > undefined)


//실행 컨텍스트(맥락) (execution context)
age.call(person) // 윗 방법을 가능하게 만드는 방법


class Person {
  name:string;
  age: number;
  constructor(name:string, age: number){
    this.name = name;
    this.age = age;
    //this.getAge = this.getAge.bind(this); // 바인드
  }

  getAge(){
    return this.age;
  }

  getName = () => this.name; // 어휘 컨텍스트 (this가 바인드됨)
}

const p1 = new Person("MBJ", 26)
p1.getAge(); // 소유자가 바로 확인되기 때문에 가능

const myAge = p1.getAge;
//myAge(); // this가 확인 되지 않기 때문에 실행 불가능 , 26번째 줄을 주석 해제할 경우 38번째 줄이 실행 가능
myAge.call(p1) // 실행 가능, 단 번거롭기 때문에 이처럼 실행하지 않고 바인드를 시켜줌(소유자를 고정)


//어휘 컨텍스트()lexical context > 어휘적으로 고정시키기에 코드상 특별한 문법이 필요 > 애로우 function > 어휘적 공간의 this가 연결됨
const x = p1.getName;

