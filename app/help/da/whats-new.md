---
title: Nyheder i 0.9
summary: Printtrin med vores egen slicer og afsendelse via USB, Klipper, OctoPrint og PrusaLink, resin-slicing og filtilføjelser, materialeflow, digital tvilling og fabriksgulvtilføjelser, NURBS-afrundinger, fortykning og scanningstilpasning, AR på stedet og ti buemetoder.
keywords: nyheder, udgivelsesnoter, changelog, 0.9, printtrin, 3d-print, send til 3d-printer, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resin, resinprint, goo, sl1, ctb, anycubic, eksponeringstest, materialeflow, digital tvilling, fabriksgulv, plc, transportbånd, nurbs, afrunding, fortykning, scanningstilpasning, ar, på stedet, buemetoder, enheder, 0.8, 0.8.1, version, nye funktioner, renderingsmotor, motor, åbn i, usd, gltf, unreal, tilføjelsesmotor, flader, loft, sweep, kontinuitet, g0, g1, g2, zebra, step, iges, sig scenen, scene, vejr, tid på dagen, sæson, assistent, materiale fra et foto, foto, skitsefoto, møblér, møblér et rum, skråt snit, opdeling, printkontrol, problemer, egenskabsgitter, lamper, sprog, inputenheder, værktøjslinjerækker, dwg, live
from: 169048a2
---

Dette er, hvad der er ændret i ModelCraft 0.9 sammenlignet med 0.8.1. ModelCraft når nu printeren og fabriksgulvet: du kan lægge ting på en printseng og sende dem uden at eksportere, slice til filament eller resin, og planlægge en linje for materialehåndtering. Dette er CadCraft Studio 0.9 og dets otte programmer. De fleste af de nye funktioner nedenfor er tilføjelser.

## Nyt

### 3D-print

- **Printtrin.** Klik på {{ui:Printtrin}} i værktøjslinjen. Føj elementer fra biblioteket til printerens seng, ordn dem, kig igennem de slicede lag, og tryk på {{ui:Send til 3D-printer}}. Du behøver ikke eksportere en STL. Det hører til 3D-print-tilføjelsen, som er slået til som standard og kan fjernes ligesom enhver tilføjelse. Se [Læg ting på printsengen og send dem til en printer](topic:print-stage).
- **Vores egen filamentslicer.** {{ui:CadCraft basic (inkluderet, hurtigst)}} er slicer i kortets liste **Slicer**: vægge, skind, udfyldning, støtter og en skørt, på en worker, så siden forbliver brugbar. {{ui:Forhåndsvisning af lag}} med skyderen **Lag** viser lagene, før du sender. Printerprofiler som Ender-3- og Prusa MK4-stilene har deres egen start-G-kode.
- **Afsendelse.** Via USB (Chrome eller Edge på en computer, med siden åben), eller til Klipper (Moonraker), OctoPrint eller PrusaLink på dit netværk. Intet forbinder eller sender uden et klik, og afsendelse spørger først.
- **Andre slicere.** Kiri:Moto, PrusaSlicer og OrcaSlicer er hver sin tilføjelse, slået fra som standard. Tilføj dem fra kortet eller fra {{ui:Indstillinger}} › {{ui:Add-ons}}. PrusaSlicer og OrcaSlicer bruger din egen installerede kopi fra CadCraft Studio. Tilføjelsen til Bambu Lab-printere slicer med din OrcaSlicer og dens P2S-forudindstillinger og kræver Studio på en computer.
- **Resinprint.** Resin-tilføjelserne (slået fra som standard) laver lagbilleder til printerens skærm, med udhulning og udluftningshuller, en raft og støtter, en lagforhåndsvisning samt tid, resin og pris. Filformat-tilføjelser skriver Elegoo GOO, SL1, Chitubox (CBDDLP og CTB 2 til 5) og Anycubic (PWMX og PWS). En resin-eksponeringstest laver en stige med fem eksponeringer. Se [Slice til en resinprinter](topic:resin-printing).
- **Uændret.** {{ui:Eksportér}} › {{ui:Kontrollér til 3D-print (STL eller 3MF)…}}, printværktøjerne og Opdel til print fungerer som i 0.8. Se [Gør en model klar til 3D-print](topic:print-3d).

### Materialeflow, digital tvilling og fabriksgulv

Disse tre er tilføjelser, slået fra, indtil du slår dem til i {{ui:Indstillinger}} › {{ui:Add-ons}}. Hver har sin egen hjælp, når den er slået til.

