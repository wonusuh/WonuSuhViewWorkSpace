let cat = {
  kind: `고양이`,
  age: 5,
};
let dog = {
  kind: `개`,
  age: 4,
};
let rabbit = {
  kind: `토끼`,
  age: 0.5,
};
let hamster = {
  kind: `햄스터`,
  age: 1,
};
let pets = [cat, dog, rabbit, hamster, cat];
// pets.forEach(obj => console.log(obj));

// 1. 종이 개인것을 찾아라
let theDog = pets.find(value => value.kind === `개`);
console.log(theDog);

// 2. 종이 고양이인것만 빼서 배열로 만들어라
let exceptCat = pets.filter(value => value.kind != `고양이`);
console.log(exceptCat);

// 3. 평균나이를 구하라
let total = 0;
let averageAge = pets.forEach(
  obj => total += obj.age
);
console.log(total / pets.length);

// 4. 나이순으로 내림차순 정렬해라
let result = [...pets];
result.sort(
  function (a, b) {
    return b.age - a.age;
  }
);
console.log(result);