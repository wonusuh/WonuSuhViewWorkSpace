// 자바스크립트에서 랜덤으로 값을 가져오기
// console.log(parseInt(Math.random() * 10));
// console.log(parseInt(Math.random() * 100));

// 1. 1~100 사이의 랜덤의 수의 홀짝을 판단하는 함수 작성
function checkNum(num) {
  if (num % 2 === 0) {
    console.log(num, `짝수입니다.`);
  } else {
    console.log(num, `홀수입니다.`);
  }
};
let num = parseInt(Math.random() * 100);
checkNum(num);

// 2. 배열에 (-100~100) 사이의 수를 저장한 후 홀짝을 판단하는 함수를 작성하세요.
function isAllOddNum() {
  let result = [4];
  let isEven = false;
  for (let i = 0; i < 4; i += 1) {
    let min = -100;
    let max = 100;
    let ran = parseInt(Math.random() * (max - min + 1) + min);
    if (ran % 2 == 0) {
      isEven = true;
    }
    result[i] = ran;
  }
  console.log(result);
  if (isEven) {
    console.log(`짝수가 포함돼있습니다.`);
  } else {
    console.log(`모두 홀수입니다.`);
  }
};
isAllOddNum();