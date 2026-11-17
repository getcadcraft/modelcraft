---
title: Përmaso dhe ndrysho madhësinë e asaj që vizatove
summary: Vendos përmasa midis cepave, mbi harqe dhe rrathë, ose midis dy skajesh; shkruaj një gjatësi të re për të ndryshuar madhësinë e modelit. Rishkruaj gjatësinë e një skaji, ose gjerësinë, thellësinë dhe lartësinë e një grupi te Informacioni i entitetit.
keywords: përmasë, përmasa, ndrysho madhësinë, redakto madhësinë, gjatësi, gjerësi, thellësi, lartësi, shtrije, përmasë drejtuese, shëno, mat, pas faktit, rreze, diametër, kënd, këndor, hark, rreth, R, Ø
from: a1f815ec
---

Madhësitë në ModelCraft nuk janë të fiksuara pasi diçka është vizatuar. Një përmasë tregon një gjatësi mbi modelin, dhe shkrimi i një gjatësie të re te ajo e ndryshon modelin për t'u përshtatur. Mund të rishkruash edhe gjatësinë e një skaji, ose gjerësinë, thellësinë dhe lartësinë e një grupi, te {{ui:Entity info}}.

## Vendos një përmasë

1. Shtyp {{key:D}}, ose kliko {{ui:Dimension}} në shiritin e veglave.
2. Kliko një cep nga ku do të matësh. Kapet te cepat, mesi dhe skajet, si gjatë vizatimit.
3. Kliko cepin e dytë.

   Ose kliko një herë mbi një **skaj** (ndihma thotë "On edge") për të shënuar tërë atë skaj me një klik.
4. Lëviz treguesin aty ku duhet të shkojë vija e përmasës, dhe kliko. Mund të shkruash edhe zhvendosjen, si `0.5m`, dhe të shtypësh {{key:Enter}}.

   Vija e përmasës mbetet horizontale për një skaj horizontal, përveç kur e sheh nga anash. Për një skaj vertikal, mbetet në planin vertikal që të shikon më mirë.

Shiriti i statusit thotë "Përmasa 4 m." Përmasat tregojnë gjatësinë në njësinë e modelit dhe përditësohen kur ndryshon njësinë te zgjedhësi.

## Rreze, diametër dhe kënd

Po e njëjta vegël {{ui:Dimension}} shënon edhe rrathët dhe këndet:

- **Një hark:** kliko harkun. Ndihma thotë {{ui:Radius}}. Lëviz treguesin aty ku duhet të shkojë teksti dhe kliko: përmasa lexon **R 1.5 m**.
- **Një rreth:** kliko rrethin. Merr një **diametër** (**Ø 3 m**) me një vijë mbi rreth që kalon nëpër qendër. Shumëkëndëshat funksionojnë njësoj, me cepat e tyre mbi rreth.
- **Këndi midis dy skajeve:** kliko një skaj, pastaj kliko një skaj të dytë që takohet me të në një cep (ndërsa je mbi të, ndihma thotë {{ui:Angle between the edges}}). Pastaj lëviz brenda këndit që do dhe kliko. Brenda cepit merr këndin midis skajeve; lëviz në njërën anë dhe merr këndin ngjitur (për shembull 150° në vend të 30°). Sa larg nga cepi klikon përcakton ku shkon harku; ose shkruaj atë distancë.

Për ta kaluar një rreze në diametër ose anasjelltas, zgjidhe përmasën dhe zgjidh te {{ui:Show as}} në {{ui:Entity info}}.

**Ndryshimi i madhësisë me to:** shkruaj një rreze ose diametër të re menjëherë pas vendosjes, ose zgjidhe më vonë dhe shkruaj. Harku ose rrethi mban qendrën dhe ndryshon madhësinë; një faqe që e kufizon (një disk, skaji i një çarje) ndryshon me të. Dy gjëra vetëm matin:

- **Një përmasë këndi** nuk e ndryshon kurrë modelin. Për të ndryshuar një kënd, rrotullo skajet me {{ui:Rotate}}.
- **Rrethi në skajin e një cilindri** (një rreth që e tërhoqe me {{ui:Push/pull}}) nuk mund të ndryshohet nga përmasa e tij, sepse anët e tij do të duhej të ndryshonin gjithashtu. Shkallëzo cilindrin në vend të kësaj, rreth boshtit të tij.

## Ndrysho madhësinë e modelit me një përmasë

Menjëherë pas vendosjes së një përmase, shkruaj një gjatësi të re dhe shtyp {{key:Enter}}: `6m`, `12'`, `3500` në një model me milimetra. Modeli ndryshon në atë madhësi.

Më vonë, në çdo kohë:

1. Me {{ui:Select}}, kliko tekstin ose vijën e përmasës. {{ui:Entity info}} thotë **Përmasë** dhe shfaq {{ui:Length}} të saj.
2. Shkruaj gjatësinë e re dhe shtyp {{key:Enter}}. Mund të shkruash drejt te kutia e vlerës, ose te kutia {{ui:Length}} në {{ui:Entity info}}.

