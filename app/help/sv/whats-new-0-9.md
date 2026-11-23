---
title: Nytt i 0.9 (tidigare)
summary: Utskriftssteg med vår egen skivare och skickning via USB, Klipper, OctoPrint och PrusaLink, hartsskivning och filtillägg, materialflöde, tillägg för digital tvilling och fabriksgolv, NURBS-rundningar, förtjockning och skanningsanpassning, AR på plats och tio bågmetoder.
keywords: nytt i 0.9, tidigare version, nytt, versionsinformation, ändringslogg, 0.9, utskriftssteg, 3d-utskrift, skicka till 3d-skrivare, skivare, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, harts, hartsutskrift, goo, sl1, ctb, anycubic, exponeringstest, materialflöde, digital tvilling, fabriksgolv, plc, transportör, nurbs, rundning, förtjockning, skanningsanpassning, ar, på plats, bågmetoder, enheter, ändringar, 0.8, 0.8.1, version, nya funktioner, renderingsmotor, motor, öppna i, usd, gltf, unreal, tilläggsmotor, ytor, loft, svep, kontinuitet, g0, g1, g2, zebra, step, iges, säg scenen, scen, väder, tid på dygnet, årstid, assistent, material från ett foto, foto, skissfoto, möblera, möblera ett rum, snedskärning, delning, utskriftskontroll, problem, egenskapsrutnät, lampor, språk, indataenheter, verktygsfältsrader, dwg, live
from: 2717d1b1
---

Det här är vad som ändrades i ModelCraft 0.9, jämfört med 0.8.1. ModelCraft når nu skrivaren och fabriksgolvet: du kan lägga saker på en utskriftsbädd och skicka dem utan att exportera, skiva för filament eller harts och lägga upp en linje för materialhantering. Det här är CadCraft Studio 0.9 och dess åtta appar; de flesta av de nya funktionerna nedan är tillägg.

## Nytt

### 3D-utskrift

- **Utskriftssteg.** Klicka på {{ui:Utskriftssteg}} i verktygsfältet. Lägg till biblioteksobjekt på skrivarens bädd, ordna dem, titta igenom de skivade lagren och tryck på {{ui:Skicka till 3D-skrivare}}, utan någon STL att exportera. Det hör till tillägget 3D-utskrift, som är påslaget som standard och kan tas bort som vilket tillägg som helst. Se [Lägg saker på utskriftsbädden och skicka dem till en skrivare](topic:print-stage).
- **Vår egen filamentskivare.** {{ui:CadCraft basic (ingår, snabbast)}} är skivaren i kortets lista **Skivare**: väggar, skal, fyllning, stöd och en skirt, i en bakgrundsprocess så att sidan förblir användbar. {{ui:Förhandsgranska lager}} med reglaget **Lager** visar lagren innan du skickar. Skrivarprofiler, som i Ender-3 och Prusa MK4, har sin egen start-G-kod.
- **Skickning.** Över USB (Chrome eller Edge på en dator, med sidan öppen), eller till Klipper (Moonraker), OctoPrint eller PrusaLink på ditt nätverk. Ingenting ansluts eller skickas utan ett klick, och vid skickning frågas du först.
- **Andra skivare.** Kiri:Moto, PrusaSlicer och OrcaSlicer är egna tillägg, avstängda som standard; lägg till dem från kortet eller från {{ui:Inställningar}} › {{ui:Tillägg}}. PrusaSlicer och OrcaSlicer använder din egen installerade kopia från CadCraft Studio. Tillägget för Bambu Lab-skrivare skivar med din OrcaSlicer och dess P2S-förinställningar och kräver Studio på en dator.
- **Hartsutskrift.** Hartstilläggen (avstängda som standard) gör lagerbilder för skrivarens skärm, med urholkning och ventilationshål, en flotte och stöd, en lagerförhandsvisning samt tid, harts och kostnad. Filformatstilläggen skriver Elegoo GOO, SL1, Chitubox (CBDDLP och CTB 2 till 5) och Anycubic (PWMX och PWS). Ett exponeringstest för harts gör en stege med fem exponeringar. Se [Skivning för en hartsskrivare](topic:resin-printing).
- **Oförändrat.** {{ui:Exportera}} › {{ui:Kontrollera för 3D-utskrift (STL eller 3MF)…}}, utskriftsverktygen och Dela för utskrift fungerar som i 0.8. Se [Gör en modell redo för 3D-utskrift](topic:print-3d).

### Materialflöde, digital tvilling och fabriksgolv

Dessa tre är tillägg, avstängda tills du slår på dem i {{ui:Inställningar}} › {{ui:Tillägg}}, och var och en har egen hjälp när den är påslagen.

