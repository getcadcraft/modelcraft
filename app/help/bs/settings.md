---
title: ModelCraft postavke
summary: Odaberite stil tipki koji poznajete, omogućite orbitiranje i pomjeranje pogleda trackpadom bez dugmadi kamere, te uključite ili isključite hvatanje i sudaranje tijela.
keywords: postavke, preferencije, kontrole, stil tipki, mapa tipki, prečice, blender, trackpad, touchpad, skrolanje, orbita, štipanje, hvatanje, sudaranje, preklapanje, prolazak kroz
from: caf77d5b
---

Otvorite {{ui:Postavke}} zupčanikom u traci aplikacije ili pomoću {{key:Mod+,}}. Prvi jezičak, {{ui:ModelCraft}}, sadrži postavke koje pripadaju ovoj aplikaciji; {{ui:Opšte}} sadrži one koje dijele sve CadCraft aplikacije (tema, traka s alatima, paneli). Postavke ModelCraft-a postoje samo u aplikaciji: mijenjate ih ovdje, a ovaj pretraživač ih pamti.

## Upravljanje: tipke i dugmad miša

Dva stila tipki. Mijenjate ih ovdje, pomoću {{ui:Tasteri: Gurni/povuci}} / {{ui:Tasteri: Modeler}} u donjem desnom uglu prikaza, ili na kraju menija {{ui:Više}} u traci alata:

- **Stil gurni/povuci** (početni; slova modelara gurni/povuci, kao SketchUp): slovo bira alat: {{key:L}} linija, {{key:R}} pravougaonik, {{key:P}} gurni/povuci, {{key:M}} pomjeri, {{key:Q}} rotiraj, {{key:S}} skaliraj, {{key:G}} napravi komponentu. Vidi [Tipke i radnje mišem](topic:keyboard).
- **Stil modelera** (tipke modelara mreža, kao Blender): prvo odaberite, pa odmah radite nad odabirom. {{key:G}} ga pomjera, {{key:R}} rotira i {{key:S}} skalira od pozicije pokazivača, bez prvog klika. Dok se pomjera, {{key:X}}, {{key:Y}} ili {{key:Z}} zaključava crvenu, zelenu ili plavu osu, unesen broj postavlja udaljenost (ili stepene, ili faktor), a klik ili {{key:Enter}} ga spušta; {{key:Esc}} ili desni klik ga vraća na mjesto. Zatim ste opet u {{ui:Odaberi}}.

Stil tipki je isti izbor kao stil menija: stil tipki Modeler je {{ui:Modeler}} stil menija, pa odabir jednog bira i drugi. Vidi [Meniji, tipke i miš](topic:menus-keys-and-mouse). Potpuna lista za Modeler je u [Tipke i radnje mišem](topic:keyboard#modeler-keys). Opisi na alatnoj traci i na početnoj kartici prate stil koji odaberete.

## Skrolanje: točkić miša ili trackpad

- **Odredi sam** (početni): ModelCraft prati skrolanje. Bočno ili sitno skrolanje, kakvo šalje trackpad, orbitira; cijeli koraci točkića zumiraju.
- **Točkić miša**: skrolanje uvijek zumira prema pokazivaču.
- **Trackpad**: prevucite dva prsta za orbitiranje, držite {{key:Shift}} i prevucite za pomjeranje pogleda, štipnite za zum. Nikad vam ne trebaju dugmad {{ui:Orbita}}, {{ui:Pomjeri pogled}} ili {{ui:Zumiraj}}.

Štipanje zumira u svakom izboru. Ako "Odredi sam" pogriješi za vaš miš ili trackpad, odaberite onaj koji imate.

:::tip
U stilu Modeler možete orbitirati i držanjem {{key:Alt}} i prevlačenjem, a pomjerati pogled pomoću {{key:Alt+Shift}} i prevlačenja, što je zgodno na laptopu bez srednjeg dugmeta.
:::

## Hvatanje

**Hvataj za tačke, ivice i ose** (uključeno na početku) privlači pokazivač ka krajnjim tačkama, središtima, ivicama, vodilicama i crvenoj, zelenoj i plavoj osi; vidi [Zaključivanje](topic:inference). Isključite ga kad želite slobodno postaviti nešto blizu druge geometrije, bez skakanja. Površine, tlo i zaključavanje osa i dalje rade s isključenim hvatanjem.

Dugme {{ui:Hvatanje}} u donjem desnom uglu prikaza radi isto za rad u ovoj sesiji (također se pamti). U stilu Modeler, {{key:Shift+Tab}} ga prebacuje.

## Tijela staju kad se dodirnu

**Zaustavi tijela kad se dodirnu** (uključeno na početku) sprječava da se zid povuče kroz drugi zid. Uz {{ui:Pomjeri}} (i {{key:G}}, te lijepljenje pa pomjeranje s {{key:Mod+D}}), odabir klizi do drugog tijela i staje dodirujući ga; uz {{ui:Gurni/povuci}}, površina staje kad naiđe na drugo tijelo. Oslanjanje na nešto i klizanje po tome su u redu: zaustavlja se samo ulazak unutra. Stvari koje se već preklapaju na početku i dalje se mogu razdvojiti.

Da gurnete nešto kroz namjerno, kliknite {{ui:Sudaranje}} u donjem desnom uglu (ili isključite postavku), napravite pomjeranje, pa ponovo kliknite.

:::note
Sudari se provjeravaju za pomjeranje i gurni/povuci. {{ui:Rotiraj}} i {{ui:Skaliraj}} ih još ne provjeravaju, a slobodna geometrija koja se dodiruje i dalje se spaja, kao i uvijek: odvojene stvari držite u [grupama](topic:groups-components) da ostanu odvojene.
:::

## Podloga 3D štampača

Veličina podloge vašeg štampača: {{ui:Nije postavljeno}} (početno), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 ili 300 × 300 × 400 mm. Izaberite veličinu koja je najbliža radnom prostoru štampača. [Provjera za 3D štampanje](topic:print-3d) tada kaže kad je model veći od podloge; uz {{ui:Nije postavljeno}} veličina se ne provjerava.

## Orbitiranje i pomjeranje

**Orbitiraj oko onoga što je ispod kursora** (uključeno na početku): orbitiranje se okreće oko dijela modela ispod pokazivača, a pomjeranje održava tu tačku ispod pokazivača; iznad praznog prostora oba koriste središte prikaza. Isključite da uvijek orbitirate oko središta prikaza. **Brzina orbitiranja** i **Brzina pomjeranja** idu od 0.25× do 3× (1× je početno) i važe za miš, trackpad, dodir i strelice. Vidi [Orbitiranje, pomjeranje i zum](topic:orbit-pan-zoom).

## Indikator u uglu

Šta se prikazuje u uglu 3D prikaza: **Kocka prikaza** (početno; gore desno: kliknite površinu, ivicu ili ugao da gledate odatle, prevucite da orbitirate, prevucite njen kompasni prsten da okrećete model), **Ikona osa** (mali X, Y, Z marker dolje lijevo koji se okreće s pogledom: X crveno, Y zeleno, Z plavo) ili **Nijedno**. Vidi [Kocka prikaza](topic:view-cube).
