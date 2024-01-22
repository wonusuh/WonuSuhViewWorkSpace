const canvas = document.querySelector(`#canvas`);
const ctx = canvas.getContext(`2d`);
let key = {
  right: false,
  left: false,
  up: false,
  down: false,
};
let player = {
  x: 150,
  y: 150,
  size: 50,
  color: `blue`,
};
let enemy = {
  x: canvas.width / 2 - 40,
  y: canvas.height / 2 - 40,
  size: 80,
  color: `green`,
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawEnemy();
  drawPlayer();
}

function drawPlayer() {
  ctx.beginPath();
  ctx.rect(player.x, player.y, player.size, player.size);
  ctx.fillStyle = player.color;
  ctx.fill();
  ctx.closePath();

  movePlayer();
}

function drawEnemy() {
  ctx.beginPath();
  ctx.rect(enemy.x, enemy.y, enemy.size, enemy.size);
  ctx.fillStyle = enemy.color;
  ctx.fill();
  ctx.closePath();
  if (player.x + player.size > enemy.x
    && player.x < enemy.x + enemy.size
    && player.y + player.size > enemy.y
    && player.y < enemy.y + enemy.size) {
    ctx.fillStyle = `red`;
    ctx.fill();
  }
}

function movePlayer() {
  if (key.right && player.x < canvas.width - player.size) {
    player.x += 5;
  } else if (key.down && player.y < canvas.height - player.size) {
    player.y += 5;
  } else if (key.up && player.y > 0) {
    player.y -= 5;
  } else if (key.left && player.x > 0) {
    player.x -= 5;
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

setInterval(draw, 10);