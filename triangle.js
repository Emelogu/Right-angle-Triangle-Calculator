let a;
let b;
let c;

document.getElementById("submitBtn").onclick = function(){
    a = document.getElementById("aBox").value
    a = Number(a);

    b = document.getElementById("bBox").value
    b = Number(b);

    c= Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    
    document.getElementById("sideC").innerHTML= "Side C: " + c;
}
