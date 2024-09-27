const number=[1,2,3,4]
function double(num){
  return num*2;
}
const doubleIt=n=>n*2;
double(number)
//const result =number.map(double);
const result =number.map(n=>n*2);
//const result =number.map(doubleIt);
//const result =number.map(double);
console.log(result)

const friends = ['tonny', 'moni', 'sony','bony']
//const results= friends.map(friend=>friend.length)
const results= friends.map(friend=>friend.length>4)
console.log(results)