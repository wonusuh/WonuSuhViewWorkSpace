const vertical = document.querySelector(`.vertical`);
const horizontal = document.querySelector(`.horizontal`);
const target = document.querySelector(`.target`);
const loc = document.querySelector(`.loc`);

document.addEventListener(`mousemove`, (event) => {
  console.log(event.currentTarget);
  const x = event.clientX;
  const y = event.clientY;
  console.log(`x : ${x}, y : ${y}`);

  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  loc.style.left = `${x}px`;
  loc.style.top = `${y}px`;
  loc.innerHTML = `test`;
});