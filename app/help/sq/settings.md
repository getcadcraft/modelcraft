---
title: Cilësimet e ModelCraft
summary: Zgjidhni stilin e tasteve që njihni, bëni që trackpad-i të orbitojë dhe të lëvizë pamjen pa butonat e kamerës, dhe aktivizoni ose çaktivizoni kapjen dhe përplasjet e trupave të ngurtë.
keywords: cilësimet, preferencat, kontrollet, stili i tasteve, harta e tasteve, shkurtoret, blender, trackpad, touchpad, scroll, orbito, pinch, kapje, kap, përplasje, mbivendosje, prerje, kalim përmes
from: caf77d5b
---

Hapni {{ui:Cilësimet}} me ingranazhin në shiritin e aplikacionit ose me {{key:Mod+,}}. Skeda e parë, {{ui:ModelCraft}}, mban cilësimet që i përkasin këtij aplikacioni; {{ui:Të përgjithshme}} mban ato që i ndajnë të gjitha aplikacionet CadCraft (tema, shiriti i veglave, panelet). Cilësimet e ModelCraft ekzistojnë vetëm në aplikacion: i ndryshoni këtu, dhe ky shfletues i mban mend.

## Kontrollet: cilat taste dhe butona miu

Dy stile tastesh. Ndërroni midis tyre me {{ui:Taste: Shtyj-tërhiq}} / {{ui:Taste: Modelues}} në fund djathtas të pamjes, ose në fund të menusë {{ui:Më shumë}} të shiritit të veglave:

- **Stili Shtyj-tërhiq** (fillimi; shkronjat e modelonjësve shtyj-tërhiq si SketchUp): një shkronjë zgjedh një mjet: {{key:L}} vijë, {{key:R}} drejtkëndësh, {{key:P}} shtyj/tërhiq, {{key:M}} zhvendos, {{key:Q}} rrotullo, {{key:S}} shkallë, {{key:G}} bëj komponent. Shih [Tastet dhe veprimet e miut](topic:keyboard).
- **Stili Modelues** (tastet e modelonjësve me rrjetë si Blender): përzgjidhni së pari, pastaj veproni menjëherë mbi përzgjedhjen. {{key:G}} e zhvendos, {{key:R}} e rrotullon dhe {{key:S}} e shkallëzon nga pozicioni i treguesit — pa klikim të parë. Ndërsa lëviz, {{key:X}}, {{key:Y}} ose {{key:Z}} kyç boshtin e kuq, jeshil ose blu, një numër i shkruar cakton distancën (ose gradët, ose faktorin), dhe një klikim ose {{key:Enter}} e vendos; {{key:Esc}} ose klikimi i djathtë e kthen prapa. Pastaj jeni përsëri te {{ui:Përzgjidh}}.

