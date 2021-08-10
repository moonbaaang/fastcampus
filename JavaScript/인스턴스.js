// 클래스라는 설계도가 구체화된 것이 인스턴스
// 인스턴스를 만드는 방법 1. 함수를 이용해서 만드는 방법 / 2. 클래스문법을 이용해 만드는 방법

// 함수를 이용해 인스턴스를 만드는방법
function CartV1(){
  // this?
  this.cart = [];
  this.currentId = 0;
}

// prototype > 인스턴스 객체에 드러날 메소드
// 기존 클래스에 없는 내용을 동적으로 추가함 (getNewId)
CartV1.prototype.getNewId = function(){
  this.currentID++;
  return this.currentId;
};

CartV1.createItem = function(name, price){
  return{
    name, price
  };
};

CartV1.prototype.addItem = function(item){
  this.cart.push({
    ...item,
    id: this.getNewId(),
  });
};

CartV1.prototype.clearCart = function(item){
  this.cart = [];
  this.currentId = 0;
};

// new 연산자를 함수 호출 앞에 사용하면 빈 객체 하나를 암묵적으로 만듦
// CartV1함수를 호출하며 빈 객체를 전달하여 이를 this로 부름
// 이후 동적 바인딩으로 새로운 속성을 추가
// new 연산자는 이후에 추가한 속성들을 반환하게 됨
const shoppingCartV1 = new CartV1();

shoppingCartV1.addItem(CartV1.createItem('watermellon', 8000));
shoppingCartV1.addItem(CartV1.createItem('apple', 12000));
shoppingCartV1.addItem(CartV1.createItem('bean', 2000));

console.log(shoppingCartV1.cart)


// 클래스 문법을 이용해 만드는 방법 (현대적)
class CartV2{
  static createItem = (name, price) => ({
    name, price
  });

  cart;
  currentId;

  constructor(){
    this.currentId = 0;
    this.cart = [];
  }

  getNewId = () => {
    this.currentId++;
    return this.currentId;
  }

  addItem = item => {
    this.cart.push({
      ...item,
      id: this.getNewId(),
    });
  }

  clearCart = () => {
    this.currentId = 0;
    this.cart = [];
  }
}

const shoppingCartV2 = new CartV2();

shoppingCartV2.addItem(CartV2.createItem('watermellon', 8000))
shoppingCartV2.addItem(CartV2.createItem('apple', 12000))
shoppingCartV2.addItem(CartV2.createItem('bean', 2000))

console.log(shoppingCartV2.cart)