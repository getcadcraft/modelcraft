---
title: Ikke lavet endnu
summary: Hvad denne version af ModelCraft ikke gør endnu, og hvad du i stedet kan gøre i dag.
keywords: mangler, ikke endnu, begrænsninger, køreplan, materialer, teksturer, tekst, lag, beskær, del, sky, desktop
from: 179fa5e4
---

ModelCraft er en tidlig version. Denne side viser, hvad den ikke gør endnu, så du ikke leder efter det, og den nærmeste måde at klare opgaven på i dag.

## Tegneværktøjer

| Ikke endnu | I stedet, i dag |
|---|---|
| Frihåndstegning | Klik på punkterne med {{ui:Kurve}} |
| Ændring af antallet af segmenter i en bue eller cirkel efter tegning | Slet den og tegn den igen efter at have skrevet `24s` |
| Valg af skrifttype til [3D-tekst](topic:text3d), eller redigering af dens ord efter placering | Slet den og tilføj teksten igen |
| Ændring af en vinkel ved at skrive i en vinkelmålsætning, eller en cylinders størrelse fra dens cirkels målsætning | Drej kanterne med {{ui:Roter}}; skalér cylinderen med {{ui:Skalér}} |
| Målsætninger i eksporterede modelfiler | Målsætninger vises i billeder, udskrifter og PDF'er af visningen; modelfiler indeholder kun geometri |
| Beskær, Del og Ydre skal | [Forening, Træk fra og Skæring](topic:solids) lukkede grupper, eller [skær flader](topic:intersect) og slet det, du ikke har brug for |
| Valg af rotationsakse med piletasterne | Klik på centret for {{ui:Roter}} på en flade, der vender den vej, aksen skal pege |
| Låse på mere end én inferens ad gangen | Lås én retning med en piletast, og fang derefter et punkt |
| Ændring af størrelse langs en skråning, eller fra en målsætningsende, der ikke er i et hjørne | Placér målsætningen på to hjørner, langs en kant eller langs rød, grøn eller blå |

## Animation

