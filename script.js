function convert() {

    var anzahl = parseFloat(document.getElementById("anzahl").value);
    var einheit = document.getElementById("einheit").value;
    var ergebnis = "";

    if (einheit === "apfel") {
        var ergebnisBJ = anzahl * 0.3;
        var ergebnisMuscheln = anzahl * 0.35;
        ergebnis1 = anzahl + " Äpfel entsprechen " + ergebnisBJ + " Blowjobs";
        ergebnis2 = anzahl + " Äpfel entsprechen " + ergebnisMuscheln + " Muscheln";
    } else if (einheit === "bj") {
        var ergebnisAepfel = anzahl / 0.3;
        var ergebnisMuscheln = anzahl / 0.35;
        ergebnis1 = anzahl + " Blowjobs entsprechen " + ergebnisAepfel + " Äpfel";
        ergebnis2 = anzahl + " Blowjobs entsprechen " + ergebnisMuscheln + " Muscheln";
    }
    else if (einheit === "muscheln") {
        var ergebnisBJ = anzahl * 0.35;
        var ergebnisAepfel = ergebnisBJ / 0.35;
        ergebnis1 = anzahl + " Muscheln entsprechen " + ergebnisAepfel + " Äpfel";
        ergebnis2 = anzahl + " Muscheln entsprechen " + ergebnisBJ + " Blowjobs";
    }

    var ergebnisElement1 = document.getElementById("ergebnis1");
    ergebnisElement1.innerHTML = ergebnis1;
    ergebnisElement1.style.display = "block";
    var ergebnisElement2 = document.getElementById("ergebnis2");
    ergebnisElement2.innerHTML = ergebnis2;
    ergebnisElement2.style.display = "block";

}