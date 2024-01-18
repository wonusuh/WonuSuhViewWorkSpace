class Game1To50 {
  constructor() {
    this.$container = document.querySelector(`.container`);
    this.$timer = document.querySelector(`.timer`);
    this.interval = null;
    this.time = 0;
    this.nodeList = [];
    this.frontList = [];
    this.backList = [];
    this.gameNum = 1;
    this.recode = { min: 0, sec: 0, milSec: 0, cnt: 0 };
    this.gameTime = 0;
    this.gameBtn = document.querySelector(`#start`);
    this.init();
  }
  init() {
    this.gameBtn.addEventListener(`click`, () => {
      this.gameBtn.remove();
      this.$container.style.visibility = `visible`;
      this.$timer.style.visibility = `visible`;
      this.activateTimer();
    });
    this.makeFront();
    this.makeNodeList();
  }
  makeFront() {
    let num = 0;
    for (let i = 0; i < 25; i += 1) {
      num += 1;
      this.frontList.push(num);
      this.backList.push(num + 25);
    }
    this.shuffle(this.frontList);
  }
  makeNodeList() {
    for (let i = 0; i < this.frontList.length; i += 1) {
      let box = document.createElement(`div`);
      box.classList.add(`box`);
      box.setAttribute(`data-idx`, this.frontList[i] + ``);
      box.innerHTML = this.frontList[i] + ``;
      box.addEventListener(`click`, () => {
        if (box.innerHTML == this.gameNum) {
          let value = this.backList[this.gameNum - 1];
          box.innerHTML = `` + value;
          if (this.gameNum > 25) {
            box.style.visibility = `hidden`;
          }
          this.gameNum += 50;
          if (this.gameNum == 51) {
            const $body = document.querySelector(`body`);
            $body.innerHTML = ``;
            const $ending = document.createElement(`div`);
            $ending.classList.add(`ending`);
            clearInterval(this.interval);
            $ending.innerHTML = `(게임 종료) 걸린시간 : ${this.time.toFixed(2)}초`;
            $body.appendChild($ending);
            const $reBtn = document.createElement(`button`);
            $reBtn.classList.add(`reBtn`);
            $reBtn.innerHTML = `다시 시작`;
            $reBtn.addEventListener(`click`, () => {
              location.reload(true);
            });
            $body.appendChild($reBtn);
          }
          console.log(this.gameNum);
        }
        this.flash();
      });
      this.$container.appendChild(box);
    }
  }
  shuffle(list) {
    for (let i = 0; i < 100; i += 1) {
      const ran = parseInt(Math.random() * list.length);
      let temp = list[0];
      list[0] = list[ran];
      list[ran] = temp;
    }
  }
  flash() {
    const boxes = [...document.querySelectorAll(`.box`)];
    boxes.forEach((obj) => {
      if (obj.innerHTML == this.gameNum) {
        obj.style.backgroundColor = `yellow`;
        setTimeout(() => {
          obj.style.backgroundColor = `skyblue`;
        }, 500);
      }
    });
  }
  activateTimer() {
    this.intervalal = setInterval(() => {
      let beforeTime = this.time;
      let now = new Date();
      // this.$timer.innerHTML = num.toFixed(2);
    }, 10)
  }
}
const game = new Game1To50();