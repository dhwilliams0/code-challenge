//1
function morningLogged(){
console.log ("Good Morning")
}
morningLogged();

function iLoveCode(){
 return "I love code"
}
console.log(iLoveCode());

function loggingTwice(){
console.log("one") 
console.log("two")
}
loggingTwice();

//4
function noStep(){
 console.log("one") 
 return "two"
 console.log("step")
}

console.log(noStep());

function isPrime(num){
  if (num === 1){
    return "false"
  }
for ( let i =2; i < num ; i++){
  if (num % i !==0){
return "true"
  }
  else {
   return "false"
  }
}
}
console.log (isPrime(17));
