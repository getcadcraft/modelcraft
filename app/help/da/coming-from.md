---
title: Fra andre modelleringsprogrammer
summary: Hvordan push/pull-modelleringsvaner svarer til ModelCraft, nøgle for nøgle, og de forskelle, der overrasker folk.
keywords: skift, migrér, velkendt, forskelle, push pull-modellerer, skp, genveje, vaner, sammenlign, målebokse, oversigt, objektinfo
from: 74ffd4ac
---

Hvis du har modelleret i SketchUp, vil ModelCraft føles velkendt: den samme idé med flader og push/pull, de samme værktøjsbogstaver, en værdiboks, du skriver i uden at klikke, ledning med de røde, grønne og blå akser, grupper, komponenter, en Oversigt, Objektinfo og scener. Denne side lister, hvad der flytter sig direkte over, og endnu vigtigere, hvad der ikke gør.

## Vaner der flytter med

| Det du er vant til | I ModelCraft |
|---|---|
| Tryk Space for Vælg, L Linje, R Rektangel, C Cirkel | Det samme: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Tryk P Skub/træk, M Flyt, Q Roter, S Skalér, E Viskelæder, T Målebånd | Det samme: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Tryk O Kredsløb, H Panorér, Z Zoom, Shift+Z Zoom til alt | Det samme: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Tryk G for at lave en komponent | Det samme: {{key:G}}. {{key:Shift+G}} laver en gruppe |
| Skriv i målefeltet uden at klikke i det | Det samme, i værdiboksen nederst. Tryk {{key:Enter}} |
| Skriv `4m,3m` for et rektangel, `12s` for sider | Det samme |
| Skriv `3x` eller `/3` efter en Flyt-kopi | Det samme; `*3` virker også |
| Skriv `[x,y,z]` eller `<dx,dy,dz>` for et punkt eller en forskydning | Det samme |
| Skriv et rent tal i en model i arkitektoniske tommer og få tommer | Det samme |
| Midterknap-træk for at kredse, Shift+midterknap-træk for at panorere, hjul for at zoome ved markøren | Det samme |
| Dobbeltklik med Skub/træk for at gentage afstanden | Det samme |
| Piletaster for at låse rød, grøn, blå og parallel | Det samme: {{key:Right}} rød, {{key:Left}} grøn, {{key:Up}} blå, {{key:Down}} parallel |
| Hold Shift for at låse et fang | Det samme |
| Ctrl (Option på en Mac) for at kopiere under flytning | {{key:Ctrl}}, {{key:Mod}} eller {{key:Alt}}, på enhver computer |
| Shift for at skifte, Ctrl for at tilføje, Shift+Ctrl for at fjerne fra valget | Samme taster; på en Mac brug {{key:Mod}} hvor der står Ctrl |
| Venstre-mod-højre-vindue, højre-mod-venstre-kryds | Det samme |
| Et Mål-værktøj til at mærke længder | {{key:D}}, og mere: skriv en ny længde i en målsætning, og modellen ændrer størrelse til den. Se [Målsæt og ændr størrelse](topic:dimensions) |
| Dobbeltklik på en flade for flade plus kanter; tredobbeltklik for alt forbundet | Det samme |
| Dobbeltklik på en gruppe for at redigere den; Esc for at lukke | Det samme |
| Tegn en linje hen over en flade for at dele den; slet en kant mellem flader i samme plan for at lappe dem | Det samme |
| Skub et vinduesrektangel gennem en væg for at skære i den | Det samme |
| Bagflader i blågrå; Vend flader om | Samme farve; {{ui:Vend fladen om}} i {{ui:Objektinfo}} |
| Scener som faner over visningen, Page Up og Page Down | Det samme, med {{ui:Afspil}} i {{ui:Scener}}-panelet |
| Skygger ud fra dato, tid, breddegrad og længdegrad, med nord på grøn | Det samme, i {{ui:Stil}}-panelet |

## Forskelle der overrasker folk

### Gem er en download

Der er ingen Gem, der overskriver filen, du åbnede, ingen Gem som-dialog med et navn, ingen automatisk gem og ingen backupfil. {{ui:Gem}} ({{key:Mod+S}}) downloader en ny `.modelcraft`-fil hver gang, normalt til din downloadmappe. Gem ofte, og omdøb eller flyt filerne selv. Se [Åbn, gem, importér og eksportér](topic:files).

### Den importerer .skp-filer, men gemmer dem ikke

{{ui:Importér}} læser SketchUp-filer med ModelCraft's egen læser, i siden: grupper, komponenter, farver, teksturer på flader, tags og bløde kanter følger med. Se [Filformater i detaljer](topic:formats#skp-files). ModelCraft kan ikke gemme `.skp`: for at gå tilbage skal du eksportere Collada fra ModelCraft og importere den i SketchUp.

### Ingen højreklikmenu

