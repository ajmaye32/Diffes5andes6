//es5
var name5 = 'Jane Miller';
var age5 = 11;
name5 = 'Lilah Miller';
console.log(name5);

//Es6
let name6 = 'Jane Miller';
let age6 = 11;
name6 = 'Lilah Miller';
console.log(name6);

// const newname6 = 'Brandon Miller'
//newname6 = 'John Miller';

function haslicense(passedTest) {
    if (passedTest) {
        let person = "Latori";
    }
    console.log("Congratulations" + person);
}
//haslicense(true);



let i = 23;
// define a variable called "i"
// assign a value, 23, to "i"
let i;
i = 23;
// for assain to i assin to 0
// continue if i less then 5
// i assign i plus one 
// test out the i
for (i = 0; i < 5; i = i + 1) {
    // for (let i = 0; i < 25; i = i + 2) {
    console.log(i)
}

console.log(`here`, i);

//es5
function add5(a, b) {
    return a + b;
}
console.log(add5(2, 2));


//es6
const add6 = (a, b) => {
    return a + b
};
//you can remove the curly braces because they create scope
console.log(add6(2, 3));

const square = (x) => x * x;
//you can remove the parnes if you only have one parameter

// function multiply(x, y) {
//     var a = x || 1;
//     var b = y || 1;
//     console.log(x * y);
// }


const multiply6 = (c = 5, d = 10) => console.log(c * d);
multiply6(7, 7);

//Templete
const templeteStr = 'This string' + 'should' + 'use template literals'
console.log(templeteStr);

// const templeteStr = ` This string uses template literals`;
// console.log(templeteStr);



// const templeteStr = ` This string does math ${1 + 1}`;
// //make sure to use the dollar sign and brakcets.
// console.log(OpertorStr);

// let n = 'Carlo';
// const templeteStr = `Hi ${n}!;`
// console.log(templeteStr);

//.startswith() .endswith() .includes()

let n = `Jacquelin Lara`;
console.log(n.startsWith('J'));
console.log(n.startsWith('j'));
console.log(n.includes('q'));