- **Materialeflow.** Et panel ved navn Materialeflow lægger transportbånd, stationer, buffere og AGV-stier ud i 3D-visningen. Det kører en simulering med fast startværdi, afspiller den og viser gennemløb, leveringstider og køer, med resultater gemt som CSV. Ordrer kan komme fra en CSV-fil. Robotceller kan kontrolleres og eksporteres. PLC-forbindelsen har en blød tilstand og en rigtig tilstand over Modbus TCP, som kun virker i CadCraft Studio.
- **Digital tvilling.** Læser layoutet i Materialeflow og kører en blød PLC på det, med fejl du kan tvinge frem, lagertest, en layoutsammenligning og en stykliste.
- **Fabriksgulv.** Gør stationerne til maskiner og celler, læser dem live eller fra en simulator, og holder en jobkø og en simpel OEE. Den læser kun: denne build kan ikke skrive til en maskine eller PLC.

### Flader, modeller og tegning

- **Afrundinger, fortykning og booleske operationer på NURBS.** Panelet {{ui:Overflader}} har {{ui:Afrund mellem flader}}, {{ui:Afrund flere kanter}}, {{ui:Fortyk til massivt legeme}} og Forening, Træk fra og Fællesmængde. Hver har sin målte afvigelse. Se [Frie flader (NURBS)](topic:nurbs-surfaces).
- **Tilpas flader til en scanning.** Vælg et scannet net, og brug {{ui:Tilpas overflader til scanningen}} i gruppen **Scan**. Derefter bruger du {{ui:Sy overfladerne sammen til et legeme}}. Det er en første tilpasning, ikke en fuld pakke til reverse engineering.
- **Et levende link fra et .3dm-modelleringsprogram.** Én vej, fra Rhino 8 eller Grasshopper, og det kræver CadCraft Studio på samme computer. Se [Hold en .3dm-model levende](topic:live-3dm-link).
- **Se modellen på stedet.** {{ui:Vis på stedet (AR, telefon)}} i menuen {{ui:Visninger}} virker på en Android-telefon med Chrome. Se [Se modellen på stedet med en Android-telefon (AR)](topic:ar-on-site).
- **Buemetoder.** Rullelisten {{ui:Buemetoder}} tilbyder ti måder at tegne en bue på, herunder {{ui:3-punkt}} og {{ui:Start, centrum, slut}}.
- **Flere enheder.** Vægte (kg, lb, t, ton) og temperaturer (grader C, F, K og R) forstås, hvor du skriver værdier med enheder.

## I alle programmer

- **Værktøjstips.** Svævetekst på knapper og afkortede etiketter vises som et Bootstrap-værktøjstip.
- **Lukkeligt starttip.** Tipkortet på et tomt tegneområde har et lille luk-kryds. Det forbliver lukket, og kommandopaletten kan vise det igen.
- **Rullende fanelinjer.** En panels fanelinje, der ikke passer, ruller i stedet for at blive afskåret.
- **Fanetitler.** Når et dokument er åbent, starter browserfanen med dokumentets navn, derefter ModelCraft og CadCraft. En prik kommer først, mens dokumentet er ugemt.
- **Layout.** {{ui:Indstillinger}} › {{ui:Generelt}} › Layout har layouterne i en rulleliste. Der er et valg om at bruge en layout kun for dette program og en knap til at nulstille layoutet.
- **Sprog.** Sproglisten i Indstillinger følger de sprogfiler, buildet indeholder. Andre sprog end engelsk er maskinkladder.
- **Live og bibliotek.** Live TeamWork viser levende markører og navne. Bibliotekssamlinger giver hvert program en standardsamling.

## Rettet

- {{ui:Afspil}} skifter til {{ui:Pause}}, mens en animation spiller, og {{key:Space}} afspiller og pauser, mens tidslinjen er åben.
- Renderingen af stillbilleder falder tilbage til WebGL, når grafikkortet ikke kan starte path traceren. Visningen for live-render kan stadig vise fejlen. Det blev ikke kontrolleret på en Windows-maskine med den driver.
- Materialeflows rigtige tilstand forbinder igen, efter en forbindelse blev afbrudt af PLC-undtagelsessvar.

## Ærlige begrænsninger

- Intet er blevet printet på en rigtig printer: hverken filament, resin eller via Bambu Connect. Resinfiler er kun læst tilbage af CadCrafts egne læsere.
- Den digitale tvilling og Fabriksgulv er kun testet mod simulatorer og kendte svar, uden en rigtig PLC, linje eller protokol. De er kontrolhjælpemidler, ikke en sikkerhedsvalidering. Fysikken dækker kun bokse, op til otte belastninger.
- Rhino- og Grasshopper-linket er aldrig kørt i de rigtige programmer.
- Andre sprog end engelsk er maskinkladder.

