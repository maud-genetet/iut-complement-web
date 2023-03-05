
function onLoadPage(){
    let dt_list = document.getElementsByTagName('dt');
    let name = document.getElementsByClassName('fn');
    let personal_info_div = document.getElementById('contact-info');
    let twitter_p = document.createElement('p');
    
    document.getElementsByClassName('tel')[0].innerText = "";
    
    twitter_p.setAttribute('id','twitter');
    twitter_p.innerText = "Twitter";
    personal_info_div.appendChild(twitter_p)
    name[0].innerText = name[0].innerText + " Nicholas";
    for (let i = 0; i<dt_list.length ; i++){
        dt_list[i].style.color = "green";
    }
}