Stili i tasteve është i njëjti zgjedhje si stili i menusë: stili Modelues i tasteve është stili i menusë {{ui:Modelues}}, dhe zgjedhja e njërit zgjedh edhe tjetrin. Shih [Menutë, tastet dhe miu](topic:menus-keys-and-mouse). Lista e plotë e stilit Modelues është në [Tastet dhe veprimet e miut](topic:keyboard#modeler-keys). Ndihmat në ekran të shiritit të veglave dhe të kartës së fillimit ndjekin stilin që zgjidhni.

## Lëvizja me rrotën e miut ose trackpad

- **Zgjidheni vetë** (fillimi): ModelCraft e vëzhgon lëvizjen. Lëvizja anash ose e imët, siç e dërgon një trackpad, orbiton; hapat e plotë të rrotës zmadhojnë.
- **Rrota e miut**: lëvizja gjithmonë zmadhon drejt treguesit.
- **Trackpad**: rrëshqitni me dy gishta për të orbituar, mbani {{key:Shift}} dhe rrëshqitni për të lëvizur pamjen, shtrëngoni me dy gishta për të zmadhuar. Nuk ju duhen kurrë butonat {{ui:Orbito}}, {{ui:Lëviz pamjen}} ose {{ui:Zmadhim}}.

Shtrëngimi me dy gishta zmadhon në çdo zgjedhje. Nëse "Zgjidheni vetë" gabon për miun ose trackpad-in tuaj, zgjidhni atë që keni.

:::tip
Në stilin Modelues mund të orbitoni edhe duke mbajtur {{key:Alt}} dhe tërhequr, dhe të lëvizni pamjen me {{key:Alt+Shift}} dhe një tërheqje — e dobishme në laptop pa buton të mesëm.
:::

## Kapja

**Kap te pikat, skajet dhe boshtet** (aktive në fillim) tërheq treguesin drejt pikave fundore, mesive, skajeve, udhëzuesve dhe boshteve të kuq, jeshil e blu — shih [Inferenca](topic:inference). Çaktivizojeni kur doni të vendosni diçka lirisht pranë gjeometrisë tjetër pa që të kërcejë. Sipërfaqet, toka dhe kyçjet e boshteve funksionojnë edhe me kapjen të çaktivizuar.

Butoni {{ui:Kapje}} në fund djathtas të pamjes bën të njëjtën gjë për punën e kësaj sesioni (edhe ai ruhet). Në stilin Modelues, {{key:Shift+Tab}} e ndërron.

## Trupat ndalen aty ku prekin

**Ndalo trupat aty ku prekin** (aktive në fillim) e ruan një mur nga tërheqja përmes një muri tjetër. Me {{ui:Zhvendos}} (dhe me {{key:G}}, dhe ngjitjen e zhvendosjen me {{key:Mod+D}}) përzgjedhja rrëshqet deri te trupi tjetër dhe ndalet duke e prekur; me {{ui:Shtyj/tërhiq}} një sipërfaqe ndalet aty ku takon një trup tjetër. Mbështetja mbi diçka dhe rrëshqitja përgjatë saj janë në rregull — vetëm hyrja brenda trupit ndalohet. Gjërat që mbivendosen që në fillim mund të tërhiqen ende larg njëra-tjetrës.

Për të shtyrë diçka përmes me qëllim, klikoni {{ui:Përplasje}} në fund djathtas (ose hiqni cilësimin), bëni zhvendosjen, dhe klikoni përsëri.

:::note
Përplasjet kontrollohen për zhvendosje dhe shtyj/tërhiq. {{ui:Rrotullo}} dhe {{ui:Shkallë}} nuk i kontrollojnë ende, dhe gjeometria e lirë që prek bashkohet ende, si gjithmonë: mbani gjërat e veçanta në [grupe](topic:groups-components) që të mbeten të veçanta.
:::

## Shtrati i printerit 3D

Madhësia e shtratit të printerit tuaj: {{ui:Nuk është caktuar}} (fillimi), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 ose 300 × 300 × 400 mm. Zgjidhni madhësinë më të afërt me vëllimin e ndërtimit të printerit tuaj. [Kontrollo për printimin 3D](topic:print-3d) tregon atëherë kur një model është më i madh se shtrati; me {{ui:Nuk është caktuar}}, madhësia nuk kontrollohet.

## Orbitimi dhe lëvizja e pamjes

**Orbito rreth asaj që është nën kursor** (aktive në fillim): orbitimi rrotullohet rreth pjesës së modelit nën treguesin, dhe lëvizja e pamjes e mban atë pikë nën treguesin; mbi hapësirë boshe të dyja përdorin qendrën e pamjes. Çaktivizojeni për të orbituar gjithmonë rreth qendrës së pamjes. **Shpejtësia e orbitimit** dhe **Shpejtësia e lëvizjes** shkojnë nga 0.25× në 3× (1× është fillimi) dhe zbatohen për miun, trackpad-in, prekjen dhe tastet me shigjeta. Shih [Orbitimi, lëvizja dhe zmadhimi](topic:orbit-pan-zoom).

## Treguesi i cepit

Çfarë shfaqet në cepin e pamjes 3D: **Kubi i pamjes** (fillimi; lart djathtas — klikoni një sipërfaqe, skaj ose cep për të parë nga aty, tërhiqeni për të orbituar, tërhiqni unazën e busullës së tij për të rrotulluar modelin), **Ikona e boshteve** (një shenjues i vogël X, Y, Z në fund majtas që ndryshon me pamjen: X e kuqe, Y jeshile, Z blu) ose **Asnjë**. Shih [Kubi i pamjes](topic:view-cube).
