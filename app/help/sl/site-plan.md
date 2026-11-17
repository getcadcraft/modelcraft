---
title: Modeliranje na situacijskem načrtu iz DWG ali DXF
summary: Uvozite CAD situacijo ali tloris kot črte na tleh, odgovorite na vprašanje o enotah in ju obrišite v ploskve in mase.
keywords: situacijski načrt, dwg, dxf, cad, uvoz, skica, skica s fotografije, ročna skica, skica na servieti, fotografija, papir, barve peresa, dinamični bloki, stanja vidnosti, besedilo, šrafura, zlepek, elipsa, 3D ploskev, obris, tloris, parcela, lastniška meja, enote, podlaga, kontekst
from: 3415dc96
---

ModelCraft lahko uvozi črte 2D CAD risbe, situacijskega načrta ali tlorisa ter jih položi na tla, da lahko modelirate nad njimi.

## Uvoz risbe

1. Kliknite {{ui:Uvozi}} v skupini {{ui:Datoteka}} (ali spustite datoteko na 3D pogled).
2. Izberite datoteko `.dwg` ali `.dxf`.

   Velika datoteka DWG potrebuje trenutek: statusna vrstica piše „Branje plan.dwg…“, dokler ni uvožena.

3. Če risba ne pove, kakšne so njene enote, se pojavi pogovorno okno z naslovom „Enote risbe“ in vpraša: „Kaj je ena enota risbe?“ Izberite {{ui:Palci}}, {{ui:Čevlji}}, {{ui:Milimetri}} ali {{ui:Metri}}. Večina situacijskih načrtov v ZDA je narisanih v čevljih, arhitekturni v palcih, metrični pa v milimetrih.

   Risba pride kot skupina robov na tleh, izbrana, pogled pa se približa nanjo. Statusna vrstica pove, koliko robov je prišlo, na primer „Uvoženo site.dwg: 1697 robov na tleh, v skupini. Razstavite jo, da boste lahko risali neposredno nanjo.“

## Kaj pride noter

- Črte, polilinije (vključno z njihovimi loki), krožnice in loki ter bloki z vsem v njih, samo iz **prostora modela**. Krivulje postanejo kratki ravni kosi.
- Črte, polilinije, loki, krožnice, elipse in zlepki pristanejo ravno na tleh kot robovi.
- **Šrafure** postanejo ploskve na tleh, njihovi otoki pa luknje, tako da lahko šrafirano površino takoj potisnete ali povlečete.
- **3D ploskve** in polna polnila postanejo ploskve; 3D ploskve ohranijo svoje višine.
- **Besedilo** (enovrstično besedilo, večvrstično besedilo in vrednosti atributov) je narisano kot robovi v preprosti enopotezni pisavi, pri višini, kotu in poravnavi besedila. Njegova pisava ni pisava risbe, zato so besede lahko malo daljše ali krajše. Znaki, za katere pisava nima oblike, so narisani kot majhni kvadratki in prešteti.
- **Kote** so narisane tako, kot jih kaže risba: njihove črte, puščice in besedilo, kot robovi in ploskve.
- **Dinamični bloki** pridejo tako, kot jih kaže risba: vsak postavljen blok v stanju vidnosti, v katerem je bil shranjen, in samo črte tega stanja. Statusna vrstica jih našteje s prikazanimi stanji in drugimi stanji, ki jih ima vsak, na primer „Receptacle prikazan kot Duplex ×38, GFI ×7 (stanja: Duplex, GFI)“. ModelCraft ne preklaplja stanj.
- **3D telesa, regije in telesa** (podatki ACIS risbe) pridejo kot lastne skupine: zaprto telo kot telo, regija ali odprto telo kot ploskve. Ravne ploskve pridejo cele; ukrivljene ploskve (valji, stožci, krogle, torusi, preproste zlepljene površine) kot majhni trikotniki z mehkimi robovi med njimi, tako da se vidijo samo lastni robovi telesa. Ploskev na drugi vrsti površine je izpuščena in navedena: „Še ni narisano (3D telesa): …“.
- Ni uvoženo: točke, tabele, večkratne vodilke, slike in drugi tipi objektov. Statusna vrstica jih našteje po tipu, na primer „Ni uvoženo: 12 POINT.“ Vse, kar je na postavitvi (papirnem prostoru), je prav tako izpuščeno, brez navedbe.
- Sloji niso ohranjeni: vse črte pridejo enako.

