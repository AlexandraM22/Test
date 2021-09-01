function obtener(x){
    let valorinput= document.getElementById("entry").value;
    if(valorinput == x){
        alert("This is the number")
    }
    else{
        alert("Try again, you are close")
        if(valorinput > x){
            alert("Your number is bigger than x")
        }
        else{
            alert("Your number is smaller than x")
        }
    }
}
var x = Math.floor(Math.random()*100)