window.onload = function () {
  let firstNumber = 7;
  let secondNumber = 7;
  let compareNumbers = (a, b) => {
    return new Promise((resolve, reject) => {
      if (a > b) {
        resolve(`Result: ${a}>${b}`);
      } else if (b > a) {
        resolve(`Result: ${b}>${a}`);
      } else {
        reject("Числа рівні");
      }
    });
  };
  compareNumbers(firstNumber, secondNumber)
    .then((value) => console.log(value))
    .catch((error) => {
      console.log("Error result", error);
    });
};
