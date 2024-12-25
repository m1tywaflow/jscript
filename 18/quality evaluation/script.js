window.onload = function(){
    const [...radioButtonsEl] = document.querySelectorAll('input[name="raiting"]');
    const resultEl = document.querySelector('#ratingResult');
    radioButtonsEl.forEach(radioEl =>{
        radioEl.addEventListener('change', function(){
            resultEl.textContent = `Ваша оцінка обслуговування ${this.value}`;
        });
    });
}