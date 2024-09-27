const number=[4,5,66,3,45,34];

const sum=number.reduce((accum,current)=> accum+current,0)
  console.log(sum)
//average
const avg=number.reduce((a,c)=>a+c,0)/number.length;
console.log(avg)
//find max
const numbers = [12, 45, 2, 19, 39];
const max=numbers.reduce((accum,current)=>{
       //let M=accum;
       if(accum<current)  {
          let maximum=current; 
         // console.log(maximum)                   
       }                          
})

//concat more array
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const addArray=nestedArray.reduce((accum,current)=>{
       return accum.concat(current);                    
})
//console.log(addArray)

//add total
const cart = [
  { product: 'Laptop', price: 1000 },
  { product: 'Phone', price: 500 },
  { product: 'Headphones', price: 200 }
];
const total=cart.reduce((a,c)=>a+c.price,0)
//console.log(total)

//concat string
const phrases = ['Hello', 'World', 'Welcome', 'to', 'JavaScript'];
const string=phrases.reduce((a,c)=>a+c)
//console.log(string)