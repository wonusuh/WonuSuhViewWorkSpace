class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`먹자!`);
  }
  sleep() {
    console.log(`자자!`);
  }
}
class Teacher extends Person {
  constructor(name, age, teacherNo) {
    super(name, age);
    this.teacherNo = teacherNo;
  }
  teach() {
    console.log(`가르친다.`)
  }
}
class Student extends Person {
  constructor(name, age, stuNo) {
    super(name, age);
    this.stuNo = stuNo;
  }
  eat() {
    console.log(`급식먹자.`)
  }
}
const kim = new Person(`김씨`, 20);
console.log(kim);
const park = new Teacher(`박씨`, 30, 123123);
console.log(park);