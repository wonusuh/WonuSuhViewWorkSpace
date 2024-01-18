let turn = `O`;
let count = 0;
const $table = document.querySelector(`table`);
const boxes = [...document.querySelectorAll(`td`)];
const startBtn = document.querySelector(`#start`).addEventListener(`click`, () => {
  location.reload(true);
});

boxes.forEach((aBox) => {
  aBox.addEventListener(`click`, () => {
    if (aBox.innerHTML) {
      alert(`같은곳에 표기할 수 없습니다.`);
      return;
    }
    aBox.innerHTML = turn;
    aBox.style.backgroundColor = turn == `O` ? `pink` : `skyblue`;
    if (checkHorizontal() || checkVertical() || checkBackSlash() || checkSlash()) {
      return;
    }
    if (turn == `O`) {
      turn = `X`;
    } else {
      turn = `O`;
    }
    count += 1;
    if (count == 9) {
      printWinner(`비겼습니다.`);
    }
  });
});
function checkHorizontal() {
  for (let i = 0; i < 9; i += 3) {
    if ((boxes[i].innerHTML != ``) && (boxes[i].innerHTML == boxes[i + 1].innerHTML && boxes[i + 1].innerHTML == boxes[i + 2].innerHTML)) {
      printWinner(`${turn} 가로 승리`);
      return true;
    }
  }
}
function checkVertical() {
  for (let i = 0; i < 3; i += 1) {
    if ((boxes[i].innerHTML != ``) && (boxes[i].innerHTML == boxes[i + 3].innerHTML && boxes[i + 3].innerHTML == boxes[i + 6].innerHTML)) {
      printWinner(`${turn} 세로 승리`);
      return true;
    }
  }
}
function checkBackSlash() {
  if ((boxes[0].innerHTML != ``) && (boxes[0].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[8].innerHTML)) {
    printWinner(`${turn} 대각선 승리`);
    return true;
  }
}
function checkSlash() {
  if ((boxes[2].innerHTML != ``) && (boxes[2].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[6].innerHTML)) {
    printWinner(`${turn} 대각선 / 승리`);
    return true;
  }
}
function printWinner(result) {
  setTimeout(() => {
    let $div = document.createElement(`div`);
    $div.classList.add(`winner`);
    $div.innerHTML = result;
    $table.innerHTML = ``;
    $table.appendChild($div);
  }, 1000);
}