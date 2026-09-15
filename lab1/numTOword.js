const numToword = (digit) => {
    switch(digit){
       
case 1:
    return "One";
case 2:
    return "Two";
case 3:
    return "three";
case 4:
    return "four";
case 5:
    return "five";
case 6:
    return "six";
case 7:
    return "seven";
case 8:
    return "eight";
case 9:
    return "nine";
default:
    return "Zero";
    };
}
// console.log(numToword(0));
// console.log(numToword(8));

const rollNum = "2503201000150";
const digits = String(rollNum).split("");
console.log(digits);
let inWords = "";
digits.forEach((a) => {
    inWords += " " + numToword(Number(a));
}
);
console.log(inWords);