window.onload = function () {
  let textStr ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";

  let capitalLett = textStr.match(/[A-Z]/g) || [];
  console.log(capitalLett);

  let operation = "5 плюс 7 = 3";
  let operResult = operation.match(/\d+/g);
  console.log(operResult);

  let fiveSymb = textStr.match(/\b\w{5}\b/g);
  console.log(fiveSymb);
}
