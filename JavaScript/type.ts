export type YesOrNo = 'Y' | 'N';
export type DayOfWeek = '월' | '화' | '수' | '목' | '금' | '토' | '일';
export enum DayOfTheWeek {'월', '화', '수', '목', '금', '토', '일'};
// enum 은 실제 데이터

export type Name = string;
export type Email = string;
export type FoolFunction = () => string; // 인자 없이 반환값이 string / => 사용

export interface IUser{
  readonly id : number;
  readonly name : Name;
  email : string;
  receiveInfo : boolean;
  active : YesOrNo;
}

export interface IUser {
  address? : string; // ? 는 optional
}
// 인터페이스는 이름이 중복될 경우 합쳐진 것처럼 보임 (단, 권장할만한 기능은 아님)
// 단 type alias 는 분산되게 만들 경우 오류

export type TUser = {
  readonly id : number;
  readonly name : string;
  email : Email;
  receiveInfo : boolean;
  active : YesOrNo;
}

//export type TUser = {
//  address ? : string;
//}

// interface 에서는 extends (뒤에는 interface나 type alias 둘다 사용 가능)
export interface IUserProfile extends IUser{
  profileImage: string;
  github? : string;
  twitter? : string;
}

// type alias 에서는 = 상위 type alias & 또는 interface
export type TUserProfile = IUser & {
  profileImage: string;
  github?: string;
  twitter?: string;
}

export type Color {
  fontColor : string;
  strokeColor: string;
  borderColor: string;
  backgroundColor: string;
}

export type Display = {
  display : 'none' | 'block';
  visiblity: boolean;
  opacity : number;
}

export type Geometry = {
  width: number;
  height: number;
  padding: number;
  margin: number;
}

export interface IStyle extends Color, Display, Geometry {
   tagName: string;
}

export type TStyle = Color & Display & Geometry & {
  tagName : string;
}

export interface IOnlyNumberValueObject {
  [key: string]: number;
}

export type TOnlyBooleanValueObject = {
  [prop: string] : boolean;
}

export interface IGetApi {
  (url:string, search?:string) : Promise<string>;
}

export type TGetApi = {
  (url:string, search?:string) : Promise<string>;
}

export interface IRect {
  id : number;
  x : number;
  y : number;
  width: number;
  height: number;
}

export interface IRectConstructor {
  new (x : number, y:number, width : number, height : number) : IRect;
  // new 생성자로 묘사 IRect의 인스턴스 임을 밝힘
}

// 데이터 표현시 타입 알리아스
// 메소드와 같은 구체적인 행위까지 포함된 객체를 표현할 때는 인터페이스
// 데이터를 포괄하는 객체를 묘사 시 인터페이스
// 클래스 묘사시에도 인터페이스 사용