| Ikke endnu | I stedet, i dag |
|---|---|
| Animering af flader, kanter, solens tidspunkt på dagen, stilen eller det, der er skjult | Gør den bevægelige del til en gruppe eller komponent; render en separat video for et andet tidspunkt på dagen |
| Et kamera, der følger en tegnet sti, eller ser på et bevægeligt objekt | Sæt flere kameranøgler undervejs ([Animér](topic:animation)) |
| Lyd i videoer, og højkvalitetsvideoer (path-traced) uden WebGPU | Tilføj lyd i et videoredigeringsprogram; uden WebGPU renderes videoen med den hurtige renderer ([Render videoen](topic:animation#render-the-video)) |
| Animerede lamper (lysstyrke, spredning, farve) i en renderet video, en objektivvinkel animeret uden kameranøgler i en video, animering af materialer eller renderindstillinger | Lamper animeres i visningen; til en video nøgler du også kameraet for en zoom; render separate videoer for forskellige lampeindstillinger ([Animér enhver egenskab](topic:animate)) |
| Spejling af vægte eller knogler fra den ene side til den anden, synlige knoglehylstre, vægte vist skygget punkt for punkt (de vises pr. flade), at se det posede net under vægtmaling | Mal begge sider, eller lav den ene halvdel og brug en Spejl-modifikator, før skelettet tilføjes; skift mellem Mal vægte og Pose for at kontrollere |
| Knogler læst fra glTF-, FBX- eller USD-filer som et skelet, og skeletter skrevet til disse filer | Modeller med skin kommer ind i hvile med filens vægte; tilføj knoglerne i filens ledrækkefølge, og tryk derefter på {{ui:Brug filens vægte}} ([Animér](topic:animate)) |
| Flytning af et IK-mål eller en pol ved at trække det i visningen, en constraints eget rum (lokalt eller verden) at vælge, strækning af IK-kæder, IK langs en kurve | Skriv målets punkt, eller sigt mod et objekt og flyt det; hold kæderne til deres længder |
| Klæde, væsker, bløde legemer, led og hængsler mellem stive legemer, kollision med et objekts præcise form (kun bokse og kugler omkring det), en levende simulering mens du spiller, en startfart eller rotation (legemer starter i hvile) | Bag stive legemer og afspil nøglerne; byg et hængsel af nøgler; del en underlig form op i bokse (grupper) |
| Eksport af animationen til glTF eller andre modelfiler | Render en video; `.modelcraft`-filen og en [USD-fil](topic:usd), som ModelCraft gemte, beholder den til ModelCraft |
| Skrivning af en kommentar eller en titel på et emne i VR, stemmenotater, flytning af et snitplan i hånden i VR | Placér emnet i VR, og tilføj derefter dets ord i et BCF-program; sæt et snitplan i visningen, før du går ind: se [Gennemgå modellen i et VR-headset](topic:vr-review) |
| At se personer ved skrivebordet i VR (kun personer i VR vises), optagelse af en VR-gang | Bed dem om at deltage i VR, eller lav en [animation](topic:animation) af gangen |

## Net

| Ikke endnu | I stedet, i dag |
|---|---|
| Skulptering efter niveauer (multiopløsning), og Detail der fjerner trekanter, der er blevet små | [Skulpturér](topic:sculpt) et underopdelt net; {{ui:Genopbyg net}} for at jævne det ud igen |
| En genopbygning til firkantede flader, der følger formen | {{ui:Genopbyg net}} (ensartede trekanter), og genopbyg derefter med [Retopologi](topic:mesh-edit#retopology) |
| Vægte malet på hjørnepunkter til modifikatorer (Displace, Smooth og Shrinkwrap virker på hele nettet) | Anvend modifikatoren, og skulpturér eller redigér derefter de dele, der har brug for det |
| Kopiering og indsættelse af hjørnepunkter, kanter eller flader, et knivsnit, der ender inde i en flade, trådkanter uden flade | Dupliker nettet i Model; kniv fra kant til kant; [ekstruder](topic:mesh-edit#change-the-shape) åbne kanter til flader |

## Ordning og visning

| Ikke endnu | I stedet, i dag |
|---|---|
| Lag fra DWG- og DXF-situationsplaner som tags | Situationsplanen kommer ind som én gruppe: spræng den og gruppér de dele, du vil tagge |
| Flere snit på én gang, en snitboks, eller et snits kontur eksporteret som tegning | Ét [snitplan](topic:sections) skærer ad gangen; eksportér visningen som billede |
| Bløde kanter vist stiplet, eller blødgøring mens du trækker i en skyder | [Blødgør efter vinkel](topic:soften) i Objektinfo, og fortryd for at prøve en anden vinkel |
| Et online bibliotek af modeller at søge i, eller komponenter med valgmuligheder (farve, stil) | [Startbiblioteket](topic:starter); importér Collada-, OBJ- eller glTF-modeller; [stræk](topic:stretch) en kopi til størrelse |
| Placering af planter fra plantebiblioteket | [Spred](topic:live-view#scatter-plants-rocks-and-people) planter i live-visningen, eller placér et træ fra startbiblioteket |
| Uafhængige kopier af en gruppe | Gør den til en komponent, og brug derefter {{ui:Gør unik}} (se [Fejlfinding](topic:troubleshooting#editing-one-group-changed-another)) |

## Rendering

| Ikke endnu | I stedet, i dag |
|---|---|
| Rendering i visningen (arbejdsområdet {{ui:Render}}), render-køen, og kamera-, himmelbillede-, tåge- og lysblandingsindstillinger uden WebGPU | {{ui:Render et billede…}} i {{ui:Høj kvalitet}} bruger WebGL-path tracer dér, uden disse indstillinger ([Render et billede](topic:render#high-quality)) |
| Et andet program, der tegner renderbilledet uden et render-motor-add-on (CadCraft kører aldrig et program under GNU GPL-licensen); panorama- eller stereokameraer og et himmelbillede via et andet program; Unreal Engine-plug-in'et (filerne skrives, men plug-in'et, der åbner dem, er ikke udgivet) | Vores egne Fast- og Path tracer-motorer; et add-on's motor ([tegn billedet med et andet program](topic:render-other-program)); en USD-, glTF- eller Unreal-mappefil fra Engine-listen, som du kan tage med til ethvert program |
| Spredte planter og klipper i {{ui:Render et billede…}} | De vises i [live-visningen](topic:live-view), dens panoramaer, fremviser og video |

## Materialer og farver

| Ikke endnu | I stedet, i dag |
|---|---|
| Input ud over grundfarve, ruhed, metallicitet, ugennemsigtighed, normal og emission, der ændrer sig hen over en flade i højkvalitetsbilleder (de bruger deres gennemsnit) | [Lav materialer med knuder](topic:shading): forbind dem alligevel, visningen viser at de varierer |
| Forskydning på flader lavet ved skub/træk | Konvertér objektet til et net for forskydning |
| Deling af egne materialer til biblioteket fra appen, og pakkede (ARM/ORM) eller EXR-kort i et importeret teksturset | Behold dem i filen; importér de separate kort som PNG eller JPEG |
| Filens materialer i Live TeamWork-sessioner (de bliver på den computer, der lavede dem) | Gem filen og del den |
| Decals, der bøjer om buede flader, decals i Fortryd, eller maling af flere flades teksturer på tværs af en søm samtidigt | Placér mindre decals på hver del; mal hver side af en søm for sig |
| Baking på skub/træk-flader, baking af flere objekter til ét billede, et bur du former i hånden, eller bagt lys fra lamper | Konvertér til et net og ret det ud; bag hvert objekt; øg søgeafstanden; render et billede for lampelys |
| Maling af ruhed, metallicitet eller højde, maling med billeder (stempler) og teksturmaling større end 512 × 512 | Mal grundfarven her; lav andre kort i et billedredigeringsprogram og importér dem som et teksturset |
| Teksturer i Collada-, STL-, PLY-, 3MF-, IFC-, DWG- og DXF-eksport, og filens egne materialers knudegrafer i eksporterede modeller | Disse formater får hvert materiales farve; glTF og OBJ bærer importerede teksturer; eksportér et materiale alene som [MaterialX](topic:shading#materialx); [USD](topic:usd) bevarer hele modellen til ModelCraft |
| Teksturer i Collada-filer | De tælles og udelades ved import; teksturer i `.skp`- og `.glb`-filer kommer ind |

## Filer

| Ikke endnu | I stedet, i dag |
|---|---|
| Gemning af SketchUp-filer, og tekst og målsætninger fra dem | [Importér](topic:import-sketchup-files) beholder flader, farver og teksturer; eksportér Collada (`.dae`) for at gå tilbage til SketchUp |
| Målsætninger og hjælpelinjer i DWG- og DXF-eksport | Tilføj dem i CAD-programmet efter eksport |
| Punkter, tabeller og multiledere fra DWG og DXF | De tælles og udelades; tekst kommer ind som enkeltstregs-skrift, ikke tegningens skrifttype |
| Flader, net, tabeller og multiledere fra DWG og DXF; flader af 3D-legemer på svejste, lofted eller andre frie overflader | De tælles og udelades også (3D-legemer selv kommer ind). Eksportér disse dele fra CAD-programmet som OBJ eller Collada, og importér dem |
| IFC-typer, egenskaber eller materialer | IFC-eksporten har [etager](topic:formats#ifc-ifc) og generiske elementer; tilføj resten i et BIM-program |
| Afsendelse af en model direkte til BimCraft | Eksportér {{ui:IFC til BimCraft (.ifc)}} og åbn den i BimCraft |
| Løse kanter i glTF og STL | Brug OBJ eller Collada til linjearbejde |
| glTF- og FBX-materialer ud over grundfarven (metal, ruhed, normalkort, glas, klar lak, sheen…) | De læses og vises i en liste; ModelCraft beholder grundfarven eller teksturen. Genskab udseendet i [Shading-arbejdsområdet](topic:shading) |
| glTF-knogler, animationer og morph-targets | Modeller med skin kommer ind stående i hvile; animér i [tidslinjen](topic:animation) |
| Farver og samlingens delnavne fra STEP-filer | Dele kommer ind som net i deres rigtige størrelse; [mal](topic:paint) og navngiv dem efter import |
| SubD-objekter, tekst, målsætninger og lys fra `.3dm`-filer | Se [hvad der udelades](topic:import-3dm-files#what-is-left-out-and-said); lav SubD om til net i programmet, der lavede filen |
| KTX2-teksturer og materialevarianter i glTF | Eksportér med PNG- eller JPEG-teksturer; standardvarianten bruges |
| Skrivning af glTF-instancing (EXT_mesh_gpu_instancing) | Komponenter skrives én gang og placeres mange gange, hvilket enhver fremviser læser |
| Alembic-animation (hver sample af en cache), Alembic-punkter og -kurver, skrivning af Alembic | Første sample kommer ind; animér i [tidslinjen](topic:animation); skriv glTF, USD eller OBJ |
| Bump- og normalkort i OBJ-materialer | Kun farvebilledet (`map_Kd`) kommer ind |
| FBX-knogler og animation, FBX-eksport, FBX 6-filer | Modeller med skin kommer ind i hvile; eksportér glTF; gem gamle filer som FBX 2011 eller nyere |
| Collada-skins, morphs, kameraer, lys, look-at- og skew-transformationer, eksterne referencer | Udelades ved import og tælles i beskeden |
| Sikkerhedskopifiler | {{ui:Gem som}} ({{key:Mod+Shift+S}}) gemmer en anden kopi. Efter et nedbrud tilbyder ModelCraft dit ikke-gemte arbejde tilbage ("Gendan dit arbejde?") |
| Skylagring og synkronisering mellem computere | Ikke tilgængelig endnu. Gem filer på din computer, og kopiér dem dér, hvor du har brug for dem |

## 3D-print

| Ikke endnu | I stedet, i dag |
|---|---|
| Rigtige slicer-understøtninger (grænseflader, raft, det præcise støttemønster) | [Forhåndsvisning af støtte](topic:print-tools#supports-preview) viser hvor og ca. hvor meget; din slicers forhåndsvisning viser de rigtige |
| Udredning af en del, der går gennem sig selv, eller kanter, hvor tre eller flere flader mødes | [Reparér](topic:print-tools#repair) lister dem med deres placering; brug [Skær flader](topic:intersect) og slet det, der er indeni |
| Udfyldningsmønstre og et gitter inde i en hul del | [Udhul](topic:print-tools#hollow) efterlader den tom; din slicer tilføjer udfyldning til en massiv del |
| Detaljer, der er for små til din dyse (bortset fra vægge) | [Vægtykkelse](topic:print-tools#wall-thickness) finder tynde vægge; din slicers lagforhåndsvisning viser resten |

## Ydelse

Fortryd gemmer en kopi af modellen for hvert trin (et [net](topic:meshes) gemmer kun det, der er ændret), så meget store importer af skub/træk-geometri gør hver redigering langsommere. Hold importerne slanke, og gem og genåbn for at rydde historikken.

## Apps og platforme

- **Desktop:** ModelCraft kører i browseren på Mac, Windows og Linux, og i CadCraft Studio, desktop-appen med alle otte apps i én installation. På Android installeres CadCraft Studio fra sin APK på getcadcraft.com/download. Der findes endnu ikke en iPad- eller iPhone-version.
- **Touch:** se [Orbit, panorér og zoom](topic:orbit-pan-zoom) for fingerbevægelser. Et pennetryk styrer penslen i [Skulpturér](topic:sculpt); ellers bruges tryk og pennens hældning ikke.
- **Ark:** ModelCraft [udskriver én visning pr. side](topic:export-model#print-the-view-or-save-it-as-a-pdf); der er ingen arklayouts med flere visninger eller et tegningshoved. Eksportér til CadCraft-venlige DWG/DXF for tegninger i skala.
