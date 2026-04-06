// write a code to generate a random number from 0 to 9 both 
// let num=(10*(Math.random()));n
// console.log(Math.floor(num));
function sumOfProduct(a,b,c){
    //ab+bc+ca
    return (a*b+b*c+c*a);
}
var sop=sumOfProduct(3,6,8);
console.log(sop);