- **Materialflöde.** En panel med namnet Materialflöde lägger ut transportörer, stationer, buffertar och AGV-banor i 3D-vyn, kör en simulering med ett fast slumpfrö, spelar upp den och visar genomströmning, ledtider och köer, med resultat sparade som CSV. Order kan komma från en CSV-fil. Robotceller kan kontrolleras och exporteras. PLC-länken har ett mjukt läge och ett riktigt läge över Modbus TCP, som bara fungerar i CadCraft Studio.
- **Digital tvilling.** Läser layouten från Materialflöde och kör en mjuk PLC på den, med fel du kan tvinga fram, lagertester, en layoutjämförelse och en materialförteckning.
- **Fabriksgolv.** Gör om stationerna till maskiner och celler, läser dem live eller från en simulator, och håller en jobbkö och en enkel OEE. Det läser bara: den här versionen kan inte skriva till en maskin eller PLC.

### Ytor, modeller och ritning

- **Rundningar, förtjockning och booleska operationer på NURBS.** Panelen {{ui:Ytor}} har {{ui:Rundning mellan ytor}}, {{ui:Runda flera kanter}}, {{ui:Förtjockna till solid}} och Union, Subtract och Intersect, var och en med sitt uppmätta avvikelsevärde. Se [Friformsytor (NURBS)](topic:nurbs-surfaces).
- **Anpassa ytor till en skanning.** Markera en skannad mesh och använd {{ui:Anpassa ytor till skanningen}} i gruppen **Skanning**, och sedan {{ui:Sy ihop ytorna till en solid}}. Det är en första anpassning, inte ett fullständigt paket för återkonstruktion.
- **En live-länk från en .3dm-modellerare.** Enkelriktad, från Rhino 8 eller Grasshopper, och den kräver CadCraft Studio på samma dator. Se [Håll en .3dm-modell live](topic:live-3dm-link).
- **Se modellen på plats.** {{ui:Visa på plats (AR, telefon)}} i menyn {{ui:Vyer}} fungerar på en Android-telefon med Chrome. Se [Se modellen på plats med en Android-telefon (AR)](topic:ar-on-site).
- **Bågmetoder.** Listrutan {{ui:Bågmetoder}} erbjuder tio sätt att rita en båge, inklusive {{ui:3-punkt}} och {{ui:Start, Centrum, Slut}}.
- **Fler enheter.** Vikter (kg, lb, t, ton) och temperaturer (grader C, F, K och R) förstås där du skriver värden med enheter.

## I alla appar

- **Verktygstips.** Text som visas vid pekning på knappar och avklippta etiketter är en Bootstrap-verktygstips.
- **Stängbart starttips.** Tipskortet på ett tomt ritningsområde har ett litet stängningskryss. Det förblir stängt, och kommandopaletten kan visa det igen.
- **Rullbara flikrader.** En panels fliklist som inte får plats rullar i stället för att klippas av.
- **Flikrubriker.** När ett dokument är öppet börjar webbläsarfliken med dokumentets namn, sedan ModelCraft och CadCraft. En punkt visas först medan det är osparat.
- **Layout.** {{ui:Inställningar}} › {{ui:Allmänt}} › Layout har layouterna i en listruta, med ett val för att använda en layout bara för den här appen och en knapp för att återställa layouten.
- **Språk.** Språklistan i Inställningar följer språkfilerna som bygget innehåller. Andra språk än engelska är maskinutkast.
- **Live och bibliotek.** Live TeamWork visar live-markörer och namn, och bibliotekssamlingar ger varje app en standardsamling.

## Åtgärdat

- {{ui:Spela upp}} byts ut mot {{ui:Paus}} medan en animation spelas, och {{key:Space}} spelar upp och pausar när tidslinjen är öppen.
- Stillbildsrendering faller tillbaka till WebGL när grafikkortet inte kan starta path tracer. Livevyn för rendering kan fortfarande visa felet; det har inte kontrollerats på en Windows-dator med den drivrutinen.
- Materialflödets riktiga läge ansluter igen efter att en länk avslutats på PLC-undantagssvar.

## Ärliga begränsningar

- Inget har skrivits ut på en riktig skrivare: varken filament, harts eller via Bambu Connect. Hartsfiler har bara lästs tillbaka av CadCrafts egna läsare.
- Den digitala tvillingen och fabriksgolvet har testats bara mot simulatorer och kända svar, utan någon riktig PLC, linje eller protokoll. De är kontrollhjälpmedel, inte en säkerhetsvalidering. Fysiken täcker bara lådor, upp till åtta laster.
- Rhino- och Grasshopper-länken har aldrig körts i de riktiga programmen.
- Språk som inte är engelska är maskinutkast.

