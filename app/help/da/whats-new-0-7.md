---
title: Nyheder i 0.7 (tidligere)
summary: Net med modifikatorer, skulptering, UV'er og kurveobjekter, path tracing på grafikkortet og et Render-arbejdsområde, en levende visning i realtid med spredning og panoramaer, nodematerialer, et Animate-arbejdsområde med knogler og fysik, USD-, FBX-, STEP- og .3dm-filer, og printværktøjer med en Begynder-stil.
keywords: nyheder 0.7, tidligere udgivelse, udgivelsesnoter, changelog, ændringer, 0.7, version, nye funktioner, net, net-arbejdsområde, modifikatorer, underinddeling, fold, uv, afvikl, søm, kurver, kurveobjekter, nurbs, bezier, skulptér, genopbyg net, retopologi, del, beregning, path tracing, webgpu, render-arbejdsområde, renderkø, mp4, exr, støjreduktion, fysisk himmel, hdri, ies, skarphedsdybde, lysblanding, tåge, kaustik, levende visning, realtid, gå, spredning, panorama, rundtur, viewer, shading, noder, nodematerialer, materialebibliotek, materialx, dekaler, teksturmaling, baking, animér, grafeditor, klip, formnøgler, drivere, armatur, knogler, skinning, ik, begrænsninger, fysik, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3d-legemer, understøtninger, vægtykkelse, udhulning, reparation, begynder, assistenter, din maskine, enheder, portugisisk
from: fa562a09
---

Dette er, hvad der er ændret i ModelCraft 0.7 sammenlignet med 0.6. ModelCraft modellerer nu net ligesom skub/træk-geometri, renderer på grafikkortet og har et arbejdsområde til hver type arbejde. Vælg det i listen {{ui:Arbejdsområde}} til venstre på værktøjslinjen.

## Nyt

### Net

