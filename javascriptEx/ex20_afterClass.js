class Pet {
  constructor(kind, name, age) {
    this.kind = kind;
    this.name = name;
    this.age = age;
  }
  info = () => {
    console.log(`-----${this.kind}-----`);
    console.log(`-----${this.name}-----`);
    console.log(`-----${this.age}-----`);
  }
}
const cat = new Pet(`고양이`, `다주`, 10);
const dog = new Pet(`강아지`, `다롱`, 12);
console.log(cat);
console.log(dog);
cat.info();
dog.info();