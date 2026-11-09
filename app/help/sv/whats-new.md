---
title: Nyheter i 0.8 och 0.8.1
summary: Ett val av renderingsmotor med filer för andra program, frihandsytor i NURBS med uppmätt kontinuitet, en scen du beskriver för din assistent, ett material gjort av ett foto, en skissbild på marken, möblerade rum, snedsnitt för 3D-utskrift och utskriftskontrollen i panelen Problem.
keywords: nyheter, vad är nytt, versionsinfo, ändringslogg, ändringar, 0.8, 0.8.1, version, nya funktioner, renderingsmotor, motor, öppna i, usd, gltf, unreal, motor från tillägg, nurbs, ytor, loft, svep, kontinuitet, g0, g1, g2, zebra, step, iges, beskriv scenen, scen, väder, tid på dygnet, årstid, assistent, material från ett foto, foto, skissfoto, möblera, möblera ett rum, snedsnitt, dela, utskriftskontroll, problem, egenskapsrutnät, lampor, språk, indataenheter, verktygsfältsrader, dwg, live
from: e4989b17
---

Detta är vad som ändrades i ModelCraft 0.8 (2026-11-01) och 0.8.1 (2026-11-02), jämfört med 0.7. Dialogrutan {{ui:Rendera en bild…}} kan nu skicka scenen till ett annat program, panelen {{ui:Ytor}} gör släta frihandsytor, och en assistent som du ansluter kan ställa in en hel scen med en enda mening.

## Nytt

### Rendering

- **Ett val av motor.** {{ui:Rendera en bild…}} har en lista **Motor** ovanför Läge. Våra egna två motorer, Snabb och Strålspårning, är standard och fungerar överallt. Andra poster sparar scenen som ett paket (modellen som USD-fil, plus en inställningsfil med de exakta materialvärdena, de lampor som är på, solen, himlen, exponeringen och kameran) som du kan ta med till ett annat program. En bild som ritats av ett annat program anger vilket program och vilken version som gjorde den. Se [Välj vilket program som ritar bilden](topic:render-engines).
- **Öppna i ett annat program.** Listan Motor kan spara scenen som en USD-fil, en glTF-fil (`.glb`) eller en Unreal-projektmapp (`.zip`), i webbläsaren och i CadCraft Studio. I Studio kan den också starta usdview eller datorns eget program för filen. Se [Öppna scenen i ett annat program](topic:render-open-in).
- **Skicka till en spelmotor från Studio.** Studio skriver scenen till ett Unreal Engine-projekt och håller den uppdaterad vid varje sändning, bara åt ett håll. Dina egna ändringar ligger i ett lager som CadCraft aldrig skriver till. Se [Skicka scenen till en spelmotor](topic:render-unreal).
- **Motorer från tillägg.** Ett tillägg kan lägga till en motor i listan. En som skrivits i JavaScript ritar i webbläsaren och i Studio; en som kör ett program kräver ditt ja i Studio. Se [Rita bilden med ett annat program](topic:render-other-program) och [Lägg till en renderingsmotor med ett tillägg](topic:render-engine-addons).
- **Beskriv scenen.** Säg till din anslutna assistent ”skymning, lätt regn, höstträd, folk på torget” så ställer ModelCraft in det i ett steg: solen flyttar sig till datum och tid så att skuggorna följer, himlen ändras, blöta ytor visas, och träd och människor placeras som riktiga objekt på taggar som du kan dölja, flytta eller ta bort. Tid på dygnet, datum eller årstid samt väder (klart, mulet, dimma, lätt regn, regn, storm) fungerar också på egen hand, och en senare begäran ändrar samma scen. Dimma syns i den högkvalitativa bilden på grafikkortet; de andra motorerna visar himlen, ljuset och de blöta ytorna. Regn ritas inte som fallande streck.

### Material

- **Ett material från ett foto.** Ge ModelCraft ett foto av en yta (en vägg, ett golv, sten) så gör det ett upprepningsbart material: ljuset över fotot jämnas ut, kanterna görs så att de går ihop, och en färgkarta, en råhetskarta och en normalkarta räknas ut från bilden. Det är vanlig bildbehandling av din egen bild, utan någon tränad modell. Råheten är en uppskattning. Ett plant, kvadratiskt och rakt framifrån taget foto ger bästa upprepningsbara mönster; ett starkt mönster, som tegel, kan visa ett svagt spöke där skarven är utjämnad.

### Ytor

- **Frihandsytor.** Panelen {{ui:Ytor}} gör NURBS-kurvor och otrimmade ytor: kurvor genom punkter, loft, rätlinjiga ytor, extrudering, revolvering, svep längs en eller två skenor, ytor från ett kurvnät, plattor från fyra kanter, matchning och övergång. Varje gemensam kant mäts som G0, G1 eller G2 (glipa, vinkel, kurvaturhopp) på de exakta ytorna, och en kant som är sämre än du bad om visas i panelen Problem med en fix **Matcha**. Zebrastrimmor och kurvaturfärger ritas från de exakta ytorna. STEP- och IGES-filer går både ut och in. Se [Frihandsytor (NURBS)](topic:nurbs-surfaces).

