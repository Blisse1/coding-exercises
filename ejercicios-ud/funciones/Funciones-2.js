let example = function(a,b) {
   if(a > b){
    return 1;
}else if(b > a){
    return -1;
}else {
    return 0;
} 
};

console.log(example(4,4));

// Autoejecutable

(
function(num){
   if(num % 2 === 0){
       console.log("El número es par");
   }else{
       console.log("El número es impar");
} 
}
)(5);
