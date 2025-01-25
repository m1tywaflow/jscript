window.onload = function () {
  let upEl = `uppercase`;
  let newUpEl = (text) => {
    return new Promise((resolve) => {
      setTimeout(function () {
        console.log("Text to uppercase after 2 sec", text.toUpperCase());
      }, 3000);
      resolve();
    });
  };
  newUpEl(upEl)
    .then((value) => console.log(value))
    .catch((error) => {
      console.log("Error", error);
    });
};
