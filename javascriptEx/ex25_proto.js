const cat = {};

console.log(cat.__proto__);

function Pet(name, age) {
  this.name = name;
  this.age = age;
}
console.log(Pet.prototype);
console.dir(Pet.prototype, { showHidden: true });

console.log(Pet.prototype.constructor === Pet);
console.log(Pet.prototype.constructor.prototype === Pet.prototype);