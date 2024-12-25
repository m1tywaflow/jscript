window.onload = function () {
  function calculatePrice() {
    let total = 0;

    const size = document.querySelector('input[name="size"]:checked');
    if (size) {
      total += parseInt(size.value);
    }

    const toppings = document.querySelectorAll('input[name="topping"]:checked');
    toppings.forEach((topping) => {
      total += parseInt(topping.value);
    });

    document.getElementById("price").textContent = `Ціна: ${total} грн`;
  }

  document
    .getElementById("pizzaOrderForm")
    .addEventListener("change", calculatePrice);
};
