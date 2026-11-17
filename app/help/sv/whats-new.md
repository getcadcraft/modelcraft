---
title: Nyheter i 0.9
summary: Utskriftssteg med vår egen slicer och sändning via USB, Klipper, OctoPrint och PrusaLink, slicing för harts och filtillägg, materialflöde, digital tvilling- och fabriksgolvstillägg, NURBS-rundningar, förtjockning och skanningsanpassning, AR på plats och tio bågmetoder.
keywords: nyheter, vad är nytt, versionsanteckningar, ändringslogg, 0.9, utskriftssteg, 3d-utskrift, skicka till 3d-skrivare, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, harts, hartsutskrift, goo, sl1, ctb, anycubic, exponeringstest, materialflöde, digital tvilling, fabriksgolv, plc, transportband, nurbs, rundning, förtjockning, skanningsanpassning, ar, på plats, bågmetoder, enheter, ändringar, 0.8, 0.8.1, version, nya funktioner, renderingsmotor, motor, öppna i, usd, gltf, unreal, tilläggsmotor, ytor, loft, svep, kontinuitet, g0, g1, g2, zebra, step, iges, säg scenen, scen, väder, tid på dygnet, årstid, assistent, material från ett foto, foto, skissfoto, möblera, möblera ett rum, sluttning, sluttande snitt, dela, utskriftskontroll, problem, egenskapsrutnät, lampor, språk, indatoenheter, verktygsfältsrader, dwg, live
from: 169048a2
---

Det här är vad som ändrades i ModelCraft 0.9, jämfört med 0.8.1. ModelCraft når nu skrivaren och produktionsgolvet: du kan lägga saker på en utskriftsbädd och skicka dem utan att exportera, slicea för filament eller harts, och lägga upp en linje för materialhantering. Det här är CadCraft Studio 0.9 och dess åtta appar; de flesta av de nya funktionerna nedan är tillägg.

## Nytt

### 3D-utskrift

- **Utskriftssteg.** Klicka på {{ui:Utskriftssteg}} i verktygsfältet. Lägg till biblioteksobjekt på skrivarens bädd, ordna dem, titta igenom de slicade lagren och tryck på {{ui:Skicka till 3D-skrivare}}, utan någon STL att exportera. Det hör till tillägget 3D Print, som är påslaget som standard och kan tas bort som vilket tillägg som helst. Se [Lägg saker på utskriftsbädden och skicka dem till en skrivare](topic:print-stage).
- **Vår egen filamentslicer.** {{ui:CadCraft basic (ingår, snabbast)}} är slicern i kortets lista **Slicer**: väggar, skal, fyllning, stöd och en skirt, på en arbetare så att sidan förblir användbar. {{ui:Förhandsgranska lager}} med reglaget **Layer** visar lagren innan du skickar. Skrivarprofiler, som Ender-3- och Prusa MK4-stilarna, har sin egen start-G-kod.
- **Sändning.** Över USB (Chrome eller Edge på en dator, med sidan öppen), eller till Klipper (Moonraker), OctoPrint eller PrusaLink på ditt nätverk. Inget ansluter eller skickas utan ett klick, och sändning frågar först.
- **Andra slicers.** Kiri:Moto, PrusaSlicer och OrcaSlicer är egna tillägg, avstängda som standard; lägg till dem från kortet eller från {{ui:Settings}} › {{ui:Add-ons}}. PrusaSlicer och OrcaSlicer använder din egen installerade kopia från CadCraft Studio. Tillägget för Bambu Lab-skrivare slicar med din OrcaSlicer och dess P2S-profiler och kräver Studio på en dator.
- **Hartsutskrift.** Hartstilläggen (avstängda som standard) gör lagerbilder för skrivarens skärm, med urholkning och ventilationshål, en flotte och stöd, en lagerförhandsvisning, och tid, harts och kostnad. Filformatstilläggen skriver Elegoo GOO, SL1, Chitubox (CBDDLP och CTB 2 till 5) och Anycubic (PWMX och PWS). Ett hartsexponeringstest gör en stege med fem exponeringar. Se [Slicea för en hartsskrivare](topic:resin-printing).
- **Oförändrat.** {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}}, utskriftsverktygen och Dela för utskrift fungerar som i 0.8. Se [Gör en modell redo för 3D-utskrift](topic:print-3d).

### Materialflöde, digital tvilling och fabriksgolv

Dessa tre är tillägg, avstängda tills du slår på dem i {{ui:Settings}} › {{ui:Add-ons}}, och var och en har sin egen hjälp när den är på.

