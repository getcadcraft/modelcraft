---
title: Održavajte model .3dm živim
summary: Promijenite model u programu koji ga je napravio i vidite promjenu ovdje, iz Rhina 8 ili Grasshopper definicije, bez ponovnog spremanja i uvoza.
keywords: rhino, grasshopper, živa veza, živa poveznica, 3dm, nurbs, parametarski, veza, sinkronizacija, skripta, referentni model, guranje
from: 331b0a7e
---

Nastavite modelirati tamo gdje modelirate, a rezultat koristite ovdje: za renderiranje, osvjetljavanje ili slaganje scene oko njega. Svaka promjena u drugom programu ažurira jednu grupu u ModelCraftu.

:::note
Veza treba **CadCraft Studio** na istom računalu. Kartica preglednika ne može uspostaviti vezu. Ništa ne ide preko interneta: skripta razgovara sa Studiom na adresi ovog računala, uz token.
:::

:::warning
Ova veza testirana je s pisačem datoteka iz skripte i zamjenom za drugi program, još ne unutar samog Rhina ili Grasshoppera. Ako nešto tamo ne uspije, recite nam što je pisalo.
:::

## Postavljanje

1. U Studiju otvorite ModelCraft. U {{ui:Postavke}} › {{ui:ModelCraft}} › {{ui:Pomoćnici}} označite **Dopusti AI pomoćnicima i skriptama da koriste ModelCraft**, zatim **Uredi**.
2. U Studiju odaberite {{ui:Poveži pomoćnika}}. Prikazuje adresu i token koje ćete zalijepiti u nastavku.
3. Preuzmite skriptu: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Iz Rhina

1. Pokrenite `cadcraft_link.py` u uređivaču skripti Rhina (Python 3 u Rhinu 8).
2. Prvi put zalijepite adresu i token. Spremaju se u `.cadcraft-link.json` u vašoj početnoj mapi, nikad u modelu. Studio pri svakom pokretanju stvara novi token, pa skripta tada ponovno pita.

Cijeli model dolazi kao jedna grupa nazvana prema dokumentu, na primjer „chair (linked)“. Nakon toga svaka promjena dolazi kad pričekate trenutak, i šalju se samo promijenjeni objekti. Ponovno pokrenite skriptu za zaustavljanje.

## Iz Grasshoppera

Prvo pokrenite skriptu jednom u Rhinu, da se adresa i token spreme.

1. Dodajte komponentu Script (Python 3) i u nju zalijepite cijeli `cadcraft_link.py`.
2. Postavite ove ulaze: `G` (geometrija, s pristupom popisu), `N` (naziv, neobavezno), `On` (logička sklopka) i `Target` (neobavezno: `model` ili `part`, ako su oba programa otvorena).
3. Postavite `On` na true.

Svako rješavanje šalje `G` i zamjenjuje ono što je komponenta poslala prošli put, pa povlačenje klizača ovdje ažurira grupu. Njezin izlaz `a` kaže što se dogodilo. Svaka komponenta ima vlastitu grupu.

## Što možete raditi s grupom

- **Premjestite je, označite, gradite oko nje.** Mjesto grupe i njezina oznaka ostaju pri svakom ažuriranju, kao i sve uz nju.
- **Ne uređujte unutra.** Svako ažuriranje zamjenjuje sadržaj grupe. Drugi program je vlasnik tih objekata.
- **Poništavanje.** Ažuriranja unutar dvije sekunde jedno od drugoga dijele jedan korak poništavanja, pa {{key:Mod+Z}} vraća cijelo povlačenje. Sljedeće ažuriranje vraća model da odgovara.
- **Spremanje.** Spremljena datoteka čuva vezu. Nakon ponovnog otvaranja pokrenite skriptu ponovno i ista se grupa ažurira.

## Što dolazi

Mreže, poliplohe, plohe i ekstruzije kao mreža koju vidite na zaslonu, SubD kao njegova mreža, krivulje kao bridovi, blokovi kao zasebni objekti na mjestu gdje stoje (ne kao komponente), slojevi kao oznake, boje i jedinice. Pogledajte [Uvoz modela .3dm](topic:import-3dm-files) za prikaz tih objekata ovdje.

Izostavljeno, uz broj u drugom programu: točke, tekst, kote, svjetla i slično.

**Samo jedan smjer.** Promjene ovdje ne vraćaju se u drugi program.

## Ako nešto pođe po zlu

- **„Nijedan prozor ModelCraft ili PartCraft to ne dopušta“:** napravite korak 1 postavljanja.
- **„Studio je odbio token“:** Studio je ponovno pokrenut. Kopirajte novi token i ponovno pokrenite skriptu. Za Grasshopper ju prvo pokrenite u Rhinu.
- **„Nije moguće povezati se s CadCraft Studio“:** Studio nije pokrenut ili se adresa promijenila.
