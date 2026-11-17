---
title: Veel pole valmis
summary: Mida selle ModelCraft-i versioon veel ei tee ja mida praegu selle asemel teha.
keywords: puudu, veel pole, piirangud, teekaart, materjalid, tekstuurid, tekst, kihid, kärbi, jaga, pilv, töölaud
from: 179fa5e4
---

ModelCraft on varajane versioon. See leht loetleb, mida ta veel ei tee, et sa ei otsiks seda asjatult, ning lähima viisi töö tegemiseks praegu.

## Joonistustööriistad

| Pole veel | Selle asemel praegu |
|---|---|
| Vabakäejoonistamine | Klõpsa punktid tööriistaga {{ui:Curve}} |
| Kaare või ringi segmentide arvu muutmine pärast joonistamist | Kustuta see ja joonista uuesti, pärast `24s` sisestamist |
| Fondi valimine [3D-tekstile](topic:text3d) või selle sõnade muutmine pärast paigutamist | Kustuta ja lisa tekst uuesti |
| Nurga muutmine nurgamõõtu kirjutades või silindri suuruse muutmine ringi mõõdu järgi | Pööra servi tööriistaga {{ui:Rotate}}; skaleeri silinder tööriistaga {{ui:Scale}} |
| Mõõdud eksporditud mudelifailides | Mõõdud on näha vaate piltides, väljatrükkides ja PDF-ides; mudelifailid sisaldavad ainult geomeetriat |
| Kärbi, Jaga ja Välimine kest | [Ühenda, Lahuta ja Lõikumine](topic:solids) suletud gruppidega või [lõika tahud](topic:intersect) ja kustuta, mis pole vaja |
| Pöördetelje valimine nooleklahvidega | Klõpsa {{ui:Rotate}} keskpunkt tahul, mis on suunatud telje soovitud suunas |
| Lukud rohkem kui ühele järeldusele korraga | Lukusta üks suund nooleklahviga ja seejärel kinnitu punkti külge |
| Suuruse muutmine kaldus suunas või mõõdu otsast, mis ei asu nurgal | Pane mõõt kahele nurgale, mööda serva või mööda punast, rohelist või sinist suunda |

## Animatsioon

