---
title: Ende nuk është ndërtuar
summary: Çfarë nuk bën ende ky version i ModelCraft, dhe çfarë të bësh në vend të saj sot.
keywords: mungon, ende jo, kufizime, plan zhvillimi, materiale, tekstura, tekst, shtresa, prerje, ndarje, re, desktop
from: 179fa5e4
---

ModelCraft është një version i hershëm. Kjo faqe liston çfarë nuk bën ende, që të mos e kërkoni, dhe rrugën më të afërt për ta bërë punën sot.

## Veglat e vizatimit

| Nuk është ende | Në vend të saj, sot |
|---|---|
| Vizatim i lirë | Kliko pikat me {{ui:Kurbë}} |
| Ndryshimi i numrit të segmenteve të një harku ose rrethi pas vizatimit | Fshi dhe vizato përsëri pasi shkruan `24s` |
| Zgjedhja e një shkronjë shkrimi për [tekstin 3D](topic:text3d), ose redaktimi i fjalëve të tij pas vendosjes | Fshi dhe shto tekstin përsëri |
| Ndryshimi i një këndi duke shkruar në një përmasë këndi, ose madhësia e një cilindri nga përmasa e rrethit të tij | Rrotullo skajet me {{ui:Rrotullo}}; zmadho cilindrin me {{ui:Shkallë}} |
| Përmasat në skedarët e modelit të eksportuar | Përmasat shfaqen në imazhe, printime dhe PDF të pamjes; skedarët e modelit mbajnë vetëm gjeometri |
| Prerje, Ndarje dhe Guaskë e jashtme | [Bashkim, Zbritje dhe Kryqëzim](topic:solids) grupe të mbyllura, ose [kryqëzo faqet](topic:intersect) dhe fshi atë që nuk të nevojitet |
| Zgjedhja e boshtit të rrotullimit me tastet e shigjetave | Kliko qendrën e {{ui:Rrotullo}} mbi një faqe që është e kthyer drejt kahut që duhet të ketë boshti |
| Kyçje në më shumë se një drejtim njëkohësisht | Kyç një drejtim me një tast shigjete, pastaj kapu te një pikë |
| Ndryshimi i madhësisë përgjatë një prirjeje, ose nga një skaj përmase që nuk është në cep | Vendos përmasën mbi dy cepa, përgjatë një skaji ose përgjatë boshtit të kuq, jeshil ose blu |

## Animacioni

