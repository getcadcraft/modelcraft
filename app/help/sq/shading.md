---
title: Bëni materiale me nyje
summary: Ndërtoni një material nga tekstura, imazhe dhe llogaritje në hapësirën e punës Hijëzim, shikojeni në pamje ndërsa punoni, dhe lyeni sipërfaqet me të.
keywords: hijëzim, pjekje, pjekje teksturash, bllokim ambienti, ao, lakim, pjekje normale, poli i lartë, poli i ulët, hartë drite, dekal, dekale, ngjitës, logo, etiketë, lyerje teksture, pennel, material, materiale, materialx, mtlx, openpbr, standard surface, bibliotekë materialesh, librarycraft, grup teksturash, pbr, importo tekstura, zip, cc0, tërhiq, nyje, nyjet, redaktor nyjesh, shader, tekstura, procedurale, zhurmë, kuadrate, voronoi, qeliza, valë, tulla, pllaka, dru, mermer, gradient, papastërti, konsumim skaji, rampë ngjyrash, përzierje, bump, hartë normale, ashpërsi, metalikë, opacitet, prerje, emetim, shkëlqim, zhvendosje, hartëzim me kuti, triplanar, uv, imazh, nyje imazhi, openpbr
from: d7368b21
---

Një material i bërë në hapësirën e punës **Hijëzim** i përket skedarit. Është një grafik i vogël: **nyje** që krijojnë tekstura, imazhe dhe numra, të lidhura me **Daljen e materialit**, ku hyrjet janë pamja e sipërfaqes — ngjyra bazë, ashpërsia, metalikja, normalja, opaciteti, emetimi dhe pjesa tjetër e modelit OpenPBR. Lyeni sipërfaqet me të si çdo material biblioteke, dhe çdo ndryshim shfaqet në pamje menjëherë.

## Hapeni

Zgjidhni {{ui:Hijëzim}} në listën e hapësirave të punës. Pamja 3D mban pjesën e sipërme të ekranit dhe **redaktori i nyjeve** merr pjesën e poshtme. Paneli në të djathtë liston materialet e vetë skedarit.

- {{ui:Material i ri}} krijon një material gri me vetëm Daljen e tij të materialit.
- **Bëni një kopje të redaktueshme të një materiali biblioteke** e kthen tullën, drurin, pllakën dhe të tjerët në një grafik që mund ta ndryshoni: tekstura e tij vjen përmes një nyje Teksturë biblioteke, relievet e tij përmes një nyje Bump.
- {{ui:Lyej me të}} lyen sipërfaqet ose grupet e përzgjedhura, ose zgjedh materialin për mjetin Lyerje. Materialet e mjetit Lyerje listojnë edhe ato të skedarit nën **Në këtë skedar**.
- {{ui:Dublo}} dhe {{ui:Fshi}} veprojnë mbi materialin që po redaktoni. Fshirja nuk zhbëhet: sipërfaqet e lyera me të shfaqin ngjyrën e parazgjedhur derisa t'i lyeni sërish.

## Materialet nga biblioteka

Paneli **Bibliotekë materialesh (Library)** liston materialet e bibliotekës, secili me një pamje paraprake të renderuar nga gjurmuesi i rrugës i CadCraft. Janë grupe teksturash të publikuara sipas CC0, me kredit për njerëzit që i bënë.

- Klikoni një material për ta sjellë në skedar (imazhet e tij vijnë me të) dhe, me sipërfaqe ose grupe të përzgjedhura, për t'i lyer ato.
- Tërhiqeni mbi një sipërfaqe ose grup në pamje për të lyer vetëm atë.
- Bëhet një nga materialet e skedarit: ndryshoni nyjet e tij si çdo tjetër. Kredit i tij shfaqet në panel dhe mbetet në skedar.

## Importo një grup teksturash

{{ui:Imazhe ose një zip…}} ose {{ui:Nga një dosje…}} nën **Importo një grup teksturash** krijon një material nga një grup hartash. Hartat gjenden sipas fjalëve në emrat e skedarëve: color, albedo, diffuse ose basecolor; roughness (ose gloss, i kthyer në ashpërsi); metalness ose metallic; normal (OpenGL ose DirectX, nga `gl` / `dx` në emër); height ose displacement; ambient occlusion; opacity; emission. Hartat e paketuara (ARM, ORM) lihen jashtë. Pllaka fillon në 1 × 1 m: vendosni madhësinë e saj reale te Dalja e materialit. Lartësia shkon te zhvendosja me shkallën 0 — rrisni shkallën për ta përdorur në rrjete.

