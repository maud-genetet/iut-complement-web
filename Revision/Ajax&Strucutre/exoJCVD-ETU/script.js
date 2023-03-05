let cit = document.querySelector('blockquote');
let i = 0;
let p = document.createElement("p");
cit.appendChild(p);

function citation(){
    const myRequest = new Request('jeanClaudeVanDamme.php?pensee='+ i);
    fetch(myRequest)
        .then((response) => response.json())
        .then((data) => {
            p.innerText = data;
            i = i +1;
        })
        .catch(err => {
            p.innerText = "Plus de citation disponible"
        });;
}