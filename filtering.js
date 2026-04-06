let array=[2,5,6,4,7,8,10,9,3,1];
// function filt(element){
//     if (element%2==0) return false ;
//     else return true;
// }
// let array2 =array.filter(filt);
// console.log(array2);
let x = array.reduce(function(a,b){
    return a+b;

})
console.log(array.sort())
console.log(x);