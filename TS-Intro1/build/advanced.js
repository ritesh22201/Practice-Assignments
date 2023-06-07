// Tuple
class Car {
    constructor(brand) {
        this.brand = brand;
        this.wheels = 4;
    }
}
class Thar extends Car {
    constructor(brand, color, type) {
        super(brand);
        this.color = color;
        this.type = type;
    }
}
let car = new Thar('Mahindra', 'Black', "Petrol");
//# sourceMappingURL=advanced.js.map