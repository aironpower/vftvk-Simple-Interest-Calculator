function compute()
{
    principal = document.getElementById("principal");
    rate = document.getElementById("rate").value;
    years = parseInt(document.getElementById("years").value);
    result = document.getElementById("result");
    date = new Date().getFullYear()+years;
    calculate = principal.value * years * rate / 100;

    if(principal.value <= 0) {
        alert("Please, enter a positive number");
        principal.focus();
    } else {
        text = "If you deposit <mark>"+ principal.value+"</mark>,<br>";
        text += "ata an interest rate of <mark>"+ rate+"</mark>,<br>";
        text += "You will receive an amount of <mark>"+ calculate +"</mark>,<br>";
        text += "In the year <mark>"+date+"</mark><br><br>";
        result.innerHTML = text;
    }
    
}

function changeRate() {
    rate = document.getElementById("rate").value;
    percent = document.getElementById("percent");
    percent.innerHTML = rate + " %";
}
