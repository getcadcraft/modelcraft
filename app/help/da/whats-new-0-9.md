---
title: Nyheder i 0.9 (tidligere)
summary: Printtrin med vores egen slicer og afsendelse via USB, Klipper, OctoPrint og PrusaLink, resin-slicing og filformat-add-ons, materialeflow, digital tvilling- og fabriksgulv-add-ons, NURBS-afrundinger, fortykning og scanningstilpasning, AR på stedet og ti buemetoder.
keywords: nyheder 0.9, tidligere udgivelse, nyheder, udgivelsesnoter, changelog, 0.9, printtrin, 3D-print, send til 3D-printer, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resin, resin-print, goo, sl1, ctb, anycubic, eksponeringstest, materialeflow, digital tvilling, fabriksgulv, plc, transportbånd, nurbs, afrunding, fortyk, scanningstilpasning, ar, på stedet, buemetoder, enheder, ændringer, 0.8, 0.8.1, version, nye funktioner, renderingsmotor, motor, åbn i, usd, gltf, unreal, add-on-motor, overflader, loft, sweep, kontinuitet, g0, g1, g2, zebra, step, iges, beskriv scenen, scene, vejr, tid på dagen, årstid, assistent, materiale fra et foto, foto, skitsefoto, møbler, møbler et rum, skråt, skråt snit, opdel, printkontrol, problemer, egenskabsgitter, lamper, sprog, inputenheder, værktøjslinjerækker, dwg, live
from: 2717d1b1
---

Dette er hvad der ændrede sig i ModelCraft 0.9 sammenlignet med 0.8.1. ModelCraft når nu printeren og fabriksgulvet: du kan lægge ting på en printplade og sende dem uden at eksportere, slice til filament eller resin, og lægge en materialehåndteringslinje op. Dette er CadCraft Studio 0.9 og dets otte apps; de fleste nye funktioner nedenfor er add-ons.

## Nyt

### 3D-print

- **Printtrin.** Klik på {{ui:Printtrin}} i værktøjslinjen. Tilføj biblioteksemner til printerens plade, arrangér dem, kig på de slicede lag, og tryk på {{ui:Send til 3D-printer}}, uden at eksportere nogen STL. Den hører til 3D Print-add-on'en, som er slået til som standard og kan fjernes ligesom enhver anden add-on. Se [Læg ting på printpladen og send dem til en printer](topic:print-stage).
- **Vores egen filament-slicer.** {{ui:CadCraft basic (inkluderet, hurtigst)}} er slicer'en i panelets liste **Slicer**: vægge, skal, fyldning, understøtninger og en skirt, kørt i en baggrundsproces, så siden forbliver brugbar. {{ui:Forhåndsvis lag}} med skyderen **Lag** viser lagene, før du sender. Printerprofiler som Ender-3- og Prusa MK4-stilene har deres egen start-G-code.
- **Afsendelse.** Over USB (Chrome eller Edge på en computer, med siden åben), eller til Klipper (Moonraker), OctoPrint eller PrusaLink på dit netværk. Intet forbindes eller sendes uden et klik, og afsendelse spørger først.
- **Andre slicere.** Kiri:Moto, PrusaSlicer og OrcaSlicer er hver sin add-on, slået fra som standard; tilføj dem fra panelet eller fra {{ui:Indstillinger}} › {{ui:Add-ons}}. PrusaSlicer og OrcaSlicer bruger din egen installerede kopi fra CadCraft Studio. Add-on'en til Bambu Lab-printere slicer med din OrcaSlicer og dens P2S-forvalg og kræver Studio på en computer.
- **Resin-print.** Resin-add-on'erne (slået fra som standard) laver lagbilleder til din printers skærm med udhuling og udluftningshuller, en raft og understøtninger, en lagforhåndsvisning samt tid, resin og pris. Filformat-add-ons skriver Elegoo GOO, SL1, Chitubox (CBDDLP og CTB 2 til 5) og Anycubic (PWMX og PWS). En resin-eksponeringstest laver en trappe med fem eksponeringer. Se [Slicing til en resin-printer](topic:resin-printing).
- **Uændret.** {{ui:Eksportér}} › {{ui:Kontrollér til 3D-print (STL eller 3MF)…}}, printværktøjerne og Opdel til print fungerer som i 0.8. Se [Gør en model klar til 3D-print](topic:print-3d).

### Materialeflow, digital tvilling og fabriksgulv

Disse tre er add-ons, slået fra, indtil du tænder dem i {{ui:Indstillinger}} › {{ui:Add-ons}}, og hver har sin egen hjælp, når den er tændt.

