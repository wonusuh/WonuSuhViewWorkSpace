const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');
// 정중앙에 위치시키기
let player = { x: canvas.width / 2 - 25, y: canvas.height / 2 - 25, size: 50, speed: 3 };
let key = {
  ArrowRight: false,
  ArrowLeft: false,
  ArrowUp: false,
  ArrowDown: false
}
let imgReady = false;
let playerImg = new Image();
playerImg.src = './bug.png';

let backImg = new Image();
backImg.src = `./background1.png`;
let backX = 0;

let bulletList = [];

let start = false;
const btn = document.querySelector(`.startBtn`);
btn.addEventListener(`click`, (e) => {
  e.target.style.visibility = `hidden`;
  start = true;
});


function init() {
  playerImg.addEventListener("load", () => {
    imgReady = true;
  })
  backImg.addEventListener(`load`, () => {
    backReady = true;
  });
  document.addEventListener("keydown", e => keyHandler(e, true));
  document.addEventListener("keyup", e => keyHandler(e, false));
  createBullets(10);
}

function drawPlayer() {
  ctx.beginPath();
  //이미지객체 , 시작좌표x, y  이미지크기 가로   세로 
  // ctx.arc(player.x + 25, player.y + 25, player.size / 4, 0, Math.PI * 2);
  // ctx.fill();
  ctx.drawImage(playerImg, player.x, player.y, player.size, player.size);
  ctx.closePath();
}

function keyHandler(e, value) {
  if (key[e.key] !== undefined) {
    key[e.key] = value;
  }
}

function createBullets(size) {
  bulletList = [];
  for (let i = 0; i < size; i++) {
    let bullet = new Bullet();
    bullet.init(player.x, player.y);
    bulletList.push(bullet);
  }

}

function movePlayer() {
  if (key.ArrowRight && player.x < canvas.width - player.size) {
    player.x += player.speed;
  } else if (key.ArrowDown && player.y < canvas.height - player.size) {
    player.y += player.speed;
  } else if (key.ArrowUp && player.y > 0) {
    player.y -= player.speed;
  } else if (key.ArrowLeft && player.x > 0) {
    player.x -= player.speed;
  }
}


function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (!imgReady) return;
  // 다시 배경 입히기
  backX += 1;
  ctx.drawImage(backImg, backX, 0, canvas.width, canvas.height);
  // 빈공간을 다시 배경으로 채워주기
  ctx.drawImage(backImg, backX - canvas.width, 0, canvas.width, canvas.height);
  if (backX == canvas.width) backX = 0;
  if (start) {
    drawPlayer();
    movePlayer();
    bulletList.forEach(bull => bull.render(ctx));
    bulletList.forEach(bull => { bull.update(player.x, player.y) })
  }

  bulletList.forEach(bull => {
    if (bull.isCollision(player.x + 25, player.y + 25, player.size / 4)) {
      console.log("게임오버");
      alert("게임오버");
      clearInterval(interval);
      start = false;
      btn.style.visibility = `visible`;
      startgame();
    }

  })
}
let interval = null;
startgame = () => {
  init();
  interval = setInterval(render, 10);
}
startgame();