let array = [];
array[3] = 100;
console.log(array);

for (let i = 0; i < array.length; i += 1) {
  console.log(`index${i} = ${array[i]}`);
}
console.log(array[-1]);

