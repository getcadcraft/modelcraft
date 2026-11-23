---
title: Nytt i 0.9 (tidligere)
summary: Utskriftstrinn med vår egen slicer og sending til USB, Klipper, OctoPrint og PrusaLink, harpiksslicing og filtillegg, materialflyt, digital tvilling- og fabrikkgulv-tillegg, NURBS-avrundinger, tykkelsesgivning og skanningstilpasning, AR på stedet og ti buemetoder.
keywords: hva er nytt 0.9, tidligere utgivelse, hva er nytt, utgivelsesnotater, endringslogg, 0.9, utskriftstrinn, 3D-utskrift, send til 3D-skriver, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, harpiks, harpiksutskrift, goo, sl1, ctb, anycubic, eksponeringstest, materialflyt, digital tvilling, fabrikkgulv, plc, transportbånd, nurbs, avrunding, tykkelse, skanningstilpasning, ar, på stedet, buemetoder, hva er nytt, endringer, 0.8, 0.8.1, versjon, nye funksjoner, rendermotor, motor, åpne i, usd, gltf, unreal, tillegg-motor, nurbs, flater, loft, sveip, kontinuitet, g0, g1, g2, zebra, step, iges, si scenen, scene, vær, tid på døgnet, årstid, assistent, materiale fra et bilde, bilde, skissebilde, møbler, møbler et rom, skrått kutt, del, utskriftskontroll, problemer, egenskapsrutenett, lamper, språk, inndataenheter, verktøylinjerader, dwg, live
from: 2717d1b1
---

Dette er hva som endret seg i ModelCraft 0.9, sammenlignet med 0.8.1. ModelCraft når nå skriveren og fabrikkgulvet: du kan legge ting på en utskriftsplate og sende dem uten å eksportere, slice for filament eller harpiks, og legge opp en linje for materialhåndtering. Dette er CadCraft Studio 0.9 og dets åtte apper; de fleste av de nye funksjonene nedenfor er tillegg.

## Nytt

### 3D-utskrift

- **Utskriftstrinn.** Klikk {{ui:Utskriftstrinn}} i verktøylinjen. Legg til elementer fra biblioteket på skriverplaten, ordne dem, gå gjennom de slicede layerne og trykk {{ui:Send til 3D-skriver}}, uten STL å eksportere. Det hører til 3D Print-tillegget, som er på som standard og kan fjernes som ethvert tillegg. Se [Plasser ting på utskriftsplaten og send dem til en skriver](topic:print-stage).
- **Vår egen filamentslicer.** {{ui:CadCraft basic (inkludert, raskest)}} er slicer i kortets **Slicer**-liste: vegger, skall, fyll, støtter og en skjørt, på en arbeider slik at siden forblir brukbar. {{ui:Forhåndsvis layers}} med **Layer**-glidebryteren viser layerne før du sender. Skriverprofiler, som Ender-3- og Prusa MK4-stiler, har sin egen start-G-kode.
- **Sending.** Over USB (Chrome eller Edge på en datamaskin, med siden åpen), eller til Klipper (Moonraker), OctoPrint eller PrusaLink på nettverket ditt. Ingenting kobler til eller sender uten et klikk, og sending spør først.
- **Andre slicere.** Kiri:Moto, PrusaSlicer og OrcaSlicer er egne tillegg, av som standard; legg dem til fra kortet eller fra {{ui:Innstillinger}} › {{ui:Tillegg}}. PrusaSlicer og OrcaSlicer bruker din egen installerte kopi fra CadCraft Studio. Tillegget for Bambu Lab-skrivere slicer med din OrcaSlicer og dens P2S-forhåndsinnstillinger, og krever Studio på en datamaskin.
- **Harpiksutskrift.** Harpikstilleggene (av som standard) lager layerbilder for skriverens skjerm, med uthuling og lufthull, flåte og støtter, en layerforhåndsvisning, og tid, harpiks og kostnad. Filformattilleggene skriver Elegoo GOO, SL1, Chitubox (CBDDLP og CTB 2 til 5) og Anycubic (PWMX og PWS). En eksponeringstest for harpiks lager en stige med fem eksponeringer. Se [Slicing for en harpiksskriver](topic:resin-printing).
- **Uendret.** {{ui:Eksporter}} › {{ui:Kontroller for 3D-utskrift (STL eller 3MF)…}}, utskriftsverktøyene og Del for utskrift fungerer som i 0.8. Se [Gjør en modell klar for 3D-utskrift](topic:print-3d).

### Materialflyt, digital tvilling og fabrikkgulv

Disse tre er tillegg, av til du slår dem på i {{ui:Innstillinger}} › {{ui:Tillegg}}, og hver har sin egen hjelp når den er på.

