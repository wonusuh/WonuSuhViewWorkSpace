// console.log(10 + 3);
// console.log(10 - 3);
// console.log(10 * 3);
// console.log(10 / 3);
// console.log(10 % 3);
// console.log(Math.pow(10, 3));
// console.log(10 ** 3);

// console.log(2 - "test");
// console.log(10 / 0);
// console.log(0 / 10);

// // 스트링의 종류 ``(백틱)
// // `` 스트링 탬플릿을 만들 수 있다.
// let name = "서원우";
// const job = "강사";
// let intro = `저는 ${name} 입니다 직업은 ${job}입니다.`;
// console.log(intro);

// let isDead = true;
// console.log(isDead);
// console.log(!isDead);
// console.log(!!isDead);

// console.log(!!0);

// falsy value 
// console.log(!!0); // 숫자 0 
// console.log(!!""); // 문자 빈문자열 
// console.log(!!null);
// console.log(!!undefined);
// console.log(!!NaN);

// // truly value 
// console.log(!!10); // 0 제외한 모든 숫자 
// console.log(!!-10.123); // 음수도 동일
// console.log(!!"test"); // 비어있지 않는 모든 문자 
// console.log(!![]);
// console.log(!!{});
// console.log(!!Infinity);

// // symbol 타입 : 유일무이한 값
// const num1 = `1`;
// const num2 = `1`;
// console.log(num1 == num2);

// 오브젝트 타입 = 자바에서의 맵
let dog = {
  10: '십',
  undefined: '정의되지않는값 ',
  null: '비어있는값',
  // [] : '참조값은 key로 못쓴다 '
}
console.log(dog[10])   // hash.getValue(apple) // 1000;

dog = { 'name': '바둑이', age: 4, isOwner: true };  // 그냥 쓰면 String 으로 자동으로 key값 인식한다 
console.log(dog); // { name: '바둑이', age: 4, isOwner: true }

// 오브젝트 값(속성값) 접근 방법 2가지 
console.log(dog.name);
console.log(dog["name"]);  // dog[name] 하면 에러 뜬다 꼭 스트링으로 key값 넣어주기 ! 

function getKeyValue(object, key) {
  console.log(object[key]);
}
function getKeyValue2(object, key) {
  console.log(object.key); // 순수하게 key 하는 속성값을 객체 안에서 찾는것 : 동적으로 못 바꾼다 

  if (key == 'age') {
    console.log(object.age);
  }
}

getKeyValue(dog, 'age');
getKeyValue(dog, 'isOwner');
getKeyValue(dog, 'name');

getKeyValue2(dog, 'age');

// 객체 값 추가
dog[`ownerName`] = `제임스`;
console.log(dog);

