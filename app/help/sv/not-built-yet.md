---
title: Finns inte ännu
summary: Vad den här versionen av ModelCraft inte gör ännu, och vad du gör i stället idag.
keywords: saknas, inte ännu, begränsningar, färdplan, material, texturer, text, lager, trimma, dela, moln, skrivbord
from: 179fa5e4
---

ModelCraft är en tidig version. Den här sidan listar vad den inte gör ännu, så att du inte letar efter det, och det närmaste sättet att få jobbet gjort idag.

## Ritverktyg

| Inte ännu | I stället, idag |
|---|---|
| Frihandsritning | Klicka ut punkterna med {{ui:Kurva}} |
| Ändra antalet segment på en båge eller cirkel efter att den ritats | Radera den och rita om efter att ha skrivit `24s` |
| Välja typsnitt för [3D-text](topic:text3d), eller redigera dess ord efter att den placerats | Ta bort den och lägg till texten igen |
| Ändra en vinkel genom att skriva i ett vinkelmått, eller en cylinders storlek från dess cirkels mått | Rotera kanterna med {{ui:Rotera}}; skala cylindern med {{ui:Skala}} |
| Mått i exporterade modellfiler | Mått visas i bilder, utskrifter och PDF-filer av vyn; modellfiler innehåller bara geometri |
| Trimma, Dela och Yttre skal | [Union, Subtrahera och Skär](topic:solids) slutna grupper, eller [skär ytor](topic:intersect) och radera det du inte behöver |
| Välja rotationsaxel med piltangenterna | Klicka på {{ui:Rotera}}-centrum på en yta som vetter åt det håll axeln ska peka |
| Lås på mer än en inferens åt gången | Lås en riktning med en piltangent och fånga sedan en punkt |
| Ändra storlek längs en sluttning, eller från en måttände som inte ligger i ett hörn | Placera måttet på två hörn, längs en kant eller längs rött, grönt eller blått |

## Animering