### Tomt och rum

- **En skissbild på marken.** {{ui:Fil}} › {{ui:Importera ett skissfoto…}} gör en telefonbild av en handskiss till kanter på marken i den skala du anger: en grupp, med en tagg för varje pennfärg. Papperet hittas och räts ut på din dator, och inget skickas någonstans. Se [Modellera på en situationsplan](topic:site-plan).
- **Möblera ett rum.** Markera ett golv och använd {{ui:Organisera}} › {{ui:Möblera ett rum…}}. Sovrums-, vardagsrums-, matsals-, kök-, badrums- eller kontorsmöbler placeras efter regler, mot väggarna och fria från dörrar och fönster, i en grupp som du kan ta bort i ett steg. Det är en standardlayout för dig att granska, inte en design. Se [Startbiblioteket](topic:starter).

### 3D-utskrift

- **Snedsnitt.** Dela för utskrift kan luta sina snitt upp till 60 grader, vilket ger delarna större limyta. Kopplingar står vinkelrät mot snittet. Se [Dela en modell för utskrift](topic:print-split).
- **Utskriftskontrollen i Problem.** Resultaten från 3D-utskriftskontrollen visas i panelen Problem med markeringar på modellen, och Reparera åtgärdar dem därifrån. Se [Stöd, väggtjocklek, urholkning och reparation](topic:print-tools).

### I alla appar

- **Språk.** Hjälp och appar finns på 54 språk. Tio är nya: litauiska, lettiska, bosniska, marathi, telugu, albanska, afrikaans, filippinska, swahili och uzbekiska. Språk utöver engelska är maskinutkast tills en modersmålstalare har läst dem, och hjälpämnen kan fortfarande vara på engelska.
- **Indataenheter.** En styrplatta, en penna, en 3D-mus, en spelkontroll och MIDI-kontroller kan styra apparna, för alla eller för en.
- **Verktygsfältsrader.** {{ui:Inställningar}} › {{ui:Allmänt}} › Verktygsfältsrader anger Radbryt (som förut), 2 rader eller 1 rad. Ett fält som inte får plats rullar åt sidan i stället för att ta plats från ritningen. Radbryt är fortfarande standard.
- **Egenskapsrutnät.** ModelCraft:s lampfält använder det gemensamma rutnätet: hopfällbara kategorier, kolumner för etikett och värde, och Kompakt täthet. Inskriven aritmetik som `2*450` fungerar fortfarande.
- **Problem.** Panelen Problem (varningsknappen i appfältet) delas av alla apparna. I ModelCraft innehåller den utskriftskontrollen och varningarna för ytkontinuitet.
- **Live.** En Live TeamWork-session visar vem som är var. Se [Modellera tillsammans med Live TeamWork](topic:work-live).
- **Tillägg.** Tillägg kan lägga till renderingsmotorer, som ovan.
- **Koppla din AI.** Verktygskontraktet och kontrollerna för de åtta apparna klarar sig, med 454 verktyg totalt. Anslutning med ett klick i Studio, en hostad kontakt för webbläsarassistenter, din egen nyckel i Studio och ett publicerat paket är ännu inte utlovade. Apparna innehåller ingen AI av egen tillverkning. Se [Använd ModelCraft med AI-assistenter](topic:use-with-ai-assistants).

## Åtgärdat i 0.8.1

- **DWG-klassavsnittet.** Ett DWG-fils klassavsnitt lästes som fel typ, vilket kunde förstöra filen vid import. Det läses rätt nu, i ModelCraft och i de andra apparna som läser DWG.
- **Surfplattor i porträtt.** Ledig rutnätshöjd går till duken, och ritlayouten börjar vid 760 pixlar bredd eller mindre. ModelCraft:s formatmall har ändringen också.
- **Språk i Studio.** CadCraft Studio och de paketerade utgåvorna kan byta språk medan de körs; tidigare fanns de bara på engelska. Detta har ännu inte testats på alla plattformar: säg till om språket inte ändras.

## Inte i den här versionen ännu

- **Inte kodsignerad.** Windows kan visa SmartScreen: välj {{ui:Mer info}}, sedan {{ui:Kör ändå}}. På en Mac högerklickar du och väljer {{ui:Öppna}}. Butiksversioner är pausade, och iPad- och iPhone-versionen byggdes inte om för 0.8.1.
- Ett annat program som ritar bilden utan tillägg för renderingsmotorer, panorama- eller stereokameror och en himmelbild genom ett annat program, samt insticksprogrammet som öppnar Unreal-scenen, finns inte ännu. Filerna skrivs; insticksprogrammet är inte släppt och har inte körts i Unreal.
- Frihandsytor: G3 och klass A mäts inte och utlovas inte, och trimning och solider kommer senare.
- Bilder från andra program är inte pixel för pixel lika våra: bara kameran, solen, lamporna och exponeringen stämmer.
- Rättelsen i 0.8.1 för språkbytet i Studio är inte testad på alla plattformar.

Allt annat finns under [Finns inte ännu](topic:not-built-yet). För föregående version, se [Nyheter i 0.7](topic:whats-new-0-7).