## MaterialX

MaterialX është formati i hapur që programet e tjera 3D dhe të renderimit e përdorin për të dhënë materialet më tej.

- {{ui:Eksporto si MaterialX…}} ruan materialin që po redaktoni: vlerat e tij, dhe çdo tekstura si imazh PNG pranë skedarit `.mtlx` (në një zip). Zgjidhni hijëzuesin me të cilin shkruhet: **OpenPBR Surface** (MaterialX 1.39, i njëjti model që përdor ModelCraft) ose **Standard Surface** (MaterialX 1.38, që shumë programe e lexojnë sot). Teksturat vendosen sipas koordinatave UV në metra; vendosja me kuti dhe triplanar shkruhet si UV.
- {{ui:Importo MaterialX…}} (ose {{ui:Nga një dosje…}}) lexon skedarët `.mtlx` me hijëzues OpenPBR, Standard Surface, UsdPreviewSurface ose glTF PBR. Jepni edhe imazhet, ose një zip me gjithçka: një imazh gjendet sipas rrugës, emrit të tij, ose emrit të tij me një lloj tjetër imazhi (një `.exr` që emrat e skedarëve e tregojnë mund të vijë si `.jpg` pranë tij). Teksturat, hartat normale, aritmetika, përzierjet dhe zhvendosja hyjnë si nyje; çdo gjë tjetër mban vlerën e vet, dhe rreshti i gjendjes thotë çfarë u la jashtë.

## Dekalet

Dekali është një imazh i vendosur mbi një sipërfaqe — një logo, një tabelë, një etiketë, një njollë — me material të vetin.

- Vendosni **Gjerësinë e një dekali të ri**, pastaj {{ui:Vendos një dekal…}} (ose {{ui:Dekal}} në shiritin e veglave), zgjidhni një imazh PNG, JPEG ose WebP dhe klikoni një sipërfaqe. Imazhi projektohet mbi sipërfaqet atje, duke ruajtur proporcionet; pjesët transparente të një PNG mbeten transparente.
- Dekali i përket grupit ose komponentit ku klikuat dhe lëviz me të. Mbulon sipërfaqet brenda kutisë së tij që kanë të njëjtin drejtim, dhe ndalet te skajet e asaj mbi të cilën shtrihet.
- Çdo dekal merr materialin e vet, të emërtuar **Dekal: <imazh>**, në listën e skedarit: redaktojeni si çdo tjetër (ashpërsinë, një bump, një shkëlqim). {{ui:Material}} pranë dekalit e hap.
- Pranë çdo dekali: gjerësia e tij (lartësia ndjek imazhin), {{ui:Rrotullo}} (një e katërta e rrotullimit) dhe {{ui:Fshi}}. Dekalet mbahen me materialet e skedarit, jashtë Zhbërjes.
- Shfaqen në pamjen e hijëzuar, në renderimet e shpejta dhe në imazhet me cilësi të lartë.

## Lyerja në teksturë

{{ui:Lyej teksturën}} (ose {{ui:Lyej}} nën **Lyerje në teksturë**) e kthen treguesin në një penel të rrumbullakët. Tërhiqeni mbi një sipërfaqe që mban një nga materialet e këtij skedari: penelja lyen imazhin që ndodhet pas ngjyrës së tij bazë.

- Në një rrjet ajo lyen sipas UV-ve të rrjetit (zhbëjeni së pari në hapësirën e punës UV); në sipërfaqe të tjera lyen përgjatë sipërfaqes, kështu lyerja përsëritet me pllakën e materialit.
- Një material ngjyra bazë e të cilit është një ngjyrë e thjeshtë merr një imazh të ri 512 × 512 me atë ngjyrë herën e parë që e lyeni. Një material ngjyra bazë e të cilit vjen nga nyje të tjera ka nevojë për një nyje Imazh të lidhur me Ngjyrën bazë.
- Vendosni ngjyrën e penelit, madhësinë (në piksela imazhi), fuqinë dhe fortësinë në panel. {{ui:Zhbëj goditjen}} ose Ctrl+Z (ndërsa lyeni) heq një goditje, deri në 20 të fundit.
- Imazhi i lyer ruhet në skedar. Materialet e bibliotekës nuk mund të lyhen: bëni fillimisht një kopje të redaktueshme.

