---
title: Nytt i 0.9
summary: Utskriftstrinn med vår egen slicer og sending via USB, Klipper, OctoPrint og PrusaLink, resinslicing og filtillegg, materialflyt, digital tvilling- og fabrikkgulvtillegg, NURBS-avrundinger, fortykkelse og skanningstilpasning, AR på stedet og ti buemetoder.
keywords: nytt, hva er nytt, utgivelsesnotater, endringslogg, 0.9, utskriftstrinn, 3d-utskrift, send til 3d-printer, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resin, resinutskrift, goo, sl1, ctb, anycubic, eksponeringstest, materialflyt, digital tvilling, fabrikkgulv, plc, transportbånd, nurbs, avrunding, fortykk, skanningstilpasning, ar, på stedet, buemetoder, enheter, 0.8, 0.8.1, versjon, nye funksjoner, rendermotor, motor, åpne i, usd, gltf, unreal, tilleggsmotor, flater, loft, sveip, kontinuitet, g0, g1, g2, zebra, step, iges, si scenen, scene, vær, tid på døgnet, årstid, assistent, materiale fra et foto, foto, skissefoto, møblér, møblér et rom, skrått kutt, del, utskriftskontroll, problemer, egenskapsrutenett, lamper, språk, inndataenheter, verktøylinjerader, dwg, live
from: 169048a2
---

Dette er hva som endret seg i ModelCraft 0.9, sammenlignet med 0.8.1. ModelCraft når nå skriveren og fabrikkgulvet: du kan legge ting på byggeplaten og sende dem uten å eksportere, slicer for filament eller resin, og legge ut en linje for materialhåndtering. Dette er CadCraft Studio 0.9 og dets åtte apper; de fleste av de nye funksjonene under er tillegg.

## Nytt

### 3D-utskrift

- **Utskriftstrinn.** Klikk {{ui:Utskriftstrinn}} på verktøylinjen. Legg til bibliotekselementer på printerens byggeplate, ordne dem, se gjennom de slicede lagene og trykk {{ui:Send til 3D-printer}}, uten STL å eksportere. Det hører til 3D Print-tillegget, som er på som standard og kan fjernes som et hvilket som helst tillegg. Se [Legg ting på byggeplaten og send dem til en printer](topic:print-stage).
- **Vår egen filamentslicer.** {{ui:CadCraft basic (inkludert, raskest)}} er slicer i kortets liste **Slicer**: vegger, skall, fyll, støtter og et skjørt, på en bakgrunnsprosess slik at siden forblir brukbar. {{ui:Forhåndsvis lag}} med skyveknappen **Layer** viser lagene før du sender. Skriverprofiler, som Ender-3- og Prusa MK4-stilene, har sin egen start-G-kode.
- **Sending.** Over USB (Chrome eller Edge på en datamaskin, med siden åpen), eller til Klipper (Moonraker), OctoPrint eller PrusaLink på nettverket ditt. Ingenting kobler til eller sender uten et klikk, og sending spør først.
- **Andre slicere.** Kiri:Moto, PrusaSlicer og OrcaSlicer er egne tillegg, av som standard; legg dem til fra kortet eller fra {{ui:Innstillinger}} › {{ui:Tillegg}}. PrusaSlicer og OrcaSlicer bruker din egen installerte kopi fra CadCraft Studio. Tillegget for Bambu Lab-skrivere slicer med din OrcaSlicer og dens P2S-forhåndsinnstillinger, og trenger Studio på en datamaskin.
- **Resinutskrift.** Resin-tilleggene (av som standard) lager lagbilder for skriverens skjerm, med uthuling og lufthull, en flåte og støtter, en lagforhåndsvisning, og tid, resin og kostnad. Filformattillegg skriver Elegoo GOO, SL1, Chitubox (CBDDLP og CTB 2 til 5) og Anycubic (PWMX og PWS). En resin-eksponeringstest lager en stige med fem eksponeringer. Se [Slice for en resinskriver](topic:resin-printing).
- **Uendret.** {{ui:Eksporter}} › {{ui:Kontroller for 3D-utskrift (STL eller 3MF)…}}, utskriftsverktøyene og Del for utskrift fungerer som i 0.8. Se [Gjør en modell klar for 3D-utskrift](topic:print-3d).

### Materialflyt, digital tvilling og fabrikkgulv

Disse tre er tillegg, av til du slår dem på i {{ui:Innstillinger}} › {{ui:Tillegg}}, og hver har sin egen hjelp når den er på.

