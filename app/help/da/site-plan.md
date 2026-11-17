---
title: Modellér på en situationsplan fra en DWG eller DXF
summary: Hent en CAD-situationsplan eller etageplan ind som linjer på jorden, besvar spørgsmålet om enheder, og tegn den af som flader og masser.
keywords: situationsplan, dwg, dxf, cad, importér, skitse, skitsefoto, håndskitse, servietskitse, foto, papir, pennefarver, dynamiske blokke, synlighedstilstande, tekst, skravering, spline, ellipse, 3d-flade, spor, etageplan, grund, matrikelskel, enheder, underlag, kontekst
from: 3415dc96
---

ModelCraft kan hente linjerne i en 2D CAD-tegning, en situationsplan eller en etageplan og lægge dem på jorden, så du kan modellere ovenpå dem.

## Importér tegningen

1. Klik på {{ui:Importér}} i gruppen {{ui:Fil}} (eller slip filen på 3D-visningen).
2. Vælg en `.dwg`- eller `.dxf`-fil.

   En stor DWG tager et øjeblik: statuslinjen siger »Læser plan.dwg…«, indtil den er hentet ind.

3. Hvis tegningen ikke siger, hvad dens enheder er, spørger en dialog med titlen »Tegningsenheder«: »Hvad er én tegningsenhed?« Vælg {{ui:Tommer}}, {{ui:Fod}}, {{ui:Millimeter}} eller {{ui:Meter}}. De fleste amerikanske situationsplaner er tegnet i fod, arkitektoniske planer i tommer, og metriske planer i millimeter.

   Tegningen kommer ind som en gruppe af kanter på jorden, valgt, og visningen zoomer til den. Statuslinjen siger, hvor mange kanter der kom ind, for eksempel »Importeret site.dwg: 1697 kanter på jorden, i en gruppe. Eksplodér den for at tegne direkte på den.«

## Hvad der kommer ind

- Linjer, polylinjer (inklusive deres buer), cirkler og buer samt blokke med alt i dem, fra **modelrummet** kun. Kurver bliver til korte rette stykker.
- Linjer, polylinjer, buer, cirkler, ellipser og splines lander fladt på jorden, som kanter.
- **Skravering** bliver til flader på jorden, med deres øer som huller, så du med det samme kan skub/træk et skraveret område.
- **3D-flader** og massive udfyldninger bliver til flader; 3D-flader beholder deres højder.
- **Tekst** (enkeltlinjet tekst, flerlinjet tekst og attributværdier) tegnes som kanter i en enkel enkeltstregs skrift, i tekstens egen højde, vinkel og justering. Dens skrifttype er ikke tegningens, så ordene kan blive lidt længere eller kortere. Tegn, skriften ikke har en form for, tegnes som små bokse og tælles.
- **Målsætninger** tegnes, som tegningen viser dem (deres linjer, pilespidser og tekst, som kanter og flader).
- **Dynamiske blokke** kommer ind, som tegningen viser dem: hver placeret blok i den synlighedstilstand, den blev gemt med, og kun den tilstands linjer. Statuslinjen lister dem med de viste tilstande og de andre tilstande, hver har, for eksempel »Receptacle vist som Duplex ×38, GFI ×7 (tilstande: Duplex, GFI)«. ModelCraft skifter ikke tilstande.
- **3D-legemer, regioner og kroppe** (tegningens ACIS-data) kommer ind som deres egne grupper: et lukket legeme som et massivt legeme, en region eller åben krop som flader. Flade flader kommer ind hele; buede flader (cylindre, kegler, kugler, tori, enkle spline-flader) som små trekanter med bløde kanter imellem, så kun legemets egne kanter ses. En flade på en anden type overflade udelades og listes: »Ikke tegnet endnu (3D-legemer): …«.
- Ikke importeret: punkter, tabeller, flere henvisningslinjer, billeder og andre objekttyper. Statuslinjen lister dem efter type, for eksempel »Ikke importeret: 12 POINT.« Alt i et layout (papirrum) udelades også, uden at blive listet.
- Lag bevares ikke: alle linjer kommer ind ens.

Hvis tegningen ligger langt fra sit origo (for eksempel koordinater i et statsligt plan), importeres den stadig, men den kan lande langt fra ModelCraft's origo. Tegninger, der når mere end 10,000 km fra deres origo, afvises: flyt tegningen nærmere 0,0 i CAD-programmet først.

## Tegn den om til flader

De importerede linjer lukker sjældent pænt til flader af sig selv. To måder at arbejde på:

**Behold planen som underlag (anbefalet)**

1. Lad planen være sin egen gruppe.
2. Tegn din bygning ovenpå med {{ui:Rektangel}} og {{ui:Linje}}, og fang til planens hjørner (»Endepunkt«) og kanter (»På kant«).
3. Skub/træk dine flader op. Planen forbliver urørt nedenunder, og du kan slette hele gruppen senere med ét klik.

Fangning virker på tværs af grupper: du kan fange til planens hjørner uden at åbne den.

**Tegn på planens egne linjer**

1. Vælg plangruppen, og klik på {{ui:Eksplodér}}. Dens linjer bliver løse kanter.
2. Hvor en lukket kontur skal være en flade, tegn en linje over en af dens kanter med {{ui:Linje}}, fra hjørne til hjørne. Når konturen er lukket og flad, udfyldes fladen normalt. Hvis ikke, så led efter et hul eller en overlapning i konturen, og tegn over den.
3. Skub/træk den.

Dette virker bedst på en ren plan. På en travl opmåling er det hurtigere at tegne af ovenpå.

## Problemer

- »Denne DXF er binær. Gem den som ASCII-DXF, og prøv igen.« Gem DXF-filen igen fra CAD-programmet som ASCII (tekst).
- »…har ingen linjer, buer eller cirkler i modelrummet at importere.« Tegningen ligger sandsynligvis helt på layouts, eller er kun tekst og skraveringer.
- »Tegningen kunne ikke læses (…). Den er muligvis beskadiget, eller gemt i en DWG-version, læseren ikke håndterer…« De parenteser siger hvorfor, for eksempel »DWG-version AC1009 understøttes ikke«. Gem den som DXF, eller som DWG fra AutoCAD 2000 til 2018, fra CAD-programmet.
- Planen har den forkerte størrelse: du valgte den forkerte enhed. Fortryd ({{key:Mod+Z}}) og importér igen, eller [skalér](topic:rotate-scale) gruppen med den rigtige faktor (12 mellem fod og tommer, 25.4 mellem tommer og millimeter).

For at gøre højdekurver til jord, du kan modellere, se [Terræn](topic:terrain).

## Fra et foto af en håndskitse

**Fil › Importér et skitsefoto…** tager et foto af en skitse på papir (JPEG, PNG eller TIFF, direkte fra en telefon er fint) og laver samme slags kanter på jorden. Angiv hvilket papir det er (eller lad det finde arket, som tages som A4), og skitsens målestok, for eksempel 1 : 100. Papirets kant findes, og fotoet rettes op, blækket tegnes af som linjer og buer, og hver pennefarve (sort, rød, blå, grøn) bliver til en gruppe for sig selv med et tag (**Skitse sort**, **Skitse rød**, …), alt sammen i én gruppe navngivet efter fotoet. Det er ét fortrydelsestrin, og alt sker på denne computer: intet sendes nogen steder hen.

Hvis ingen papirkant kan findes, tages hele fotoet som arket, og statuslinjen siger det: mål noget, du kender, og skalér gruppen, hvis den er forkert. Tegn linjerne af til flader som ovenfor.
