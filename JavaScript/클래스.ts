// 클래스 > 객체를 만드는 가장 정교한 방법을 제공

interface Container {
  tagName: string;
  className: string;
  children?: string[];
  getTagName: () => string;
  getClassName: () => string;
}
// 인터페이스에서는 private, protected 사용 불가
// private > 해당 클래스에서만 접근
// protected > 외부에는 공개되지 않지만 내부에서 자식클래스에선 접근 가능
// public > 인스턴스 객체를 그대로 사용할 수 있도록

abstract class Shape {
  public static MIN_BORDER_WIDTH = 0;
  public static MAX_BORDER_WIDTH = 30;
  
  public readonly name: string = 'Shape'; // 쓸 수 없음
  protected _borderWidth: number;
  private action !: string;
  // ! > 값을 세팅하지 않을 수 있음

  constructor(borderWidth: number = 0){
    this._borderWidth = borderWidth;
  }

  abstract area: () => number; // 함수이며, 리턴값은 number (abstract > 추상 메소드 > 반드시 상속받으면서 해당 메소드를 실체화된 코드로 구현해야함)

  set borderWidth(width: number){
    if (width >= Shape.MIN_BORDER_WIDTH && width <= Shape.MAX_BORDER_WIDTH){
      this._borderWidth = width;
    } else {
      throw new Error("borderWidth 허용 범위를 넘어난 동작을 시도했습니다.")
    }
  }

  get borderWidth() : number {
    return this._borderWidth;
  }
}


class Circle extends Shape {
  private _radius : number; // 읽고 쓸 수 있으나 외부로부터 값은 보호하고 싶음 > private후 getter, setter
  public name : string = 'Circle';

  constructor(radius: number){
    super(); // 부모의 생성자를 작동하기 위해 반드시 필요
    this._radius = radius;
  }

  get radius(){
    return this._radius;
  }

  area = () => this._radius * this._radius * Math.PI;
}

class Rect extends Shape {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number){
    super();

    this._width = width;
    this._height = height;
  }

  get width(){
    return this._width;
  }

  get height(){
    return this._height;
  }

  area = () => this._width * this._height;
}


const circle = new Circle(50);
const rect = new Rect(150, 200);

console.log(rect.borderWidth);
console.log(rect.name);
console.log(circle.name)

try {
  rect.borderWidth = 10;
} catch(e) {
  console.error(e);
}

class MyContainer implements Container {
  tagName : string;
  className : string;

  constructor(tagName: string, className: string){
    this.tagName = tagName;
    this.className = className;
  }

  getTagName = () => this.tagName;
  getClassName = () => this.className;
}

console.log('done');
