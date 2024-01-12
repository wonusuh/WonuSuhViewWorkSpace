let cat = {
  kind: `고양이`,
  name: `나비`,
  age: 2,
  info: function () {
    console.log(`-----${this.kind}-----`);
    console.log(`-----${this.name}-----`);
    console.log(`-----${this.age}-----`);
  }
};
let dog = {
  kind: `개`,
  name: `바둑이`,
  age: 3,
  info: function () {
    console.log(`-----${this.kind}-----`);
    console.log(`-----${this.name}-----`);
    console.log(`-----${this.age}-----`);
  }
};
let hamster = {
  kind: `햄스터`,
  name: `모찌`,
  age: 4,
  info: function () {
    console.log(`-----${this.kind}-----`);
    console.log(`-----${this.name}-----`);
    console.log(`-----${this.age}-----`);
  }
};