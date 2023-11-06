function generaNumeroRandom() {

    return Math.floor(Math.random() * 5) + 1;
}

function sommaNumeri(a, b) {
    
    return a + b;
}

function verificaPariDispari(sceltaUtente, numeroUtente, numeroComputer) {
    const somma = sommaNumeri(numeroUtente, numeroComputer);
    const risultato = somma % 2 === 0 ? "pari" : "dispari";
    
    return sceltaUtente === risultato;
}

function gioca() {
    const sceltaUtente = document.getElementById("scelta").value;
    const numeroUtente = parseInt(document.getElementById("numero").value, 10);
    
    if (numeroUtente < 1 || numeroUtente > 5) {
        alert("Inserisci un numero da 1 a 5.");
        return;
    }

    const numeroComputer = generaNumeroRandom();
    
    const risultato = verificaPariDispari(sceltaUtente, numeroUtente, numeroComputer);
    
    const messaggio = `Hai scelto ${sceltaUtente}. Il tuo numero: ${numeroUtente}, Numero del computer: ${numeroComputer}. La somma è ${numeroUtente + numeroComputer}. Risultato: ${risultato ? "Hai vinto!" : "Hai perso!"}`;
    
    document.getElementById("risultato").textContent = messaggio;
}
