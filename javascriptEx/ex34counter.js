export let count = 0;

function increase() {
  count += 1;
}

function getCount() {
  return count;
}

export { increase, getCount };