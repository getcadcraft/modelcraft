---
title: Animo çdo veçori, formoje si kurba dhe përzieji klipet
summary: Hapësira Animate kyç vendin, rrotullimin dhe madhësinë e një objekti, ndriçimin, shpërndarjen dhe ngjyrën e një drite, lenten dhe çelësat e formës së një rrjete; armaturat përkulin rrjetën me kocka dhe peshat e vizatuara; IK dhe kufizimet bëjnë kockat dhe objektet të arrijnë, të shikojnë, të kopjojnë, të qëndrojnë brenda kufijve, të varen ose të ndjekin të tjerët; trupat e ngurtë bien, grumbullohen dhe përplasen dhe fiksohen si kyçe; drejtuesit vendosin një vlerë nga të tjerat; pamja Kurba e kronologjisë formon çdo ndryshim me doreza Bézier dhe cikle, ndërsa pamja Klipet ruan animacionet si veprime që vendosen sërish dhe përzihen.
keywords: fizikë, trup i ngurtë, trupa të ngurtë, simulim, simuloj, bie, rënie, gravitet, përplaset, përplasje, grumbullo, kërcim, fërkim, fiksoj, fiksuar, kinematikë e anasjelltë, ik, kufizim, kufizime, shiko nga, gjurmo drejt, synoj, kopjo transformimet, kopjo vendndodhjen, kopjo rrotullimin, kufizo rrotullimin, kufij, fëmijë i, prind, ndiq shtegun, shteg, pol, fabrik, zinxhir, armaturë, armatura, skelet, rigging, kocka, kockë, skeleti, lëkurë, lëkurëzim, pesha, pikturim peshash, peshat automatike, grupe kulmesh, pozë, mënyra e pozës, dual quaternion, përzierje lineare, çelësat e formës, çelës forme, morf, morfe, objektiva morfi, përzierje forme, skenari i fytyrës, shprehje, drejtues, shprehje, hapësira e animacionit, animo, animacion, kyç kornizë, kyç, kyçe, veti, vetitë, transformim, vendndodhje, rrotullim, madhësi, dritë, ndriçim, ngjyrë, lente, kënd shikimi, redaktuesi i grafikut, kurbë, kurba, bezier, doreza, tangjente, interpolim, cikël, cikle, përsërit, lak, ping pong, zhvendosje, zgjidh kyçet, kuti zgjedhjeje, kopjo kyçet, ngjit kyçet, shtrij kyçet, shkallë kyçet, klipe, veprime, nla, përzierje, ndikim, ruaj
from: 16d8e12f
---

Kronologjia lëviz kamerën dhe grupe e komponentë të tërë. Hapësira **Animate** kyç më shumë se kaq, dhe kronologjia merr dy pamje të tjera për të formuar dhe ripërdorur atë që kyçe.

## Hap

Zgjidh {{ui:Animate}} në listën e hapësirave në shiritin e veglave. Kronologjia hapet nën pamje, shiriti i veglave shfaq grupet e Animate ({{ui:Keys}}, {{ui:Play}}, {{ui:Timeline}}), dhe paneli në të djathtë liston çfarë mund të kyçësh te kursori i kohës.

## Kyç një veti

Paneli liston, te kursori i kohës:

- **Objekti i zgjedhur**: {{ui:Place}}, {{ui:Turn (°)}} dhe {{ui:Size}}, tre numra secili. Shkruaj një numër dhe shtyp {{key:Enter}}: kyçet te kursori i kohës dhe objekti zhvendoset atje. Rombi pranë një rreshti kyç vlerën siç është tani; një romb i mbushur do të thotë se ka tashmë një kyç te kursori i kohës.
- **Dritat**: {{ui:Brightness (lm)}}, {{ui:Spread (°)}} (për dritat e spotit) dhe {{ui:Colour}} për secilën dritë.
- **Kamera**: {{ui:Lens angle (°)}}, për zmadhim ndërsa kamera lëviz.

{{ui:Key transform}} (ose {{key:I}}) kyç vendin, rrotullimin dhe madhësinë e çdo grupi ose komponenti të zgjedhur njëherësh; {{ui:Key camera}} (ose {{key:K}}) kyç kamerën. Me {{ui:Auto key}} të ndezur, një grup, vendndodhja, rrotullimi dhe madhësia e të cilit janë kyçur kështu, merr një kyç të ri sa herë e lëviz.

