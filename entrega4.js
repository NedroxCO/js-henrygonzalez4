/*SELECCIÓN DE PERSONAJE*/

let bucles = prompt("Ingrese un número de bucles (1-5)")
let select;

for (let i=0; i< bucles; i++){
    select = parseInt(prompt("Selecciona tu personaje con un número del 1 al "+bucles));
    if (select == 1){
        alert("Su personaje es Batman");
    } else if (select == 2){
        alert("Su personaje es Bob Esponja");
    } else if (select == 3){
        alert("Su personaje es Deadpool");
    } else if (select == 4){
        alert("Su personaje es Link");
    } else{
        alert("Su personaje es Pac-Man");
    }
}

alert("Sus oponentes son:");

for (let i=0; i<bucles;i++){
    if (i == 0){
        alert("Batman peleará contra el Joker");
    } else if (i == 1){
        alert("Bob Esponja peleará contra Plancton");
    } else if (i == 2){
        alert("Deadpool peleará contra Wolverine");
    } else if (i == 3){
        alert("Link peleará contra Ganon");
    } else{
        alert("Pac-Man peleará contra Ghost");
    }
}