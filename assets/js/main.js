let vat_add = document.getElementById("vat_add");
let vat_sub = document.getElementById("vat_sub");
console.log(vat_add, vat_sub);


let toggleTxt = document.getElementById("toggle_net");
console.log(toggleTxt);

let nineteen = document.getElementById("nineteen")
let seven = document.getElementById("seven");
console.log(nineteen, seven);

let input = document.getElementById("netto");
console.log(input);

let outputVat = document.getElementById("output_vat");
console.log(outputVat);

let outputGross = document.getElementById("output_gross");
console.log(outputGross);

let toggleResult = document.getElementById("toggle_result");
console.log(toggleResult);

//erste if Schleife: NettoBetrag-Eingabe * 0,19 oder 0,7 Prozent,
//input abfragen: als Number(value.input) als neue Variable speichern: input_value
//Ergebnis unten in output_vat
//addiert zu Eingabe id=netto.value 
//Ergebnis als Ausgabe in output_gross: let sum


let check = () => {
    if (vat_add.checked == true) {
        toggleTxt.innerHTML = `Nettobetrag (Preis ohne Mehrwertsteuer) in Euro`;
        toggleResult.innerHTML = `Bruttobetrag (Endpreis)`;
    }
    else {
        toggleTxt.innerHTML = `Bruttopreis (Preis inklusive Mehrwertsteuer in Euro)`;
        toggleResult.innerHTML = `Nettobetrag`;
    }
}


let calc = () => {
    console.log("test");
    let vat_amount;
    let sum;
    let input_value = Number(input.value);
    console.log(input_value);

    let vat07 = input_value * .07;
    let vat19 = input_value * .19;

    if (vat_add.checked == true) {
        toggleTxt.innerHTML = `Nettobetrag (Preis ohne Mehrwertsteuer) in Euro`;
        toggleResult.innerHTML = `Bruttobetrag (Endpreis)`;
        if (nineteen.checked == true) {
            outputVat.innerHTML = (vat19).toFixed(2);
            outputGross.innerHTML = (input_value + vat19).toFixed(2);
        }
        else {
            outputVat.innerHTML = (vat07).toFixed(2);
            outputGross.innerHTML = (input_value + vat07).toFixed(2);
        }
    }

    else {
        toggleTxt.innerHTML = `Bruttopreis (Preis inklusive Mehrwertsteuer in Euro)`;
        toggleResult.innerHTML = `Nettobetrag`;
        if (nineteen.checked == true) {
            outputVat.innerHTML = (vat19).toFixed(2);
            outputGross.innerHTML = (input_value - vat19).toFixed(2);
        }
        else {
            outputVat.innerHTML = (vat07).toFixed(2);
            outputGross.innerHTML = (input_value - vat07).toFixed(2);
        }

    }
}