### Çfarë lëviz

Cepi i dytë që klikove lëviz, dhe lëviz edhe gjithçka përtej tij:

- **Të dy cepat në një copë** (gjerësia e një kutie, lartësia e një muri): ana te cepi lëvizës rrëshqet jashtë ose brenda, dhe faqet e lidhura me të shtrihen. Një kuti mbetet një trup i mbyllur, dhe çdo gjë që ndodhet krejt në atë anë, si një komponent dritareje, lëviz me të.
- **Cepat në dy copa të veçanta** (boshllëku midis dy kutive): copa e cepit lëvizës lëviz e tëra, dhe boshllëku ndryshon.
- **Cepi lëvizës brenda një grupi ose komponenti** që nuk e ka brenda cepin tjetër: lëviz i gjithë grupi.
- **Të dy cepat brenda të njëjtit grup ose komponent**: ai shtrihet brenda. Një komponent ndryshon kudo ku është vendosur, si gjithmonë kur e redakton.

Për të ndryshuar cilin skaj lëviz, zgjidhe përmasën dhe zgjidh te {{ui:Moves}} në {{ui:Entity info}}:

| Zgjedhja | Çfarë ndodh |
|---|---|
| {{ui:Second end}} (parazgjedhja) | Skaji që klikove së dyti lëviz |
| {{ui:First end}} | Skaji që klikove së pari lëviz |
| {{ui:Both ends (centered)}} | Çdo skaj lëviz gjysmën e ndryshimit, kështu që mesi mbetet në vend |

### Kur refuzohet një ndryshim madhësie

ModelCraft nuk ndryshon asgjë dhe thotë arsyen në shiritin e statusit:

- "a face would bend out of its plane": një faqe do të përkulej jashtë planit të vet; përmasa kalon pjerrët nëpër formë. Shëno përgjatë një skaji, ose përgjatë të kuqes, jeshiles ose blusë.
- "a face would shrink to nothing or turn inside out": një faqe do të zvogëlohej në asgjë ose do të kthehej nga brenda; gjatësia e re është shumë e shkurtër për formën.
- "the end that moves is not on a corner of the model": skaji që lëviz nuk është në një cep të modelit; ai u vendos në hapësirë boshe ose në mesin e një skaji. Zgjidh skajin tjetër te {{ui:Moves}}, ose vendos përmasën mbi dy cepa.
- "a length must be above zero": një gjatësi duhet të jetë mbi zero.

Çdo ndryshim madhësie është një hap: {{key:Mod+Z}} e zhbën.

## Rishkruaj një madhësi te Informacioni i entitetit

Nuk të duhet gjithmonë një përmasë:

- **Një skaj:** zgjidhe. {{ui:Length}} i tij te {{ui:Entity info}} është një kuti ku shkruan. Shkrimi i një gjatësie te kutia e vlerës funksionon gjithashtu. Lëviz skaji më larg përgjatë të kuqes, pastaj jeshiles, pastaj blusë, dhe ajo që është e lidhur me të shtrihet. Për shembull, rishkrimi i skajit të përparmë poshtë të një kutie e bën kutinë më të gjerë nga e djathta.
- **Një grup ose komponent:** zgjidhe. {{ui:Width (red)}}, {{ui:Depth (green)}} dhe {{ui:Height (blue)}} janë kuti. Ana e tij më e largët (e djathta, prapa, lart) lëviz. Këta janë boshtet e vetë grupit, përpara çdo rrotullimi që i ke dhënë.

Shtyp {{key:Enter}} për të aplikuar, ose {{key:Esc}} për ta kthyer vlerën e vjetër.

## Përmasat ndjekin modelin

Një përmasë është e lidhur me dy cepat ku u vendos (një kënd: me cepin e tij dhe me skajet e largëta të dy skajeve të tij; një rreze ose diametër: me harkun ose rrethin e tij). Zhvendos, shtyj/tërhiq ose ndrysho madhësinë e gjeometrisë, dhe përmasa ndjek dhe tregon gjatësinë e re. Mbetet e lidhur kur e bën gjeometrinë një grup ose komponent.

Nëse një skaj u vendos diku që nuk është cep (mbi një faqe ose në hapësirë boshe), ose cepi i tij është fshirë, ai skaj mbetet aty ku ishte. Përmasa ende mat, por mund të ndryshojë madhësinë vetëm nga skaji tjetër.

## Hiq përmasat

- Një përmasë: zgjidhe dhe shtyp {{key:Delete}}, ose kliko me {{ui:Eraser}}.
- Të gjitha përmasat: pa asgjë të zgjedhur, kliko {{ui:Delete all dimensions}} te {{ui:Entity info}}.

Përmasat ruhen në skedarin `.modelcraft`. Nuk eksportohen në formate të tjera, që mbajnë vetëm modelin 3D. Një skedar me përmasa hapet edhe në një ModelCraft më të vjetër, pa to.
