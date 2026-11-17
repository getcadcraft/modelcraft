---
title: Zgjidhja e problemeve
summary: Simptoma, shkaqe dhe zgjidhje, nga një pamje 3D bosh deri te importet me madhësi të gabuar, me mesazhet që shfaq ModelCraft.
keywords: problem, gabim, nuk punon, bosh, webgl, grafikë, ngadalë, mesazh, importi dështoi, madhësi e gabuar, s'mund të zgjidhet, prekje, tastet nuk punojnë, punë e humbur
from: 6e7394be
---

## Pamja 3D është bosh

**Simptoma:** mesi i ekranit mbetet bosh, ose shfaq vetëm ngjyrën e sfondit, dhe klikimi i veglave nuk bën asgjë.

**Shkaku:** ModelCraft vizaton me WebGL 2, grafikën 3D të shfletuesit. Mungon kur shfletuesi është i vjetër, kur akselerimi me harduer është i fikur, ose kur drejtuesi i grafikës është bllokuar.

**Zgjidhja:**

:::chromium
1. Hap cilësimet e shfletuesit dhe kërko "akselerim grafike".
2. Ndiz "Përdor akselerimin e grafikës kur është e disponueshme" dhe rinis shfletuesin.
3. Nëse është tashmë i ndezur, shkruaj `chrome://gpu` në shiritin e adresës (`edge://gpu` në Edge) dhe kërko "WebGL2" në listë. Nëse thotë disabled, përditëso drejtuesin e grafikës.
:::

:::firefox
1. Hap **Cilësimet**, pastaj **Përgjithshme**, dhe lëviz te "Performanca".
2. Hiq shenjën nga "Përdor cilësimet e rekomanduara të performancës", pastaj vër shenjën te "Përdor akselerimin me harduer kur është e disponueshme". Rinis Firefox.
3. Nëse ende dështon, shkruaj `about:support` në shiritin e adresës dhe shiko seksionin "Graphics" për WebGL 2.
:::

:::safari
Përditëso macOS dhe Safari. Versionet e reja të Safari kanë gjithmonë WebGL 2 të ndezur. Nëse ke ndryshuar veçoritë eksperimentale nën **Safari**, pastaj **Settings**, pastaj **Advanced** (ose **Feature Flags**), rivendosi ato.
:::

Në një kompjuter pune, desktop në distancë ose makinë virtuale, grafika 3D mund të jetë e bllokuar nga politika. Provo një kompjuter tjetër. Shih [Shfletuesit dhe kompjuterët](common:browsers).

## Tastet nuk bëjnë asgjë, ose shkruhen në një kuti

**Shkaku:** fokusi i tastierës është në një fushë paneli: lista {{ui:Sipërfaqet}} te {{ui:Stili}}, një cilësim i diellit, fusha {{ui:Emri}} te {{ui:Informacioni i entitetit}}, ose zgjedhësi i njësive. Shkronjat dhe tastet e shigjetave shkojnë atëherë te ajo fushë.

**Zgjidhja:** kliko në pamjen 3D, pastaj shtyp tastin sërish. Tastet nuk bëjnë asgjë edhe kur një dialog është i hapur.

## Shkrimi i një numri nuk bën asgjë

- **Ende pa drejtim.** Një gjatësi e shkruar shkon në drejtimin ku tregon treguesi nga klikimi i parë. Lëviz pak treguesin në drejtimin që dëshiron, pastaj shkruaj.
- **Momenti i gabuar.** Shumica e veglave pranojnë një vlerë të shkruar vetëm pas klikimit të parë: kliko cepin e parë, sipërfaqen ose pikën nga ku do të zhvendosësh. {{ui:Rreth}} dhe {{ui:Shumëkëndësh}} pranojnë numrin e anëve para klikimit të parë.
- **"Shkruaj një gjatësi si 3m, 10'6" ose 4m,3m."** ModelCraft nuk e lexoi dot. Kontrollo për presje dhjetore (`2,5`): përdor pikë.