- **Materialflöde.** En panel med namnet Materialflöde lägger ut transportband, stationer, buffertar och AGV-banor i 3D-vyn, kör en simulering med fast frö, spelar upp den, och visar genomströmning, ledtider och köer, med resultaten sparade som CSV. Order kan komma från en CSV-fil. Robotceller kan kontrolleras och exporteras. PLC-länken har ett mjukt läge och ett riktigt läge över Modbus TCP, som bara fungerar i CadCraft Studio.
- **Digital tvilling.** Läser Materialflödes-layouten och kör en mjuk PLC på den, med fel du kan tvinga fram, lagertester, en layoutjämförelse och en materialförteckning.
- **Fabriksgolv.** Gör stationerna till maskiner och celler, läser dem live eller från en simulator, och håller en jobbkö och en enkel OEE. Den läser bara: den här versionen kan inte skriva till en maskin eller PLC.

### Ytor, modeller och ritning

- **Rundningar, förtjockning och booleska operationer på NURBS.** Panelen {{ui:Surfaces}} har {{ui:Fillet between faces}}, {{ui:Fillet several edges}}, {{ui:Thicken into a solid}} och Union, Subtract och Intersect, var och en med sin uppmätta avvikelse. Se [Fria ytor (NURBS)](topic:nurbs-surfaces).
- **Anpassa ytor till en skanning.** Markera en skannad nätmodell och använd {{ui:Fit surfaces to the scan}} i gruppen **Scan**, och sedan {{ui:Stitch the surfaces to a solid}}. Det är en första anpassning, inte ett fullständigt paket för reverse engineering.
- **En levande länk från en .3dm-modellerare.** Enkelriktad, från Rhino 8 eller Grasshopper, och den kräver CadCraft Studio på samma dator. Se [Håll en .3dm-modell levande](topic:live-3dm-link).
- **Se modellen på plats.** {{ui:View on site (AR, phone)}} i menyn {{ui:Views}} fungerar på en Android-telefon med Chrome. Se [Se modellen på plats med en Android-telefon (AR)](topic:ar-on-site).
- **Bågmetoder.** Rullgardinsmenyn {{ui:Arc methods}} erbjuder tio sätt att rita en båge, bland annat {{ui:3-Point}} och {{ui:Start, Center, End}}.
- **Fler enheter.** Vikter (kg, lb, t, ton) och temperaturer (grader C, F, K och R) förstås där du skriver värden med enheter.

## I alla appar

- **Verktygstips.** Hovertext på knappar och avkortade etiketter är ett Bootstrap-verktygstips.
- **Stängbart starttips.** Tipskortet på ett tomt ritningsområde har ett litet stängningskryss. Det förblir stängt, och kommandopaletten kan visa det igen.
- **Rullbara flikrader.** En panels flikrad som inte får plats rullar i stället för att skäras av.
- **Flikrubriker.** När ett dokument är öppet börjar webbläsarfliken med dokumentets namn, sedan ModelCraft och CadCraft. En punkt kommer först medan det är osparat.
- **Layout.** {{ui:Settings}} › {{ui:General}} › Layout har layouterna i en rullgardinsmeny, med ett val att använda en layout för just den här appen och en knapp för att återställa layouten.
- **Språk.** Språklistan i Inställningar följer språkfilerna som bygget innehåller. Andra språk än engelska är maskinutkast.
- **Live och Bibliotek.** Live TeamWork visar live-markörer och namn, och Bibliotekssamlingar ger varje app en standardsamling.

## Åtgärdat

- {{ui:Play}} blir {{ui:Pause}} medan en animation spelas, och {{key:Space}} spelar och pausar medan tidslinjen är öppen.
- Den stillbildsrendering faller tillbaka till WebGL när grafikkortet inte kan starta sökvägsspåraren. Den levande renderingsvyn kan fortfarande visa felet; det har inte kontrollerats på en Windows-dator med den drivrutinen.
- Materialflödets riktiga läge ansluter igen efter att en länk avslutats på PLC-undantagssvar.

## Ärliga begränsningar

- Ingenting har skrivits ut på en riktig skrivare: varken filament, harts eller via Bambu Connect. Hartsfiler har bara lästs tillbaka med CadCraft:s egna läsare.
- Den digitala tvillingen och fabriksgolvet har bara testats mot simulatorer och kända svar, utan någon riktig PLC, linje eller protokoll. De är kontrollhjälpmedel, inte en säkerhetsvalidering. Fysiken omfattar bara lådor, upp till åtta laster.
- Rhino- och Grasshopper-länken har aldrig körts i de riktiga programmen.
- Språk som inte är engelska är maskinutkast.

