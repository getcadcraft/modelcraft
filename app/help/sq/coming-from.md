---
title: Nga modelues të tjerë
summary: Si lidhen zakonet e modelimit me shtytje/tërheqje me ModelCraft, tast për tast, dhe dallimet që befasojnë njerëzit.
keywords: kalimi, migrim, i njohur, dallimet, modelues shtytje tërheqje, skp, shkurtore, zakonet, krahasim, kutia e masave, pasqyra e objekteve, informacioni i entitetit
from: 74ffd4ac
---

Nëse ke modeluar në SketchUp, ModelCraft do të të duket i njohur: e njëjta ide e faqeve dhe e shtytjes/tërheqjes, të njëjtat shkronja të veglave, një kuti vlerash ku shkruan pa klikuar, nxjerrje me ngjyrat e kuqe, jeshile dhe blu të boshteve, grupe, komponentë, një pasqyrë objektesh, Informacion entiteti dhe skena. Kjo faqe liston çfarë kalon drejtpërdrejt dhe, më e rëndësishmja, çfarë jo.

## Zakonet që kalojnë

| Je mësuar me | Në ModelCraft |
|---|---|
| Shtyp Space për Përzgjidh, L Vijë, R Drejtkëndësh, C Rreth | E njëjta: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Shtyp P Shtyj/tërhiq, M Zhvendos, Q Rrotullo, S Shkallë, E Gomë, T Metër shiriti | E njëjta: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Shtyp O Rrotullo pamjen, H Lëviz pamjen, Z Zmadhim, Shift+Z Zmadhim i gjithë | E njëjta: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Shtyp G për të bërë një komponent | E njëjta: {{key:G}}. {{key:Shift+G}} bën një grup |
| Shkruaj në kutinë e masave pa e klikuar | E njëjta, në kutinë e vlerës poshtë. Shtyp {{key:Enter}} |
| Shkruaj `4m,3m` për një drejtkëndësh, `12s` për anët | E njëjta |
| Shkruaj `3x` ose `/3` pas një kopjeje Zhvendos | E njëjta; `*3` funksionon gjithashtu |
| Shkruaj `[x,y,z]` ose `<dx,dy,dz>` për një pikë ose zhvendosje | E njëjta |
| Shkruaj një numër të thjeshtë në një model me inç arkitekturore dhe merr inç | E njëjta |
| Tërhiq me butonin e mesit për të rrotulluar, Shift+butoni i mesit për të lëvizur, rrota për zmadhim te kursori | E njëjta |
| Klik i dyfishtë me Shtyj/tërhiq për të përsëritur distancën | E njëjta |
| Tastet me shigjeta për të kyçur të kuqen, jeshilen, blunë dhe paralelen | E njëjta: {{key:Right}} e kuqja, {{key:Left}} e gjelbra, {{key:Up}} blu, {{key:Down}} paralele |
| Mbaj Shift për të kyçur një nxjerrje | E njëjta |
| Ctrl (Option në Mac) për të kopjuar gjatë zhvendosjes | {{key:Ctrl}}, {{key:Mod}} ose {{key:Alt}}, në çdo kompjuter |
| Shift për të ndërruar, Ctrl për të shtuar, Shift+Ctrl për të hequr nga përzgjedhja | Të njëjtat tasta; në Mac përdor {{key:Mod}} aty ku thotë Ctrl |
| Dritare nga e majta në të djathtë, kryqëzim nga e djathta në të majtë | E njëjta |
| Një vegël Përmasë për të shënuar gjatësi | {{key:D}}, dhe më shumë: shkruaj një gjatësi të re te një përmasë dhe modeli ndryshon madhësinë sipas saj. Shih [Përmaso dhe ndrysho madhësinë](topic:dimensions) |
| Klik i dyfishtë mbi një faqe për faqen plus skajet; i trefishtë për të gjitha të lidhurat | E njëjta |
| Klik i dyfishtë mbi një grup për ta redaktuar; Esc për ta mbyllur | E njëjta |
| Vizato një vijë mbi një faqe për ta ndarë; fshi një skaj midis faqesh të njëpllanshme për t'i bashkuar | E njëjta |
| Shtyj një drejtkëndësh dritareje nëpër një mur për ta prerë | E njëjta |
| Faqet e pasme në gri-blu; Kthe faqet | E njëjta ngjyrë; {{ui:Reverse face}} te {{ui:Entity info}} |
| Skenat si skeda mbi pamjen, Page Up dhe Page Down | E njëjta, me {{ui:Play}} në panelin {{ui:Scenes}} |
| Hijet nga data, ora, gjerësia dhe gjatësia gjeografike, me veriun në jeshile | E njëjta, në panelin {{ui:Style}} |

