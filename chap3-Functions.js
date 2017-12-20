
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
      newValue = randInteger();
    }while(varible == newValue);
    return newValue;
  }

  //CallBack Functions
  var arithmetics = function (funct, ...args){
    if(typeof funct == "function"){
      let i = 0
      for(; i < args.length; i++){
        args[i] = funct(args[i]);
      }
      return args;
    }
    else{
      return undefined;
    }
  }
  if(true){
    let array = arithmetics(function(x){return x%10;}, ...randIntegerArray());
    console.log(array);
  }
//Immediate Function
{
  (
    function(name){
      if(typeof name == "string"){
        alert(`Hello, ${name}`);
      }
      return undefined;
    }
  )("John");
}
// inner Function

//function that return a function
{
  function GoingToChange(){
    alert("I didn't change yet.");
    return function (){
      alert("I've changed.");
    }
  }
  //GoingToChange()();
  let newfunc = GoingToChange();
  newfunc();
}

//function that rewrite itself
function rewriteMe(){
  alert("first time i've been called");
  rewriteMe = function (){
    alert("Second time been called");
    rewriteMe = function (){
      alert("Third time...");
      rewriteMe = function (){
        alert("Last Time...");
      }
    }
  }
}

{
  var F = function(){
    alert(`${F.n} time being called`);
  }
  var rewrite = function(func){
    if(typeof func == "function"){
      if(func.n == undefined){
        func.n = 1;
      }
      func();
      ++func.n;
    }
  }
  for(var i = 0; i < 10; i++){
    rewrite(F);
  }
}

//combining techniques
var a = function (){
  var first = function (){
    alert("A");
  }
  var last = function (){
    alert("B");
  }
  first();
  return last;
}();

//closures one:

var outer = function(){
  var i1  = Math.round(Math.random()*10);
  console.log(i1);
  var inner = function (){
    var i2 = Math.round(Math.random()*10);
    console.log(i2);
    return i1 + i2;
  }
  return inner;
}

var global = outer();

//closures two:

  var C;
  var F = function(parameter){
    var i1 = Math.round(Math.random()*10);
    console.log(`i1 = ${i1} parameter = ${parameter}`);
    var F2 = function (){
      var i2 = Math.round(Math.random()*10);
      console.log(`i2 = ${i2}`);
      return i1 + i2 + parameter;
    }
    C = F2;
    i1++;
    parameter++;
    console.log(`i1 = ${i1} parameter = ${parameter}`);
  }


// clouse problem:

var F = function (){
  var array = Array(3),  i = 0;
  for(i = 0; i < 3; i ++){
    array[i] = function (){
      return i;
    }
  }
  return array;
}

var array = F();
for(let i = 0; i < 3; i ++){
  console.log(array[i]());
}

var F = function(){
  var array = Array(Math.round(Math.random()*10) + 1), i;
  for(i = 0; i < array.length; i++){
    array[i] = (function (x){
                  return function (){
                              return x;
                         }
                })(i);
  }
  return array;
}
var array = F();
for(let i = 0; i < array.length; i++){
  console.log(array[i]());
}