| Nuk është ende | Në vend të saj, sot |
|---|---|
| Animimi i faqeve, skajeve, orës së ditës së diellit, stilit ose asaj që është fshehur | Bëje pjesën që lëviz grup ose komponent; rendero një video të veçantë për një orë tjetër të ditës |
| Një kamerë që ndjek një shteg të vizatuar, ose shikon një objekt që lëviz | Vendos më shumë çelësa kamere përgjatë rrugës ([Animo](topic:animation)) |
| Zëri në video, dhe video me cilësi të lartë (path-traced) pa WebGPU | Shto zërin në një redaktor video; pa WebGPU, rendero videon me renderuesin e shpejtë ([Rendero videon](topic:animation#render-the-video)) |
| Dritat e animuara (ndriçimi, shpërndarja, ngjyra) në një video të renderuar, një kënd lenti i animuar pa çelësa kamere në video, animimi i materialeve ose i cilësimeve të renderimit | Dritat animohen në pamje; për video, vendos çelësa edhe për kamerën për një zmadhim; rendero video të veçanta për cilësime të ndryshme drite ([Animo çdo veti](topic:animate)) |
| Zhvendosja e peshave ose kockave nga një anë në tjetrën, zarfet e kockave që të shihen, shfaqja e peshave të hijezuara pikë për pikë (shfaqen për faqe), shikimi i rrjetës së pozuar gjatë lyerjes së peshave | Lyej të dyja anët, ose bëj një gjysmë dhe përdor një modifikues Pasqyrë përpara se të shtohet armatura; kalo midis Lyej peshat dhe Pozë për të kontrolluar |
| Kockat e lexuara nga skedarët glTF, FBX ose USD si armaturë, dhe armaturat e shkruara në ato skedarë | Modelet me kocka hyjnë në pozicion pushimi me peshat e skedarit; shto kockat sipas renditjes së skedarit, pastaj {{ui:Përdor peshat e skedarit}} ([Animo](topic:animate)) |
| Zhvendosja e një objektivi IK ose një poli duke e tërhequr në pamje, zgjedhja e hapësirës së një kufizimi (lokale ose globale), zgjatja e zinxhirëve IK, IK përgjatë një kurbe | Shkruaj pikën e objektivit, ose synoje një objekt dhe zhvendose atë; mbaj zinxhirët në gjatësitë e tyre |
| Pëlhura, lëngje, trupa të butë, bashkime dhe menteshe midis trupave të ngurtë, përplasja me formën e saktë të një objekti (vetëm kuti dhe topa rreth tij), një simulim i drejtpërdrejtë gjatë luajtjes, një shpejtësi ose rrotullim fillestar (trupat nisin në qetësi) | Pjek trupat e ngurtë dhe luaj çelësat; ndërto një menteshë me çelësa; ndaj një formë të çuditshme në kuba (grupe) |
| Eksportimi i animacionit në glTF ose skedarë të tjerë modeli | Rendero një video; skedari `.modelcraft`, dhe një [skedar USD](topic:usd) që ModelCraft e ruan, e mbajnë për ModelCraft |
| Shkrimi i një komenti ose titulli mbi një çështje në VR, shënime zanore, zhvendosja e një plani prerjeje me dorë në VR | Vendos çështjen në VR, pastaj shto fjalët e saj në një program BCF; vendos një plan prerjeje në pamje përpara se të hysh: shih [Shqyrto modelin me një kufje VR](topic:vr-review) |
| Shihja e njerëzve te tavolina në VR (shfaqen vetëm njerëzit në VR), regjistrimi i një shëtitjeje VR | Kërkoju të bashkohen në VR, ose bëj një [animacion](topic:animation) të shëtitjes |

## Rrjetat

| Nuk është ende | Në vend të saj, sot |
|---|---|
| Skulpturimi sipas niveleve (multiresolution), dhe Detajimi që heq trekëndësha që janë bërë të vegjël | [Skulpto](topic:sculpt) një rrjetë të ndarë; {{ui:Ri-mesh}} për ta barazuar përsëri |
| Ri-mesh në faqe katërkëndëshe që ndjekin formën | {{ui:Ri-mesh}} (trekëndësha të barabartë), pastaj ndërtoje sërish me [Ri-topologjinë](topic:mesh-edit#retopology) |
| Peshat e lyera në kulme për modifikuesit (Displace, Smooth dhe Shrinkwrap punojnë në të gjithë rrjetën) | Aplikoje modifikuesin, pastaj skulpto ose redakto pjesët që kanë nevojë për të |
| Kopjimi dhe ngjitja e kulmeve, skajeve ose faqeve, prerje me thikë që përfundon brenda një faqeje, skaje tela pa faqe | Dublo rrjetën te Modeli; prerje me thikë nga skaji te skaji; [ekstrudo](topic:mesh-edit#change-the-shape) skajet e hapura në faqe |

## Organizimi dhe shikimi

| Nuk është ende | Në vend të saj, sot |
|---|---|
| Shtresat e planeve të vendit DWG dhe DXF si etiketa | Plani i vendit hyn si një grup i vetëm: çmontoje dhe grupo pjesët që dëshiron të etiketosh |
| Disa prerje njëkohësisht, një kuti prerjeje, ose kontura e një prerjeje të eksportuar si vizatim | Një [plan prerjeje](topic:sections) pret një herë; eksporto pamjen si imazh |
| Shfaqja e skajeve të buta me vija me pika, ose butësimi gjatë tërheqjes së një rrëshqitësi | [Zbut sipas këndit](topic:soften) te Informacioni i entitetit, dhe zhbëj për të provuar një kënd tjetër |
| Një bibliotekë online modelesh për të kërkuar, ose komponentë me opsione për të zgjedhur (ngjyrë, stil) | [Biblioteka fillestare](topic:starter); importo modele Collada, OBJ ose glTF; [zgjat](topic:stretch) një kopje sipas madhësisë |
| Vendosja e bimëve nga biblioteka e bimëve | [Shpërndaj](topic:live-view#scatter-plants-rocks-and-people) bimë në pamjen e drejtpërdrejtë, ose vendos një pemë nga biblioteka fillestare |
| Kopje të pavarura të një grupi | Bëje komponent, pastaj {{ui:Bëje unik}} (shih [Zgjidhja e problemeve](topic:troubleshooting#editing-one-group-changed-another)) |

## Renderimi

| Nuk është ende | Në vend të saj, sot |
|---|---|
| Renderimi në pamje (hapësira e punës {{ui:Render}}), radha e renderimit, dhe opsionet e kamerës, foto e qiellit, mjegullës dhe përzierjes së dritës pa WebGPU | {{ui:Rendero një foto…}} në {{ui:Cilësi e lartë}} përdor atje renderuesin WebGL të gjurmimit të rrugës, pa ato opsione ([Rendero një foto](topic:render#high-quality)) |
| Një program tjetër që vizaton foton e renderimit pa një shtojcë motori renderimi (CadCraft nuk ekzekuton kurrë një program me licencën GNU GPL); kamera panoramike ose stereo dhe një foto qielli përmes një programi tjetër; shtojca Unreal Engine (skedarët shkruhen, shtojca që i hap nuk është publikuar) | Motorët tanë Fast dhe Path tracer; motorin e një shtojce; një skedar dosjeje USD, glTF ose Unreal nga lista Engine për ta marrë në çdo program ([vizato foton me një program tjetër](topic:render-other-program)) |
| Pemët dhe shkëmbinjtë e shpërndarë në {{ui:Rendero një foto…}} | Ata shfaqen në [pamjen e drejtpërdrejtë](topic:live-view), panoramat, shikuesin dhe videon e saj |

## Materialet dhe ngjyrat

| Nuk është ende | Në vend të saj, sot |
|---|---|
| Hyrjet përveç ngjyrës bazë, ashpërsisë, metalikësisë, opasitetit, normales dhe emetimit që ndryshojnë përgjatë një sipërfaqeje në foto me cilësi të lartë (ato përdorin mesataren e tyre) | [Bëj materiale me nyje](topic:shading): lidhi edhe pse, pamja i tregon duke ndryshuar |
| Zhvendosja (displacement) në faqet shtyp/tërhiq | Konverto objektin në rrjetë për zhvendosje |
| Ndarja e materialeve të tua me Bibliotekën nga aplikacioni, dhe hartat e paketuara (ARM/ORM) ose EXR në një grup teksturash të importuar | Mbaji materialet në skedar; importo hartat e veçanta si PNG ose JPEG |
| Materialet e skedarit në sesionet Live TeamWork (qëndrojnë në kompjuterin që i krijoi) | Ruaj skedarin dhe ndaje |
| Dekale që përkulen rreth sipërfaqeve të lakuara, dekale në Zhbëj, ose lyerja e teksturave të disa faqeve njëkohësisht përgjatë një bashkimi | Vendos dekale më të vogla në çdo pjesë; lyej çdo anë të një bashkimi veçmas |
| Pjekja mbi faqet shtyp/tërhiq, pjekja e disa objekteve në një foto, një kafaz që e formon me dorë, ose dritë e pjekur nga llamba | Konverto në rrjetë dhe shpalos atë; pjek çdo objekt veçmas; rrit distancën e kërkimit; rendero një foto për dritën e llambave |
| Lyerja e ashpërsisë, metalikësisë ose lartësisë, lyerja me foto (vula) dhe lyerja e teksturave më të mëdha se 512 × 512 | Lyej ngjyrën bazë këtu; bëj harta të tjera në një redaktor fotosh dhe importoji si grup teksturash |
| Tekstura në eksportet Collada, STL, PLY, 3MF, IFC, DWG dhe DXF, dhe grafet e nyjeve të materialeve të vetë skedarit në modelet e eksportuara | Ato formate marrin ngjyrën e çdo materiali; glTF dhe OBJ mbajnë teksturat e importuara; eksporto një material të veçantë si [MaterialX](topic:shading#materialx); [USD](topic:usd) mban modelin e tërë për ModelCraft |
| Tekstura në skedarët Collada | Numërohen dhe lihen jashtë kur importohen; tekstura në skedarët `.skp` dhe `.glb` hyjnë |

## Skedarët

| Nuk është ende | Në vend të saj, sot |
|---|---|
| Ruajtja e skedarëve SketchUp, dhe teksti dhe përmasat nga ata | [Importo](topic:import-sketchup-files) mban faqet, ngjyrat dhe teksturat; eksporto Collada (`.dae`) për t'u kthyer te SketchUp |
| Përmasat dhe udhëzuesit në eksportet DWG dhe DXF | Shtoji në programin CAD pas eksportimit |
| Pikat, tabelat dhe udhëzuesit me shumë drejtime nga DWG dhe DXF | Numërohen dhe lihen jashtë; teksti hyn si shkronja me një vijë, jo me shkronjën e vizatimit |
| Sipërfaqet, rrjetat, tabelat dhe udhëzuesit me shumë drejtime nga DWG dhe DXF; faqe të solideve 3D në sipërfaqe të lakuara, të shtrira ose të tjera të lira | Numërohen dhe lihen jashtë gjithashtu (vetë solidet 3D hyjnë). Eksporto ato pjesë nga programi CAD si OBJ ose Collada dhe importo atë |
| Llojet, vetitë ose materialet IFC | Eksporti IFC ka [kate](topic:formats#ifc-ifc) dhe elementë gjenerikë; shto pjesën tjetër në një program BIM |
| Dërgimi i një modeli drejtpërdrejt te BimCraft | Eksporto {{ui:IFC për BimCraft (.ifc)}} dhe hape në BimCraft |
| Skajet e lira në glTF dhe STL | Përdor OBJ ose Collada për vizatimet me vija |
| Materialet glTF dhe FBX përtej ngjyrës bazë (metal, ashpërsi, harta normale, qelq, shtresë e pastër, shkëlqim…) | Lexohen dhe listohen; ModelCraft mban ngjyrën bazë ose teksturën. Ndërtoje përsëri pamjen te [hapësira e punës Shading](topic:shading) |
| Kockat, animacionet dhe shënjestrat e formës glTF | Modelet me kocka hyjnë në pozicion pushimi; animo në [kronologji](topic:animation) |
| Ngjyrat dhe emrat e pjesëve të montimit nga skedarët STEP | Pjesët hyjnë si rrjeta në madhësinë e tyre të vërtetë; [lyej](topic:paint) dhe emërtoji pas importit |
| Objektet SubD, teksti, përmasat dhe dritat nga skedarët `.3dm` | Shih [çfarë lihet jashtë](topic:import-3dm-files#what-is-left-out-and-said); kthe SubD në rrjeta në programin që e bëri skedarin |
| Teksturat KTX2 dhe variantet e materialeve në glTF | Eksporto me tekstura PNG ose JPEG; përdoret varianti i parazgjedhur |
| Shkrimi i instancimit glTF (EXT_mesh_gpu_instancing) | Komponentët shkruhen një herë dhe vendosen shumë herë, gjë që e lexon çdo shikues |
| Animacioni Alembic (çdo mostër e një cache), pikat dhe kurbat Alembic, shkrimi Alembic | Hyn mostra e parë; animo në [kronologji](topic:animation); shkruaj glTF, USD ose OBJ |
| Hartat e thyerjes dhe normale në materialet OBJ | Hyn vetëm imazhi i ngjyrës (`map_Kd`) |
| Kockat dhe animacioni FBX, eksporti FBX, skedarët FBX 6 | Modelet me kocka hyjnë në pozicion pushimi; eksporto glTF; ruaj skedarët e vjetër si FBX 2011 ose më të ri |
| Skinet, morfet, kamerat, dritat, transformimet look-at dhe skew të Collada, referencat e jashtme | Lihen jashtë kur importohen, dhe numërohen në mesazh |
| Skedarët rezervë | {{ui:Ruaj si}} ({{key:Mod+Shift+S}}) ruan një kopje tjetër. Pas një rrëzimi, ModelCraft të ofron punën e paruajtur ("Të rikthehet puna jote?") |
| Ruajtja në re dhe sinkronizimi midis kompjuterave | Ende nuk është e disponueshme. Ruaj skedarët në kompjuterin tënd, dhe kopjoji aty ku të duhen |

## Printimi 3D

| Nuk është ende | Në vend të saj, sot |
|---|---|
| Mbështetëse të vërteta të slicer-it (ndërfaqe, raft, modeli i saktë i mbështetjes) | [Pamja e mbështetjeve](topic:print-tools#supports-preview) tregon ku dhe sa afërsisht; pamja e slicer-it tënd tregon ato të vërtetat |
| Zgjidhja e një pjese që kalon përmes vetes, ose skajet ku takohen tre ose më shumë faqe | [Riparo](topic:print-tools#repair) i liston me vendndodhjen; përdor [Kryqëzo faqet](topic:intersect) dhe fshi çfarë është brenda |
| Modele mbushjeje dhe rrjetë brenda një zbrazjeje | [Zbrazja](topic:print-tools#hollow) e lë bosh; slicer-i yt shton mbushje në një pjesë të plotë |
| Detaje shumë të vogla për grykën tënde (përveç mureve) | [Trashësia e murit](topic:print-tools#wall-thickness) gjen mure të hollë; pamja e shtresave të slicer-it tregon pjesën tjetër |

## Performanca

Zhbëj mban një kopje të modelit për çdo hap ([rrjeta](topic:meshes) mban vetëm atë që ndryshoi), kështu që importet shumë të mëdha të gjeometrisë shtyp/tërhiq e bëjnë çdo redaktim më të ngadaltë. Mbaji importet të lehta, dhe ruaj dhe hap përsëri për të pastruar historikun.

## Aplikacionet dhe platformat

- **Desktop:** ModelCraft punon në shfletues në Mac, Windows dhe Linux, dhe në CadCraft Studio, aplikacioni desktop me të tetë aplikacionet në një instalim. Në Android, CadCraft Studio instalohet nga APK-ja e tij në getcadcraft.com/download. Ende nuk ka version për iPad ose iPhone.
- **Prekje:** shih [Orbito, lëviz pamjen dhe zmadho](topic:orbit-pan-zoom) për gjestet me gisht. Presioni i stilolapsit e vendos furçën te [Skulpto](topic:sculpt); gjetiu presioni dhe pjerrësia e stilolapsit nuk përdoren.
- **Fletët:** ModelCraft [printon një pamje për faqe](topic:export-model#print-the-view-or-save-it-as-a-pdf); nuk ka paraqitje fletësh me disa pamje ose bllok titulli. Eksporto në DWG/DXF të përshtatshëm për CadCraft për vizatime në shkallë.
