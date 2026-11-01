---
title: Nyheter i 0.7
summary: Nät med modifierare, skulptering, UV och kurvobjekt, path tracing på grafikkortet och en arbetsyta för rendering, en realtidsvy med spridning och panoramor, nodmaterial, en arbetsyta för animation med ben och fysik, USD-, FBX-, STEP- och .3dm-filer samt utskriftsverktyg med en nybörjarstil.
keywords: nyheter, vad är nytt, versionsinformation, ändringslogg, ändringar, 0.7, version, nya funktioner, nät, nätarbetsyta, modifierare, subdivision, veck, uv, veckla ut, sömmar, kurvor, kurvobjekt, nurbs, bezier, skulptera, gör om nät, retopologi, dela, beräkning, path tracing, webgpu, renderingsarbetsyta, renderingskö, mp4, exr, brusreducering, fysikalisk himmel, hdri, ies, skärpedjup, ljusblandning, dimma, kaustik, levande vy, realtid, gå, spridning, panorama, rundtur, visare, skuggning, noder, nodmaterial, materialbibliotek, materialx, dekaler, texturmålning, bakning, animera, grafredigerare, klipp, formnycklar, drivare, skelett, ben, skinning, ik, villkor, fysik, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3D-solider, stöd, väggtjocklek, urholka, reparera, nybörjare, assistenter, din dator, enheter, portugisiska
from: b9fc43e2
---

Detta är vad som ändrats i ModelCraft 0.7, jämfört med 0.6. ModelCraft modellerar nu nät såväl som geometri för tryck/dra, renderar på grafikkortet och har en arbetsyta för varje typ av arbete: välj den i listan {{ui:Arbetsyta}} till vänster i verktygsfältet.

## Nytt

### Nät

