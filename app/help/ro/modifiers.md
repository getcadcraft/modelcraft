---
title: Modificatori pe o plasă, un grup sau o componentă
summary: Scalați, oglindiți, matriciați, netezți, teșiți, tăiați și îndoiți o plasă fără să o modificați; repetați sau scalați un grup ori o componentă cu aceeași stivă și faceți-o permanentă când sunteți gata.
keywords: modificator, modificatori, stivă, grup, componentă, scalare, aplicare, editare sursă, nedistructiv, oglindire, matrice, matrice radială, subdivizare, suprafață de subdivizare, netezire, teșire, solidificare, grosime, boolean, tăiere, deplasare, zgomot, sudare, decimare, simplificare, rețea, cușcă, deformare pe curbă, îndoire, înfășurare, aplicare
from: dd5ec1cb
---

Un **modificator** schimbă ce arată o plasă fără să schimbe plasa însăși. Oglindiți o jumătate a unei piese și modelați doar jumătatea aceea; rotunjiți un cub cu o suprafață de subdivizare și continuați să editați cubul. Modificatorii stau într-o **stivă** și lucrează în ordine, de sus în jos. Ceea ce se vede, se exportă, se imprimă și se randează este plasa cu fiecare modificator pornit.

## Adăugarea unui modificator

1. Selectați o plasă. În spațiul de lucru Model, secțiunea ei {{ui:Modificatori}} este în {{ui:Informații entitate}}; în spațiul de lucru Plasă, este în panoul din dreapta.
2. Alegeți unul din {{ui:Adăugare modificator…}}. Acesta ajunge la baza stivei.
3. Modificați-i setările sub nume. Lungimile iau aceleași valori ca în caseta Valoare, deci `600mm`, `2'6"` și `(6m)/4` funcționează toate.

Fiecare modificare este un singur pas de anulare: {{key:Mod+Z}} o anulează.

## Butoanele fiecărui modificator

- Caseta de bifat îl pornește sau îl oprește.
- Butonul cu ecran arată sau ascunde modificatorul în vizualizare (rămâne în stivă).
- Butonul cu cameră arată sau ascunde modificatorul în imaginile și videoclipurile randate, ca un modificator să fie doar pentru randări (sau doar pentru vizualizare).
- Săgețile îl mută în sus sau în jos în stivă. Ordinea contează: oglindirea apoi subdivizarea dă o cusătură netedă; subdivizarea apoi oglindirea nu.
- {{ui:Aplicare}} face forma parte din plasă: modificatorii de deasupra și acesta sunt aplicați chiar plasei și ies din stivă. Este un singur pas de anulare.
- Crucea îl elimină.

## Modificatorii

| Modificator | Ce face |
|---|---|
| {{ui:Scalare}} | Scalează față de originea obiectului, cu un factor pentru roșu, verde și albastru. Și pe un grup sau o componentă. |
| Oglindire | Adaugă o copie oglindită peste roșu, verde sau albastru, prin originea plasei, și unește jumătățile acolo unde se întâlnesc. |
| {{ui:Matrice}} | Copiază pe o linie (un pas de mărimea proprie înmulțit cu numerele date, plus un pas fix), în jurul unei axe sau de-a lungul unei curbe din model. Un grup sau o componentă ia linia. |
| Suprafață de subdivizare | Netezește plasa prin subdivizare Catmull-Clark. Muchiile ascuțite rămân crestate. Randările pot folosi mai multe niveluri decât vizualizarea. |
| {{ui:Teșire}} | Rotunjește orice muchie mai ascuțită decât unghiul dat. |
| Solidificare | Dă unei suprafețe o grosime și închide marginea. |
| Boolean | Taie, unește sau păstrează suprapunerea cu alt obiect din model. Ambele trebuie să fie solide închise. |
| Deplasare | Mută suprafața în interior sau în exterior, cu zgomot neted. Aceeași sămânță dă aceleași denivelări de fiecare dată. |
| Sudare | Unește vârfurile mai apropiate decât o distanță. |
| Decimare | Păstrează o parte din triunghiuri, înlăturându-le pe cele care schimbă cel mai puțin forma. |
| {{ui:Netezire}} | Relaxează vârfurile spre vecinii lor. |
| {{ui:Rețea}} | Îndoaie plasa cu o cușcă: mutați punctele cuștii și plasa urmează. |
| Deformare pe curbă | Îndoaie plasa de-a lungul unei curbe din model, pe roșu, verde sau albastru. |
| Înfășurare | Mută fiecare vârf pe cel mai apropiat punct al altui obiect. |

## Pe un grup sau o componentă

Un grup sau o componentă poate păstra și o rețetă, astfel încât abajurul unei lămpi poate fi o **Scalare** și o **Matrice** a unui singur abajur, iar schimbarea unui număr schimbă lampa.

