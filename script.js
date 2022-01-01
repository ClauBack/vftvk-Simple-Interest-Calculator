function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100; //why is this showing an error
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
    if (principal.value == "0 or <1"){
        alert("Enter a positive number");
    } else {//if "Ok" return user to "principal" input box
    }
    // Not sure why we have 'p' value above and then another var Principal = document...
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    output.innerHTML = rangeslider.value;
    rangeslider.onchange = function() {
        output.innerHTML = this.value;
    }
}
        