- **Materialeflow.** Et panel ved navn Materialeflow lægger transportbånd, stationer, buffere og AGV-stier ud i 3D-visningen, kører en simulering med fast seed, afspiller den og viser gennemløb, leveringstider og køer, med resultater gemt som CSV. Ordrer kan komme fra en CSV-fil. Robotceller kan kontrolleres og eksporteres. PLC-forbindelsen har en blød tilstand og en rigtig tilstand over Modbus TCP, som kun virker i CadCraft Studio.
- **Digital tvilling.** Læser Materialeflow-layoutet og kører en blød PLC på det, med fejl du kan tvinge frem, lagertest, layoutsammenligning og en stykliste.
- **Fabriksgulv.** Gør stationerne til maskiner og celler, læser dem live eller fra en simulator, og holder en jobkø og en simpel OEE. Det læser kun: denne build kan ikke skrive til en maskine eller PLC.

### Overflader, modeller og tegning

- **Afrundinger, fortykning og booleske operationer på NURBS.** Panelet {{ui:Overflader}} har {{ui:Afrund mellem flader}}, {{ui:Afrund flere kanter}}, {{ui:Fortyk til massivt legeme}} og Union, Subtract og Intersect, hver med sin målte afvigelse. Se [Frie overflader (NURBS)](topic:nurbs-surfaces).
- **Tilpas overflader til en scanning.** Vælg et scannet mesh og brug {{ui:Tilpas overflader til scanningen}} i gruppen **Scan**, og derefter {{ui:Sy overfladerne sammen til et legeme}}. Det er en første tilpasning, ikke en fuld reverse-engineering-pakke.
- **Et live-link fra en .3dm-modellerer.** Én vej, fra Rhino 8 eller Grasshopper, og det kræver CadCraft Studio på den samme computer. Se [Hold en .3dm-model live](topic:live-3dm-link).
- **Se modellen på stedet.** {{ui:Vis på stedet (AR, telefon)}} i menuen {{ui:Visninger}} virker på en Android-telefon med Chrome. Se [Se modellen på stedet med en Android-telefon (AR)](topic:ar-on-site).
- **Buemetoder.** Rullelisten {{ui:Buemetoder}} tilbyder ti måder at tegne en bue på, inklusive {{ui:3-punkt}} og {{ui:Start, centrum, slut}}.
- **Flere enheder.** Vægt (kg, lb, t, ton) og temperaturer (grader C, F, K og R) forstås, hvor du skriver værdier med enheder.

## I alle apps

- **Værktøjstips.** Hover-tekst på knapper og afkortede etiketter er et Bootstrap-værktøjstip.
- **Lukkeligt starttip.** Tip-panelet på et tomt tegneområde har et lille luk-x. Det forbliver lukket, og kommandopaletten kan vise det igen.
- **Rullende fanerækker.** Et panels fanerække, der ikke passer, ruller i stedet for at blive skåret af.
- **Fanetitler.** Når et dokument er åbent, starter browserfanen med dokumentets navn, derefter ModelCraft og CadCraft. Et punktum kommer først, mens dokumentet er ikke-gemt.
- **Layout.** {{ui:Indstillinger}} › {{ui:Generelt}} › Layout holder layouterne i en rullemenu, med et valg om at bruge en layout kun for denne app og en knap til at nulstille layoutet.
- **Sprog.** Sproglisten i Indstillinger følger de sprogfiler, som build'et indeholder. Andre sprog end engelsk er maskinelle kladder.
- **Live og bibliotek.** Live TeamWork viser live-markører og navne, og bibliotekssamlinger giver hver app en standardsamling.

## Rettet

- {{ui:Afspil}} bliver til {{ui:Pause}}, mens en animation spilles, og {{key:Space}} spiller og pauser, mens tidslinjen er åben.
- Den stillbilledmæssige render falder tilbage til WebGL, når grafikkortet ikke kan starte path tracer'en. Live-renderingsvisningen kan stadig vise fejlen; dette blev ikke kontrolleret på en Windows-maskine med den driver.
- Materialeflow's rigtige tilstand forbinder igen, efter en forbindelse endte på svar med PLC-undtagelser.

## Ærlige begrænsninger

- Intet er printet på en rigtig printer: ikke filament, ikke resin, ikke via Bambu Connect. Resinfiler er kun læst tilbage af CadCraft's egne læsere.
- Den digitale tvilling og fabriksgulvet er kun testet mod simulatorer og kendte svar, uden en rigtig PLC, linje eller protokol. De er kontrolhjælpemidler, ikke en sikkerhedsvalidering. Fysikken dækker kun kasser, op til otte laster.
- Rhino- og Grasshopper-linket er aldrig kørt i de rigtige programmer.
- Ikke-engelske sprog er maskinelle kladder.

