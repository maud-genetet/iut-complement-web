const myRequest = new Request('planches.json');
const biarritz  = document.getElementsByClassName("biarritz");
const lacanau = document.getElementsByClassName("lacanau");
const nice = document.getElementsByClassName("nice");

function prixDeVente(){
    fetch(myRequest)
    .then((response)=> response.json())
    .then((data) => {
        for (const v of data){
            document.getElementsByClassName(v.modele)[0].childNodes[3].innerText  = v.prixDeVente;
            document.getElementsByClassName(v.modele)[0].childNodes[4].innerText  = v.prixAchat;
        }
    })
}
function getPlanchesVendues(){
    var select = document.getElementById("typePlanche");
    var choice = select.selectedIndex; 
    var name = select.options[choice].value;
    var valNice = document.getElementsByClassName("nice")[0].childNodes[2].innerText;
    var valbr = document.getElementsByClassName("biarritz")[0].childNodes[2].innerText;
    var valLa = document.getElementsByClassName("lacanau")[0].childNodes[2].innerText;
    if (name == "biarritz"){
        valbr = Math.floor(Math.random() * (800 - 180) ) + 180;
    }
    else if (name=="lacanau"){
        valLa  = Math.floor(Math.random() * (1000 - 100) ) + 100;
    }
    else if(name=="nice"){          
        valNice  = Math.floor(Math.random() * (1200 - 120) ) + 120;
    }
    else {
        valNice = document.getElementsByClassName("nice")[0].childNodes[2].innerText  = Math.floor(Math.random() *  (1200 - 120) ) + 120      ;
        valLa = document.getElementsByClassName("lacanau")[0].childNodes[2].innerText  = Math.floor(Math.random() * (1000 - 100) ) + 100    ;
        valbr = document.getElementsByClassName("biarritz")[0].childNodes[2].innerText  = Math.floor(Math.random() * (800 - 180)  ) + 180    ;
    }

    nullOrNot("nice",valNice);
    nullOrNot("lacanau",valLa);
    nullOrNot("biarritz",valbr);
    document.getElementById("benef").innerHTML = (benefByCity("nice")+ benefByCity("biarritz") + benefByCity("lacanau"));

    
}

function benefByCity(name){
    numberSell = parseInt(document.getElementsByClassName(name)[0].childNodes[2].innerText);
    priceSold =  parseInt(document.getElementsByClassName(name)[0].childNodes[3].innerText);
    priceBuy = parseInt(document.getElementsByClassName(name)[0].childNodes[4].innerText);
    return (numberSell * priceSold) - (numberSell * priceBuy)
    
}

function nullOrNot(name,val){
    if(val==null){
        document.getElementsByClassName(name)[0].childNodes[2].innerText = 0;
    }
    else{
        document.getElementsByClassName(name)[0].childNodes[2].innerText = val;
    }
}

