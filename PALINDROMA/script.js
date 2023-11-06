function isPalindroma(parola) {
    
    parola = parola.replace(/\s/g, "").toLowerCase();

    const parolaInvertita = parola.split("").reverse().join("");


    return parola === parolaInvertita;
}

function verificaPalindroma() {
    const inputParola = document.getElementById("parola").value;
    const risultato = document.getElementById("risultato");

    if (isPalindroma(inputParola)) {
        risultato.textContent = "La parola è palindroma!";
    } else {
        risultato.textContent = "La parola non è palindroma.";
    }
}
