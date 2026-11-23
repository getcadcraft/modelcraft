---
title: Slicing til en resin-printer
summary: Slice printpladen til en resin-printer, gør delen hul og understøt den, gennemgå lagene, gem printerens fil og find din eksponering med eksponeringstesten.
keywords: resin, foreslå hældning, sugekop, afløsningskraft, afstivning, resin-print, sla, msla, dlp, slicer, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, hul, udluftningshul, raft, understøtninger, eksponeringstest, eksponeringstrappe, kalibrering, lag, add-on
from: 8cc12858
---

Resin-add-on'erne slicer det, der står på printpladen, til lagbilleder til din printers skærm, og gemmer den fil, din printer læser. De er gratis, uden noget låst, og de er slået fra, indtil du tænder dem.

:::note
Ingen fil er endnu blevet indlæst i en rigtig printer. Filerne er kun læst tilbage af CadCraft's egne læsere, og understøtningerne er nye. Tjek lagene, og kør din første print i hånden.
:::

## Hvad du skal gøre

Slice en del til resin, tjek lagene, gem filen og kopiér den til din printer.

## Trin

1. Åbn {{ui:Indstillinger}} › {{ui:Add-ons}} og slå resin-slicer-add-on'en til, samt add-on'en til din printers filformat (Elegoo GOO, SL1, Chitubox eller Anycubic). Du kan også trykke på {{ui:Tilføj resin-print}} på panelet for printtrinnet.
2. Læg din del på printpladen som i [Læg ting på printpladen](topic:print-stage), og vælg så {{ui:Resin}} ved siden af **Udskriver med**.
3. Under **Resin-udskrivningsindstillinger** vælger du din **Printer** og din **Resin**. Panelet viser skærmens størrelse i pixels. Det er producentens offentliggjorte størrelser, så tjek din egen; du kan redigere dem under {{ui:Brugerdefineret}}.
4. Angiv **Lagtykkelse (mm)**, **Eksponering (s)** og **Bundeksponering (s)**. Tallene for hver resin er kun et udgangspunkt.
5. Sæt flueben i **Gør den hul, med et udluftningshul**, hvis du vil have en hul del, og angiv **Væg (mm)** og **Hulbredde (mm)**.
6. Sæt flueben i **Understøtninger og en raft**, og vælg **Understøtningstæthed**: Let, Mellem eller Kraftig.
7. Vælg **Filformat**. Hvis panelet siger, at intet er tilføjet endnu, så tryk på knappen, der hedder Tilføj, og formatets navn.
8. Tryk på {{ui:Forhåndsvis lag}} og flyt skyderen **Lag**. Svævende dele er markeret med en ring. Linjen under den angiver lagene, tiden og resinen i mL, gram og pris.
9. Tryk på {{ui:Gem printfilen}}, tjek opsummeringen og tryk på {{ui:Gem}}. Kopiér filen til din printer.

## Hældning, sugekopper, afstivninger og afløsningstallet

Disse fire er skøn ud fra delens form. Ingen er afprøvet på en rigtig printer, så behandl hver som et hint, og kig på lagene.

1. Tryk på {{ui:Foreslå en hældning}} under **Hældning (grader)**. CadCraft prøver hældninger fra 0 til 60 grader og vælger den med det mindste største lag, den mindste overhængende flade og ingen sugekop. Den sætter **Hældning (grader)** og siger, hvad den fandt. Vægtningen i scoringen er vores egen, ikke en printerproducents.
2. Efter {{ui:Forhåndsvis lag}} nævner en advarsel hulrum, der kun åbner mod filmen. Et sådant hulrum kan holde på sug, når et lag løsner sig. Vip delen eller tilføj et hul. Lommer smallere end cellestørrelsen i advarslen ses ikke.
3. Med **Understøtninger og en raft** slået til, sæt flueben i **Afstiv høje understøtninger** for at tilføje tværafstivninger mellem høje, tynde søjler.
4. Linjen under forhåndsvisningen angiver det største lag i cm2. Den viser kun en kraft, hvis du angiver **Afløsningsspænding du har målt** under **Bundlag, løft og hastigheder**. Uden dit eget målte tal viser den kun arealet.

## Find din eksponering

1. Slå eksponeringstest-add-on'en til i {{ui:Indstillinger}} › {{ui:Add-ons}}.
2. Tryk på {{ui:Læg testdelen på printpladen}}.
3. Tryk på {{ui:Gem eksponeringstrappen}}. Du får én fil for hver eksponering, i en zip-fil.
4. Print hver fil med den samme resin, og behold den eksponering med de skarpeste tynde søjler og åbne huller.

## Noter

- Slicing kører i baggrunden, så siden forbliver brugbar på en stor plade.
- Dele, der ikke er lukkede legemer, udelades, og panelet siger det.
- Hvis din printer afviser en fil, har formatpanelet valgmuligheder for det, som formatet lader stå åbent. Ændr én, gem igen, og fortæl os, hvilken der virkede.
- Anycubic-versionerne 517 og 518 skrives ikke.
