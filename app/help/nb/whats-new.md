---
title: Nytt i 0.7
summary: Nett med modifikatorer, skulptering, UV-er og kurveobjekter, path tracing på grafikkortet og et Render-arbeidsområde, en sanntidsvisning med spredning og panoramaer, nodemateriale, et Animate-arbeidsområde med bein og fysikk, USD-, FBX-, STEP- og .3dm-filer, samt utskriftsverktøy med en Nybegynner-stil.
keywords: hva er nytt, what's new, utgivelsesnotater, endringslogg, endringer, 0.7, versjon, nye funksjoner, nett, nettarbeidsområde, modifikatorer, underflate, brett, uv, pakk ut, sømmer, kurver, kurveobjekter, nurbs, bezier, skulptering, remesh, retopologi, del, beregning, path tracing, webgpu, render-arbeidsområde, renderkø, mp4, exr, støyfjerning, fysisk himmel, hdri, ies, dybdeskarphet, lysblanding, tåke, kaustikk, live-visning, sanntid, gå, spredning, panorama, rundtur, visning, skygge, noder, nodemateriale, materialbibliotek, materialx, dekaler, teksturmaling, baking, animate, grafeditor, klipp, formnøkler, drivere, armatur, bein, skinning, ik, begrensninger, fysikk, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3d-volumlegemer, støtter, veggtykkelse, utholing, reparasjon, nybegynner, assistenter, din maskin, enheter, portugisisk
from: b9fc43e2
---

Dette er endringene i ModelCraft 0.7 sammenlignet med 0.6. ModelCraft modellerer nå nett i tillegg til geometri med trykk/trekk, rendrer på grafikkortet og har et arbeidsområde for hver type arbeid: velg det i listen {{ui:Arbeidsområde}} til venstre i verktøylinjen.

## Nytt

### Nett

