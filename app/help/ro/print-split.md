---
title: Divizarea unui model mare pentru imprimare
summary: Tăiați un model prea mare pentru imprimantă în piese care încap pe pat, cu știfturi, chei, cozi de rândunică, găuri pentru dibluri sau magneți și numărul îmbinării pe ambele fețe, și descărcați toate piesele și o fișă de ansamblu într-o singură arhivă zip.
keywords: imprimare 3D, divizare, tăiere înclinată, tăiere unghiulară, oblic, divizor, tăiere, prea mare, dimensiune pat, volum de imprimare, piese, conectori, știfturi, chei, coadă de rândunică, diblu, magnet, joc, toleranță, numere de piesă, ansamblu, vedere explodată, zip, stl, 3mf, licență, cheie USB, dongle
from: ee96ba77
---

Când un model este mai mare decât patul imprimantei, **Divizare pentru imprimare** îl taie în piese care încap, adaugă conectori ca piesele să se alinieze când le puneți împreună și gravează același număr pe ambele fețe ale fiecărei îmbinări. Deschideți {{ui:Exportare}} › {{ui:Verificare pentru imprimare 3D (STL sau 3MF)…}}; rândul **Instrumente de imprimare** din caseta de dialog are {{ui:Divizare pentru imprimare}}. Se deschide ca o fișă peste vizualizare.

Funcționează asupra a ceea ce se imprimă: selecția sau tot ce este afișat când nu este nimic selectat. Ceea ce se imprimă trebuie să fie un solid închis; dacă verificarea găsește găuri, folosiți mai întâi [Reparare](topic:print-tools#repair).

Rulează în ModelCraft, pe computer: fără server de licențe, fără cheie USB, fără nimic încărcat.

## Cum se taie

- **Încadrare în pat, cele mai puține piese**: indicați lățimea, adâncimea și înălțimea patului (ele pornesc din {{ui:Setări}} › ModelCraft › Imprimantă 3D). Fișa arată câte piese sunt necesare și cât de mare este fiecare; modelul se taie în piese egale, cât mai puține încap. O piesă poate sta culcată în fișiere, dacă astfel încape. Conectorii care ies dintr-o piesă se iau în calcul la dimensiunea ei.
- **În locurile pe care le indicați**: alegeți axa pe care tăiați și scrieți unde, în milimetri de la capătul inferior al modelului, cu virgule între valori (`100, 200` face trei piese).
  **Înclinare** rotește tăierile cu până la 60° în jurul uneia dintre celelalte două axe (de exemplu, o tăiere pe Z înclinată în jurul lui X): fiecare tăiere înclinată trece prin linia mediană a modelului la locul ei, dă piesei mai multă suprafață de lipire și ascunde mai bine îmbinarea pe o suprafață înclinată. Conectorii stau perpendicular pe tăiere.

Planurile de tăiere sunt desenate în jurul modelului ca linii întrerupte, cât timp fișa este deschisă.

## Conectori

Fiecare loc în care două piese se ating primește conectori, plasați singuri acolo unde este cel mai mult spațiu: cel puțin la distanța **celui mai subțire perete permis** plus **jocul** plus propria dimensiune față de exterior și suficient de departe de orice altă tăiere, încât două găuri să nu se întâlnească niciodată. Pe o față lungă, doi conectori sunt așezați distanțat pe ea, ca piesele să nu se poată roti.

- **Știfturi rotunde**: un știft pe o piesă (teșit la vârf), o gaură pe cealaltă.
- **Chei pătrate**: la fel, dar pătrate, ca o piesă să poată fi pusă doar într-un singur fel.
- **Cozi de rândunică**: o limbă care alunecă într-un canal din lateral. Acolo unde un capăt al canalului ar întâlni o altă tăiere, coada se oprește din drum și alunecă din capătul deschis. Cozile se potrivesc tăierilor într-o singură direcție (un șir de felii); într-o grilă, folosiți știfturi sau dibluri.
- **Găuri pentru dibluri**: o gaură pe fiecare parte; pinii se imprimă și ei (în arhivă).
- **Buzunare pentru magneți**: un buzunar pe fiecare parte, pentru un magnet rotund de diametrul și grosimea indicate. Verificați polii înainte de a-i lipi.
- **Niciunul (lipire)**.

**Jocul** este spațiul de pe fiecare parte dintre un știft și gaura lui (0.2 mm la început). Este fidel numărului pe care îl dați: găurile rotunde se fac puțin mai mari, ca fețele lor plane, nu colțurile, să păstreze acest joc. Măriți-l dacă piesele imprimantei ies strânse.

Când o îmbinare nu are loc pentru un conector (un perete subțire, o zonă mică de atingere), fișa spune asta: lipiți-o pe aceea.

## Numere de piesă

Cu **Gravare a numerelor îmbinărilor pe ambele fețe** activată, fiecare îmbinare primește numărul celor două piese, de exemplu `3-4`, gravat la 0.6 mm adâncime pe ambele fețe, citibil corect pe fiecare. Numerele încep la 5 mm înălțime și se micșorează ca să încapă, până la 2.5 mm; o îmbinare fără loc pentru numărul ei este listată. Piesele sunt numerotate de la stratul de jos în sus.

## Previzualizare, descărcare, divizarea modelului

1. {{ui:Previzualizare}} taie modelul și spune câte piese, îmbinări și conectori există, dacă fiecare piesă trece verificarea pentru imprimare 3D și încape în pat, și listează dimensiunea fiecărei piese. Un inel marchează fiecare conector și fiecare număr în vizualizare.
2. {{ui:Descărcați piesele (.zip)}} salvează o arhivă zip: un fișier pentru fiecare piesă (STL sau 3MF, cum alegeți la **Fișiere**), fiecare stând pe pat; pinii pentru dibluri; și **fișa de ansamblu**: o imagine a pieselor desfăcute, cu numerele lor (`assembly.svg` și `assembly.png`), și o listă a pieselor și a îmbinărilor (`assembly.txt`).
3. {{ui:Divizați modelul}} pune piesele în model în locul grupurilor sau componentelor selectate, denumite ca pe fișa de ansamblu, într-un singur pas: {{ui:Anulare}} readuce originalul. Are nevoie de grupurile sau componentele de divizat selectate; descărcarea funcționează pe orice se imprimă.

## Mutarea conectorilor manual

După o previzualizare, **Conectori manual** vă lasă să corectați unde merg conectorii:

- {{ui:Mutare unul}}: faceți clic pe un inel roșu din vizualizare (devine verde), apoi faceți clic pe locul unde trebuie să fie, pe tăiere.
- {{ui:Adăugare unul}}: faceți clic în vizualizare, unde trebuie să fie un conector. Acesta ajunge pe planul de tăiere pe care îl atinge clicul, între cele două piese de acolo.
- {{ui:Eliminare unul}}: faceți clic pe un inel roșu ca să îndepărtați acel conector.

Fiecare modificare este verificată din nou, ca cele automate: un loc prea aproape de contur, o altă tăietură sau un alt conector nu se face, iar fișa spune asta. {{ui:Din nou automat}} uită locurile alese. Ele se păstrează cât timp modelul, selecția și tăierile rămân la fel.

O previzualizare rămâne până se schimbă modelul, selecția sau o setare; apoi fișa cere să faceți din nou previzualizarea.

:::note
Fiecare piesă este verificată așa cum ar verifica-o verificarea pentru imprimare 3D înainte de descărcare. Programul de feliere decide tot cum se imprimă fiecare piesă: uitați-vă la fiecare acolo și imprimați mai întâi o îmbinare, ca să vedeți cum tratează imprimanta jocul.
:::