## Dallimet që befasojnë njerëzit

### Ruajtja është një shkarkim

Nuk ka Ruaj që mbishkruan skedarin që hape, as dialog Ruaj si me emër, as ruajtje automatike dhe as skedar kopjeruajtjeje. {{ui:Save}} ({{key:Mod+S}}) shkarkon një skedar të ri `.modelcraft` çdo herë, zakonisht në dosjen tënde të shkarkimeve. Ruaj shpesh, dhe riemërto ose zhvendos skedarët vetë. Shih [Hap, ruaj, importo dhe eksporto](topic:files).

### Importon skedarë .skp, por nuk i ruan

{{ui:Import}} lexon skedarët SketchUp me lexuesin e vet të ModelCraft, në faqe: grupet, komponentët, ngjyrat, teksturat mbi faqe, etiketat dhe skajet e butë kalojnë. Shih [Formatet e skedarëve në detaje](topic:formats#skp-files). ModelCraft nuk mund të ruajë `.skp`: për t'u kthyer, eksporto Collada nga ModelCraft dhe importoje në SketchUp.

### Nuk ka menu me klikim të djathtë

Tërhiq me të djathtën për të lëvizur pamjen; një klik i djathtë nuk bën asgjë. Komandat që do të gjeje në menunë e kontekstit janë te {{ui:Entity info}} ({{ui:Reverse face}}, {{ui:Edit}}, {{ui:Explode}}, {{ui:Make unique}}, {{ui:Make component}}) dhe në grupin {{ui:Organize}} të shiritit të veglave.

### Njësitë jetojnë në shiritin e statusit

Nuk ka Informacion modeli ose zgjedhje shabllloni. Zgjedhësi i njësive është poshtë djathtas. Një model i ri fillon në këmbë dhe inç në SHBA dhe në milimetra gjetkë, sipas cilësimit të gjuhës së shfletuesit tënd. Pjesët dhjetore shkruhen gjithmonë me pikë: `2.5m`, kurrë `2,5m`, sepse presja ndan gjithmonë vlerat.

### Boja ka materialet e veta

{{ui:Paint}} ({{key:B}}) lyen ngjyra të ngurta dhe materialet te seksioni {{ui:Materials}}: tullë, lëkurë muri, mbulesa çatie, dru, gur dhe më shumë, të vizatuara nga ModelCraft. Nuk mund të ngarkosh ende një imazh tënd si material; teksturat që vijnë me skedarët e importuar mbahen. Shih [Lyej me ngjyra dhe materiale](topic:paint).

### Shkallëzimi është uniform, pa doreza

Shkallë nuk shfaq një kuti me doreza. Kliko pikën që qëndron, një pikë referimi, pastaj madhësinë e re ose një faktor të shkruar. Shkallëzon gjithmonë njëtrajtësisht në të gjitha drejtimet. Për të shtrirë në një drejtim, shtyj/tërhiq ose zhvendos një faqe, rishkruaj gjerësinë, thellësinë ose lartësinë e një grupi te {{ui:Entity info}}, ose [ndrysho madhësinë me një përmasë](topic:dimensions).

### Rrotullo zgjedh planin nga ku klikon

Nuk ka transportir që i ngjitet faqeve ndërsa lëviz me shigjeta për të zgjedhur planin. Kliko qendrën mbi një faqe për të rrotulluar në planin e asaj faqeje, ose mbi tokë për të rrotulluar rreth vertikales. Tastet me shigjeta rrotullojnë pamjen para klikimit të parë.

### Nxjerrja nga pikat mbi të cilat kalon

ModelCraft kap drejtimet e boshteve nga **pika jote e nisjes**, dhe nga pikat, skajet dhe faqet nën tregues. Nuk ndjek një drejtim nga një pikë mbi të cilën vetëm ke kaluar (vija me pika "nga pika" e nxjerrjes). Për t'u rreshtuar me një cep të largët, kyç boshtin me një shigjetë dhe lëviz mbi atë cep: pika e kyçur rrëshqet për t'u rreshtuar me të. Ose vendos një [udhëzues](topic:guides-measure).

### Paralelja përdor skajin mbi të cilin kaloi para nisjes

Nxjerrja paralele dhe pingule përdor skajin e fundit mbi të cilin kaloi treguesi **para klikimit të parë**, jo skajet mbi të cilat lëviz gjatë vizatimit. Shih [Nxjerrja dhe kapja](topic:inference#parallel-and-perpendicular).

### Kopjet e një grupi janë të lidhura

Kopjimi i një grupi me {{ui:Move}} bën një vendosje të dytë të të njëjtit grup, kështu që ndryshimi i njërit ndryshon të dy, si me komponentët. SketchUp i bën grupet të pavarura. Shih [Zgjidhja e problemeve](topic:troubleshooting#editing-one-group-changed-another).

### Space nuk lëviz pamjen

{{key:Space}} zgjedh {{ui:Select}}, si në SketchUp. Në disa aplikacione të tjera web, mbajtja e Space lëviz pamjen; këtu nuk e bën. Tërhiq me të djathtën për të lëvizur.

### Lëvizja me dy gishta zmadhon

Në një trackpad, vendos {{ui:Settings}} › {{ui:ModelCraft}} › Lëvizja në Trackpad: dy gishta rrotullojnë, {{key:Shift}} dhe dy gishta lëvizin, një pinch zmadhon. Shih [Rrotullo, lëviz dhe zmadho](topic:orbit-pan-zoom#on-a-trackpad).

Nëse duart të njohin tastet e Blender në vend të atyre të SketchUp, zgjidh stilin e menusë {{ui:Modeler}}: {{key:G}}, {{key:R}} dhe {{key:S}} veprojnë mbi përzgjedhjen njëherësh, {{key:E}} nxjerr (shtyj/tërhiq), {{key:Shift+D}} dyfishon, dhe një shirit menuje në krye (File, Edit, View, Select, Add, Object, Mesh) zëvendëson shiritin e veglave. Nga SketchUp, stili {{ui:Push-pull}} jep një shirit menuje të ngjashëm me të vetin mbi të njëjtat shkronja veglash. Shih [Menutë, tastet dhe miu](topic:menus-keys-and-mouse).

### Trupat e shtyrë njëri në tjetrin nuk priten

Shtyj/tërhiq pret nëpër faqen pas saj në të njëjtin objekt, por dy trupa të veçantë të shtyrë njëri në tjetrin nuk kryqëzohen. Nuk ka Intersect Faces dhe nuk ka Solid Tools.

### Çfarë mungon

Vizatimi i lirë, Trim, Split dhe Outer Shell, materialet me imazhe tuajat, zgjerimet dhe një vegël paraqitjeje për fletë nuk janë në këtë version. [Ende e pandërtuar](topic:not-built-yet) liston çfarë të bësh në vend të tyre.

## Shkurtoret që mban shfletuesi

ModelCraft funksionon në një shfletues, kështu që disa shkurtore i përkasin shfletuesit, jo aplikacionit. {{key:Mod+N}} hap një dritare të re shfletuesi (përdor {{ui:New}}), dhe {{key:Mod+W}} mbyll skedën. Nëse ke ndryshime të paruajtura, shfletuesi pyet para se të mbyllet. Shih [Tastet, miu dhe trackpad-et](common:keys#shortcuts-the-browser-keeps).
