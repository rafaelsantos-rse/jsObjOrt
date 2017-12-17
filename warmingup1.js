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
