const person = {
    firstName: "Ali",
    age: 23
}

const person2 = {
    firstName: "Giovanni",
    age: 55
}

class Person {
    constructor(firstName, age){
        this.firstName = firstName || "" // in the constructor we define and assign to create properties
        this.age = age || 0
    }

    tellAge(){
        return this.age
    }
}

const Marco = new Person("Marco", 48) //Here you see the constructor function ivoked
const Carlos = new Person("Carlos", 25) //Here you see the constructor function ivoked
const Carol = new Person("Carol", 24) //Here you see the constructor function 

console.log(Carol.tellAge())
console.log(Marco.tellAge())
console.log(Carlos.tellAge())


class Animal {
    constructor(nameOfAnimal, ageOfAnimal){
      this.fur = ""
      this.weight = 0
      this.age = ageOfAnimal
      this.legs = 4
      this.name = nameOfAnimal
    }
  
    speak(){
      return `Hello I am ${this.name}`
    }
  
    walk(){
      return `I am going out alone because I am ${this.age} years old`
    }
  }


const snowflake = new Animal ("Snowflake", 3)

/*console.log(snowflake.speak(),
           snowflake.walk())
*/


class Cat extends Animal{
    constructor(nameOfAnimal, ageOfAnimal){
        super(nameOfAnimal, ageOfAnimal)
        this.kind = "cat"
    }
}

class Dog extends Animal{
    constructor(nameOfAnimal, ageOfAnimal){
        super(nameOfAnimal, ageOfAnimal)
        this.kind = "dog"
    }
    speak(){
        return super.speak() + `and i am a ${this.kind}`
    }
}

const martini = new Dog("Martini", 12)
console.log("martini speaks and walks", martini.speak(), martini.walk())

const santana = new Cat("Satana", 9)
console.log("santana speaks and walks: ", santana.speak(), santana.walk())