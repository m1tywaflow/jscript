window.onload = function(){
    document.getElementById('convert').addEventListener('click', function() {
        const amount = parseFloat(document.getElementById('amount').value);
        const rate = parseFloat(document.getElementById('rate').value);

        if (isNaN(amount) || isNaN(rate) || amount <= 0 || rate <= 0) {
            document.getElementById('result').textContent = 'Ви ввели не коректні данні.';
            return;
        }

        const convertedAmount = amount / rate;
        document.getElementById('result').textContent = `Результат: ${convertedAmount.toFixed(2)} ($,€...)`;
    });
}