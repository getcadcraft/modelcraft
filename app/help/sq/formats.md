---
title: Formatet e skedarëve në detaje
summary: Saktësisht çfarë mban, konvertohet dhe lihet jashtë çdo format që ModelCraft hap, importon dhe eksporton.
keywords: formatet, llojet e skedarëve, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, cache, fbx, 3mf, ifc, dwg, dxf, njësitë, boshtet, y lart, z lart, milimetra, kufijtë
from: c47d2d28
---

Modeli i ModelCraft është në metra me Z (blu) lart. Çdo format më poshtë konvertohet në ose nga ai.

## ModelCraft (.modelcraft)

| Çfarë | Detaje |
|---|---|
| Hap | {{ui:Hap}} ({{key:Mod+O}}) ose lëshoje mbi pamje. Skedarët që mbarojnë me `.json` pranohen gjithashtu |
| Ruaj | {{ui:Ruaj}} ({{key:Mod+S}}), si shkarkim |
| Mban | Gjithçka: gjeometrinë, faqet dhe ngjyrat e tyre, materialet dhe teksturat e importuara, llambat, skajet e buta, grupet, komponentët, emrat, udhëzuesit, skenat, njësitë, dhe kamerën dhe stilin e fundit |
| Lë jashtë | Historikun e zhbërjes |
| Kufi | 200 MB |

Një skedar i ruajtur nga një ModelCraft më i ri se i yti refuzohet: "Ky model u ruajt nga një ModelCraft më i ri (versioni i skedarit …). Përditëso ModelCraft për ta hapur." Një skedar që nuk është model ModelCraft thotë: "Ky skedar nuk është model ModelCraft (nuk është JSON)." ose "Ky nuk është skedar ModelCraft që mund ta hapim: …".

## USD (.usd, .usda, .usdc, .usdz)

Hap, importo, dhe {{ui:Ruaj si}} ose {{ui:Eksporto}} › {{ui:USD (.usda, .usdc, .usdz)…}}. Një skedar USD që ModelCraft e ruajti hapet përsëri pa humbur asgjë; skedarët USD të programeve të tjera hapen si rrjeta, grupe, komponentë, llamba dhe kamera. Shih [Ruaj, hap dhe eksporto USD](topic:usd).

## Collada (.dae)

Importim dhe eksport. Formati më i mirë për shkëmbimin e modeleve me modelues të tjerë 3D.

- **Eksport:** Collada 1.4.1, Z lart, metra. Një gjeometri për çdo përkufizim grupi ose komponenti; komponentët shkruhen një herë dhe vendosen me referencë, kështu mbeten të përbashkët. Faqet me vrima ose përvijime konkave ndahen në trekëndësha. Ngjyrat bëhen materiale. Skajet e lira shkruhen si vija. Emrat që nuk janë të vlefshëm në format rregullohen, dhe emri i saktë mbahet krahas tij.
- **Importim:** trekëndësha, shumëkëndësha (me vrima), ventilatorë dhe shirita trekëndëshash bëhen faqe; vijat bëhen skaje. Transformimet e nyjeve, boshti lart i skedarit dhe njësia e tij zbatohen. Një nyjë e vendosur në disa vende, ose një gjeometri e përdorur nga disa nyje, hyn si komponent; nyjet e tjera hyjnë si grupe. Ngjyrat e materialit (diffuse) bëhen ngjyra faqesh.
- **Nuk importohen:** tekstura, lëkura dhe morfe, kamera, drita, disa lloje transformimesh (look-at dhe skew), dhe referenca te skedarë të tjerë. Shiriti i statusit i numëron ato.
- **Humbet në eksport:** cilat skaje janë të buta. **Në importim,** sipërfaqet e trekëndëzuara mbeten trekëndësha, me diagonalet e zbutura që zonat e sheshta të lexohen si një sipërfaqe e vetme.

## OBJ (.obj, .mtl)

Importim dhe eksport.

