// Number
// let a: number = 10;
// let b: number = 5;
// a = 5;
// String
// let a: string = 'name';
// a = 'str';
// Boolean
// let a: boolean = true;
// a = false;
// Array
// let array: number[] = [];
// let array2: Array<number> = [];
// array.push(1);
// array.push(3);
// Objects
// type UserType = {
//     id : number;
//     name : string;
//     batch : string;
//     course: string;
//     score : number;
//     address?: string;
// }
// let userData: UserType = {
//     id : 1,
//     name : 'Ritesh Goswami', 
//     batch : 'FT-WEB-23',
//     course : 'RCT-211',
//     score : 8,
//     address : 'Siwan, Bihar'
// }
// // Array of objects
// let arr: UserType[] = [
//     {
//         id : 1,
//         name : 'Ritesh Goswami', 
//         batch : 'FT-WEB-23',
//         course : 'RCT-211',
//         score : 8,
//         address : 'Siwan, Bihar'
//     },
//     {
//         id : 2,
//         name : 'Sumit Goswami', 
//         batch : 'FT-WEB-23',
//         course : 'RCT-211',
//         score : 8,
//         address : 'Siwan, Bihar'
//     }
// ]
// let variable: number | string | boolean = 10;
// variable = 'str';
// let arrOfNumStr: (number | string)[] = [];
// arrOfNumStr.push(10);
// arrOfNumStr.push('str');
// // arrOfNumStr.push(false) 
// type TodoType = {
//     id : number;
//     task : string;
//     status : boolean;
//     priority : number;
// }
// type Task = {
//     assignedBy : string;
//     priority : number;
// }
// let todoList: (TodoType & Task)[] = [
//     {
//         id : 1,
//         task : 'Buy apple',
//         status : false,
//         assignedBy : 'Manager-1',
//         priority : 0
//     },
//     {
//         id : 2,
//         task : 'Buy Book',
//         status : true,
//         assignedBy : 'Manager-1',
//         priority : 1
//     }
// ]
// Function 
// function sum(a: number, b: number){
//     return a + b;
// }
// React component
// type ButtonProp = {
//     text : string; 
//     color : string;
// }
// const Button = ({text, color}: ButtonProp) => {
//     return `${text} ${color}`;
// }
//# sourceMappingURL=index.js.map