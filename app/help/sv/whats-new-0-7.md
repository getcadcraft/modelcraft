---
title: Nyheter i 0.7 (tidigare)
summary: Nät med modifierare, skulptering, UV och kurvobjekt, sökvägsspårning (path tracing) på grafikkortet och en renderingsarbetsyta, en levande vy i realtid med spridning och panoramor, nodmaterial, en animationsarbetsyta med ben och fysik, USD-, FBX-, STEP- och .3dm-filer, samt utskriftsverktyg med en nybörjarstil.
keywords: nyheter 0.7, tidigare version, versionsanteckningar, ändringslogg, ändringar, 0.7, version, nya funktioner, nät, arbetsytan nät, modifierare, underdelning, veck, uv, unwrap, sömmar, kurvor, kurvobjekt, nurbs, bezier, skulptera, remesh, retopologi, dela, beräkning, path tracing, webgpu, renderingsarbetsyta, renderingskö, mp4, exr, brusreducering, fysisk himmel, hdri, ies, skärpedjup, ljusblandning, dimma, kaustik, levande vy, realtid, gå, spridning, panorama, rundtur, visare, skuggning, noder, nodmaterial, materialbibliotek, materialx, dekaler, texturmålning, baka, animera, grafeditor, klipp, formnycklar, drivare, armatur, ben, skinning, ik, villkor, fysik, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3d-solider, stöd, väggtjocklek, urholka, reparera, nybörjare, assistenter, din dator, enheter, portugisiska
from: 16d52810
---

Det här är vad som ändrades i ModelCraft 0.7, jämfört med 0.6. ModelCraft modellerar nu nät såväl som push/pull-geometri, renderar på grafikkortet och har en arbetsyta för varje slags arbete: välj den i listan {{ui:Workspace}} till vänster i verktygsfältet.

## Nytt

### Nät

