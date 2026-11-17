---
title: Ikke bygget ennå
summary: Hva denne versjonen av ModelCraft ikke gjør ennå, og hva du kan gjøre i stedet i dag.
keywords: mangler, ikke ennå, begrensninger, veikart, materialer, teksturer, tekst, layer, trim, del, sky, skrivebord
from: 179fa5e4
---

ModelCraft er en tidlig versjon. Denne siden lister opp hva den ikke gjør ennå, slik at du ikke leter etter det, og den nærmeste måten å få jobben gjort på i dag.

## Tegneverktøy

| Ikke ennå | I stedet, i dag |
|---|---|
| Frihåndstegning | Klikk punktene med {{ui:Kurve}} |
| Endre antall segmenter på en bue eller sirkel etter at den er tegnet | Slett den og tegn den på nytt etter å ha skrevet `24s` |
| Velge skrifttype for [3D-tekst](topic:text3d), eller redigere ordene etter at den er plassert | Slett den og legg til teksten på nytt |
| Endre en vinkel ved å skrive inn i en vinkelmåling, eller endre en sylinders størrelse fra sirkelens måling | Roter kantene med {{ui:Roter}}; skaler sylinderen med {{ui:Skaler}} |
| Mål i eksporterte modellfiler | Mål vises i bilder, utskrifter og PDF-er av visningen; modellfiler inneholder bare geometri |
| Trim, Del og Ytre skall | [Forening, Trekk fra og Skjæring](topic:solids) av lukkede grupper, eller [skjær flatene](topic:intersect) og slett det du ikke trenger |
| Velge rotasjonsaksen med piltastene | Klikk sentrum for {{ui:Roter}} på en flate som vender slik aksen skal peke |
| Låser på mer enn én retning om gangen | Lås én retning med en piltast, og fest deretter til et punkt |
| Endre størrelse langs en skråning, eller fra en måleende som ikke er i et hjørne | Plasser målet på to hjørner, langs en kant eller langs rødt, grønt eller blått |

## Animasjon

