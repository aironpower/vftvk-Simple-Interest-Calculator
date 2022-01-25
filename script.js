function compute()
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = parseInt(document.getElementById("year").value);
    result = document.getElementById("result");
    date = new Date().getFullYear()+years;
    calculate = calculateInterest(principal, years, rate);

    text = "If you deposit <span class='yellow'>"+ principal+"</span>,<br>";
    text += "ata an interest rate of <span class='yellow'>"+ rate+"</span>,<br>";
    text += "You will receive an amount of <span class='yellow'>"+ calculate +"</span>,<br>";
    text += "In the year <span class='yellow'>"+date+"</span><br><br>";
    result.innerHTML = text;
    
}

function changeRate() {
    rate = document.getElementById("rate").value;
    percent = document.getElementById("percent");
    percent.innerHTML = rate + " %";
}

function calculateInterest(total,year,rate) {
    var interest = rate*year/100+1;
    return Math.round((total*interest)-total);
}
