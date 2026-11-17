---
title: Dolazak iz drugih alata za modelovanje
summary: Kako se navike modelovanja guranjem i povlačenjem prenose u ModelCraft, tipku po tipku, i razlike zbog kojih se ljudi spotaknu.
keywords: prelazak, migracija, poznato, razlike, guraj povuci, skp, prečice, navike, poređenje, kutija mjera, outliner, podaci o entitetu
from: 74ffd4ac
---

Ako si modelovao u SketchUp-u, ModelCraft će ti biti poznat: ista ideja lica i guranja/povlačenja, ista slova alata, polje za vrijednosti u koje kucaš bez klika, zaključavanje uz crvenu, zelenu i plavu osu, grupe, komponente, Outliner, podaci o entitetu i scene. Ova stranica navodi šta se direktno prenosi i, važnije, šta ne.

## Navike koje se prenose

| Ono na šta si navikao | U ModelCraft-u |
|---|---|
| Pritisni Space za Odaberi, L za Linija, R za Pravougaonik, C za Krug | Isto: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Pritisni P za Gurni/povuci, M za Pomjeri, Q za Rotiraj, S za Skaliraj, E za Gumicu, T za Mjernu traku | Isto: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Pritisni O za Orbitu, H za Pomjeri pogled, Z za Zumiranje, Shift+Z za Zumiranje na sve | Isto: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Pritisni G za pravljenje komponente | Isto: {{key:G}}. {{key:Shift+G}} pravi grupu |
| Upiši u okvir za mjere bez klika na njega | Isto, u polju za vrijednost pri dnu. Pritisni {{key:Enter}} |
| Upiši `4m,3m` za pravougaonik, `12s` za stranice | Isto |
| Upiši `3x` ili `/3` nakon kopiranja pomjeranjem | Isto; `*3` takođe radi |
| Upiši `[x,y,z]` ili `<dx,dy,dz>` za tačku ili pomak | Isto |
| Upiši goli broj u modelu u inčima i dobij inče | Isto |
| Srednjim klizanjem orbitiraj, Shift+srednje klizanje za pomjeranje pogleda, točkić za zumiranje na kursor | Isto |
| Dvostruki klik s Gurni/povuci za ponavljanje razdaljine | Isto |
| Strelice za zaključavanje crvene, zelene, plave i paralelno | Isto: {{key:Right}} crvena, {{key:Left}} zelena, {{key:Up}} plava, {{key:Down}} paralelno |
| Drži Shift da zaključaš zaključavanje | Isto |
| Ctrl (Option na Mac-u) za kopiranje pri pomjeranju | {{key:Ctrl}}, {{key:Mod}} ili {{key:Alt}}, na svakom računaru |
| Shift za prebacivanje, Ctrl za dodavanje, Shift+Ctrl za uklanjanje iz izbora | Iste tipke; na Mac-u koristi {{key:Mod}} gdje piše Ctrl |
| Prozor s lijeva na desno, prelaz s desna na lijevo | Isto |
| Alat Kota za označavanje dužina | {{key:D}}, i više: upiši novu dužinu u kotu i model se mijenja na nju. Vidi [Kotiranje i promjena veličine](topic:dimensions) |
| Dvostruki klik na lice za lice plus ivice; trostruki za sve povezano | Isto |
| Dvostruki klik na grupu za uređivanje; Esc za zatvaranje | Isto |
| Nacrtaj liniju preko lica da ga podijeliš; obriši ivicu između koplanarnih lica da ih spojiš | Isto |
| Gurni pravougaonik prozora kroz zid da ga isječeš | Isto |
| Zadnja lica u plavo-sivoj; Obrni lica | Ista boja; {{ui:Obrni plohu}} u {{ui:Podaci o entitetu}} |
| Scene kao tabovi preko prikaza, Page Up i Page Down | Isto, uz {{ui:Pusti}} u panelu {{ui:Scene}} |
| Sjenke iz datuma, vremena, geografske širine i dužine, sa sjeverom označenim zelenom | Isto, u panelu {{ui:Stil}} |

## Razlike zbog kojih se ljudi spotaknu

### Snimanje je preuzimanje

Nema Spasi koje prepisuje datoteku koju si otvorio, nema dijaloga Spasi kao s imenom, nema automatskog snimanja i nema datoteke rezervne kopije. {{ui:Spasi}} ({{key:Mod+S}}) svaki put preuzima novu `.modelcraft` datoteku, obično u tvoju fasciklu za preuzimanja. Često snimaj i sam preimenuj ili premjesti datoteke. Vidi [Otvaranje, snimanje, uvoz i izvoz](topic:files).

### Uvozi .skp datoteke, ali ih ne snima

