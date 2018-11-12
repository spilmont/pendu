var Mots= ["ordinateur","clavier","ecran"];



    // genere un mot aleatoirement
    var motsAlea = Math.random()*Mots.length;
    motsAlea = Math.floor(motsAlea);
    motChoisis = Mots[motsAlea];


    console.log(motChoisis);
    function entrerLettre(){

        var user = document.getElementById('text').value;

        if(user.length > 0 && user.length <2){

            user;
        }
        else{
            alert("entrer une seul lettre");
        }

    }

  function comparerLettre() {

      var resultat = document.getElementById("resultat");
      var user = document.getElementById('text').value;

      for(var i =0; i< motChoisis.length;i++){

      var lettreT=document.createElement('span');
      document.getElementById('resultat').appendChild(lettreT);
      lettreT.id= "lettre"+i;
      lettreT.style.border = "outset red";
      lettreT.style.display ="inline-block";
      lettreT.style.width =100+"px";
      lettreT.style.height =100+"px";
      lettreT.style.fontSize = 4+"em";
      lettreT.style.paddingLeft=50+"px"


     var temp = document.getElementById("lettre");
    temp = motChoisis[i];
    console.log(temp);

  }}

  function lettretrouvee(){

        var user = document.getElementById("text").value;
        for (var i = 0;i<motChoisis.length;i++){

            if (user == motChoisis[i]){

                document.getElementById("lettre" + i).innerHTML = motChoisis[i];
            }
  }
  }

comparerLettre();

    document.getElementById('ok').addEventListener("click", function () {

        entrerLettre();
        lettretrouvee();

});