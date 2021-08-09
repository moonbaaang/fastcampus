type MyObject = {
  name: string;
  age: number;
  getFamilyName : () => string;
  getLastName : () => string;
  getBloodType: () => string;
}

const obj = {
  name: 'Byoune Jeon',
  age: 26,
  getFamilyName: function(){
    return 'Moon';
  },
  getLastName: () => 'Moon',
  getBloodType(){
    return 'B';
  }
};

obj.name;
delete obj.name; // 불가능 (optional 이어야 삭제 가능)
obj.age;
obj.bloodType = 'A'; // 동적바인딩으로 자바스크립트에서는 입력 가능
delete obj.bloodType; // 삭제 또한 가능
obj.getFamilyName();

// 객체를 만드는 방법
// 클래스를 만들어 클래스의 인스턴스 객체를 만듦
class Person{
  _bloodType: String;

  constructor(bloodType: string){
    this._bloodType = bloodType;
  }

  //getterm setter
  set bloodType(btype: string){
    if(btype === 'A'|| btype === 'B' || btype === 'O' || btype === 'AB'){
      this._bloodType = btype;
    }
  }

  get bloodType(){
    return `${this._bloodType} 형`;
  }
}

const p1 = new Person('B');

p1.bloodType;
p1.bloodType = 'C'; // 금지, 외부에서 속성에 접근하는 것 처럼 사용

const myObj = Object.create(null, {
  name : {
    value : 'Moon BJ',
    writable: true, //true : 만들어진 객체에 값을 변경 가능, false : readonly
    configurable: false, // true : delete가능, false: 속성을 지울 수 없음
  }
}); //(부모, 구성객체)