1. Selectați un grup sau o componentă. În {{ui:Informații entitate}}, secțiunea ei **Modificatori** listează stiva (goală la început).
2. Alegeți {{ui:Scalare}} sau {{ui:Matrice}} din {{ui:Adăugare modificator…}}. Grupul devine o componentă care este **originalul, plasat de stivă**. Originalul se păstrează: editați-l și fiecare copie urmează imediat.
3. Scalarea ia un factor pentru roșu, verde și albastru (`1, 1, 2` dublează înălțimea). Matricea ia numărul de copii, un pas ca parte din mărimea rezultatului de până atunci și un pas suplimentar în lungimi.

Stiva rulează de sus în jos pe axele proprii ale originalului, în jurul originii lui, deci ordinea contează: o Matrice de trei copii la 3 m distanță, apoi Scalare 2 pe roșu, pune copiile la 6 m distanță; Scalarea întâi și apoi Matricea le păstrează la 3 m distanță. Caseta de bifat, săgețile și crucea funcționează ca la o plasă; butoanele de vizualizare și de cameră și {{ui:Aplicare}} pentru un singur modificator nu funcționează, pentru că o stivă pe un grup este un singur lucru.

- {{ui:Editare sursă}} deschide originalul pe loc. Modificările apar în fiecare copie; la închidere reveniți unde erați.
- {{ui:Aplicare modificatori}} face rezultatul margini și fețe simple și scoate stiva, într-un singur pas de anulare. Copiile care se suprapun rămân geometrie separată: aplicarea nu este o uniune.
- Copiile componentei împart rețeta; {{ui:Creare unică}} o separă (originalul rămâne comun).
- Stiva se salvează în fișier, se duce prin copiere și lipire și prin anulare, iar Curățare neutilizate păstrează originalul. Un program care nu cunoaște modificatorii arată totuși copiile.
- Până la aplicare, rezultatul nu poate fi intrat în el, descompus, redimensionat sau întins: ar fi refăcut la următoarea modificare. Fiecare spune asta.
- Limitele sunt 32 de modificatori și 1,000 de copii. O componentă făcută să se întindă ({{ui:Întindere}}) și o stivă nu pot împărți încă o definiție.

## Suprafață de subdivizare

Subdivizarea netezește o plasă prin Catmull-Clark: fiecare față devine fețe cu patru laturi, iar fiecare nivel face de patru ori mai multe. Un cub cu două sau trei niveluri arată deja ca o formă rotunjită, iar editarea cubului continuă.

- **Niveluri în vizualizare** stabilește cât de netedă este.
- **Niveluri în randări** stabilește cât de netede sunt imaginile și videoclipurile randate; randările pot folosi mai multe niveluri decât vizualizarea.
- **Randările pe suprafața netedă reală** pun punctele unei plase randate pe suprafața-limită spre care tind nivelurile, deci chiar două niveluri se randează la fel de netede ca multe.
- **Crestările** păstrează muchiile ascuțite: în spațiul de lucru Plasă, selectați muchii și folosiți {{ui:Crestare}} (1 rămâne ascuțită, 0.5 rotunjește puțin, 0 este netedă). Vedeți [Editarea unei plase](topic:mesh-edit).
- **Coborâți nivelul de vizualizare la o plasă mare:** când nivelurile cerute ar da mai multe fețe decât le gestionează bine vizualizarea acestui calculator, vizualizarea arată un nivel mai mic și spune care. {{ui:Aplicare}} folosește mereu toate nivelurile. Numărul de fețe permis depinde de clasa calculatorului din {{ui:Setări}} › Randare › Calculator.
- Marginile deschise își păstrează colțurile și rămân pe linia muchiilor lor.

## Îndoire cu o cușcă de rețea

1. Adăugați un modificator {{ui:Rețea}} și apăsați {{ui:Adăugați o cușcă de rețea în jurul plasei}}. O cușcă de 3 × 3 × 3 puncte apare în jurul plasei, desenată ca sârme.
2. Deschideți cușca în spațiul de lucru Plasă (faceți dublu clic pe ea) și mutați-i punctele. Plasa urmează lin.

:::tip
O cușcă este o plasă ca oricare alta: ascunde-o cu eticheta ei când terminați.
:::

## Plase mari

Stivele mici se calculează imediat. Una mare se calculează în fundal, pe fiecare nucleu al calculatorului: vizualizarea arată în continuare ultimul rezultat până când cel nou este gata. Operațiile boolean încarcă prima dată modelatorul de solide; vizualizarea spune asta pentru o clipă.

## Ce nu fac încă modificatorii

- Greutăți pe vârf (o atenuare pictată pe plasă) pentru {{ui:Deplasare}}, {{ui:Netezire}} și Înfășurare.
- Modificatori în afară de {{ui:Scalare}} și de Matricea liniară pe geometria push/pull (grupuri și componente): transformați-o întâi în plasă ({{ui:Convertire în plasă}}). Oglindirea, o Matrice rotundă sau pe curbă, Îndoirea și Conicitatea pe grupuri vin mai târziu.
