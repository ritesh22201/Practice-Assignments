
// Tuple

// let rgb: [number, number, number] = [111, 221, 144];

// let task = {
//     id : 2,  
//     task : 'Buy book',
//     status : true
// }

// type UserType = [number, string, boolean]

// let t1: UserType = [1, "Buy book", true];

// Enums------------------------------------- To be done

// Generic Functions

// function sum<Type>(a: Type, b: Type) {
//     return `${a} ${b}`;
// }

// sum<number>(4, 5);
// sum<string>('a', 'b');
// sum<boolean>(false, true);
// sum<number[]>([1, 2, 3, 4], [3, 4, 5, 6]);


// Interface

// interface UserInterface {
//     id: number;
//     name: string;
//     batch: string;
//     course: string;
// }

// interface StudentInterface extends UserInterface {
//     score: number;
//     address?: string;
// }

// let userData: StudentInterface = {
//     id: 1,
//     name: 'Ritesh Goswami',
//     batch: 'FT-WEB-23',
//     course: 'RCT-211',
//     score: 8,
//     address: 'Siwan, Bihar'
// }


// Classes

type CarType = "Diesel" | "Petrol" | "EV";

class Car {
    brand: string;
    wheels : number;
    constructor(brand: string){
        this.brand = brand;
        this.wheels = 4;
    }
}

class Thar extends Car {
    color: string;
    type: CarType;
    constructor(brand: string, color: string, type: CarType) {
        super(brand);
        this.color = color;
        this.type = type;
    }
}

let car = new Thar('Mahindra', 'Black', "Petrol");

