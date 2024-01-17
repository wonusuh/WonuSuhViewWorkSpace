{/* <li class="item_row" data-id="1">
<div class="item">
<span class="item_name"> 우유 </span>
<button class="item_delete"> <i class="fa-solid fa-trash-can" data-id="1"></i> </button>
</div>
</li> */}
let numberOfItems = 0;
let itemList = new Array();

function addAnItem() {
  let input = document.querySelector(`.footer_input`);
  myValue = input.value.trim();
  if (myValue == ``) {
    alert(`값이 없습니다`);
    return;
  }
  if (itemList.find((obj) => obj == myValue)) {
    alert(`이미 ${myValue} 이(가) 존재합니다.`);
    return;
  }
  let $items = document.querySelector(`.items`);
  let anItem = `
  <li class="item_row" data-id="${numberOfItems}">
    <div class="item">
      <span class="item_name">${myValue}</span>
      <button class="item_delete"> <i class="fa-solid fa-trash-can" data-id="${numberOfItems++}"></i> </button>
    </div>
  </li>`;
  $items.innerHTML += anItem;
  itemList.push(myValue);
}

let addBtn = document.querySelector(`.footer_btn`);
addBtn.addEventListener(`click`, addAnItem);

function enterKey() {
  if (window.event.keyCode == 13) {
    addAnItem();
  }
}
