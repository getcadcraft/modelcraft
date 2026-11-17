---
title: Modeller på en situasjonsplan fra DWG eller DXF
summary: Hent inn en CAD-situasjonsplan eller plantegning som linjer på bakken, svar på enhetsspørsmålet, og spor den om til flater og masser.
keywords: situasjonsplan, dwg, dxf, cad, importer, skisse, skissefoto, håndskisse, serviettskisse, foto, papir, pennfarger, dynamiske blokker, synlighetstilstander, tekst, skravur, spline, ellipse, 3d-flate, spor, plantegning, tomt, eiendomsgrense, enheter, underlag, kontekst
from: 3415dc96
---

ModelCraft kan hente inn linjene i en 2D-CAD-tegning, en situasjonsplan eller en plantegning, og legge dem på bakken slik at du kan modellere over dem.

## Importer tegningen

1. Klikk {{ui:Importer}} i gruppen {{ui:Fil}} (eller slipp filen på 3D-visningen).
2. Velg en `.dwg`- eller `.dxf`-fil.

   En stor DWG tar et øyeblikk: statuslinjen sier «Leser plan.dwg…» til den er inne.

3. Hvis tegningen ikke sier hva enhetene er, spør en dialogboks med tittelen «Tegningsenheter»: «Hva er én tegningsenhet?» Velg {{ui:Tommer}}, {{ui:Fot}}, {{ui:Millimeter}} eller {{ui:Meter}}. De fleste amerikanske situasjonsplaner er tegnet i fot, arkitekttegninger i tommer, og metriske planer i millimeter.

   Tegningen kommer inn som en gruppe av kanter på bakken, valgt, og visningen zoomer til den. Statuslinjen sier hvor mange kanter som kom inn, for eksempel «Importerte site.dwg: 1697 kanter på bakken, i en gruppe. Eksploder den for å tegne direkte på den.»

## Hva som kommer inn

- Linjer, polylinjer (med deres buer), sirkler og buer, og blokker med alt i dem, fra **modellrommet** bare. Kurver blir korte rette stykker.
- Linjer, polylinjer, buer, sirkler, ellipser og splines legger seg flate på bakken, som kanter.
- **Skravurer** blir flater på bakken, med øyene som hull, slik at du kan trykk/trekk et skravert område med en gang.
- **3D-flater** og fylte volumer blir flater; 3D-flater beholder høydene sine.
- **Tekst** (enlinjetekst, flerlinjetekst og attributtverdier) tegnes som kanter i en enkel enkeltstrøks skrift, med tekstens egen høyde, vinkel og justering. Skriften er ikke tegningens, så ordene kan bli litt lengre eller kortere. Tegn skriften ikke har form for, tegnes som små bokser og telles.
- **Mål** tegnes slik tegningen viser dem (linjene, pilspissene og teksten, som kanter og flater).
- **Dynamiske blokker** kommer inn slik tegningen viser dem: hver plassert blokk i synlighetstilstanden den ble lagret med, og bare den tilstandens linjer. Statuslinjen lister dem med tilstandene som vises og de andre tilstandene hver har, for eksempel «Receptacle vist som Duplex ×38, GFI ×7 (tilstander: Duplex, GFI)». ModelCraft bytter ikke tilstander.
- **3D-volumer, regioner og legemer** (tegningens ACIS-data) kommer inn som egne grupper: et lukket volum som et volumlegeme, en region eller et åpent legeme som flater. Flate flater kommer inn hele; buede flater (sylindere, kjegler, kuler, tori, enkle spline-flater) kommer inn som små trekanter med myke kanter mellom seg, så bare volumets egne kanter vises. En flate på en annen type overflate utelates og listes: «Ikke tegnet ennå (3D-volumer): …».
- Ikke importert: punkter, tabeller, flerpekere, bilder og andre objekttyper. Statuslinjen lister dem etter type, for eksempel «Ikke importert: 12 POINT.» Alt på et layout (papirrom) utelates også, uten å bli listet.
- Lag (layers) beholdes ikke: alle linjer kommer inn likt.

Hvis tegningen ligger langt fra sitt origo (for eksempel koordinater i statsplan), importeres den likevel, men den kan havne langt fra ModelCraft sitt origo. Tegninger som når mer enn 10 000 km fra sitt origo, avvises: flytt tegningen nærmere 0,0 i CAD-programmet først.

## Spor den om til flater

De importerte linjene lukker sjelden pent til flater på egen hånd. To måter å jobbe på:

**Behold planen som underlag (anbefalt)**

1. La planen være sin egen gruppe.
2. Tegn bygningen din oppå med {{ui:Rektangel}} og {{ui:Linje}}, og fang til planens hjørner («Endepunkt») og kanter («På kant»).
3. Trykk/trekk flatene dine opp. Planen forblir urørt under, og du kan slette hele gruppen senere med ett klikk.

Fang fungerer på tvers av grupper: du kan fange til planens hjørner uten å åpne den.

**Tegn på planens egne linjer**

1. Velg plangruppen og klikk {{ui:Eksploder}}. Linjene blir løse kanter.
2. Der en lukket kontur skal være en flate, tegn en linje over en av kantene med {{ui:Linje}}, fra hjørne til hjørne. Når konturen er lukket og flat, fylles flaten vanligvis inn. Hvis ikke, let etter et gap eller en overlapp i konturen og tegn over den.
3. Trykk/trekk den.

Dette fungerer best på en ren plan. På en travel måling er det raskere å spore oppå.

## Problemer

- «Dette er en binær DXF. Lagre den som ASCII-DXF og prøv igjen.» Lagre DXF-filen på nytt fra CAD-programmet som ASCII (tekst).
- «…har ingen linjer, buer eller sirkler i modellrommet å hente inn.» Tegningen er sannsynligvis helt på layouter, eller bare tekst og skravurer.
- «Denne tegningen kunne ikke leses (…). Den kan være skadet, eller lagret i en DWG-versjon leseren ikke håndterer…» Parentesen sier hvorfor, for eksempel «DWG-versjon AC1009 støttes ikke». Lagre den som DXF, eller som DWG fra AutoCAD 2000 til 2018, fra CAD-programmet.
- Planen har feil størrelse: du valgte feil enhet. Angre ({{key:Mod+Z}}) og importer på nytt, eller [skaler](topic:rotate-scale) gruppen med riktig faktor (12 mellom fot og tommer, 25.4 mellom tommer og millimeter).

For å gjøre høydekurver om til bakke du kan forme, se [Terreng](topic:terrain).

## Fra et foto av en håndskisse

**Fil › Importer et skissefoto…** tar et bilde av en skisse på papir (JPEG, PNG eller TIFF, rett fra en telefon går fint) og lager samme type kanter på bakken. Oppgi hvilket papir det er (eller la det finne arket, antatt A4) og skissens målestokk, for eksempel 1:100. Papirkanten finnes og bildet rettes opp, blekket spores til linjer og buer, og hver pennfarge (svart, rød, blå, grønn) blir en egen gruppe med en etikett (**Skisse svart**, **Skisse rød**, …), alt inne i én gruppe oppkalt etter bildet. Det er ett angrertrinn, og alt skjer på denne datamaskinen: ingenting sendes noe sted.

Når ingen papirkant kan finnes, tas hele bildet som arket, og statuslinjen sier det: mål noe du vet størrelsen på, og skaler gruppen hvis den er feil. Spor linjene til flater som over.
