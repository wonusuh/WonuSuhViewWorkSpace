const dog = {
  name: `바둑이`,
  year: 2021,
  get age() {
    return new Date().getFullYear - this.year;
  },
  set age(age) {
    this.year = new Date().getFullYear() - age;
  }
};
