/*Utilizzando i dati forniti, creare un array di 
oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti 
informazioni: nome, ruolo e foto.*/

let ourTeam = [  
    {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "<img src=./img/wayne-barnett-founder-ceo.jpg class=card-img-top foto>"
    },
    {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "<img src=./img/angela-caroll-chief-editor.jpg class=card-img-top foto>"
    },
    {
    nome: "Walter Gordon",
    ruolo: "attaccanOffice Managerte",
    foto: "<img src=./img/walter-gordon-office-manager.jpg class=card-img-top foto>"
    },
    {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "<img src=./img/angela-lopez-social-media-manager.jpg class=card-img-top foto>"
    },
    {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "<img src=./img/scott-estrada-developer.jpg class=card-img-top foto>"
    },
    {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "<img src=./img/barbara-ramos-graphic-designer.jpg class=card-img-top foto>"
    }
]



/*Stampare su console, per ogni membro del team, 
le informazioni di nome, ruolo e la stringa della foto */

console.log(ourTeam);


//Stampare le stesse informazioni su DOM sottoforma di stringhe.

let nomi = document.getElementsByClassName("nome");
let ruoli = document.getElementsByClassName("ruolo");
let foto = document.getElementsByClassName("foto");


for (let i = 0; i < ourTeam.length; i ++) {
    nomi[i].innerHTML = ourTeam[i].nome;
    foto[i].innerHTML = ourTeam[i].foto;
    console.log(ourTeam[i].foto);
    console.log(foto[i].innerHTML);
    ruoli[i].innerHTML = ourTeam[i].ruolo;
}