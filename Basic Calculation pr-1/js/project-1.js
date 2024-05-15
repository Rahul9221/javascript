var p = 1000;
var r=7;
var y=55;

var s=(p*r*y)/100;
var p=(100*s)/(r*y);
var r=(100*s)/(p*y);
var y=(100*s)/(p*r);
var s=p+s;
var t=s-p;


document.getElementById("title").innerHTML = " Simple Interest";

document.getElementById("principle").innerHTML = " Principal Amount :-";

document.getElementById("principle-amout").innerHTML = p;

document.getElementById("ratep").innerHTML = "  Rate of interest :-";

document.getElementById("rataamount").innerHTML = r;

document.getElementById("time").innerHTML = "  Number of years:-";

document.getElementById("year").innerHTML = y;

document.getElementById("accured").innerHTML="Total accrued amount :- "

document.getElementById("amount").innerHTML=s;

document.getElementById("Interest").innerHTML= "Interest :-";

document.getElementById("integar").innerHTML=t;







