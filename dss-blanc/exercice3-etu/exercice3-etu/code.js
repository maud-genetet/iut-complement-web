
var tabRockers = ["Sid-Viscious","David-Bowie","Mickael-Jackson","Ozzy-Osbourne","Kiss",
"Amy-Winehouse","Elvis-Presley"];
var child_table = document.querySelector('tbody');
var child_tr = child_table.children[1].children;


function getAnswer(id){
	var selects = document.querySelectorAll('.menu_select');

	var child_img = child_table.children[0].children;
	let val = selects[id].value;
	const myRequest = new Request('rock.php?id='+id+"&answer="+val);
	fetch(myRequest)
		.then((response) => response.json())
		.then((data) => {
			if(data.reponse =="perdu"){
				child_img[id].setAttribute('class','perdu');
			}
			else{
				child_img[id].setAttribute('class','gagne');
			}
		})
		.catch(err => {
		console.log("voici l'erreur --> " + err);
	});;

}


window.onload=function() {	
	creerListes();	
}
	function creerListes(){	
		for (var i=0; i < child_tr.length; i++) {
			let select = document.createElement('select');
			select.setAttribute('class',"menu_select");
			select.setAttribute('id',i);
			let option = document.createElement('option');
			option.setAttribute('value',"");
			option.innerText = "A choisir...";
			select.appendChild(option);
			tabRockers.forEach(element => {
				let option = document.createElement('option');
				option.innerText = element;
				option.setAttribute('value',element);
				select.appendChild(option);
			});
			child_tr[i].appendChild(select);
		}
		var selects = document.querySelectorAll('.menu_select');

		selects.forEach(function(select) {
		select.addEventListener('change', function() {
			getAnswer(select.id);
		})

		});
	}