Rrotullimet janë tri kënde, rreth X, pastaj Y, pastaj Z. Një rrotullim i kyçur mbi 180° vazhdon në të njëjtin drejtim (190° mbetet 190°, jo −170°), kështu që një rrotë mund të rrotullohet disa herë.

:::tip
Një grup i kyçur me {{ui:Key selected}} në kronologji ka kyçe për vendosjen e tërë. Butoni i kurbës në rreshtin e tij i kthen ato në kurba vendi, rrotullimi dhe madhësie (e njëjta vendosje te çdo kyç), që t'i formosh në {{ui:Curves}}.
:::

## Çelësat e formës (morfet)

Një **çelës formë** është një formë tjetër e së njëjtës [rrjetë](topic:meshes): një buzëqeshje në një fytyrë, një shtrëngim i derës, një fletë e përkulur. Rrëshqitësi i tij përzien nga rrjeta siç është (0) deri te ajo formë (1); disa kyçe mblidhen.

1. Zgjidh një rrjetë në hapësirën Animate: paneli shfaq {{ui:Shape keys}} të saj.
2. Kliko {{ui:Add shape key}}. ModelCraft shkon te [hapësira e Rrjetës](topic:mesh-edit) me çelësin e ri në redaktim: lëviz pikat, nxirr, skalpto — ndrysho rrjetën në formën që do.
3. Kthehu te {{ui:Animate}} dhe kliko {{ui:Done}}. Rrjeta kthehet siç ishte, dhe çelësi e mban ndryshimin.

Pastaj tërhiq rrëshqitësin e çelësit (ose shkruaj një vlerë) për ta përzier. Rombi kyç vlerën te kursori i kohës, kështu që një çelës mund të rritet dhe të zbehet me kohën; sapo ka një shteg, një vlerë e re kyçet te kursori i kohës. Lapsi redakton sërish formën e çelësit (rrjeta e tregon plotësisht deri te {{ui:Done}}; {{ui:Cancel}} e lë çelësin siç ishte), syri e fik çelësin, koshi e heq.

Një pikë që shton gjatë redaktimit të një çelësi i përket vetë rrjetës: mbetet aty ku e vendose, në çdo formë.

:::note
Çelësat e formës e lëvizin rrjetën përpara [modifikuesve](topic:modifiers): një modifikues Subdivision e lëmon formën e përzier. Figurat dhe videot e renderuara i tregojnë çelësat në çdo kornizë.
:::

## Armaturat: kocka që përkulin një rrjetë

Një **armaturë** është një grup kockash brenda një [rrjete](topic:meshes). Vendos kockat dhe rrjeta ndjek, çdo pikë aq sa thonë **peshat** e saj.

1. Zgjidh rrjetën në hapësirën Animate dhe kliko {{ui:Add an armature}} në panel (ose {{ui:Add bone}} në grupin {{ui:Rig}}): kocka e parë shkon lart nga mesi i rrjetës, nga këmba e saj.
2. Me një kockë të zgjedhur, {{ui:Add a child bone}} shton të radhës nga maja e saj. Vendos {{ui:Head}}, {{ui:Tip}}, {{ui:Roll (°)}} dhe {{ui:Hangs from}} të çdo kocke në panel; një kockë që varet nga një tjetër lëviz me të. Hiq shenjën te {{ui:Moves the mesh}} për një kockë që vetëm drejton të tjerat.
3. Kliko {{ui:Automatic weights}}: çdo kockë merr në dorë pikat më të afërta me të, dhe mbajtja shpërndahet butësisht mbi rrjetë, kështu që pikat midis dy kockave i ndajnë. {{ui:Nearest bones only}} është një ndarje më e shpejtë dhe më e ashpër.

**Poz** kockat me {{ui:Pose}} ({{key:P}}): kliko një kockë për ta zgjedhur, tërhiq për ta rrotulluar rreth boshtit të pamjes, {{key:Shift}}-tërhiq për ta zhvendosur. Ose shkruaj {{ui:Place}}, {{ui:Turn (°)}} dhe {{ui:Size}} të saj nën {{ui:Pose}}; rrotullimet janë në boshtet e vetë kockës, nga aty ku prehet. Rombet dhe {{ui:Key the whole pose}} kyejnë pozën te kursori i kohës; sapo një kockë ka kyçe, pozimi i saj kyç aty. {{ui:Reset this bone}} dhe {{ui:Reset the pose}} i kthejnë kockat në prehje.