## Pjekja e teksturave

**Pjek teksturat** shkruan atë që forma dhe skena i japin një sipërfaqeje në imazhe përgjatë UV-ve të një rrjeti.

- Përzgjidhni një rrjet që ka UV (zhbëjeni në hapësirën e punës UV), zgjidhni hartat dhe shtypni {{ui:Pjek}}:
  - **Bllokimi i ambientit** — sa i hapur është çdo pikë: këndet, palosjet dhe vendet nën gjëra të tjera bëhen më të errëta. Gjithçka që shfaqet në model e hijëzon, deri në distancën e bllokimit.
  - **Lakimi** — i ndritshëm përgjatë skajeve të jashtme, i errët në këndet e brendshme, gri i mesëm mbi pjesët e sheshta dhe të lakuara lehtë, mbi gjerësinë e skajit që vendosni.
  - **Normalet nga objekti me detaje të larta** — përzgjidhni edhe një kopje të detajuar: detajet e sipërfaqes së saj shkruhen si hartë normale për atë më të thjeshtë (objekti me më pak trekëndësha mbi të cilin piqet). Distanca e kërkimit është sa larg mund të jenë dy sipërfaqet nga njëra-tjetra.
  - **Ndriçimi** — dielli i vendit dhe datës së modelit (Stili) me hijet e tij, plus qielli, si hartë drite.
- Imazhet bashkohen me skedarin dhe shfaqen në nyjet Imazh. Nëse materiali që redaktoni ka një nyje **Papastërti dhe konsumim skaji**, ajo lexon menjëherë bllokimin dhe lakimin e ri.
- Më shumë rreze për çdo piksel teksture bëjnë bllokimin dhe ndriçimin më të butë, por zgjasin më shumë. Pjekja punon në bërthamat e procesorit në sfond; {{ui:Ndalo pjekjen}} e ndal.

## Ndërtoni një grafik

1. {{ui:Shto një nyje…}} (ose {{key:Shift+A}} në redaktorin e nyjeve) shton një nyje në mes të redaktorit.
2. Tërhiqni nga një pikë daljeje (në anën e djathtë të nyjes) te një pikë hyrjeje (në anën e majtë të nyjes) për t'i lidhur. Një lidhje e dytë në një hyrje zëvendëson të parën; tërhiqeni një hyrje të lidhur larg për ta shkëputur.
3. Hyrjet që nuk janë të lidhura tregojnë vlerën e tyre: shkruani një numër ose zgjidhni një ngjyrë. Cilësimet janë në fund të çdo nyjeje.

Tërhiqni një nyje nga titulli për ta zhvendosur, tërhiqni hapësirën boshe për të lëvizur pamjen, dhe përdorni rrotën për të zmadhuar. {{key:Delete}} heq nyjet ose lidhjen e zgjedhur, {{key:Mod+Z}} zhbën, {{key:Mod+D}} dublon, {{key:F}} shfaq çdo nyje. Çdo ndryshim është një hap zhbërjeje i redaktorit të nyjeve. Zhbërja e modelit vetë nuk ndryshon materialet.

