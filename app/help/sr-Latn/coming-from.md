---
title: Dolazak iz drugih modelara
summary: Kako se navike modeliranja guranjem i povlačenjem preslikavaju u ModelCraft, taster po taster, i razlike koje iznenade ljude.
keywords: prelazak, prenos, poznato, razlike, guranje povlačenje, skp, prečice, navike, poređenje, kutija mera, outliner, podaci o entitetu
from: 74ffd4ac
---

Ako ste modelirali u SketchUp-u, ModelCraft će vam biti poznat: ista ideja strana i guranja i povlačenja, ista slova alata, polje za vrednost u koje upisujete bez klikanja, zaključavanje pravaca crvenom, zelenom i plavom osom, grupe, komponente, Outliner, Podaci o entitetu i scene. Ova stranica navodi šta se direktno preslikava i, važnije, šta ne.

## Navike koje se prenose

| Navikli ste se na | U ModelCraft-u |
|---|---|
| Pritisnete Space za Izaberi, L Linija, R Pravougaonik, C Krug | Isto: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Pritisnete P Guraj/vuci, M Premesti, Q Rotiraj, S Skaliraj, E Gumica, T Traka za merenje | Isto: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Pritisnete O Orbit, H Pomeri pogled, Z Zumiraj, Shift+Z Zumiraj sve | Isto: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Pritisnete G za komponentu | Isto: {{key:G}}. {{key:Shift+G}} pravi grupu |
| Upisujete u polje Mere bez klika na njega | Isto, u polju za vrednost pri dnu. Pritisnite {{key:Enter}} |
| Upišete `4m,3m` za pravougaonik, `12s` za stranice | Isto |
| Upišete `3x` ili `/3` posle kopiranja pomeranjem | Isto; i `*3` radi |
| Upišete `[x,y,z]` ili `<dx,dy,dz>` za tačku ili pomeraj | Isto |
| Upišete goli broj u arhitektonskom modelu u inčima i dobijete inče | Isto |
| Srednje dugme-prevlačenje za orbitiranje, Shift+srednje dugme-prevlačenje za pomeranje, točkić za zumiranje na kursoru | Isto |
| Dvoklik sa Guraj/vuci za ponavljanje rastojanja | Isto |
| Strelice za zaključavanje crvene, zelene, plave i paralelno | Isto: {{key:Right}} crvena, {{key:Left}} zelena, {{key:Up}} plava, {{key:Down}} paralelno |
| Držite Shift da zaključate usmeravanje | Isto |
| Ctrl (Option na Mac-u) za kopiranje pri pomeranju | {{key:Ctrl}}, {{key:Mod}} ili {{key:Alt}}, na svakom računaru |
| Shift za preklapanje, Ctrl za dodavanje, Shift+Ctrl za uklanjanje iz izbora | Isti tasteri; na Mac-u koristite {{key:Mod}} tamo gde piše Ctrl |
| Prozor sleva udesno, presecanje zdesna ulevo | Isto |
| Alat Kota za označavanje dužina | {{key:D}}, i više od toga: upišete novu dužinu u kotu i model se menja na nju. Pogledajte [Kota i promena veličine](topic:dimensions) |
| Dvoklik na stranu za stranu i ivice; trostruki klik za sve povezano | Isto |
| Dvoklik na grupu za uređivanje; Esc za zatvaranje | Isto |
| Nacrtajte liniju preko strane da je podelite; obrišite ivicu između strana u istoj ravni da ih spojite | Isto |
| Gurnite pravougaonik prozora kroz zid da ga isečete | Isto |
| Zadnje strane sivo-plave; Obrni strane | Ista boja; {{ui:Obrni površinu}} u {{ui:Podaci o entitetu}} |
| Scene kao kartice iznad prikaza, Page Up i Page Down | Isto, sa {{ui:Pusti}} na panelu {{ui:Scene}} |
| Senke iz datuma, vremena, geografske širine i dužine, sa severom na zelenoj | Isto, na panelu {{ui:Stil}} |

## Razlike koje iznenade ljude

### Čuvanje je preuzimanje

Nema čuvanja koje prepisuje datoteku koju ste otvorili, nema dijaloga Sačuvaj kao sa imenom, nema automatskog čuvanja i nema datoteke rezervne kopije. {{ui:Sačuvaj}} ({{key:Mod+S}}) svaki put preuzima novu `.modelcraft` datoteku, obično u fasciklu za preuzimanja. Čuvajte često, a datoteke preimenujte ili premestite sami. Pogledajte [Otvaranje, čuvanje, uvoz i izvoz](topic:files).

### Uvozi .skp datoteke, ali ih ne čuva

