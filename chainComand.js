const product={
   count:500,
   data:[
      {id:1,name:'phn',price:5000},
      {id:2,name:'watch',price:3000}                        
   ],  
   address:{
       street:{
           first:'tali office',
           second:'rayer bazar',
           third:'dhanmondi'                   
       }                       
   }                         
}
//console.log(product.data[1].price)
console.log(product.address.street.third)