## Një figurë fillon në vendin e gabuar në ekran prekjeje

**Simptoma:** me gisht, drejtkëndëshi i parë është në rregull, por drejtkëndëshi, rrethi ose vija tjetër fillon aty ku mbaroi prekja e mëparshme, jo aty ku prek.

**Shkaku:** një gabim në këtë version: në ekran prekjeje vegla kujton pikën e fundit të kapjes nga gjesti i mëparshëm.

**Zgjidhja:** prek sërish butonin e veglës në shiritin e veglave para çdo forme të re. Kjo e nis veglën nga e para, dhe pika e parë bie aty ku prek.

## Redaktimi i një grupi ndryshoi një tjetër

**Simptoma:** kopjove një grup me {{ui:Zhvendos}} dhe {{key:Ctrl}}, hape një kopje dhe e redaktove, dhe kopja tjetër u ndryshua gjithashtu. {{ui:Pasqyra}} i shfaq të dyja me të njëjtin emër.

**Shkaku:** në këtë version, kopjimi i një grupi bën një vendosje të dytë të të njëjtit grup, si te një komponent. Butoni {{ui:Bëje unik}} i ModelCraft ofrohet vetëm për komponentët.

**Zgjidhja:** përzgjidh kopjen që dëshiron ta ndryshosh, kliko {{ui:Bëj komponent}} te {{ui:Informacioni i entitetit}}, pastaj {{ui:Bëje unik}}. Kjo kopje tani ka përmbajtjen e vet. Ose {{ui:Çmonto}} atë.

## Shtyj/tërhiq nuk bën atë që pritej

