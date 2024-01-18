const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_btn');

let id = 1;

function addItem() {
  let content = String(input.value);
  if (content.trim().length == 0) {
    alert("값이 없습니다");
    input.value = '';
    input.focus();
    return;
  }
  const namelist = [...document.querySelectorAll('.item_name')];
  // alert(content)
  if (namelist.find(span => span.innerText === content)) {
    alert('이미 존재하는 값입니다');
    input.value = '';
    input.focus();
    return;
  }
  addToList(content);
  id += 1;
  input.value = '';
  input.focus();
}

function addToList(value) {
  const data = `<li class="item_row" data-id="${id}">
  <div class="item">
    <span class="item_name"> ${value} </span>
    <button class="item_delete"> <i class="fa-solid fa-trash-can" data-id="${id}"></i> </button>
  </div>
</li>`;
  items.innerHTML += data;
}

addBtn.addEventListener('click', addItem);
input.addEventListener('keydown', (event) => {
  // 한글 입력시 두번 이벤트 처리되는것 막아주는 역할 
  if (event.isComposing) return;
  if (event.code === 'Enter') {
    addItem();
  }
  //console.log(event.code);
})

function deleteItem(id) {
  const delItem = document.querySelector(`.item_row[data-id='${id}']`);
  delItem.remove();
}
items.addEventListener('click', (event) => {
  let id = event.target.getAttribute('data-id');
  if (!id) {
    // path / svg 선택했을때 path로 잡히면 그것에 부모인 svg(data-id) 선택
    id = event.target.parentElement.getAttribute('data-id');
    // 아이템을 선택했을시는 삭제 안되게 막아줌 
    if (event.target.parentElement.classList.value === 'item_row') return;
    // console.log(id);
    // console.log("test1=", event.target);
    // console.log("test2=", event.target.parentElement);
  }
  id && deleteItem(id);
  // console.log(event.currentTarget);
})