## Tidigare: 0.8 och 0.8.1

Det här är vad som ändrades i ModelCraft 0.8 (2026-11-01) och 0.8.1 (2026-11-02), jämfört med 0.7. Dialogrutan {{ui:Rendera en bild…}} kan nu skicka scenen till ett annat program, panelen Ytor skapar släta friformsytor, och en assistent du ansluter kan ställa in en hel scen från en mening.

### Nytt

**Rendering**

- **Ett val av motor.** {{ui:Rendera en bild…}} har en listruta **Motor** ovanför Läge. Våra egna två motorer, Snabb och Path tracer, är standard och fungerar överallt. Andra poster sparar scenen som ett paket (modellen som en USD-fil, plus en inställningsfil med de exakta materialvärdena, de lampor som är påslagna, solen, himlen, exponeringen och kameran) för att ta till ett annat program. En bild ritad av ett annat program anger vilket program och vilken version som gjorde den. Se [Välj vilket program som ritar bilden](topic:render-engines).
- **Öppna i ett annat program.** Listrutan Motor kan spara scenen som en USD-fil, en glTF-fil (`.glb`) eller en Unreal-projektmapp (`.zip`), i webbläsaren och i CadCraft Studio. I Studio kan den också starta usdview eller datorns eget program för filen. Se [Öppna scenen i ett annat program](topic:render-open-in).
- **Skicka till en spelmotor från Studio.** Studio skriver scenen till ett Unreal Engine-projekt och håller det i takt vid varje skickning, endast åt ett håll. Dina egna ändringar ligger i ett lager som CadCraft aldrig skriver. Se [Skicka scenen till en spelmotor](topic:render-unreal).
- **Motorer från tillägg.** Ett tillägg kan lägga till en motor i listan. En motor skriven i JavaScript ritar i webbläsaren och i Studio; en som kör ett program kräver ditt godkännande i Studio. Se [Rita bilden med ett annat program](topic:render-other-program) och [Lägg till en renderingsmotor med ett tillägg](topic:render-engine-addons).
- **Säg scenen.** Berätta för din anslutna assistent ”skymning, lätt regn, höstträd, folk på torget” så ställer ModelCraft in det i ett steg: solen flyttar sig till datum och tid så att skuggorna följer med, himlen ändras, våta ytor uppstår, och träd och människor placeras som riktiga objekt med taggar som du kan dölja, flytta eller ta bort. Tid på dygnet, datum eller årstid, och väder (klart, mulet, dimma, lätt regn, regn, storm) fungerar också var för sig, och en senare begäran ändrar samma scen. Dimma syns i den högkvalitativa bilden på grafikkortet; de andra motorerna visar himlen, ljuset och de våta ytorna. Regn ritas inte som fallande streck.

**Material**

- **Ett material från ett foto.** Ge ModelCraft ett foto av en yta (en vägg, ett golv, sten) så gör den ett kaklat material: ljussättningen över fotot jämnas ut, kanterna görs så att de går ihop, och en färgkarta, en råhetskarta och en normalkarta tas fram från bilden. Det är ren bildbehandling av din egen bild, utan någon tränad modell. Råheten är en uppskattning. Ett plant, kvadratiskt, rakt framifrån taget foto ger den bästa kakeln; ett starkt mönster, som tegel, kan visa ett mjukt spöke där skarven blandas.

**Ytor**

- **Friformsytor.** Panelen {{ui:Ytor}} skapar NURBS-kurvor och obeskurna ytor: kurvor genom punkter, loft, linjär yta, extrudering, revolvering, svep längs en eller två skenor, ytor från ett kurvnät, ytor från fyra kanter, matchning och övergångar. Varje delad kant mäts som G0, G1 eller G2 (glapp, vinkel, krökningssprång) på de exakta ytorna, och en kant som är sämre än du bad om visas i panelen Problem med en fix för **Match**. Zebrastrimmor och krökningsfärger ritas från de exakta ytorna. STEP- och IGES-filer går ut och in. Se [Friformsytor (NURBS)](topic:nurbs-surfaces).

**Plats och rum**

- **Ett skissfoto på marken.** {{ui:Fil}} › {{ui:Importera ett skissfoto…}} omvandlar ett telefonfoto av en handskiss till kanter på marken i den skala du anger: en grupp, med en tagg för varje pennfärg. Papperet hittas och rätas ut på din dator, och ingenting skickas någonstans. Se [Modellera på en situationsplan](topic:site-plan).
- **Möblera ett rum.** Markera ett golv och använd {{ui:Organisera}} › {{ui:Möblera ett rum…}}. Sovrums-, vardagsrums-, matsals-, kök-, badrums- eller kontorsmöbler placeras efter regler, mot väggarna och fria från dörrar och fönster, i en grupp som du kan ta bort i ett steg. Det är en standardlayout för dig att granska, inte en design. Se [Startbibliotek](topic:starter).

