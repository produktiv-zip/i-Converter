def umrechnung_aepfel_in_bj(aepfel):
    bj = aepfel * 0.3
    return bj

anzahl_aepfel = float(input("Gib die Anzahl der Äpfel ein: "))
ergebnis_bj = umrechnung_aepfel_in_bj(anzahl_aepfel)
print(f"{anzahl_aepfel} Äpfel entsprechen {ergebnis_bj} BJ.")
