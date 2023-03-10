// console.log("Hi Kik");


// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1: stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2: stampare le stesse informazioni su DOM sottoforma di stringhe

// Wayne Barnett		Founder & CEO			wayne - barnett - founder - ceo.jpg
// Angela Caroll		Chief Editor			angela - caroll - chief - editor.jpg
// Walter Gordon		Office Manager			walter - gordon - office - manager.jpg
// Angela Lopez		Social Media Manager	angela - lopez - social - media - manager.jpg
// Scott Estrada		Developer				scott - estrada - developer.jpg
// Barbara Ramos		Graphic Designer		barbara - ramos - graphic - designer.jpg

// BONUS 1: trasformare la stringa foto in una immagine effettiva -- ok!!!
// BONUS 2: organizzare i singoli membri in card / schede -- ok!!!


// Creo un array di oggetti
let our_team = [
    {   // WAYNE
        name : "Wayne Barnett",
        role : "Founder & CEO",
        photo : "../img/wayne-barnett-founder-ceo.jpg",
    },
    {   // ANGELA C.
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "../img/angela-caroll-chief-editor.jpg",
    },
    {   // WALTER
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "../img/walter-gordon-office-manager.jpg",
    },
    {   // ANGELA L.
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "../img/angela-lopez-social-media-manager.jpg",
    },
    {   // SCOTT
        name: "Scott Estrada",
        role: "Developer",
        photo: "../img/scott-estrada-developer.jpg",
    },
    {   // BARBARA
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "../img/barbara-ramos-graphic-designer.jpg",
    },
];


// MILESTONE 1: stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
//     // stampo Wayne
// console.log(our_team[0].name + ", " + our_team[0].role + " --- " + our_team[0].photo);
//     // stampo Angela C.
// console.log(our_team[1].name + ", " + our_team[1].role + " --- " + our_team[1].photo);
//     // stampo Walter
// console.log(our_team[2].name + ", " + our_team[2].role + " --- " + our_team[2].photo);
//     // stampo Angela L.
// console.log(our_team[3].name + ", " + our_team[3].role + " --- " + our_team[3].photo);
//     // stampo Scott
// console.log(our_team[4].name + ", " + our_team[4].role + " --- " + our_team[4].photo);
//     // stampo Barbara
// console.log(our_team[5].name + ", " + our_team[5].role + " --- " + our_team[5].photo);

// "Al momento accedi singolarmente ad ogni elemento con l'indice scritto come intero, mentre potresti farlo con un ciclo." let's try!
    // così avrei potuto richiamare solo un componente del team:
    // console.log(our_team[0]);
    // e così solo il suo nome
    // console.log(our_team[0].name);
// siccome è un array si usa OF (IN è per il "for in" degli objects)
for (let people of our_team) {
    console.log(people);

    // OR.. separatamente :)
    // console.log("name: " + people.name);
    // console.log("role: " + people.role);
    // console.log("photo: " + people.photo);
}



// MILESTONE 2: stampare le stesse informazioni su DOM sottoforma di stringhe 
    // commento dalla prossima linea fino a "_team[5].photo;"

// // stampo Wayne
// document.querySelector(".wayne").innerHTML = our_team[0].name + ", " + our_team[0].role + " --- " + our_team[0].photo
// // stampo Angela C.
// document.querySelector(".angela-c").innerHTML = our_team[1].name + ", " + our_team[1].role + " --- " + our_team[1].photo;
// // stampo Walter
// document.querySelector(".walter").innerHTML = our_team[2].name + ", " + our_team[2].role + " --- " + our_team[2].photo;
// // stampo Angela L.
// document.querySelector(".angela-l").innerHTML = our_team[3].name + ", " + our_team[3].role + " --- " + our_team[3].photo;
// // stampo Scott
// document.querySelector(".scott").innerHTML = our_team[4].name + ", " + our_team[4].role + " --- " + our_team[4].photo;
// // stampo Barbara
// document.querySelector(".barbara").innerHTML = our_team[5].name + ", " + our_team[5].role + " --- " + our_team[5].photo;



// BONUS 2 - organizzare i singoli membri in card / schede
let contenitore_el = document.getElementById("contenitore");

for (let member of our_team) {
contenitore_el.innerHTML += `
<div class="col-4 d-flex justify-content-center">
    <div class="card mt-3" style="width: 18rem;">
        <img src="${member.photo}" alt="PUT IMG HERE">

        <div class="card-body text-center">
            <h5 class="card-title">${member.name}</h5>
            <p class="card-text">${member.role}</p>
        </div>
    </div>
</div>
`
};



// l'immagine funziona "perchè sono fortunata :D", dovevo metterla direttamente nel template literal ./img/${member.photo} con un solo punto perchè si parte dall'HTML (ovviamente così, però lasciando il nome originale così --> wayne-barnett-founder-ceo.jpg).