---
title: Podešavanja ModelCraft
summary: Izaberi stil tastera koji poznaješ, napravi da se orbitiranje i pomeranje na tačpedu radi bez dugmadi kamere, i uključi ili isključi hvatanje i sudaranje tela.
keywords: podešavanja, opcije, upravljanje, stil tastera, mapa tastera, prečice, blender, tačpad, točkić, skrolovanje, orbitiranje, štipanje, hvatanje, sudaranje, preklapanje, prolazak kroz
from: caf77d5b
---

Otvori {{ui:Podešavanja}} preko zupčanika u traci aplikacije ili {{key:Mod+,}}. Prvi jezičak, {{ui:ModelCraft}}, sadrži podešavanja koja pripadaju ovoj aplikaciji; {{ui:Opšte}} sadrži ona koja dele sve CadCraft aplikacije (tema, traka sa alatima, paneli). Podešavanja ove aplikacije važe samo u njoj: menjaš ih ovde, a ovaj pregledač ih pamti.

## Upravljanje: koji tasteri i dugmad miša

Dva stila tastera. Menjaš ih ovde, pomoću {{ui:Tasteri: guranje/vučenje}} / {{ui:Tasteri: modelar}} u donjem desnom uglu prikaza, ili na kraju menija {{ui:Više}} u traci alata:

- **Stil guranje/vučenje** (na početku; slova kao kod programa za modelovanje guranjem, kao SketchUp): slovo bira alat: {{key:L}} linija, {{key:R}} pravougaonik, {{key:P}} guranje/vučenje, {{key:M}} premesti, {{key:Q}} rotiraj, {{key:S}} skaliraj, {{key:G}} napravi komponentu. Vidi [Tasteri i radnje mišem](topic:keyboard).
- **Stil modelara** (tasteri mrežnih modelara kao Blender): prvo izaberi, pa odmah deluj na izbor. {{key:G}} ga premešta, {{key:R}} rotira i {{key:S}} skalira od mesta gde je pokazivač, bez prvog klika. Dok se pomera, {{key:X}}, {{key:Y}} ili {{key:Z}} zaključava crvenu, zelenu ili plavu osu, uneti broj određuje rastojanje (ili stepene, ili faktor), a klik ili {{key:Enter}} ga spušta; {{key:Esc}} ili desni klik ga vraća. Zatim si opet u {{ui:Izaberi}}.

Stil tastera isti je kao izbor stila u meniju: stil modelara je {{ui:Modeler}} stil u meniju, a izbor jednog bira i drugi. Vidi [Meniji, tasteri i miš](topic:menus-keys-and-mouse). Potpuna lista za stil modelara je u [Tasteri i radnje mišem](topic:keyboard#modeler-keys). Opisi dugmadi na traci alata i na početnoj kartici prate stil koji izabereš.

## Skrolovanje: točkić miša ili tačpad

- **Sam utvrdi** (na početku): ModelCraft prati skrolovanje. Bočno ili sitno skrolovanje, kakvo šalje tačpad, orbitira; cele zareze točkića zumiraju.
- **Točkić miša**: skrolovanje uvek zumira prema pokazivaču.
- **Tačpad**: prevuci dvema prstima da orbitiraš, drži {{key:Shift}} i prevuci da pomeriš pogled, štipni za zumiranje. Nikad ti ne trebaju dugmad {{ui:Orbitiraj}}, {{ui:Pomeri pogled}} ili {{ui:Zumiraj}}.

Štipanje zumira u svakom izboru. Ako „Sam utvrdi“ pogreši za tvoj miš ili tačpad, izaberi onaj koji imaš.

:::tip
U stilu modelara možeš i da orbitiraš držeći {{key:Alt}} i prevlačeći, a da pomeraš pogled sa {{key:Alt+Shift}} i prevlačenjem — zgodno na laptopu bez srednjeg dugmeta.
:::

## Hvatanje

**Hvataj tačke, ivice i ose** (uključeno na početku) privlači pokazivač ka krajnjim tačkama, središtima, ivicama, vodilicama i crvenoj, zelenoj i plavoj osi — vidi [Zaključivanje](topic:inference). Isključi ga kad želiš da nešto postaviš slobodno blizu druge geometrije bez skakanja. Površine, tlo i zaključavanje osa rade i sa isključenim hvatanjem.

Dugme {{ui:Hvatanje}} u donjem desnom uglu prikaza radi isto za rad u ovoj sesiji (čuva se i ono). U stilu modelara {{key:Shift+Tab}} ga menja.

## Tela staju kad se dodirnu

**Zaustavi tela kad se dodirnu** (uključeno na početku) sprečava da se zid prevuče kroz drugi zid. Sa {{ui:Premesti}} (i sa {{key:G}}, i nalepi-pa-pomeri sa {{key:Mod+D}}) izbor klizi do drugog tela i staje kad ga dodirne; sa {{ui:Guraj/vuci}} površina staje kad naleti na drugo telo. Oslanjanje na nešto i klizanje po njemu su u redu — zaustavlja se samo ulazak u unutrašnjost. Stvari koje se već preklapaju na početku i dalje mogu da se razdvoje.

Da guraš nešto kroz drugo namerno, klikni {{ui:Sudaranje}} u donjem desnom uglu (ili isključi podešavanje), napravi pomeranje i ponovo klikni.

:::note
Sudari se proveravaju za pomeranja i guranje/vučenje. {{ui:Rotiraj}} i {{ui:Skaliraj}} ih još ne proveravaju, a labava geometrija koja se dodiruje i dalje se spaja, kao i uvek: drži odvojene stvari u [grupama](topic:groups-components) da ostanu odvojene.
:::

## 3D štampač: podloga

Veličina podloge tvog štampača: {{ui:Nije podešeno}} (na početku), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 ili 300 × 300 × 400 mm. Izaberi veličinu najbližu zapremini izrade tvog štampača. [Provera za 3D štampu](topic:print-3d) tada kaže kad je model veći od podloge; uz {{ui:Nije podešeno}} veličina se ne proverava.

## Orbitiranje i pomeranje

**Orbitiraj oko onoga što je pod kursorom** (uključeno na početku): orbita se obrće oko dela modela pod pokazivačem, a pomeranje drži tu tačku pod pokazivačem; iznad praznog prostora oboje koristi središte prikaza. Isključi da uvek orbitiraš oko središta prikaza. **Brzina orbitiranja** i **Brzina pomeranja** idu od 0.25× do 3× (1× je na početku) i važe za miš, tačpad, dodir i strelice. Vidi [Orbitiraj, pomeri i zumiraj](topic:orbit-pan-zoom).

## Indikator u uglu

Šta se vidi u uglu 3D prikaza: **Kocka pogleda** (na početku; gore desno — klikni na površinu, ivicu ili ugao da gledaš odatle, prevuci je da orbitiraš, prevuci njen prsten kompasa da okrećeš model), **Ikona osa** (mali X, Y, Z znak dole levo koji se menja s pogledom: X crveno, Y zeleno, Z plavo) ili **Nijedan**. Vidi [Kocka pogleda](topic:view-cube).