Če je risba daleč od svojega izhodišča (na primer koordinate ravninskega sistema State Plane), se še vedno uvozi, vendar lahko pristane daleč od izhodišča ModelCraft. Risbe, ki segajo več kot 10,000 km od svojega izhodišča, so zavrnjene: najprej premaknite risbo bliže 0,0 v CAD programu.

## Obrisi v ploskve

Uvoženi robovi se redko sami lepo sklenejo v ploskve. Dva načina dela:

**Ohranite načrt kot podlago (priporočeno)**

1. Pustite načrt kot njegovo skupino.
2. Narišite svojo stavbo čez njega z {{ui:Pravokotnik (R)}} in {{ui:Črta (L)}}, z lovljenjem na vogale načrta („Krajišče“) in robove („Na robu“).
3. Potisnite ali povlecite svoje ploskve navzgor. Načrt ostane nedotaknjen spodaj, celotno skupino pa lahko kasneje izbrišete z enim klikom.

Lovljenje deluje čez skupine: na vogale načrta lahko lovite, ne da bi ga odprli.

**Rišite po lastnih črtah načrta**

1. Izberite skupino načrta in kliknite {{ui:Razstavi}}. Njene črte postanejo prosti robovi.
2. Kjer naj bo zaprt obris ploskev, narišite črto čez kateri koli njegov rob z {{ui:Črta (L)}}, od vogala do vogala. Ko je obris zaprt in raven, se ploskev ponavadi zapolni. Če ne, poiščite vrzel ali prekrivanje v obrisu in narišite čez njo.
3. Potisnite ali povlecite jo.

To najbolje deluje na čistem načrtu. Pri natrpanem geodetskem posnetku je obrisovanje hitrejše.

## Težave

- „To je binarni DXF. Shranite ga kot ASCII DXF in poskusite znova.“ Ponovno shranite DXF iz CAD programa kot ASCII (besedilno).
- „…v prostoru modela ni črt, lokov ali krožnic za uvoz.“ Risba je verjetno vsa na postavitvah ali pa je sestavljena samo iz besedila in šrafur.
- „Risbe ni bilo mogoče prebrati (…). Morda je poškodovana ali shranjena v različici DWG, ki je bralnik ne podpira…“ Oklepaji povedo, zakaj, na primer „različica DWG AC1009 ni podprta“. Iz CAD programa jo shranite kot DXF ali kot DWG iz AutoCAD 2000 do 2018.
- Načrt je napačne velikosti: izbrali ste napačno enoto. Razveljavite ({{key:Mod+Z}}) in uvozite znova ali [spremenite merilo](topic:rotate-scale) skupine za pravilni faktor (12 med čevlji in palci, 25.4 med palci in milimetri).

Če želite plastnice spremeniti v teren, ki ga lahko oblikujete, glejte [Teren](topic:terrain).

## Iz fotografije skice na roki

**{{ui:Datoteka}} › Uvozi fotografijo skice…** vzame fotografijo skice na papirju (JPEG, PNG ali TIFF, neposredno s telefona je v redu) in ustvari enako vrsto robov na tleh. Povejte, kateri papir je (ali naj ga najde sam, vzet kot A4), in merilo skice, na primer 1 : 100. Rob papirja se poišče in fotografija se poravna, črnilo se obriše v črte in loke, vsaka barva peresa (črna, rdeča, modra, zelena) pa postane lastna skupina z oznako (**Skica črna**, **Skica rdeča** …), vse znotraj ene skupine z imenom po fotografiji. Je en korak razveljavitve, vse se zgodi na tem računalniku in nič se ne pošlje nikamor.

Če robova papirja ni mogoče najti, je celotna fotografija vzeta kot list, statusna vrstica pa to pove: izmerite nekaj, kar poznate, in če je skupina napačne velikosti, jo spremenite. Črte obrišite v ploskve, kot je opisano zgoraj.
