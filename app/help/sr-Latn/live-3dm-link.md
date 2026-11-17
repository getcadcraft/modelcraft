---
title: Drži .3dm model živim
summary: Menjaj model u programu u kojem je nastao i vidi promenu ovde, iz Rhino 8 ili Grasshopper definicije, bez ponovnog čuvanja i uvoza.
keywords: rhino, grasshopper, živa veza, živa konekcija, 3dm, nurbs, parametarski, veza, sinhronizacija, skripta, referentni model, guranje
from: 331b0a7e
---

Nastavite da modelujete tamo gde modelujete, a rezultat koristite ovde: za renderovanje, osvetljavanje ili raspored scene oko njega. Svaka promena u drugom programu ažurira jednu grupu u ModelCraft.

:::note
Veza zahteva **CadCraft Studio** na istom računaru. Kartica pregledača ne može da uspostavi vezu. Ništa ne ide preko interneta: skripta razgovara sa Studiom na adresi ovog računara, uz token.
:::

:::warning
Ova veza je testirana sa pisačem datoteka iz skripte i sa zamenom za drugi program, još ne unutar samog Rhino-a ili Grasshopper-a. Ako tamo nešto ne uspe, javite nam šta je pisalo.
:::

## Podešavanje

1. U Studiu otvorite ModelCraft. U {{ui:Podešavanja}} › {{ui:ModelCraft}} › {{ui:Asistenti}} označite **Dozvoli AI asistentima i skriptama da koriste ModelCraft**, pa **Uredi**.
2. U Studiu izaberite {{ui:Poveži asistenta}}. Prikazaće adresu i token koji ćete nalepiti u nastavku.
3. Preuzmite skriptu: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Iz Rhino-a

1. Pokrenite `cadcraft_link.py` u uređivaču skripti Rhino-a (Python 3 u Rhino 8).
2. Prvi put nalepite adresu i token. Čuvaju se u `.cadcraft-link.json` u vašoj početnoj fascikli, nikad u modelu. Studio pravi novi token svaki put kad se pokrene, pa skripta tada pita ponovo.

Ceo model stiže kao jedna grupa nazvana po dokumentu, na primer „chair (linked)“. Posle toga svaka promena stiže kad na trenutak pauzirate, i šalju se samo promenjeni objekti. Ponovo pokrenite skriptu da zaustavite.

## Iz Grasshopper-a

Prvo jednom pokrenite skriptu u Rhino-u, da se adresa i token sačuvaju.

1. Dodajte komponentu Script (Python 3) i nalepite ceo `cadcraft_link.py` u nju.
2. Dajte joj ove ulaze: `G` (geometrija, sa pristupom listi), `N` (ime, opciono), `On` (prekidač tačno/netačno) i `Target` (opciono: `model` ili `part`, ako su oba programa otvorena).
3. Postavite `On` na tačno.

Svako izračunavanje šalje `G` i menja ono što je komponenta poslala prošli put, pa prevlačenje klizača ažurira grupu ovde. Njen izlaz `a` kaže šta se desilo. Svaka komponenta ima sopstvenu grupu.

## Šta možete da radite sa grupom

- **Pomerite je, označite, gradite oko nje.** Mesto grupe i njena oznaka ostaju kroz svako ažuriranje, kao i sve što je pored nje.
- **Ne menjajte unutar nje.** Svako ažuriranje zamenjuje sadržaj grupe. Objekti pripadaju drugom programu.
- **Opozovi.** Ažuriranja u razmaku od dve sekunde dele jedan korak opoziva, pa {{key:Mod+Z}} vraća ceo prevlak. Sledeće ažuriranje vraća model da odgovara.
- **Sačuvajte.** Sačuvana datoteka čuva vezu. Posle ponovnog otvaranja pokrenite skriptu, i ista grupa se ažurira.

## Šta stiže

Mreže, polipovršine, površine i izvlačenja kao mreža koju vidite na ekranu; SubD kao njegova mreža; krive kao ivice; blokovi kao zasebni objekti na mestu gde stoje (ne kao komponente); slojevi kao oznake, boje i jedinice. Pogledajte [Uvoz .3dm modela](topic:import-3dm-files) za to kako se ovo ovde prikazuje.

Izostavljeno, uz broj u drugom programu: tačke, tekst, kote, svetla i slično.

**Samo u jednom smeru.** Promene ovde se ne vraćaju u drugi program.

## Ako nešto pođe po zlu

- **„No ModelCraft or PartCraft window allows it“:** uradite korak 1 podešavanja.
- **„Studio refused the token“:** Studio je ponovo pokrenut. Kopirajte novi token i ponovo pokrenite skriptu. Za Grasshopper, prvo je pokrenite u Rhino-u.
- **„Cannot reach CadCraft Studio“:** Studio nije pokrenut, ili se adresa promenila.
