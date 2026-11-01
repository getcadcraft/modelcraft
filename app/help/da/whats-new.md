---
title: Nyheder i 0.7
summary: Net med modifikatorer, skulptering, UV og kurveobjekter, path tracing på grafikkortet og et Render-arbejdsområde, en levende visning i realtid med spredning og panoramaer, nodematerialer, et Animér-arbejdsområde med knogler og fysik, filer i USD, FBX, STEP og .3dm samt udskrivningsværktøjer med en Begynder-stil.
keywords: nyheder, hvad er nyt, udgivelsesnoter, changelog, ændringer, 0.7, version, nye funktioner, net, net-arbejdsområde, modifikatorer, underdeling, fold, uv, afvikl, sømme, kurver, kurveobjekter, nurbs, bézier, skulptér, remesh, retopologi, del, beregning, path tracing, webgpu, render-arbejdsområde, renderkø, mp4, exr, støjreduktion, fysisk himmel, hdri, ies, skarphedsdybde, lysblanding, tåge, kaustik, levende visning, realtid, gå, spredning, panorama, rundtur, seer, shading, noder, nodematerialer, materialebibliotek, materialx, dekaler, teksturmaling, bagning, animér, grafeditor, klip, formnøgler, drivere, skelet, knogler, skinning, ik, begrænsninger, fysik, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3d-legemer, understøtninger, vægtykkelse, udhul, reparér, begynder, assistenter, din maskine, enheder, portugisisk
from: b9fc43e2
---

Dette er hvad der ændrede sig i ModelCraft 0.7, sammenlignet med 0.6. ModelCraft kan nu modellere net ligesom geometri med skub/træk, renderer på grafikkortet og har et arbejdsområde til hver type arbejde: vælg det i listen {{ui:Workspace}} til venstre i værktøjslinjen.

## Nyt

### Net

