var Mots= ["ordinateur","clavier","ecran"];
var vie = 10;
var test =0;
var lettreVerifie =0;

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
      lettreT.style.width =80+"px";
      lettreT.style.height =80+"px";
      lettreT.style.fontSize = 4+"em";
      lettreT.style.paddingLeft=50+"px";



     var temp = document.getElementById("lettre");
    temp = motChoisis[i];
    console.log(temp);

  }}



  function lettretrouvee(){

        var user = document.getElementById("text").value;
        document.getElementById('vie').innerText = "vie: "+ vie;

        for (var i = 0;i<motChoisis.length;i++){

            if (user == motChoisis[i]){

                document.getElementById("lettre" + i).innerHTML = motChoisis[i];
                document.getElementById("lettre" + i).style.border="inset red";
                document.getElementById('lettre'+i).style.animation ="dd 2s";
                document.getElementById('info').innerHTML ="vous avez trouver la lettre : "+user;
                lettreVerifie++;
                test++;
                console.log(test);
            }
            else{

                document.getElementById('info').innerHTML ="la lettre " + user+" ne fais partis du mot";

            }



        }
      if(test == 0){
          vie--;
      }
      else
      {
          test=0;
      }
      if(vie < 0) {
          document.getElementById('vie').innerHTML = "vie: 0";
          document.getElementById('WinorLose').innerHTML = "vous avez perdu le mot etait :" + motChoisis;
          document.getElementById('text').style.visibility = "hidden";
    }


    if(lettreVerifie == motChoisis.length){
        document.getElementById('WinorLose').innerHTML="Bravo, vous avez trouver le mot";
    }





      }






comparerLettre();

    document.getElementById('ok').addEventListener("click", function () {

        entrerLettre();
        lettretrouvee();


});


 /*   document.getElementById('facile').addEventListener("click", function () {




});

    document.getElementById('moyen').addEventListener("click", function () {




});

    document.getElementById('difficile').addEventListener("click", function () {




});*/