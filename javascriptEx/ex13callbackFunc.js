// 콜백함수 : 함수를 호출하는 주체를 남에게 권한 준다.
function sayHi() {
  console.log(`hello~`);
};

// sayHi();

function introduce(lastName, firstName, callback) {
  let fullName = lastName + firstName;
  callback(fullName);
}

introduce(`서`, `원우`, sayHi);