## Tidligere: 0.8 og 0.8.1

Dette er, hvad der er ændret i ModelCraft 0.8 (2026-11-01) og 0.8.1 (2026-11-02), sammenlignet med 0.7. Dialogen {{ui:Render et billede…}} kan nu sende scenen til et andet program. Panelet Overflader laver glatte frie flader, og en assistent, du forbinder, kan sætte en hel scene med én sætning.

### Nyt

**Rendering**

- **Et valg af motor.** {{ui:Render et billede…}} har en liste **Motor** over Tilstand. Vores egne to motorer, Hurtig og Path tracer, er standard og virker overalt. Andre poster gemmer scenen som en pakke, så den kan tages med til et andet program. Pakken består af modellen som en USD-fil og en indstillingsfil med de præcise materialeværdier, de lamper, der er tændt, solen, himlen, eksponeringen og kameraet. Et billede tegnet af et andet program siger, hvilket program og hvilken version der lavede det. Se [Vælg hvilket program der tegner billedet](topic:render-engines).
- **Åbn i et andet program.** Motorlisten kan gemme scenen som en USD-fil, en glTF-fil (`.glb`) eller en Unreal-projektmappe (`.zip`), i browseren og i CadCraft Studio. I Studio kan den også starte usdview eller computerens eget program til filen. Se [Åbn scenen i et andet program](topic:render-open-in).
- **Send til en spilmotor fra Studio.** Studio skriver scenen ind i et Unreal Engine-projekt og holder det synkront ved hver afsendelse, kun én vej. Dine egne redigeringer ligger i et lag, som CadCraft aldrig skriver. Se [Send scenen til en spilmotor](topic:render-unreal).
- **Motorer fra tilføjelser.** En tilføjelse kan tilføje en motor til listen. En skrevet i JavaScript tegner i browseren og i Studio. En der kører et program, kræver dit ja i Studio. Se [Tegn billedet med et andet program](topic:render-other-program) og [Tilføj en renderingsmotor med en tilføjelse](topic:render-engine-addons).
- **Sig scenen.** Fortæl din forbundne assistent »skumring, let regn, efterårstræer, folk på pladsen«, og ModelCraft sætter det op i ét trin. Solen flytter til dato og klokkeslæt, så skyggerne følger med. Himlen ændrer sig, våde flader dukker op, og træer og mennesker placeres som rigtige objekter på tags, som du kan skjule, flytte eller slette. Tid på dagen, dato eller sæson og vejr (klart, overskyet, tåge, let regn, regn, storm) virker også alene. En senere anmodning ændrer den samme scene. Tåge vises i billedet i høj kvalitet på grafikkortet. De andre motorer viser himlen, lyset og de våde flader. Regn tegnes ikke som faldende striber.

**Materialer**

- **Et materiale fra ét foto.** Giv ModelCraft et foto af en overflade (en væg, et gulv, sten), og det laver et flisemateriale. Lyset over fotoet udjævnes, og kanterne gøres til at passe sammen. Et farvekort, et ruhedskort og et normalkort udledes af billedet. Det er almindelig billedbehandling af dit eget billede, uden en trænet model. Ruhed er et skøn. Et jævnt, kvadratisk foto lige forfra giver den bedste flise. Et stærkt mønster som mursten kan vise et blødt spøgelse, hvor samlingen blandes.

**Flader**

- **Frie flader.** Panelet {{ui:Overflader}} laver NURBS-kurver og utrimmede flader. Det gør kurver gennem punkter, loft, ruled, ekstrudér, drej, sweeps langs én eller to skinner, flader fra et kurvenet, flader fra fire kanter, match og blend. Hver fælles kant måles som G0, G1 eller G2 (hul, vinkel, krumningsspring) på de præcise flader. En kant, der er dårligere end du bad om, vises i panelet {{ui:Problemer}} med en rettelse, **Match**. Zebrastriber og krumningsfarver tegnes ud fra de præcise flader. STEP- og IGES-filer går ud og kommer ind. Se [Frie flader (NURBS)](topic:nurbs-surfaces).

**Grund og rum**

- **Et skitsefoto ned på jorden.** {{ui:Fil}} › {{ui:Importér et skitsefoto…}} gør et telefonfoto af en håndtegnet skitse til kanter på jorden i den skala, du angiver. Det bliver én gruppe, med et tag for hver pennefarve. Papiret findes og rettes ud på din computer, og intet sendes nogen steder hen. Se [Modellér på en situationsplan](topic:site-plan).
- **Møbler et rum.** Vælg en etage, og brug {{ui:Organisér}} › {{ui:Møbler et rum…}}. Soveværelses-, stue-, spisestue-, køkken-, badeværelses- eller kontormøbler placeres efter regler, op ad væggene og fri af døre og vinduer. De kommer i én gruppe, du kan fjerne på ét trin. Det er en standardopstilling til dig at gennemgå, ikke et design. Se [Startbibliotek](topic:starter).

