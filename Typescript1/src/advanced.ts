// Enums

// Tuple

type rgb = [number, number, number, number];

let color: rgb = [255, 234, 244, 263];

type union = number | string | boolean;

let numstr: union = 10;

type user3 = [string, number, number];

let userData = {
    name: 'Rakesh',
    id: 12,
    score: 9
}

let user1: user3 = ['Rakesh', 12, 9];
let user4: user3 = ['Arun', 11, 9];





// Generic functions

function getInfo<Type>(value: Type){
    return value;
}

getInfo<number>(122);
getInfo<boolean>(false);
getInfo<string>('abc');

// Interface

interface user2 {
    id: number,
    name: string,
    role: string
}

interface Admin extends user2{
    access: boolean,
    employee: boolean
}

let obj: Admin = {
    id: 1,
    name: 'sonu',
    role: 'IA',
    access: true,
    employee: true
}

// Class

class Car {
    brand: string;
    model: string;
    constructor(b: string, m: string){
        this.brand = b;
        this.model = m;
    }
}

let c = new Car('Mahindra', 'Thar');

class Suv extends Car{
    color: string;
    constructor(b: string, m: string, c: string){
        super(b, m);
        this.color = c;
    }
}