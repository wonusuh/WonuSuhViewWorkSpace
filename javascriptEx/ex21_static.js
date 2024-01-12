class Student {
  static count = 0;
  constructor(id, name) {
    this.id = id;
    this.name = name;
    Student.count += 1;
  }
  printInfo = () => {
    console.log(`-----${this.id}-----`);
    console.log(`-----${this.name}-----`);
  }
  static getTotalStuCnt = () => {
    console.log(`총 학생 `, this.count, ` 명`);
  }
}
Student.getTotalStuCnt();
const stu1 = new Student(2019122104, `Park`);
const stu2 = new Student(2019206028, `Kim`);
const stu3 = new Student(2019153237, `Lee`);
stu1.printInfo();
stu2.printInfo();
stu3.printInfo();
Student.getTotalStuCnt();