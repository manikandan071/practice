let x = 2;
const y = 3;    //====assignment
console.log(x = y + 1);

let a = 15;
let b = 'mani';
let c = 10;


console.log(a += 5);  //===20 addition assign

console.log(b += ' kandan');

console.log(c -= 5);  //===5 subtraction assign

console.log(c *= 2);   //===10 multiplication assign

console.log(c /= 2);   //===5   division assign

console.log(c **= 2);    //===25  exponentiation assign

console.log(c <<= 2);    //===100 left shift assign

console.log(c >>= 2);    //===25  right shift assing

a++;
let d= a;
console.log(d);   //===21  increment  ========d=21

a--;
let e= a;
console.log(e);  //===20  decrement  =========e=20

console.log(e==20);   // ===equal to
console.log(e==21);

console.log(e!=21);    //===not equal to
console.log(e!=20);

console.log(e=="20");
console.log(e!="21");

console.log(e===20);     //===strict equal to
console.log(e==="20");

console.log(e!==21);      //===strict not equal
console.log(e!=="21");

console.log(e>=19);     //===greater than or equal   
console.log(e<=19);     //===less than or equal  

console.log(d>20 && e<22);    // ===logical AND operator
console.log(d<20 && e<22);

console.log(d==21 || e==20);
console.log(d==20 || e==21);   //=== logical OR operator
console.log(d==21 || e==21);
console.log(d==20 || e==20);

console.log(! (e===20));    //====logical NOT operator
console.log(! (e>22));


let h=5;
let i="5";
h===i

