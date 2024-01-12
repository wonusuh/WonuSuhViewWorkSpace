class Counter {
  #value = 0;
  constructor(value) {
    if (value < 0) {
      console.log(`${value} 는 0 이상이어야 합니다.`);
    } else {
      this.#value = value;
    }
  }
  increase() {
    this.#value += 1;
  }
  get value() {
    return this.#value;
  }
  set value(amount) {
    this.#value = amount;
    if (this.#value < 0) {
      this.#value = 0;
    }
  }
}
const counter2 = new Counter(-100);
console.log(counter2.value);
const counter1 = new Counter(5);
console.log(counter1);
console.log(counter1.value);

counter1.increase();
console.log(counter1.value);

counter1.increase();
console.log(counter1.value);

counter1.value = -100;
console.log(counter1.value);