- **Nett.** Velg en gruppe eller komponent og klikk {{ui:Konverter til nett}} i {{ui:Elementinfo}}: den blir til et nett, med flater med et hvilket som helst antall hjørner, som kan ha teksturkoordinater, normaler, farger og vekter. {{ui:Konverter til geometri}} gjør det om igjen. Angre på et nett beholder bare det hvert trinn endret. En fil som inneholder et nett, krever ModelCraft 0.7 for å åpnes. Se [Nett](topic:meshes).
- **Nett-arbeidsområdet.** Dobbeltklikk på et nett, eller velg {{ui:Nett}} i listen {{ui:Arbeidsområde}}, for å redigere hjørnepunktene, kantene og flatene: løkker og ringer, proporsjonal redigering, ekstruder, innsett, fasing, løkkeskjæring, kniv, halvering, roter, flett, oppløs, fyll, rutenettfyll, bro og skyv. Innstillingene for siste operasjon kan endres etterpå i panelet. Start fra et plan, en kube, en kule, en torus med mer. Taster for trykk/trekk og modelleringstaster fungerer begge. Se [Rediger et nett i Nett-arbeidsområdet](topic:mesh-edit).
- **Modifikatorer.** Speil, matrise, inndelingsflate, fasing, fortykk, boolsk, forskyvning, smelt sammen, reduser, glatt, gitter, kurvedeformasjon og krymp til flate endrer hva et nett viser, uten å endre det. Stable dem, slå hver av eller på for visningen og for renderinger, og {{ui:Bruk}} en når du vil ha den for godt. Se [Modifikatorer på et nett](topic:modifiers).
- **Inndeling med brettkanter.** {{ui:Brett}} i Nett-arbeidsområdet holder valgte kanter skarpe under en inndelingsflate. Renderinger kan bruke flere nivåer enn visningen, og på et stort nett viser visningen et lavere nivå og sier fra om det. Se [Inndelingsflate](topic:modifiers#subdivision-surface).
- **Kurveobjekter.** Bézier-, NURBS- og rettlinjede kurver som lager et rør, et bånd, en avsmalning eller en fylt plate, og tekst som kurve. Rediger punktene deres i {{ui:Kurve}}-arbeidsområdet; bruk {{ui:Til nett}} når formen er riktig. Se [Kurveobjekter](topic:curves).
- **UV-arbeidsområdet.** Merk sømmer (eller la ModelCraft merke dem ved skarpe kanter), {{ui:Pakk ut}} og {{ui:Pakk}}, eller projiser med boks, sylinder, kule eller visningen. En UV-redigerer ved siden av 3D-visningen flytter, roterer og skalerer delene, og et sjakkbrett og strekkfarger viser resultatet. Se [Legg ut et netts UV-er](topic:uv).
- **Skulptering.** {{ui:Skulpter}}-arbeidsområdet har penslene tegn, leire, glatt, grip, blås opp, brett, klyp, flat ut og maske, speiling over X, og {{ui:Detalj}}, som legger til trekanter der du skulpterer. Trykket på en penn setter størrelsen og styrken på penselen. Hvert strøk er ett angretrinn. Se [Skulptér et nett](topic:sculpt).
- **Remesh og retopologi.** {{ui:Remesh}} lager et helt nett på nytt som jevne trekanter, lukker hull og slår sammen overlappende deler. For å bygge et rent nett over et detaljert et, velg det under {{ui:Retopologi}}: punktene du flytter, havner på overflaten. Se [Remesh](topic:mesh-edit#remesh).

### Tegning

- **Del en kant eller kurve.** Verktøyet {{ui:Del}} markerer snittene når du beveger deg langs en kant, og deler med et klikk eller et skrevet tall. Med en kant, bue eller sirkel valgt, skriv `/5`. {{ui:Elementinfo}} › {{ui:Del…}} spør etter tallet, for nettbrett. En bue eller sirkel deles i like vinkler på den faktiske buen. Se [Del en kant eller kurve i like deler](topic:divide).
- **Beregninger i verdifeltet.** Skriv `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` eller `2*450mm` for en hvilken som helst lengde, og `90/2` for en vinkel. En beregning som ikke kan gjøres, sier hva som er galt og hvor. Se [Beregninger](topic:value-box#calculations).

### Rendering

- **Path tracing på grafikkortet.** {{ui:Render et bilde…}} › {{ui:Høy kvalitet (path tracing)}} kjører CadCrafts egen path tracer på grafikkortet der nettleseren har WebGPU; linjen under bildet sier hvilken motor som laget det. {{ui:Stopp}} beholder bildet, og {{ui:Fortsett}} fortsetter derfra. Uten WebGPU blir bildet path traced med WebGL, som før. Se [Høy kvalitet](topic:render#high-quality).
- **Render i visningen.** {{ui:Render}}-arbeidsområdet path tracer selve visningen og begynner på nytt når du roterer eller redigerer: render et {{ui:Område}}, klikk for å {{ui:Fokus}}, angi {{ui:Detalj}}. Det krever WebGPU. Se [Render i visningen](topic:render#render-in-the-view).
- **Materialer, lys og himler.** Høykvalitetsbilder skygger hver flate med OpenPBR-materialmodellen (belegg, fuzz, tynne filmer, farget glass, glød). Med WebGPU finnes også en {{ui:Fysisk himmel}} med {{ui:Dis}}, et {{ui:Himmelbilde (HDRI)}} og produsentenes IES-lysprofiler for lamper. Se [Himler og lysprofiler](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Et kamera som et fotografis.** Eksponering fra blenderåpning (f-stopp), lukkertid og ISO i alle moduser. Med WebGPU også dybdeskarphet, topunktsperspektiv, hvitbalanse, 360°-panoramaer (også i stereo) og kubekart. Se [Kameraet](topic:render#the-camera).
- **Ferdigstill bildet etter rendering.** Gradér det ({{ui:ACES filmic}}, {{ui:AgX}}, {{ui:Filmic}} eller {{ui:Standard}}, kontrast, bloom, glans, vignett, en `.cube`-fargetabell), bland himmelen, solen og hver lampegruppe, og se på renderelementene ett for ett, alt uten å rendere på nytt. Det gjenværende kornet fjernes av en støyfjerner på din egen datamaskin. Se [Ferdigstill bildet](topic:render#finish-the-picture) og [Bland lysene etter renderingen](topic:render#mix-the-lights-after-the-render).
- **Flere måter å lagre en rendering på.** 16-bit PNG, en flerlags EXR med hvert renderelement og hver lysgruppe, og en renderfil (`.ccrender`) som åpnes igjen med blandingen og graderingen sin. Se [Lagre bildet](topic:render#save-the-picture).
- **Tåke, røyk og kaustikk.** Tåke og dis belyst av solen og lampene, med lysskaft; én røykkolonne eller -sky; kaustikk under glass og speil; adaptiv prøvetaking som stopper på piksler som allerede er rene. Bare på grafikkortet. Se [Tåke, røyk, støy og kaustikk](topic:render#fog-smoke-noise-and-caustics).
- **En renderkø og MP4.** Legg høykvalitetsbilder og hele animasjoner til i {{ui:Renderkø}}. De rendres etter hverandre, og køen består når siden lukkes. Den krever WebGPU. Videoer kan også lagres som MP4 der nettleseren kan skrive den. Se [Renderkøen](topic:render#the-render-queue) og [Render videoen](topic:animation#render-the-video).

### Live-visning og presentasjoner

- **Live-visning.** {{ui:Eksporter}} › {{ui:Live-visning}} viser modellen i et sanntidsuttrykk ved siden av visningen, og følger hver redigering og kameraet: solskygger, materialer, lamper og lys som reflekteres fra vegger. {{ui:Gå}} gjennom den, dra {{ui:Tid}} og {{ui:Måned}} for å flytte solen, eller flytt den til et {{ui:Nytt vindu}}. Den bruker WebGPU der nettleseren har det, ellers WebGL 2. Se [Live-visningen](topic:live-view).
- **Spredning.** Spred gress, blomster, steiner, trær og mennesker over flater eller med en pensel, fra sju nye omgivelseselementer og resten av biblioteket. Settene lagres i filen. Se [Spred planter, steiner og mennesker](topic:live-view#scatter-plants-rocks-and-people).
- **Deling.** Et 360°-panorama, en panoramarundtur med piler mellom stedene, en frittstående viser (én nettside som åpnes frakoblet og ikke laster noe fra internett) og en video av kameraets bane, alt i sanntidsuttrykket. Se [Deling](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR i sanntidsuttrykket.** {{ui:Gjennomgang i VR}} viser modellen med materialene, himmelen, solskyggen, lampene, spredte elementer og lys som reflekteres. Se [Slik ser det ut](topic:vr-review#what-it-looks-like).

### Materialer

- **Materialer laget med noder.** {{ui:Shading}}-arbeidsområdet bygger filens egne materialer som nodegrafer: bilder, støy og sjakkbrett, Voronoi-celler, bølger, murstein, fliser, tre, marmor, graderinger, smuss og kantslitasje, fargearbeid, matematikk, bump- og normalkart, til det fulle OpenPBR-materialet. Visningen viser hver endring med en gang. Se [Lag materialer med noder](topic:shading).
- **Et materialbibliotek og egne teksturssett.** Shading-panelet lister Bibliotekets materialer: seksten CC0-teksturssett, hver med kildehenvisning. Klikk på ett for å bruke det, eller dra det over en flate. {{ui:Bilder eller en zip…}} eller {{ui:En mappe…}} lager et materiale av dine egne kart, funnet etter filnavnene deres. Se [Materialer fra biblioteket](topic:shading#materials-from-the-library).
- **MaterialX inn og ut.** Eksporter et materiale som MaterialX (OpenPBR Surface eller Standard Surface, teksturer som PNG), og importer MaterialX-filer med bildene deres. Se [MaterialX](topic:shading#materialx).
- **Dekaler og teksturmaling.** Plasser et bilde på en flate som et dekal med et eget materiale, og mal på et materials bilde med en rund pensel. Se [Dekaler](topic:shading#decals) og [Mal på teksturen](topic:shading#paint-on-the-texture).
- **Tekstur-baking.** Bak omgivelsesskygge, krumning, belysning og et detaljert objekts normaler inn i bilder langs et netts UV-er, på datamaskinens prosessorkjerner. Se [Bak teksturer](topic:shading#bake-textures).

### Animasjon

- **Animate-arbeidsområdet.** Sett nøkler for et objekts plassering, rotasjon og størrelse, hver lampes lysstyrke, spredning og farge, og linsevinkelen, rett i panelet. Tidslinjen får en {{ui:Kurver}}-visning (Bézier-håndtak, gjentakelser) og en {{ui:Klipp}}-visning som lagrer nøkler som handlinger som kan plasseres på nytt og blandes. Nøkler på flere rader kan flyttes, strekkes, kopieres og limes inn. Se [Animer en hvilken som helst egenskap](topic:animate).
- **Formnøkler og drivere.** Et nett inneholder andre former av seg selv, blandet med glidebrytere som kan settes som nøkler, eller settes fra andre verdier med et lite uttrykk. Se [Formnøkler](topic:animate#shape-keys-morphs) og [Drivere](topic:animate#drivers).
- **Armaturer.** Legg bein i et nett, la {{ui:Automatiske vekter}} fordele punktene mellom dem, eller mal vektene, og posér og sett nøkler på beinene. Lineær eller dual quaternion-skinning. Se [Armaturer](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK og begrensninger.** Rekkevidde (IK) med en pol, se mot, kopier transformasjoner, grenser, barn av og følg bane, for bein og objekter. Se [IK og begrensninger](topic:animate#ik-and-constraints).
- **Fysikk.** Grupper og komponenter faller, stables og kolliderer som bokser eller kuler, og {{ui:Bak fysikk}} beholder resultatet som nøkler. Se [Fysikk](topic:animate#physics-drop-stack-and-collide).

### Filer

- **USD.** {{ui:Lagre som}} ({{key:Mod+Shift+S}}) lagrer modellen som `.usda`, `.usdc` eller `.usdz`, og en USD-fil som ModelCraft har lagret, åpnes igjen uten tap. USD fra andre programmer åpnes eller importeres som nett, grupper, komponenter, lamper og kameraer. {{ui:Lagre}} skriver fortsatt `.modelcraft`. Se [Lagre, åpne og eksporter USD](topic:usd).
- **glTF, komplett.** glTF-filer kommer inn som redigerbare nett med sine normaler, UV-er, fargene på hjørnepunktene og teksturer. Noder blir grupper, lys blir lamper og kameraer blir scener, også Draco- og meshopt-filer. En `.gltf` åpnes når den slippes sammen med filene sine. Eksport skriver nett, teksturer, lamper og kameraer. Se [glTF](topic:formats#gltf-glb-gltf).
- **Import av FBX, PLY, STL og Alembic.** FBX 2011 og nyere (nett, UV-sett, materialer, innbygde teksturer, lys, kameraer), PLY og STL med sine farger, og Alembic-cacher ved deres første bilde. OBJ kommer inn med sin `.mtl` og bildene når du slipper dem sammen. Se [Filformater i detalj](topic:formats).
- **Flere eksporter.** PLY med farger, STL med fargene på malte flater, og OBJ med sine teksturer som én zip. Se [Filformater i detalj](topic:formats).
- **STEP-filer.** {{ui:Importer}} leser STEP-deler og -sammenstillinger (AP203, AP214, AP242) som lukkede nett i sin faktiske størrelse, hver del der filen plasserer den. Se [STEP](topic:formats#step-step-stp).
- **.3dm-filer.** {{ui:Importer}} leser `.3dm`-modeller: nett, polyflater og ekstruderinger (fra nettene lagret i filen, ellers tessellert av ModelCraft), kurver som kanter, blokker som komponenter og lag som etiketter. Se [Ta inn en .3dm-modell](topic:import-3dm-files).
- **3D-volumlegemer fra DWG og DXF.** Import av en tegning tar nå også med dens 3D-volumlegemer, regioner og legemer, hver som sin egen gruppe, og lukkede som volumlegemer. Se [Modeller på en situasjonsplan](topic:site-plan#what-comes-in).

### 3D-utskrift

- **Utskriftsverktøy.** {{ui:Kontroller for 3D-utskrift (STL eller 3MF)…}} › **Utskriftsverktøy** har en {{ui:Forhåndsvisning av støtte}} (overheng, søyler eller trestøtter, omtrent hvor mye materiale), {{ui:Veggtykkelse}} (vegger som er for tynne til å skrives ut, listet med {{ui:Vis}}), {{ui:Hul ut}} (vegger med tykkelsen du angir, med dreneringshull) og {{ui:Reparer}} (hver reparasjon listet; overlappende deler slås sammen bare når du ber om det). Hul ut og Reparer gir en gruppe der de flate sidene er enkeltflater, eller et nett når resultatet ikke ville lukke seg eller har for mange flater. Statuslinjen sier hvilket. Se [Støtter, veggtykkelse, utholing og reparasjon](topic:print-tools).
- **Nybegynnerstilen.** {{ui:Innstillinger}} › {{ui:ModelCraft}} › {{ui:Menyer, taster og mus}} › {{ui:Nybegynner}}: store knapper for å slippe former og hull, flytte, justere og {{ui:Gruppe}}, slik at hullene kutter, og deretter sjekke modellen for utskrift. Se [Nybegynnerstilen](topic:beginner).

### Assistenter og maskinen din

- **Mer for KI-assistenter.** En assistent kan nå liste flater og materialer, trykk/trekk, male, lage grupper, legge til og vise scener, legge til nett, redigere modifikatorstabler, eksportere USD, rendere et bilde og fylle renderkøen. Se [Bruk ModelCraft med KI-assistenter](topic:use-with-ai-assistants).
- **Maskinen din.** {{ui:Innstillinger}} › {{ui:ModelCraft}} › {{ui:Rendering}} › {{ui:Maskinen din}} viser grafikken, prosessorkjernene og minnet denne nettleseren lar appen bruke, og nivået som bestemmer hvor live-visningen starter. Se [Hva maskinen din rendrer med](topic:your-machine).

## Rettet

- {{ui:Volumlegemer}} › {{ui:Forening}}, {{ui:Subtraher}} og {{ui:Snitt}} kunne gi en gruppe som ikke var lukket, uansett størrelse. De lukkes nå.
- {{ui:Volumlegemer}} › {{ui:Subtraher}} var gråtonet med ingenting valgt, selv om den velger de to delene sine etter tur når du har valgt den.
- I animasjonstidslinjen gikk skrevne taster ingen steder, {{key:Mod+S}} også. {{key:Mod+Z}} og {{key:Mod+Y}} der er tidslinjens egen Angre og Gjør om; andre {{key:Mod}}-taster når appen.

## I alle apper

- **Enheter.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Enheter}} har én liste hver for lengde, areal, volum, vinkel og helning, med de nøyaktige størrelsene enhetenes definisjoner gir (den amerikanske landmålerfoten er sin egen enhet). Slå av enhetene du aldri bruker, så forsvinner de fra enhetslistene; merk en, så starter nytt arbeid i den. En fil beholder alltid sin egen enhet. I ModelCraft følger enhetslisten ved siden av verdifeltet bryterne (modellens egen enhet blir alltid i den). Stjernen angir enheten til en ny modell (når ModelCraft har den enheten), og en lengde skrevet med en hvilken som helst enhets merke, leses i den enheten. Se [Enheter, skrevne verdier og enhetslistene](common:unit-lists).
- **Tettere layout og paneler som ryddes bort.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Layouttetthet}} › {{ui:Kompakt}} får plass til mer på skjermen (berøringsskjermer og telefoner beholder sine store knapper). Hvert sidepanel har en tynn tittellinje: dra den for å fest eller frigjør (flytende) panelet, slipp den på et annet panels linje for å dele én ramme som faner, fest den for å skli bort til kanten, eller skjul den og hent den tilbake fra kanten. Se [Ordne panelene](common:arrange-panels#make-the-layout-denser).
- **Dialogbokser flyttes.** Dra en dialogboks etter tittellinjen ut av veien for tegningen; den kommer tilbake der du slapp den. Dobbeltklikk på tittellinjen for å sentrere den igjen. Se [Flytt en dialogboks](common:arrange-panels#move-a-dialog).
- **Oppskrifter for KI-assistenter.** Ti utarbeidede forespørsler til din egen assistent (rydd en tegning, plott et sett, sjekk tegninger, still spørsmål til en modell, summer et mengdeuttak, prøv en delvariant …), hver med verktøyene den kaller og tillatelsene den trenger, og hver kjørt av våre tester. Appene inneholder ingen KI. Se [Oppskrifter for KI-assistenter](common:assistants-recipes).
- **Språk.** **Português (Portugal)** er nytt i {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Språk}}. Den, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** har nå alle ordene i appene, som utkast som ikke er gjennomgått av en morsmålsbruker. Hjelpeemnene er på engelsk.
- **CadCraft Studio** sier hvorfor en oppdateringssjekk mislyktes (ingen fil for systemet ditt ennå, ingen nettverk, en ugyldig signatur) i stedet for bare «Ferdig», og slutter å hente tilbake et Hva er nytt-kort du lukket, til det finnes en nyere utgave.

## Ikke i denne versjonen ennå

- **0.7 er ikke kodesignert.** Signering og Microsoft Store-pakken er flyttet til 0.8, fordi sertifikatvalideringen ikke er kommet gjennom ennå. Kontroller SHA-256 ved siden av hver fil på getcadcraft.com/download. På Windows, hvis SmartScreen stopper installasjonsprogrammet, velg {{ui:Mer info}}, og så {{ui:Kjør likevel}}. På en Mac, første gang, høyreklikk CadCraft Studio og velg {{ui:Åpne}}. CadCraft Studio er ikke i en appbutikk ennå, og det finnes ingen iPad- eller iPhone-bygg ennå.
- Vinkel- og helningslistene i {{ui:Enheter}} lagres, men ingen felt leser dem ennå.
- Rendering på grafikkortet (WebGPU) er bare testet her med en programvarebasert erstatning, ikke ennå på ekte grafikkort. Render derfor noe lite på din egen datamaskin først. Det samme gjelder live-visningen, og VR er bare prøvd med en hodesettemulator.
- Uten WebGPU finnes det verken Render-arbeidsområde eller renderkø, og høykvalitetsbilder har ingen dybdeskarphet, fysisk himmel, himmelbilde, tåke, røyk, kaustikk eller lysblanding.
- {{ui:Render et bilde…}} tegner ikke spredte elementer ennå; de vises i live-visningen, panoramaene, viseren og videoen.
- Lamper animeres i visningen, men en renderet video bruker lampene slik de er når den starter.
- Bein og animasjon leses ikke fra eller skrives til glTF-, FBX- eller USD-filer ennå (skinnede modeller kommer inn i hvileposisjon, med sine vekter), og glTF- og FBX-materialer utover grunnfargen eller teksturen beholdes ikke ennå.
- STEP-farger og sammenstillingens delnavn leses ikke ennå. `.3dm`-import er testet med filer skrevet av formatets verktøysett, ikke ennå med filer fra selve modelleringsprogrammet. SubD-objekter, tekst og mål er utelatt.
- Planteavbiblioteket fra CivilCraft finnes i ModelCraft, men å plassere planter fra det er ikke bygget ennå.
- Maling av en tekstur på trykk/trekk-flater gjentas med materialets flis. For å male bare én flate, gjør den om til et nett og pakk den ut.

Alt annet finnes i [Ikke bygget ennå](topic:not-built-yet).
