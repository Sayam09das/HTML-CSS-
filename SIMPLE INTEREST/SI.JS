
    function calculateSimpleInterest() {
    // Getting input values
    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value);
    var time = parseFloat(document.getElementById('time').value);

    // Checking if input values are valid
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        document.getElementById('result').innerHTML = "Please enter valid numbers";
        return;
    }

    // Calculating simple interest
    var interest = (principal * rate * time) / 100;

    // Displaying the result
    document.getElementById('result').innerHTML = "Simple Interest: " + interest.toFixed(2);
}