| Nyjet | Çfarë krijojnë |
|---|---|
| Koordinatat e teksturës | Ku ndodhet një pikë në pllakë: e përsërit, e zhvendos, e rrotullon një të katërtën. |
| Vlerë, Ngjyrë | Një numër, një ngjyrë. |
| Imazh | Një imazh i skedarit (një që erdhi me një model të importuar, ose një që shtuat me {{ui:Shto një imazh…}}). Zgjidhni **Ngjyrat** për një fotografi dhe **Të dhëna** për një hartë ashpërsie ose normale. |
| Teksturë biblioteke | Tekstura, ashpërsia dhe lartësia e një materiali biblioteke. |
| Kuadrate, Zhurmë | Kuadrate; zhurmë fraktale e butë me detajet, ashpërsinë dhe farën e saj. |
| Qeliza Voronoi, Valë, Gradient | Qeliza (distanca deri në pikën më të afërt, kufijtë mes qelizave, një ngjyrë për qelizë); brezat tërthor, lart ose diagonalë, si sinus, sharrë ose trekëndësh, të përkulur nga zhurma; gradientë linearë, katrorë, radialë dhe sferikë. |
| Tulla, Pllaka | Rreshta tullash me zhvendosje alternuese, ose një rrjet pllakash: ngjyra, llaç ose fugë, hapësirë dhe skaj i rrumbullakosur në metra, një lartësi për relievet, një numër i rastësishëm për çdo copë. |
| Dru, Mermer | Unaza përgjatë drejtimit të drurit me fibra të holla; vena të përkulura nga turbulenca. |
| Papastërti dhe konsumim skaji | Konsumon skajet konvekse dhe ndot zgavrat nga lakimi i rrjetit dhe imazhet e bllokimit ([Pjekja e teksturave](topic:shading#bake-textures) i krijon; ose vendosni dy cilësimet e tij të imazhit, në shtrirjen UV të rrjetit: vendosni materialin me koordinatat UV). Pa to nuk ndryshon asgjë. |
| Përzierje ngjyrash, Rampë ngjyrash, Nuanca/saturimi/vlera, Ndriçimi dhe kontrasti, Përmbys, Gama, Ndaj dhe Kombino RGB | Punë me ngjyra. |
| Matematikë, Interval hartëzimi | Aritmetikë mbi numra (mbledhje, shumëzim, fuqi, hap i butë dhe të tjera). |
| Bump, Hartë normale | Një normale nga një lartësi (Bump) ose nga një imazh hartë normale (Hartë normale: zgjidhni drejtimin e kanalit të gjelbër). |

## Dalja e materialit

Cilësimet e saj thonë si shtrihet tekstura mbi sipërfaqe:

- **Gjerësia e pllakës** dhe **Lartësia e pllakës**: sa metra mbulon një pllakë e teksturës. Gjithçka që prodhon një grafik përsëritet përgjatë pllakës pa cung.
- **Vendosur sipas**: **Koordinatat UV** ndjekin sipërfaqet (sipërfaqet e shtyj/tërhiqni: përgjatë çdo sipërfaqeje; rrjetet: UV-të e tyre, një njësi UV = një pllakë), **Kuti** projekton nga më i afërti nga tre boshtet, **Triplanar** përzien tre projeksionet mbi sipërfaqe të prirura (**Fortësia e përzierjes**: më e lartë do të thotë përzierje më e fortë).
- **Fuqia e normales** shkallëzon hyrjen e normales. **Shkalla e zhvendosjes** cakton sa larg lëviz hyrja e zhvendosjes kulmet e rrjetit.
- {{ui:Më shumë hyrje}} shfaq pjesën tjetër të hyrjeve OpenPBR: veshjen, fuzz-in, nënsipërfaqen, filmin e hollë, transmetimin dhe ngjyrat e tyre.

## Në imazhe me cilësi të lartë

Gjurmuesi i rrugës lexon ngjyrën bazë, ashpërsinë, metalikën, opacitetin, normalen dhe emetimin nga grafiku ndërsa ndryshojnë përgjatë sipërfaqes. Çdo hyrje tjetër që lidhni (një veshje që ndryshon, për shembull) përdoret me mesataren e saj; paneli thotë cilën. Një prerje nga një tekstur opaciteti tregon formën e saj, dhe hija e saj është e tejdukshme në mënyrë të barabartë. Një tekstur që shkëlqen ndriçon atë që përballet, pa u marrë si burim drite.

**Zhvendosja** lëviz kulmet e rrjeteve vetëm, prandaj shtoni një modifikues Ndarje për detaje ([Modifikuesit](topic:modifiers)). Sipërfaqet e shtyj/tërhiqni mbajnë formën e tyre dhe marrin relievet nga normalja.

:::tip
Në një kompjuter me WebGPU grafiku llogaritet në kartën grafike; pa të, në procesor. Rezultati është i njëjtë.
:::
