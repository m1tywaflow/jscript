window.onload = function () {
  document.querySelectorAll('input[name="color"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      document.body.style.backgroundColor = this.value;
    });
  });
};
