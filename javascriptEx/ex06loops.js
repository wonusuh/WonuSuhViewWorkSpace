let i = 1;
while (i <= 10) {
  console.log(i);
  i += 1;
};

// for - in
let array = [10, 20, 30, 40, 50, 60];
for (let i in array) {
  console.log(i);
};

console.log(`-----------------------`);

// for - of
for (let i of array) {
  console.log(i);
};

let dog = {
  name: `바둑이`,
  age: 5,
  owner: { name: `서원우`, },
};

for (let key in dog) {
  console.log(key);
};
for (let key in dog) {
  console.log(key, dog[key]);
};
console.log(`서원우` == true);