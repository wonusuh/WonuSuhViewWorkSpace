const canvas = document.querySelector(`#canvas`);
const ctx = canvas.getContext(`2d`);
let key = {
  right: false,
  left: false,
  up: false,
  down: false,
};
let player = {
  x: canvas.width / 2 - 25,
  y: canvas.height - 50,
  size: 50,
  color: `blue`,
  speed: 5,
  img: null,
};
let playerImg = new Image();
playerImg.src = `./img/player.png`;
player.img = playerImg;
let poopImg = new Image();
poopImg.src = `./img/poop.png`;
let enemies = [];
makeEnemies(10);
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSpots();
  drawPlayer();
  drawEnemy();
}

function drawPlayer() {
  ctx.beginPath();
  // ctx.rect(player.x, player.y, player.size, player.size);
  // ctx.fillStyle = player.color;
  ctx.drawImage(player.img, player.x, player.y, player.size, player.size);
  ctx.fill();
  ctx.closePath();

  movePlayer();
}

function drawEnemy() {
  for (let i = 0; i < enemies.length; i += 1) {
    ctx.beginPath();
    ctx.rect(enemies[i].x, enemies[i].y += enemies[i].speed, enemies[i].size, enemies[i].size);
    if (enemies[i].y > 600) {
      enemies[i].y = 0;
      enemies[i].speed = (Math.random() * (10 - 1)) + 1;
    }
    if (player.x + player.size > enemies[i].x
      && player.x < enemies[i].x + enemies[i].size
      && player.y + player.size > enemies[i].y
      && player.y < enemies[i].y + enemies[i].size) {
      ctx.fillStyle = `red`;
      ctx.fill();
      // clearInterval(interval);
    } else {
      ctx.fillStyle = `green`;
      ctx.fill();
    }
    ctx.closePath();
  }
}

window.addEventListener(`keydown`, (e) => {
  keyHandler(e, true);
});

window.addEventListener(`keyup`, (e) => {
  keyHandler(e, false);
});

function keyHandler(e, value) {
  if (e.key === 'ArrowRight') {
    key.right = value;
  } else if (e.key === 'ArrowDown') {
    key.down = value;
  } else if (e.key === 'ArrowUp') {
    key.up = value;
  } else if (e.key === 'ArrowLeft') {
    key.left = value;
  }
}
function movePlayer() {
  if (key.right && player.x < canvas.width - player.size) {
    player.x += player.speed;
  } else if (key.down && player.y < canvas.height - player.size) {
    player.y += player.speed;
  } else if (key.up && player.y > 0) {
    player.y -= player.speed;
  } else if (key.left && player.x > 0) {
    player.x -= player.speed;
  }
}


function makeEnemies(numberOfEnemies) {
  for (let i = 0; i < numberOfEnemies; i += 1) {
    let anEnemy = {
      x: i * 80,
      y: 0,
      size: 80,
      color: `green`,
      speed: (Math.random() * (10 - 1)) + 1,
      img: poopImg,
    };
    enemies.push(anEnemy);

  }
}

function drawSpots() {
  let x = 0;
  for (let i = 0; i < enemies.length; i += 1) {
    ctx.beginPath();
    ctx.rect(x, 0, 10, 10);
    ctx.fillStyle = `navy`;
    ctx.fill();
    ctx.closePath();
    x += 80;
  }
}

const interval = setInterval(draw, 10);