| Pole veel | Selle asemel praegu |
|---|---|
| Tahkude, servade, päikese kellaaja, stiili või peidetud asjade animeerimine | Tee liikuv osa grupiks või komponendiks; renderda eraldi video teise kellaaja jaoks |
| Kaamera, mis järgib joonistatud teed või vaatab liikuvat objekti | Lisa teele rohkem kaamera võtmepunkte ([Animeeri](topic:animation)) |
| Heli videotes ja kõrge kvaliteediga (path-traced) videod ilma WebGPU-ta | Lisa heli videotoimetajas; ilma WebGPU-ta renderda video kiire renderdajaga ([Renderda video](topic:animation#render-the-video)) |
| Animeeritud lambid (heledus, levik, värv) renderdatud videos, objektiivi nurk, mida animeeritakse ilma kaamera võtmeteta videos, materjalide või renderdussätete animeerimine | Lambid animeeruvad vaates; videos võta kaamera samuti võtmesse suumi jaoks; renderda eraldi videod erinevate lampide sätete jaoks ([Animeeri mis tahes omadust](topic:animate)) |
| Kaalude või luude peegeldamine ühelt poolt teisele, nähtavad luuümbrised, kaalude varjutamine punkt-punktilt (näidatakse tahkude kaupa) ning poseeritud võrgu nägemine kaalude värvimisel | Värvi mõlemad pooled või tee üks pool ja kasuta enne armatuuri lisamist peegeldusmodifikaatorit; kontrolli, lülitudes režiimide {{ui:Paint}} weights ja Pose vahel |
| Luud, mis loetakse glTF-, FBX- või USD-failidest armatuurina, ja armatuurid, mis neisse failidesse kirjutatakse | Skelettmudelid tulevad sisse puhkeasendis faili kaaludega; lisa luud faili liigendite järjekorras ja seejärel {{ui:Use the file's weights}} ([Animeeri](topic:animate)) |
| IK-sihtmärgi või pooluse lohistamine vaates, konstrainti oma ruumi (kohalik või maailm) valimine, IK-ahelate venitamine, IK mööda kõverat | Sisesta sihtmärgi punkt või suuna objektile ja liiguta seda; hoia ahelad nende pikkustes |
| Riided, vedelikud, pehmed kehad, liigendid ja hinged jäikade kehade vahel, kokkupõrge objekti täpse kujuga (ümber on ainult kastid ja pallid), elav simulatsioon mängimise ajal, algkiirus või pöörlemine (kehad algavad paigalt) | Küpseta jäigad kehad ja mängi võtmeid; ehita hing võtmetest; jaga kummaline kuju kastideks (gruppideks) |
| Animatsiooni eksportimine glTF-i või muudesse mudelifailidesse | Renderda video; `.modelcraft`-fail ja ModelCraft-i salvestatud [USD-fail](topic:usd) jäävad ModelCraft-ile |
| Kommentaari või pealkirja kirjutamine probleemile VR-is, häälmärkmed, lõiketasandi käsitsi liigutamine VR-is | Pane probleem VR-is, seejärel lisa selle sõnad BCF-programmis; määra lõiketasand vaates enne sisenemist: vt [Mudeli ülevaatamine VR-peakomplektiga](topic:vr-review) |
| Inimeste nägemine laua taga VR-is (näidatakse ainult VR-is olevaid inimesi), VR-kõnnaku salvestamine | Palu neil liituda VR-iga või tee kõnnakust [animatsioon](topic:animation) |

## Võrgud

| Pole veel | Selle asemel praegu |
|---|---|
| Skulptuur tasemete kaupa (multiresolution) ja Detail, mis eemaldab pisikeseks muutunud kolmnurgad | [Skulpti](topic:sculpt) alamjaotatud võrku; {{ui:Remesh}}, et need uuesti ühtlustada |
| Uuesti võrgustamine nelinurksetesse tahkudesse, mis järgivad kuju | {{ui:Remesh}} (ühtlased kolmnurgad), seejärel ehita see uuesti [retopoloogiaga](topic:mesh-edit#retopology) |
| Tippude kaalud modifikaatoritele (Displace, Smooth ja Shrinkwrap töötavad kogu võrgul) | Rakenda modifikaator ja seejärel skulpti või muuda vajalikke osi |
| Tippude, servade või tahkude kopeerimine ja kleepimine, noaga lõige, mis lõpeb tahu sees, servad ilma tahuta | Dubleeri võrk mudelis; lõika noaga servast servani; [väljapressi](topic:mesh-edit#change-the-shape) avatud servad tahkudeks |

## Korrastamine ja vaatamine

| Pole veel | Selle asemel praegu |
|---|---|
| DWG- ja DXF-tegevusplaanide kihid siltidena | Tegevusplaan tuleb sisse ühe grupina: lahuta see ja grupeeri osad, mida soovid sildistada |
| Mitu lõikelõiget korraga, lõikekast või lõike kontuur eksporditud joonisena | Üks [lõiketasand](topic:sections) lõikab korraga; ekspordi vaade pildina |
| Pehmete servade katkendjoonena näitamine või pehmendamine liugurit lohistades | [Pehmenda nurga järgi](topic:soften) tööriistas {{ui:Entity info}} ja võta tagasi, et proovida teist nurka |
| Internetist otsitav mudelite teek või komponendid, millel on valikud (värv, stiil) | [Algusteek](topic:starter); impordi Collada-, OBJ- või glTF-mudeleid; [venita](topic:stretch) koopia soovitud suuruseks |
| Taimede paigutamine taimeteegist | [Hajuta](topic:live-view#scatter-plants-rocks-and-people) taimed reaalajas vaates või paiguta algusteegist puu |
| Grupi sõltumatud koopiad | Tee see komponendiks ja seejärel {{ui:Make unique}} (vt [Tõrkeotsing](topic:troubleshooting#editing-one-group-changed-another)) |

## Renderdamine

| Pole veel | Selle asemel praegu |
|---|---|
| Renderdamine vaates ({{ui:Render}} tööruum), renderdusjärjekord ning kaamera-, taevapildi-, udu- ja valguse segamise sätted ilma WebGPU-ta | {{ui:Render a picture…}} kvaliteedis {{ui:High quality}} kasutab seal WebGL-i teejälgijat ilma nende sätteteta ([Renderda pilt](topic:render#high-quality)) |
| Pildi joonistamine teise programmiga ilma renderdusmootori lisandmoodulita (CadCraft ei käivita kunagi programmi GNU GPL litsentsi all); paanoraamilised või stereokaamerad ja taevapilt teise programmi kaudu; Unreal Engine'i pistikprogramm (failid kirjutatakse, aga neid avav pistikprogramm pole avaldatud) | Meie enda mootorid Fast ja Path tracer; lisandmooduli mootor ([joonista pilt teise programmiga](topic:render-other-program)); USD-, glTF- või Unreal-kaustafail mootorite loendist, et viia see mis tahes programmi |
| Hajutatud taimed ja kivid {{ui:Render a picture…}} korral | Need näidatakse [reaalajas vaates](topic:live-view), selle panoraamides, vaatajas ja videos |

## Materjalid ja värvid

| Pole veel | Selle asemel praegu |
|---|---|
| Sisendid peale põhivärvi, karedus, metallilisus, läbipaistmatus, normaal ja kiirgus, mis muutuvad üle pinna kõrgekvaliteedilistes piltides (need kasutavad keskmist) | [Tee materjalid sõlmedega](topic:shading): ühenda need ikkagi, vaade näitab, et need muutuvad |
| Nihe tõmba/lükka tahkudel | Muuda objekt nihkeks võrguks |
| Oma materjalide jagamine teeki rakendusest ning pakitud (ARM/ORM) või EXR-kaardid imporditud tekstuurikomplektis | Hoia need failis; impordi eraldi kaardid PNG- või JPEG-vormingus |
| Faili materjalid Live TeamWorki seansides (need jäävad selle arvuti juurde, mis need tegi) | Salvesta fail ja jaga seda |
| Kleebised, mis painduvad kõverate pindade ümber, kleebised tagasivõtmises või mitme tahu tekstuuride värvimine korraga üle õmbluse | Pane väiksemad kleebised igale osale; värvi iga õmbluse pool eraldi |
| Küpsetamine tõmba/lükka tahkudele, mitme objekti küpsetamine ühte pilti, käsitsi kujundatav puur või lampidest küpsetatud valgus | Muuda võrguks ja avalda see; küpseta iga objekt eraldi; suurenda otsinguulatust; renderda pilt lambivalguse jaoks |
| Karedus-, metallilisus- või kõrguse värvimine, pildiga värvimine (templid) ja tekstuuri värvimine suuremalt kui 512 × 512 | Värvi siin põhivärvi; tee teised kaardid pildiredaktoris ja impordi need tekstuurikomplektina |
| Tekstuurid Collada-, STL-, PLY-, 3MF-, IFC-, DWG- ja DXF-ekspordis ning faili enda materjalide sõlmegraafikud eksporditud mudelites | Need vormingud saavad iga materjali värvi; glTF ja OBJ kannavad imporditud tekstuure; ekspordi materjal eraldi kui [MaterialX](topic:shading#materialx); [USD](topic:usd) hoiab kogu mudeli ModelCraft-ile |
| Tekstuurid Collada-failides | Need loetakse ja jäetakse impordil välja; `.skp`- ja `.glb`-failide tekstuurid tulevad sisse |

## Failid

| Pole veel | Selle asemel praegu |
|---|---|
| SketchUp-failide salvestamine ning nende tekst ja mõõdud | [Impordi](topic:import-sketchup-files) säilitab tahud, värvid ja tekstuurid; ekspordi Collada (`.dae`), et minna tagasi SketchUp-i |
| Mõõdud ja juhikud DWG- ja DXF-ekspordis | Lisa need CAD-programmis pärast eksportimist |
| Punktid, tabelid ja mitmikjuhised DWG-st ja DXF-ist | Need loetakse ja jäetakse välja; tekst tuleb sisse ühejooneliste kirjadena, mitte joonise fondiga |
| Pinnad, võrgud, tabelid ja mitmikjuhised DWG-st ja DXF-ist; 3D-tahkiste tahud keerukatel vabakujulistel pindadel | Need loetakse samuti ja jäetakse välja (3D-tahkised ise tulevad sisse). Ekspordi need osad CAD-programmist OBJ- või Collada-vormingus ja impordi see |
| IFC-tüübid, omadused või materjalid | IFC-eksport sisaldab [korruseid](topic:formats#ifc-ifc) ja üldisi elemente; lisa ülejäänu BIM-programmis |
| Mudeli saatmine otse BimCraftile | Ekspordi {{ui:IFC for BimCraft (.ifc)}} ja ava see BimCraftis |
| Lahtised servad glTF-s ja STL-is | Joonte jaoks kasuta OBJ-d või Collada-d |
| glTF- ja FBX-materjalid põhivärvist kaugemal (metall, karedus, normaalkaardid, klaas, selge kate, kiht…) | Need loetakse ja loetletakse; ModelCraft säilitab põhivärvi või tekstuuri. Loo välimus uuesti [varjutustööruumis](topic:shading) |
| glTF-luud, animatsioonid ja morfi sihtmärgid | Skelettmudelid tulevad sisse puhkeasendis; animeeri [ajajoonel](topic:animation) |
| STEP-failide värvid ja koostu osade nimed | Osad tulevad sisse võrkudena õigel suurusel; [värvi](topic:paint) ja nimeta need pärast importi |
| SubD-objektid, tekst, mõõdud ja valgustid `.3dm`-failidest | Vt [mida välja jäetakse](topic:import-3dm-files#what-is-left-out-and-said); muuda SubD võrkudeks programmis, mis faili tegi |
| KTX2-tekstuurid ja materjalivariandid glTF-s | Ekspordi PNG- või JPEG-tekstuuridega; kasutatakse vaikevarianti |
| glTF-i instantsimise kirjutamine (EXT_mesh_gpu_instancing) | Komponendid kirjutatakse üks kord ja paigutatakse mitu korda, mida iga vaataja loeb |
| Alembic-animatsioon (iga vahevaade vahemälus), Alembic-punktid ja -kõverad, Alembicu kirjutamine | Esimene vahevaade tuleb sisse; animeeri [ajajoonel](topic:animation); kirjuta glTF, USD või OBJ |
| Põkk- ja normaalkaardid OBJ-materjalides | Tuleb sisse ainult värvipilt (`map_Kd`) |
| FBX-luud ja animatsioon, FBX-eksport, FBX 6 failid | Skelettmudelid tulevad sisse puhkeasendis; ekspordi glTF; salvesta vanad failid kui FBX 2011 või uuem |
| Collada skinnid, morfid, kaamerad, valgustid, vaatamis- ja nihketeisendused, välised viited | Impordil jäetakse välja ja loendatakse sõnumis |
| Varufailid | {{ui:Save as}} ({{key:Mod+Shift+S}}) salvestab teise koopia. Pärast krahhi pakub ModelCraft salvestamata töö tagasi („Kas taastame su töö?“) |
| Pilvesalvestus ja sünkroonimine arvutite vahel | Pole veel saadaval. Salvesta failid oma arvutisse ja kopeeri need sinna, kuhu vaja |

## 3D-printimine

| Pole veel | Selle asemel praegu |
|---|---|
| Päris viilutaja toed (liidesed, alus, täpne toetusmuster) | [Toetuste eelvaade](topic:print-tools#supports-preview) näitab, kus ja umbes kui palju; viilutaja eelvaade näitab päris toed |
| Osa, mis läbib iseennast, või servad, kus kohtub kolm või enam tahku, lahti harutamine | [Paranda](topic:print-tools#repair) loetleb need koos asukohaga; kasuta [Lõika tahud](topic:intersect) ja kustuta seest |
| Täitemustrid ja võre õõnsuse sees | [Õõnestamine](topic:print-tools#hollow) jätab selle tühjaks; viilutaja lisab tahke osale täite |
| Detailid, mis on sinu düüsile liiga väikesed (peale seinte) | [Seina paksus](topic:print-tools#wall-thickness) leiab õhukesed seinad; viilutaja kihieelvaade näitab ülejäänut |

## Jõudlus

Tagasivõtmine hoiab iga sammu jaoks mudeli koopiat (a [võrk](topic:meshes) hoiab ainult muutunud osa), seega teevad väga suured nihkega geomeetria impordid iga muudatuse aeglasemaks. Hoia impordid kerged ning salvesta ja ava fail uuesti, et ajalugu tühjendada.

## Rakendused ja platvormid

- **Töölaud:** ModelCraft töötab brauseris Macis, Windowsis ja Linuxis ning CadCraft Studio'is, töölauarakenduses, kus on kõik kaheksa rakendust ühes paigalduses. Androidil paigaldub CadCraft Studio oma APK-st aadressil getcadcraft.com/download. iPadi ega iPhone'i versiooni pole veel.
- **Puuteekraan:** sõrmežestide kohta vt [Orbiit, nihutamine ja suumimine](topic:orbit-pan-zoom). Pliiatsi surve määrab pintsli suuruse [Skulptis](topic:sculpt); mujal surve ja pliiatsi kallet ei kasutata.
- **Lehed:** ModelCraft [prindib ühe vaate lehe kohta](topic:export-model#print-the-view-or-save-it-as-a-pdf); mitme vaatega lehepaigutusi ja tiitelplokki pole. Joonised mõõtkavas ekspordi CadCraft-sõbralikku DWG/DXF-i.
