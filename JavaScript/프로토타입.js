const c1 = {
  name: 'C1',
  color: 'red',
};

const c2 = {
  name: 'C2',
  width: 300,
};

const c3 = {
  name: 'C3',
  height: 100,
};
// 객체의 프로토타입 매커니즘
// c1.__proto__ >> 라는 특징을 갖고 있는데 이는 어떤 역할? > 어떤 객체를 가리키고 있음
// c1.tostring() > 정의하지않았는데? 프로토타입체이닝 > 자바스크립트의 최상위 Object 객체
console.log(c1)
console.log(c2)
console.log(c3)

console.log(c1.toString()) // c1이 tostring을 가지고 있다면 c1객체에서 찾고, 없으면 __proto__ 에서 찾음

c1.__proto__ = c2;
console.log(c1.width)

c1.__proto__ = c3;
c3.__proto__ = c2;

console.log(c1.width) // c1에는 width라는 속성이 없는데?? >> 실제로는 c2의 width임 >> c1.__proto__ 를 설정했기 때문


// 함수의 프로토타입 매커니즘
// 함수를 객체로 만들수 있는 방법 중 인스턴스 객체를 만드는 함수를 만듦

function Foo(name){ // Foo 함수 또한 __proto__ 를 가지며, prototype 속성도 가짐 (함수 그 자체) > 동적바인딩을 통해 속성 추가 가능
  this.name = name;
}

const f = new Foo('Baaang') 
// new 연산자는 Foo객체를 만드는 것 뿐 아니라 내부적으로 this.__proto__ = Foo.prototype; 를 만드는 역할 또한 하게 됨

Foo.lastName = "Test" // 일회성 실행
console.log("TEST" + f.lastName) // undefined

Foo.prototype.lastName = "Moon"
console.log(f.name)
console.log(f.lastName)