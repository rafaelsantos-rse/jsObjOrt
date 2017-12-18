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

//default Vrbls (they have their own scope)
var scope = "outer_function";
function F(value = scope){
  var scope = "inner_function";
  console.log(value, scope);
  return undefined;
}
F();
//Rest Vrbls --> an alternative to the arguments variable
function SayThings(voice, ...words){
  console.log(`In the voice of ${voice} i say:\n"${words}".`);
}

SayThings("Bruce Buffer", "IIIIIIIIT'S TIIIIME", "THE UFC CHAMPIONSHIP", "ANDERSON SILVA ", "VS", "JOSE ALDO");

//rest Vrbls and spread oporetors
function SumItAll(...numbers){
  let i =  0, result = 0;
  for(;i < numbers.length; i++){
    if(typeof numbers[i] == "number"){
      result += numbers[i];
    }
  }
  return result;
}
function RandInteger(){
  return Math.round(Math.random()*1000) % 100 + 1;
}
function RandIntegerArray(){
  let i = 0, array = Array(RandInteger());
  for(; i < array.length; i++){
    array[i] = RandInteger();
  }
  return array;
}
  console.log(SumItAll(...RandIntegerArray()));
  // A better parseInt function
function parseIntX(Vrbl){
  var i, vrb = "";
  switch(typeof Vrbl){
    case "number":
      Vrbl = String(parseInt(Vrbl,10));
      console.log(Vrbl);
    case "string":
      for(i = 0; i < Vrbl.length; i++){
        if(isFinite(parseInt(Vrbl[i]))){
          if(vrb.length == 0 && Vrbl[i] == 0){}
          else{
            vrb += Vrbl[i];
          }
        }
      }
      Vrbl = parseInt(vrb, 10);
      break;
    default:
      Vrbl = parseInt(Vrbl, 10);
      break;
  }
  return Vrbl;
}
console.log(parseIntX("a2b3c123"));
console.log(parseIntX(012342));

function theBiggestNumber(){
  var n = 1, count = 0, holder, add;
  while(isFinite(n)){
    n *= 10;
    count++;
  }
  console.log(`the biggest number is less than 1xe${count}`);
  count--;
  n = 1;
  holder = count;
  while(holder > 0){
    holder--;
    n *= 10;
  }
  console.log(n);
  holder = count;
  while(holder > 0){
    holder--;
    add = 1*holder;
    while(isFinite(n + add)){
      n += add;
    }
    console.log(n);
  }
  console.log(n);
}
theBiggestNumber();
