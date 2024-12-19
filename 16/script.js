window.onload = function () {
  let boxEl = document.querySelector(`.box`);
  boxEl.addEventListener(`mouseover`, function (e) {
    this.style.background = `yellow`;
  });
  boxEl.addEventListener(`mouseout`, function (e) {
    this.style.background = `black`;
  });

  let menuEl = document.querySelector(".menu");
  document
    .querySelector(".textBlock")
    .addEventListener("contextmenu", function (e) {
      e.preventDefault();
      menuEl.style.top = `${e.clientY}px`;
      menuEl.style.left = `${e.clientX}px`;
      menuEl.style.display = "block";
    });
  document.addEventListener("click", function () {
    menuEl.style.display = "none";
  });

  let imgEl = document.querySelector(`img`);
  imgEl.addEventListener(`mouseover`, function () {
    this.style.transform = `scale(1.2)`;
    this.style.transition = `transform 0.5s ease`;
    this.style.boxShadow = `0 0 10px rgba(0,0,0 0.5)`;
  });
  imgEl.addEventListener(`mouseout`, function () {
    this.style.transform = `none`;
    this.style.boxShadow = `none`;
  });

  let areaEl = document.querySelector(".area");
  let objEL = document.querySelector(".object");
  let posX = 0;
  let posY = 0;

  document.addEventListener("keydown", function (e) {
    switch (e.key) {
      case "ArrowUp":
        posY = Math.max(0, posY - 10);
        break;
      case "ArrowDown":
        posY = Math.min(
            areaEl.clientHeight - objEL.clientHeight,
          posY + 10
        );
        break;
      case "ArrowLeft":
        posX = Math.max(0, posX - 10);
        break;
      case "ArrowRight":
        posX = Math.min(areaEl.clientWidth - objEL.clientWidth, posX + 10);
        break;
    }
    objEL.style.top = `${posY}px`;
    objEL.style.left = `${posX}px`;
  });
};
