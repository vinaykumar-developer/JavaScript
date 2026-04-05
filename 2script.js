let arr=[];
arr = [2,3,4,6,7];
// arr.pop();
// arr.push(9);
// arr.unshift(0)
// arr.shift(4)
// console.log(arr)

// let sum =arr.reduce((accumulator,val)=>{
//   return accumulator*val;
// },1);
// console.log(sum);
// let [a,b,c,,d]=arr;
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d) 
// destructuring
let array =["vinay","kumar"];
let [firstName,lastName]=array;
console.log(firstName)
console.log(lastName)
let correct =["Mr.",...array];
console.log(correct)
let merze=[...arr,...array]
console.log(merze)