---
title: Zhvendos, kopjo dhe bëj radhë
summary: Zhvendos gjërat duke klikuar ose sipas një distance të saktë, kopjoji me një tast modifikues dhe bëj një rresht kopjesh me hapësirë të barabartë.
keywords: zhvendos, kopjo, dublo, radhë, rresht, hapësirë, ndaj, zgjatje, kolona, përsërit, kopje të shumëfishta, zhvendosje paralele
from: 280245fc
---

{{ui:Zhvendos}} ({{key:M}}) zhvendos atë që është përzgjedhur nga një pikë te tjetra. Duke mbajtur një tast modifikues bëhet kopje, dhe pas një kopjeje mund të shkruani sa kopje të tjera dëshironi.

## Zhvendos diçka

1. Përzgjidh atë që dëshiron të zhvendosësh (shih [Përzgjidh gjërat](topic:select)). Nëse nuk është përzgjedhur asgjë, {{ui:Zhvendos}} merr atë mbi të cilën klikon.
2. Shtyp {{key:M}}.
3. Kliko një pikë nga ku do të zhvendosesh. Zgjidh diçka me kuptim, si një cep: ajo pikë do të vendoset saktë aty ku klikon më pas.
4. Lëviz treguesin. Përzgjedhja ndjek treguesin. Ngjitet te pikat, skajet dhe drejtimet e kuqe, jeshile dhe blu, ashtu si bën një vijë.
5. Kliko aty ku duhet të shkojë pika, ose shkruaj një distancë dhe shtyp {{key:Enter}}.

   Shiriti i statusit kthehet te "Kliko një pikë nga ku të zhvendosesh…" për zhvendosjen e radhës.

Një distancë e shkruar shkon në drejtimin ku po tregoni. Mund të shkruani edhe një zhvendosje të saktë, `<2m,0,0>` (2 m përgjatë boshtit të kuq), ose një destinacion të saktë për pikën që keni zgjedhur, `[0,0,0]` (origjina). Shih [Shkruaj madhësi të sakta](topic:value-box).

Për të zhvendosur vetëm përgjatë një boshti, shtyp një tast shigjete pas klikimit të parë: {{key:Right}} e fikson në boshtin e kuq, {{key:Left}} në boshtin jeshil, {{key:Up}} në boshtin blu. Shtyp të njëjtën shigjetë përsëri për ta lëshuar.

## Zhvendosja e një pjese të formës e zgjat atë

Gjeometria që nuk është grupuar është e lidhur. Nëse përzgjidhni një faqe ose disa skaje dhe i zhvendosni, faqet e lidhura me to zgjaten për t'i ndjekur. Zhvendosni faqen e sipërme të një kutie anash dhe kutia priret; zhvendosni një skaj të çatisë dhe çatia ndryshon pjerrësinë. Faqet që nuk mund të mbeten më të sheshta palosen në trekëndësha.

Për të zhvendosur një objekt të tërë pa e zgjatur, përzgjidheni të gjithin më parë (kliko tri herë mbi të), ose më mirë, bëjeni grup ose komponent (shih [Grupet dhe komponentët](topic:groups-components)).

## Kopjo diçka

1. Përzgjidh atë që dëshiron të kopjosh.
2. Shtyp {{key:M}}.
3. Mbaj {{key:Ctrl}} (ose {{key:Alt}}) dhe kliko pikën nga ku do të zhvendosesh. Në Mac, {{key:Mod}} ose {{key:Alt}} bën të njëjtën gjë. Shiriti thotë "Ctrl zhvendos në vend të kësaj", që do të thotë se po kopjoni.

   Mund edhe të shtypni dhe lëshoni {{key:Ctrl}} ose {{key:Alt}} pas klikimit të parë për të kaluar midis zhvendosjes dhe kopjimit.

4. Kliko aty ku shkon kopja, ose shkruaj një distancë dhe shtyp {{key:Enter}}.

   Origjinali mbetet aty ku ishte dhe kopja është e përzgjedhur.