- **Net.** Vælg en gruppe eller komponent, og klik på {{ui:Konvertér til net}} i {{ui:Objektinfo}}. Den bliver til et net med flader med et vilkårligt antal hjørner, som kan bære teksturkoordinater, normaler, farver og vægte. {{ui:Konvertér til geometri}} gør det tilbage. Fortryd på et net beholder kun det, som hvert trin ændrede. En fil, der indeholder et net, kræver ModelCraft 0.7 for at åbne. Se [Net](topic:meshes).
- **Net-arbejdsområdet.** Dobbeltklik på et net, eller vælg {{ui:Net}} i listen {{ui:Arbejdsområde}}, for at redigere dets hjørnepunkter, kanter og flader: sløjfer og ringe, proportional redigering, ekstruder, indsnit, facet, sløjfeskæring, kniv, halvér, drej, flet, opløs, udfyld, gitterudfyldning, bro og glid. Indstillingerne for den sidste handling ændres bagefter i panelet. Start fra et plan, en terning, en kugle, en torus og mere. Taster til skub/træk og modellertaster virker begge. Se [Rediger et net i Net-arbejdsområdet](topic:mesh-edit).
- **Modifikatorer.** Spejl, array, underinddelingsflade, facet, gør massiv, boolesk, forskydning, svejs, decimér, glat, gitter, kurvedeformation og krympeindpakning ændrer, hvad et net viser, uden at ændre det. Stak dem, slå hver enkelt til eller fra for visningen og for renderinger, og {{ui:Anvend}} en, når du vil have den permanent. Se [Modifikatorer på et net](topic:modifiers).
- **Underinddeling med folder.** {{ui:Fold}} i Net-arbejdsområdet holder valgte kanter skarpe under en underinddelingsflade. Renderinger kan bruge flere niveauer end visningen. På et stort net viser visningen et lavere niveau og siger det. Se [Underinddelingsflade](topic:modifiers#subdivision-surface).
- **Kurveobjekter.** Bézier-, NURBS- og lige-segment-kurver, der laver et rør, et bånd, en konisk form eller en udfyldt plade, og tekst som kurve. Rediger deres punkter i {{ui:Kurve}}-arbejdsområdet, og brug {{ui:Til net}}, når formen er rigtig. Se [Kurveobjekter](topic:curves).
- **UV-arbejdsområdet.** Markér søm (eller lad ModelCraft markere dem ved skarpe kanter), brug {{ui:Afvikl}} og {{ui:Pak}}, eller projicér efter boks, cylinder, kugle eller visningen. En UV-editor ved siden af 3D-visningen flytter, drejer og skalerer stykkerne. Et skakternet og strækfarver viser resultatet. Se [Læg et nets UV'er ud](topic:uv).
- **Skulptering.** {{ui:Skulptér}}-arbejdsområdet har tegne-, ler-, glat-, tag-, oppumpe-, fold-, klem-, udjævn- og maske-penslerne, spejling på tværs af X, og {{ui:Detalje}}, der tilføjer trekanter, hvor du skulpterer. En pennes tryk sætter penslens størrelse og styrke. Hvert strøg er ét fortryd-trin. Se [Skulptér et net](topic:sculpt).
- **Genopbygning af net og retopologi.** {{ui:Genopbyg net}} laver et helt net igen som jævne trekanter, lukker huller og samler overlappende stykker. For at bygge et rent net over et detaljeret et, vælg det under {{ui:Retopologi}}. Punkter, du flytter, lander på dets flade. Se [Genopbyg net](topic:mesh-edit#remesh).

### Tegning

- **Del en kant eller kurve.** Værktøjet {{ui:Del}} markerer snittene, når du bevæger dig langs en kant, og deler med et klik eller et skrevet tal. Med en kant, bue eller cirkel valgt skriver du `/5`. {{ui:Objektinfo}} › {{ui:Del…}} beder om tallet, til tablets. En bue eller cirkel deles i lige vinkler på den rigtige bue. Se [Del en kant eller kurve i lige dele](topic:divide).
- **Beregninger i værdifeltet.** Skriv `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` eller `2*450mm` for en vilkårlig længde, og `90/2` for en vinkel. En beregning, der ikke kan udføres, siger, hvad der er galt, og hvor. Se [Beregninger](topic:value-box#calculations).

### Rendering

- **Path tracing på grafikkortet.** {{ui:Render et billede…}} › {{ui:Høj kvalitet (path traced)}} kører CadCrafts egen path tracer på grafikkortet, hvor browseren har WebGPU. Linjen under billedet siger, hvilken motor der lavede det. {{ui:Stop}} beholder billedet, og {{ui:Genoptag}} fortsætter derfra. Uden WebGPU bliver billedet path traced med WebGL, som før. Se [Høj kvalitet](topic:render#high-quality).
- **Render i visningen.** {{ui:Render}}-arbejdsområdet path traces selve visningen og starter forfra, når du kredser eller redigerer. Du kan render et {{ui:Område}}, klikke for at {{ui:Fokus}} og indstille {{ui:Detalje}}. Det kræver WebGPU. Se [Render i visningen](topic:render#render-in-the-view).
- **Materialer, lys og himle.** Billeder i høj kvalitet skygger hver flade med OpenPBR-materialemodellen (lag, fuzz, tynde film, farvet glas, glød). Med WebGPU er der også en {{ui:Fysisk himmel}} med {{ui:Dis}}, et {{ui:Himmelbillede (HDRI)}} og producentens IES-lysprofiler til lamper. Se [Himle og lysprofiler](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Et kamera som et fotografis.** Eksponering ud fra blændetal, lukkertid og ISO i alle tilstande. Med WebGPU også skarpdybde, perspektiv med to forsvindingspunkter, hvidbalance, 360°-panoramaer (også i stereo) og kubemaps. Se [Kameraet](topic:render#the-camera).
- **Færdiggør billedet efter rendering.** Gradér det ({{ui:ACES filmic}}, {{ui:AgX}}, {{ui:Filmic}} eller {{ui:Standard}}, kontrast, bloom, glare, vignette, en `.cube`-farvetabel). Bland himlen, solen og hver lampegruppe, og se renderelementerne ét ad gangen, alt sammen uden at rendere igen. Det resterende korn fjernes af en støjreduktion på din egen computer. Se [Færdiggør billedet](topic:render#finish-the-picture) og [Bland lysene efter renderingen](topic:render#mix-the-lights-after-the-render).
- **Flere måder at gemme en render på.** 16-bit PNG, en flerlags-EXR med alle renderelementer og lysgrupper, og en renderfil (`.ccrender`), der åbner igen med sin blanding og gradering. Se [Gem billedet](topic:render#save-the-picture).
- **Tåge, røg og kaustik.** Tåge og dis belyst af solen og lamperne, med lysskakter. Én røgsøjle eller sky. Kaustik under glas og spejle. Adaptiv sampling, der stopper ved pixels, der allerede er rene. Kun på grafikkortet. Se [Tåge, røg, støj og kaustik](topic:render#fog-smoke-noise-and-caustics).
- **En renderkø og MP4.** Føj billeder i høj kvalitet og hele animationer til {{ui:Renderkø}}. De renderes ét efter ét, og køen består, selv når siden lukkes. Det kræver WebGPU. Videoer kan også gemmes som MP4, hvor browseren kan skrive det. Se [Renderkøen](topic:render#the-render-queue) og [Render videoen](topic:animation#render-the-video).

### Levende visning og præsentationer

- **Levende visning.** {{ui:Eksportér}} › {{ui:Levende visning}} viser modellen i et realtidsudseende ved siden af visningen. Den følger hver redigering og kameraet: solskygger, materialer, lamper og lys, der kastes tilbage fra vægge. {{ui:Gå}} igennem den, træk {{ui:Tid}} og {{ui:Måned}} for at flytte solen, eller flyt den til et {{ui:Nyt vindue}}. Den bruger WebGPU, hvor browseren har det, ellers WebGL 2. Se [Den levende visning](topic:live-view).
- **Spredning.** Spred græs, blomster, sten, træer og mennesker over flader eller med en pensel, fra syv nye omgivelsesgenstande og resten af biblioteket. Sættene gemmes i filen. Se [Spred planter, sten og mennesker](topic:live-view#scatter-plants-rocks-and-people).
- **Deling.** Et 360°-panorama, en panoramarundtur med pile mellem steder, en selvstændig viewer (én webside, der åbner offline og ikke henter noget fra internettet) og en video af kameraets bane, alt sammen i realtidsudseendet. Se [Deling](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR i realtidsudseendet.** {{ui:Gennemgå i VR}} viser modellen med dens materialer, himmel, solskygge, lamper, spredte genstande og lys, der kastes tilbage. Se [Sådan ser det ud](topic:vr-review#what-it-looks-like).

### Materialer

- **Materialer lavet med noder.** {{ui:Shading}}-arbejdsområdet bygger filens egne materialer som nodegrafer: billeder, støj og skakternet, Voronoi-celler, bølger, mursten, fliser, træ, marmor, farveforløb, snavs og kantslid, farvebehandling, matematik, bump- og normalkort. Det hele bliver til det fulde OpenPBR-materiale. Visningen viser hver ændring med det samme. Se [Lav materialer med noder](topic:shading).
- **Et materialebibliotek og dine egne teksturesæt.** Shading-panelet viser materialer fra biblioteket: seksten CC0-teksturesæt, hver med kildeangivelse. Klik på et for at bruge det, eller træk det over på en flade. {{ui:Billeder eller en zip…}} eller {{ui:En mappe…}} laver et materiale af dine egne kort, fundet ud fra deres filnavne. Se [Materialer fra biblioteket](topic:shading#materials-from-the-library).
- **MaterialX ind og ud.** Eksportér et materiale som MaterialX (OpenPBR Surface eller Standard Surface, teksturer som PNG), og importér MaterialX-filer med deres billeder. Se [MaterialX](topic:shading#materialx).
- **Dekaler og teksturmaling.** Placér et billede på en flade som en dekal med et eget materiale. Mal på et materiales billede med en rund pensel. Se [Dekaler](topic:shading#decals) og [Mal på teksturen](topic:shading#paint-on-the-texture).
- **Teksturbagning.** Bag ambient occlusion, krumning, belysning og et detaljeret objekts normaler ind i billeder langs et nets UV'er, på computerens processorkerner. Se [Bag teksturer](topic:shading#bake-textures).

### Animation

- **Animate-arbejdsområdet.** Sæt nøgler for et objekts placering, drejning og størrelse, for hver lamps lysstyrke, spredning og farve og for linsevinklen, lige i panelet. Tidslinjen får en {{ui:Kurver}}-visning (Bézier-håndtag, gentagelser) og en {{ui:Klip}}-visning. Den gemmer nøgler som handlinger, der kan placeres igen og blandes. Nøgler på flere rækker kan flyttes, strækkes, kopieres og indsættes. Se [Animér enhver egenskab](topic:animate).
- **Formnøgler og drivere.** Et net indeholder andre former af sig selv, blandet med skydere, der kan få nøgler, eller sat ud fra andre værdier med et lille udtryk. Se [Formnøgler](topic:animate#shape-keys-morphs) og [Drivere](topic:animate#drivers).
- **Armaturer.** Læg knogler i et net, og lad {{ui:Automatiske vægte}} fordele punkterne mellem dem, eller mal vægtene. Posér og sæt nøgler på knoglerne, med lineær eller dobbelt kvaternion-skinning. Se [Armaturer](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK og begrænsninger.** Rækkevidde (IK) med en pol, kig på, kopiér transformationer, grænser, barn af og følg sti, for knogler og objekter. Se [IK og begrænsninger](topic:animate#ik-and-constraints).
- **Fysik.** Grupper og komponenter falder, stables og kolliderer som bokse eller kugler. {{ui:Bag fysik}} gemmer resultatet som nøgler. Se [Fysik](topic:animate#physics-drop-stack-and-collide).

### Filer

- **USD.** {{ui:Gem som}} ({{key:Mod+Shift+S}}) gemmer modellen som `.usda`, `.usdc` eller `.usdz`. En USD-fil, som ModelCraft har gemt, åbner igen uden noget tabt. USD fra andre programmer åbner eller importeres som net, grupper, komponenter, lamper og kameraer. {{ui:Gem}} skriver stadig `.modelcraft`. Se [Gem, åbn og eksportér USD](topic:usd).
- **glTF, komplet.** glTF-filer kommer ind som redigerbare net med deres normaler, UV'er, hjørnefarver og teksturer. Noder kommer ind som grupper, lys som lamper og kameraer som scener, inklusive Draco- og meshopt-filer. En `.gltf` åbner, når den slippes sammen med sine filer. Eksport skriver net, teksturer, lamper og kameraer. Se [glTF](topic:formats#gltf-glb-gltf).
- **Import af FBX, PLY, STL og Alembic.** FBX 2011 og nyere (net, UV-sæt, materialer, indlejrede teksturer, lys, kameraer), PLY og STL med deres farver, og Alembic-cacher ved deres første sample. OBJ kommer ind med sin `.mtl` og sine billeder, når du slipper dem sammen. Se [Filformater i detaljer](topic:formats).
- **Flere eksporter.** PLY med farver, STL med farverne fra malede flader, og OBJ med sine teksturer som én zip. Se [Filformater i detaljer](topic:formats).
- **STEP-filer.** {{ui:Importér}} læser STEP-dele og -samlinger (AP203, AP214, AP242) som lukkede net i deres rigtige størrelse, hver del der, hvor filen placerer den. Se [STEP](topic:formats#step-step-stp).
- **.3dm-filer.** {{ui:Importér}} læser `.3dm`-modeller: net, polyflader og ekstruderinger (fra nettene gemt i filen, ellers tessellerede af ModelCraft), kurver som kanter, blokke som komponenter og lag som tags. Se [Hent en .3dm-model ind](topic:import-3dm-files).
- **3D-legemer fra DWG og DXF.** Når du importerer en tegning, medbringes nu også dens 3D-legemer, områder og kroppe. Hver kommer som sin egen gruppe, og lukkede bliver til massive legemer. Se [Modellér på en situationsplan](topic:site-plan#what-comes-in).

### 3D-print

- **Printværktøjer.** {{ui:Kontrollér til 3D-print (STL eller 3MF)…}} › **Printværktøjer** har en {{ui:Forhåndsvisning af støtte}} (overhæng, søjler eller træstøtter, cirka hvor meget materiale), {{ui:Vægtykkelse}} (vægge, der er for tynde at printe, listet med {{ui:Vis}}), {{ui:Udhul}} (vægge med den tykkelse, du angiver, med afløbshuller) og {{ui:Reparér}} (hver rettelse listet; overlappende dele samles kun, når du beder om det). Udhul og Reparér giver en gruppe, hvis plane sider er enkelte flader. Eller de giver et net, når resultatet ikke ville lukke, eller når det har for mange flader. Statuslinjen siger, hvilken. Se [Støtter, vægtykkelse, udhulning og reparation](topic:print-tools).
- **Stilen Begynder.** {{ui:Indstillinger}} › {{ui:ModelCraft}} › {{ui:Menuer, taster og mus}} › {{ui:Begynder}}: store knapper til at slippe former og huller, flytte, justere og {{ui:Gruppe}}, så hullerne skæres ud. Derefter kontrollerer du modellen til print. Se [Stilen Begynder](topic:beginner).

### Assistenter og din maskine

- **Mere til AI-assistenter.** En assistent kan nu liste flader og materialer, skub/træk, male, lave grupper, tilføje og vise scener, tilføje net, redigere modifikatorstakke, eksportere USD, rendere et billede og fylde renderkøen. Se [Brug ModelCraft med AI-assistenter](topic:use-with-ai-assistants).
- **Din maskine.** {{ui:Indstillinger}} › {{ui:ModelCraft}} › {{ui:Rendering}} › {{ui:Din maskine}} viser grafikken, processorkernerne og hukommelsen, som denne browser lader appen bruge. Den viser også det niveau, der sætter, hvor den levende visning starter. Se [Hvad din maskine renderer med](topic:your-machine).

## Rettet

- {{ui:Massive legemer}} › {{ui:Forening}}, {{ui:Træk fra}} og {{ui:Fællesmængde}} kunne returnere en gruppe, der ikke var lukket, i enhver størrelse. De lukkes nu.
- {{ui:Massive legemer}} › {{ui:Træk fra}} var nedtonet, når intet var valgt, selvom den vælger sine to dele efter hinanden, efter at du har valgt den.
- Inde i animationstidslinjen gik skrevne taster ingen steder hen, {{key:Mod+S}} også. {{key:Mod+Z}} og {{key:Mod+Y}} dér er tidslinjens egen fortryd og gentag. Andre {{key:Mod}}-taster når appen.

## I alle programmer

- **Enheder.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Enheder}} har én liste hver for længde, areal, rumfang, vinkel og hældning, med de præcise størrelser, enhedernes definitioner giver. Den amerikanske landmålerfod er sin egen enhed. Slå de enheder fra, du aldrig bruger, og de forlader enhedslisterne. Sæt en stjerne ved én, og nyt arbejde starter i den. En fil beholder altid sin egen enhed. I ModelCraft følger enhedslisten ved værdifeltet kontakterne. Modellens egen enhed bliver altid i den. Stjernen sætter enheden for en ny model, når ModelCraft har den enhed. En længde, der skrives med en enheds mærke, læses i den enhed. Se [Enheder, skrevne værdier og enhedslisterne](common:unit-lists).
- **En tættere layout og paneler, der gemmes væk.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Layouttæthed}} › {{ui:Kompakt}} får mere med på skærmen. Touchskærme og telefoner beholder deres store knapper. Hvert sidepanel har en smal titellinje: træk den for at fastgøre eller frigøre panelet, slip det på et andet panels linje for at dele én ramme som faner, fastgør det for at lade det glide væk til kanten, eller skjul det og hent det tilbage fra kanten. Se [Arrangér panelerne](common:arrange-panels#make-the-layout-denser).
- **Dialogbokse flyttes.** Træk en dialogboks i dens titellinje væk fra tegningen. Den kommer tilbage, hvor du slap den. Dobbeltklik på titellinjen for at centrere den igen. Se [Flyt en dialogboks](common:arrange-panels#move-a-dialog).
- **Opskrifter til AI-assistenter.** Ti gennemarbejdede anmodninger til din egen assistent: rydde op i en tegning, plotte et sæt, kontrollere tegninger, stille spørgsmål om en model, summere et mængdeudtræk, afprøve en delvariant og så videre. Hver har de værktøjer, den kalder, og de tilladelser, den kræver, og vores tests afspiller hver af dem. Programmerne indeholder ingen AI. Se [Opskrifter til AI-assistenter](common:assistants-recipes).
- **Sprog.** **Português (Portugal)** er ny i {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Sprog}}. **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** har nu alle programmets ord, som kladder, der endnu ikke er gennemgået af en modersmålstaler. Hjælpeemnerne er på engelsk.
- **CadCraft Studio** siger, hvorfor en opdateringskontrol mislykkedes (ingen fil til dit system endnu, intet netværk, en ugyldig signatur) i stedet for bare »Færdig«. Den holder også op med at vise et Nyheder-kort igen, som du har lukket, indtil der er en nyere udgivelse.

## Ikke i denne version endnu

- **0.7 er ikke kodesignet.** Signering og Microsoft Store-pakken er flyttet til 0.8, fordi certifikatvalideringen endnu ikke er kommet igennem. Kontrollér SHA-256 ved siden af hver fil på getcadcraft.com/download. På Windows, hvis SmartScreen stopper installationsprogrammet, vælg {{ui:Mere info}} og derefter {{ui:Kør alligevel}}. På en Mac skal du første gang højreklikke på CadCraft Studio og vælge {{ui:Åbn}}. CadCraft Studio er endnu ikke i en app-butik, og der er endnu ingen iPad- eller iPhone-build.
- Vinkel- og hældningslisterne i {{ui:Enheder}} gemmes, men ingen boks læser dem endnu.
- Rendering på grafikkortet (WebGPU) er kun testet her med en softwareerstatning, endnu ikke på rigtige grafikkort. Render derfor noget småt på din egen computer først. Det samme gælder den levende visning. VR er stadig kun afprøvet med en headset-emulator.
- Uden WebGPU findes der hverken Render-arbejdsområde eller renderkø. Billeder i høj kvalitet har heller ingen skarpdybde, fysisk himmel, himmelbillede, tåge, røg, kaustik eller lysblanding.
- {{ui:Render et billede…}} tegner endnu ikke spredte genstande. De vises i den levende visning, dens panoramaer, viewer og video.
- Lamper animeres i visningen, men en renderet video bruger lamperne, som de er, når den starter.
- Knogler og animation læses ikke fra eller skrives til glTF-, FBX- eller USD-filer endnu. Skinnede modeller kommer ind i hvilestilling, med deres vægte. Og glTF- og FBX-materialer ud over grundfarven eller teksturen bevares endnu ikke.
- STEP-farver og samlingens delnavne læses endnu ikke. `.3dm`-import er testet med filer skrevet af formatets værktøjskasse, endnu ikke med filer fra selve modelleringsprogrammet. SubD-objekter, tekst og mål er udeladt.
- Plantebiblioteket fra CivilCraft er i ModelCraft, men placering af planter derfra er ikke lavet endnu.
- Maling af en tekstur på skub/træk-flader gentages med materialets flise. For kun at male én flade skal du konvertere den til et net og afvikle det.

Alt andet står i [Ikke lavet endnu](topic:not-built-yet).