## Tidigare: 0.8 och 0.8.1

Det här är vad som ändrades i ModelCraft 0.8 (2026-11-01) och 0.8.1 (2026-11-02), jämfört med 0.7. Dialogrutan {{ui:Render a picture…}} kan nu skicka scenen till ett annat program, panelen Ytor skapar släta fria ytor, och en assistent du ansluter kan sätta en hel scen från en mening.

### Nytt

**Rendering**

- **Ett val av motor.** Dialogrutan {{ui:Render a picture…}} har en lista **Engine** ovanför Mode. Våra egna två motorer, Fast och Path tracer, är standard och fungerar överallt. Andra poster sparar scenen som ett paket (modellen som en USD-fil, plus en inställningsfil med de exakta materialvärdena, de lampor som är på, solen, himlen, exponeringen och kameran) som du kan ta med till ett annat program. En bild som ritats av ett annat program säger vilket program och vilken version som gjorde den. Se [Välj vilket program som ritar bilden](topic:render-engines).
- **Öppna i ett annat program.** Listan Engine kan spara scenen som en USD-fil, en glTF-fil (`.glb`) eller en Unreal-projektmapp (`.zip`), i webbläsaren och i CadCraft Studio. I Studio kan den också starta usdview eller datorns eget program för filen. Se [Öppna scenen i ett annat program](topic:render-open-in).
- **Skicka till en spelmotor från Studio.** Studio skriver scenen till ett Unreal Engine-projekt och håller det i takt vid varje sändning, bara åt ett håll. Dina egna redigeringar bor i ett lager som CadCraft aldrig skriver. Se [Skicka scenen till en spelmotor](topic:render-unreal).
- **Motorer från tillägg.** Ett tillägg kan lägga till en motor i listan. En som är skriven i JavaScript ritar i webbläsaren och i Studio; en som kör ett program kräver ditt ja i Studio. Se [Rita bilden med ett annat program](topic:render-other-program) och [Lägg till en renderingsmotor med ett tillägg](topic:render-engine-addons).
- **Säg scenen.** Berätta för din anslutna assistent "skymning, lätt regn, höstträd, människor på torget" och ModelCraft ställer in det i ett steg: solen flyttar till datum och tid så att skuggorna följer med, himlen ändras, blöta ytor dyker upp, och träd och människor placeras som riktiga objekt på taggar som du kan dölja, flytta eller ta bort. Tid på dygnet, datum eller årstid, och väder (klart, mulet, dimma, lätt regn, regn, storm) fungerar också var för sig, och en senare begäran ändrar samma scen. Dimma syns i bilden av hög kvalitet på grafikkortet; de andra motorerna visar himlen, ljuset och de blöta ytorna. Regn ritas inte som fallande strimmor.

**Material**

- **Ett material från ett foto.** Ge ModelCraft ett foto av en yta (en vägg, ett golv, sten) så gör det ett kakelmaterial: ljuset över fotot jämnas ut, kanterna görs att sammanfogas, och en färgkarta, en råhetskarta och en normalkarta räknas ut från bilden. Det är enkel bildbehandling på din egen bild, utan någon tränad modell. Råheten är en uppskattning. Ett plant, kvadratiskt, rakt framifrån taget foto ger bäst kakel; ett starkt mönster, till exempel tegel, kan visa ett mjukt spöke där skarven blandas.

**Ytor**

- **Fria ytor.** Panelen {{ui:Surfaces}} gör NURBS-kurvor och ytor utan trimning: kurvor genom punkter, loft, ruled, extrudera, revolvera, svep längs en eller två skenor, ytor från ett kurvnät, flikar från fyra kanter, matcha och blanda. Varje delad kant mäts som G0, G1 eller G2 (gap, vinkel, krökningssprång) på de exakta ytorna, och en kant som är sämre än du bad om visas i panelen Problem med en fix {{ui:Match}}. Zebrastrimmor och krökningsfärger ritas från de exakta ytorna. STEP- och IGES-filer går ut och in. Se [Fria ytor (NURBS)](topic:nurbs-surfaces).

**Plats och rum**

- **Ett skissfoto ned på marken.** {{ui:File}} › {{ui:Import a sketch photo…}} gör ett telefonfoto av en handskiss till kanter på marken i den skala du anger: en grupp, med en tagg för varje pennfärg. Papperet hittas och rätas ut på din dator, och ingenting skickas någonstans. Se [Modellera på en situationsplan](topic:site-plan).
- **Möblera ett rum.** Markera ett golv och använd {{ui:Organize}} › {{ui:Furnish a room…}}. Sovrums-, vardagsrums-, matsals-, kök-, badrums- eller kontorsmöbler placeras efter regler, mot väggarna och fria från dörrar och fönster, i en grupp som du kan ta bort i ett steg. Det är en standardlayout för dig att granska, inte en design. Se [Startbiblioteket](topic:starter).

