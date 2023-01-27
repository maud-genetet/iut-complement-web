function changeBackground() {
    let color = document.getElementById("firstLink").style.backgroundColor;

    if (color=="blue") {
        document.getElementById("firstLink").style.backgroundColor = "red"
    }
    else {
        document.getElementById("firstLink").style.backgroundColor = "blue"
    }

}


function changeText(){
    document.getElementById("secondLink").innerHTML = "coucou";
    document.getElementById("secondLink").style.backgroundColor = "orange"
    
}
   