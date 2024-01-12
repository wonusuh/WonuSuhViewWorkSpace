class Student {
  static count = 0;
  #id;
  #name;
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }
}
const stu1 = new Student(2019122104, `Park`);
const stu2 = new Student(2019206028, `Kim`);
const stu3 = new Student(2019153237, `Lee`);

console.log(stu1.name);
stu1.name = `서원우`;
console.log(stu1.name);