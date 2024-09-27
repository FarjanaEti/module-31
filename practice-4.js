const students=[
    {name:'eni',age:21},                        
    {name:'bini',age:23},                            
    {name:'tapa',age:26} ,                           
    {name:'tini',age:25}  ,                          
];
const totalAge=students.reduce((accum,current)=>accum+current.age,0)
//console.log(totalAge)
let sum=0;
for(const num of students){
  sum=sum+num.age;
}
console.log(sum)