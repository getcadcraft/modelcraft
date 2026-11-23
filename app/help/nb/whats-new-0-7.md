---
title: Nytt i 0.7 (tidligere)
summary: Nett med modifikatorer, skulptering, UV-er og kurveobjekter, sporing av stier på grafikkortet og et Render-arbeidsområde, en sanntidsvisning med spredning og panoramaer, nodemateriale, et Animate-arbeidsområde med bein og fysikk, USD-, FBX-, STEP- og .3dm-filer, og utskriftsverktøy med en Nybegynner-stil.
keywords: nytt i 0.7, tidligere utgivelse, utgivelsesnotater, endringslogg, endringer, 0.7, versjon, nye funksjoner, nett, nett-arbeidsområde, modifikatorer, underinndeling, brett, uv, pakk ut, sømmer, kurver, kurveobjekter, nurbs, bezier, skulptering, remesh, retopologi, del, beregning, sporing av stier, webgpu, render-arbeidsområde, renderkø, mp4, exr, støyreduksjon, fysisk himmel, hdri, ies, skarphetsdybde, lysblanding, tåke, kaustikk, live-visning, sanntid, gå, spredning, panorama, rundtur, seer, skyggelegging, noder, nodemateriale, materialbibliotek, materialx, dekaler, teksturmaling, baking, animer, grafeditor, klipp, formnøkler, drivere, armatur, bein, skinning, ik, begrensninger, fysikk, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3d-volumlegemer, støtter, veggtykkelse, hul, reparer, nybegynner, assistenter, din maskin, enheter, portugisisk
from: 16d52810
---

Dette er hva som endret seg i ModelCraft 0.7, sammenlignet med 0.6. ModelCraft modellerer nå nett i tillegg til trykk/trekk-geometri, rendrer på grafikkortet, og har et arbeidsområde for hver type arbeid: velg det i listen {{ui:Arbeidsområde}} til venstre på verktøylinjen.

## Nytt

### Nett

