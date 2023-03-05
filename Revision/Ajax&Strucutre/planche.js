


function getPlanchesVendues(){
    let city_update = document.getElementById("typePlanche").value;
    console.log(city_update);
    const myRequest = new Request('planche.php?nom='+city_update);
    fetch(myRequest)
        .then((response) => response.json())
        .then((data) => {
            for (const v of data){
                let city = document.getElementsByClassName(v.ville)[0];
                let children = city.children;
                children[1].innerText = v.vente;
            }
            update_total();
        })
        .catch(err => {
            console.log("voici l'erreur --> " + err);
        });;

}

function prixDeVente(){
    const myRequest = new Request('planche.json');
    fetch(myRequest)
    .then((response) => response.json())
    .then((data) => {
      for (const v of data) {
        let city = document.getElementsByClassName(v.modele)[0];
        let children = city.children;
        children[2].innerText = v.prixDeVente;
        children[3].innerText = v.prixAchat;
      }
    })
    .catch(console.error);
}


function update_total(){
    const myRequest = new Request('planche.json');
    fetch(myRequest)
    .then((response) => response.json())
    .then((data) => {
    let sum = 0;
      for (const v of data) {
        let value = 0 ;
        let city = document.getElementsByClassName(v.modele)[0];
        let children = city.children;
        value = parseInt((children[1].innerText * children[2].innerText) - (children[1].innerText * children[3].innerText))
        sum += value;
    }
      document.getElementById("benef").innerText = sum;
    })
    .catch(console.error);
}
