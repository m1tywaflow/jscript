window.onload = function(){
    // Task 1
    let ulItems = document.querySelector('#tree');
    let firstList = ulItems.children;
    let QuantFirstList = ulItems.children.length;
    console.log(firstList);
    console.log(`Quantity of first list ${QuantFirstList}`);
    for (let item of firstList){
      console.log(item.children);
      console.log(`Quantity of second list ${item.childElementCount}`);
    }
  // Task 2
  const booksArray = [
    {title: 'Alice in Wonderland', year: 1865, rating: 4.5},
    {title: '1984', year: 1949, rating: 4.8},
    {title: 'Harry Potter', year: 1997, rating: 4.7}
    ];
  const booksTable = document.getElementById('books-table');
  booksArray.forEach(book => {
    const items = document.createElement('tr');
    items.innerHTML = `<td>${book.title}</td><td>${book.year}</td><td>${book.rating}</td>`;
    booksTable.appendChild(items);
  });
  // Task 3
  const elementsArray = [
  { tag: 'p', text: 'Елемент 1' },
  { tag: 'div', text: 'Елемент 2' },
  { tag: 'span', text: 'Елемент 3' }
  ];
  function createElement(obj){
    const element = document.createElement(obj.tag);
    element.textContent = obj.text;
    return element;
  }
  const container = document.getElementById('container');
  elementsArray.forEach(elObj => {
    const newEl = createElement(elObj);
    container.appendChild(newEl);
  });
  // Task 4
  const prependArray = [
    {text: 'Елемент 1', usePrepend: true},
    {text: 'Елемент 2', usePrepend: false},
    {text: 'Елемент 3', usePrepend: true}
  ];
  prependArray.forEach(el => {
    const newElement = document.createElement('p');
    newElement.textElement = el.text;
  if (el.usePrepend){
    container.prepend(newElement);
  }
  else {
    container.appendChild(newElement);
  }
  });
  }