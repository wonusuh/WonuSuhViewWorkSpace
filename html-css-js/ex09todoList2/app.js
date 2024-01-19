class App {
  constructor() {
    this.listDom = document.querySelector("#list");
    // this.todoList = []; //작업들을 저장하는 배열
    this.todoList = [];
    this.titleInput = document.querySelector("#title");
    this.contentInput = document.querySelector("#content");
    this.garbage = document.querySelector("#garbage");
    this.msgBox = document.querySelector(".msg-box");
    this.addBtn = document.querySelector(`#addBtn`);

    this.idx = 0;

    this.init();
  }
  // 초기 값 
  init() {
    this.getDataFromStorage();
    this.addBtn.addEventListener(`click`, this.makeAnObj);
    this.garbage.addEventListener(`dragover`, (e) => {
      e.preventDefault();
    });
    this.garbage.addEventListener(`drop`, (e) => {
      e.preventDefault();
      let idx = e.dataTransfer.getData(`idx`);
      let objects = [...document.querySelectorAll(`.item`)];
      let theObject = null;
      for (let i = 0; i < objects.length; i += 1) {
        if (objects[i].getAttribute(`data-idx`) == idx) {
          theObject = objects[i];
          break;
        }
      }
      console.log(theObject);
      if (theObject) {
        // let theIdx = this.todoList.findIndex((obj) => {
        //   obj.idx == idx;
        // });
        let theIdx = -1;
        for (let i = 0; i < this.todoList.length; i += 1) {
          if (idx == this.todoList[i].idx) {
            theIdx = i;
            break;
          }
        }
        console.log(theIdx);
        if (theIdx != -1) {
          setTimeout(this.showMessageWindow("", ` 삭제했습니다.`), 300);
          this.listDom.removeChild(theObject);
          this.todoList.splice(theIdx, 1);
          localStorage.setItem(`todo_list`, JSON.stringify(this.todoList));
        }
      }
    });
  };

  // 로컬스토리에서 저장되는 값 가져오는것 
  getDataFromStorage = () => {
    let data = localStorage.getItem(`todo_list`);
    if (data) {
      this.todoList = data;
      if (this.todoList.length == 0) {
        this.idx = 0;
      } else {
        this.idx = (this.todoList[this.todoList.length - 1].idx) + 1;
      }
      // this.todoList.forEach((obj) => {
      //   this.makeDom(obj);
      // });
      this.todoList = JSON.parse(this.todoList);
      for (let i = 0; i < this.todoList.length; i += 1) {
        this.makeDom(this.todoList[i]);
      }
    }
  }

  // todo값 추가하는 것 
  makeAnObj = () => {
    if (!this.idx) {
      this.idx = 0;
    }
    const obj = {
      idx: this.idx,
      title: this.titleInput.value,
      content: this.contentInput.value,
    };
    this.todoList.push(obj);
    localStorage.setItem(`todo_list`, JSON.stringify(this.todoList));
    this.titleInput.value = ``;
    this.contentInput.value = ``;
    this.makeDom(obj);
    this.idx++;
    this.showMessageWindow(obj.title, ` 추가했습니다.`);
  }

  // html에서 dom 객체 만드는것 
  makeDom = (obj) => {
    // <div class="item">
    //   <h4 class="title">This is what to do!</h4>
    //   <span class="msg">Lorem ipsum</span>
    // </div>
    let item = document.createElement(`div`);
    item.setAttribute(`data-idx`, `${obj.idx}`)
    item.setAttribute(`draggable`, `true`);
    item.addEventListener(`dragstart`, (e) => {
      e.dataTransfer.setData(`idx`, e.target.getAttribute('data-idx'));
      // console.log(e.target.getAttribute('data-idx'));
    });
    item.classList.add(`item`);
    let h4 = document.createElement(`h4`);
    h4.classList.add(`title`);
    h4.innerHTML = `` + obj.title;
    let span = document.createElement(`span`);
    span.classList.add(`msg`);
    span.innerHTML = `` + obj.content;
    item.appendChild(h4);
    item.appendChild(span);
    this.listDom.appendChild(item);
  }

  //todo값 삭제하기 

  // 메세지 띄우기
  showMessageWindow = (title, addOrDel) => {
    this.msgBox.innerHTML = `${title} ${addOrDel}`;
    this.msgBox.classList.add(`on`);
    setTimeout(() => {
      this.msgBox.innerHTML = ``;
      this.msgBox.classList.remove(`on`);
    }, 2000);
  }
}
const app = new App();