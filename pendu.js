var Mots= ["ordinateur","clavier","ecran"];
var vie = 10;
var test =0;


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



    for(var i =0; i< motChoisis.length;i++){

        var lettreT=document.createElement('span');
        document.getElementById('resultat').appendChild(lettreT);
        lettreT.id= "lettre"+i;
        lettreT.innerHTML="";
        lettreT.style.backgroundImage="url('index.png')";
        lettreT.style.backgroundSize='cover';
        lettreT.style.backgroundColor="cyan";
        lettreT.style.border = "outset cyan";
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


    for (var i = 0;i<motChoisis.length;i++){

        if (user == motChoisis[i]){

            document.getElementById("lettre" + i).innerHTML = motChoisis[i];
            document.getElementById('lettre'+i).style.backgroundColor="white";
            document.getElementById('lettre'+i).style.backgroundImage ="none";
            document.getElementById('lettre'+i).style.animation ="dd 2s";


            test++;
            console.log("incrementation: "+test);
        }




    }

    if(test == 0){
        document.getElementById('info').innerHTML=" la lettre "+user+" ne fait pas partis du mot";
    }
    else{
        document.getElementById('info').innerHTML="vous avez trouver la lettre : "+user;
    }
    if(test == 0){
        vie--;
    }
    else
    {
        test=0;
        console.log("test raz" +test);
    }
    document.getElementById('vie').innerText = "vie: "+ vie;
    if(vie < 1) {
        document.getElementById('vie').innerHTML = "vie: 0";
        document.getElementById('WinorLose').innerHTML = "vous avez perdu le mot etait :" + motChoisis;
        document.getElementById('text').style.visibility = "hidden";
    }


}

function gagner(){
    var retour = 1;
    var count = 0;


    for (var i=0;i<motChoisis.length;i++){

        if (document.getElementById('lettre'+i).innerHTML ===""){
            count++;

        }
        if(count >0)
        {
            retour = 0;
        }else{
            document.getElementById('WinorLose').innerHTML="Bravo, vous avez trouver le mot";
            retour = 1;
        }
    }
    console.log('count: '+ count );
    console.log("retour: "+retour);
    return retour;

}


comparerLettre();

document.getElementById('ok').addEventListener("click", function () {

    entrerLettre();
    lettretrouvee();
    gagner();
});


/*   document.getElementById('facile').addEventListener("click", function () {
});
   document.getElementById('moyen').addEventListener("click", function () {
});
   document.getElementById('difficile').addEventListener("click", function () {
});*/