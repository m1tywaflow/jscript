window.onload = function () {
  let buttonEl = document.querySelector(`.btn`);
  let pEl = document.querySelector(`p`);
  buttonEl.addEventListener("click", function () {
    pEl.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  });

  let block = document.querySelector(".blck");
  block.ondblclick = function () {
    block.style.width = block.offsetWidth * 2 + "px";
    block.style.height = block.offsetHeight * 2 + "px";
  };

  let counter = 0;
  let btn = document.querySelector(".counter");
  let count = document.querySelector(".counterText");
  btn.addEventListener("click", function () {
    counter++;
    count.textContent = `Counter: ${counter}`;
    if (counter >= 10) {
      btn.removeEventListener("click", arguments.callee);
    }
  });

  let [...divElement] = document.querySelectorAll('.items');
  divElement.forEach(item => {
    item.onclick = function(){
      this.remove();
    }
  });
  let container = document.querySelector('.blockContainer');
  container.onclick = function(event){
    alert (`You enter the button ${event.target.innerHTML}`);
  }
};
