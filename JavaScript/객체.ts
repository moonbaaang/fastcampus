type Box = {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;
  borderWidth?: number;
  ['className']?: string; // computed property (속성명을 값으로 취급하여 사용)
}


let box: Box = {
  width: 200,
  height: 200,  
  borderRadius: 5,
  backgroundColor: 'red',
};
// 이와같이 객체를 만드는 것을 객체 리터럴


// 함수를 이용해 객체를 만드는 방법
function makeBox(
  width: number,
  height: number,
  borderRadius: number,
  backgroundColor: string,
): Box {
  return { // width: width, 로 작성되어야하지만 key, value가 같으면 축약형으로 사용됨
    width,
    height,
    borderRadius,
    backgroundColor,
  };
}

makeBox(100, 100, 0, 'blue');


// 클래스를 이용한 객체 생성
class Shape implements Box {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;

  constructor(
    width: number,
    height: number,
    borderRadius: number,
    backgroundColor: string
  ) {
    this.width = width;
    this.height = height;
    this.borderRadius = borderRadius;
    this.backgroundColor = backgroundColor;
  }
}

const boxShape = new Shape(10,10,0,'blue') // 클래스의 인스턴스 객체
if (boxShape instanceof Shape){
  console.log('Shape로 만든 박스입니다')
}

box.borderWidth = 10;
box['classNmae'] = 'box rounded';
// 새로운 속성을 추가한다면?
//box.color = 'blue'; // 객체의 동적 바인딩 (javascript에서는 바로 작성 가능), typescript에서는 type을 미리 옵션으로 설정해야함
// delete box.color

const box1 = box; // box1이 box를 가리키게 됨 (객체는 참조타입)

// 값을 복사하여 새로운 객체로 만들고싶을땐?
const box2 = Object.assign({}, box) //첫번째 입력된 인자에 2,3,4번째 객체를 덮어씀, 여기선 빈 객체에 box를 덮어씀

//빈 객체에 전개연산자를 사용해(...box) 객체를 복사 <일반적>
const box3 = {...box}
const box4 = {...box, borderRadius: 10} // 새로운 옵션 추가

// 복사하고자하는 객체를 문자열로 만든 후 다시 객체로 만듬
const box5 = JSON.parse(JSON.stringify(box));



//프로그래망 도구로서의 객체
function calculateCircleArea(radius){
  return radius * radius * Math.PI;
}

function calculateRectArea(width, height){
  return width * height;
}

class Circle{
  #radius;

  constructor(radius){
    this.#radius = radius;
  }

  get radius(){
    return this.#radius;
  }

  area = () => this.#radius * this.#radius * Math.PI;
}

class Rect {
  #width; // #을 붙이면 private 한 속성이 됨. 외부로부터 완전히 보호됨.
  #height;

  constructor(width, height){
    this.#width = width;
    this.#height = height;
  }

  get width(){
    return this.#width;
  };

  get height(){
    return this.#height;
  };

  area = () => this.#width * this.#height; 

}

const circle = new Circle(50)
const rect = new Rect(100, 200);

console.log(calculateCircleArea(circle.radius))
console.log(calculateRectArea(rect.width, rect.height));

console.log(circle.area());
console.log(rect.area());