{{ui:Uvezi}} čita SketchUp datoteke ModelCraft-ovim sopstvenim čitačem, u stranici: grupe, komponente, boje, teksture na površinama, oznake i meke ivice dolaze s njima. Vidi [Formati datoteka detaljno](topic:formats#skp-files). ModelCraft ne može snimiti `.skp`: da se vratiš, izvezi Collada iz ModelCrafta i uvezi je u SketchUp.

### Nema desnoklik menija

Desno prevlačenje pomjera pogled; desni klik ne radi ništa. Naredbe koje bi našao u kontekstnom meniju su u {{ui:Podaci o entitetu}} ({{ui:Obrni plohu}}, {{ui:Uređivanje}}, {{ui:Rastavi}}, {{ui:Učini jedinstvenom}}, {{ui:Pravljenje komponente}}) i u grupi {{ui:Organizuj}} na traci sa alatima.

### Jedinice su u statusnoj traci

Nema Podataka o modelu ni izbora šablona. Birač jedinica je dolje desno. Novi model počinje u stopama i inčima u SAD-u, a u milimetrima drugdje, prema jeziku tvog pregledača. Decimale uvijek koriste tačku: `2.5m`, nikad `2,5m`, jer zarez uvijek razdvaja vrijednosti.

### Boja ima sopstvene materijale

{{ui:Boji}} ({{key:B}}) boji pune boje i materijale u odjeljku {{ui:Materijali}}: cigla, obloga, krovište, drvo, kamen i još, koje crta ModelCraft. Još ne možeš učitati vlastitu sliku kao materijal; teksture koje dolaze s uvezenim datotekama se zadržavaju. Vidi [Boji bojama i materijalima](topic:paint).

### Skaliranje je ravnomjerno, bez hvatača

Skaliranje ne prikazuje kutiju s hvatačima. Klikni tačku koja ostaje na mjestu, referentnu tačku, zatim novu veličinu ili upisani faktor. Uvijek se skalira ravnomjerno u svim smjerovima. Da se rasteže u jednom smjeru, gurni/povuci ili pomjeri lice, ili ponovo upiši širinu, dubinu ili visinu grupe u {{ui:Podaci o entitetu}}, ili [promijeni veličinu pomoću kote](topic:dimensions).

### Rotacija bira ravan prema tome gdje klikneš

Nema uglomjera koji se, dok lebdiš strelicama, lijepi za površine da odabereš ravan. Klikni centar na površini da se okreneš u ravni te površine, ili na tlu da se okreneš oko vertikale. Strelice okreću prikaz prije prvog klika.

### Zaključavanje iz tačaka preko kojih prelaziš

ModelCraft se lijepi za smjerove osa iz **tvoje početne tačke**, te za tačke, ivice i površine ispod pokazivača. Ne prati smjer iz tačke preko koje si samo prešao mišem (isprekidana linija "od tačke"). Da se poravnaš s dalekim uglom, zaključaj osu tipkom sa strelicom i lebdi nad tim uglom: zaključana tačka klizi da se poravna s njim. Ili postavi [vodilju](topic:guides-measure).

### Paralelno koristi ivicu preko koje si prešao prije početka

Zaključavanje paralelno i okomito koristi posljednju ivicu koju je pokazivač prešao **prije prvog klika**, a ne ivice preko kojih lebdiš dok crtaš. Vidi [Zaključavanje i hvatanje](topic:inference#parallel-and-perpendicular).

### Kopije grupe su povezane

Kopiranje grupe s {{ui:Pomjeri}} pravi drugo postavljanje iste grupe, pa izmjena jedne mijenja obje, kao kod komponenti. SketchUp pravi grupe nezavisnim. Vidi [Rješavanje problema](topic:troubleshooting#editing-one-group-changed-another).

### Space ne pomjera pogled

{{key:Space}} bira {{ui:Odaberi}}, kao u SketchUp-u. U nekim drugim web aplikacijama držanje Space-a pomjera pogled; ovdje ne. Umjesto toga koristi desno prevlačenje.

### Dvoprsti skrol zumira

Na touchpadu postavi {{ui:Postavke}} › {{ui:ModelCraft}} › Skrolovanje na Touchpad: dva prsta orbitiraju, {{key:Shift}} i dva prsta pomjeraju pogled, štipanje zumira. Vidi [Orbita, pomjeranje i zumiranje](topic:orbit-pan-zoom#on-a-trackpad).

Ako tvoje ruke znaju Blenderove tipke, a ne SketchUp-ove, odaberi meni stil {{ui:Modeler}}: {{key:G}}, {{key:R}} i {{key:S}} djeluju na odabir odjednom, {{key:E}} izvlači (gurni/povuci), {{key:Shift+D}} duplira, a traka menija pri vrhu (Datoteka, Uređivanje, Prikaz, Odaberi, Dodaj, Objekat, Mreža) zamjenjuje traku sa alatima. Ako dolaziš iz SketchUp-a, stil {{ui:Push-pull}} daje meni sličan njegovom, preko istih slova alata. Vidi [Meni, tipke i miš](topic:menus-keys-and-mouse).

### Čvrsta tijela gurnuta jedno u drugo ne sijeku se

Gurni/povuci siječe kroz lice iza njega u istom objektu, ali dva odvojena tijela gurnuta jedno u drugo se ne sijeku. Nema Presijecanja lica ni Alata za čvrsta tijela.

### Šta nedostaje

Slobodnoručno crtanje, Obrezivanje, Podjela i Vanjska ljuska, sopstvene slike kao materijali, proširenja i alat za izgled listova nisu u ovoj verziji. [Još nije izgrađeno](topic:not-built-yet) navodi šta raditi umjesto toga.

## Prečice koje pregledač zadržava

ModelCraft radi u pregledaču, pa neke prečice pripadaju pregledaču, a ne aplikaciji. {{key:Mod+N}} otvara prozor pregledača (koristi {{ui:Novo}}), a {{key:Mod+W}} zatvara karticu. Ako imaš nesnimljene izmjene, pregledač pita prije zatvaranja. Vidi [Tipke, miševi i touchpadovi](common:keys#shortcuts-the-browser-keeps).
