
//playing with strings:
var name = String(prompt("name: "));
var country = String(prompt("country: "));
console.log(`Hello, ${name} from ${country}.\nHope you are fine.`);


//playing with arguments object
var sumItAll = function (){
  var result = 0;
  for(let i = 0; i < arguments.length; i++){
    if(isFinite(arguments[i])) result += arguments[i];
  }
  return result;
}
function randInteger(){
  return ( Math.round(Math.random() *1000) % 100 ) + 1;
}

function randIntegerArray(){
  var array = [];
  for (let i = 0; i < randInteger(); i++){
    array[i] = randInteger();
  }
  return array;
}
// a little bit of ... operator enhances by ES6
console.log(sumItAll(...randIntegerArray()));

//a function that check if the new
function changeValue(variable){
  var newValue
  do{
    newValue = randInte
  }

}