Højretræk panorerer; et højreklik gør intet. Kommandoer, du ville finde i genvejsmenuen, er i {{ui:Objektinfo}} ({{ui:Vend fladen om}}, {{ui:Rediger}}, {{ui:Eksplodér}}, {{ui:Gør unik}}, {{ui:Lav komponent}}) og i værktøjslinjens gruppe {{ui:Organisér}}.

### Enheder findes i statuslinjen

Der er ingen Model Info eller skabelonvalg. Enhedsvælgeren er nederst til højre. En ny model starter i fod og tommer i USA og i millimeter andre steder, ud fra din browsers sprogindstilling. Decimaler skrives altid med punktum: `2.5m`, aldrig `2,5m`, for kommaet adskiller altid værdier.

### Maling har egne materialer

{{ui:Maling}} ({{key:B}}) maler ensfarvede farver og de materialer i afsnittet {{ui:Materialer}}: mursten, facadebeklædning, tagbelægning, træ, sten og mere, tegnet af ModelCraft. Du kan ikke indlæse dit eget billede som materiale endnu; teksturer, der følger med importerede filer, bevares. Se [Mal med farver og materialer](topic:paint).

### Skalering er ensartet, uden greb

Skalér viser ingen boks med greb. Klik på det punkt, der bliver stående, et referencepunkt, og derefter den nye størrelse eller en skrevet faktor. Den skalerer altid jævnt i alle retninger. For at strække i én retning skal du skub/træk eller flytte en flade, skrive en gruppes bredde, dybde eller højde igen i {{ui:Objektinfo}}, eller [ændre størrelsen med en målsætning](topic:dimensions).

### Roter vælger sit plan ud fra, hvor du klikker

Der er ingen vinkelmåler, der sidder fast på flader, mens du svæver med piletasterne for at vælge planet. Klik på centrum af en flade for at dreje i fladens plan, eller på jorden for at dreje om den lodrette. Piletasterne kredser visningen før første klik.

### Ledning fra punkter du passerer over

ModelCraft fanger akseretninger fra **dit startpunkt**, og fra punkter, kanter og flader under markøren. Den følger ikke en retning fra et punkt, du bare har svævet over (den prikkede "fra punkt"-ledning). For at flugte med et fjernt hjørne skal du låse aksen med en piletast og svæve over hjørnet: det låste punkt glider, så det flugter med det. Eller placér en [hjælpelinje](topic:guides-measure).

### Parallel bruger kanten, du passerede før start

Parallel- og vinkelretledningen bruger den sidste kant, markøren krydsede **før første klik**, ikke kanter du svæver over, mens du tegner. Se [Ledning og fangning](topic:inference#parallel-and-perpendicular).

### Kopier af en gruppe er koblet

Kopiering af en gruppe med {{ui:Flyt}} laver en anden placering af den samme gruppe, så redigering af den ene ændrer begge, ligesom med komponenter. SketchUp gør grupper uafhængige. Se [Fejlfinding](topic:troubleshooting#editing-one-group-changed-another).

### Space panorerer ikke

{{key:Space}} vælger {{ui:Vælg}}, som i SketchUp. I nogle andre webapps panorerer man, når Space holdes nede; her gør det ikke. Højretræk panorerer i stedet.

### Scroll med to fingre zoomer

På et trackpad skal du sætte {{ui:Indstillinger}} › {{ui:ModelCraft}} › Rulning til Trackpad: to fingre kredser, {{key:Shift}} og to fingre panorerer, et knib zoomer. Se [Kredsløb, panorér og zoom](topic:orbit-pan-zoom#on-a-trackpad).

Hvis dine hænder kender Blenders taster i stedet for SketchUps, så vælg menustilen {{ui:Modellør}}: {{key:G}}, {{key:R}} og {{key:S}} virker på valget på én gang, {{key:E}} ekstruderer (skub/træk), {{key:Shift+D}} duplikerer, og en menulinje øverst (Fil, Rediger, Visning, Vælg, Tilføj, Objekt, Net) erstatter værktøjslinjen. Kommer du fra SketchUp, giver menustilen {{ui:Skub/træk}} en menulinje, der ligner dens egen, over de samme værktøjsbogstaver. Se [Menuer, taster og mus](topic:menus-keys-and-mouse).

### Legemer skubbet ind i hinanden skærer ikke

Skub/træk skærer gennem fladen bag den i samme objekt, men to adskilte legemer, der skubbes ind i hinanden, skærer ikke hinanden. Der er ingen Skær flader og ingen Massive værktøjer.

### Hvad der mangler

Frihånd, Beskær, Del og Ydre skal, egne billedmaterialer, udvidelser og et layoutværktøj til ark er ikke i denne version. [Ikke bygget endnu](topic:not-built-yet) lister, hvad du skal gøre i stedet.

## Genveje browseren beholder

ModelCraft kører i en browser, så nogle få genveje hører til browseren, ikke appen. {{key:Mod+N}} åbner et browservindue (brug {{ui:Ny}}), og {{key:Mod+W}} lukker fanen. Har du ikke-gemte ændringer, spørger browseren, før den lukker. Se [Taster, mus og trackpads](common:keys#shortcuts-the-browser-keeps).
