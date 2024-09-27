const odd=[1,3,5,7,9];
function oddToEven(num){
     let evenarray=[];                         
   for(const n of num) {
    //console.log(n)
    if(n%2===1){
       const even=n+1;
       evenarray.push(even)                      
    }
   }    
   return evenarray;                      
}
const result=oddToEven(odd);
//console.log(result)

// By map
const even=odd.map(n=>n+1)
console.log(even)