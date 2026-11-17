---
title: Dolazak iz drugih alata za modeliranje
summary: Kako navike modeliranja potisni/povuci preslikavaju u ModelCraft, tipku po tipku, i razlike koje zbunjuju ljude.
keywords: prebacivanje, migracija, poznato, razlike, modelar potisni povuci, skp, prečaci, navike, usporedba, okvir mjera, struktura, informacije o entitetu
from: 74ffd4ac
---

Ako ste modelirali u SketchUpu, ModelCraft će vam biti poznat: ista ideja ploha i potiskivanja i povlačenja, ista slova alata, okvir za vrijednosti u koji upisujete bez klika, zaključavanje uz crvenu, zelenu i plavu os, grupe, komponente, struktura, {{ui:Informacije o entitetu}} i scene. Ova stranica navodi što se preslikava izravno i, važnije, što ne.

## Navike koje se prenose

| Navikli ste na | U ModelCraftu |
|---|---|
| Pritisnete Space za Odabir, L za Liniju, R za Pravokutnik, C za Kružnicu | Isto: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Pritisnete P za Potisni/povuci, M za Pomakni, Q za Zakreni, S za Skaliraj, E za Gumicu, T za mjernu vrpcu | Isto: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Pritisnete O za Orbit, H za Pan, Z za zumiranje, Shift+Z za zumiranje opsega | Isto: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Pritisnete G za komponentu | Isto: {{key:G}}. {{key:Shift+G}} pravi grupu |
| Upisujete u okvir mjera bez klika na njega | Isto, u okviru za vrijednosti na dnu. Pritisnite {{key:Enter}} |
| Upisujete `4m,3m` za pravokutnik, `12s` za stranice | Isto |
| Upisujete `3x` ili `/3` nakon kopiranja s Pomakni | Isto; `*3` također radi |
| Upisujete `[x,y,z]` ili `<dx,dy,dz>` za točku ili pomak | Isto |
| Upisujete goli broj u modelu u arhitektonskim inčima i dobivate inče | Isto |
| Srednjim gumbom povlačite za orbitu, Shift+srednji gumb za pomicanje, kotačić za zumiranje na kursoru | Isto |
| Dvostruki klik s Potisni/povuci ponavlja udaljenost | Isto |
| Tipke sa strelicama zaključavaju crvenu, zelenu, plavu i paralelno | Isto: {{key:Right}} crvena, {{key:Left}} zelena, {{key:Up}} plava, {{key:Down}} paralelno |
| Držite Shift da zaključate zaključavanje | Isto |
| Ctrl (Option na Macu) za kopiranje pri pomicanju | {{key:Ctrl}}, {{key:Mod}} ili {{key:Alt}}, na bilo kojem računalu |
| Shift za preklapanje, Ctrl za dodavanje, Shift+Ctrl za uklanjanje iz odabira | Iste tipke; na Macu koristite {{key:Mod}} gdje piše Ctrl |
| Okvir s lijeva na desno, prelazni okvir s desna na lijevo | Isto |
| Alat Kota za označavanje duljina | {{key:D}}, i više: upišite novu duljinu u kotu i model se mijenja na nju. Vidi [Kota i promjena veličine](topic:dimensions) |
| Dvostruki klik na plohu za plohu plus bridove; trostruki za sve povezano | Isto |
| Dvostruki klik na grupu za uređivanje; Esc za zatvaranje | Isto |
| Povucite liniju preko plohe da je podijelite; obrišite brid između koplanarnih ploha da ih spojite | Isto |
| Gurnite okvir prozora kroz zid da ga izrežete | Isto |
| Stražnje plohe u plavo-sivoj boji; okretanje ploha | Ista boja; {{ui:Okreni plohu}} u {{ui:Informacije o entitetu}} |
| Scene kao kartice iznad pogleda, Page Up i Page Down | Isto, uz {{ui:Reproduciraj}} na ploči {{ui:Scene}} |
| Sjene iz datuma, vremena, geografske širine i dužine, sjever zelenom | Isto, na ploči {{ui:Stil}} |

## Razlike koje zbunjuju

### Spremanje je preuzimanje

Nema Spremi koja prepisuje datoteku koju ste otvorili, nema dijaloga Spremi kao s imenom, nema automatskog spremanja i nema datoteke sigurnosne kopije. {{ui:Spremi}} ({{key:Mod+S}}) svaki put preuzima novu `.modelcraft` datoteku, obično u mapu za preuzimanja. Često spremajte i sami preimenujte ili premjestite datoteke. Vidi [Otvaranje, spremanje, uvoz i izvoz](topic:files).

### Uvozi .skp datoteke, ali ih ne sprema

