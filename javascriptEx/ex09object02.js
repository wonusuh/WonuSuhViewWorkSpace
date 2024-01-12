// 자바스크립트에서 중요한 것 : 객체, 함수
let dog = {
  name: `바둑이`,
  age: 4,
  owner: { name: `서원우`, },
  toys: [`개뼉다구`, `밧줄`, `공`,],
  callOwner: function () { // 객체안에 있는 함수는 메서드
    console.log(`${this.owner.name} 놀아줘!`);
  }
};

let cat = {
  name: `나비`,
  age: 3,
  owner: { name: `제임스`, },
  toys: [`캣닢`, `방석`, `낚시줄`,],
  callOwner: function () { // 객체안에 있는 함수는 메서드
    console.log(`${this.owner.name} 놀아줘!`);
  }
};

console.log(dog);
console.log(dog.owner.name);
console.log(dog.toys[2]);
dog.callOwner();
cat.callOwner();

let nameKey = `name`;
let nameValue = `흰둥이`;
let ageKey = `age`;
let ageValue = 3;

const dog2 = {
  [nameKey]: nameValue,
  [ageKey]: ageValue,
};

console.log(dog2);

console.log(Object.keys(cat));

const name = `토끼`;

// const rabbit = {
//   name: name,
// };

const rabbit = {
  name,
};
console.log(rabbit);