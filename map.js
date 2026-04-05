var array =[3,5,6,7];
var newArray = array.map(function(val){
  return val+12;
})
console.log(newArray);
var new2Array= array.filter(function(vall){
  if (vall>=4){ return true;}
  else return false;
})
console.log(new2Array);
var new3Array = array.find((val)=>{
  if(val==51) return true ;
})
console.log(new3Array);
console.log(array.indexOf(511));