{{ui:Uvezi}} čita SketchUp datoteke sopstvenim čitačem ModelCraft-a, na stranici: grupe, komponente, boje, teksture na stranama, oznake i meke ivice se prenose. Pogledajte [Formati datoteka u detalje](topic:formats#skp-files). ModelCraft ne može da čuva `.skp`: za povratak izvezite Collada iz ModelCraft-a i uvezite je u SketchUp.

### Nema kontekstualnog menija

Prevlačenje desnim dugmetom pomera pogled; klik desnim ne radi ništa. Komande koje biste našli u kontekstualnom meniju su u {{ui:Podaci o entitetu}} ({{ui:Obrni površinu}}, {{ui:Uređivanje}}, {{ui:Rastavi}}, {{ui:Napravi jedinstvenu}}, {{ui:Napravi komponentu}}) i u grupi {{ui:Organizacija}} na alatnoj traci.

### Jedinice su u statusnoj traci

Nema Podataka o modelu ni izbora šablona. Birač jedinica je dole desno. Novi model počinje u stopama i inčima u SAD-u, a u milimetrima drugde, prema jezičkoj postavci vašeg pregledača. Decimale se uvek pišu tačkom: `2.5m`, nikad `2,5m`, jer zarez uvek razdvaja vrednosti.

### Boja ima sopstvene materijale

{{ui:Boji}} ({{key:B}}) boji punim bojama i materijalima iz odeljka {{ui:Materijali}}: cigla, fasadna obloga, krovni pokrivač, drvo, kamen i još, koje crta ModelCraft. Sopstvenu sliku kao materijal još ne možete učitati; teksture koje dolaze uz uvezene datoteke se čuvaju. Pogledajte [Bojenje bojama i materijalima](topic:paint).

### Skaliranje je ravnomerno, bez hvatača

Skaliranje ne prikazuje kutiju sa hvatačima. Kliknite tačku koja ostaje na mestu, referentnu tačku, pa novu veličinu ili upisani faktor. Uvek se skalira ravnomerno u svim pravcima. Da biste rastegli u jednom pravcu, guranjem/povlačenjem ili pomeranjem strane, ponovo upišite širinu, dubinu ili visinu grupe u {{ui:Podaci o entitetu}}, ili [promenite veličinu kotom](topic:dimensions).

### Rotiranje bira ravan iz mesta na koje kliknete

Nema uglomera koji se lepi za strane dok lebdite strelicama da biste izabrali ravan. Kliknite centar na strani da okrećete u ravni te strane, ili na tlu da okrećete oko vertikale. Strelice tastature orbitiraju prikaz pre prvog klika.

### Zaključavanje iz tačaka preko kojih prelazite

ModelCraft se hvata za pravce osa iz **vaše početne tačke**, i za tačke, ivice i strane ispod kursora. Ne prati pravac iz tačke preko koje ste samo prešli (isprekidano zaključavanje „iz tačke“). Da biste se poravnali sa udaljenim uglom, zaključajte osu strelicom i lebdite iznad tog ugla: zaključana tačka klizi da se poravna s njim. Ili postavite [vodilicu](topic:guides-measure).

### Paralelno koristi ivicu preko koje ste prešli pre početka

Zaključavanje paralelno i normalno (pod pravim uglom) koristi poslednju ivicu koju je kursor prešao **pre prvog klika**, a ne ivice preko kojih lebdite dok crtate. Pogledajte [Zaključavanje i hvatanje](topic:inference#parallel-and-perpendicular).

### Kopije grupe su povezane

Kopiranje grupe pomoću {{ui:Premesti}} pravi drugi položaj iste grupe, pa uređivanje jedne menja obe, kao kod komponenti. SketchUp pravi grupe nezavisne. Pogledajte [Rešavanje problema](topic:troubleshooting#editing-one-group-changed-another).

### Space ne pomera pogled

{{key:Space}} bira {{ui:Izaberi}}, kao u SketchUp-u. U nekim drugim veb aplikacijama držanje Space-a pomera pogled; ovde ne. Umesto toga, prevlačenje desnim dugmetom pomera pogled.

### Skrolovanje sa dva prsta zumira

Na touchpad-u podesite {{ui:Podešavanja}} › {{ui:ModelCraft}} › Skrolovanje na Touchpad: dva prsta orbitiraju, {{key:Shift}} i dva prsta pomeraju pogled, štipanje zumira. Pogledajte [Orbitiranje, pomeranje i zumiranje](topic:orbit-pan-zoom#on-a-trackpad).

Ako su vam ruke navikle na Blenderove tastere, a ne na SketchUp-ove, izaberite stil menija {{ui:Modeler}}: {{key:G}}, {{key:R}} i {{key:S}} deluju na izbor odjednom, {{key:E}} izvlači (guranje/povlačenje), {{key:Shift+D}} duplira, a traka menija pri vrhu (Datoteka, Uređivanje, Prikaz, Izbor, Dodaj, Objekat, Mreža) zamenjuje alatnu traku. Ako dolazite iz SketchUp-a, stil {{ui:Guraj-povuci}} daje traku menija sličnu svojoj preko istih slova alata. Pogledajte [Meniji, tasteri i miš](topic:menus-keys-and-mouse).

### Tela gurnuta jedno u drugo se ne seku

Guranje/povlačenje seče kroz stranu iza nje u istom objektu, ali dva zasebna tela gurnuta jedno u drugo se ne seku. Nema Presecanja strana ni alata za tela.

### Šta nedostaje

Slobodno crtanje, Skraćivanje, Podela i Spoljašnja ljuska, sopstveni materijali slika, proširenja i alat za raspored listova nisu u ovoj verziji. [Šta još nije ugrađeno](topic:not-built-yet) navodi šta da radite umesto toga.

## Prečice koje zadržava pregledač

ModelCraft radi u pregledaču, pa nekoliko prečica pripada pregledaču, a ne aplikaciji. {{key:Mod+N}} otvara prozor pregledača (koristite {{ui:Novo}}), a {{key:Mod+W}} zatvara karticu. Ako imate nesačuvane izmene, pregledač pita pre zatvaranja. Pogledajte [Tasteri, miševi i touchpad-ovi](common:keys#shortcuts-the-browser-keeps).
