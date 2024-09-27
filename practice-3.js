//show the name  of all senior
const instructor=[
     {name:'emi', age:23, position:'senior'},                         
     {name:'mimi', age:25, position:'senior'}  ,                       
     {name:'rimi', age:20, position:'junior'}  ,                       
];
for(const num of instructor){
   const pos=num.position  
   console.log(pos)                         
}
const senior=instructor.filter( pos => pos.position ==='senior').map(pos=>pos.name)
console.log(senior)
