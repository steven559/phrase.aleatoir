var Verbes ;

Verbes = [



    "coder",
    "copier",
    "nager",
    "monter",
    "developper",
    "voter",
    "arnaquer",
    "jouer",
    "manger",
    "coordonner",
    "avoir",
    "aimer",
    "être",
    "être passionné",
    "soulever",
    "evoluer",
    "jouer",
    "manger",
    "s'envoyer",
    "enfourner",
    "accomplir",
    "communiquer",

];


var Noms;
Noms = [
   " Michel Varuk",
    "Jim carrey",
    "Emma watson",
    "Renaud",
    "Bernadette",
    "Lea",
    "Nina",
    "Jacquie",
    "Michel",
    "H.P Lovecraft",
    "Bill gates",
    "albert einstein",
    "Vivaldi",
    "Eminem",
    "Paul Rudd",
    "Johny Depp",
    "The Rock",
    "Billy obam",
    "Cyrille Vin",
    "Julien Lepers",
    'Hugh Jackman',
    "Gotaga",
    "Phillipe Etchebest",


];
var objet;
objet = [
    "Ordinateur",
    "Telephone",
    "dé a coudre",
    "Marteau",
    "Pièce",
    "Montre",
    "ballon",
    "decapsuleur",
    "lunette de soleil",
    "Sabre",
    "cuillère",
    "Clavier",
    "manette",
    "Velo",
    "Fourchette",
    "tasse",
    "Avion",


];

var Temperature;
Temperature=[
    "10°C",
    "30°C",
    "33°C",
    "100°C",
    "-5°C",
    "23°C",
    "69°C",
    "18°C",
    "25°C",
    "12°C",
    "232°C",
    "69°C",
    "5°C",
    "28°C",
];

var Lieux;
Lieux = [
  "Floyon",
  "WIGNEHIES",
    "Barcelona",
    "Paris",
    "Tokyo",
    "Le Touquet",
    "Foumies",
    "Bondy",
    "Rio de Janeiro",
    "Big ben ",
    "Mont Fuji",
    "Macdo",
    "KFC",
    "Burger king",
    "Mont cul",
    "Chuttes du niagara",
    "HidePark",

];


    var random1 =
        Noms[Math.floor(Math.random() * Noms.length)];
    console.log(random1);


    var random2 =
        objet[Math.floor(Math.random() * objet.length)];
    console.log(random2);


    var random3 =
        Temperature[Math.floor(Math.random() * Temperature.length)];
    console.log(random3);


    var random4 =
        Lieux[Math.floor(Math.random() * Lieux.length)];
    console.log(random4);


    var random5 =
        Verbes[Math.floor(Math.random() * Verbes.length)];
    console.log(random5);
dede();
document.getElementById("verb").innerHTML = "il fait"+ "&nbsp;"+ random3 +"&nbsp; "+ "je m'appelle"+"&nbsp; "+ random1 + "&nbsp;"+"je pense a "+ "&nbsp; " + random5 +" &nbsp;"+"avec un(e)"+ " &nbsp;" + random2 +"&nbsp;" +"a"+"&nbsp;"+ random4;


function dede() {
    nop = prompt("je m'appelle");

    var rand = Math.random();

    if(rand < 0.5){
        random1=nop;

        console.log(nop);
    }
}
var bto= document.getElementById("reset");
 bto.addEventListener("click", function () {

     random1 =
        Noms[Math.floor(Math.random() * Noms.length)];
    console.log(random1);


     random2 =
        objet[Math.floor(Math.random() * objet.length)];
    console.log(random2);


    random3 =
        Temperature[Math.floor(Math.random() * Temperature.length)];
    console.log(random3);


    random4 =
        Lieux[Math.floor(Math.random() * Lieux.length)];
    console.log(random4);


    random5 =
        Verbes[Math.floor(Math.random() * Verbes.length)];
    console.log(random5);
    dede();
     document.getElementById("verb").innerHTML = "il fait"+ "&nbsp;"+ random3 +"&nbsp; "+ "je m'appelle"+"&nbsp; "+ random1 + "&nbsp;"+" je pense a"+ "&nbsp; " + random5 +" &nbsp;"+"avec un(e)"+ " &nbsp;" + random2 +"&nbsp;" +"a"+"&nbsp;"+ random4;

    }




);
objet.id="tt";
var txt = document.createElement('input');
txt.placeholder="ajouter un objet";
document.body.appendChild(txt);
var but = document.createElement("button");
document.body.appendChild(but);
but.innerHTML = "confimer";

var tx = document.createElement('input');
document.body.appendChild(tx);
var bt = document.createElement("button");
document.body.appendChild(bt);
tx.placeholder="ajouter un Lieux";
bt.innerHTML = "confimer";


var t = document.createElement('input');
document.body.appendChild(t);
var b = document.createElement("button");
document.body.appendChild(b);
b.innerHTML = "confimer";
t.placeholder="ajouter un Verbes";



but.onclick = function () {


    objet.push(txt.value);

    console.log(objet);

};
bt.onclick= function(){

Lieux.push(tx.value);
console.log(Lieux);
};

b.onclick= function(){
    Verbes.push(t.value);
    console.log(Verbes);
};