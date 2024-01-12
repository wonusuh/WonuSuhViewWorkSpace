function myFunction(start, end) {
  if (isNaN(start) || isNaN(end)) {
    console.log(`숫자를 입력해주세요.`);
    return;
  }
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  };
  let temp = ``;
  for (let i = start; i <= end; i += 1) {
    temp += i;
    if (i != end) {
      temp += `, `;
    }
  };
  console.log(temp);
};
myFunction(0, 5);
console.log(`----------------------------`);
myFunction(5, 15);
console.log(`----------------------------`);
myFunction(15, 1);
console.log(`----------------------------`);
myFunction(15, `test`);