- **Materialflyt.** Et panel med navnet Materialflyt legger ut transportbånd, stasjoner, buffere og AGV-baner i 3D-visningen, kjører en simulering med frø, spiller den av, og viser gjennomstrømning, ledetider og køer, med resultater lagret som CSV. Ordrer kan komme fra en CSV-fil. Robotceller kan kontrolleres og eksporteres. PLC-koblingen har en myk modus og en ekte modus over Modbus TCP, som bare virker i CadCraft Studio.
- **Digital tvilling.** Leser Materialflyt-oppsettet og kjører en myk PLC på det, med feil du kan tvinge frem, lagertester, en sammenligning av oppsett og en stykkliste.
- **Fabrikkgulv.** Gjør stasjonene om til maskiner og celler, leser dem live eller fra en simulator, og holder en jobbkø og en enkel OEE. Den leser bare: denne versjonen kan ikke skrive til en maskin eller PLC.

### Flater, modeller og tegning

- **Avrundinger, fortykkelse og boolske operasjoner på NURBS.** {{ui:Flater}}-panelet har {{ui:Avrunding mellom flater}}, {{ui:Avrunding av flere kanter}}, {{ui:Gjør om til volumlegeme med tykkelse}} og Forening, Subtraher og Snitt, hver med sitt målte avvik. Se [Frie flater (NURBS)](topic:nurbs-surfaces).
- **Tilpass flater til en skanning.** Velg et skannet nett og bruk {{ui:Tilpass flater til skanningen}} i gruppen **Skanning**, og deretter {{ui:Sy overflatene sammen til et volumlegeme}}. Det er en første tilpasning, ikke en fullstendig pakke for reverse engineering.
- **En levende kobling fra et .3dm-modelleringsprogram.** Én vei, fra Rhino 8 eller Grasshopper, og den krever CadCraft Studio på samme datamaskin. Se [Hold en .3dm-modell levende](topic:live-3dm-link).
- **Se modellen på stedet.** {{ui:Visning på stedet (AR, telefon)}} i {{ui:Visninger}}-menyen fungerer på en Android-telefon med Chrome. Se [Se modellen på stedet med en Android-telefon (AR)](topic:ar-on-site).
- **Buemetoder.** Rullegardinlisten {{ui:Buemetoder}} tilbyr ti måter å tegne en bue på, blant annet {{ui:3-punkt}} og {{ui:Start, senter, slutt}}.
- **Flere enheter.** Vekter (kg, lb, t, ton) og temperaturer (grader C, F, K og R) forstås der du skriver verdier med enheter.

## I alle apper

- **Verktøytips.** Svevetekst på knapper og avkuttede etiketter er et Bootstrap-verktøytips.
- **Lukkbart startstips.** Tipskortet på et tomt tegneområde har en liten lukkeknapp (x). Det forblir lukket, og kommandopaletten kan vise det igjen.
- **Rullbare fanelinjer.** En panelfanelinje som ikke får plass, ruller i stedet for å bli kuttet av.
- **Fanetitler.** Med et dokument åpent starter nettleserfanen med dokumentets navn, deretter ModelCraft og CadCraft. En prikk kommer først mens det er ulagret.
- **Oppsett.** {{ui:Innstillinger}} › {{ui:Generelt}} › Oppsett holder oppsettene i en rullegardinliste, med et valg for å bruke et oppsett bare for denne appen og en knapp for å tilbakestille oppsettet.
- **Språk.** Språklisten i Innstillinger følger språkfilene som bygget inneholder. Andre språk enn engelsk er maskinutkast.
- **Live og bibliotek.** Live TeamWork viser live-markører og navn, og bibliotekssamlinger gir hver app en standardsamling.

## Rettet

- {{ui:Spill av}} blir til {{ui:Pause}} mens en animasjon spilles, og {{key:Space}} spiller av og pauser mens tidslinjen er åpen.
- Stillbildet rendres med WebGL når grafikkortet ikke kan starte sporingen av stier. Live-renderingsvisningen kan fortsatt vise feilen; dette ble ikke kontrollert på en Windows-maskin med den driveren.
- Materialflyt, ekte modus, kobles til igjen etter at en kobling ble avsluttet på PLC-unntakssvar.

## Ærlige begrensninger

- Ingenting er skrevet ut på en ekte skriver: verken filament, resin eller via Bambu Connect. Resinfiler er bare lest tilbake av CadCrafts egne lesere.
- Den digitale tvillingen og fabrikkgulvet er testet bare mot simulatorer og kjente svar, uten ekte PLC, linje eller protokoll. De er kontrollhjelpemidler, ikke en sikkerhetsvalidering. Fysikken dekker bare bokser, opptil åtte laster.
- Rhino- og Grasshopper-koblingen har aldri kjørt i de ekte programmene.
- Andre språk enn engelsk er maskinutkast.

