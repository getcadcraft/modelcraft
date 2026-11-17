---
title: Drži .3dm model živim
summary: Mijenjaj model u programu u kojem je nastao i vidi promjenu ovdje, iz Rhino 8 ili Grasshopper definicije, bez ponovnog spašavanja i uvoza.
keywords: rhino, grasshopper, živa veza, živa konekcija, 3dm, nurbs, parametarski, veza, sinhronizacija, skripta, referentni model, guranje
from: 331b0a7e
---

Modeliraj tamo gdje modeliraš, a rezultat koristi ovdje: za renderovanje, osvjetljavanje ili slaganje scene oko njega. Svaka promjena u drugom programu ažurira jednu grupu u ModelCraft-u.

:::note
Veza treba **CadCraft Studio** na istom računaru. Kartica pregledača ne može uspostaviti vezu. Ništa ne ide preko interneta: skripta razgovara sa Studiom na adresi ovog računara, uz token.
:::

:::warning
Ova veza je testirana sa pisačem datoteka iz skripte i zamjenom za drugi program, a još ne unutar samog Rhino ili Grasshoppera. Ako nešto ne uspije tamo, reci nam šta je pisalo.
:::

## Podešavanje

1. U Studiu otvori ModelCraft. U {{ui:Postavke}} › {{ui:ModelCraft}} › {{ui:Asistenti}} uključi **Dozvoli AI asistentima i skriptama da koriste ModelCraft**, pa **Uređivanje**.
2. U Studiu izaberi {{ui:Poveži asistenta}}. Prikazuje adresu i token koje ćeš nalijepiti ispod.
3. Preuzmi skriptu: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Iz Rhina

1. Pokreni `cadcraft_link.py` u uređivaču skripti programa Rhino (Python 3 u Rhino 8).
2. Prvi put nalijepi adresu i token. Čuvaju se u `.cadcraft-link.json` u tvom početnom folderu, nikad u modelu. Studio pri svakom pokretanju pravi novi token, pa skripta tada pita ponovo.

Cijeli model dolazi kao jedna grupa nazvana po dokumentu, na primjer "chair (linked)". Poslije toga svaka promjena dolazi kad malo pauziraš, i šalju se samo promijenjeni objekti. Pokreni skriptu ponovo da je zaustaviš.

## Iz Grasshoppera

Prvo pokreni skriptu jednom u Rhinu, da se adresa i token sačuvaju.

1. Dodaj komponentu Script (Python 3) i nalijepi cijeli `cadcraft_link.py` u nju.
2. Postavi joj ove ulaze: `G` (geometriju, sa pristupom listi), `N` (naziv, opcionalno), `On` (bulova preklopka) i `Target` (opcionalno: `model` ili `part`, ako su otvorena oba programa).
3. Postavi `On` na true.

Svako izračunavanje šalje `G` i zamjenjuje ono što je komponenta poslala prošli put, pa povlačenje klizača ažurira grupu ovdje. Njen izlaz `a` kaže šta se desilo. Svaka komponenta ima svoju grupu.

## Šta možeš raditi sa grupom

- **Pomjeri je, označi oznakom, gradi oko nje.** Mjesto grupe i njena oznaka ostaju kroz svako ažuriranje, kao i sve pored nje.
- **Ne uređuj unutra.** Svako ažuriranje zamjenjuje sve unutar grupe. Ti objekti pripadaju drugom programu.
- **Poništi.** Ažuriranja unutar dvije sekunde jedno od drugog dijele jedan korak poništavanja, pa {{key:Mod+Z}} vraća cijelo povlačenje. Sljedeće ažuriranje vraća model da odgovara.
- **Spasi.** Spašena datoteka čuva vezu. Nakon ponovnog otvaranja pokreni skriptu ponovo, i ista grupa se ažurira.

## Šta dolazi

Mreže, polipovršine, površine i ekstruzije kao mreža koju vidiš na ekranu, SubD kao njegova mreža, krive kao ivice, blokovi kao zasebni objekti tamo gdje stoje (ne kao komponente), slojevi kao oznake, boje i jedinice. Pogledaj [Uvoz .3dm modela](topic:import-3dm-files) za to kako se ovdje prikazuju.

Izostavljeno, uz broj u drugom programu: tačke, tekst, kote, svjetla i slično.

**Samo u jednom smjeru.** Promjene ovdje se ne vraćaju drugom programu.

## Ako nešto pođe po zlu

- **"Nijedan prozor ModelCraft ili PartCraft to ne dozvoljava":** uradi korak 1 podešavanja.
- **"Studio je odbio token":** Studio je ponovo pokrenut. Kopiraj novi token i ponovo pokreni skriptu. Za Grasshopper, prvo je pokreni u Rhinu.
- **"Nije moguće doseći CadCraft Studio":** Studio nije pokrenut, ili se adresa promijenila.