- **Materialflyt.** Et panel som heter Materialflyt legger ut transportbånd, stasjoner, buffere og AGV-baner i 3D-visningen, kjører en simulering med fast frø, spiller den av, og viser gjennomstrømning, ledetider og køer, med resultater lagret som CSV. Ordrer kan komme fra en CSV-fil. Robotceller kan kontrolleres og eksporteres. PLC-koblingen har en myk modus og en ekte modus over Modbus TCP, som bare fungerer i CadCraft Studio.
- **Digital tvilling.** Leser Materialflyt-oppsettet og kjører en myk PLC på det, med feil du kan tvinge fram, lagertester, en oppsettsammenligning og en materialliste.
- **Fabrikkgulv.** Gjør stasjonene om til maskiner og celler, leser dem live eller fra en simulator, og holder en jobbkø og en enkel OEE. Det leser bare: denne versjonen kan ikke skrive til en maskin eller PLC.

### Overflater, modeller og tegning

- **Avrundinger, tykkelsesgivning og booleske operasjoner på NURBS.** Panelet {{ui:Overflater}} har {{ui:Avrunding mellom flater}}, {{ui:Avrunding av flere kanter}}, {{ui:Gjør om til volumlegeme med tykkelse}} og Union, Subtract og Intersect, hver med sitt målte avvik. Se [Frie flater (NURBS)](topic:nurbs-surfaces).
- **Tilpass flater til en skanning.** Velg en skannet nett og bruk {{ui:Tilpass overflater til skanningen}} i gruppen **Scan**, og deretter {{ui:Sy overflatene sammen til et volumlegeme}}. Det er en første tilpasning, ikke en fullstendig pakke for reverse engineering.
- **En live-kobling fra en .3dm-modellerer.** Én vei, fra Rhino 8 eller Grasshopper, og den krever CadCraft Studio på samme datamaskin. Se [Hold en .3dm-modell live](topic:live-3dm-link).
- **Se modellen på stedet.** {{ui:Visning på stedet (AR, telefon)}} i menyen {{ui:Visninger}} fungerer på en Android-telefon med Chrome. Se [Se modellen på stedet med en Android-telefon (AR)](topic:ar-on-site).
- **Buemetoder.** Rullegardinlisten {{ui:Buemetoder}} tilbyr ti måter å tegne en bue på, inkludert {{ui:3-punkt}} og {{ui:Start, senter, slutt}}.
- **Flere enheter.** Vekt (kg, lb, t, ton) og temperaturer (grader C, F, K og R) forstås der du skriver inn verdier med enheter.

## I alle apper

- **Verktøytips.** Svevtekst på knapper og avkuttede etiketter er et Bootstrap-verktøytips.
- **Lukkbart starttips.** Tipskortet på et tomt tegneområde har en liten lukkeknapp (x). Det forblir lukket, og kommandopaletten kan vise det igjen.
- **Rullbare fanelinjer.** En panelfanelinje som ikke får plass, ruller i stedet for å bli kuttet av.
- **Fanetitler.** Når et dokument er åpent, begynner nettleserfanen med dokumentets navn, deretter ModelCraft og CadCraft. En prikk kommer først mens det er ulagret.
- **Layout.** {{ui:Innstillinger}} › {{ui:Generelt}} › Layout har layoutene i en rullegardin, med et valg om å bruke en layout bare for denne appen, og en knapp for å tilbakestille layouten.
- **Språk.** Språklisten i Innstillinger følger språkfilene som bygget inneholder. Andre språk enn engelsk er maskinutkast.
- **Live og Bibliotek.** Live TeamWork viser live-markører og navn, og Bibliotek-samlinger gir hver app en standardsamling.

## Rettet

- {{ui:Spill av}} blir til {{ui:Pause}} mens en animasjon spilles, og {{key:Space}} spiller av og pauser mens tidslinjen er åpen.
- Det stillbilde-renderet faller tilbake til WebGL når grafikkortet ikke kan starte stibporeren. Visningen for live-render kan fortsatt vise feilen; dette ble ikke sjekket på en Windows-maskin med den driveren.
- Materialflyt ekte modus kobler til igjen etter at en forbindelse ble avsluttet på PLC-unntakssvar.

## Ærlige begrensninger

- Ingenting er skrevet ut på en ekte skriver: verken filament, harpiks eller via Bambu Connect. Harpiksfiler er bare lest tilbake av CadCraft sine egne lesere.
- Digital tvilling og fabrikkgulv er testet mot simulatorer og kjente svar, og ingen ekte PLC, linje eller protokoll. De er hjelpemidler for kontroll, ikke en sikkerhetsvalidering. Fysikken dekker bare bokser, med opptil åtte laster.
- Rhino- og Grasshopper-koblingen har aldri kjørt i de ekte programmene.
- Språk som ikke er engelsk, er maskinutkast.

