// write a function to take no between 0-9 and return in words 
 const numToword = (num) => {
     const words = [ "zero","One","Two","Three","Four","five","Six","seven","Eight","Nine"];

    
    return (num >= 0 && num <= 9) ? words[num] : "Invalid number";
};

console.log(numToword(0));
console.log(numToword(1));
console.log(numToword(2));
console.log(numToword(3));
console.log(numToword(4));
console.log(numToword(5));
console.log(numToword(6));
console.log(numToword(7));
console.log(numToword(8));
 console.log(numToword(9));