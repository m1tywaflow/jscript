window.onload = function(){
    function printMessageAfterDelay(message, delay) {
        setTimeout(function() {
            console.log(message);
        }, delay);
    }
    printMessageAfterDelay("Hello world!", 3000);
}