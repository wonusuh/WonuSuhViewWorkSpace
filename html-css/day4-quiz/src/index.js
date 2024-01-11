// 각 퀴즈에 대한 정답을 배열에 입력
const answer1 = ["상속"];
const answer2 = ["@import"];
const answer3 = [
  "text-decoration: underline",
  "text-decoration:underline",
  "text-decoration: underline;",
  "text-decoration:underline;",
  "text-decoration : underline",
  "text-decoration : underline;",
];
const answer4 = ["72px", "72"];

const clickSubmitBtn = (quizNum) => {
  const result = document.getElementById(`quiz${quizNum}`).value;
  let resultSpan = document.getElementById(`resultStr${quizNum}`);
  const resultSpanBox = document.getElementById(`quizResultStr${quizNum}`);
  const resultBox = document.getElementById(`quizBox${quizNum}`);
  let userResult = false;

  if (String(quizNum) === "1") {
    if (answer1.includes(result)) {
      userResult = true;
    } else {
      userResult = false;
    }
  }
  if (String(quizNum) === "2") {
    if (answer2.includes(result)) {
      userResult = true;
    } else {
      userResult = false;
    }
  }
  if (String(quizNum) === "3") {
    if (answer3.includes(result)) {
      userResult = true;
    } else {
      userResult = false;
    }
  }
  if (String(quizNum) === "4") {
    if (answer4.includes(result)) {
      userResult = true;
    } else {
      userResult = false;
    }
  }

  const checkUserResult = () => {
    if (userResult) {
      resultBox.classList.remove("red");
      resultBox.classList.add("blue");
      resultSpanBox.classList.remove("red");
      resultSpanBox.classList.add("blue");
      return "정답입니다!";
    } else {
      resultBox.classList.remove("blue");
      resultBox.classList.add("red");
      resultSpanBox.classList.remove("blue");
      resultSpanBox.classList.add("red");
      const resultText = document.createTextNode("오답입니다!");
      return "오답입니다!";
    }
  };

  const resultText = document.createTextNode(checkUserResult());
  resultSpan.innerText = "";
  resultSpan.appendChild(resultText);
};
