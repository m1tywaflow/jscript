window.onload = function(){
    let btnEl = document.querySelector(`button`);
    btnEl.addEventListener(`click`, function(){
        let counter = 0;
        let interval = setInterval(()=>{
            console.log(++counter);
            if(counter>=10){
                clearInterval(interval)
                console.log(`Stop timer`);
            }
        },1000);
    })
}