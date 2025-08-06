const apiKey = '4ea86dca4c37e8ef0e39c388';


document.getElementById('btn').addEventListener('click', async() => {
    const amount = parseFloat(document.getElementById('amount').value);
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;

    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').textContent = 'Please enter a valid amount.';
        return;
    }

    try {
        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
        const response = await fetch(url);
        const data = await response.json();

        const rate = data.conversion_rates[to];
        const converted = amount * rate;

        document.getElementById('result').textContent = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
    }
    catch (error) {
        document.getElementById('result').textContent = error.message;
        console.log(error);
    }
})