{{ui:Uvezi}} čita SketchUp datoteke vlastitim čitačem ModelCraft-a, u stranici: grupe, komponente, boje, teksture na plohama, oznake i meki bridovi dolaze s njima. Vidi [Formati datoteka detaljno](topic:formats#skp-files). ModelCraft ne može spremiti `.skp`: za povratak izvezite Collada iz ModelCraft-a i uvezite je u SketchUp.

### Nema izbornika desnim klikom

Desni gumb povlači pomicanje; desni klik ne radi ništa. Naredbe koje biste našli u kontekstnom izborniku nalaze se u {{ui:Informacije o entitetu}} ({{ui:Okreni plohu}}, {{ui:Uređivanje}}, {{ui:Rastavi}}, {{ui:Učini jedinstvenom}}, {{ui:Napravi komponentu}}) i u grupi {{ui:Organizacija}} na alatnoj traci.

### Jedinice su u statusnoj traci

Nema Model Info ni izbora predloška. Birač jedinica je dolje desno. Novi model počinje u stopama i inčima u SAD-u, a inače u milimetrima, prema jeziku vašeg preglednika. Decimale uvijek koriste točku: `2.5m`, nikad `2,5m`, jer zarez uvijek odvaja vrijednosti.

### Boje imaju vlastite materijale

{{ui:Oboji}} ({{key:B}}) boji punim bojama i materijalima u odjeljku {{ui:Materijali}}: cigla, obloga, krovni pokrov, drvo, kamen i više, što crta ModelCraft. Vlastitu sliku još ne možete učitati kao materijal; teksture koje dolaze s uvezenim datotekama se čuvaju. Vidi [Bojanje bojama i materijalima](topic:paint).

### Skaliranje je ravnomjerno, bez ručki

Skaliranje ne prikazuje okvir s ručkama. Kliknite točku koja ostaje na mjestu, referentnu točku, zatim novu veličinu ili upisani faktor. Uvijek skalira jednako u svim smjerovima. Za rastezanje u jednom smjeru potisnite/povucite ili pomaknite plohu, upišite ponovo širinu, dubinu ili visinu grupe u {{ui:Informacije o entitetu}}, ili [promijenite veličinu kotom](topic:dimensions).

### Zakret bira ravninu prema mjestu klika

Nema kutomjera koji se lijepi za plohe dok strelicama birate ravninu. Kliknite središte na plohi da zakrenete u ravnini te plohe, ili na tlo da zakrenete oko vertikale. Tipke sa strelicama orbitiraju pogled prije prvog klika.

### Hvatanje iz točaka koje prijeđete

ModelCraft se hvata na smjerove osi iz **vaše početne točke**, a na točke, bridove i plohe ispod kursora. Ne prati smjer iz točke preko koje samo prijeđete (isprekidana referenca "od točke"). Za poravnanje s dalekim kutom zaključajte os tipkom sa strelicom i prijeđite preko tog kuta: zaključana točka kliže tako da se poravna s njim. Ili postavite [pomoćnu liniju](topic:guides-measure).

### Paralelno koristi brid preko kojeg ste prešli prije početka

Zaključavanje paralelno i okomito koristi zadnji brid koji je kursor prešao **prije prvog klika**, a ne bridove preko kojih prelazite dok crtate. Vidi [Zaključavanje i hvatanje](topic:inference#parallel-and-perpendicular).

### Kopije grupe su povezane

Kopiranje grupe s {{ui:Pomakni}} stvara drugi položaj iste grupe, pa uređivanje jedne mijenja obje, kao kod komponenti. SketchUp grupe čini neovisnima. Vidi [Rješavanje problema](topic:troubleshooting#editing-one-group-changed-another).

### Space ne pomiče pogled

{{key:Space}} bira {{ui:Odaberi}}, kao u SketchUpu. U nekim drugim web aplikacijama držanje Spacea pomiče, ovdje ne. Umjesto toga desnim gumbom povucite za pomicanje.

### Pomicanje dvama prstima zumira

Na touchpadu postavite {{ui:Postavke}} › {{ui:ModelCraft}} › Pomicanje na Trackpad: dva prsta orbitiraju, {{key:Shift}} i dva prsta pomiču, stisak zumira. Vidi [Orbita, pomicanje i zumiranje](topic:orbit-pan-zoom#on-a-trackpad).

Ako vaše ruke poznaju Blenderove tipke, a ne SketchUpove, odaberite stil izbornika {{ui:Modelar}}: {{key:G}}, {{key:R}} i {{key:S}} djeluju na odabir odjednom, {{key:E}} izvlači (potiskuje/povlači), {{key:Shift+D}} duplicira, a traka izbornika u zaglavlju (Datoteka, Uređivanje, Pogled, Odabir, Dodaj, Objekt, Mreža) zamjenjuje alatnu traku. Ako dolazite iz SketchUpa, stil {{ui:Potisni/povuci}} daje traku izbornika kao svoju preko istih slova alata. Vidi [Izbornici, tipke i miš](topic:menus-keys-and-mouse).

### Tijela gurnuta jedno u drugo se ne režu

Potisni/povuci reže kroz plohu iza nje u istom objektu, ali dva odvojena tijela gurnuta jedno u drugo se ne sijeku. Nema Intersect Faces ni Solid Tools.

### Što nedostaje

Slobodno crtanje, Trim, Split i Outer Shell, vaše vlastite slike kao materijali, proširenja i alat za layout listova nisu u ovoj verziji. [Još nije izrađeno](topic:not-built-yet) navodi što učiniti umjesto toga.

## Prečaci koje preglednik zadržava

ModelCraft radi u pregledniku, pa neki prečaci pripadaju pregledniku, a ne aplikaciji. {{key:Mod+N}} otvara prozor preglednika (koristite {{ui:Novo}}), a {{key:Mod+W}} zatvara karticu. Ako imate nespremljene promjene, preglednik pita prije zatvaranja. Vidi [Tipke, miševi i touchpadovi](common:keys#shortcuts-the-browser-keeps).