- **Importim:** hidh `.obj` së bashku me `.mtl` dhe imazhet e teksturave (ose importo vetëm `.obj`: hyn pa materiale, dhe shiriti i statusit emëron `.mtl` që kërkonte). Lexohet në metra me Y lart. Çdo objekt (`o`, përndryshe `g`) bëhet një [rrjetë](topic:meshes), faqet e tij mbahen ashtu siç janë (katërkëndëshat mbeten katërkëndësha). Koordinatat e teksturës, normalet dhe ngjyrat për kulm mbahen. Imazhi i ngjyrës së një materiali (`map_Kd`, PNG, JPEG ose WebP) hyn si teksturë, me opsionet e saj të shkallës dhe zhvendosjes; përndryshe hyn ngjyra e tij (`Kd`). Skajet ku normalet e skedarit thyhen janë të forta; kur nuk ka normale, grupet e lëmimit të skedarit vendosin. Hartat e tjera (bump, normal), pikat, vijat dhe kurbat numërohen dhe lihen jashtë. OBJ nuk ka njësi, kështu që një model i bërë në milimetra ose inç hyn në madhësi të gabuar: shkallëzoje pas importit (shih [Rrotullo dhe shkallëzo](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Eksport:** metra, Y lart, koordinata botërore. Një objekt për çdo vendosje grupi; komponentët shkruhen plotësisht në çdo vendosje. Rrjetat mbajnë faqet, koordinatat e teksturës dhe normalet e tyre; faqet e bashkuara me [skaje të buta](topic:soften) marrin një normal për kulm. Kur modeli ka ngjyra, një `.mtl` shkarkohet pranë `.obj`-it. Kur ka tekstura të importuara, `.obj`, `.mtl` dhe imazhet shkarkohen së bashku si një `.zip`.
- **Kufi:** 2 milionë kulme ose faqe; 64 MB tekst.

## glTF (.glb, .gltf)

Importim dhe eksport, glTF 2.0.

- **Importim:** një `.glb`, ose një `.gltf` së bashku me `.bin` dhe skedarët e teksturave: hidhi të gjitha njëherësh mbi pamje (ose zgjidh `.glb`). Një `.gltf` i dhënë vetëm thotë cili skedar i nevojitet: "Ky skedar .gltf kërkon "…": hap versionin .glb, ose hidh .gltf së bashku me skedarët e tij."
  - **Rrjetat** hyjnë si [rrjeta](topic:meshes), një për çdo rrjetë në skedar, me normalet, koordinatat e teksturës dhe ngjyrat e kulmeve të skedarit të mbajtura mbi to. Skajet ku normalet e skedarit thyhen janë të forta; pjesa tjetër janë të buta. Një rrjetë e përdorur në disa vende mbetet e përbashkët.
  - **Nyjet** bëhen grupe, të emërtuara si në skedar. Rrjetat e instancuara (EXT_mesh_gpu_instancing) hyjnë si një rrjetë e vendosur shumë herë.
  - **Materialet:** një teksturë e ngjyrës bazë (PNG, JPEG ose WebP) hyn si teksturë, e vendosur sipas koordinatave të teksturës së skedarit (me çdo transformim teksture), dhe mbahet kur ruan; përndryshe ngjyra bazë. Metali, ashpërsia, hartat normale, qelqi, shtresa e pastër, shkëlqimi dhe zgjerimet e tjera të materialit lexohen, por nuk mbahen ende: shiriti i statusit e thotë këtë.
  - **Dritat** (KHR_lights_punctual): dritat pikë dhe reflektor bëhen [llamba](topic:lights). Dritat drejtuese numërohen: dielli ndriçon modelin.
  - **Kamerat** bëhen [skena](topic:scenes).
  - **Personazhet e skeletuara** hyjnë duke qëndruar siç i lë skedari; kockat dhe animacionet e tyre, dhe morf-targetet, numërohen dhe nuk mbahen ende.
  - **Skedarët e ngjeshur** (Draco, meshopt) dhe të dhënat e kuantizuara lexohen. Dekoduesit ngarkohen vetëm për skedarin që i kërkon.
  - Pikat dhe vijat numërohen dhe lihen jashtë (një rrjetë mban faqe). Teksturat KTX2 lihen jashtë; faqet mbajnë ngjyrën e tyre.
- **Eksport** (`.glb`): glTF 2.0 binar, metra, Y lart. Një rrjetë për çdo përkufizim, kështu komponentët mbeten të përbashkët. Rrjetat mbajnë normalet, koordinatat e teksturës dhe ngjyrat e kulmeve; faqet e bashkuara me [skaje të buta](topic:soften) mbajnë normale të lëmuara. Ngjyrat dhe materialet bëhen materiale (një material si ngjyrën e tij); teksturat e importuara shkruhen si tekstura. Llambat që janë të ndezura bëhen drita pikë dhe reflektor (llambat zonë nuk kanë ekuivalent në glTF dhe lihen jashtë); skenat bëhen kamera. Vijat e lira lihen jashtë.
- **Kufi:** skedarë deri në 300 MB; rreth 130 milionë numra gjeometrie.

## STL (.stl)

Importim dhe eksport.

- **Importim:** binar ose ASCII. STL nuk ka njësi: lexohet si **milimetra**, ashtu si i shkruajnë printerat dhe eksporti vetë i ModelCraft. Kulmet në të njëjtën pikë bashkohen, kështu që një pjesë e mbyllur hyn si një [rrjetë](topic:meshes) e mbyllur. Ngjyrat në skedar (konventat VisCAM / SolidView dhe Materialise) i lyejnë faqet.
- **Eksport,** për printim 3D: STL binar, **milimetra**, Z lart. Vetëm trekëndësha: grupet dhe skajet e lira lihen jashtë. Faqet e lyera mbajnë ngjyrën e tyre sipas konventës VisCAM / SolidView, që programet e tjera e injorojnë nëse nuk e lexojnë. Eksporto trupa të mbyllur për një printim të pastër.

## STEP (.step, .stp)

Vetëm importim. STEP është ajo që dërgojnë modelues pjesësh dhe furnizuesit: skedarë AP203, AP214 dhe AP242.

- **Importim:** ModelCraft e lexon vetë skedarin, në faqe, dhe e kthen çdo solid në një [rrjetë](topic:meshes) të mbyllur trekëndëshash: faqet e sheshta mbeten të sheshta, faqet e lakuara (cilindra, kone, sfera, tore, sipërfaqe B-spline) bëhen shumë faqe të vogla të sheshta, me skajet brenda një faqeje të lakuar të buta dhe skajet midis dy faqesh të mprehta. Skedarët STEP thonë njësinë e tyre; modeli hyn në madhësinë e vërtetë. Një montim hyn me çdo pjesë aty ku e vendos skedari, çdo pjesë si rrjetë e veçantë në një grup të emërtuar sipas skedarit. Ngjyrat, emrat e pjesëve të pemës së montimit dhe toleranca (PMI) nuk lexohen.
- **Mesazhet:** çfarë u anashkalua ose u vizatua më trashë shtohet në rreshtin e statusit ("Shënime: …"); një skedar pa solid, një skedar i dëmtuar ose një që tejkalon kufijtë thotë arsyen dhe nuk shton asgjë.
- **Kufi:** skedarë deri në 300 MB; 400 000 faqe dhe 8 milionë trekëndësha.

## .3dm

Vetëm importim. Skedarët `.3dm` mbajnë modele NURBS: poli-sipërfaqe, sipërfaqe, rrjeta, kurba dhe blloqe.

- **Importim:** ModelCraft e lexon vetë skedarin, në faqe. Rrjetat hyjnë siç janë; çdo faqe e një poli-sipërfaqeje ose shtrirjeje vjen nga rrjeta e renderimit e ruajtur me të në skedar, përndryshe ModelCraft e ndan në trekëndësha (plane, sipërfaqe NURBS, sipërfaqe rrotullimi, kurba të shtrira, shtrirje; të prera nga skajet e tyre, poli-sipërfaqet e mbyllura si rrjeta të mbyllura). Kurbat bëhen skaje, blloqet bëhen komponentë (blloqet brenda blloqeve mbahen), shtresat bëhen etiketa (të fshehura kur janë të fikura), ngjyra e objektit (e vetja, e shtresës së tij ose e materialit të tij) i lyen faqet. Skedari thotë njësinë e vet; modeli hyn në madhësinë e vërtetë. Hap pas hapi: [Sill një model .3dm](topic:import-3dm-files).
- **Mesazhet:** rreshti i statusit thotë sa faqe erdhën nga rrjetat e ruajtura dhe sa u ndanë në trekëndësha, dhe emëron çfarë u la jashtë: pikat, retë e pikave, tekstin, përmasat, vijëzimet, dritat, objektet SubD, faqet mbi lloje sipërfaqesh që nuk lexohen ende, blloqet e lidhura.
- **Kufi:** skedarë deri në 300 MB.

## PLY (.ply)

Importim dhe eksport, për rrjeta me ngjyra (skanime, printim 3D me ngjyra, modelues të tjerë).

- **Importim:** ASCII dhe binar. Faqet bëhen një [rrjetë](topic:meshes) me normalet, koordinatat e teksturës dhe ngjyrat e kulmeve të mbajtura; çdo faqe lyhet me ngjyrën më të afërt nga 4,096 ngjyra, që t'i shohësh ngjyrat tani. PLY nuk ka njësi ose konventë boshti: koordinatat hyjnë siç janë (metra, Z lart). Një PLY vetëm me pika është një re pikash: hape në BimCraft ose CivilCraft.
- **Eksport:** PLY binar me pozicionet, normalet dhe ngjyrat (dhe koordinatat e teksturës kur modeli i ka), në metra, Z lart.

## FBX (.fbx)

Vetëm importim. Skedarë FBX 7 (nga viti 2011 e tutje), binarë ose ASCII, lexuar nga lexuesi vetjak i ModelCraft.

- Rrjetat hyjnë si [rrjeta](topic:meshes) me normalet, koordinatat e teksturës (çdo grup UV) dhe ngjyrat e kulmeve; një rrjetë që e përdorin disa objekte mbetet e përbashkët. Objektet bëhen grupe me transformimet e tyre (përfshirë pivotet, shmangiet dhe para-rrotullimet).
- Materialet: tekstura difuze — e ngulitur në skedar, ose një imazh i hedhur së bashku me `.fbx` — hyn si teksturë (imazhet TGA mbahen si PNG); përndryshe ngjyra difuze. Cilësimet e tjera të materialit presin modelin e ri të materialeve.
- Boshti lart dhe njësia e skedarit zbatohen: gjithçka hyn Z lart, në metra.
- Dritat pikë dhe reflektor bëhen [llamba](topic:lights) (një intensitet FBX prej 100 është llamba parazgjedhur e ModelCraft, 800 lumen: intensitetet FBX nuk kanë njësi). Kamerat bëhen [skena](topic:scenes).
- Personazhet e skeletuara hyjnë në pozicionin e pushimit; kockat dhe animacionet numërohen dhe nuk mbahen ende. Dritat drejtuese dhe zonë, dhe gjeometria tjetër përveç rrjetave (NURBS, kurba), numërohen dhe lihen jashtë.
- Skedarët FBX 6 dhe më të vjetër refuzohen: ruaji përsëri si FBX 2011 ose më të ri.

## Alembic (.abc)

Vetëm importim: memorie gjeometrie nga programet e animacionit dhe efekteve.

- Rrjetat (rrjeta poligonale dhe nëndarjeje) hyjnë si [rrjeta](topic:meshes), me koordinatat e teksturës dhe normalet; transformimet bëhen grupe. Alembic është Y lart dhe kthehet në Z lart; metra.
- Një memorie me shumë mostra (një animacion) hyn me mostrën e parë; shiriti i statusit thotë sa ka.
- Pikat, kurbat, sipërfaqet NURBS, kamerat dhe dritat numërohen dhe lihen jashtë. Skedarët në strukturën e vjetër HDF5 refuzohen: ruaji përsëri si skedar Ogawa Alembic.

{{ui:Kontrollo për printim 3D (STL ose 3MF)…}} kontrollon formën më parë dhe shkruan përzgjedhjen, ose gjithçka që shfaqet. Shih [Përgatit një model për printim 3D](topic:print-3d).

## 3MF (.3mf)

Vetëm eksport, nga {{ui:Kontrollo për printim 3D (STL ose 3MF)…}}. Bërthama 3MF: një rrjetë në **milimetra**, Z lart, me ngjyrat e saj si materiale. Shumica e programeve të prerjes për printim e lexojnë, dhe ndryshe nga STL e thotë njësinë e vet. Gjërat e fshehura lihen jashtë. Shih [Përgatit një model për printim 3D](topic:print-3d).

## Eksporti DWG dhe DXF (.dwg, .dxf)

Për programet CAD. Modeli shkruhet në njësinë e vet: inç për modelet në këmbë e inç, përndryshe milimetra, centimetra ose metra (shiriti i statusit e emëron).

- **Faqet** bëhen faqe 3D (trekëndësha). Vijat brenda një faqeje, dhe skajet e buta, shkruhen të padukshme, kështu që faqet duken si ato të ModelCraft.
- **Skajet e lira** bëhen vija.
- **Grupet dhe komponentët** bëhen blloqe: një komponent shkruhet një herë dhe vendoset aq herë sa përdoret, duke përfshirë kopjet e rrotulluara dhe të pasqyruara. Një grup që u shtri pasi u rrotullua (kështu që është i pjerrët) shkruhet në vend.
- **Ngjyrat:** DWG mban ngjyrën e çdo faqeje saktësisht; DXF përdor ngjyrën më të afërt nga 255 ngjyrat standarde CAD.
- **Versionet:** DWG shkruhet si AutoCAD 2004 (AC1018), që programet CAD nga viti 2004 e tutje e hapin. DXF është R12 (AC1009), versioni që e lexon çdo program CAD; R12 nuk ka fushë njësie, kështu që i thuaj programit CAD cilën njësi të përdorë.
- **Nuk shkruhen:** udhëzuesit, përmasat, skenat dhe kamera.

## IFC (.ifc)

Vetëm eksport, për BimCraft dhe programe të tjera BIM. IFC4 me një projekt, një sit, një ndërtesë dhe katet e saj. Çdo grup ose komponent i nivelit të lartë bëhet një proxy elementi ndërtimi me emrin e vet; ato të mbyllura shkruhen si forma solide (breps të facetuara), ato të hapura si modele sipërfaqesh; vrimat në faqe mbahen. Gjeometria e lirë në nivelin e lartë bëhet një element i quajtur "Loose geometry". Pa tipe, veti ose materiale.

**Katet:** {{ui:Eksporto}} › {{ui:Katet IFC…}} i liston, çdo kat me një emër dhe një lartësi ({{ui:Shto kat}}, ose {{ui:Gjej nga modeli}}, që bën një kat për çdo lartësi mbi të cilën qëndrojnë grupet e tua të nivelit të lartë). Në eksport, çdo grup ose komponent shkon në katin në ose poshtë pikës së tij më të ulët, dhe mban vendin e vet. Pa kate, gjithçka shkon në një kat, "Level 1", në 0. Katet ruhen në skedarin ModelCraft.

## DWG (.dwg) dhe DXF (.dxf)

Importohen si vija mbi tokë (vijëzimet dhe faqet 3D si faqe); eksporti si përshkruhet më sipër. Shih [Modeli mbi një plan sajti](topic:site-plan).

- **Lexim:** vija, polivija (me harqe), polivija 3D, rrethe, harqe dhe referenca blloqesh, përfshirë grupet, nga hapësira e modelit. Objektet e padukshme (si gjendjet e fshehura të një blloku dinamik) lihen jashtë. Kurbat bëhen 48 pjesë të drejta për çdo rreth të plotë.
- **Lexuar që nga 0.4:** spline-et dhe elipset (si skaje), tekst, tekst me shumë rreshta dhe vlera atributesh (si skaje në një shkrim me një vijë), vijëzime (faqe me vrima), faqe 3D dhe mbushje solide (faqe), dhe përmasa (të vizatuara nga blloqet e përmasave të vetë vizatimit).
- **Lexuar që nga 0.7:** trupa 3D, rajone dhe trupa (të dhënat e tyre ACIS, DWG dhe DXF të çdo versioni), secili si grup i veçantë, ato të mbyllura si solide. Faqet mbi sipërfaqe të tjera nga plane, cilindra, kone, sfera, tore dhe sipërfaqe të thjeshta spline lihen jashtë dhe listohen.
- **Nuk lexohen:** pikat, tabelat, multidrejtuesit, imazhet dhe çdo gjë në hapësirën e letrës.
- **Njësitë:** merren nga vizatimi kur e thotë. Nëse jo, ModelCraft pyet.
- **DXF** duhet të jetë ASCII. DXF binar refuzohet.
- **DWG** nga AutoCAD R13 deri në formatin aktual (AutoCAD 2018 e më të rejat; AC1012 deri në AC1032) lexohen nga lexuesi vetjak DWG i ModelCraft, në faqe; është pjesë e ModelCraft, kështu që punon pa lidhje kur punon edhe ModelCraft. Versionet më të vjetra (R12 e më përpara) dhe skedarët shumë të dëmtuar nuk mund të lexohen; ruaji si DXF.
- **Kufijtë:** koordinatat më shumë se 10,000 km larg origjinës, ose më shumë se 2 milionë copa vije, refuzohen.

## Skedarët SKP

{{ui:Importo}} (ose lëshoje skedarin mbi pamje) lexon skedarët SketchUp me lexuesin vetjak të ModelCraft, në faqe: asgjë nuk ngarkohet, dhe punon pa lidhje kur punon edhe ModelCraft. Testuar me skedarë nga SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 dhe 2026; versionet e tjera duhet të hapen gjithashtu, por nuk janë provuar ende. Modeli hyn si një grup i vetëm, i emërtuar sipas skedarit. Një {{key:Mod+Z}} e heq përsëri. Hap pas hapi: [Sill një model SKP](topic:import-sketchup-files).

- **Mbahet:** faqet me vrimat e tyre, grupet (si grupe) dhe komponentët (si komponentë, të përbashkët), emrat dhe vendosjet e tyre, ngjyrat, etiketat mbi grupe dhe komponentë, skajet që nuk janë pjesë e një faqeje, dhe skajet e buta dhe të lëmuara, kështu që sipërfaqet e lakuara mbeten të lëmuara.
- **Ngjyrat:** materiali i vetë një faqeje jep ngjyrën e saj. Një material i lyer mbi një grup ose komponent bëhet boja e asaj vendosjeje, kështu që faqet brenda pa ngjyrë të tyre e marrin, si në SketchUp; një komponent i lyer me dy ngjyra mbetet një komponent.
- **Etiketat** mbi grupe dhe komponentë bëhen etiketa ModelCraft, të shfaqura ose të fshehura siç ishin. Etiketat mbi faqe dhe skaje të lira nuk mbahen (ModelCraft i etiketon vetëm grupet dhe komponentët); shiriti i statusit i numëron.
- **Gjërat e fshehura hyjnë të fshehura** (faqet, skajet, grupet, komponentët, dhe faqet dhe skajet mbi një etiketë të fshehur), kështu që sheh atë që tregonte SketchUp; {{ui:Shfaq të gjitha}} i shfaq.
- **Teksturat:** një faqe e lyer me një material të teksturuar mban teksturën e saj, e vendosur siç është në skedar, dhe skedari ModelCraft mban imazhin. Një teksturë mbi një grup ose komponent të tërë, një teksturë që mungon nga skedari, ose një imazh që shfletuesit nuk mund ta shfaqin (si një skedar Photoshop) mban vetëm ngjyrën e materialit të vet.
- **Lihen jashtë, dhe numërohen në rreshtin e statusit:** imazhet e vendosura në model. Teksti, përmasat, udhëzuesit, planet e prerjes, skenat dhe stilet nuk lexohen.
- **Njësitë:** skedarët SketchUp janë në inç brenda; ModelCraft i konverton, kështu që madhësitë dalin të sakta në çdo njësi.
- **Ruajtja e `.skp`** nuk është ndërtuar. Për ta kthyer një model në SketchUp, eksporto Collada (`.dae`).

## Nuk mbështetet

ModelCraft nuk mund të hapë skedarë 3DS ose IFC, dhe nuk mund të ruajë skedarë 3DS, FBX, STEP, `.3dm` ose SketchUp (`.skp`).
