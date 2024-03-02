function calculateAge() {
    var day = parseInt(document.getElementById("Date").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);

    var today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth() + 1; 
    var currentDay = today.getDate();


    var age = currentYear - year;
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
        age--;
    }
    document.getElementById("result").textContent = age;
}
