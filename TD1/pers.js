function Person(name, date){
    this.name=name;
    this.birthDay= date;
    this.friends=new Array();


    
    this.addfriends=function(friend){
        this.friends.push(friend);
    };
   

    this.sayNameFriends=function(){
        this.friends.forEach(friend => document.write(friend.name + " <br/>")); //version E6
    };


    this.olderthanFriends=function(){
        this.friends.forEach(friend => {
            if(this.birthDay < friend.birthDay){
               return false;
            }
        });
        return true;
    };  

    this.numberFriends= () => document.write("Mon nombre d'amis est de : " + this.friends.length + "<br/>");


  };


  function start(){
    var P1= new Person("Nicho", new Date(1949,11,10));
    var P2= new Person("Fred", new Date(1979,09,27));
    var P3= new Person("Seb", new Date(1980,11,20));
    var P4= new Person("Ed", new Date(1979,02,04));
    var P5= new Person("Krol", new Date(1900,02,04));

    P1.addfriends(P2);
    P1.addfriends(P3);
    P1.addfriends(P4);
    P1.addfriends(P5);
    P1.sayNameFriends();
    P1.numberFriends();

    //if (P1.olderthanFirends(P1.birthDay))
    if (P1.olderthanFriends())
      document.write("je suis le plus vieux de la bande <br/>" );
    else
    document.write("je ne suis pas le plus vieux de la bande <br/>");

  }   