- **Nät.** Markera en grupp eller komponent och klicka på {{ui:Convert to mesh}} i {{ui:Entity info}}: den blir ett nät, med ytor med valfritt antal hörn som kan bära texturkoordinater, normaler, färger och vikter. {{ui:Convert to geometry}} gör om det. Ångra på ett nät behåller bara det som varje steg ändrade. En fil som innehåller ett nät behöver ModelCraft 0.7 för att öppnas. Se [Nät](topic:meshes).
- **Arbetsytan Nät.** Dubbelklicka på ett nät, eller välj {{ui:Mesh}} i listan {{ui:Workspace}}, för att redigera dess hörnpunkter, kanter och ytor: loopar och ringar, proportionell redigering, extrudera, infällning, fasning, loopsnitt, kniv, dela på mitten (bisect), snurra (spin), sammanfoga, lös upp, fyll, rutnätsfyllning, bro och glid. Inställningarna för den senaste operationen kan ändras efteråt i panelen. Börja från ett plan, en kub, en sfär, en torus och mer. Push/pull-tangenterna och modelleringstangenterna fungerar båda. Se [Redigera ett nät i arbetsytan Nät](topic:mesh-edit).
- **Modifierare.** Spegling, matris, underdelningsyta, fasning, förtjockning, boolesk, förskjutning, svetsning, reducering, utjämning, galler, kurvdeformation och krympning mot yta ändrar vad ett nät visar utan att ändra det. Stapla dem, slå av eller på var och en för vyn och för renderingar, och {{ui:Apply}} en när du vill ha den permanent. Se [Modifierare på ett nät](topic:modifiers).
- **Underdelning med veck.** {{ui:Crease}} i arbetsytan Nät håller valda kanter skarpa under en underdelningsyta. Renderingar kan använda fler nivåer än vyn, och på ett stort nät visar vyn en lägre nivå och säger det. Se [Underdelningsyta](topic:modifiers#subdivision-surface).
- **Kurvobjekt.** Bézier-, NURBS- och raka segmentkurvor som gör ett rör, ett band, en avsmalning eller en fylld platta, och text som kurva. Redigera deras punkter i arbetsytan {{ui:Curve}}; {{ui:To mesh}} när formen stämmer. Se [Kurvobjekt](topic:curves).
- **UV-arbetsytan.** Markera sömmar (eller låt ModelCraft markera dem vid skarpa kanter), {{ui:Unwrap}} och {{ui:Pack}}, eller projicera med låda, cylinder, sfär eller vyn. En UV-redigerare bredvid 3D-vyn flyttar, vrider och skalar bitarna, och en schackruta och sträckningsfärger visar resultatet. Se [Lägg ut ett nätobjekts UV](topic:uv).
- **Skulptering.** Arbetsytan {{ui:Sculpt}} har penslar för att rita, lera, jämna, greppa, blåsa upp, veck, nyp, platta till och mask, spegling över X, och {{ui:Detail}} som lägger till trianglar där du skulpterar. En pennas tryck styr penslens storlek och styrka. Varje streck är ett ångra-steg. Se [Skulptera ett nät](topic:sculpt).
- **Ommaskning och retopologi.** {{ui:Remesh}} gör om ett helt nät till jämna trianglar, stänger hål och sammanfogar överlappande bitar. För att bygga ett rent nät över ett detaljerat väljer du det under {{ui:Retopology}}: punkter du flyttar hamnar på dess yta. Se [Remesh](topic:mesh-edit#remesh).

### Ritning

- **Dela en kant eller kurva.** Verktyget {{ui:Divide}} markerar snitten när du rör dig längs en kant och delar med ett klick eller ett inskrivet tal. Med en kant, båge eller cirkel markerad skriver du `/5`; {{ui:Entity info}} › {{ui:Divide…}} frågar efter talet, för surfplattor. En båge eller cirkel delas i lika vinklar på den sanna bågen. Se [Dela en kant eller kurva i lika delar](topic:divide).
- **Beräkningar i värderutan.** Skriv `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` eller `2*450mm` för vilken längd som helst, och `90/2` för en vinkel. En beräkning som inte kan göras säger vad som är fel och var. Se [Beräkningar](topic:value-box#calculations).

### Rendering

- **Sökvägsspårning på grafikkortet.** {{ui:Render a picture…}} › {{ui:High quality (path traced)}} kör CadCraft:s egen sökvägsspårare på grafikkortet där webbläsaren har WebGPU; raden under bilden säger vilken motor som gjorde den. {{ui:Stop}} behåller bilden och {{ui:Resume}} fortsätter därifrån. Utan WebGPU spåras bilden med WebGL, som förut. Se [Hög kvalitet](topic:render#high-quality).
- **Rendera i vyn.** Arbetsytan {{ui:Render}} spårar själva vyn och börjar om när du kretsar eller redigerar: rendera ett {{ui:Region}}, klicka för att {{ui:Focus}}, ställ in {{ui:Detail}}. Den behöver WebGPU. Se [Rendera i vyn](topic:render#render-in-the-view).
- **Material, ljus och himlar.** Högkvalitativa bilder skuggar varje yta med materialmodellen OpenPBR (beläggningar, fuzz, tunna filmer, färgat glas, glöd). Med WebGPU finns också en {{ui:Physical sky}} med {{ui:Haze}}, en {{ui:Sky picture (HDRI)}} och tillverkarens IES-ljusprofiler för lampor. Se [Himlar och ljusprofiler](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **En kamera som ett fotografis.** Exponering från bländartal, slutartid och ISO i varje läge; med WebGPU också skärpedjup, tvåpunktsperspektiv, vitbalans, 360°-panoramor (även stereo) och kubkartor. Se [Kameran](topic:render#the-camera).
- **Efterbearbeta bilden efter rendering.** Gradera den ({{ui:ACES filmic}}, {{ui:AgX}}, {{ui:Filmic}} eller {{ui:Standard}}, kontrast, bloom, bländning, vinjettering, en `.cube`-färgtabell), blanda himlen, solen och varje lampgrupp, och titta på renderingselement ett i taget, allt utan att rendera igen. Den kvarvarande kornigheten tas bort av en brusreducerare på din egen dator. Se [Efterbearbeta bilden](topic:render#finish-the-picture) och [Blanda ljusen efter renderingen](topic:render#mix-the-lights-after-the-render).
- **Fler sätt att spara en rendering.** 16-bitars PNG, en flerlagers EXR med varje renderingselement och ljusgrupp, och en renderingsfil (`.ccrender`) som öppnas igen med sin blandning och gradering. Se [Spara bilden](topic:render#save-the-picture).
- **Dimma, rök och kaustik.** Dimma och disig luft belyst av solen och lampor, med ljusstrålar; en rökpelare eller ett moln; kaustik under glas och speglar; adaptiv sampling som slutar på pixlar som redan är rena. Endast på grafikkortet. Se [Dimma, rök, brus och kaustik](topic:render#fog-smoke-noise-and-caustics).
- **En renderingskö och MP4.** Lägg till bilder av hög kvalitet och hela animationer i {{ui:Render queue}}; de renderas efter varandra, och kön överlever att sidan stängs. Den behöver WebGPU. Videor kan också sparas som MP4 där webbläsaren kan skriva det. Se [Renderingskön](topic:render#the-render-queue) och [Rendera videon](topic:animation#render-the-video).

### Levande vy och presentationer

- **Levande vy.** {{ui:Export}} › {{ui:Live view}} visar modellen i ett realtidsutseende bredvid vyn och följer varje redigering och kameran: solskuggor, material, lampor och ljus som studsar från väggar. {{ui:Walk}} genom den, dra {{ui:Time}} och {{ui:Month}} för att flytta solen, eller flytta den till ett {{ui:New window}}. Den använder WebGPU där webbläsaren har det, annars WebGL 2. Se [Den levande vyn](topic:live-view).
- **Spridning.** Sprid gräs, blommor, stenar, träd och människor över ytor eller med en pensel, från sju nya kringmiljöobjekt och resten av biblioteket; uppsättningarna sparas i filen. Se [Sprid växter, stenar och människor](topic:live-view#scatter-plants-rocks-and-people).
- **Dela.** En 360°-panorama, en panoramarundtur med pilar mellan platserna, en fristående visare (en webbsida som öppnas offline och inte laddar något från internet) och en video av kameravägen, allt i realtidsutseendet. Se [Dela](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR i realtidsutseendet.** {{ui:Review in VR}} visar modellen med dess material, himmel, solskugga, lampor, spridda objekt och studsljus. Se [Så ser det ut](topic:vr-review#what-it-looks-like).

### Material

- **Material gjorda med noder.** Arbetsytan {{ui:Shading}} bygger filens egna material som nodgrafer: bilder, brus och schackrutor, Voronoi-celler, vågor, tegel, kakel, trä, marmor, gradienter, smuts och kantslitage, färgarbete, matematik, bump- och normalkartor, till det fullständiga OpenPBR-materialet. Vyn visar varje ändring direkt. Se [Gör material med noder](topic:shading).
- **Ett materialbibliotek och egna texturuppsättningar.** Panelen Shading listar bibliotekets material: sexton CC0-texturuppsättningar, var och en med källangivelse. Klicka på en för att använda den, eller dra den till en yta. {{ui:Pictures or a zip…}} eller {{ui:A folder…}} gör ett material av dina egna kartor, funna via deras filnamn. Se [Material från biblioteket](topic:shading#materials-from-the-library).
- **MaterialX in och ut.** Exportera ett material som MaterialX (OpenPBR Surface eller Standard Surface, texturer som PNG), och importera MaterialX-filer med deras bilder. Se [MaterialX](topic:shading#materialx).
- **Dekaler och texturmålning.** Placera en bild på en yta som en dekal med ett eget material, och måla på ett materials bild med en rund pensel. Se [Dekaler](topic:shading#decals) och [Måla på texturen](topic:shading#paint-on-the-texture).
- **Texturbakning.** Baka omgivningsskuggning, krokighet, belysning och en detaljerad objekts normaler till bilder längs ett nätobjekts UV, på datorns processorkärnor. Se [Baka texturer](topic:shading#bake-textures).

### Animation

- **Arbetsytan Animate.** Sätt nycklar för ett objekts plats, vinkel och storlek, varje lamps ljusstyrka, spridning och färg, och linsvinkeln, direkt i panelen. Tidslinjen får en vy {{ui:Curves}} (Bézier-handtag, upprepningar) och en vy {{ui:Clips}} som sparar nycklar som åtgärder att placera igen och blanda. Nycklar på flera rader kan flyttas, töjas, kopieras och klistras in. Se [Animera valfri egenskap](topic:animate).
- **Formnycklar och drivare.** Ett nät håller andra former av sig självt, blandade med reglage som kan nyckelbildas, eller satta från andra värden av ett litet uttryck. Se [Formnycklar](topic:animate#shape-keys-morphs) och [Drivare](topic:animate#drivers).
- **Armaturer.** Lägg ben i ett nät, låt {{ui:Automatic weights}} dela punkterna mellan dem eller måla vikterna, och posera och nyckelbilda benen; linjär eller dual-quaternion-skinning. Se [Armaturer](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK och villkor.** Räckvidd (IK) med en pol, titta mot, kopiera transformeringar, gränser, barn av och följ bana, för ben och objekt. Se [IK och villkor](topic:animate#ik-and-constraints).
- **Fysik.** Grupper och komponenter faller, staplas och kolliderar som lådor eller bollar, och {{ui:Bake physics}} behåller resultatet som nycklar. Se [Fysik](topic:animate#physics-drop-stack-and-collide).

### Filer

- **USD.** {{ui:Save as}} ({{key:Mod+Shift+S}}) sparar modellen som `.usda`, `.usdc` eller `.usdz`, och en USD-fil som ModelCraft sparat öppnas igen utan att något går förlorat. USD från andra program öppnas eller importeras som nät, grupper, komponenter, lampor och kameror. {{ui:Save}} skriver fortfarande `.modelcraft`. Se [Spara, öppna och exportera USD](topic:usd).
- **glTF, komplett.** glTF-filer kommer in som redigerbara nät med sina normaler, UV-koordinater, vertexfärger och texturer, noder som grupper, ljus som lampor och kameror som scener, även Draco- och meshopt-filer. En `.gltf` öppnas när den släpps tillsammans med sina filer. Export skriver nät, texturer, lampor och kameror. Se [glTF](topic:formats#gltf-glb-gltf).
- **Import av FBX, PLY, STL och Alembic.** FBX 2011 och nyare (nät, UV-uppsättningar, material, inbäddade texturer, lampor, kameror), PLY och STL med sina färger, och Alembic-cacher vid deras första sampel. OBJ kommer in med sin `.mtl` och bilder när du släpper dem tillsammans. Se [Filformat i detalj](topic:formats).
- **Fler exporter.** PLY med färger, STL med färgerna på målade ytor, och OBJ med sina texturer som en zip. Se [Filformat i detalj](topic:formats).
- **STEP-filer.** {{ui:Import}} läser STEP-delar och sammanställningar (AP203, AP214, AP242) som slutna nät i sin sanna storlek, varje del där filen placerar den. Se [STEP](topic:formats#step-step-stp).
- **.3dm-filer.** {{ui:Import}} läser `.3dm`-modeller: nät, polyytor och extruderingar (från näten som sparats i filen, annars tessellerade av ModelCraft), kurvor som kanter, block som komponenter och lager som taggar. Se [Ta in en .3dm-modell](topic:import-3dm-files).
- **3D-solider från DWG och DXF.** Import av en ritning tar nu också med dess 3D-solider, regioner och kroppar, var och en som egen grupp, slutna som solider. Se [Modellera på en situationsplan](topic:site-plan#what-comes-in).

### 3D-utskrift

- **Utskriftsverktyg.** {{ui:Check for 3D printing (STL or 3MF)…}} › **Utskriftsverktyg** har en {{ui:Supports preview}} (överhäng, pelare eller trädstöd, ungefär hur mycket material), {{ui:Wall thickness}} (väggar för tunna att skriva ut, listade med {{ui:Show}}), {{ui:Hollow}} (väggar med tjocklek du anger, med dräneringshål) och {{ui:Repair}} (varje åtgärd listad; överlappande delar förenas först när du ber om det). Urholka och Reparera ger en grupp vars plana sidor är enstaka ytor, eller ett nät när resultatet inte skulle slutas eller har för många ytor; statusraden säger vilket. Se [Stöd, väggtjocklek, urholkning och reparation](topic:print-tools).
- **Nybörjarstilen.** {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Menus, keys and mouse}} › {{ui:Beginner}}: stora knappar för att släppa former och hål, flytta, rikta in och {{ui:Group}} så att hålen skärs, och kontrollera sedan modellen för utskrift. Se [Nybörjarstilen](topic:beginner).

## Åtgärdat

- {{ui:Solids}} › {{ui:Union}}, {{ui:Subtract}} och {{ui:Intersect}} kunde ge en grupp som inte var sluten, i vilken storlek som helst. De sluts nu.
- {{ui:Solids}} › {{ui:Subtract}} var nedtonad när inget var markerat, trots att den väljer sina två delar i tur och ordning efter att du valt den.
- Inne i animationstidslinjen gick inskrivna tangenter ingenstans, {{key:Mod+S}} likaså. {{key:Mod+Z}} och {{key:Mod+Y}} där är tidslinjens egna ångra och gör om; andra {{key:Mod}}-tangenter når appen.

## I alla appar

- **Enheter.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} har en lista var för längd, area, volym, vinkel och lutning, med de exakta storlekar som enheternas definitioner ger (US survey foot är en egen enhet). Stäng av enheter du aldrig använder så lämnar de enhetslistorna; stjärnmärk en och nytt arbete startar i den. En fil behåller alltid sin egen enhet. I ModelCraft följer enhetslistan bredvid värderutan reglagen (modellens egen enhet finns alltid kvar i den), stjärnan sätter enheten för en ny modell (när ModelCraft har den enheten), och en längd som skrivs med någon enhets beteckning läses i den enheten. Se [Enheter, skrivna värden och enhetslistorna](common:unit-lists).
- **En tätare layout och paneler som städar undan sig.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} får plats med mer på skärmen (pekskärmar och telefoner behåller sina stora knappar). Varje sidopanel har en smal namnlist: dra den för att docka eller frigöra panelen, släpp den på en annan panels lista för att dela en ram som flikar, nåla fast den för att glida undan mot kanten, eller dölj den och hämta tillbaka den från kanten. Se [Ordna panelerna](common:arrange-panels#make-the-layout-denser).
- **Dialogrutor flyttas.** Dra en dialogruta i namnlisten ur vägen för ritningen; den kommer tillbaka dit du lämnade den. Dubbelklicka på namnlisten för att centrera den igen. Se [Flytta en dialogruta](common:arrange-panels#move-a-dialog).
- **Recept för AI-assistenter.** Tio arbetade förfrågningar till din egen assistent (städa en ritning, plotta en uppsättning, kontrollera ritningar, ställa frågor om en modell, summera en mängdavtagning, prova en variant av en del …), var och en med de verktyg den anropar och de behörigheter den behöver, och var och en spelad om av våra tester. Apparna innehåller ingen AI. Se [Recept för AI-assistenter](common:assistants-recipes).
- **Språk.** **Português (Portugal)** är nytt i {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Det, **Português (Brasil)**, **Español (México)** och **Bahasa Indonesia** har nu varje ord i apparna, som utkast som ännu inte granskats av en infödd talare. Hjälpämnen är på engelska.
- **CadCraft Studio** säger varför en uppdateringskontroll misslyckades (ingen fil för ditt system än, inget nätverk, en felaktig signatur) i stället för bara "Klar", och slutar ta fram ett Nyheter-kort du stängt förrän det finns en nyare version.

## Ännu inte med i den här versionen

- **0.7 är inte kodsignerad.** Signering och Microsoft Store-paketet flyttades till 0.8, eftersom certifikatvalideringen ännu inte har kommit. Kontrollera SHA-256 bredvid varje fil på getcadcraft.com/download. På Windows, om SmartScreen stoppar installationsprogrammet, välj {{ui:Mer information}} och sedan {{ui:Kör ändå}}. På en Mac, första gången, högerklicka på CadCraft Studio och välj {{ui:Öppna}}. CadCraft Studio finns ännu inte i någon appbutik, och det finns ännu ingen iPad- eller iPhone-version.
- Vinkel- och lutningslistorna i {{ui:Units}} sparas, men ingen ruta läser dem ännu.
- Rendering på grafikkortet (WebGPU) har testats här bara med en mjukvaruersättning, ännu inte på riktiga grafikkort, så rendera något litet på din egen dator först. Detsamma gäller den levande vyn, och VR har ännu bara testats med en headsetemulator.
- Utan WebGPU finns ingen arbetsyta Render eller renderingskö, och högkvalitativa bilder saknar skärpedjup, fysisk himmel, himmelsbild, dimma, rök, kaustik och ljusblandning.
- {{ui:Render a picture…}} ritar inte spridda objekt ännu; de visas i den levande vyn, dess panoramor, visare och video.
- Lampor animeras i vyn, men en renderad video använder lamporna som de är när den startar.
- Ben och animation läses inte från eller skrivs till glTF-, FBX- eller USD-filer ännu (skinnade modeller kommer in i vila, med sina vikter), och glTF- och FBX-material utöver grundfärgen eller texturen behålls ännu inte.
- STEP-färger och sammanställningens delnamn läses ännu inte. `.3dm`-import har testats med filer skrivna av formatets verktygslåda, ännu inte med filer från själva modelleringsprogrammet; SubD-objekt, text och mått utelämnas.
- Växtbiblioteket från CivilCraft finns i ModelCraft, men att placera växter från det är ännu inte byggt.
- Att måla en textur på push/pull-ytor upprepas med materialets kakel; för att måla en enda yta, gör den till ett nät och veckla ut den.

Allt annat finns i [Finns inte ännu](topic:not-built-yet).