| Inte ännu | I stället, idag |
|---|---|
| Animera ytor, kanter, solens tid på dygnet, stilen eller vad som är dolt | Gör den rörliga delen till en grupp eller komponent; rendera en separat video för en annan tid på dygnet |
| En kamera som följer en ritad bana, eller riktas mot ett rörligt objekt | Sätt fler kameranycklar längs vägen ([Animera](topic:animation)) |
| Ljud i videor, och högkvalitativa (path-traced) videor utan WebGPU | Lägg till ljud i ett videoredigeringsprogram; utan WebGPU renderar du videon med den snabba renderaren ([Rendera videon](topic:animation#render-the-video)) |
| Animerade lampor (ljusstyrka, spridning, färg) i en renderad video, en linsvinkel som animeras utan kameranycklar i en video, animering av material eller renderinställningar | Lampor animeras i vyn; för en video, nyckla kameran också för en zoom; rendera separata videor för olika lampinställningar ([Animera valfri egenskap](topic:animate)) |
| Spegling av vikter eller ben från en sida till den andra, benkuvert du kan se, visning av vikter skuggade punkt för punkt (de visas per yta), att se det posade nätet när du målar vikter | Måla båda sidorna, eller gör en halva och använd en Spegel-modifierare innan armaturen läggs till; växla mellan Måla vikter och Posera för att kontrollera |
| Ben lästa från glTF-, FBX- eller USD-filer som en armatur, och armaturer skrivna till dessa filer | Skinnade modeller kommer in i viloläge med filens vikter; lägg till benen i filens ledordning och välj sedan {{ui:Använd filens vikter}} ([Animera](topic:animate)) |
| Flytta ett IK-mål eller en pol genom att dra det i vyn, välja en begränsnings egna rum (lokalt eller globalt), sträcka IK-kedjor, IK längs en kurva | Skriv in målets punkt, eller sikta på ett objekt och flytta det; håll kedjorna i deras längder |
| Tyg, vätskor, mjuka kroppar, leder och gångjärn mellan stela kroppar, kollision med ett objekts exakta form (bara lådor och bollar runt den), en levande simulering medan du spelar, en startfart eller rotation (kroppar startar i vila) | Baka stela kroppar och spela upp nycklarna; bygg ett gångjärn av nycklar; dela en udda form i lådor (grupper) |
| Exportera animeringen till glTF eller andra modellfiler | Rendera en video; filen `.modelcraft`, och en [USD-fil](topic:usd) som ModelCraft sparade, behålls för ModelCraft |
| Skriva en kommentar eller titel på ett ärende i VR, röstanteckningar, flytta ett snittplan för hand i VR | Placera ärendet i VR och lägg sedan till texten i ett BCF-program; ställ in ett snittplan i vyn innan du går in: se [Granska modellen i ett VR-headset](topic:vr-review) |
| Se personer vid skrivbordet i VR (bara personer i VR visas), spela in en VR-promenad | Be dem ansluta sig i VR, eller gör en [animering](topic:animation) av promenaden |

## Nät

| Inte ännu | I stället, idag |
|---|---|
| Skulptering per nivå (multiupplösning), och Detaljer som tar bort trianglar som blivit små | [Skulptera](topic:sculpt) ett underdelat nät; {{ui:Gör om nät}} för att jämna ut det igen |
| En omtriangulering till fyrsidiga ytor som följer formen | {{ui:Gör om nät}} (jämna trianglar), och bygg sedan om det med [Retopologi](topic:mesh-edit#retopology) |
| Vikter målade på hörn för modifierare (Displace, Smooth och Shrinkwrap arbetar på hela nätet) | Tillämpa modifieraren och skulptera eller redigera delarna som behöver det |
| Kopiera och klistra in hörn, kanter eller ytor, ett knivsnitt som slutar inuti en yta, trådkanter utan yta | Duplicera nätet i Modell; kniv från kant till kant; [extrudera](topic:mesh-edit#change-the-shape) öppna kanter till ytor |

## Ordna och visa

| Inte ännu | I stället, idag |
|---|---|
| Lager i DWG- och DXF-situationsplaner som taggar | Situationsplanen kommer in som en enda grupp: spräng den och gruppera de delar du vill tagga |
| Flera snitt samtidigt, en snittlåda, eller ett snitts kontur exporterad som ritning | Ett [snittplan](topic:sections) skär åt gången; exportera vyn som bild |
| Visa mjuka kanter streckade, eller mjukgöra medan du drar i ett reglage | [Mjuka upp efter vinkel](topic:soften) i {{ui:Entitetsinfo}}, och ångra för att prova en annan vinkel |
| Ett onlinebibliotek med modeller att söka i, eller komponenter med val (färg, stil) | [Startbiblioteket](topic:starter); importera Collada-, OBJ- eller glTF-modeller; [töj](topic:stretch) en kopia till storlek |
| Placera växter från växtbiblioteket | [Sprid](topic:live-view#scatter-plants-rocks-and-people) växter i live-vyn, eller placera ett träd från startbiblioteket |
| Oberoende kopior av en grupp | Gör den till en komponent och använd sedan {{ui:Gör unik}} (se [Felsökning](topic:troubleshooting#editing-one-group-changed-another)) |

## Rendering

| Inte ännu | I stället, idag |
|---|---|
| Rendering i vyn (arbetsytan {{ui:Rendera}}), renderingskön, och kamera-, himmelsbild-, dimma- och ljusblandningsalternativ utan WebGPU | {{ui:Rendera en bild…}} i {{ui:Hög kvalitet}} använder WebGL-path tracern där, utan dessa alternativ ([Rendera en bild](topic:render#high-quality)) |
| Ett annat program som ritar renderingsbilden utan ett tillägg för renderingsmotor (CadCraft kör aldrig ett program under GNU GPL-licensen); panorama- eller stereokameror och en himmelsbild genom ett annat program; insticksprogrammet för Unreal Engine (filerna skrivs, men insticksprogrammet som öppnar dem är inte släppt) | Våra egna motorer Fast och Path tracer; ett tilläggs motor ([rita bilden med ett annat program](topic:render-other-program)); en USD-, glTF- eller Unreal-mappfil från listan Motor, att ta till vilket program som helst |
| Spridda växter och stenar i {{ui:Rendera en bild…}} | De visas i [live-vyn](topic:live-view), dess panoramor, visare och video |

## Material och färger

| Inte ännu | I stället, idag |
|---|---|
| Indata utöver grundfärg, grovhet, metallicitet, opacitet, normal och emission som ändras över en yta i högkvalitativa bilder (de använder sitt medelvärde) | [Gör material med noder](topic:shading): koppla dem ändå, vyn visar att de varierar |
| Förskjutning på dra-och-skjut-ytor | Konvertera objektet till ett nät för förskjutning |
| Dela egna material till biblioteket från appen, och packade (ARM/ORM) eller EXR-kartor i en importerad texturuppsättning | Behåll dem i filen; importera de separata kartorna som PNG eller JPEG |
| Filens material i Live TeamWork-sessioner (de stannar på datorn som skapade dem) | Spara filen och dela den |
| Dekaler som böjer sig runt krökta ytor, dekaler i {{ui:Ångra}}, eller att måla flera ytors texturer på en gång över en söm | Placera mindre dekaler på varje del; måla varje sida av en söm för sig |
| Bakning på dra-och-skjut-ytor, bakning av flera objekt till en bild, en bur du formar för hand, eller bakad belysning från lampor | Konvertera till nät och veckla ut det; baka varje objekt; höj sökavståndet; rendera en bild för lampljus |
| Måla grovhet, metallicitet eller höjd, måla med bilder (stämplar) och texturmålning större än 512 × 512 | Måla grundfärgen här; gör andra kartor i ett bildredigeringsprogram och importera dem som en texturuppsättning |
| Texturer i Collada-, STL-, PLY-, 3MF-, IFC-, DWG- och DXF-exporter, och nodgrafer för filens egna material i exporterade modeller | De formaten får varje materials färg; glTF och OBJ bär importerade texturer; exportera ett material för sig som [MaterialX](topic:shading#materialx); [USD](topic:usd) behåller hela modellen för ModelCraft |
| Texturer i Collada-filer | De räknas och utelämnas vid import; texturer i `.skp`- och `.glb`-filer kommer in |

## Filer

| Inte ännu | I stället, idag |
|---|---|
| Spara SketchUp-filer, och text och mått från dem | [Importera](topic:import-sketchup-files) behåller ytor, färger och texturer; exportera Collada (`.dae`) för att gå tillbaka till SketchUp |
| Mått och hjälplinjer i DWG- och DXF-exporter | Lägg till dem i CAD-programmet efter exporten |
| Punkter, tabeller och flerhänvisningar från DWG och DXF | De räknas och utelämnas; text kommer in som enkellinjig skrift, inte ritningens typsnitt |
| Ytor, nät, tabeller och flerhänvisningar från DWG och DXF; ytor på 3D-solider på svepta, lofta eller andra fria ytor | De räknas och utelämnas också (3D-solider i sig kommer in). Exportera de delarna från CAD-programmet som OBJ eller Collada och importera det |
| IFC-typer, egenskaper eller material | IFC-exporten har [våningsplan](topic:formats#ifc-ifc) och generiska element; lägg till resten i ett BIM-program |
| Skicka en modell direkt till BimCraft | Exportera {{ui:IFC för BimCraft (.ifc)}} och öppna den i BimCraft |
| Lösa kanter i glTF och STL | Använd OBJ eller Collada för linjearbete |
| glTF- och FBX-material utöver grundfärgen (metall, grovhet, normalkartor, glas, klarlack, sheen…) | De läses in och listas; ModelCraft behåller grundfärgen eller texturen. Bygg upp utseendet igen i [Skuggningsarbetsytan](topic:shading) |
| glTF-ben, animeringar och morph-targets | Skinnade modeller kommer in stående i viloläge; animera i [tidslinjen](topic:animation) |
| Färger och delarnas namn i sammanställningen från STEP-filer | Delar kommer in som nät i sin sanna storlek; [måla](topic:paint) och namnge dem efter importen |
| SubD-objekt, text, mått och ljus från `.3dm`-filer | Se [vad som utelämnas](topic:import-3dm-files#what-is-left-out-and-said); gör om SubD till nät i programmet som skapade filen |
| KTX2-texturer och materialvarianter i glTF | Exportera med PNG- eller JPEG-texturer; standardvarianten används |
| Skriva glTF-instansiering (EXT_mesh_gpu_instancing) | Komponenter skrivs en gång och placeras många gånger, vilket alla visare läser |
| Alembic-animering (varje sampel i en cache), Alembic-punkter och kurvor, skrivning av Alembic | Det första samplet kommer in; animera i [tidslinjen](topic:animation); skriv glTF, USD eller OBJ |
| Bump- och normalkartor i OBJ-material | Bara färgbilden (`map_Kd`) kommer in |
| FBX-ben och animering, FBX-export, FBX 6-filer | Skinnade modeller kommer in i vila; exportera glTF; spara gamla filer som FBX 2011 eller nyare |
| Collada-skinn, morphs, kameror, ljus, look-at- och skevningstransformationer, externa referenser | Utelämnas vid import och räknas i meddelandet |
| Säkerhetskopior | {{ui:Spara som}} ({{key:Mod+Shift+S}}) sparar en annan kopia. Efter en krasch erbjuder ModelCraft ditt osparade arbete ("Återställ ditt arbete?") |
| Molnsparande och synkronisering mellan datorer | Inte tillgängligt än. Spara filer på din dator, och kopiera dem dit du behöver |

## 3D-utskrift

| Inte ännu | I stället, idag |
|---|---|
| Riktiga stöd i slicern (gränssnitt, flotte, det exakta stödmönstret) | [Förhandsvisningen av stöd](topic:print-tools#supports-preview) visar var och ungefär hur mycket; slicerns förhandsvisning visar de riktiga |
| Reda ut en del som går igenom sig själv, eller kanter där tre eller fler ytor möts | [Reparera](topic:print-tools#repair) listar dem med var de finns; använd [Skär ytor](topic:intersect) och radera det som är inuti |
| Fyllmönster och ett gitter inuti en ihålig del | [Urholka](topic:print-tools#hollow) lämnar den tom; din slicer lägger till fyllning i en solid del |
| Detaljer för små för ditt munstycke (annat än väggar) | [Väggtjocklek](topic:print-tools#wall-thickness) hittar tunna väggar; slicerns lagerförhandsvisning visar resten |

## Prestanda

Ångra sparar en kopia av modellen för varje steg (ett [nät](topic:meshes) sparar bara det som ändrats), så mycket stora importer av dra-och-skjut-geometri gör varje redigering långsammare. Håll importerna smala, och spara och öppna filen igen för att rensa historiken.

## Appar och plattformar

- **Skrivbord:** ModelCraft körs i webbläsaren på Mac, Windows och Linux, och i CadCraft Studio, skrivbordsappen med alla åtta apparna i en enda installation. På Android installeras CadCraft Studio från dess APK på getcadcraft.com/download. Det finns ännu ingen version för iPad eller iPhone.
- **Touch:** se [Kretsa, panorera och zooma](topic:orbit-pan-zoom) för fingergesterna. En pennas tryck styr penseln i [Skulptera](topic:sculpt); annars används inte tryck och pennlutning.
- **Blad:** ModelCraft [skriver ut en vy per sida](topic:export-model#print-the-view-or-save-it-as-a-pdf); det finns inga arkvyer med flera vyer eller något ritningshuvud. Exportera till CadCraft-vänliga DWG/DXF för ritningar i skala.
