
window.onload = function() {
    let idElement = document.getElementById(`byid`);
    console.log(idElement);

    let classElement = document.getElementsByClassName(`section-one`);
    console.log(classElement);

    let tagElement = document.getElementsByTagName(`div`);
    console.log(tagElement);

    let firstLi = document.querySelector('ul li');
    console.log(firstLi);

    let lastLi = document.querySelector('ul li:last-child');
    console.log(lastLi);

    let thirdLi = document.querySelector('ul li:nth-child(3)');
    console.log(thirdLi);

    let allLi = document.querySelectorAll('ul li');
    console.log(allLi);

    let [...allLiArr] = document.querySelectorAll('ul li');
    console.log(allLiArr);

    let listItems = document.querySelectorAll('ul.nav > li');
    console.log(listItems);

    let listItem = document.querySelectorAll('li:nth-child(2)');
    console.log(listItem);
};