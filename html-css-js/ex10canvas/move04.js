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
  x: 40,
  y: canvas.height / 2 - 40,
  size: 80,
  color: `green`,
};
let enemies = [];
makeEnemies(6);
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
  drawEnemy();

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
  for (let i = 0; i < enemies.length; i += 1) {
    ctx.beginPath();
    ctx.rect(enemies[i].x, enemies[i].y, enemies[i].size, enemies[i].size);

    if (player.x + player.size > enemies[i].x
      && player.x < enemies[i].x + enemies[i].size
      && player.y + player.size > enemies[i].y
      && player.y < enemies[i].y + enemies[i].size) {
      ctx.fillStyle = `red`;
      ctx.fill();
    } else {
      ctx.fillStyle = `green`;
      ctx.fill();
    }
    ctx.closePath();
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

function makeEnemies(number) {
  for (let i = 0; i < number; i += 1) {
    let anEnemy = {
      x: i * 150,
      y: canvas.height / 2 - 40,
      size: 80,
      color: `green`,
    };
    enemies.push(anEnemy);
  }
}

setInterval(draw, 10);