**3D-utskrift**

- **Sluttande snitt.** Dela för utskrift kan luta sina snitt upp till 60 grader, vilket ger delarna mer limyta. Kopplingar står rätvinkligt mot snittet. Se [Dela en modell för utskrift](topic:print-split).
- **Utskriftskontrollen i Problem.** Fynden från 3D-utskriftskontrollen visas i panelen Problem med markörer på modellen, och Reparera åtgärdar dem därifrån. Se [Stöd, väggtjocklek, urholkning och reparation](topic:print-tools).

**I alla appar**

- **Språk.** Hjälp och appar finns på 54 språk. Tio är nya: litauiska, lettiska, bosniska, marathi, telugu, albanska, afrikaans, filippinska, swahili och uzbekiska. Språk som inte är engelska är maskinutkast tills en infödd talare har granskat dem, och hjälpämnen kan fortfarande vara på engelska.
- **Indataenheter.** En styrplatta, en penna, en 3D-mus, en spelkontroll och MIDI-reglage kan styra apparna, för alla eller för en.
- **Verktygsfältsrader.** {{ui:Settings}} › {{ui:General}} › Verktygsfältsrader sätter Wrap (som förut), 2 rader eller 1 rad. En list som inte får plats rullar åt sidan i stället för att ta plats från ritningen. Wrap är kvar som standard.
- **Egenskapsrutnät.** ModelCraft:s lampfält använder det delade rutnätet: hopfällbara kategorier, etikett- och värdekolumner, och tätheten Compact. Inskriven aritmetik, till exempel `2*450`, fungerar fortfarande.
- **Problem.** Panelen Problem (varningsknappen i appfältet) delas av alla apparna. I ModelCraft innehåller den utskriftskontrollen och varningarna för ytkontinuitet.
- **Live.** En Live TeamWork-session visar vem som är var. Se [Modellera tillsammans med Live TeamWork](topic:work-live).
- **Tillägg.** Tillägg kan lägga till renderingsmotorer, som ovan.
- **Anslut din AI.** Verktygskontraktet och kontrollerna för de åtta apparna går igenom, med 454 verktyg totalt. Anslutning med ett klick inne i Studio, en hostad koppling för webbläsarassistenter, din egen nyckel inne i Studio och ett publicerat paket är inte utlovade ännu. Apparna innehåller ingen egen AI. Se [Använd ModelCraft med AI-assistenter](topic:use-with-ai-assistants).

### Åtgärdat i 0.8.1

- **Avsnittet med klasser i DWG.** En DWG-fils klassavsnitt lästes som fel typ, vilket kunde förstöra filen vid import. Det läses rätt nu, i ModelCraft och i de andra apparna som läser DWG.
- **Surfplattor i porträtt.** Ledigt rutnätsutrymme går till duken, och ritlayouten börjar vid 760 pixlar i bredd eller mindre. ModelCraft:s formatmall har ändringen också.
- **Språk i Studio.** CadCraft Studio och de paketerade utgåvorna kan byta språk medan de kör; tidigare var de bara på engelska. Det här är inte testat på varje plattform ännu: säg till om språket inte ändras.

### Ännu inte med i den här versionen

- **Inte kodsignerad.** Windows kan visa SmartScreen: välj {{ui:Mer information}} och sedan {{ui:Kör ändå}}. På en Mac, högerklicka och välj {{ui:Öppna}}. Butiksversioner är på is, och iPad- och iPhone-versionen byggdes inte om för 0.8.1.
- Ett annat program som ritar bilden utan ett tillägg för renderingsmotor, panorama- eller stereokameror och en himmelsbild genom ett annat program finns inte ännu, och inte heller insticksprogrammet som öppnar Unreal-scenen. Filerna skrivs; insticksprogrammet är inte släppt och har inte körts i Unreal.
- Fria ytor: G3 och klass A mäts inte eller utlovas, och trimning och solider kommer senare.
- Bilder från andra program är inte pixel för pixel som våra: bara kamera, sol, lampor och exponering stämmer.
- Korrigeringen för språkbytet i Studio i 0.8.1 är inte testad på varje plattform.

Allt annat finns i [Finns inte ännu](topic:not-built-yet). För föregående version, se [Nyheter i 0.7](topic:whats-new-0-7).
