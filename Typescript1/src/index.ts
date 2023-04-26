// DataTypes

// Number 

let n:number = 10;
n = 5;

// String

let s: string = 'abc';
s = 'rxy';

// Boolean 

let b: boolean = false;
b = true;

// Array 

// let arr : number[] = [1,2,3,4] Method first

let arr: Array<number> = [1,2,3,4];

let arrStr: string[] = ['a', 'b', 'c'];
arrStr.push('d');

// Objects 

type userObj = {name: string; id: string; score: number; address: string};

let user: userObj = {
    name: 'Diwakar',
    id: 'fw23',
    score: 9,
    address: 'MG Street'
}

let user2 : userObj = {
    name: 'Rakesh',
    id: 'fw23',
    score: 9,
    address: 'MG Street'
}

// Array of Objects

let dataBase: Array<userObj> = [];

// Array inside object

type newObj = {images: string[]};

let imageDb: newObj = {
    images: ['image1', 'image2']
}

// Union and intersection

let numStr: number | string | boolean = 123;
numStr = 'abc';
numStr = false;

type user = {name: string; id: string; score: number; address?: string};
type admin = {name: string; role: string};

const ia: user & admin = {
    name: 'Gagan',
    id: 'AD',
    score: 9,
    address: 'abc street',
    role: 'IA'
}

function sum(a: number, b?: number){
    return a + b;
}

sum(1)