## Tidligere: 0.8 og 0.8.1

Dette er hvad der ændrede sig i ModelCraft 0.8 (2026-11-01) og 0.8.1 (2026-11-02), sammenlignet med 0.7. Dialogen {{ui:Render et billede…}} kan nu sende scenen til et andet program, panelet Overflader laver glatte frie overflader, og en assistent du forbinder kan sætte en hel scene op fra én sætning.

### Nyt

**Rendering**

- **Et motorvalg.** {{ui:Render et billede…}} har en liste **Motor** over **Tilstand**. Vores egne to motorer, Fast og Path tracer, er standard og virker overalt. Andre valg gemmer scenen som en pakke (modellen som USD-fil plus en indstillingsfil med de præcise materialeværdier, de lamper der er tændt, solen, himlen, eksponeringen og kameraet) til et andet program. Et billede tegnet af et andet program siger, hvilket program og hvilken version der lavede det. Se [Vælg hvilket program der tegner billedet](topic:render-engines).
- **Åbn i et andet program.** Motor-listen kan gemme scenen som en USD-fil, en glTF-fil (`.glb`) eller en Unreal-projektmappe (`.zip`), i browseren og i CadCraft Studio. I Studio kan den også starte usdview eller computerens eget program til filen. Se [Åbn scenen i et andet program](topic:render-open-in).
- **Send til en spilmotor fra Studio.** Studio skriver scenen ind i et Unreal Engine-projekt og holder den i takt ved hvert afsend, kun én vej. Dine egne redigeringer ligger i et lag, som CadCraft aldrig skriver. Se [Send scenen til en spilmotor](topic:render-unreal).
- **Motorer fra add-ons.** En add-on kan tilføje en motor til listen. En skrevet i JavaScript tegner i browseren og i Studio; en der kører et program, kræver dit ja i Studio. Se [Tegn billedet med et andet program](topic:render-other-program) og [Tilføj en renderingsmotor med en add-on](topic:render-engine-addons).
- **Beskriv scenen.** Fortæl din tilsluttede assistent "skumring, let regn, efterårstræer, folk på pladsen", og ModelCraft sætter det op i ét trin: solen flytter sig til dato og klokkeslæt, så skyggerne følger med, himlen skifter, våde overflader dukker op, og træer og folk placeres som rigtige objekter på tags, som du kan skjule, flytte eller slette. Tid på dagen, dato eller årstid og vejr (klart, overskyet, tåge, let regn, regn, storm) virker også alene, og en senere anmodning ændrer den samme scene. Tåge vises i højkvalitetsbilledet på grafikkortet; de andre motorer viser himlen, lyset og de våde overflader. Regn tegnes ikke som faldende striber.

**Materialer**

- **Et materiale fra ét foto.** Giv ModelCraft et foto af en flade (en væg, et gulv, sten), og den laver et flisbart materiale: lyset på tværs af fotoet udjævnes, kanterne gøres til at passe sammen, og et farvekort, et ruhedskort og et normalkort udregnes ud fra billedet. Det er ren billedbehandling af dit eget billede uden nogen trænet model. Ruhed er et skøn. Et plant, kvadratisk foto taget lige forfra giver den bedste flise; et stærkt mønster som mursten kan vise et blødt spøgelsesbillede der, hvor samlingen blendes.

**Overflader**

- **Frie overflader.** Panelet {{ui:Overflader}} laver NURBS-kurver og utrimmede overflader: kurver gennem punkter, loft, ruled, ekstrudering, drejning, sweeps langs en eller to skinner, overflader fra et kurvenet, lapper fra fire kanter, match og blend. Hver delt kant måles som G0, G1 eller G2 (mellemrum, vinkel, krumningsspring) på de præcise overflader, og en kant, der er dårligere end du bad om, vises i Problemer-panelet med en rettelse **Match**. Zebrastriber og krumningsfarver tegnes ud fra de præcise overflader. STEP- og IGES-filer går ud og kommer ind. Se [Frie overflader (NURBS)](topic:nurbs-surfaces).

**Sted og rum**

- **Et skitsefoto ned på jorden.** {{ui:Fil}} › {{ui:Importér et skitsefoto…}} gør et telefonfoto af en håndskitse til kanter på jorden i den skala, du angiver: én gruppe, med et tag for hver pennefarve. Papiret findes og rettes op på din computer, og intet sendes nogen steder hen. Se [Model på en situationsplan](topic:site-plan).
- **Møbler et rum.** Vælg et gulv og brug {{ui:Organisér}} › {{ui:Møbler et rum…}}. Soveværelses-, stue-, spisestue-, køkken-, badeværelses- eller kontormøbler placeres efter regler, op mod væggene og fri af døre og vinduer, i én gruppe, du kan fjerne i ét trin. Det er en standardopstilling, du skal gennemgå, ikke et design. Se [Startbibliotek](topic:starter).