- **Nett.** Velg en gruppe eller komponent og klikk {{ui:Konverter til nett}} i {{ui:Elementinfo}}: den blir et nett, med flater med et hvilket som helst antall hjørner som kan bære teksturkoordinater, normaler, farger og vekter. {{ui:Konverter til geometri}} gjør det om igjen. Angre på et nett beholder bare det hvert steg endret. En fil som inneholder et nett, trenger ModelCraft 0.7 for å åpnes. Se [Nett](topic:meshes).
- **Nett-arbeidsområdet.** Dobbeltklikk et nett, eller velg {{ui:Nett}} i listen {{ui:Arbeidsområde}}, for å redigere hjørnepunktene, kantene og flatene: løkker og ringer, proporsjonal redigering, ekstruder, innfelling, skråkant, løkkekutt, kniv, halvering, roter rundt akse, sammenslåing, oppløs, fyll, rutenettfyll, bro og skyv, og innstillingene for siste operasjon kan endres etterpå i panelet. Start fra et plan, en kube, en kule, en torus og mer. Taster for trykk/trekk og modelleringstaster virker begge. Se [Rediger et nett i Nett-arbeidsområdet](topic:mesh-edit).
- **Modifikatorer.** Speil, matrise, underinndelingsflate, skråkant, fortykk, boolsk, forskyv, sammensmelting, reduser antall flater, glatt, gitter, kurvedeformasjon og krympomslag endrer hva et nett viser uten å endre det. Stable dem, slå hver av eller på for visningen og for renderinger, og {{ui:Bruk}} en når du vil ha den for godt. Se [Modifikatorer på et nett](topic:modifiers).
- **Underinndeling med brett.** {{ui:Brett}} i Nett-arbeidsområdet holder valgte kanter skarpe under en underinndelingsflate. Renderinger kan bruke flere nivåer enn visningen, og på et stort nett viser visningen et lavere nivå og sier fra om det. Se [Underinndelingsflate](topic:modifiers#subdivision-surface).
- **Kurveobjekter.** Bézier-, NURBS- og rettlinjede kurver som lager et rør, et bånd, en avsmalning eller en fylt plate, og tekst som kurve. Rediger punktene deres i {{ui:Kurve}}-arbeidsområdet; {{ui:Til nett}} når formen er riktig. Se [Kurveobjekter](topic:curves).
- **UV-arbeidsområdet.** Merk sømmer (eller la ModelCraft merke dem ved skarpe kanter), {{ui:Pakk ut}} og {{ui:Pakk}}, eller projiser med boks, sylinder, kule eller visningen. En UV-editor ved siden av 3D-visningen flytter, dreier og skalerer delene, og en sjakkrute og strekkfarger viser resultatet. Se [Legg ut et netts UV-er](topic:uv).
- **Skulptering.** {{ui:Skulpter}}-arbeidsområdet har børster for tegning, leire, glatting, grep, oppblåsing, brett, klemme, flate ut og maske, speiling på tvers av X, og {{ui:Detalj}} som legger til trekanter der du skulpterer. En penns trykk setter størrelsen og styrken på børsten. Hvert strøk er ett Angre-steg. Se [Skulptér et nett](topic:sculpt).
- **Remesh og retopologi.** {{ui:Remesh}} lager et helt nett på nytt med jevne trekanter, lukker hull og slår sammen overlappende deler. For å bygge et rent nett over et detaljert ett, velg det under {{ui:Retopologi}}: punkter du flytter, havner på overflaten. Se [Remesh](topic:mesh-edit#remesh).

### Tegning

- **Del en kant eller kurve.** {{ui:Del}}-verktøyet markerer snittene mens du beveger deg langs en kant, og deler med et klikk eller et skrevet tall; med en kant, bue eller sirkel valgt, skriv `/5`; {{ui:Elementinfo}} › {{ui:Del…}} ber om tallet, for nettbrett. En bue eller sirkel deles i like vinkler på den ekte buen. Se [Del en kant eller kurve i like deler](topic:divide).
- **Beregninger i verdiboksen.** Skriv `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` eller `2*450mm` for en hvilken som helst lengde, og `90/2` for en vinkel. En beregning som ikke kan gjøres, sier hva som er galt og hvor. Se [Beregninger](topic:value-box#calculations).

### Rendering

- **Sporing av stier på grafikkortet.** {{ui:Render et bilde…}} › {{ui:High quality (path traced)}} kjører CadCrafts egen sporing av stier på grafikkortet der nettleseren har WebGPU; linjen under bildet sier hvilken motor som laget det. {{ui:Stopp}} beholder bildet, og {{ui:Fortsett}} fortsetter derfra. Uten WebGPU sporer bildet stier med WebGL, som før. Se [Høy kvalitet](topic:render#high-quality).
- **Render i visningen.** {{ui:Render}}-arbeidsområdet sporer stier i selve visningen og begynner på nytt når du kretser eller redigerer: render et {{ui:Område}}, klikk for å {{ui:Fokus}}, still inn {{ui:Detalj}}. Det krever WebGPU. Se [Render i visningen](topic:render#render-in-the-view).
- **Materialer, lys og himler.** Bilder av høy kvalitet skygger hver flate med OpenPBR-materialmodellen (lakklag, lo, tynne filmer, farget glass, glød). Med WebGPU finnes også en {{ui:Fysisk himmel}} med {{ui:Dis}}, et {{ui:Himmelbilde (HDRI)}}, og produsentens IES-lysprofiler for lamper. Se [Himler og lysprofiler](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Et kamera som et fotografis.** Eksponering fra blenderåpning (f-stop), lukkertid og ISO i alle moduser; med WebGPU også skarphetsdybde, toppunktsperspektiv, hvitbalanse, 360°-panoramaer (også i stereo) og kubekart. Se [Kameraet](topic:render#the-camera).
- **Fullfør bildet etter rendering.** Gradér det ({{ui:ACES filmic}}, {{ui:AgX}}, {{ui:Filmic}} eller {{ui:Standard}}, kontrast, bloom, glans, vignetering, en `.cube`-fargetabell), bland himmelen, solen og hver lampegruppe, og se på renderelementene ett for ett, alt uten å rendere på nytt. Den gjenværende kornet fjernes av en støyreduksjon på din egen datamaskin. Se [Fullfør bildet](topic:render#finish-the-picture) og [Bland lysene etter renderingen](topic:render#mix-the-lights-after-the-render).
- **Flere måter å lagre en render på.** 16-bit PNG, en flerlags EXR med hvert renderelement og lysgruppe, og en renderfil (`.ccrender`) som åpnes igjen med sin blanding og gradering. Se [Lagre bildet](topic:render#save-the-picture).
- **Tåke, røyk og kaustikk.** Tåke og dis belyst av solen og lampene, med lysskjær; en røykstøtte eller sky; kaustikk under glass og speil; adaptiv sampling som stopper på piksler som allerede er rene. Bare på grafikkortet. Se [Tåke, røyk, støy og kaustikk](topic:render#fog-smoke-noise-and-caustics).
- **En renderkø og MP4.** Legg bilder av høy kvalitet og hele animasjoner til {{ui:Renderkø}}; de rendres etter hverandre, og køen overlever at siden lukkes. Det krever WebGPU. Videoer kan også lagres som MP4 der nettleseren kan skrive den. Se [Renderkøen](topic:render#the-render-queue) og [Render videoen](topic:animation#render-the-video).

### Live-visning og presentasjoner

- **Live-visning.** {{ui:Eksporter}} › {{ui:Live-visning}} viser modellen i et utseende i sanntid ved siden av visningen, og følger hver redigering og kameraet: solskygger, materialer, lamper og lys som kastes fra vegger. {{ui:Gå}} gjennom den, dra {{ui:Tid}} og {{ui:Måned}} for å flytte solen, eller flytt den til et {{ui:Nytt vindu}}. Den bruker WebGPU der nettleseren har det, ellers WebGL 2. Se [Live-visningen](topic:live-view).
- **Spredning.** Spre gress, blomster, steiner, trær og mennesker over flater eller med en børste, fra syv nye omgivelsesobjekter og resten av biblioteket; settene lagres i filen. Se [Spred planter, steiner og mennesker](topic:live-view#scatter-plants-rocks-and-people).
- **Del.** Et 360°-panorama, en panoramarundtur med piler mellom steder, en frittstående seer (én nettside som åpnes frakoblet og ikke laster noe fra internett) og en video av kameraets bane, alt i sanntidsutseendet. Se [Del](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR i sanntidsutseendet.** {{ui:Gjennomgang i VR}} viser modellen med materialene, himmelen, solskyggen, lampene, spredte objekter og tilbakespredt lys. Se [Slik ser det ut](topic:vr-review#what-it-looks-like).

### Materialer

- **Materialer laget med noder.** {{ui:Shading}}-arbeidsområdet bygger filens egne materialer som nodegrafer: bilder, støy og sjakkruter, Voronoi-celler, bølger, murstein, fliser, tre, marmor, gradienter, smuss og kantslitasje, fargearbeid, matematikk, bump- og normalkart, til det fulle OpenPBR-materialet. Visningen viser hver endring med en gang. Se [Lag materialer med noder](topic:shading).
- **Et materialbibliotek og egne teksturssett.** Shading-panelet lister materialene i Bibliotek: seksten CC0-teksturssett, hver med kildehenvisning. Klikk på ett for å bruke det, eller dra det over en flate. {{ui:Bilder eller en zip…}} eller {{ui:En mappe…}} lager et materiale av dine egne kart, funnet etter filnavnene deres. Se [Materialer fra biblioteket](topic:shading#materials-from-the-library).
- **MaterialX inn og ut.** Eksporter et materiale som MaterialX (OpenPBR Surface eller Standard Surface, teksturer som PNG), og importer MaterialX-filer med deres bilder. Se [MaterialX](topic:shading#materialx).
- **Dekaler og teksturmaling.** Plasser et bilde på en flate som en dekal med et eget materiale, og mal på et materiales bilde med en rund børste. Se [Dekaler](topic:shading#decals) og [Mal på teksturen](topic:shading#paint-on-the-texture).
- **Baking av teksturer.** Bak ambient occlusion, krumning, belysning og et detaljert objekts normaler inn i bilder langs et netts UV-er, på datamaskinens prosessorkjerner. Se [Bake teksturer](topic:shading#bake-textures).

### Animasjon

- **Animate-arbeidsområdet.** Sett nøkler for et objekts plassering, dreining og størrelse, hver lampes lysstyrke, spredning og farge, og linsevinkelen, rett i panelet. Tidslinjen får en {{ui:Kurver}}-visning (Bézier-håndtak, gjentakelser) og en {{ui:Klipp}}-visning som lagrer nøkler som handlinger å plassere på nytt og blande; nøkler på flere rader kan flyttes, strekkes, kopieres og limes inn. Se [Animer en hvilken som helst egenskap](topic:animate).
- **Formnøkler og drivere.** Et nett har andre former av seg selv, blandet med skyveknapper som kan få nøkler, eller settes fra andre verdier med et lite uttrykk. Se [Formnøkler](topic:animate#shape-keys-morphs) og [Drivere](topic:animate#drivers).
- **Armaturer.** Legg bein i et nett, la {{ui:Automatiske vekter}} fordele punktene mellom dem eller mal vektene, og posér og sett nøkler på beinene; lineær eller dobbel kvaternion-skinning. Se [Armaturer](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK og begrensninger.** Rekkevidde (IK) med en pol, se mot, kopier transformasjoner, grenser, barn av og følg bane, for bein og objekter. Se [IK og begrensninger](topic:animate#ik-and-constraints).
- **Fysikk.** Grupper og komponenter faller, stables og kolliderer som bokser eller kuler, og {{ui:Bak fysikk}} beholder resultatet som nøkler. Se [Fysikk](topic:animate#physics-drop-stack-and-collide).

### Filer

- **USD.** {{ui:Lagre som}} ({{key:Mod+Shift+S}}) lagrer modellen som `.usda`, `.usdc` eller `.usdz`, og en USD-fil ModelCraft har lagret, åpnes igjen uten tap. USD fra andre programmer åpnes eller importeres som nett, grupper, komponenter, lamper og kameraer. {{ui:Lagre}} skriver fortsatt `.modelcraft`. Se [Lagre, åpne og eksporter USD](topic:usd).
- **glTF, komplett.** glTF-filer kommer inn som redigerbare nett med sine normaler, UV-er, farger på hjørnepunktene og teksturer, noder som grupper, lys som lamper og kameraer som scener, inkludert Draco- og meshopt-filer; en `.gltf` åpnes når den slippes sammen med sine filer. Eksport skriver nett, teksturer, lamper og kameraer. Se [glTF](topic:formats#gltf-glb-gltf).
- **Import av FBX, PLY, STL og Alembic.** FBX 2011 og nyere (nett, UV-sett, materialer, innebygde teksturer, lys, kameraer), PLY og STL med sine farger, og Alembic-cacher ved første prøve. OBJ kommer inn med sin `.mtl` og bilder når du slipper dem sammen. Se [Filformater i detalj](topic:formats).
- **Flere eksporter.** PLY med farger, STL med fargene på malte flater, og OBJ med sine teksturer som én zip-fil. Se [Filformater i detalj](topic:formats).
- **STEP-filer.** {{ui:Importer}} leser STEP-deler og -sammenstillinger (AP203, AP214, AP242) som lukkede nett i sin virkelige størrelse, hver del der filen plasserer den. Se [STEP](topic:formats#step-step-stp).
- **.3dm-filer.** {{ui:Importer}} leser `.3dm`-modeller: nett, polyflater og ekstruderinger (fra nettene lagret i filen, ellers trianguleres de av ModelCraft), kurver som kanter, blokker som komponenter og layere som etiketter. Se [Hent inn en .3dm-modell](topic:import-3dm-files).
- **3D-volumlegemer fra DWG og DXF.** Import av en tegning henter nå også dens 3D-volumlegemer, områder og legemer, hver som sin egen gruppe, lukkede som volumlegemer. Se [Modeller på en situasjonsplan](topic:site-plan#what-comes-in).

### 3D-utskrift

- **Utskriftsverktøy.** {{ui:Kontroller for 3D-utskrift (STL eller 3MF)…}} › **Utskriftsverktøy** har en {{ui:Forhåndsvisning av støtte}} (overheng, søyler eller trestøtter, omtrent hvor mye materiale), {{ui:Veggtykkelse}} (vegger for tynne til å skrives ut, listet med {{ui:Vis}}), {{ui:Hul ut}} (vegger med tykkelsen du angir, med dreneringshull) og {{ui:Reparer}} (hver reparasjon listet; overlappende deler slås sammen bare når du ber om det). Hul ut og Reparer gir en gruppe der flate sider er enkelte flater, eller et nett når resultatet ikke ville lukke seg eller har for mange flater; statuslinjen sier hvilken. Se [Støtter, veggtykkelse, uthuling og reparasjon](topic:print-tools).
- **Nybegynnerstilen.** {{ui:Innstillinger}} › {{ui:ModelCraft}} › {{ui:Menyer, taster og mus}} › {{ui:Nybegynner}}: store knapper for å slippe former og hull, flytte, justere og {{ui:Gruppe}} slik at hullene kuttes, og kontroller deretter modellen for utskrift. Se [Nybegynnerstilen](topic:beginner).

### Assistenter og din maskin

- **Mer for KI-assistenter.** En assistent kan nå liste flater og materialer, trykke/trekke, male, lage grupper, legge til og vise scener, legge til nett, redigere modifikatorstakker, eksportere USD, rendere et bilde og fylle renderkøen. Se [Bruk ModelCraft med KI-assistenter](topic:use-with-ai-assistants).
- **Din maskin.** {{ui:Innstillinger}} › {{ui:ModelCraft}} › {{ui:Rendering}} › {{ui:Maskinen din}} viser grafikken, prosessorkjernene og minnet denne nettleseren lar appen bruke, og nivået som setter hvor live-visningen starter. Se [Hva maskinen din rendrer med](topic:your-machine).

## Rettet

- {{ui:Volumlegemer}} › {{ui:Forening}}, {{ui:Subtraher}} og {{ui:Snitt}} kunne gi en gruppe som ikke var lukket, uansett størrelse. De lukkes nå.
- {{ui:Volumlegemer}} › {{ui:Subtraher}} var nedtonet med ingenting valgt, selv om det velger sine to deler etter tur etter at du har valgt det.
- Inne i animasjonstidslinjen gikk skrevne taster ingen steder, {{key:Mod+S}} også. {{key:Mod+Z}} og {{key:Mod+Y}} der er tidslinjens egen angre og gjør om; andre {{key:Mod}}-taster når appen.

## I alle apper

- **Enheter.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Enheter}} har én liste hver for lengde, areal, volum, vinkel og helning, med de nøyaktige størrelsene enhetenes definisjoner gir (US survey foot er sin egen enhet). Slå av enhetene du aldri bruker, så forsvinner de fra enhetslistene; stjernemerk én, så starter nytt arbeid i den. En fil beholder alltid sin egen enhet. I ModelCraft følger enhetslisten ved verdiboksen bryterne (modellens egen enhet blir alltid der), stjernen setter enheten for en ny modell (når ModelCraft har den enheten), og en lengde skrevet med merket til en enhet, leses i den enheten. Se [Enheter, skrevne verdier og enhetslistene](common:unit-lists).
- **Tettere oppsett og paneler som ryddes bort.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Layouttetthet}} › {{ui:Kompakt}} får plass til mer på skjermen (berøringsskjermer og telefoner beholder sine store knapper). Hvert sidepanel har en smal tittellinje: dra den for å feste panelet eller frigjøre det som flytende, slipp den på et annet panels linje for å dele én ramme som faner, lås den slik at den glir bort til kanten, eller skjul den og hent den tilbake fra kanten. Se [Ordne panelene](common:arrange-panels#make-the-layout-denser).
- **Dialogbokser kan flyttes.** Dra en dialogboks etter tittellinjen ut av veien for tegningen; den kommer tilbake der du forlot den. Dobbeltklikk tittellinjen for å sentrere den igjen. Se [Flytt en dialogboks](common:arrange-panels#move-a-dialog).
- **Oppskrifter for KI-assistenter.** Ti arbeidseksempler for din egen assistent (rydd en tegning, plott et sett, kontroller tegninger, still spørsmål om en modell, summer en mengdeuttak, prøv en delvariant …), hver med verktøyene den kaller og tillatelsene den trenger, og hver spilt av på nytt av våre tester. Appene inneholder ingen KI. Se [Oppskrifter for KI-assistenter](common:assistants-recipes).
- **Språk.** **Português (Portugal)** er nytt i {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Språk}}. Det, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** har nå hvert ord i appene, som utkast som ikke er gjennomgått av en morsmålstalende. Hjelpemnene er på engelsk.
- **CadCraft Studio** sier hvorfor en oppdateringssjekk mislyktes (ingen fil for systemet ditt ennå, ingen nettverk, en ugyldig signatur) i stedet for bare «Ferdig», og slutter å hente frem kortet Nytt i du har lukket, før det finnes en nyere utgivelse.

## Ikke i denne versjonen ennå

- **0.7 er ikke kodesignert.** Signering, og Microsoft Store-pakken, ble flyttet til 0.8 fordi sertifikatvalideringen ikke har kommet igjennom ennå. Kontroller SHA-256 ved siden av hver fil på getcadcraft.com/download. På Windows, hvis SmartScreen stopper installasjonsprogrammet, velg {{ui:Mer informasjon}}, og deretter {{ui:Kjør likevel}}. På en Mac, første gang, høyreklikk CadCraft Studio og velg {{ui:Åpne}}. CadCraft Studio finnes ikke i en appbutikk ennå, og det finnes ingen iPad- eller iPhone-versjon ennå.
- Vinkel- og helningslistene i {{ui:Enheter}} lagres, men ingen boks leser dem ennå.
- Rendering på grafikkortet (WebGPU) er testet her bare med en programvarestand-in, ikke ennå på ekte grafikkort, så render noe lite på din egen datamaskin først. Det samme gjelder live-visningen, og VR er fortsatt bare prøvd med en hodesettemulator.
- Uten WebGPU finnes ikke Render-arbeidsområdet eller renderkøen, og bilder av høy kvalitet har ikke skarphetsdybde, fysisk himmel, himmelbilde, tåke, røyk, kaustikk eller lysblanding.
- {{ui:Render et bilde…}} tegner ikke spredte objekter ennå; de vises i live-visningen, dens panoramaer, seer og video.
- Lamper animeres i visningen, men en renderet video bruker lampene slik de er når den starter.
- Bein og animasjon leses ikke fra eller skrives til glTF-, FBX- eller USD-filer ennå (skinnede modeller kommer inn i hviletilstand, med sine vekter), og glTF- og FBX-materialer utover grunnfarge eller tekstur beholdes ikke ennå.
- STEP-farger og sammenstillingens delnavn leses ikke ennå. `.3dm`-import er testet med filer skrevet av formatets verktøysett, ikke ennå med filer fra modelleringsprogrammet selv; SubD-objekter, tekst og mål er utelatt.
- Planteblioteket fra CivilCraft finnes i ModelCraft, men å plassere planter fra det er ikke bygget ennå.
- Maling av en tekstur på trykk/trekk-flater gjentas med materialets flis; for å male bare én flate, gjør den om til et nett og pakk den ut.

Alt annet står i [Ikke bygget ennå](topic:not-built-yet).
