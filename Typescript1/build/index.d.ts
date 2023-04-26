declare let n: number;
declare let s: string;
declare let b: boolean;
declare let arr: Array<number>;
declare let arrStr: string[];
type userObj = {
    name: string;
    id: string;
    score: number;
    address: string;
};
declare let user: userObj;
declare let user2: userObj;
declare let dataBase: Array<userObj>;
type newObj = {
    images: string[];
};
declare let imageDb: newObj;
declare let numStr: number | string | boolean;
type user = {
    name: string;
    id: string;
    score: number;
    address?: string;
};
type admin = {
    name: string;
    role: string;
};
declare const ia: user & admin;
declare function sum(a: number, b?: number): number;
