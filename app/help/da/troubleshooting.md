---
title: Fejlfinding
summary: Symptomer, årsager og løsninger, fra en tom 3D-visning til importer i forkert størrelse, med de meddelelser ModelCraft viser.
keywords: problem, besvær, fejl, virker ikke, tom, webgl, grafik, langsom, meddelelse, import mislykkedes, forkert størrelse, kan ikke vælge, touch, taster virker ikke, tabt arbejde
from: 6e7394be
---

## Den 3D-visning er tom

**Symptom:** midten af skærmen forbliver tom, eller viser kun baggrundsfarven, og klik på værktøjer gør ingenting.

**Årsag:** ModelCraft tegner med WebGL 2, browserens 3D-grafik. Den mangler, når browseren er gammel, når hardwareacceleration er slået fra, eller når grafikdriveren er blokeret.

**Løsning:**

:::chromium
1. Åbn browserens indstillinger, og søg efter "grafikacceleration".
2. Slå "Brug grafikacceleration, når det er muligt" til, og genstart browseren.
3. Hvis det allerede er slået til, skriv `chrome://gpu` i adresselinjen (`edge://gpu` i Edge), og led efter "WebGL2" på listen. Står der deaktiveret, så opdatér din grafikdriver.
:::

:::firefox
1. Åbn **Indstillinger**, derefter **Generelt**, og rul ned til "Ydeevne".
2. Fjern markeringen i "Brug anbefalede ydelsesindstillinger", og sæt kryds i "Brug hardwareacceleration, når det er muligt". Genstart Firefox.
3. Hvis det stadig fejler, skriv `about:support` i adresselinjen, og se efter WebGL 2 i afsnittet "Grafik".
:::

:::safari
Opdatér macOS og Safari. Nyere versioner af Safari har altid WebGL 2 slået til. Hvis du har ændret eksperimentelle funktioner under **Safari**, derefter **Indstillinger**, derefter **Avanceret** (eller **Funktionsflag**), så nulstil dem.
:::

På en arbejdscomputer, fjernskrivebord eller virtuel maskine kan 3D-grafik være blokeret af politik. Prøv en anden computer. Se [Browsere og computere](common:browsers).

## Tasterne gør ingenting, eller skriver i et felt

**Årsag:** tastaturfokus er i et panelfelt: listen {{ui:Flader}} i {{ui:Stil}}, en solindstilling, feltet {{ui:Navn}} i {{ui:Objektinfo}}, eller enhedsvælgeren. Bogstaver og piletaster går så til det felt.

**Løsning:** klik i 3D-visningen, og tryk derefter på tasten igen. Tasterne gør også ingenting, mens en dialogboks er åben.

## At skrive et tal gør ingenting

- **Ingen retning endnu.** En skrevet længde går den vej, markøren peger fra det første klik. Flyt markøren lidt i den retning, du vil have, og skriv derefter.
- **Forkert tidspunkt.** De fleste værktøjer tager en skrevet værdi først efter det første klik: klik på første hjørne, flade eller punkt, der skal flyttes fra, først. {{ui:Cirkel}} og {{ui:Polygon}} tager et antal sider før det første klik.
- **»Skriv en længde som 3m, 10'6" eller 4m,3m.«** ModelCraft kunne ikke læse den. Tjek for et decimalkomma (`2,5`): brug et punktum.

## En form starter det forkerte sted på en touchskærm

**Symptom:** med en finger er det første rektangel fint, men det næste rektangel, cirkel eller linje starter, hvor din forrige berøring endte, i stedet for hvor du rørte.

**Årsag:** en fejl i denne build: på en touchskærm husker værktøjet det sidste fangepunkt fra det forrige gestus.

**Løsning:** tryk på værktøjets knap i værktøjslinjen igen før hver ny form. Det starter værktøjet forfra, og det første punkt lander, hvor du rører.

## Redigering af én gruppe ændrede en anden

**Symptom:** du kopierede en gruppe med {{ui:Flyt}} og {{key:Ctrl}}, åbnede én kopi og redigerede den, og den anden kopi ændrede sig også. {{ui:Oversigt}} viser begge med samme navn.

**Årsag:** i denne build laver kopiering af en gruppe en ekstra placering af den samme gruppe, ligesom for en komponent. Knappen {{ui:Gør unik}} tilbydes kun for komponenter.

**Løsning:** vælg den kopi, du vil ændre, klik på {{ui:Lav komponent}} i {{ui:Objektinfo}}, og derefter på {{ui:Gør unik}}. Den kopi har nu sit eget indhold. Eller {{ui:Eksplodér}} den.