- **Net.** Vælg en gruppe eller komponent, og klik på {{ui:Convert to mesh}} i {{ui:Entity info}}: den bliver til et net med flader af et vilkårligt antal hjørner, der kan have teksturkoordinater, normaler, farver og vægte. {{ui:Convert to geometry}} gør den til geometri igen. Fortryd på et net beholder kun det, hvert trin ændrede. En fil, der indeholder et net, kræver ModelCraft 0.7 for at åbne. Se [Net](topic:meshes).
- **Net-arbejdsområdet.** Dobbeltklik på et net, eller vælg {{ui:Mesh}} i listen {{ui:Workspace}}, for at redigere dets hjørnepunkter, kanter og flader: sløjfer og ringe, proportional redigering, ekstrudér, indsnit, affas, sløjfeskæring, kniv, halvér, drej, flet, opløs, udfyld, gitterudfyldning, bro og glid, og den sidste handlings indstillinger ændres bagefter i panelet. Start fra et plan, en kube, en kugle, en torus og flere. Skub/træk-taster og modelleringstaster virker begge. Se [Rediger et net i Net-arbejdsområdet](topic:mesh-edit).
- **Modifikatorer.** Spejl, array, underdelingsflade, affas, solidify, boolesk, forskyd, svejs, decimér, glat, gitter, kurvedeformation og shrinkwrap ændrer, hvad et net viser, uden at ændre selve nettet. Stak dem, slå hver enkelt til eller fra for visningen og for renderinger, og {{ui:Apply}} en, når du vil have den permanent. Se [Modifikatorer på et net](topic:modifiers).
- **Underdeling med folder.** {{ui:Crease}} i Net-arbejdsområdet holder valgte kanter skarpe under en underdelingsflade. Renderinger kan bruge flere niveauer end visningen, og på et stort net viser visningen et lavere niveau og siger det. Se [Underdelingsflade](topic:modifiers#subdivision-surface).
- **Kurveobjekter.** Bézier-, NURBS- og lige segmentkurver, der laver et rør, et bånd, en konisk form eller en udfyldt plade, og tekst som kurve. Rediger deres punkter i {{ui:Curve}}-arbejdsområdet; brug {{ui:To mesh}}, når formen er rigtig. Se [Kurveobjekter](topic:curves).
- **UV-arbejdsområdet.** Markér sømme (eller lad ModelCraft markere dem ved skarpe kanter), {{ui:Unwrap}} og {{ui:Pack}}, eller projicér med boks, cylinder, kugle eller visningen. En UV-editor ved siden af 3D-visningen flytter, drejer og skalerer stykkerne, og et skakbrætsmønster og strækfarver viser resultatet. Se [Læg et nets UV-koordinater ud](topic:uv).
- **Skulptering.** {{ui:Sculpt}}-arbejdsområdet har tegne-, ler-, glat-, greb-, oppustnings-, fold-, klemme-, udfladnings- og maskepensler, spejling på tværs af X og {{ui:Detail}}, der tilføjer trekanter, hvor du skulpterer. Et penns tryk sætter pensels størrelse og styrke. Hvert strøg er ét trin i fortryd. Se [Skulptér et net](topic:sculpt).
- **Remesh og retopologi.** {{ui:Remesh}} laver et helt net om igen som jævne trekanter, lukker huller og samler overlappende dele. For at bygge et rent net over et detaljeret et, vælg det under {{ui:Retopology}}: punkter, du flytter, lander på dets overflade. Se [Remesh](topic:mesh-edit#remesh).

### Tegning

- **Del en kant eller kurve.** Værktøjet {{ui:Divide}} markerer snittene, mens du bevæger dig langs en kant, og deler med et klik eller et indtastet tal; med en kant, bue eller cirkel valgt, skriv `/5`; {{ui:Entity info}} › {{ui:Divide…}} beder om tallet, til tablets. En bue eller cirkel deles i lige store vinkler på den rigtige bue. Se [Del en kant eller kurve i lige dele](topic:divide).
- **Beregninger i værdifeltet.** Skriv `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` eller `2*450mm` for enhver længde og `90/2` for en vinkel. En beregning, som ikke kan udføres, siger, hvad der er galt, og hvor. Se [Beregninger](topic:value-box#calculations).

### Rendering

- **Path tracing på grafikkortet.** {{ui:Render et billede…}} › {{ui:Høj kvalitet (path traced)}} kører den egen path tracer i CadCraft på grafikkortet, hvor browseren har WebGPU; linjen under billedet siger, hvilken motor der lavede det. {{ui:Stop}} beholder billedet, og {{ui:Genoptag}} fortsætter derfra. Uden WebGPU renderes billedet med path tracing i WebGL, som før. Se [Høj kvalitet](topic:render#high-quality).
- **Render i visningen.** {{ui:Render}}-arbejdsområdet path tracer selve visningen og starter forfra, når du kredser eller redigerer: render et {{ui:Område}}, klik for at {{ui:Fokus}}, sæt {{ui:Detalje}}. Det kræver WebGPU. Se [Render i visningen](topic:render#render-in-the-view).
- **Materialer, lys og himmel.** Billeder i høj kvalitet skygger hver flade med OpenPBR-materialemodellen (klarlak, fnug, tynde film, farvet glas, glød). Med WebGPU findes der også en {{ui:Physical sky}} med {{ui:Dis}}, et {{ui:Himmelbillede (HDRI)}} og producentens IES-lysprofiler til lamper. Se [Himmel og lysprofiler](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Et kamera som et fotografis.** Eksponering fra f-tal, lukkertid og ISO i hver tilstand; med WebGPU også skarphedsdybde, perspektiv med to forsvindingspunkter, hvidbalance, 360°-panoramaer (også i stereo) og kubemaps. Se [Kameraet](topic:render#the-camera).
- **Færdiggør billedet efter rendering.** Gradér det ({{ui:ACES filmic}}, {{ui:AgX}}, {{ui:Filmic}} eller {{ui:Standard}}, kontrast, bloom, glans, vignet, en `.cube`-farvetabel), bland himlen, solen og hver lampegruppe, og se renderelementer ét for ét, alt sammen uden at rendere igen. Den resterende kornethed fjernes af en støjreduktion på din egen computer. Se [Færdiggør billedet](topic:render#finish-the-picture) og [Bland lysene efter renderingen](topic:render#mix-the-lights-after-the-render).
- **Flere måder at gemme en rendering på.** 16-bit PNG, en EXR med flere lag og hvert renderelement og lysgruppe samt en renderfil (`.ccrender`), der åbner igen med sin blanding og gradering. Se [Gem billedet](topic:render#save-the-picture).
- **Tåge, røg og kaustik.** Tåge og dis oplyst af solen og lamper, med lysskakter; én røgsøjle eller sky; kaustik under glas og spejle; adaptiv sampling, der stopper på pixels, som allerede er rene. Kun på grafikkortet. Se [Tåge, røg, støj og kaustik](topic:render#fog-smoke-noise-and-caustics).
- **En renderkø og MP4.** Tilføj billeder i høj kvalitet og hele animationer til {{ui:Renderkø}}; de renderes ét efter ét, og køen overlever, at siden lukkes. Det kræver WebGPU. Videoer kan også gemmes som MP4, hvor browseren kan skrive det. Se [Renderkøen](topic:render#the-render-queue) og [Render videoen](topic:animation#render-the-video).

### Levende visning og præsentationer

- **Levende visning.** {{ui:Eksportér}} › {{ui:Levende visning}} viser modellen i et udseende i realtid ved siden af visningen, og følger hver redigering og kameraet: solskygger, materialer, lamper og lys, der kastes tilbage fra vægge. {{ui:Gå}} gennem den, træk {{ui:Tid}} og {{ui:Måned}} for at flytte solen, eller flyt den til et {{ui:Nyt vindue}}. Den bruger WebGPU, hvor browseren har det, ellers WebGL 2. Se [Den levende visning](topic:live-view).
- **Spredning.** Spred græs, blomster, sten, træer og mennesker over flader eller med en pensel, fra syv nye entourage-elementer og resten af biblioteket; sættene gemmes i filen. Se [Spred planter, sten og mennesker](topic:live-view#scatter-plants-rocks-and-people).
- **Deling.** Et 360°-panorama, en panoramarundtur med pile mellem punkterne, en selvstændig seer (én webside, der åbner offline og ikke henter noget fra internettet) og en video af kameraets bane, alt sammen i udseendet i realtid. Se [Deling](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR i udseendet i realtid.** {{ui:Gennemgå i VR}} viser modellen med sine materialer, himmel, solskygge, lamper, spredte elementer og lys, der kastes tilbage. Se [Sådan ser det ud](topic:vr-review#what-it-looks-like).

### Materialer

- **Materialer lavet med noder.** {{ui:Shading}}-arbejdsområdet bygger filens egne materialer som nodegrafer: billeder, støj og skakbrætter, Voronoi-celler, bølger, mursten, fliser, træ, marmor, farveforløb, snavs og kantslid, farvearbejde, matematik, bump- og normalmaps, til det fulde OpenPBR-materiale. Visningen viser hver ændring med det samme. Se [Lav materialer med noder](topic:shading).
- **Et materialebibliotek og egne teksturer.** Shading-panelet viser bibliotekets materialer: seksten CC0-teksturer, hver med kildeangivelse. Klik på en for at bruge den, eller træk den over en flade. {{ui:Billeder eller en zip…}} eller {{ui:En mappe…}} laver et materiale af dine egne maps, fundet ud fra deres filnavne. Se [Materialer fra biblioteket](topic:shading#materials-from-the-library).
- **MaterialX ind og ud.** {{ui:Eksportér}} et materiale som MaterialX (OpenPBR Surface eller Standard Surface, teksturer som PNG), og {{ui:Importér}} MaterialX-filer med deres billeder. Se [MaterialX](topic:shading#materialx).
- **Dekaler og teksturmaling.** Placér et billede på en flade som en dekal med sit eget materiale, og mal på et materiales billede med en rund pensel. Se [Dekaler](topic:shading#decals) og [Mal på teksturen](topic:shading#paint-on-the-texture).
- **Tekstur-bagning.** Bag ambient occlusion, krumning, belysning og et detaljeret objekts normaler ind i billeder langs et nets UV, på computerens processorkerner. Se [Bag teksturer](topic:shading#bake-textures).

### Animation

- **Animér-arbejdsområdet.** Sæt nøgler på et objekts placering, drejning og størrelse, hver lampes lysstyrke, spredning og farve samt linsens vinkel, direkte i panelet. Tidslinjen får en {{ui:Kurver}}-visning (Bézier-håndtag, gentagelser) og en {{ui:Klip}}-visning, der gemmer nøgler som handlinger, som kan placeres igen og blandes; nøgler på flere rækker kan flyttes, strækkes, kopieres og sættes ind. Se [Animér enhver egenskab](topic:animate).
- **Formnøgler og drivere.** Et net har andre former af sig selv, blandet af skydere, der kan få nøgler, eller sat ud fra andre værdier med et lille udtryk. Se [Formnøgler](topic:animate#shape-keys-morphs) og [Drivere](topic:animate#drivers).
- **Skeletter.** Læg knogler i et net, lad {{ui:Automatiske vægte}} fordele punkterne mellem dem eller mal vægtene, og posér og sæt nøgler på knoglerne; lineær eller dual-quaternion-skinning. Se [Skeletter](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK og begrænsninger.** Rækkevidde (IK) med en pol, kig mod, kopiér transformationer, grænser, barn af og følg sti, for knogler og objekter. Se [IK og begrænsninger](topic:animate#ik-and-constraints).
- **Fysik.** Grupper og komponenter falder, stables og kolliderer som bokse eller kugler, og {{ui:Bag fysik}} gemmer resultatet som nøgler. Se [Fysik](topic:animate#physics-drop-stack-and-collide).

### Filer

- **USD.** {{ui:Gem som}} ({{key:Mod+Shift+S}}) gemmer modellen som `.usda`, `.usdc` eller `.usdz`, og en USD-fil, som ModelCraft har gemt, åbner igen uden tab. USD fra andre programmer åbner eller importeres som net, grupper, komponenter, lamper og kameraer. {{ui:Gem}} skriver stadig `.modelcraft`. Se [Gem, åbn og eksportér USD](topic:usd).
- **glTF, komplet.** glTF-filer kommer ind som redigerbare net med deres normaler, UV, vertexfarver og teksturer; noder som grupper, lys som lamper og kameraer som scener; Draco- og meshopt-filer medregnet. En `.gltf` åbnes, når den slippes sammen med sine filer. Eksport skriver net, teksturer, lamper og kameraer. Se [glTF](topic:formats#gltf-glb-gltf).
- **FBX-, PLY-, STL- og Alembic-import.** FBX 2011 og nyere (net, UV-sæt, materialer, indlejrede teksturer, lys, kameraer), PLY og STL med deres farver, og Alembic-cacher ved deres første sample. OBJ kommer ind med sin `.mtl` og sine billeder, når du slipper dem sammen. Se [Filformater i detaljer](topic:formats).
- **Flere eksporter.** PLY med farver, STL med farverne fra malede flader, og OBJ med sine teksturer som én zip. Se [Filformater i detaljer](topic:formats).
- **STEP-filer.** {{ui:Importér}} læser STEP-dele (AP203, AP214, AP242) og samlinger som lukkede net i deres rigtige størrelse, hver del der, hvor filen placerer den. Se [STEP](topic:formats#step-step-stp).
- **.3dm-filer.** {{ui:Importér}} læser `.3dm`-modeller: net, polyflader og ekstruderinger (fra de net, der er gemt i filen, ellers tesseleret af ModelCraft), kurver som kanter, blokke som komponenter og lag som tags. Se [Hent en .3dm-model ind](topic:import-3dm-files).
- **3D-massive legemer fra DWG og DXF.** Når du importerer en tegning, kommer nu også dens 3D-massive legemer, områder og legemer med, hver som sin egen gruppe, og lukkede som massive legemer. Se [Model på en situationsplan](topic:site-plan#what-comes-in).

### 3D-udskrivning

- **Udskrivningsværktøjer.** {{ui:Kontrollér til 3D-print (STL eller 3MF)…}} › **Udskrivningsværktøjer** har en {{ui:Forhåndsvisning af støtte}} (overhæng, søjler eller træstøtter, cirka hvor meget materiale), {{ui:Vægtykkelse}} (vægge, der er for tynde til at udskrive, listet med {{ui:Vis}}), {{ui:Udhul}} (vægge med den tykkelse du angiver, med afløbshuller) og {{ui:Reparér}} (hver rettelse listet; overlappende dele samles kun, når du beder om det). {{ui:Udhul}} og {{ui:Reparér}} giver en gruppe, hvis flade sider er enkelte flader, eller et net, når resultatet ikke ville lukke sig eller har for mange flader; statuslinjen siger, hvilken af dem det er. Se [Støtter, vægtykkelse, udhulning og reparation](topic:print-tools).
- **Begynder-stilen.** {{ui:Indstillinger}} › {{ui:ModelCraft}} › {{ui:Menuer, taster og mus}} › {{ui:Begynder}}: store knapper til at slippe former og huller, flytte, justere og {{ui:Gruppe}}, så hullerne skærer, og derefter kontrollér modellen til udskrivning. Se [Begynder-stilen](topic:beginner).

### Assistenter og din maskine

- **Flere muligheder for AI-assistenter.** En assistent kan nu liste flader og materialer, skub/træk, male, lave grupper, tilføje og vise scener, tilføje net, redigere modifikatorstakke, eksportere USD, rendere et billede og fylde renderkøen. Se [Brug ModelCraft med AI-assistenter](topic:use-with-ai-assistants).
- **Din maskine.** {{ui:Indstillinger}} › {{ui:ModelCraft}} › {{ui:Rendering}} › {{ui:Din maskine}} viser grafikken, processorkernerne og hukommelsen, som denne browser lader appen bruge, og det niveau, der bestemmer, hvor den levende visning starter. Se [Hvad din maskine renderer med](topic:your-machine).

## Rettet

- {{ui:Massive legemer}} › {{ui:Forening}}, {{ui:Træk fra}} og {{ui:Fællesmængde}} kunne give en gruppe, som ikke var lukket, i enhver størrelse. De lukker nu.
- {{ui:Massive legemer}} › {{ui:Træk fra}} var gråtonet, når intet var valgt, selvom den vælger sine to dele efter hinanden, når du har valgt den.
- Inde i animationstidslinjen forsvandt indtastede taster ingen steder hen, {{key:Mod+S}} også. {{key:Mod+Z}} og {{key:Mod+Y}} er dér tidslinjens egen fortryd og gentag; andre {{key:Mod}}-taster når appen.

## I alle apps

- **Enheder.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Enheder}} har én liste hver for længde, areal, volumen, vinkel og hældning, med de præcise størrelser, som enhedernes definitioner giver (US survey foot er sin egen enhed). Slå de enheder fra, du aldrig bruger, og de forlader enhedslisterne; markér en med stjerne, og nyt arbejde starter i den. En fil beholder altid sin egen enhed. I ModelCraft følger enhedslisten ved siden af værdifeltet kontakterne (modellens egen enhed bliver altid på listen), stjernen sætter enheden for en ny model (når ModelCraft har den enhed), og en længde skrevet med en enheds mærke læses i den enhed. Se [Enheder, skrevne værdier og enhedslisterne](common:unit-lists).
- **En tættere layout og paneler, der kan skjules.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Layouttæthed}} › {{ui:Kompakt}} får mere på skærmen (touchskærme og telefoner beholder deres store knapper). Hvert sidepanel har en slank titellinje: træk den for at fastgøre eller frigøre panelet, slip den på en anden panels linje for at dele en ramme som faner, lås den, så den glider væk til kanten, eller skjul den og hent den tilbage fra kanten. Se [Arrangér panelerne](common:arrange-panels#make-the-layout-denser).
- **Dialogbokse flytter sig.** Træk en dialogboks i dens titellinje væk fra tegningen; den kommer tilbage, hvor du lod den være. Dobbeltklik på titellinjen for at centrere den igen. Se [Flyt en dialogboks](common:arrange-panels#move-a-dialog).
- **Opskrifter til AI-assistenter.** Ti gennemarbejdede forespørgsler til din egen assistent (ryd op i en tegning, plot et sæt, kontrollér tegninger, stil spørgsmål til en model, summér et mængdeudtræk, afprøv en delvariant …), hver med de værktøjer den kalder og de tilladelser den kræver, og hver afspillet igen af vores tests. Appene indeholder ingen AI. Se [Opskrifter til AI-assistenter](common:assistants-recipes).
- **Sprog.** **Português (Portugal)** er nyt i {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Sprog}}. Det, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** har nu alle appens ord, som kladder, der endnu ikke er gennemgået af en indfødt taler. Hjælpeemner er på engelsk.
- **CadCraft Studio** siger, hvorfor en opdateringskontrol fejlede (ingen fil til dit system endnu, intet netværk, en ugyldig signatur), i stedet for bare "Færdig", og holder op med at vise et Nyheder-kort, du har lukket, indtil der kommer en nyere udgivelse.

## Ikke i denne version endnu

- **0.7 er ikke kodesigneret.** Signering og Microsoft Store-pakken er flyttet til 0.8, fordi certifikatvalideringen endnu ikke er kommet igennem. Kontrollér SHA-256 ved siden af hver fil på getcadcraft.com/download. På Windows, hvis SmartScreen stopper installationsprogrammet, vælg {{ui:Flere oplysninger}}, og derefter {{ui:Kør alligevel}}. På en Mac skal du første gang højreklikke på CadCraft Studio og vælge {{ui:Åbn}}. CadCraft Studio er endnu ikke i en appbutik, og der findes endnu ingen iPad- eller iPhone-version.
- Vinkel- og hældningslisterne under {{ui:Enheder}} gemmes, men ingen felter læser dem endnu.
- Rendering på grafikkortet (WebGPU) er her kun testet med en softwarestandin, ikke endnu på rigtige grafikkort, så render noget lille på din egen computer først. Det samme gælder den levende visning, og VR er kun afprøvet med en headsetemulator.
- Uden WebGPU findes der ingen {{ui:Render}}-arbejdsområde eller {{ui:Renderkø}}, og billeder i høj kvalitet har ingen skarphedsdybde, fysisk himmel, himmelbillede, tåge, røg, kaustik eller lysblanding.
- {{ui:Render et billede…}} tegner endnu ikke spredte elementer; de vises i den levende visning, dens panoramaer, seer og video.
- Lamper animeres i visningen, men en renderet video bruger lamperne, som de er, når den starter.
- Knogler og animation læses hverken fra eller skrives til glTF-, FBX- eller USD-filer endnu (skinnede modeller kommer ind i hvilestilling med deres vægte), og glTF- og FBX-materialer ud over grundfarven eller teksturen bevares endnu ikke.
- STEP-farver og samlingens delnavne læses ikke endnu. `.3dm`-import er testet med filer skrevet af formatets værktøjssæt, ikke endnu med filer fra selve modelleringsprogrammet; SubD-objekter, tekst og målsætninger er udeladt.
- Plantebiblioteket fra CivilCraft er i ModelCraft, men placering af planter derfra er ikke lavet endnu.
- Maling af en tekstur på skub/træk-flader gentages med materialets flise; for kun at male én flade skal du konvertere den til et net og {{ui:Afvikl}} den.

Alt andet er i [Ikke lavet endnu](topic:not-built-yet).