## Tidligere: 0.8 og 0.8.1

Dette er hva som endret seg i ModelCraft 0.8 (2026-11-01) og 0.8.1 (2026-11-02), sammenlignet med 0.7. Dialogen {{ui:Render et bilde…}} kan nå sende scenen til et annet program, panelet Overflater lager jevne frie flater, og en assistent du kobler til kan sette en hel scene fra én setning.

### Nytt

**Rendering**

- **Et valg av motor.** {{ui:Render et bilde…}} har en liste **Motor** over Modus. Våre egne to motorer, Fast og Stibporeren, er standard og fungerer overalt. Andre valg lagrer scenen som en pakke (modellen som USD-fil, pluss en innstillingsfil med de nøyaktige materialverdiene, lampene som er på, solen, himmelen, eksponeringen og kameraet) som du kan ta med til et annet program. Et bilde tegnet av et annet program sier hvilket program og hvilken versjon som laget det. Se [Velg hvilket program som tegner bildet](topic:render-engines).
- **Åpne i et annet program.** Listen Motor kan lagre scenen som en USD-fil, en glTF-fil (`.glb`) eller en Unreal-prosjektmappe (`.zip`), i nettleseren og i CadCraft Studio. I Studio kan den også starte usdview eller datamaskinens eget program for filen. Se [Åpne scenen i et annet program](topic:render-open-in).
- **Send til en spillmotor fra Studio.** Studio skriver scenen inn i et Unreal Engine-prosjekt og holder det i takt ved hver sending, bare én vei. Dine egne endringer ligger i et lag som CadCraft aldri skriver. Se [Send scenen til en spillmotor](topic:render-unreal).
- **Motorer fra tillegg.** Et tillegg kan legge en motor til listen. En skrevet i JavaScript tegner i nettleseren og i Studio; en som kjører et program, krever ditt ja i Studio. Se [Tegn bildet med et annet program](topic:render-other-program) og [Legg til en rendermotor med et tillegg](topic:render-engine-addons).
- **Si scenen.** Fortell den tilkoblede assistenten din «skumring, lett regn, høsttrær, folk på torget», og ModelCraft setter det opp i ett steg: solen flytter seg til dato og klokkeslett slik at skyggene følger, himmelen endres, våte flater dukker opp, og trær og folk plasseres som ekte objekter på merkelapper du kan skjule, flytte eller slette. Tid på døgnet, dato eller årstid, og vær (klart, overskyet, tåke, lett regn, regn, storm) fungerer også alene, og en senere forespørsel endrer den samme scenen. Tåke vises i bildet av høy kvalitet på grafikkortet; de andre motorene viser himmelen, lyset og de våte flatene. Regn tegnes ikke som fallende striper.

**Materialer**

- **Et materiale fra ett bilde.** Gi ModelCraft et bilde av en flate (en vegg, et gulv, stein), så lager det et flislagt materiale: belysningen over bildet jevnes ut, kantene gjøres slik at de går sammen, og et fargekart, et ruhetskart og et normalkart beregnes fra bildet. Det er vanlig bildebehandling av ditt eget bilde, uten trent modell. Ruhet er et anslag. Et enkelt, kvadratisk, rett forfra tatt bilde gir den beste flisen; et sterkt mønster, som murstein, kan vise et svakt spøkelse der skjøten er blandet.

**Overflater**

- **Frie flater.** Panelet {{ui:Overflater}} lager NURBS-kurver og utrimmede flater: kurver gjennom punkter, loft, rettlinjet, ekstruder, roter, sveip langs én eller to skinner, flater fra et kurvenett, lapper fra fire kanter, match og blend. Hver felles kant måles som G0, G1 eller G2 (gap, vinkel, krumningssprang) på de eksakte flatene, og en kant som er verre enn du ba om, vises i panelet Problemer med en **Match**-reparasjon. Zebrastriper og krumningsfarger tegnes fra de eksakte flatene. STEP- og IGES-filer går ut og inn. Se [Frie flater (NURBS)](topic:nurbs-surfaces).

**Tomt og rom**

