// function num(i){
//     console.log(i);
// }
for (i=1 ;i<=10;i++){
    setTimeout(function(){
        console.log(i);
    },i*200);
}