- **"Shtyj/tërhiq punon mbi një sipërfaqe. Kliko një sipërfaqe."** Ke klikuar një skaj ose hapësirë bosh. Pezullo treguesin deri sa sipërfaqja të theksohet, pastaj kliko.
- **Sipërfaqja është brenda një grupi.** Kliko dy herë grupin për ta hapur së pari.
- **Një dritare nuk preu murin.** Drejtkëndëshi duhet të jetë vizatuar mbi sipërfaqen e murit, jo përpara saj, dhe muri duhet të ketë një sipërfaqe prapa. Shih [Prit një hapje përmes murit](topic:openings#if-it-did-not-cut-through).
- **Dy kuti mbivendosen pa u bashkuar.** Trupat e ngurtë të shtyrë në njëri-tjetrin nuk priten dhe nuk bashkohen me njëri-tjetrin në këtë version.

## Një vijë ose figurë nuk krijoi një sipërfaqe

Një sipërfaqe mbushet vetëm kur skajet mbyllin një unazë të sheshtë. Kontrollo që pika e fundit të jetë kapur te pika e parë ("Endpoint"), dhe që të gjithë skajet të jenë në një plan. Një unazë pak jashtë plani mbetet si vija. Vizato sërish një nga skajet e saj, duke kapur cepat.

## Nuk mund të zgjedh ose fshij një sipërfaqe

- Me {{ui:Përzgjidh}}, një klikim afër një skaji merr skajin. Kliko më afër mesit të sipërfaqes.
- {{ui:Gomë}} nuk zgjedh sipërfaqe. Përzgjidh sipërfaqen dhe shtyp {{key:Delete}}, ose fshi një nga skajet e saj.
- Nëse i përket një grupi ose komponenti, klikimi zgjedh gjithë objektin. Kliko dy herë për ta hapur.

## "Përzgjidh diçka për ta zhvendosur së pari, ose kliko mbi të."

{{ui:Zhvendos}}, {{ui:Rrotullo}} dhe {{ui:Shkallë}} kanë nevojë për diçka për të punuar: përzgjidhe së pari, ose nis veglën duke klikuar vetë gjënë (jo hapësirë bosh ose udhëzues).

## "Përzgjidh së pari disa gjeometri (tërhiq një dritare, ose trefisho për të përzgjedhur gjithçka të lidhur)."

{{key:G}} dhe {{key:Shift+G}} kanë nevojë për një përzgjedhje. Udhëzuesit nuk mund të grupohen.

## Tastet e shigjetave rrotullojnë në vend që të kyçin

Kyçjet punojnë vetëm pas klikimit të parë të një vegle vizatimi ose redaktimi. {{ui:Shtyj/tërhiq}} nuk ka kyçje, dhe te {{ui:Rrotullo}} ato nuk e ndryshojnë kthesën. Në raste të tjera, tastet e shigjetave rrotullojnë pamjen.

## Esc në ekran të plotë

Në ekran të plotë, shfletuesi mund ta përdorë {{key:Esc}} të parë për të dalë nga ekrani i plotë. Shtyp {{key:Esc}} sërish për të anuluar veglën.

## Nuk ka buton të mesit

Shtyp {{key:O}} për {{ui:Orbito}} dhe tërhiq, ose përdor tastet e shigjetave. Shih [Orbito, lëviz dhe zmadho](topic:orbit-pan-zoom#without-a-middle-button).

## Importet

| Mesazhi | Çfarë të bësh |
|---|---|
| "ModelCraft importon SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG dhe DXF. … nuk është asnjëri prej këtyre." | Eksporto modelin nga programi tjetër në një nga këto formate |
| "Ky skedar është më i madh se 300 MB." | Thjeshto ose ndaj modelin në programin tjetër |
| "…shumë i madh për t'u modeluar këtu (më shumë se 2 milionë kulmime)." | Njëlloj |
| "Ky skedar .gltf kërkon "…"…" | Lësho `.gltf` bashkë me skedarët e tij `.bin` dhe teksturat, ose hap versionin `.glb` |
| "Ky skedar glTF kërkon zgjerimin … që ModelCraft nuk e lexon ende." | Eksporto sërish nga programi tjetër pa atë zgjerim (teksturat KTX2, për shembull) |
| Një OBJ hyn pa ngjyrat ose teksturat e veta | Lësho `.obj` bashkë me `.mtl` dhe imazhet e tij |
| "Ky skedar Alembic përdor paraqitjen e vjetër HDF5…" | Ruaje sërish nga programi tjetër si skedar Ogawa Alembic |
| Një FBX hyn pa teksturat e veta | Lësho `.fbx` bashkë me imazhet e teksturave, ose përfshi mediat gjatë eksportit |
| "Ky skedar FBX është version …, që ModelCraft nuk e lexon" | Eksporto sërish si FBX 2011 ose më të ri |
| Një STL ose PLY hyn 1,000 herë më i madh ose më i vogël | STL lexohet si milimetra dhe PLY si metra: shkallëzoje (shih [Rrotullo dhe shkallëzo](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| "Ky nuk është skedar Collada (.dae)…" ose "…jo XML i formuar mirë…" | Skedari është dëmtuar ose nuk është Collada. Eksporto sërish |
| "Ky skedar Collada nuk ka gjeometri që ModelCraft mund ta importojë." | Përmban vetëm kamera, drita ose referenca për skedarë të tjerë |
| "Ky është një DXF binar. Ruaje si DXF ASCII dhe provo përsëri." | Ruaje sërish nga programi CAD si ASCII |
| "Ky nuk është vizatim DWG…" | Skedari nuk është DWG, ose është dëmtuar |
| "Ky vizatim nuk u lexua (…). Mund të jetë dëmtuar, ose i ruajtur në një version DWG që lexuesi nuk e trajton…" | Kllapat tregojnë arsyen. Ruaje si DXF, ose si DWG nga AutoCAD 2000 deri në 2018, nga programi CAD |
| "Ky vizatim shkon më shumë se 10,000 km larg origjinës…" | Zhvendose afër 0,0 në programin CAD |

### Importi është me madhësi të gabuar ose shtrirë anash

- **OBJ:** OBJ nuk ka njësi; ModelCraft e lexon si metra. Një model në milimetra hyn 1000 herë më i madh: [shkallëzoje](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) me `0.001`; një model në inç me `0.0254`.
- **OBJ shtrirë anash:** ModelCraft pret skedarë OBJ me Y lart. Një skedar i shkruar me Z lart hyn i shtrirë. Rrotulloje 90° rreth boshtit të kuq: kliko qendrën e {{ui:Rrotullo}} mbi një sipërfaqe që shikon përgjatë të kuqes, ose hape skedarin në programin e vet dhe eksporto me Y lart.
- **DWG ose DXF:** zgjodhe njësinë e gabuar në dialogun "Njësitë e vizatimit". Zhbëj dhe importo sërish.

## Hapja e skedarëve

| Mesazhi | Çfarë të bësh |
|---|---|
| "Ky skedar nuk është model ModelCraft (nuk është JSON)." | Përdor {{ui:Importo}} për formate të tjera |
| "Ky nuk është skedar ModelCraft që mund ta hapim: …" | Skedari është dëmtuar ose është ndryshuar me dorë |
| "Ky model u ruajt nga një ModelCraft më i ri…" | Hape në versionin më të ri |
| "Ky skedar është më i madh se 200 MB." | Modeli është shumë i madh për t'u hapur këtu |

## Humba punë

ModelCraft nuk ruan vetvetiu në një skedar. Kur mbyll ose rifreskon një skedë me ndryshime të pa ruajtura, shfletuesi pyet së pari ("Leave site?" ose "Reload site?"): zgjidh të qëndrosh dhe ruaj. Edhe "E re" dhe "Hap" pyesin ("Unsaved changes"). Nëse shfletuesi ose kompjuteri u rrëzua, hap ModelCraft sërish në të njëjtin shfletues: ai të ofron punën e paruajtur ("Recover your work?"; shih [Rikthe punën tënde](common:recover)). Ruaj shpesh me {{key:Mod+S}}.

## Dosja e shkarkimeve mbushet me kopje

Çdo ruajtje është një shkarkim i ri, me emër `Untitled (1).modelcraft`, `Untitled (2).modelcraft` e kështu me radhë. Fshi të vjetrat, ose vendos shfletuesin të pyesë ku të ruajë çdo skedar dhe të mbishkruajë vetë skedarin e vjetër. Shih [Hap, ruaj, importo dhe eksporto](topic:files#save-a-model).

## Bëhet ngadalë

- Çdo hap i zhbërjes mban një kopje të modelit (një [rrjet](topic:meshes) mban vetëm atë që ndryshoi), kështu që në një import shumë të madh gjeometrie shtyj/tërhiq, çdo redaktim merr më shumë kohë. Çmonto ose fshi ato që nuk të duhen, ruaj dhe rihap: rihapja pastron edhe historinë e zhbërjes.
- Hijet e diellit kushtojnë më shumë. Hiq shenjën nga {{ui:Hijet e diellit}} ndërsa modelon.

## Pa hije

{{ui:Hijet e diellit}} është e fikur, dielli është poshtë në orën që zgjodhe ("Dielli është poshtë në këtë orë."), ose stili është {{ui:Tel-kornizë}}, që nuk vizaton hije.

## "Ky shfletues nuk lejoi ekranin e plotë."

Disa shfletues dhe disa pamje të mbështjella e refuzojnë ekranin e plotë. Përdor në vend të tij ekranin e plotë të vetë shfletuesit ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft nuk hapet pa lidhje

ModelCraft hapet jashtë linje vetëm pasi është ruajtur për përdorim jashtë linje në atë shfletues: butoni i shiritit të aplikacionit duhet të thotë {{ui:Gati jashtë linje}}. Hape ndërsa je në linjë dhe kliko {{ui:Ruaje për jashtë linje}}. Nëse butoni thotë {{ui:Nuk u ruajt}}, kliko sërish me lidhje më të mirë; {{ui:Modaliteti jashtë linje nuk është i disponueshëm}} do të thotë që ky dritare (një dritare private, ose një kompjuter i menaxhuar) nuk mund të mbajë një kopje. Shih [Puna jashtë linje](common:offline).
