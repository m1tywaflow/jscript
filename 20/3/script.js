window.onload = function () {
  let chgBtn = document.querySelector(`button`);
  chgBtn.onclick = function () {
    let root = document.documentElement;
    let curentBg = getComputedStyle(root).getPropertyValue(`--bg-color`);
    if (curentBg === `black`) {
      root.style.setProperty(`--bg-color`, `green`);
      root.style.setProperty(`--text-color`, `yellow`);
      root.style.setProperty(`--tilte-color`, `orange`);
    } else {
      root.style.setProperty(`--bg-color`, `black`);
      root.style.setProperty(`--text-color`, `skyblue`);
      root.style.setProperty(`--tilte-color`, `red`);
    }
  };
};
