window.onload = function () {
  let bodyEl = document.querySelector("body");
  let headerEl = document.createElement("header");
  bodyEl.appendChild(headerEl);
  headerEl.setAttribute("style", "padding:50px");
  headerEl.style.backgroundColor = "yellow";
  headerEl.style.textAlign = "center";
  const menuData = [
    { name: "Головна", url: "/" },
    { name: "Про нас", url: "/about" },
    { name: "Послуги", url: "/services" },
  ];
  for (let menu of menuData) {
    let linkEl = document.createElement("a");
    headerEl.appendChild(linkEl);
    linkEl.innerHTML = menu.name;
    linkEl.setAttribute("href", menu.url);
    linkEl.setAttribute("target", "_blank");
  }
  let containerB = document.createElement("containerB");
  headerEl.after(containerB);
  containerB.style.display = "flex";
  for (let i = 0; i < 50; i++) {
    let div = document.createElement("div");
    containerB.appendChild(div);
    div.style.borderRadius = "30%";
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.backgroundColor = "green";
    div.setAttribute("class", "circle-elemt");
  }
};
