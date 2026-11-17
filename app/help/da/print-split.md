---
title: Del en stor model til print
summary: Skær en model, der er for stor til din printer, i stykker, der passer på printbedet, med tapper, nøgler, svalehaler, dyvel- eller magnethuller og samlingens nummer på begge flader, og download alle stykker og et samlingsark i én zip-fil.
keywords: 3D-print, del, skråt, skråt snit, vinklet snit, skævt, splitter, snit, for stor, printbedstørrelse, byggevolumen, stykker, dele, forbindere, tapper, nøgler, svalehale, dyvel, magnet, spillerum, tolerance, delnumre, samling, eksploderet visning, zip, stl, 3mf, licens, licence, USB-nøgle, dongle
from: ee96ba77
---

Når en model er større end din printers printbed, skærer **Del til print** den i stykker, der passer, tilføjer forbindere, så stykkerne flugter, når du sætter dem sammen, og graverer det samme nummer på begge flader af hver samling. Åbn {{ui:Eksportér}} › {{ui:Kontrollér til 3D-print (STL eller 3MF)…}}; dialogens linje **Printværktøjer** har {{ui:Del til print}}. Den åbnes som et kort over visningen.

Det virker på det, der printes: markeringen, eller alt det, der vises, når intet er markeret. Det, der printes, skal være et lukket legeme. Finder kontrollen huller, så brug [Reparér](topic:print-tools#repair) først.

Det kører i ModelCraft, på din computer: ingen licensserver, ingen USB-nøgle, intet uploades.

## Sådan skæres

- **Passer til printbedet, færrest stykker**: angiv printbedets bredde, dybde og højde (de hentes fra {{ui:Indstillinger}} › ModelCraft › 3D-printer). Kortet siger, hvor mange stykker der skal bruges, og hvor store de hver er; det skærer modellen i lige store stykker, så få som muligt passer. Et stykke må ligge på siden i filerne, hvis det er det, der får det til at passe. Forbindere, der stikker ud fra et stykke, tæller med i dets størrelse.
- **Ved de steder, jeg angiver**: vælg aksen, der skal skæres hen over, og skriv hvor, i millimeter fra modellens lave ende, med kommaer imellem (`100, 200` giver tre stykker).
  **Skråt** drejer snittene med op til 60° om en af de to andre akser (et snit hen over Z skråt om X, for eksempel). Hvert skråt snit går gennem modellens midterlinje ved sit sted, giver stykkerne mere klæbeflade og skjuler samlingen bedre på en skrånende flade. Forbindere står vinkelret på snittet.

De tegnede snitplaner vises som stiplede linjer rundt om modellen, mens kortet er åbent.

## Forbindere

Hvert sted, hvor to stykker rører hinanden, får forbindere, placeret af sig selv der, hvor der er mest plads: mindst **mindste væg** plus **spillerum** plus deres egen størrelse fra ydersiden, og langt nok fra hvert andet snit til, at to huller aldrig mødes. På en lang flade placeres to forbindere spredt langs den, så stykkerne ikke kan dreje sig.

- **Runde tapper**: en tap på det ene stykke (skåret af i spidsen), et hul i det andet.
- **Firkantede nøgler**: det samme, firkantet, så et stykke kun kan sidde på én måde.
- **Svalehaler**: en tunge, der glider ind i et spor fra siden. Hvor den ene ende af sporet ville møde et andet snit, stopper svalehalen før, og den glider ind fra den åbne ende. Svalehaler passer til snit i én retning (en række skiver); i et gitter bruges tapper eller dyvler.
- **Dyvelhuller**: et hul på hver side; dyvlerne printes også (i zip-filen).
- **Magnetlommer**: en lomme på hver side til en rund magnet med den diameter og tykkelse, du angiver. Kontrollér polerne, før du limer dem fast.
- **Ingen (lim)**.

**Spillerum** er rummet på hver side mellem en tap og dens hul (0.2 mm til at starte med). Det er rigtigt i forhold til det tal, du angiver: runde huller laves en smule større, så deres flade sider, ikke deres hjørner, holder det rum. Hæv det, hvis din printers dele bliver for stramme.

Når en samling ikke har plads til en forbindere (en tynd væg, et lille berøringsareal), siger kortet det: lim netop den.

## Delnumre

Med **Gravér samlingsnumrene på begge flader** slået til får hver samling nummeret på de to stykker, den forbinder, for eksempel `3-4`. Det graveres 0.6 mm dybt på begge flader og læses rigtigt rundt på hver. Numrene starter 5 mm høje og bliver mindre for at passe, ned til 2.5 mm; en samling uden plads til sit nummer står på listen. Stykkerne nummereres fra det nederste lag og opad.

## Forhåndsvisning, download, del modellen

1. {{ui:Forhåndsvisning}} skærer modellen og siger, hvor mange stykker, samlinger og forbindere der er, om hvert stykke klarer 3D-printkontrollen og passer på printbedet, og lister hvert stykkes størrelse. En ring markerer hver forbindere og hvert nummer i visningen.
2. {{ui:Download stykkerne (.zip)}} gemmer én zip-fil: en fil pr. stykke (STL eller 3MF, efter dit valg under **Filer**), hvert stående på printbedet; dyvlerne; og **samlingsarket**, et billede af stykkerne trukket fra hinanden med deres numre (`assembly.svg` og `assembly.png`) og en liste over stykkerne og samlingerne (`assembly.txt`).
3. {{ui:Del modellen}} lægger stykkerne i modellen i stedet for de markerede grupper eller komponenter, navngivet som på samlingsarket, i ét trin. {{ui:Fortryd}} lægger det oprindelige tilbage. Det kræver, at de grupper eller komponenter, der skal deles, er markeret; download virker på alt, der kan printes.

## Flyt forbindere selv

Efter en forhåndsvisning lader **Forbindere i hånden** dig rette, hvor forbindere placeres:

- {{ui:Flyt ét}}: klik på en rød ring i visningen (den bliver grøn), og klik derefter, hvor den skal være, på snittet.
- {{ui:Tilføj ét}}: klik i visningen, hvor en forbindere skal være. Den placeres på snitplanen, dit klik rammer, mellem de to stykker der.
- {{ui:Fjern ét}}: klik på en rød ring for at fjerne den forbindere.

Hver ændring kontrolleres igen ligesom de automatiske: et sted for tæt på konturen, et andet snit eller en anden forbindere bliver ikke lavet, og kortet siger det. {{ui:Automatisk igen}} glemmer dine placeringer. De bevares, så længe modellen, markeringen og snittene forbliver, som de er.

En forhåndsvisning bliver stående, indtil modellen, markeringen eller en indstilling ændres; så beder kortet dig om at forhåndsvise igen.

:::note
Hvert stykke kontrolleres, som 3D-printkontrollen ville kontrollere det, før du downloader. Din slicer afgør stadig, hvordan hvert stykke printes: se på hvert enkelt dér, og print først én samling for at se, hvordan din printer klarer spillerummet.
:::
