import {firstname as f,lastname as l,age as ag,fun1 as f1,fun2 as f2} from "./m3.js";
import {a,b,fun3} from "./m4.js";

console.log(
    `
    Name : ${f}
    LastName : ${l}
    Age : ${ag}
    `
);
f1()
var res = f2(10,20);
console.log(res);
var [a1,a2,a3]=fun3()
console.log(
    `
    a : ${a}
    b : ${b}
    a1 : ${a1}
    a2 : ${a2}
    a3 : ${a3}
    `
);