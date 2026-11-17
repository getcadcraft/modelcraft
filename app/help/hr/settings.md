---
title: Postavke ModelCraft
summary: Odaberite stil tipki koji poznajete, omogućite orbitiranje i pomicanje pogleda na touchpadu bez gumba kamere te uključite ili isključite hvatanje i sudare tijela.
keywords: postavke, preferencije, upravljanje, stil tipki, karta tipki, prečaci, blender, trackpad, touchpad, pomicanje, orbit, štipanje, hvatanje, sudar, sudaranje, preklapanje, prolazak kroz
from: caf77d5b
---

Otvorite {{ui:Postavke}} zupčanikom u traci aplikacije ili {{key:Mod+,}}. Prva kartica, {{ui:ModelCraft}}, sadrži postavke koje pripadaju ovoj aplikaciji; {{ui:Općenito}} sadrži one koje dijele sve CadCraft aplikacije (tema, alatna traka, ploče). Postavke ModelCraft postoje samo u aplikaciji: mijenjate ih ovdje, a ovaj preglednik ih pamti.

## Upravljanje: koje tipke i gumbi miša

Postoje dva stila tipki. Mijenjate ih ovdje, pomoću {{ui:Tipke: potisni/povuci}} / {{ui:Tipke: modelar}} u donjem desnom kutu prikaza, ili na kraju izbornika {{ui:Više}} na alatnoj traci:

- **Stil potisni/povuci** (početni; slova modelara tipa potisni/povuci, kao SketchUp): slovo bira alat — {{key:L}} linija, {{key:R}} pravokutnik, {{key:P}} potisni/povuci, {{key:M}} pomakni, {{key:Q}} zakreni, {{key:S}} skaliraj, {{key:G}} stvori komponentu. Vidi [Tipke i radnje mišem](topic:keyboard).
- **Stil modelar** (tipke modelara mreža kao Blender): prvo odaberite, pa odmah djelujte na odabir. {{key:G}} ga pomiče, {{key:R}} rotira i {{key:S}} skalira od mjesta pokazivača — bez prvog klika. Dok se pomiče, {{key:X}}, {{key:Y}} ili {{key:Z}} zaključava crvenu, zelenu ili plavu os, upisani broj postavlja udaljenost (ili stupnjeve, ili faktor), a klik ili {{key:Enter}} ga spušta; {{key:Esc}} ili desni klik ga vraća. Zatim ste opet u {{ui:Odaberi}}.

Stil tipki je isti izbor kao stil izbornika: stil tipki modelar je {{ui:Modelar}} stil izbornika, a odabir jednog bira i drugi. Vidi [Izbornici, tipke i miš](topic:menus-keys-and-mouse). Potpuni popis za modelar nalazi se u [Tipke i radnje mišem](topic:keyboard#modeler-keys). Opisi na alatnoj traci i početnoj kartici prate stil koji odaberete.

## Pomicanje: kotačić miša ili touchpad

- **Sam otkrij** (početno): ModelCraft prati pomicanje. Bočno ili sitno pomicanje, kakvo šalje touchpad, orbitira; cijeli koraci kotačića zumiraju.
- **Kotačić miša**: pomicanje uvijek zumira prema pokazivaču.
- **Touchpad**: povucite dvama prstima za orbitiranje, držite {{key:Shift}} i povucite za pomicanje pogleda, a štipnite za zumiranje. Gumbi {{ui:Orbit}}, {{ui:Pan}} i {{ui:Zumiranje}} vam nikad nisu potrebni.

Štipanje zumira u svakom izboru. Ako „Sam otkrij“ pogriješi za vaš miš ili touchpad, odaberite onaj koji imate.

:::tip
U stilu modelar možete orbitirati i držanjem {{key:Alt}} uz povlačenje, a pomicati pogled s {{key:Alt+Shift}} i povlačenjem — praktično na prijenosnom računalu bez srednjeg gumba.
:::

## Hvatanje

**Hvatanje za točke, bridove i osi** (uključeno na početku) privlači pokazivač k krajnjim točkama, polovištima, bridovima, pomoćnim linijama te crvenoj, zelenoj i plavoj osi — vidi [Zaključivanje](topic:inference). Isključite ga kad želite slobodno postaviti nešto blizu druge geometrije bez skakanja. Plohe, tlo i zaključavanje osi i dalje rade s isključenim hvatanjem.

Gumb {{ui:Hvatanje}} u donjem desnom kutu prikaza čini isto za rad u ovoj sesiji (sprema se također). U stilu modelar {{key:Shift+Tab}} ga prebacuje.

## Tijela staju na dodiru

**Zaustavi tijela na dodiru** (uključeno na početku) sprječava da se zid povuče kroz drugi zid. Uz {{ui:Pomakni}} (i {{key:G}}, te dupliciranje pa pomicanje s {{key:Mod+D}}) odabir klizi do drugog tijela i staje uz njega; uz {{ui:Potisni/povuci}} ploha staje gdje naiđe na drugo tijelo. Oslanjanje na nešto i klizanje po tome su u redu — zaustavlja se samo ulazak u unutrašnjost. Stvari koje se već preklapaju na početku i dalje se mogu razmaknuti.

Da nešto namjerno gurnete kroz drugo, kliknite {{ui:Sudar}} u donjem desnom kutu (ili isključite postavku), napravite pomak i ponovno kliknite.

:::note
Sudari se provjeravaju pri pomicanju i potiskivanju/povlačenju. {{ui:Zakreni}} i {{ui:Skaliraj}} ih još ne provjeravaju, a slobodna geometrija koja se dodiruje i dalje se spaja, kao i uvijek: držite zasebne stvari u [grupama](topic:groups-components) da ostanu odvojene.
:::

## Podloga 3D pisača

Veličina podloge vašeg pisača: {{ui:Nije postavljeno}} (početno), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 ili 300 × 300 × 400 mm. Odaberite veličinu koja je najbliža radnom volumenu vašeg pisača. [Provjera za 3D ispis](topic:print-3d) tada kazuje kad je model veći od podloge; uz {{ui:Nije postavljeno}} veličina se ne provjerava.

## Orbitiranje i pomicanje pogleda

**Orbitiraj oko onoga što je pod pokazivačem** (uključeno na početku): orbit se okreće oko dijela modela pod pokazivačem, a pomicanje pogleda drži tu točku pod pokazivačem; iznad praznog prostora oboje koriste središte prikaza. Isključite to da uvijek orbitirate oko središta prikaza. **Brzina orbitiranja** i **brzina pomicanja** idu od 0.25× do 3× (1× je početno) i vrijede za miš, touchpad, dodir i tipke sa strelicama. Vidi [Orbitiranje, pomicanje i zumiranje](topic:orbit-pan-zoom).

## Oznaka u kutu

Što se prikazuje u kutu 3D prikaza: **ViewCube** (početno; gore desno — kliknite plohu, brid ili vrh da gledate s tog mjesta, povucite ga za orbitiranje, povucite njegov prsten kompasa za zakretanje modela), **Ikona osi** (mala oznaka X, Y, Z u donjem lijevom kutu koja se okreće s pogledom: X crveno, Y zeleno, Z plavo) ili **Ništa**. Vidi [ViewCube](topic:view-cube).
