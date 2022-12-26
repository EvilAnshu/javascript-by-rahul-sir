// import {calc as c1, name as n1, age as a1} from './m7.js';
// import {calc as c, name as n, age as a} from './m6.js';

import * as mod7 from './m7.js';
import * as mod6 from './m6.js';

console.log(`
    Name : ${mod7.name}
    Age : ${mod7.age}
    Precent in m7
`);

console.log(`
    Name : ${mod6.name}
    Age : ${mod6.age}
    Precent in m6
`);

var res = mod7.calc(10,20,30);
console.log("Result of calc function present in mod7 : "+res);
var res = mod6.calc(10,20,30);
console.log("Result of calc function present in mod6 : "+res);

console.log(mod6.default)

mod6.demo1()
