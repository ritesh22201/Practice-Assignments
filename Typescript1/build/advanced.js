// Enums
let color = [255, 234, 244, 263];
let numstr = 10;
let userData = {
    name: 'Rakesh',
    id: 12,
    score: 9
};
let user1 = ['Rakesh', 12, 9];
let user4 = ['Arun', 11, 9];
// Generic functions
function getInfo(value) {
    return value;
}
getInfo(122);
getInfo(false);
getInfo('abc');
let obj = {
    id: 1,
    name: 'sonu',
    role: 'IA',
    access: true,
    employee: true
};
// Class
class Car {
    constructor(b, m) {
        this.brand = b;
        this.model = m;
    }
}
let c = new Car('Mahindra', 'Thar');
class Suv extends Car {
    constructor(b, m, c) {
        super(b, m);
        this.color = c;
    }
}
//# sourceMappingURL=advanced.js.map