- **Et skissebilde ned på bakken.** {{ui:Fil}} › {{ui:Importer et skissebilde…}} gjør et telefonbilde av en håndtegnet skisse om til kanter på bakken i den målestokken du sier: én gruppe, med en merkelapp for hver pennfarge. Papiret blir funnet og rettet ut på datamaskinen din, og ingenting sendes noe sted. Se [Modeller på en situasjonsplan](topic:site-plan).
- **Møbler et rom.** Velg et gulv og bruk {{ui:Organiser}} › {{ui:Møbler et rom…}}. Soverom-, stue-, spisestue-, kjøkken-, bad- eller kontormøbler plasseres etter regler, mot veggene og fri av dører og vinduer, i én gruppe du kan fjerne i ett steg. Det er et standardoppsett for deg å gjennomgå, ikke en design. Se [Startbibliotek](topic:starter).

**3D-utskrift**

- **Skrå kutt.** Del for utskrift kan skråstille kuttene sine med opptil 60 grader, noe som gir delene mer limflate. Koblinger står rett på kuttet. Se [Del en modell for utskrift](topic:print-split).
- **Utskriftskontrollen i Problemer.** Funnene fra 3D-utskriftskontrollen vises i panelet Problemer med markører på modellen, og Reparer fikser dem derfra. Se [Støtter, veggtykkelse, uthuling og reparasjon](topic:print-tools).

**I alle apper**

- **Språk.** Hjelp og apper finnes på 54 språk. Ti er nye: litauisk, latvisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili og usbekisk. Språk andre enn engelsk er maskinutkast til en morsmålstaler har lest dem, og hjelpeemner kan fortsatt være på engelsk.
- **Inndataenheter.** Et styreflate, en penn, en 3D-mus, en spillkontroller og MIDI-kontroller kan styre appene, for alle eller for én.
- **Verktøylinjerader.** {{ui:Innstillinger}} › {{ui:Generelt}} › Verktøylinjerader setter Bryt (som før), 2 rader eller 1 rad. En linje som ikke får plass, ruller sidelengs i stedet for å ta plass fra tegningen. Bryt er fortsatt standard.
- **Egenskapsrutenett.** Lampefeltene i ModelCraft bruker det felles rutenettet: sammenleggbare kategorier, etikett- og verdikolonner, og tetthet Kompakt. Skrevet aritmetikk, som `2*450`, fungerer fortsatt.
- **Problemer.** Panelet Problemer (advarselknappen i app-linjen) deles av alle appene. I ModelCraft holder det utskriftskontrollen og advarslene om flatekontinuitet.
- **Live.** En Live TeamWork-økt viser hvem som er hvor. Se [Modeller sammen med Live TeamWork](topic:work-live).
- **Tillegg.** Tillegg kan legge til rendermotorer, som over.
- **Koble til AI-en din.** Verktøykontrakten og kontrollene for de åtte appene består, med 454 verktøy til sammen. Ett-klikk-tilkobling i Studio, en hostet kobling for nettleserassistenter, din egen nøkkel i Studio og en publisert pakke er ikke lovet ennå. Appene inneholder ingen AI selv. Se [Bruk ModelCraft med AI-assistenter](topic:use-with-ai-assistants).

### Rettet i 0.8.1

- **DWG-klasseseksjonen.** Klasseseksjonen i en DWG-fil ble lest som feil type, noe som kunne ødelegge filen ved import. Den leses riktig nå, i ModelCraft og i de andre appene som leser DWG.
- **Nettbrett i portrett.** Ledig rutenettshøyde går til lerretet, og arkoppsettet begynner ved 760 piksler bredde eller mindre. ModelCraft sin stilark har endringen også.
- **Språk i Studio.** CadCraft Studio og de pakkede utgavene kan bytte språk mens de kjører; før var de bare på engelsk. Dette er ikke testet på alle plattformer ennå: si fra hvis språket ikke endrer seg.

### Ikke med i denne versjonen ennå

- **Ikke kodesignert.** Windows kan vise SmartScreen: velg {{ui:Mer info}}, og så {{ui:Kjør likevel}}. På en Mac høyreklikker du og velger {{ui:Åpne}}. Butikkbygg er satt på vent, og iPad- og iPhone-bygget ble ikke bygget på nytt for 0.8.1.
- Et annet program som tegner bildet uten et rendermotor-tillegg, panorama- eller stereokameraer, og et himmelbilde fra et annet program, samt pluginen som åpner Unreal-scenen, finnes ikke ennå. Filene skrives; pluginen er ikke utgitt og er ikke kjørt i Unreal.
- Frie flater: G3 og klasse A er ikke målt eller påstått, og trimming og volumlegemer kommer senere.
- Bilder fra andre programmer er ikke piksel for piksel like våre: bare kamera, sol, lamper og eksponering stemmer overens.
- Rettingen i 0.8.1 for språkbyttet i Studio er ikke testet på alle plattformer.

Alt annet er i [Ikke bygget ennå](topic:not-built-yet). For forrige utgivelse, se [Nytt i 0.7](topic:whats-new-0-7).