## Kopjo, prer, ngjit dhe dublo

- {{key:Mod+C}} kopjon përzgjedhjen, {{key:Mod+X}} e pret (kopjon, pastaj fshin). {{ui:Kopjo}} dhe {{ui:Ngjit}} janë gjithashtu butona në grupin {{ui:Redakto}} të shiritit të veglave, dhe {{ui:Më shumë}} pranë tyre ka prerjen, ngjitjen në vend dhe dublimin.
- {{key:Mod+V}} ngjit: një kontur i kopjes ndjek treguesin, duke u ngjitur si çdo vegël, dhe një klik e vendos me pikën e poshtme më të ulët aty. {{key:Esc}} anulon.
- {{key:Mod+Shift+V}} ngjit në vend, saktësisht aty ku ishte kopja. Kjo është e dobishme për të zhvendosur diçka në një grup që keni hapur.
- {{key:Mod+D}} ({{key:Shift+D}} në stilin Modeler) dublon: bëhet një kopje dhe lëviz me treguesin menjëherë. Kliko për ta vendosur, shkruaj një distancë, ose shtyp {{key:Esc}} për ta lënë. Menjëherë pas, shkruaj `3x` për më shumë kopje me radhë.

Një grup i ngjitur bëhet grup i ri. Një komponent i ngjitur është një vendosje tjetër e të njëjtit komponent, kështu që redaktimi i njërit ndryshon të gjithë. Kopjet ngjiten gjithashtu në një skedë tjetër ModelCraft në këtë shfletues (aty hyjnë si përkufizime të reja).

## Një rresht kopjesh

Menjëherë pas një kopjeje, ndërsa {{ui:Zhvendos}} është ende vegla:

- Shkruaj `3x` (ose `*3`) dhe shtyp {{key:Enter}} për tre kopje me radhë, secila në të njëjtën hapësirë si kopja e parë. Merr tre kopje të reja përveç origjinalit.
- Shkruaj `/3` dhe shtyp {{key:Enter}} për të ndarë në vend: tre kopje të shpërndara në mënyrë të barabartë nga origjinali deri te vendi ku e vendose kopjen e parë, e fundit në atë pikë. Përdoreni këtë për të mbushur një hapësirë: vendos një kopje në skajin e largët, pastaj ndaj.

Shkruaj një numër tjetër menjëherë pas: `5x` zëvendëson radhën `3x`. Shiriti të kujton: "U kopjua. Shkruaj 3x për më shumë kopje me radhë, ose /3 për të ndarë distancën."

### Shembull: kolona çdo 6 metra

1. Bëj një kolonë dhe bëje komponent ({{key:G}}), që të gjitha kopjet të ndryshojnë së bashku më vonë.
2. Shtyp {{key:M}}, mbaj {{key:Ctrl}} dhe kliko cepin e bazës së kolonës.
3. Lëviz përgjatë boshtit të kuq dhe shkruaj `6m`, pastaj {{key:Enter}}.
4. Shkruaj `4x` dhe {{key:Enter}}. Keni pesë kolona, 6 m larg njëra-tjetrës.

## Gjëra që duhet të dini

- Shtyp {{key:Esc}} përpara klikimit të dytë për të anuluar; çdo gjë kthehet aty ku ishte.
- Zhvendosja funksionon brenda grupit që po redaktoni. Për të zhvendosur një grup të tërë, mbylleni më parë dhe përzgjidheni nga jashtë.
- Me {{ui:Përplasje}} të ndezur (poshtë djathtas, dhe në [cilësimet e ModelCraft](topic:settings#solids-stop-where-they-touch)), një zhvendosje ndalon aty ku përzgjedhja prek një solid tjetër, në vend që ta kalojë. Kliko {{ui:Përplasje}} për ta fikur për një zhvendosje që duhet të kalojë.
- Për të vendosur një kopje brenda një grupi tjetër: kopjoje, hap grupin tjetër dhe ngjite ({{key:Mod+Shift+V}} e mban në të njëjtin vend).