**3D-print**

- **Skrå snit.** Opdel til print kan skråstille sine snit med op til 60 grader, hvilket giver delene mere limflade. Forbindere står vinkelret på snittet. Se [Opdel en model til print](topic:print-split).
- **Printkontrollen i Problemer.** Resultaterne fra 3D-printkontrollen vises i Problemer-panelet med markører på modellen, og {{ui:Reparér}} retter dem derfra. Se [Understøtninger, vægtykkelse, udhuling og reparation](topic:print-tools).

**I alle apps**

- **Sprog.** Hjælp og apps findes på 54 sprog. Ti er nye: litauisk, lettisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili og usbekisk. Andre sprog end engelsk er maskinelle kladder, indtil en indfødt taler har læst dem, og hjælpeemner kan stadig være på engelsk.
- **Inputenheder.** En trackpad, en pen, en 3D-mus, en spilcontroller og MIDI-kontroller kan styre apps, for dem alle eller for én.
- **Værktøjslinjerækker.** {{ui:Indstillinger}} › {{ui:Generelt}} › Værktøjslinjerækker sætter Wrap (som før), 2 rækker eller 1 række. En bjælke, der ikke passer, ruller sidelæns i stedet for at tage plads fra tegningen. Wrap forbliver standard.
- **Egenskabsgitter.** ModelCraft's lampefelter bruger det fælles gitter: sammenklappelige kategorier, etiket- og værdikolonner og tæthed Kompakt. Indtastet aritmetik som `2*450` virker fortsat.
- **Problemer.** Problemer-panelet (advarselsknappen i app-bjælken) deles af alle apps. I ModelCraft rummer det printkontrollen og advarsler om overfladekontinuitet.
- **Live.** En Live TeamWork-session viser, hvem der er hvor. Se [Model sammen med Live TeamWork](topic:work-live).
- **Add-ons.** Add-ons kan tilføje renderingsmotorer, som ovenfor.
- **Tilslut din AI.** Værktøjskontrakten og kontrollerne for de otte apps består med 454 værktøjer i alt. Ét-klik-forbindelse i Studio, en hostet connector til browserassistenter, din egen nøgle i Studio og en udgivet pakke er ikke lovet endnu. Apps'ene indeholder ingen AI selv. Se [Brug ModelCraft med AI-assistenter](topic:use-with-ai-assistants).

### Rettet i 0.8.1

- **DWG-klassesektion.** En DWG-fils klassesektion blev læst som den forkerte type, hvilket kunne ødelægge filen ved import. Den læses korrekt nu, i ModelCraft og i de andre apps, der læser DWG.
- **Tablets i stående format.** Ledig gitterhøjde går til lærredet, og arkoplægget starter ved 760 pixels bredde eller mindre. ModelCraft's stilark har også ændringen.
- **Sprog i Studio.** CadCraft Studio og de pakkede udgaver kan skifte sprog, mens de kører; før var de kun engelske. Dette er ikke testet på alle platforme endnu: fortæl os, hvis sproget ikke skifter.

### Ikke i denne version endnu

- **Ikke kodesigneret.** Windows kan vise SmartScreen: vælg {{ui:Flere oplysninger}}, og derefter {{ui:Kør alligevel}}. På en Mac: højreklik og vælg {{ui:Åbn}}. Butiksudgaver er sat på pause, og iPad- og iPhone-builden blev ikke genbygget til 0.8.1.
- Et andet program, der tegner billedet uden en renderingsmotor-add-on, panorama- eller stereokameraer og et himmelbillede via et andet program, og plug-in'en, der åbner Unreal-scenen, er ikke der endnu. Filerne skrives; plug-in'en er ikke udgivet og er ikke kørt i Unreal.
- Frie overflader: G3 og klasse A bliver ikke målt eller hævdet, og beskæring og legemer kommer senere.
- Billeder fra andre programmer er ikke pixel for pixel som vores: kun kameraet, solen, lamperne og eksponeringen matcher.
- 0.8.1-rettelsen af sprogskiftet i Studio er ikke testet på alle platforme.

Alt andet findes i [Ikke bygget endnu](topic:not-built-yet). For den forrige udgivelse, se [Nyheder i 0.7](topic:whats-new-0-7).
