---
title: Del en stor modell for utskrift
summary: Kutt en modell som er for stor for skriveren din i stykker som får plass på byggplaten, med tapper, nøkler, svalehaler, dymlehull eller magnethull og skjøtens nummer på begge flater, og last ned alle delene og et monteringsark i én zip-fil.
keywords: 3D-utskrift, dele, skrå, skrått kutt, vinklet kutt, skrå snitt, deler, byggplatestørrelse, byggvolum, deler, tapper, nøkler, svalehale, dymling, magnet, klaring, toleranse, delenummer, montering, sprengbilde, zip, stl, 3mf, lisens, lisensnøkkel, USB-nøkkel, dongle
from: ee96ba77
---

Når en modell er større enn byggplaten på skriveren din, **deler {{ui:Del for utskrift}}** den i stykker som får plass, legger til koblinger slik at delene passer sammen når du setter dem sammen, og graverer det samme nummeret på begge flater av hver skjøt. Åpne {{ui:Eksporter}} › {{ui:Kontroller for 3D-utskrift (STL eller 3MF)…}}; dialogens linje **Utskriftsverktøy** har {{ui:Del for utskrift}}. Den åpnes som et kort over visningen.

Den virker på det som skal skrives ut: utvalget, eller alt som vises når ingenting er valgt. Det som skal skrives ut må være et lukket volumlegeme; finner kontrollen hull, bruk først [Reparer](topic:print-tools#repair).

Det kjører i ModelCraft, på datamaskinen din: ingen lisensserver, ingen USB-nøkkel, ingenting lastes opp.

## Slik kutter du

- **Tilpass byggplaten, færrest mulig deler**: oppgi byggplatens bredde, dybde og høyde (de hentes fra {{ui:Innstillinger}} › ModelCraft › 3D-skriver). Kortet viser hvor mange deler det blir, og hvor store de er; det kutter modellen i like store deler, så få som mulig får plass. En del kan ligge på siden i filene hvis det er det som gjør at den passer. Koblingene som stikker ut av en del regnes med i størrelsen.
- **Ved steder jeg oppgir**: velg aksen å kutte over og skriv inn hvor, i millimeter fra modellens lave ende, med komma mellom (`100, 200` gir tre deler).
  **Skrå** vrir kuttene med opptil 60° om en av de to andre aksene (for eksempel et kutt over Z skrådd om X): hvert skrått kutt går gjennom modellens midtlinje på sitt sted, gir delene mer limflate og skjuler skjøten bedre på en skrånende flate. Koblingene står rettvinklet på kuttet.

Kuttplanene tegnes rundt modellen som stiplede linjer mens kortet er åpent.

## Koblinger

Hvert sted der to deler berører hverandre får koblinger, plassert der det er mest plass: minst **tynneste vegg** pluss **klaringen** pluss egen størrelse unna utsiden, og langt nok fra alle andre kutt til at to hull aldri møtes. På en lang flate spres to koblinger langs den, slik at delene ikke kan vri seg.

- **Runde tapper**: en tapp på den ene delen (avfaset i spissen), et hull på den andre.
- **Kvadratiske kiler**: det samme, men kvadratisk, slik at en del bare kan settes på på én måte.
- **Svalehaler**: en tunge som glir inn i et spor fra siden. Der den ene enden av sporet ville møte et annet kutt, stopper svalehalen før, og glir inn fra den åpne enden. Svalehaler passer for kutt i én retning (en rad med skiver); i et rutenett, bruk tapper eller dymlinger.
- **Dymlehull**: et hull på hver side; pinnene skrives også ut (i zip-filen).
- **Magnetlommer**: en lomme på hver side for en rund magnet med den diameteren og tykkelsen du oppgir. Kontroller polene før du limer dem inn.
- **Ingen (lim)**.

**Klaringen** er gapet på hver side mellom en tapp og hullet sitt (0,2 mm til å begynne med). Den er nøyaktig det tallet du oppgir: runde hull lages litt større, slik at det er de flate sidene, ikke hjørnene, som holder gapet. Øk den hvis delene fra skriveren din blir for stramme.

Når en skjøt ikke har plass til en kobling (en tynn vegg, et lite berøringsområde), sier kortet fra om det: lim den skjøten.

## Delnumre

Med **Gravér skjøtenumrene på begge flater** på, får hver skjøt nummeret til de to delene, for eksempel `3-4`, gravert 0,6 mm dypt på begge flater, og lest riktig vei på hver av dem. Numrene starter på 5 mm høye og blir mindre for å få plass, ned til 2,5 mm; en skjøt uten plass til nummeret sitt blir oppført. Delene nummereres fra det nederste laget og oppover.

## Forhåndsvisning, nedlasting, del modellen

1. {{ui:Forhåndsvisning}} kutter modellen og sier hvor mange deler, skjøter og koblinger det er, om hver del består utskriftskontrollen for 3D og får plass på byggplaten, og lister størrelsen til hver del. En ring markerer hver kobling og hvert nummer i visningen.
2. {{ui:Last ned delene (.zip)}} lagrer én zip-fil: en fil per del (STL eller 3MF, etter ditt valg under **Filer**), hver stående på byggplaten; dymlingene; og **monteringsarket** — et bilde av delene tatt fra hverandre med nummerne sine (`assembly.svg` og `assembly.png`) og en liste over delene og skjøtene (`assembly.txt`).
3. {{ui:Del modellen}} setter delene inn i modellen i stedet for de valgte gruppene eller komponentene, med navn som på monteringsarket, i ett steg: {{ui:Angre}} setter originalen tilbake. Det krever at gruppene eller komponentene som skal deles er valgt; nedlastingen virker på det som kan skrives ut uansett.

## Flytt koblingene selv

Etter en forhåndsvisning lar **Koblinger for hånd** deg rette hvor koblingene skal være:

- {{ui:Flytt én}}: klikk en rød ring i visningen (den blir grønn), og klikk deretter der den skal være på kuttet.
- {{ui:Legg til én}}: klikk i visningen der en kobling skal være. Den havner på kuttplanet klikket ditt når, mellom de to delene der.
- {{ui:Fjern én}}: klikk en rød ring for å fjerne den koblingen.

Hver endring kontrolleres på nytt som de automatiske: et sted for nær konturen, et annet kutt eller en annen kobling blir ikke laget, og kortet sier fra om det. {{ui:Automatisk igjen}} glemmer stedene dine. De beholdes så lenge modellen, utvalget og kuttene er som de er.

En forhåndsvisning varer til modellen, utvalget eller en innstilling endres; da ber kortet deg om å forhåndsvise på nytt.

:::note
Hver del kontrolleres slik utskriftskontrollen for 3D ville gjort det før du laster ned. Slicer-programmet ditt avgjør fortsatt hvordan hver del skrives ut: se på hver enkelt der, og skriv ut én skjøt først for å se hvordan skriveren din håndterer klaringen.
:::