**3D-print**

- **Skrå snit.** Opdel til print kan skråstille sine snit med op til 60 grader, hvilket giver stykkerne mere limflade. Forbindere står vinkelret på snittet. Se [Opdel en model til print](topic:print-split).
- **Printkontrollen i Problemer.** Resultaterne af 3D-printkontrollen vises i panelet {{ui:Problemer}} med markører på modellen. {{ui:Reparér}} retter dem derfra. Se [Støtter, vægtykkelse, udhulning og reparation](topic:print-tools).

**I alle programmer**

- **Sprog.** Hjælp og programmer findes på 54 sprog. Ti er nye: litauisk, lettisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili og usbekisk. Andre sprog end engelsk er maskinkladder, indtil en modersmålstaler har gennemgået dem. Hjælpeemner kan stadig være på engelsk.
- **Inputenheder.** Et trackpad, en pen, en 3D-mus, en spilcontroller og MIDI-kontroller kan styre programmerne, for dem alle eller for ét.
- **Værktøjslinjerækker.** {{ui:Indstillinger}} › {{ui:Generelt}} › Værktøjslinjerækker sætter Bryd (som før), 2 rækker eller 1 række. En linje, der ikke passer, ruller sideværts i stedet for at tage plads fra tegningen. Bryd forbliver standard.
- **Egenskabsgitter.** Lampefelterne i ModelCraft bruger det fælles gitter: sammenklappelige kategorier, etiket- og værdikolonner og Kompakt tæthed. Skrevet regning, såsom `2*450`, virker stadig.
- **Problemer.** Panelet Problemer (advarselsknappen i appbjælken) deles af alle programmerne. I ModelCraft rummer det printkontrollen og advarslerne om fladekontinuitet.
- **Live.** En Live TeamWork-session viser, hvem der er hvor. Se [Model sammen med Live TeamWork](topic:work-live).
- **Add-ons.** Add-ons kan tilføje renderingsmotorer, som ovenfor.
- **Forbind din AI.** Værktøjskontrakten og kontrollerne for de otte programmer består, med 454 værktøjer i alt. Forbindelse med ét klik i Studio, en hostet forbindelse til browserassistenter, din egen nøgle i Studio og en udgivet pakke er ikke lovet endnu. Programmerne har ingen egen AI. Se [Brug ModelCraft med AI-assistenter](topic:use-with-ai-assistants).

### Rettet i 0.8.1

- **DWG-klasseafsnit.** Et DWG-fils klasseafsnit blev læst som den forkerte type, hvilket kunne ødelægge filen ved import. Det læses rigtigt nu, i ModelCraft og i de andre programmer, der læser DWG.
- **Tablets i stående format.** Ledig gitterhøjde går til lærredet, og arklayoutet starter ved 760 pixels bredde eller mindre. ModelCraft-stilarket har også ændringen.
- **Sprog i Studio.** CadCraft Studio og de pakkede udgaver kan skifte sprog, mens de kører. Før var de kun engelske. Det er endnu ikke testet på alle platforme. Giv os besked, hvis sproget ikke skifter.

### Ikke i denne version endnu

- **Ikke kodesigneret.** Windows kan vise SmartScreen. Vælg {{ui:Mere info}} og derefter {{ui:Kør alligevel}}. På en Mac skal du højreklikke og vælge {{ui:Åbn}}. Store-builds er sat på pause, og iPad- og iPhone-buildet blev ikke genbygget til 0.8.1.
- Et andet program, der tegner billedet uden en renderingsmotor-tilføjelse, panorama- eller stereokameraer og et himmelbillede gennem et andet program, er der endnu ikke. Det samme gælder plug-in'et, der åbner Unreal-scenen. Filerne skrives. Plug-in'et er ikke udgivet, og det er ikke kørt i Unreal.
- Frie flader: G3 og klasse A er ikke målt eller påstået, og beskæring og massive legemer kommer senere.
- Billeder fra andre programmer er ikke pixel for pixel ens med vores. Kun kameraet, solen, lamperne og eksponeringen stemmer overens.
- Rettelsen i 0.8.1 af sprogskiftet i Studio er ikke testet på alle platforme.

Alt andet står i [Ikke lavet endnu](topic:not-built-yet). For den forrige udgivelse, se [Nyheder i 0.7](topic:whats-new-0-7).