| Ikke ennå | I stedet, i dag |
|---|---|
| Animere flater, kanter, solens tid på døgnet, stilen eller hva som er skjult | Gjør den bevegelige delen til en gruppe eller komponent; rendre en egen video for et annet tidspunkt på døgnet |
| Et kamera som følger en tegnet bane, eller som ser på et bevegelig objekt | Sett flere kameranøkler underveis ([Animer](topic:animation)) |
| Lyd i videoer, og høykvalitetsvideoer (sporingsberegnet) uten WebGPU | Legg til lyd i en videoeditor; uten WebGPU, rendre videoen med den raske renderen ([Render videoen](topic:animation#render-the-video)) |
| Animerte lamper (lysstyrke, spredning, farge) i en renderet video, en objektivvinkel animert uten kameranøkler i en video, animering av materialer eller rendringsinnstillinger | Lamper animeres i visningen; for en video, sett også kameranøkler for en zoom; rendre egne videoer for ulike lampeinnstillinger ([Animer en hvilken som helst egenskap](topic:animate)) |
| Speiling av vekter eller ben fra den ene siden til den andre, synlige benomhyllinger, vekter vist skyggelagt punkt for punkt (de vises per flate), å se det posisjonerte nettet mens du maler vekter | Mal begge sider, eller lag den ene halvdelen og bruk en Speil-modifikator før skjelettet legges til; veksle mellom Mal vekter og Posisjon for å sjekke |
| Ben lest fra glTF-, FBX- eller USD-filer som et skjelett, og skjelett skrevet til disse filene | Skinnede modeller kommer inn i hvile med filens vekter; legg til benene i filens ledd-rekkefølge, og trykk deretter {{ui:Bruk filens vekter}} ([Animer](topic:animate)) |
| Flytte et IK-mål eller en pol ved å dra den i visningen, velge et egenrom for en betingelse (lokalt eller verden), strekke IK-kjeder, IK langs en kurve | Skriv inn målets punkt, eller sikt på et objekt og flytt det; hold kjedene til sine lengder |
| Stoff, væsker, myke legemer, ledd og hengsler mellom stive legemer, kollisjon med et objekts eksakte form (bare bokser og kuler rundt det), en levende simulering mens du spiller, en startfart eller rotasjon (legemer starter i hvile) | Bak inn stive legemer og spill nøklene av; lag et hengsel av nøkler; del en uregelmessig form i bokser (grupper) |
| Eksportere animasjonen til glTF eller andre modellfiler | Render en video; `.modelcraft`-filen, og en [USD-fil](topic:usd) ModelCraft lagret, beholder det for ModelCraft |
| Skrive en kommentar eller tittel på en sak i VR, talenotater, flytte et snittplan for hånd i VR | Plasser saken i VR, og legg deretter til ordene i et BCF-program; sett et snittplan i visningen før du går inn: se [Gå gjennom modellen i et VR-headsett](topic:vr-review) |
| Se folk ved skrivebordet i VR (bare folk i VR vises), ta opp en VR-gange | Be dem bli med i VR, eller lag en [animasjon](topic:animation) av gangen |

## Nett

| Ikke ennå | I stedet, i dag |
|---|---|
| Skulptere etter nivåer (multioppløsning), og Detalj som fjerner trekanter som har blitt små | [Skulpter](topic:sculpt) et underdelt nett; {{ui:Remesh}} for å jevne dem ut igjen |
| Remesh til firkantede flater som følger formen | {{ui:Remesh}} (jevne trekanter), og bygg den deretter opp igjen med [Retopologi](topic:mesh-edit#retopology) |
| Vekter malt på hjørnepunkter for modifikatorer (Forskyv, Glatt og Krymp til omslutning virker på hele nettet) | Bruk modifikatoren, og skulpter eller rediger delene som trenger det |
| Kopiere og lime inn hjørnepunkter, kanter eller flater, et kniv-kutt som ender inne i en flate, trådkanter uten flate | Dupliser nettet i Modell; kutt med kniv fra kant til kant; [Ekstruder](topic:mesh-edit#change-the-shape) åpne kanter til flater |

## Ordne og vise

| Ikke ennå | I stedet, i dag |
|---|---|
| Lag av DWG- og DXF-situasjonsplaner som etiketter | Situasjonsplanen kommer inn som én gruppe: eksploder den og grupper delene du vil merke |
| Flere snittkutt samtidig, en snittboks, eller et snitts omriss eksportert som en tegning | Ett [snittplan](topic:sections) kutter om gangen; eksporter visningen som et bilde |
| Vise myke kanter stiplet, eller gjøre dem myke mens du drar en glidebryter | [Gjør myk etter vinkel](topic:soften) i {{ui:Elementinfo}}, og angre for å prøve en annen vinkel |
| Et nettbasert bibliotek av modeller å søke i, eller komponenter med valg (farge, stil) | Det [startbiblioteket](topic:starter); importer Collada-, OBJ- eller glTF-modeller; [strekk](topic:stretch) en kopi til riktig størrelse |
| Plassere planter fra plantebiblioteket | [Spre](topic:live-view#scatter-plants-rocks-and-people) planter i direktevisningen, eller plasser et tre fra startbiblioteket |
| Uavhengige kopier av en gruppe | Gjør den til en komponent, og bruk deretter {{ui:Gjør unik}} (se [Feilsøking](topic:troubleshooting#editing-one-group-changed-another)) |

## Rendring

| Ikke ennå | I stedet, i dag |
|---|---|
| Rendring i visningen (arbeidsområdet {{ui:Render}}), rendringskøen, og kamera-, himmelbilde-, tåke- og lysblandingsalternativer uten WebGPU | {{ui:Render et bilde…}} i {{ui:Høy kvalitet}} bruker sporingsmotoren der, uten disse alternativene ([Render et bilde](topic:render#high-quality)) |
| Et annet program som tegner Render-bildet uten et render-motor-tillegg (CadCraft kjører aldri et program under GNU GPL-lisensen); panorama- eller stereokameraer og et himmelbilde gjennom et annet program; Unreal Engine-tillegget (filene skrives, men tillegget som åpner dem er ikke utgitt) | Våre egne motorer Fast og Path tracer; et tillegs motor ([tegn bildet med et annet program](topic:render-other-program)); en USD-, glTF- eller Unreal-mappefil fra motorlisten, som du kan ta med til et hvilket som helst program |
| Spredte planter og steiner i {{ui:Render et bilde…}} | De vises i [direktevisningen](topic:live-view), dens panoramaer, visere og video |

## Materialer og farger

| Ikke ennå | I stedet, i dag |
|---|---|
| Inndata utover grunnfarge, ruhet, metallisitet, ugjennomsiktighet, normal og emisjon som endrer seg over en flate i bilder av høy kvalitet (de bruker gjennomsnittet) | [Lag materialer med noder](topic:shading): koble dem likevel, visningen viser at de varierer |
| Forskyvning på push/pull-flater | Gjør objektet om til et nett for forskyvning |
| Dele dine egne materialer til Biblioteket fra appen, og pakkede (ARM/ORM) eller EXR-kart i et importert teksturett | Behold dem i filen; importer de separate kartene som PNG eller JPEG |
| Materialer i filen i Live TeamWork-økter (de blir på datamaskinen som laget dem) | Lagre filen og del den |
| Dekaler som bøyer seg rundt buede flater, dekaler i Angre, eller å male teksturer på flere flater samtidig over en søm | Plasser mindre dekaler på hver del; mal hver side av en søm for seg |
| Bake på push/pull-flater, bake flere objekter til ett bilde, et bur du former for hånd, eller bakt belysning fra lamper | Gjør om til et nett og brett det ut; bak hvert objekt; øk søkeavstanden; render et bilde for lampelys |
| Male ruhet, metallisitet eller høyde, male med bilder (stempler) og teksturmaling større enn 512 × 512 | Mal grunnfargen her; lag andre kart i en bildeeditor og importer dem som et teksturett |
| Teksturer i Collada-, STL-, PLY-, 3MF-, IFC-, DWG- og DXF-eksporter, og nodegrafene til filens egne materialer i eksporterte modeller | Disse formatene får hvert materiales farge; glTF og OBJ bærer importerte teksturer; eksporter et materiale alene som [MaterialX](topic:shading#materialx); [USD](topic:usd) beholder hele modellen for ModelCraft |
| Teksturer i Collada-filer | De telles og utelates ved import; teksturer i `.skp`- og `.glb`-filer kommer inn |

## Filer

| Ikke ennå | I stedet, i dag |
|---|---|
| Lagre SketchUp-filer, og tekst og mål fra dem | [Importer](topic:import-sketchup-files) beholder flater, farger og teksturer; eksporter Collada (`.dae`) for å gå tilbake til SketchUp |
| Mål og hjelpelinjer i DWG- og DXF-eksporter | Legg dem til i CAD-programmet etter eksport |
| Punkter, tabeller og flerhjelpelinjer fra DWG og DXF | De telles og utelates; tekst kommer inn som enkeltstrekskrift, ikke tegningens skrift |
| Overflater, nett, tabeller og flerhjelpelinjer fra DWG og DXF; flater på 3D-volumlegemer på sveipede, loftede eller andre frie overflater | De telles og utelates også (3D-volumlegemer selv kommer inn). Eksporter disse delene fra CAD-programmet som OBJ eller Collada, og importer det |
| IFC-typer, egenskaper eller materialer | IFC-eksporten har [etasjer](topic:formats#ifc-ifc) og generiske elementer; legg til resten i et BIM-program |
| Sende en modell direkte til BimCraft | Eksporter {{ui:IFC for BimCraft (.ifc)}} og åpne den i BimCraft |
| Løse kanter i glTF og STL | Bruk OBJ eller Collada for linjearbeid |
| glTF- og FBX-materialer utover grunnfargen (metall, ruhet, normalkart, glass, klarlakk, glans…) | De leses og listes; ModelCraft beholder grunnfargen eller teksturen. Bygg utseendet på nytt i [Skyggearbeidsområdet](topic:shading) |
| glTF-ben, animasjoner og morfmål | Skinnede modeller kommer inn stående i hvile; animer i [tidslinjen](topic:animation) |
| Farger og delnavn i sammenstillingen fra STEP-filer | Delene kommer inn som nett i riktig størrelse; [mal](topic:paint) og gi dem navn etter import |
| SubD-objekter, tekst, mål og lys fra `.3dm`-filer | Se [hva som utelates](topic:import-3dm-files#what-is-left-out-and-said); gjør SubD til nett i programmet som laget filen |
| KTX2-teksturer og materialvarianter i glTF | Eksporter med PNG- eller JPEG-teksturer; standardvarianten brukes |
| Skriving av glTF-instansiering (EXT_mesh_gpu_instancing) | Komponenter skrives én gang og plasseres mange ganger, noe alle visere leser |
| Alembic-animasjon (hver prøve i en hurtigbuffer), Alembic-punkter og -kurver, skriving av Alembic | Den første prøven kommer inn; animer i [tidslinjen](topic:animation); skriv glTF, USD eller OBJ |
| Bump- og normalkart i OBJ-materialer | Bare fargebildet (`map_Kd`) kommer inn |
| FBX-ben og -animasjon, FBX-eksport, FBX 6-filer | Skinnede modeller kommer inn i hvile; eksporter glTF; lagre gamle filer som FBX 2011 eller nyere |
| Collada-skinn, morfer, kameraer, lys, se-på- og skjevtransformeringer, eksterne referanser | Utelates ved import og telles i meldingen |
| Sikkerhetskopifiler | {{ui:Lagre som}} ({{key:Mod+Shift+S}}) lagrer en annen kopi. Etter en krasj tilbyr ModelCraft det ulagrede arbeidet ditt tilbake («Gjenopprett arbeidet ditt?») |
| Skylagring og synkronisering mellom datamaskiner | Ikke tilgjengelig ennå. Lagre filer på datamaskinen din, og kopier dem dit du trenger dem |

## 3D-utskrift

| Ikke ennå | I stedet, i dag |
|---|---|
| Ekte støtter i skjæreprogram (grensesnitt, flåte, det nøyaktige støttemønsteret) | [Forhåndsvisningen av støtte](topic:print-tools#supports-preview) viser hvor og omtrent hvor mye; forhåndsvisningen i skjæreprogrammet viser de ekte |
| Å løse opp en del som går gjennom seg selv, eller kanter der tre eller flere flater møtes | [Reparer](topic:print-tools#repair) lister dem og viser hvor de er; bruk [Skjær flater](topic:intersect) og slett det som er inne |
| Fyllmønstre og et gitter inne i et hult objekt | [Hul ut](topic:print-tools#hollow) lar det stå tomt; skjæreprogrammet legger fylling til en solid del |
| Detaljer for små for dysen din (annet enn vegger) | [Veggtykkelse](topic:print-tools#wall-thickness) finner tynne vegger; layer-forhåndsvisningen i skjæreprogrammet viser resten |

## Ytelse

Angre lagrer en kopi av modellen for hvert steg (et [nett](topic:meshes) beholder bare det som endret seg), så svært store importer av push/pull-geometri gjør hver redigering tregere. Hold importene slanke, og lagre og åpne igjen for å tømme historikken.

## Apper og plattformer

- **Skrivebord:** ModelCraft kjører i nettleseren på Mac, Windows og Linux, og i CadCraft Studio, skrivebordsappen med alle åtte appene i én installasjon. På Android installeres CadCraft Studio fra APK-en på getcadcraft.com/download. Det finnes ingen iPad- eller iPhone-versjon ennå.
- **Berøring:** se [Orbit, panorer og zoom](topic:orbit-pan-zoom) for fingerbevegelsene. En pennes trykk setter penselen i [Skulpter](topic:sculpt); ellers brukes ikke trykk og pennens vinkel.
- **Ark:** ModelCraft [skriver ut én visning per side](topic:export-model#print-the-view-or-save-it-as-a-pdf); det finnes ingen ark-layouter med flere visninger eller en tegningshode. Eksporter til CadCraft-vennlig DWG/DXF for tegninger i målestokk.
