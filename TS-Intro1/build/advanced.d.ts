type CarType = "Diesel" | "Petrol" | "EV";
declare class Car {
    brand: string;
    wheels: number;
    constructor(brand: string);
}
declare class Thar extends Car {
    color: string;
    type: CarType;
    constructor(brand: string, color: string, type: CarType);
}
declare let car: Thar;