## Skub/træk gør ikke det, du forventede

- **»Skub/træk virker på en flade. Klik på en flade.«** Du klikkede på en kant eller på tomt rum. Hold markøren, indtil fladen fremhæves, og klik derefter.
- **Fladen er inde i en gruppe.** Dobbeltklik på gruppen for at åbne den først.
- **Et vindue skar ikke igennem væggen.** Rektanglet skal tegnes på væggens flade, ikke foran den, og væggen skal have en bagflade. Se [Skær en åbning i en væg](topic:openings#if-it-did-not-cut-through).
- **To bokse overlapper uden at smelte sammen.** Massive legemer, der er skubbet ind i hinanden, skærer ikke og samler ikke hinanden i denne build.

## En linje eller form lavede ikke en flade

En flade fyldes kun ud, når kanterne lukker en flad sløjfe. Kontrollér, at det sidste punkt fangede det første («Endepunkt»), og at alle kanterne ligger i ét plan. En sløjfe, der er lidt ude af plan, forbliver linjer. Tegn en af dens kanter igen, og fang hjørnerne.

## Jeg kan ikke vælge eller slette en flade

- Med {{ui:Vælg}} tager et klik nær en kant kanten. Klik nærmere fladens midte.
- {{ui:Viskelæder}} vælger ikke flader. Vælg fladen, og tryk på {{key:Delete}}, eller slet en af dens kanter.
- Hvis den hører til en gruppe eller komponent, vælger klikket hele det. Dobbeltklik for at åbne det.

## »Vælg noget at flytte først, eller klik på det.«

{{ui:Flyt}}, {{ui:Roter}} og {{ui:Skalér}} behøver noget at arbejde på: vælg det først, eller start værktøjet ved at klikke på selve tingen (ikke på tomt rum eller en hjælpelinje).

## »Vælg først noget geometri (træk et vindue, eller tredobbeltklik for at vælge alt forbundet).«

{{key:G}} og {{key:Shift+G}} kræver et valg. Hjælpelinjer kan ikke grupperes.

## Piletasterne kredser i stedet for at låse

Låsning virker kun efter første klik i et tegne- eller redigeringsværktøj. {{ui:Skub/træk}} har ingen låse, og i {{ui:Roter}} ændrer de ikke drejningen. Ellers kredser piletasterne visningen.

## Esc i fuld skærm

I fuld skærm kan browseren bruge det første {{key:Esc}} til at forlade fuld skærm. Tryk på {{key:Esc}} igen for at annullere værktøjet.

## Ingen midterknap

Tryk på {{key:O}} for {{ui:Orbit}} og træk, eller brug piletasterne. Se [Orbit, panorér og zoom](topic:orbit-pan-zoom#without-a-middle-button).

## Import

| Meddelelse | Hvad du skal gøre |
|---|---|
| »ModelCraft importerer SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG og DXF. … er ingen af disse.« | Eksportér modellen fra det andet program i et af disse formater |
| »Denne fil er over 300 MB.« | Forenkl eller del modellen i det andet program |
| »…for stor til at modellere her (over 2 million hjørnepunkter).« | Det samme |
| »Denne .gltf-fil kræver »…«…« | Træk `.gltf` sammen med dens `.bin`- og teksturfiler, eller åbn `.glb`-versionen |
| »Denne glTF-fil kræver …-udvidelsen, som ModelCraft ikke læser endnu.« | Eksportér igen fra det andet program uden den udvidelse (KTX2-teksturer, for eksempel) |
| En OBJ kommer ind uden sine farver eller teksturer | Træk `.obj` sammen med dens `.mtl` og billeder |
| »Denne Alembic-fil bruger det gamle HDF5-layout…« | Gem den igen fra det andet program som en Ogawa Alembic-fil |
| En FBX kommer ind uden sine teksturer | Træk `.fbx` sammen med dens teksturbilleder, eller indlejr medierne ved eksport |
| »Denne FBX-fil er version …, som ModelCraft ikke læser« | Eksportér igen som FBX 2011 eller nyere |
| En STL eller PLY kommer ind 1,000 gange for stor eller for lille | STL læses som millimeter og PLY som meter: skalér den (se [Roter og skalér](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| »Dette er ikke en Collada (.dae)-fil…« eller »…ikke velformet XML…« | Filen er beskadiget eller ikke Collada. Eksportér den igen |
| »Denne Collada-fil har ingen geometri, som ModelCraft kan importere.« | Den indeholder kun kameraer, lamper eller henvisninger til andre filer |
| »Dette er en binær DXF. Gem den som ASCII-DXF, og prøv igen.« | Gem den igen fra CAD-programmet som ASCII |
| »Dette er ikke en DWG-tegning…« | Filen er ikke en DWG, eller den er beskadiget |
| »Denne tegning kunne ikke læses (…). Den kan være beskadiget, eller gemt i en DWG-version, som læseren ikke håndterer…« | Parenteserne giver årsagen. Gem den som DXF, eller som DWG fra AutoCAD 2000 til 2018, fra CAD-programmet |
| »Denne tegning når mere end 10,000 km fra sit origo…« | Flyt tegningen tæt på 0,0 i CAD-programmet |

### Importen har forkert størrelse eller ligger på siden

- **OBJ:** OBJ har ingen enhed; ModelCraft læser meter. En model i millimeter kommer ind 1000 gange for stor: [skalér](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) den med `0.001`; en model i tommer med `0.0254`.
- **OBJ på siden:** ModelCraft forventer OBJ-filer med Y opad. En fil skrevet med Z opad kommer ind liggende. Drej den 90° om den røde akse: klik på {{ui:Roter}}-centrum på en flade, der vender langs rød, eller åbn filen i sit program og eksportér med Y opad.
- **DWG eller DXF:** du valgte den forkerte enhed i dialogboksen »Tegningsenheder«. Fortryd, og importér igen.

## Åbning af filer

| Meddelelse | Hvad du skal gøre |
|---|---|
| »Denne fil er ikke en ModelCraft-model (den er ikke JSON).« | Brug {{ui:Importér}} til andre formater |
| »Dette er ikke en ModelCraft-fil, vi kan åbne: …« | Filen er beskadiget eller ændret i hånden |
| »Denne model blev gemt af en nyere ModelCraft…« | Åbn den i den nyere version |
| »Denne fil er over 200 MB.« | Modellen er for stor til at åbne her |

## Jeg mistede arbejde

ModelCraft gemmer ikke selv til en fil. Når du lukker eller genindlæser en fane med ikke-gemte ændringer, spørger browseren først («Forlad websted?» eller «Genindlæs websted?»); vælg at blive og gem. Ny og {{ui:Åbn}} spørger også («Ikke-gemte ændringer»). Hvis browseren eller computeren gik ned, så åbn ModelCraft igen i samme browser: den tilbyder dit ikke-gemte arbejde tilbage («Gendan dit arbejde?»; se [Gendan dit arbejde](common:recover)). Gem ofte med {{key:Mod+S}}.

## Min downloadmappe fyldes med kopier

Hver gemning er en ny download, navngivet `Untitled (1).modelcraft`, `Untitled (2).modelcraft` og så videre. Slet de gamle, eller indstil browseren til at spørge, hvor hver fil skal gemmes, og overskriv den gamle fil selv. Se [Åbn, gem, importér og eksportér](topic:files#save-a-model).

## Det bliver langsomt

- Hvert trin i fortryd gemmer en kopi af modellen (et [mesh](topic:meshes) gemmer kun det, der ændrede sig), så ved en meget stor import af skub/træk-geometri tager hver redigering længere tid. Eksplodér eller slet det, du ikke har brug for, gem, og åbn igen: genåbning rydder også fortryd-historikken.
- Solskygger koster mest. Fjern markeringen i {{ui:Solskygger}}, mens du modellerer.

## Ingen skygger

{{ui:Solskygger}} er slået fra, solen er under horisonten på det tidspunkt, du valgte (»Solen er under horisonten på dette tidspunkt.«), eller stilen er {{ui:Trådmodel}}, som ikke tegner skygger.

## »Denne browser tillod ikke fuld skærm.«

Nogle browsere og nogle indlejrede visninger nægter fuld skærm. Brug browserens egen fuld skærm i stedet ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft åbner ikke uden forbindelse

ModelCraft åbner kun offline, efter den er gemt til offline brug i den browser: knappen i app-linjen skal vise {{ui:Klar offline}}. Åbn den, mens du er online, og klik på {{ui:Gem til offline brug}}. Hvis knappen viser {{ui:Kunne ikke gemme}}, så klik igen på en bedre forbindelse; {{ui:Offline er ikke tilgængelig}} betyder, at dette vindue (et privat vindue eller en administreret computer) ikke kan gemme en kopi. Se [Arbejde offline](common:offline).
