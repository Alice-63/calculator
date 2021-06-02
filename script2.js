


function rechnen(add)
{
    if(add=="+")
    {
        // var zahl1=parseInt(document.getElementById("zahl1").value);
        // var zahl2=parseInt(document.getElementById("zahl2").value);

        var summe=addieren("zahl1","zahl2");
        document.getElementById("erg1").innerHTML=summe;
    }
    else if(add=="-")
    {
        // var zahl3=parseInt(document.getElementById("zahl3").value);
        // var zahl4=parseInt(document.getElementById("zahl4").value);

        var summe2=subtrahieren("zahl3", "zahl4");

        document.getElementById("erg2").innerHTML=summe2;

    }
    else if(add=="/")
    {
        // var zahl5=parseInt(document.getElementById("zahl5").value);
        // var zahl6=parseInt(document.getElementById("zahl6").value);

        var summe3=dividieren("zahl5", "zahl6");

        document.getElementById("erg3").innerHTML=summe3;

    }
    else if(add=="*")
    {
        // var zahl7=parseInt(document.getElementById("zahl7").value);
        // var zahl8=parseInt(document.getElementById("zahl8").value);

        var summe4=multip("zahl7", "zahl8");

        document.getElementById("erg4").innerHTML=summe4;

    }
}

function addieren(a,b)
{
    var x=parseInt(document.getElementById(a).value);
    var y=parseInt(document.getElementById(b).value);

    return x+y;

}
function subtrahieren(a,b)
{
    var x=parseInt(document.getElementById(a).value);
    var y=parseInt(document.getElementById(b).value);
    
    return x-y;
}
function dividieren(a,b)
{
    var x=parseInt(document.getElementById(a).value);
    var y=parseInt(document.getElementById(b).value);
    
    return x/y;
}
function multip(a,b)
{
    var x=parseInt(document.getElementById(a).value);
    var y=parseInt(document.getElementById(b).value);
    
    return x*y;
}