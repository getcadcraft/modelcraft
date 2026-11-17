---
title: Ohranjanje modela .3dm v živi povezavi
summary: Spremenite model v programu, ki ga je ustvaril, in spremembe vidite tukaj, iz Rhino 8 ali definicije Grasshopper, brez ponovnega shranjevanja in uvoza.
keywords: rhino, grasshopper, živa povezava, živa vez, 3dm, nurbs, parametrično, povezava, sinhronizacija, skript, referenčni model, potisni
from: 331b0a7e
---

Modelirajte tam, kjer modelirate, rezultat pa uporabite tukaj: za upodobitev, osvetlitev ali postavitev prizora okoli njega. Vsaka sprememba v drugem programu osveži eno skupino v ModelCraft.

:::note
Povezava potrebuje **CadCraft Studio** na istem računalniku. Zavihek brskalnika ne more vzpostaviti povezave. Nič ne gre prek interneta: skript komunicira s Studio na naslovu tega računalnika, z žetonom.
:::

:::warning
Ta povezava je bila preizkušena s pisalnikom datotek skripta in z nadomestkom za drug program, še ne znotraj samega Rhina ali Grasshopperja. Če tam kaj ne uspe, nam sporočite, kaj je pisalo.
:::

## Nastavitev

1. V Studio odprite ModelCraft. V {{ui:Nastavitve}} › {{ui:ModelCraft}} › {{ui:Pomočniki}} označite **Dovoli AI pomočnikom in skriptom uporabo ModelCraft**, nato kliknite **Uredi**.
2. V Studio izberite {{ui:Poveži pomočnika}}. Prikaže se naslov in žeton, ki ju boste prilepili spodaj.
3. Prenesite skript: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Iz Rhina

1. Zaženite `cadcraft_link.py` v urejevalniku skriptov Rhina (Python 3 v Rhino 8).
2. Prvič prilepite naslov in žeton. Shranjena sta v `.cadcraft-link.json` v vaši domači mapi, nikoli v modelu. Studio ob vsakem zagonu ustvari nov žeton, zato skript takrat vpraša znova.

Ves model se prenese kot ena skupina, poimenovana po dokumentu, na primer „chair (linked)“. Nato se vsaka sprememba prenese, ko za trenutek počakate, in pošljejo se samo spremenjeni objekti. Za ustavitev skript znova zaženite.

## Iz Grasshopperja

Najprej skript enkrat zaženite v Rhinu, da se naslov in žeton shranita.

1. Dodajte komponento Script (Python 3) in vanjo prilepite celoten `cadcraft_link.py`.
2. Dodajte te vhode: `G` (geometrija, z dostopom do seznama), `N` (ime, neobvezno), `On` (logično stikalo) in `Target` (neobvezno: `model` ali `part`, če sta odprta oba programa).
3. Nastavite `On` na true.

Vsak izračun pošlje `G` in nadomesti tisto, kar je komponenta poslala nazadnje, zato drsnik osveži skupino tukaj. Njen izhod `a` pove, kaj se je zgodilo. Vsaka komponenta ima svojo skupino.

## Kaj lahko storite s skupino

- **Premaknite jo, označite jo, gradite okoli nje.** Mesto skupine in njena oznaka ostaneta pri vsaki posodobitvi, enako tudi vse ob njej.
- **Ne urejajte je znotraj.** Vsaka posodobitev nadomesti vsebino skupine. Ti objekti pripadajo drugemu programu.
- **Razveljavitev.** Posodobitve, ki so si med seboj blizu v dveh sekundah, delijo en korak razveljavitve, zato {{key:Mod+Z}} odstrani celoten vlek. Naslednja posodobitev model vrne v ujemanje.
- **Shranjevanje.** Shranjena datoteka ohrani povezavo. Po ponovnem odprtju znova zaženite skript in ista skupina se posodobi.

## Kaj se prenese

Mreže, polipovršine, ploskve in iztisi kot mreža, ki jo vidite na zaslonu; SubD kot njihova mreža; krivulje kot robovi; bloki kot ločeni objekti na mestu, kjer stojijo (ne kot komponente); sloji kot oznake, barve in enote. Kako se to prikaže tukaj, glejte [Uvoz modela .3dm](topic:import-3dm-files).

Izpuščeno, s številom v drugem programu: točke, besedilo, kote, luči in podobno.

**Samo v eno smer.** Spremembe tukaj se ne vrnejo v drugi program.

## Če kaj ne uspe

- **„Nobeno okno ModelCraft ali PartCraft tega ne dovoli“:** naredite 1. korak nastavitve.
- **„Studio je zavrnil žeton“:** Studio se je znova zagnal. Kopirajte nov žeton in znova zaženite skript. Za Grasshopper ga najprej zaženite v Rhinu.
- **„Ni mogoče doseči CadCraft Studio“:** Studio ne teče ali se je naslov spremenil.
