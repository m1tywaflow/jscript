window.onload = function(){
    let [...hobbyChek] = document.querySelectorAll(`input[name="hobby"]`);
    let selectbox = document.querySelector(`#selected`);
    hobbyChek.forEach(checkbox=>{
        checkbox.addEventListener(`change`, function(){
            let checkedHobbies = hobbyChek.filter(i=>i.checked).map(i=>i.value);
            selectbox.textContent = `Ви обрали такі хоббі: ${checkedHobbies.join(`, `)}`;
        });
    });
}