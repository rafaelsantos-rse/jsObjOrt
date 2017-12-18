var Person = function (name, age, country, profession){
    this.name = name;
    this.age = age;
    this.country = country;
    this.profession = profession;
    this.greed = function (){
      return "Hello, my name is " + this.name + ". Nice to meet you.\n I am a(n) " + this.profession + ".";
    }
}
var guy = Array(
                new Person("John Lennon", 40, "England", "Musician"),
                new Person("Anderson Silva", 40, "Brazil", "MMA Fighter"),
                new Person("Jim Carrey", 50, "Canada", "Comedian Actor"),
          );

for(var i = 0; i < 3; i++){
  console.log(guy[i].greed());
}


function ReturnItAll(){
  var i = 0, array = Array();
  console.log(arguments.length);
  for(; i< arguments.length; i++){
    array[i] = arguments[i];
  }
  return array;
}

function YellFewArguments(a, b, c){
    var situation = false;
    if(arguments.length < 3) {return situation;}
    else{
      let i = 0;
      for(i  = 0; i < arguments.length; i++){
        if(i <= 2){
          if(arguments[i] == undefined){ return situation;};
        }
      }
    }
    situation =  true;
    if(situation){
      console.log("enough arguments!");
    }
    else{
      console.error("not enough arguments!");
    }
}


/*
** if e else no javascript
** só pode o if sozinho se terminar com uma ;
*/


//playing with javascript
function SayMyName(name = "Joseph", nickname = name[0]){
  console.log(`Welcome ${name}, but you can call him as ${nickname}.`);
}
SayMyNam("Jack Black");
SayMyName("Anderson Silva");
SayMyName(undefined);

//default parameters (they have their own scope)
var scope = "outer_function";
function F(value = scope){
  var scope = "inner_function";
  console.log(value, scope);
  return undefined;
}
F();
//Rest parameters --> an alternative to the arguments variable
function SayThings(voice, ...words){
  console.log(`In the voice of ${voice} i say:\n"${words}".`);
}

SayThings("Bruce Buffer", "IIIIIIIIT'S TIIIIME", "THE UFC CHAMPIONSHIP", "ANDERSON SILVA ", "VS", "JOSE ALDO");

//rest parameters and spread oporetors
function sumItAll(...numbers){
  let i =  0, result = 0;
  for(;i < numbers.length; i++){
    if(typeof numbers[i] == "number"){
      result += numbers[i];
    }
  }
  return result;
}
function randInteger(){
  return Math.round(Math.random()*1000) % 100 + 1;
}
function randIntegerArray(){
  let i = 0, array = Array(randInteger());
  for(; i < array.length; i++){
    array[i] = randInteger();
  }
  return array;
}
