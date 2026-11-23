---
title: Feliere pentru o imprimantă cu rășină
summary: Felierea platformei de imprimare pentru o imprimantă cu rășină, golirea și susținerea piesei, parcurgerea straturilor, salvarea fișierului imprimantei și găsirea expunerii potrivite cu testul de expunere.
keywords: rășină, sugerare înclinare, ventuză, forță de desprindere, contravântuire, imprimare cu rășină, sla, msla, dlp, slicer, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, golire, orificiu de aerisire, plută, suporturi, test de expunere, scară de expunere, calibrare, straturi, supliment
from: 8cc12858
---

Suplimentele pentru rășină feliază ce se află pe platforma de imprimare în imagini de strat pentru ecranul imprimantei și salvează fișierul pe care îl citește imprimanta. Sunt gratuite, fără nimic blocat, și rămân dezactivate până la activare.

:::note
Niciun fișier nu a fost încă încărcat pe o imprimantă reală. Fișierele au fost citite doar de cititoarele proprii ale CadCraft, iar suporturile sunt noi. Verificați straturile și rulați prima imprimare manual.
:::

## Ce urmează să faceți

Feliați o piesă pentru rășină, verificați straturile, salvați fișierul și copiați-l pe imprimantă.

## Pași

1. Deschideți {{ui:Setări}} › {{ui:Suplimente}} și activați suplimentul de feliere pentru rășină și suplimentul pentru formatul de fișier al imprimantei (Elegoo GOO, SL1, Chitubox sau Anycubic). Puteți apăsa și pe {{ui:Adăugare imprimare cu rășină}} de pe cardul etapei de imprimare.
2. Puneți piesa pe platformă, ca în [Plasarea obiectelor pe platforma de imprimare](topic:print-stage), apoi alegeți {{ui:Rășină}} lângă **Imprimare cu**.
3. Sub **Setări de imprimare cu rășină**, alegeți **Imprimanta** și **Rășina**. Cardul arată dimensiunea ecranului în pixeli. Acestea sunt dimensiunile publicate de producător, așa că verificați-le pe cele ale imprimantei; le puteți modifica la Personalizat.
4. Setați **Înălțimea stratului (mm)**, **Expunerea (s)** și **Expunerea de bază (s)**. Valorile pentru fiecare rășină sunt doar un punct de plecare.
5. Bifați **Golire, cu orificiu de aerisire** dacă doriți o piesă golită și setați **Peretele (mm)** și **Lățimea orificiului (mm)**.
6. Bifați **Suporturi și plută** și alegeți **Densitatea suporturilor**: Ușoară, Medie sau Mare.
7. Alegeți **Formatul fișierului**. Dacă cardul spune că niciun format nu este adăugat încă, apăsați butonul care scrie Adăugare și numele formatului.
8. Apăsați {{ui:Previzualizare straturi}} și mutați cursorul **Strat**. Piesele plutitoare sunt încercuite. Linia de sub acesta indică numărul de straturi, timpul și rășina, în mL, grame și cost.
9. Apăsați {{ui:Salvare fișier de imprimare}}, verificați sumarul și apăsați {{ui:Salvare}}. Copiați fișierul pe imprimantă.

## Înclinare, ventuze, contravântuiri și valoarea forței de desprindere

Aceste patru elemente sunt estimări după forma piesei. Niciunul nu a fost încercat pe o imprimantă reală, așa că tratați fiecare ca pe o indicație și verificați straturile.

1. Apăsați {{ui:Sugerare înclinare}} sub **Înclinare (grade)**. CadCraft încearcă înclinări de la 0 la 60 de grade și alege înclinarea cu cel mai mare strat cel mai mic, cea mai mică suprafață în consolă și fără ventuză. Setează **Înclinare (grade)** și spune ce a găsit. Ponderile de punctaj sunt ale noastre, nu ale unui producător de imprimante.
2. După {{ui:Previzualizare straturi}}, un avertisment indică cavitățile care se deschid doar spre peliculă. O astfel de cavitate poate reține aer sub vacuum atunci când un strat se desprinde. Înclinați piesa sau adăugați un orificiu. Buzunarele mai înguste decât dimensiunea celulei din avertisment nu sunt detectate.
3. Cu **Suporturi și plută** activate, bifați **Contravântuiți suporturile înalte** pentru a adăuga contravântuiri transversale între stâlpii înalți și subțiri.
4. Linia de sub previzualizare indică cel mai mare strat, în cm2. Afișează o forță doar dacă introduceți o **Tensiune de desprindere măsurată** la **Straturi de bază, ridicare și viteze**. Fără o valoare proprie măsurată, afișează doar aria.

## Găsiți expunerea potrivită

1. Activați suplimentul pentru testul de expunere din {{ui:Setări}} › {{ui:Suplimente}}.
2. Apăsați {{ui:Plasare piesă de test pe platformă}}.
3. Apăsați {{ui:Salvare scară de expunere}}. Primiți câte un fișier pentru fiecare expunere, într-o arhivă zip.
4. Imprimați fiecare fișier cu aceeași rășină și păstrați expunerea la care stâlpii subțiri sunt cei mai clari și orificiile deschise cele mai curate.

## Note

- Felierea rulează în fundal, astfel încât pagina rămâne utilizabilă pe o placă mare.
- Piesele care nu sunt solide închise sunt lăsate deoparte, iar cardul o spune.
- Dacă imprimanta refuză un fișier, cardul formatului are opțiuni pentru ce lasă formatul deschis. Schimbați una, salvați din nou și spuneți-ne care a funcționat.
- Versiunile Anycubic 517 și 518 nu sunt scrise.
