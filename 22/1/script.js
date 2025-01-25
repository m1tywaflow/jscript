window.onload = function(){
    let number = 7;
    let newP = new Promise(resolve=>resolve(number))
    .then(value=>value+5)
    .then(value=>value*2)
    .then(value=>value-10)
    .then(value=>console.log(`Result: ${value}`)).catch((error)=>{
      console.log(`Promise error ${error}`);
    });
}