/*CONVERSIÓN DE MONEDA*/

let monto = prompt("Ingrese el valor a convertir");

let divisa1 = prompt("Ingrese la divisa del monto ingresado (ARS/USD/EUR").toUpperCase();

let divisa2 = prompt("Ingrese la divisa a convertir (ARS/USD/EUR)").toUpperCase();

/*FUNCIONES*/

function convertidorARS ( monto, divisa1, divisa2 ){
    if (divisa1 == "ARS" && divisa2 == "USD"){
        let calculo = monto * 0.0100;
        return calculo;
    } else if (divisa1 == "ARS" && divisa2 == "EUR"){
        calculo = monto * 0.0087;
        return calculo;
    }
}

function convertidorUSD (monto, divisa1, divisa2) {
    if (divisa1 == "USD" && divisa2 == "ARS"){
        let calculo = monto * 100.15;
        return calculo;
    } else if (divisa1 == "USD" && divisa2 == "EUR"){
        calculo = monto * 0.87;
        return calculo;
    }
}

function convertidorEUR (monto, divisa1, divisa2) {
    if (divisa1 == "EUR" && divisa2 == "ARS"){
        let calculo = monto * 115.37;
        return calculo;
    } else if (divisa1 == "EUR" && divisa2 == "USD"){
        calculo = monto * 1.15;
        return calculo;
    }
}

/*SALIDA AL USUARIO*/

if (divisa1 == "ARS"){
    alert(monto + " " + divisa1 + " Es igual a " + convertidorARS(monto, divisa1, divisa2) + " " + divisa2);
} else if (divisa1 == "USD") {
    alert(monto + " " + divisa1 + " Es igual a " + convertidorUSD(monto, divisa1, divisa2) + " " + divisa2);
} else {
    alert(monto + " " + divisa1 + " Es igual a " + convertidorEUR(monto, divisa1, divisa2) + " " + divisa2);
}