- **Nät.** Markera en grupp eller komponent och klicka på {{ui:Konvertera till nät}} i {{ui:Entitetsinfo}}: den blir ett nät, med ytor med valfritt antal hörn som kan bära texturkoordinater, normaler, färger och vikter. {{ui:Konvertera till geometri}} gör den till geometri igen. Ångra på ett nät behåller bara det varje steg ändrade. En fil som innehåller ett nät kräver ModelCraft 0.7 för att öppnas. Se [Nät](topic:meshes).
- **Nätarbetsytan.** Dubbelklicka på ett nät, eller välj {{ui:Nät}} i listan {{ui:Arbetsyta}}, för att redigera dess hörn, kanter och ytor: loopar och ringar, proportionell redigering, extrudera, inset, avfasning, loopsnitt, kniv, halvera, snurra, slå ihop, lös upp, fyll, rutnätsfyllning, brygga och glid. Inställningarna för senaste operationen kan ändras efteråt i panelen. Börja från ett plan, en kub, en sfär, en torus och mer. Tangenter för tryck/dra och modelleringstangenter fungerar båda. Se [Redigera ett nät i nätarbetsytan](topic:mesh-edit).
- **Modifierare.** Spegling, matris, subdivisionsyta, avfasning, solidifiera, boolesk, förskjut, svetsa ihop, decimera, jämna ut, gitter, kurvdeformation och shrinkwrap ändrar vad ett nät visar utan att ändra själva nätet. Stapla dem, slå av eller på var och en för vyn och för renderingar, och {{ui:Verkställ}} en när du vill ha den permanent. Se [Modifierare på ett nät](topic:modifiers).
- **Subdivision med veck.** {{ui:Veck}} i nätarbetsytan håller valda kanter skarpa under en subdivisionsyta. Renderingar kan använda fler nivåer än vyn, och på ett stort nät visar vyn en lägre nivå och säger det. Se [Subdivisionsyta](topic:modifiers#subdivision-surface).
- **Kurvobjekt.** Bézier-, NURBS- och kurvor med raka segment som blir ett rör, ett band, en avsmalning eller en fylld platta, och text som kurva. Redigera deras punkter i arbetsytan {{ui:Kurva}}; {{ui:Till nät}} när formen är klar. Se [Kurvobjekt](topic:curves).
- **UV-arbetsytan.** Markera sömmar (eller låt ModelCraft markera dem vid skarpa kanter), {{ui:Veckla ut}} och {{ui:Packa}}, eller projicera med låda, cylinder, sfär eller vyn. En UV-redigerare bredvid 3D-vyn flyttar, vrider och skalar bitarna, och en schackbräda och töjningsfärger visar resultatet. Se [Lägg ut ett näts UV](topic:uv).
- **Skulptering.** Arbetsytan {{ui:Skulptera}} har penslarna rita, lera, jämna ut, greppa, blås upp, veck, nyp, platta och mask, spegling över X, och {{ui:Detalj}} som lägger till trianglar där du skulpterar. En pennas tryck styr penselns storlek och styrka. Varje drag är ett ångrasteg. Se [Skulptera ett nät](topic:sculpt).
- **Gör om nät och retopologi.** {{ui:Gör om nät}} gör om ett helt nät till jämna trianglar, stänger hål och sammanfogar överlappande delar. För att bygga ett rent nät över ett detaljerat, välj det under {{ui:Retopologi}}: punkter du flyttar hamnar på dess yta. Se [Gör om nät](topic:mesh-edit#remesh).

### Ritning

- **Dela en kant eller kurva.** Verktyget {{ui:Dela}} markerar snitten när du rör dig längs en kant och delar med ett klick eller ett inskrivet tal. Med en kant, båge eller cirkel markerad skriver du `/5`. {{ui:Entitetsinfo}} › {{ui:Dela…}} frågar efter antalet, för surfplattor. En båge eller cirkel delas i lika vinklar på den verkliga bågen. Se [Dela en kant eller kurva i lika delar](topic:divide).
- **Beräkningar i värderutan.** Skriv `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` eller `2*450mm` för valfri längd, och `90/2` för en vinkel. En beräkning som inte kan göras säger vad som är fel och var. Se [Beräkningar](topic:value-box#calculations).

### Rendering

- **Path tracing på grafikkortet.** {{ui:Rendera en bild…}} › {{ui:Hög kvalitet (path tracing)}} kör CadCrafts egen path tracer på grafikkortet där webbläsaren har WebGPU. Raden under bilden säger vilken motor som gjorde den. {{ui:Stopp}} behåller bilden och {{ui:Återuppta}} fortsätter därifrån. Utan WebGPU renderas bilden med path tracing via WebGL, som tidigare. Se [Hög kvalitet](topic:render#high-quality).
- **Rendera i vyn.** Arbetsytan {{ui:Rendera}} path tracar själva vyn och börjar om när du kretsar eller redigerar: rendera ett {{ui:Område}}, klicka för att {{ui:Fokus}}, ställ in {{ui:Detalj}}. Den kräver WebGPU. Se [Rendera i vyn](topic:render#render-in-the-view).
- **Material, ljus och himlar.** Högkvalitetsbilder skuggar varje yta med materialmodellen OpenPBR (beläggningar, ludd, tunna filmer, färgat glas, glöd). Med WebGPU finns också en {{ui:Fysikalisk himmel}} med {{ui:Dis}}, en {{ui:Himmelsbild (HDRI)}} och tillverkarens IES-ljusprofiler för lampor. Se [Himlar och ljusprofiler](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **En kamera som i fotografin.** Exponering från bländartal, slutartid och ISO i varje läge. Med WebGPU även skärpedjup, tvåpunktsperspektiv, vitbalans, 360°-panoramor (även i stereo) och kubkartor. Se [Kameran](topic:render#the-camera).
- **Efterbearbeta bilden efter rendering.** Gradera den ({{ui:ACES filmic}}, {{ui:AgX}}, {{ui:Filmic}} eller {{ui:Standard}}, kontrast, bloom, glans, vinjettering, en `.cube`-färgtabell), blanda himlen, solen och varje lampgrupp, och titta på renderingselement ett i taget, allt utan att rendera igen. Det kvarvarande korniga tas bort av en brusreducerare på din egen dator. Se [Efterbearbeta bilden](topic:render#finish-the-picture) och [Blanda ljusen efter renderingen](topic:render#mix-the-lights-after-the-render).
- **Fler sätt att spara en rendering.** 16-bitars PNG, en EXR med flera lager och varje renderingselement och ljusgrupp, och en renderingsfil (`.ccrender`) som öppnas igen med sin blandning och gradering. Se [Spara bilden](topic:render#save-the-picture).
- **Dimma, rök och kaustik.** Dimma och dis belyst av solen och lampor, med ljusskaft; en rökpelare eller ett moln; kaustik under glas och speglar; adaptiv sampling som slutar på pixlar som redan är rena. Endast på grafikkortet. Se [Dimma, rök, brus och kaustik](topic:render#fog-smoke-noise-and-caustics).
- **En renderingskö och MP4.** Lägg högkvalitetsbilder och hela animationer i {{ui:Renderingskö}}; de renderas en efter en, och kön finns kvar när sidan stängs. Den kräver WebGPU. Videor kan också sparas som MP4 där webbläsaren kan skriva det. Se [Renderingskön](topic:render#the-render-queue) och [Rendera videon](topic:animation#render-the-video).

### Levande vy och presentationer

- **Levande vy.** {{ui:Exportera}} › {{ui:Levande vy}} visar modellen i ett realtidsutseende bredvid vyn och följer varje redigering och kameran: solskuggor, material, lampor och ljus som studsar från väggar. {{ui:Gå}} genom den, dra {{ui:Tid}} och {{ui:Månad}} för att flytta solen, eller flytta den till ett {{ui:Nytt fönster}}. Den använder WebGPU där webbläsaren har det, annars WebGL 2. Se [Den levande vyn](topic:live-view).
- **Spridning.** Sprid gräs, blommor, stenar, träd och människor över ytor eller med en pensel, från sju nya inredningsobjekt och resten av biblioteket. Uppsättningarna sparas i filen. Se [Sprid växter, stenar och människor](topic:live-view#scatter-plants-rocks-and-people).
- **Dela.** En 360°-panorama, en panoramarundtur med pilar mellan platser, en fristående visare (en webbsida som öppnas offline och inte hämtar något från internet) och en video av kamerans bana, allt i realtidsutseendet. Se [Dela](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR i realtidsutseendet.** {{ui:Granska i VR}} visar modellen med sina material, himmel, solskugga, lampor, spridda objekt och studsande ljus. Se [Så ser det ut](topic:vr-review#what-it-looks-like).

### Material

- **Material gjorda med noder.** Arbetsytan {{ui:Skuggning}} bygger filens egna material som nodgrafer: bilder, brus och schackrutor, Voronoi-celler, vågor, tegel, kakel, trä, marmor, toningar, smuts och kantslitage, färgarbete, matematik, bump- och normalkartor, till det fullständiga OpenPBR-materialet. Vyn visar varje ändring direkt. Se [Gör material med noder](topic:shading).
- **Ett materialbibliotek och egna texturuppsättningar.** Panelen {{ui:Skuggning}} visar bibliotekets material: sexton CC0-texturuppsättningar, var och en med källangivelse. Klicka på en för att använda den, eller dra den till en yta. {{ui:Bilder eller en zip…}} eller {{ui:En mapp…}} gör ett material av dina egna kartor, som hittas via deras filnamn. Se [Material från biblioteket](topic:shading#materials-from-the-library).
- **MaterialX in och ut.** Exportera ett material som MaterialX (OpenPBR Surface eller Standard Surface, texturer som PNG), och importera MaterialX-filer med deras bilder. Se [MaterialX](topic:shading#materialx).
- **Dekaler och texturmålning.** Placera en bild på en yta som dekal med ett eget material, och måla på ett materials bild med en rund pensel. Se [Dekaler](topic:shading#decals) och [Måla på texturen](topic:shading#paint-on-the-texture).
- **Texturbakning.** Baka ambient occlusion, krökning, ljus och normalerna för ett detaljerat objekt till bilder längs ett näts UV, på datorns processorkärnor. Se [Baka texturer](topic:shading#bake-textures).

### Animation

- **Arbetsytan Animera.** Sätt nycklar för ett objekts plats, vridning och storlek, varje lampas ljusstyrka, spridning och färg samt linsvinkeln, direkt i panelen. Tidslinjen får en vy {{ui:Kurvor}} (Bézier-handtag, upprepningar) och en vy {{ui:Klipp}} som sparar nycklar som åtgärder att placera igen och blanda. Nycklar på flera rader kan flyttas, töjas, kopieras och klistras in. Se [Animera valfri egenskap](topic:animate).
- **Formnycklar och drivare.** Ett nät kan innehålla andra former av sig självt, blandade med reglage som kan få nycklar, eller styras av andra värden med ett litet uttryck. Se [Formnycklar](topic:animate#shape-keys-morphs) och [Drivare](topic:animate#drivers).
- **Skelett.** Lägg ben i ett nät, låt {{ui:Automatiska vikter}} fördela punkterna mellan dem eller måla vikterna, och posera och sätt nycklar på benen. Linjär eller dual quaternion-skinning. Se [Skelett](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK och villkor.** Nå (IK) med en pol, titta mot, kopiera transformeringar, gränser, underordnad till och följ bana, för ben och objekt. Se [IK och villkor](topic:animate#ik-and-constraints).
- **Fysik.** Grupper och komponenter faller, staplas och kolliderar som lådor eller bollar, och {{ui:Baka fysik}} behåller resultatet som nycklar. Se [Fysik](topic:animate#physics-drop-stack-and-collide).

### Filer

- **USD.** {{ui:Spara som}} ({{key:Mod+Shift+S}}) sparar modellen som `.usda`, `.usdc` eller `.usdz`, och en USD-fil som ModelCraft sparat öppnas igen utan att något gått förlorat. USD från andra program öppnas eller importeras som nät, grupper, komponenter, lampor och kameror. {{ui:Spara}} skriver fortfarande `.modelcraft`. Se [Spara, öppna och exportera USD](topic:usd).
- **glTF, komplett.** glTF-filer kommer in som redigerbara nät med sina normaler, UV, vertexfärger och texturer. Noder blir grupper, ljus blir lampor och kameror blir scener. Draco- och meshopt-filer ingår. En `.gltf` öppnas när den släpps tillsammans med sina filer. Export skriver nät, texturer, lampor och kameror. Se [glTF](topic:formats#gltf-glb-gltf).
- **Import av FBX, PLY, STL och Alembic.** FBX 2011 och nyare (nät, UV-uppsättningar, material, inbäddade texturer, ljus, kameror), PLY och STL med sina färger, och Alembic-cache vid första samplet. OBJ kommer in med sin `.mtl` och bilder när du släpper dem tillsammans. Se [Filformat i detalj](topic:formats).
- **Fler exporter.** PLY med färger, STL med färgerna på målade ytor, och OBJ med sina texturer i en zip. Se [Filformat i detalj](topic:formats).
- **STEP-filer.** {{ui:Importera}} läser STEP-delar (AP203, AP214, AP242) och sammanställningar som slutna nät i sin verkliga storlek, varje del där filen placerar den. Se [STEP](topic:formats#step-step-stp).
- **.3dm-filer.** {{ui:Importera}} läser `.3dm`-modeller: nät, polyytor och extruderingar (från näten sparade i filen, annars tesselerade av ModelCraft), kurvor som kanter, block som komponenter och lager som taggar. Se [Hämta en .3dm-modell](topic:import-3dm-files).
- **3D-solider från DWG och DXF.** Vid import av en ritning kommer nu även dess 3D-solider, regioner och kroppar, var och en som egen grupp, och slutna som solider. Se [Modellera på en situationsplan](topic:site-plan#what-comes-in).

### 3D-utskrift

- **Utskriftsverktyg.** {{ui:Kontrollera för 3D-utskrift (STL eller 3MF)…}} › **Utskriftsverktyg** har en {{ui:Förhandsvisning av stöd}} (överhäng, kolonner eller trädstöd, ungefär hur mycket material), {{ui:Väggtjocklek}} (väggar som är för tunna för att skrivas ut, listade med {{ui:Visa}}), {{ui:Urholka}} (väggar med tjockleken du anger, med dräneringshål) och {{ui:Reparera}} (varje åtgärd listad; överlappande delar slås samman först när du ber om det). Urholka och Reparera ger en grupp vars plana sidor är enskilda ytor, eller ett nät när resultatet inte skulle slutas eller har för många ytor. Statusraden säger vilket. Se [Stöd, väggtjocklek, urholkning och reparation](topic:print-tools).
- **Nybörjarstilen.** {{ui:Inställningar}} › {{ui:ModelCraft}} › {{ui:Menyer, tangenter och mus}} › {{ui:Nybörjare}}: stora knappar för att släppa in former och hål, flytta, justera och {{ui:Grupp}} så att hålen skärs, och kontrollera sedan modellen för utskrift. Se [Nybörjarstilen](topic:beginner).

### AI-assistenter och din dator

- **Fler funktioner för AI-assistenter.** En assistent kan nu lista ytor och material, tryck/dra, måla, skapa grupper, lägga till och visa scener, lägga till nät, redigera modifierarstackar, exportera USD, rendera en bild och fylla renderingskön. Se [Använd ModelCraft med AI-assistenter](topic:use-with-ai-assistants).
- **Din dator.** {{ui:Inställningar}} › {{ui:ModelCraft}} › {{ui:Rendering}} › {{ui:Din dator}} visar grafiken, processorkärnorna och minnet som webbläsaren låter appen använda, och nivån som avgör var den levande vyn startar. Se [Vad din dator renderar med](topic:your-machine).

## Åtgärdat

- {{ui:Solider}} › {{ui:Union}}, {{ui:Subtrahera}} och {{ui:Snitt}} kunde ge en grupp som inte var sluten, i valfri storlek. De sluter sig nu.
- {{ui:Solider}} › {{ui:Subtrahera}} var nedtonad när inget var markerat, trots att den väljer sina två delar i tur och ordning efter att du valt den.
- I animationstidslinjen gick inmatade tangenter ingenstans, {{key:Mod+S}} också. {{key:Mod+Z}} och {{key:Mod+Y}} där är tidslinjens egna ångra och gör om; andra {{key:Mod}}-tangenter når appen.

## I alla appar

- **Enheter.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Enheter}} har en lista var för längd, area, volym, vinkel och lutning, med de exakta storlekarna som enheternas definitioner ger (US survey foot är en egen enhet). Stäng av enheter du aldrig använder så lämnar de enhetslistorna; markera en med stjärna så startar nytt arbete i den. En fil behåller alltid sin egen enhet. I ModelCraft följer enhetslistan bredvid värderutan av- och påslagningarna (modellens egen enhet finns alltid kvar i listan), stjärnan sätter enheten för en ny modell (när ModelCraft har den enheten), och en längd som skrivs med någon enhets beteckning läses i den enheten. Se [Enheter, inskrivna värden och enhetslistor](common:unit-lists).
- **Tätare layout och paneler som döljs undan.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Layouttäthet}} › {{ui:Kompakt}} får plats med mer på skärmen (pekskärmar och telefoner behåller sina stora knappar). Varje sidopanel har en smal namnlist: dra den för att docka eller frigöra panelen, släpp den på en annan panels namnlist för att dela en ram som flikar, fäst den för att glida undan till kanten, eller dölj den och hämta tillbaka den från kanten. Se [Ordna panelerna](common:arrange-panels#make-the-layout-denser).
- **Dialogrutor flyttas.** Dra en dialogruta i namnlisten ur vägen för ritningen; den kommer tillbaka dit du lämnade den. Dubbelklicka på namnlisten för att centrera den igen. Se [Flytta en dialogruta](common:arrange-panels#move-a-dialog).
- **Recept för AI-assistenter.** Tio genomarbetade förfrågningar för din egen assistent (städa en ritning, plotta en uppsättning, kontrollera ritningar, ställa frågor om en modell, summera en mängdavtagning, prova en variant av en del …), var och en med de verktyg den anropar och de behörigheter den behöver, och var och en körs om av våra tester. Apparna innehåller ingen AI. Se [Recept för AI-assistenter](common:assistants-recipes).
- **Språk.** **Português (Portugal)** är nytt i {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Språk}}. Det och **Português (Brasil)**, **Español (México)** och **Bahasa Indonesia** har nu varje ord i apparna, som utkast som ännu inte granskats av en modersmålstalare. Hjälpämnena är på engelska.
- **CadCraft Studio** anger varför en uppdateringskontroll misslyckades (ingen fil för ditt system ännu, inget nätverk, en felaktig signatur) i stället för bara ”Klar”, och slutar visa ett Nyheter-kort som du stängt förrän det finns en nyare version.

## Ännu inte i den här versionen

- **0.7 är inte kodsignerad.** Signering och Microsoft Store-paketet flyttades till 0.8 eftersom certifikatvalideringen ännu inte kommit igenom. Kontrollera SHA-256 bredvid varje fil på getcadcraft.com/download. På Windows, om SmartScreen stoppar installationsprogrammet, välj {{ui:Mer information}} och sedan {{ui:Kör ändå}}. På en Mac väljer du första gången att högerklicka på CadCraft Studio och välja {{ui:Öppna}}. CadCraft Studio finns ännu inte i någon appbutik, och det finns ännu ingen version för iPad eller iPhone.
- Listorna för vinkel och lutning i {{ui:Enheter}} sparas, men ingen ruta läser dem ännu.
- Rendering på grafikkortet (WebGPU) har här bara testats med en programvaruersättning, ännu inte på riktiga grafikkort, så rendera något litet på din egen dator först. Detsamma gäller den levande vyn, och VR har ännu bara prövats med en headsetemulator.
- Utan WebGPU finns ingen arbetsyta {{ui:Rendera}} och ingen renderingskö, och högkvalitetsbilder saknar skärpedjup, fysikalisk himmel, himmelsbild, dimma, rök, kaustik och ljusblandning.
- {{ui:Rendera en bild…}} ritar inte spridda objekt ännu; de visas i den levande vyn, dess panoramor, visare och video.
- Lampor animeras i vyn, men en renderad video använder lamporna som de är när den startar.
- Ben och animation läses inte från eller skrivs till glTF-, FBX- eller USD-filer ännu (skinnade modeller kommer in i viloläge, med sina vikter), och glTF- och FBX-material utöver grundfärgen eller texturen behålls ännu inte.
- STEP-färger och delnamn i sammanställningar läses inte ännu. `.3dm`-import har testats med filer skrivna av formatets verktygslåda, ännu inte med filer från modelleringsprogrammet självt. SubD-objekt, text och måttsättning utelämnas.
- Växtbiblioteket från CivilCraft finns i ModelCraft, men att placera växter från det finns ännu inte.
- Att måla en textur på ytor från tryck/dra upprepas med materialets kakel. För att måla en enda yta, gör den till ett nät och veckla ut den.

Allt annat finns i [Finns inte ännu](topic:not-built-yet).