**Pikturo peshat** ({{key:W}}) për kockën e zgjedhur: rrjeta shfaqet në prehje, çdo faqe ngjyroset sipas sa e mban ajo kocka — e kuqe gjithë, blu asnjë. Pikturo për të shtuar mbajtje ({{key:Mod}} e heq, {{key:Shift}} lëmon); {{ui:Size (px)}} dhe {{ui:Strength}} vendosin furçën. Me {{ui:Keep each point's weights adding up to 1}}, t'i japësh një kockë më shumë merr të njëjtën gjë nga të tjerat. Çdo vizë është një hap i zhbërjes së modelit.

{{ui:Skin}} zgjedh si lëviz një pikë midis kockave: {{ui:Linear (fast)}} përzien lëvizjet e kockave dhe e shtrydh pak një nyje të përkulur; {{ui:Dual quaternion (keeps volume at joints)}} e rrotullon pikën rreth nyjes, kështu që një bërryl ose një gju ruan trashësinë (madhësia {{ui:Size}} e një kocke atëherë nuk e shtrin lëkurën).

:::note
Çelësat e formës vijnë të parët, pastaj armatura, pastaj [modifikuesit](topic:modifiers). Pamja, figurat dhe videot tregojnë rrjetën e pozuar; peshat e rrjetës ruhen me të, kockat dhe pozat e tyre me animacionin.
:::

## IK dhe kufizimet

Një **kufizim** lëviz një kockë ose një objekt pas kyçeve të tij, sipas një rregulli. Zgjidh objektin (ose, në një armaturë, kockën) dhe shto një kufizim nën {{ui:Constraints of …}}; disa veprojnë sipas radhës së listuar (shigjetat e ndryshojnë atë), dhe secili ka {{ui:How much}} (0 deri 1, kyçet me rombin e vet si çdo veti) dhe një çelës ndezje/fikjeje.

| Kufizimi | Për | Çfarë bën |
|---|---|---|
| {{ui:Reach (IK)}} | Kockat | Kockat, dhe kockat nga të cilat varet ({{ui:Bones in the chain}}), përkulen që maja e tyre të arrijë objektivin. Me dy kocka dhe një {{ui:Pole (the bend points to it)}}, bërryli ose gjuri drejtohet nga poli; zinxhirët më të gjatë përkulen butësisht. Jashtë rrezes, zinxhiri drejtohet drejt objektivit. |
| {{ui:Look at}} | Të dyja | Rrotullohet që {{ui:Axis that points}} të shikojë objektivin, duke mbajtur {{ui:Axis kept up}} sa më afër lart. |
| {{ui:Copy transforms}} | Të dyja | Merr vendosjen, rrotullimin ose madhësinë e objektivit — ato të shënuara. |
| {{ui:Limits}} | Të dyja | Mban vendosjen, rrotullimin (gradë) ose madhësinë e vet midis një {{ui:min}} dhe një {{ui:max}} për çdo bosht; lër një çift bosh për ta lënë atë bosht të lirë. |
| {{ui:Child of}} | Të dyja | Lëviz me objektivin sikur të varej nga ai, nga pozicionet ku ishin të dyja kur zgjodhe objektivin. |
| {{ui:Follow path}} | Objektet | Qëndron mbi një [objekt kurbë](topic:curves) te {{ui:Along the curve}} (0 fillimi, 1 fundi; kyçe për ta bërë të udhëtojë), dhe me {{ui:Turn along the curve}} shikon përgjatë saj. |

Objektivi është një objekt tjetër në grupin e hapur, një kockë e së njëjtës armaturë, ose {{ui:A point}} që shkruan ti (pika e një objekti është në koordinatat e modelit, ajo e një kocke në ato të rrjetës së vet). Për një këmbë IK, vendos objektivin aty ku duhet të jetë këmba dhe kyeje objektivin, ose kyeje {{ui:How much}} për t'ia dhënë këmbën midis kyçeve dhe IK.

:::tip
Një objekt që shikon një tjetër që ndjek një shteg e sheh në shteg: ModelCraft i llogarit fillimisht objektivat, pavarësisht nga radha e objekteve.
:::

## Fizika: bie, grumbullohet dhe përplaset

Lër objektet të bien dhe të përplasen me njëri-tjetrin, pastaj mbaje rezultatin si kyçe.

1. Zgjidh një grup, komponent ose rrjetë dhe vendos {{ui:Rigid body}} nën {{ui:Physics}}: {{ui:Falls and collides}} (lëviz) ose {{ui:Stays put, gets in the way}} (një tavolinë, një mur, një rampë). Jepi një objekti që bie {{ui:Shape}} të tij — {{ui:Box (its bounds)}} ose {{ui:Ball (round its bounds)}} — masën {{ui:Mass (kg)}}, {{ui:Friction}} dhe {{ui:Bounce}} (0 bie me gjëmë, 1 kthehet mbrapsht po aq lart).
2. Nën {{ui:The whole model}}, vendos {{ui:From (s)}} dhe {{ui:To (s)}}, {{ui:Gravity (m/s², down)}}, dhe nëse ka {{ui:A ground to land on}} (dhe lartësinë e saj).
3. Kliko {{ui:Bake physics}} (në panel ose grupin {{ui:Physics}}). Çdo objekt që bie merr një kyç vendndodhjeje, rrotullimi dhe madhësie në çdo kornizë midis dy kohëve; luaje si çdo animacion.

Rifiksimi zëvendëson ato kyçe; {{ui:Remove baked keys}} i heq. Objektet fillojnë në prehje, aty ku i vendosin kyçet, kurbat dhe kufizimet e tyre te {{ui:From (s)}} (një lëvizje e kyçur para saj nuk vazhdon në rënie). {{ui:Steps a frame}} më shumë e mban më të qëndrueshme një grumbull të lartë; shiriti i statusit tregon kur diçka ende lëviz në fund.

:::note
Format janë kuti dhe topa rreth kufijve të çdo objekti; një kuti prek me cepat, mesin e skajeve dhe mesin e faqeve, kështu që kutitë grumbullohen dhe rrëzohen ashtu siç pritet. Pëlhura, lëngjet, nyjet midis objekteve dhe format e sakta nuk janë ndërtuar.
:::

## Drejtuesit

Një **drejtues** vendos një çelës formë nga gjëra të tjera, në vend që me dorë: hap drejtuesin e një çelësi (butoni i llogaritësit), shkruaj një **shprehje** dhe jepi çdo emri në të atë që lexon ({{ui:Reads}}): kohën në sekonda, kornizën, vendndodhjen, rrotullimin ose madhësinë e një objekti sipas X, Y ose Z, ndriçimin e një drite, ose një çelës tjetër formë. Për shembull, me `v` që lexon rrotullimin e një dere rreth Z, `clamp(v / 90, 0, 1)` hap një formë ndërsa hapet dera.

Shprehjet përdorin numra, emrat, `+ - * / % ^` dhe kllapa, dhe funksionet `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` me `pi` dhe `e`. Një gabim tregohet dhe nuk ndryshon asgjë. Rrëshqitësi i një çelësi të drejtuar tregon vlerën e drejtuesit; drejtuesi mbizotëron mbi shtegun e çelësit deri sa ta heqësh.

## Zgjidh dhe ndrysho kyçet (pamja Kyçet)

{{ui:Keys}} shfaq një rresht për çdo shteg: kamerën, çdo grup që lëviz, dhe çdo veti ("Drita 2 · Ndriçimi (lm)"; kyçet e vetive janë të rrumbullakëta).

- Kliko një kyç për ta zgjedhur; {{key:Shift}}-kliko ose {{key:Mod}}-kliko shton ose heq kyçe nga zgjedhja. {{key:Shift}}-tërhiq mbi rreshtat vizaton një kuti që shton çdo kyç brenda saj.
- Tërhiq një kyç të zgjedhur për t'i zhvendosur të gjitha; {{key:Left}} / {{key:Right}} i zhvendosin një kornizë ({{key:Shift}}: dhjetë).
- {{key:Mod+C}} kopjon kyçet e zgjedhur, {{key:Mod+V}} i ngjit nga kursori i kohës te të njëjtat shtege (edhe një skedë tjetër e ModelCraft mund t'i ngjisë).
- {{ui:Stretch}} shpërndan kyçet e zgjedhur larg nga kursori i kohës me numrin pranë tij (2 = dy herë më larg; 0.5 i tërheq më afër).
- Lista e lehtësimit vendos si lëviz çdo kyç i zgjedhur më tej.

## Formo kurbat (pamja Kurba)

{{ui:Curves}} është një grafik i çdo numri me kohën: koha përgjatë, vlera lart. Shëno kurbat që do të shfaqen në listën majtas (X, Y dhe Z janë të kuqe, jeshile dhe blu).

- Kliko një kyç (një katror) për ta zgjedhur, {{key:Shift}}-kliko për më shumë, ose tërhiq një kuti. Tërhiq një kyç të zgjedhur për të ndryshuar kohën dhe vlerën e tij; me disa të zgjedhur, tërheqja i zhvendos ato përgjatë kohës.
- Një kyç i zgjedhur shfaq dy **dorezat** e tij. Tërhiq një për të formuar kurbën nga ai krah. {{ui:Handles}} tregon si sillen: {{ui:Automatic}} (një kurbë e butë që kalon nëpër kyçet përreth), {{ui:Pointing at the next key}}, {{ui:Aligned}} (të dyja qëndrojnë në një vijë të drejtë, kështu që kurba nuk ka kënd) ose {{ui:Free}}.
- {{ui:From the chosen keys}} vendos si lëviz çdo kyç i zgjedhur drejt të tjerit: {{ui:Curve (handles)}}, {{ui:Smooth}}, {{ui:Steady}}, {{ui:Slow in and out}} ose {{ui:Hold}}.
- {{ui:Before}} dhe {{ui:After}} vendosin çfarë bën një kurbë jashtë kyçeve të saj: {{ui:Hold}} (qëndron te vlera e parë ose e fundit), {{ui:Repeat}}, {{ui:Back and forth}}, ose {{ui:Repeat and carry on}} (çdo përsëritje fillon aty ku mbaroi e fundit: një rrotë vazhdon të rrokullisë, një ecës vazhdon të ecë).
- Rrota zmadhon ({{key:Mod}}: vetëm vlerat; {{key:Shift}}: vetëm koha); tërhiq me butonin e mesit ose me {{key:Alt}} për të lëvizur; {{ui:Show all}} ose {{key:Home}} i përshtat të gjitha kurbat e shfaqura. Kliko në hapësirë boshe për ta zhvendosur kursorin e kohës atje. {{key:Delete}} fshin kyçet e zgjedhur.

Dorezat mbahen që të mos kalojnë njëra-tjetrën në kohë, kështu që një kurbë nuk shkon kurrë mbrapsht.

## Ripërdor animacionet (pamja Klipet)

Një **klip** luan një animacion të ruajtur (një **veprim**) në kronologji. Klipet përzihen sipas radhës, rreshtat e poshtëm mbi ata të sipërm; shtegjet vetë të kronologjisë vendosen mbi çdo klip.

1. Kyç grupet dhe dritat si zakonisht, pastaj kliko {{ui:Make a clip}} te {{ui:Clips}} dhe jepi veprimit një emër. Shtegjet bëhen veprimi, dhe një klip e luan atë aty ku ishin (kamera mbetet në kronologji).
2. Për ta përdorur sërish, zgjidh veprimin dhe kliko {{ui:Add clip}}: një klip i ri fillon te kursori i kohës.
3. Tërhiq një klip përgjatë rreshtit të vet për ta zhvendosur; kliko për të vendosur {{ui:Start (s)}}, {{ui:Speed}} (2 = dy herë më shpejt), {{ui:Repeats}}, {{ui:How much}} (0 deri 1), {{ui:Mix}} ({{ui:Replace}}, ose {{ui:Add on top}} mbi klipet para tij), {{ui:Outside the clip}} (asgjë, mbaj fundin e tij, ose mbaj të dy skajet) dhe {{ui:Mute}}. Shigjetat e ndryshojnë radhën; koshi e heq (një veprim që nuk e përdor më asnjë klip shkon me të).

Një klip me {{ui:How much}} më pak se të plotë përzihet me atë që është nën të: klipin para tij, ose dritën ose vendosjen ashtu si është pa animacion.

## Çfarë luhet ku

| Çfarë | Në pamje | Në një video të renderuar |
|---|---|---|
| Kyçet e kamerës, këndi i lentes me kyçe kamere | Po | Po |
| Vendosja, rrotullimi dhe madhësia (kyçe, kurba, klipe) | Po | Po |
| Ndriçimi, shpërndarja dhe ngjyra e dritave | Po | Jo ende: videoja përdor dritat ashtu si janë kur fillon (shih [çfarë s'është ndërtuar ende](topic:not-built-yet)) |
| Këndi i lentes pa kyçe kamere | Po | Jo ende: kyç edhe kamerën |
| Çelësat e formës dhe drejtuesit | Po | Po |
| Armaturat (rrjetat e pozuara) | Po | Po |
| IK dhe kufizimet | Po | Po |
| Fizika e fiksuar (kyçe) | Po | Po |

Gjithçka ruhet në skedarin `.modelcraft` me pjesën tjetër të animacionit, dhe {{ui:Undo}} dhe {{ui:Redo}} të kronologjisë i kthejnë mbrapsht çdo gjë prej tyre.