**3D-utskrift**

- **Snedskärningar.** Dela för utskrift kan snedställa sina snitt upp till 60 grader, vilket ger delarna mer limningsyta. Kopplingar står rätvinkligt mot snittet. Se [Dela en modell för utskrift](topic:print-split).
- **Utskriftskontrollen i Problem.** Resultaten från 3D-utskriftskontrollen visas i panelen Problem med markörer på modellen, och Reparera åtgärdar dem därifrån. Se [Stöd, väggtjocklek, urholkning och reparation](topic:print-tools).

**I alla appar**

- **Språk.** Hjälpen och apparna finns på 54 språk. Tio är nya: litauiska, lettiska, bosniska, marathi, telugu, albanska, afrikaans, filippinska, swahili och uzbekiska. Andra språk än engelska är maskinutkast tills en infödd talare har läst dem, och hjälpämnen kan fortfarande vara på engelska.
- **Indataenheter.** En styrplatta, en penna, en 3D-mus, en spelkontroll och MIDI-reglage kan styra apparna, för alla eller för en.
- **Verktygsfältsrader.** {{ui:Inställningar}} › {{ui:Allmänt}} › Verktygsfältsrader ställer in Radbryt (som tidigare), 2 rader eller 1 rad. Ett fält som inte får plats rullar i sidled i stället för att ta plats från ritningen. Radbryt är fortfarande standard.
- **Egenskapsrutnätet.** ModelCraft:s lampfält använder det delade rutnätet: fällbara kategorier, etikett- och värdekolumner samt Kompakt täthet. Inskrivna räkneuttryck som `2*450` fungerar fortfarande.
- **Problem.** Panelen Problem (varningsknappen i appraden) delas av alla apparna. I ModelCraft innehåller den utskriftskontrollen och varningarna för ytkontinuitet.
- **Live.** En Live TeamWork-session visar vem som är var. Se [Modellera tillsammans med Live TeamWork](topic:work-live).
- **Tillägg.** Tillägg kan lägga till renderingsmotorer, som ovan.
- **Anslut din AI.** Verktygskontraktet och kontrollerna i de åtta apparna klarar sig, med 454 verktyg totalt. Anslutning med ett klick i Studio, en hostad anslutning för webbläsarassistenter, din egen nyckel i Studio och ett publicerat paket är inte utlovade ännu. Apparna innehåller ingen egen AI. Se [Använd ModelCraft med AI-assistenter](topic:use-with-ai-assistants).

### Åtgärdat i 0.8.1

- **DWG-klassavsnittet.** Ett DWG-filens klassavsnitt lästes som fel typ, vilket kunde förstöra filen vid import. Det läses rätt nu, i ModelCraft och i de andra apparna som läser DWG.
- **Surfplattor i porträtt.** Ledigt rutnätsutrymme går till duken, och bladlayouten startar vid 760 pixlar bredd eller mindre. ModelCraft:s formatmall har ändringen också.
- **Språk i Studio.** CadCraft Studio och de paketerade utgåvorna kan byta språk medan de körs; tidigare var de bara på engelska. Det här har inte testats på varje plattform ännu: berätta för oss om språket inte byts.

### Finns inte i den här versionen ännu

- **Inte kodsignerad.** Windows kan visa SmartScreen: välj {{ui:Mer information}} och sedan {{ui:Kör ändå}}. På en Mac: högerklicka och välj {{ui:Öppna}}. Butiksversioner är pausade, och iPad- och iPhone-bygget byggdes inte om för 0.8.1.
- Att ett annat program ritar bilden utan ett renderingsmotortillägg, panorama- eller stereokameror och en himmelbild genom ett annat program, samt insticksmodulen som öppnar Unreal-scenen finns inte ännu. Filerna skrivs; insticksmodulen är inte släppt och har inte körts i Unreal.
- Friformsytor: G3 och klass A mäts inte och utlovas inte, och trimning och solider kommer senare.
- Bilder från andra program är inte pixel för pixel lika våra: bara kameran, solen, lamporna och exponeringen stämmer.
- Åtgärden för 0.8.1 för språkbytet i Studio är inte testad på varje plattform.

Allt annat finns i [Finns inte ännu](topic:not-built-yet). För den föregående versionen, se [Nytt i 0.7](topic:whats-new-0-7).