## Tidligere: 0.8 og 0.8.1

Dette er hva som endret seg i ModelCraft 0.8 (2026-11-01) og 0.8.1 (2026-11-02), sammenlignet med 0.7. Dialogboksen {{ui:Render et bilde…}} kan nå sende scenen til et annet program, Flater-panelet lager glatte frie flater, og en assistent du kobler til, kan sette en hel scene fra én setning.

### Nytt

**Rendering**

- **Et motorvalg.** {{ui:Render et bilde…}} har en liste **Motor** over **Modus**. Våre egne to motorer, Rask og Sporing av stier, er standard og virker overalt. Andre oppføringer lagrer scenen som en pakke (modellen som en USD-fil, pluss en innstillingsfil med de nøyaktige materialverdiene, lampene som er på, solen, himmelen, eksponeringen og kameraet) som du tar med til et annet program. Et bilde tegnet av et annet program sier hvilket program og hvilken versjon som laget det. Se [Velg hvilket program som tegner bildet](topic:render-engines).
- **Åpne i et annet program.** Motorlisten kan lagre scenen som en USD-fil, en glTF-fil (`.glb`) eller en Unreal-prosjektmappe (`.zip`), i nettleseren og i CadCraft Studio. I Studio kan den også starte usdview eller datamaskinens eget program for filen. Se [Åpne scenen i et annet program](topic:render-open-in).
- **Send til en spillmotor fra Studio.** Studio skriver scenen inn i et Unreal Engine-prosjekt og holder det i takt ved hver sending, bare én vei. Dine egne redigeringer ligger i et layer som CadCraft aldri skriver til. Se [Send scenen til en spillmotor](topic:render-unreal).
- **Motorer fra tillegg.** Et tillegg kan legge en motor til listen. En skrevet i JavaScript tegner i nettleseren og i Studio; en som kjører et program trenger ditt ja i Studio. Se [Tegn bildet med et annet program](topic:render-other-program) og [Legg til en rendermotor med et tillegg](topic:render-engine-addons).
- **Si scenen.** Fortell den tilkoblede assistenten din «skumring, lett regn, høsttrær, folk på torget», og ModelCraft setter det opp i ett steg: solen flytter seg til dato og klokkeslett slik at skyggene følger, himmelen endrer seg, våte flater dukker opp, og trær og mennesker plasseres som ekte objekter på etiketter du kan skjule, flytte eller slette. Tid på døgnet, dato eller årstid, og vær (klart, overskyet, tåke, lett regn, regn, storm) virker også alene, og en senere forespørsel endrer den samme scenen. Tåke vises i bildet av høy kvalitet på grafikkortet; de andre motorene viser himmelen, lyset og de våte flatene. Regn tegnes ikke som fallende striper.

**Materialer**

- **Et materiale fra ett foto.** Gi ModelCraft et foto av en overflate (en vegg, et gulv, stein), og den lager et flisemateriale: belysningen over fotoet jevnes ut, kantene gjøres til å passe sammen, og et fargekart, et ruhetskart og et normalkart beregnes fra bildet. Det er vanlig bildebehandling av ditt eget bilde, uten en trent modell. Ruhet er et anslag. Et enkelt, kvadratisk foto rett forfra gir den beste flisen; et sterkt mønster som murstein kan vise et svakt spøkelse der skjøten blandes.

**Flater**

- **Frie flater.** {{ui:Flater}}-panelet lager NURBS-kurver og ubeskårne flater: kurver gjennom punkter, loft, rettlinjet, ekstruder, roter rundt akse, sveip langs én eller to skinner, flater fra et kurvenett, lapper fra fire kanter, tilpass og bland. Hver delt kant måles som G0, G1 eller G2 (mellomrom, vinkel, krumningshopp) på de eksakte flatene, og en kant som er verre enn du ba om, vises i Problemer-panelet med en **Tilpass**-løsning. Zebrastriper og krumningsfarger tegnes fra de eksakte flatene. STEP- og IGES-filer går ut og kommer inn. Se [Frie flater (NURBS)](topic:nurbs-surfaces).

**Tomt og rom**

- **Et skissefoto ned på bakken.** {{ui:Fil}} › {{ui:Importer et skissebilde…}} gjør et telefonfoto av en håndtegnet skisse om til kanter på bakken i den skalaen du oppgir: én gruppe, med en etikett for hver pennfarge. Papiret finnes og rettes ut på datamaskinen din, og ingenting sendes noe sted. Se [Modeller på en situasjonsplan](topic:site-plan).
- **Møblér et rom.** Velg et gulv og bruk {{ui:Organiser}} › {{ui:Møblér et rom…}}. Soverom-, stue-, spisestue-, kjøkken-, bad- eller kontormøbler plasseres etter regler, mot veggene og fri for dører og vinduer, i én gruppe du kan fjerne i ett steg. Det er et standardoppsett for deg å gjennomgå, ikke en design. Se [Startbiblioteket](topic:starter).

