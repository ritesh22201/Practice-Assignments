type rgb = [number, number, number, number];
declare let color: rgb;
type union = number | string | boolean;
declare let numstr: union;
type user3 = [string, number, number];
declare let userData: {
    name: string;
    id: number;
    score: number;
};
declare let user1: user3;
declare let user4: user3;
declare function getInfo<Type>(value: Type): Type;
interface user2 {
    id: number;
    name: string;
    role: string;
}
interface Admin extends user2 {
    access: boolean;
    employee: boolean;
}
declare let obj: Admin;
declare class Car {
    brand: string;
    model: string;
    constructor(b: string, m: string);
}
declare let c: Car;
declare class Suv extends Car {
    color: string;
    constructor(b: string, m: string, c: string);
}
