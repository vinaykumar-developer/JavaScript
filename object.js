 obj ={
  name:"viany",
  age :21,
  gender:"male",
  profession:'student',
  Details:{
    maritalS: "single ",
  }
};
// for(let key in obj){
//   console.log(key,obj[key]);
// }
// console.log(Object.keys(obj));
obj2={}
// obj2={...obj};

obj2=JSON.parse(JSON.stringify(obj))
obj2.Details.maritalS="maried";
console.log(obj)
console.log(obj2)


 