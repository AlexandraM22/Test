function obtener(a){
    let valorinput= document.getElementById("entry").value;
    if(valorinput == a){
        alert("This is the number")
    }
    else{
        alert("Try again, you are close")
        if(valorinput > a){
            alert("Your number is bigger than x")
        }
        else{
            alert("Your number is smaller than x")
        }
    }
}
var a = Math.floor(Math.random()*100)