**3D-utskrift**

- **Skrå kutt.** Del for utskrift kan skråstille kuttene sine med opptil 60 grader, noe som gir delene mer limeflate. Koblinger står vinkelrett på kuttet. Se [Del en modell for utskrift](topic:print-split).
- **Utskriftskontrollen i Problemer.** Funnene fra 3D-utskriftskontrollen vises i Problemer-panelet med markører på modellen, og Reparer fikser dem derfra. Se [Støtter, veggtykkelse, uthuling og reparasjon](topic:print-tools).

**I alle apper**

- **Språk.** Hjelp og apper kommer på 54 språk. Ti er nye: litauisk, latvisk, bosnisk, marathi, telugu, albansk, afrikaans, filipino, swahili og usbekisk. Språk andre enn engelsk er maskinutkast til en morsmålstalende har lest dem, og hjelpemner kan fortsatt være på engelsk.
- **Inndataenheter.** Et styreflate, en penn, en 3D-mus, en spillkontroller og MIDI-kontroller kan styre appene, for alle av dem eller for én.
- **Verktøylinjerader.** {{ui:Innstillinger}} › {{ui:Generelt}} › Verktøylinjerader setter Bryt (som før), 2 rader eller 1 rad. En linje som ikke får plass, ruller sidelengs i stedet for å ta plass fra tegningen. Bryt forblir standard.
- **Egenskapsrutenett.** ModelCraft-lampefeltene bruker det felles rutenettet: sammenleggbare kategorier, etikett- og verdikolonner, og Kompakt tetthet. Skrevet aritmetikk som `2*450` fungerer fortsatt.
- **Problemer.** Problemer-panelet (advarselsknappen i programlinjen) deles av alle appene. I ModelCraft holder det utskriftskontrollen og advarslene om flatekontinuitet.
- **Live.** En Live TeamWork-økt viser hvem som er hvor. Se [Modeller sammen med Live TeamWork](topic:work-live).
- **Tillegg.** Tillegg kan legge til rendermotorer, som over.
- **Koble til KI-en din.** Verktøykontrakten og kontrollene for de åtte appene består, med 454 verktøy til sammen. Tilkobling med ett klikk i Studio, en hostet kobling for nettleserassistenter, din egen nøkkel i Studio og en publisert pakke er ikke lovet ennå. Appene har ingen egen KI. Se [Bruk ModelCraft med KI-assistenter](topic:use-with-ai-assistants).

### Rettet i 0.8.1

- **DWG-klasseseksjonen.** En DWG-fils klasseseksjon ble lest som feil type, noe som kunne ødelegge filen ved import. Den leses riktig nå, i ModelCraft og i de andre appene som leser DWG.
- **Nettbrett i stående retning.** Ledig rutenettshøyde går til lerretet, og arkoppsettet starter ved 760 piksler bredde eller mindre. ModelCrafts stilark har endringen også.
- **Språk i Studio.** CadCraft Studio og de pakkede utgavene kan bytte språk mens de kjører; før var de bare på engelsk. Dette er ikke testet på alle plattformer ennå: si fra hvis språket ikke endres.

### Ikke i denne versjonen ennå

- **Ikke kodesignert.** Windows kan vise SmartScreen: velg {{ui:Mer informasjon}}, og deretter {{ui:Kjør likevel}}. På en Mac, høyreklikk og velg {{ui:Åpne}}. Store-versjoner er satt på vent, og iPad- og iPhone-versjonen ble ikke bygget på nytt for 0.8.1.
- Et annet program som tegner bildet uten et rendermotor-tillegg, panorama- eller stereokameraer og et himmelbilde gjennom et annet program, og programtillegget som åpner Unreal-scenen, finnes ikke ennå. Filene skrives; programtillegget er ikke utgitt og er ikke kjørt i Unreal.
- Frie flater: G3 og klasse A måles ikke eller påstås ikke, og beskjæring og volumlegemer kommer senere.
- Bilder fra andre programmer er ikke piksel for piksel like våre: bare kameraet, solen, lampene og eksponeringen stemmer.
- Rettelsen i 0.8.1 for språkbyttet i Studio er ikke testet på alle plattformer.

Alt annet står i [Ikke bygget ennå](topic:not-built-yet). For forrige utgivelse, se [Nytt i 0.7](topic:whats-new-0-7).
