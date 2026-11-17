---
title: Objektet kurbë
summary: Vizato kurba Bézier, NURBS dhe me segmente drejtë, jepu atyre trashësi, gjerësi ose konicitet, mbush ato të sheshta, vendos tekstin si kurbë dhe kthei në rrjeta.
keywords: kurbë, kurba, bezier, nurbs, spline, splines, shteg, tub, pajisje, kabllo, litar, skajim, ekstrudo, konicitet, prirje, rreze, mbushje, profil, tekst, shkronja, logo, kurba në mesh
from: 602bf077
---

Një **objekt kurbë** është një kurbë që bën një formë: një tub përgjatë saj (skajim), një shirit (ekstrudim), një bri që ngushtohet (konicitet) ose — kur është e sheshtë dhe e mbyllur — një pllakë e mbushur ose shkronja. Forma ndjek kurbën: lëviz një pikë dhe tubi lëviz me të. Kur forma është e saktë, e kthen në rrjetë.

## Shto një kurbë

Zgjidh {{ui:Curve}} në listën e hapësirave dhe shtyp {{ui:Add}}:

| Lloji | Çfarë është |
| --- | --- |
| Kurbë Bézier, rreth Bézier | Kalon nëpër pikat e saj; çdo pikë ka dy doreza që vendosin drejtimin e kurbës |
| Kurbë NURBS, rreth NURBS, Shteg | E butë, vizatohet drejt pikave të saj (fillon dhe mbaron në pikat e skajeve); çdo pikë ka një peshë |
| Tekst | Teksti yt si kontura shkronjash të sheshta, të mbushura |

Një kurbë e re merr një tub të hollë që të shihet dhe të zgjidhet; vendos thellësinë e skajimit në 0 për një kurbë të zhveshur.

Mund të nisesh edhe nga diçka e vizatuar: zgjidh një hark, një rreth, një shumëkëndësh ose një kurbë të vizatuar në hapësirën Model dhe shtyp {{ui:Make a curve object}} te Informacioni i entitetit. Vijat e vizatuara mbeten.

## Redakto pikat

Kliko dy herë një objekt kurbë (ose zgjidhe dhe zgjidh {{ui:Curve}}) për ta redaktuar.

- Kliko një pikë ose dorezë ({{key:Shift}} shton ose heq); tërhiqe për ta zhvendosur. Tërhiq në hapësirë boshe për të zgjedhur me një kuti.
- {{ui:Extend}} ({{key:E}}, ose {{key:Ctrl}}+kliko) shton një pikë pas skajit të zgjedhur, te treguesi.
- {{ui:Subdivide}} ({{key:W}}) vendos një pikë midis çdo çifti fqinjësh të zgjedhur; një Bézier e mban formën e vet.
- {{ui:Move}}, {{ui:Turn}}, {{ui:Scale}} zhvendosin pikat e zgjedhura me treguesin (tastet e modelimit {{key:G}} {{key:R}} {{key:S}}, tastet shtytje/tërheqje {{key:M}} {{key:Q}} {{key:S}}); kliko për ta mbajtur, {{key:Esc}} për ta anuluar.
- {{ui:Close}} ({{key:C}}) mbyll një spline të hapur ose hap një të mbyllur; {{ui:Reverse}} ({{key:Shift+R}}) e ndjek në drejtim të kundërt.
- Dorezat Bézier: {{ui:Smooth}} ({{key:V}}) i vendos për një kurbë të butë, {{ui:Corner}} ({{key:Shift+V}}) i drejton nga fqinjët, {{ui:Free}} ({{key:Alt+V}}) i lë aty ku i vendose. Tërheqja e një doreze e bën të lirë.
- {{ui:Bézier}}, {{ui:NURBS}} dhe {{ui:Poly}} ndryshojnë llojin e splineve të zgjedhura, duke mbajtur pikat.

Çdo ndryshim është një hap zhbërjeje.

## Forma

Cilësimet janë në panel (dhe te Informacioni i entitetit në hapësirën Model):

- **Forma:** kurbat 3D shkojnë në çdo drejtim; një kurbë e sheshtë qëndron në planin e vet dhe mund të mbushet.
- **Mbush splinet e mbyllura** (të sheshta): konturat bëhen një pllakë; një kontur brenda një tjetri është një vrimë, kështu që shkronjat mbajnë vrimat e tyre.
- **Ekstrudo:** gjysma e gjerësisë së shiritit (kurba të hapura ose 3D), ose gjysma e trashësisë së pllakës (të mbushura).
- **Thellësia e skajimit** dhe **rrumbullakësia:** një tub i rrumbullakët përgjatë kurbës (me ekstrudim: një shirit i rrumbullakët); në një formë të mbushur, një skaj i rrumbullakët.
- **Mbyll skajet:** kapakë në një tub të hapur.
- **Konicitet përgjatë saj:** shkallëzon në mënyrë të barabartë përgjatë çdo spline, për shembull `1, 0.2` për një bri, `0, 1, 0` për një bobinë.
- **Butësia** dhe, për NURBS, **rendi**: sa hollësisht vizatohet, dhe sa e butë është (2 e drejtë … 6 më e butë).
- Me pika të zgjedhura: **rreze** (trashësia e tubit atje, shumëzuar me skajimin), **prirja** (e rrotullon shiritin rreth kurbës) dhe, për NURBS, **pesha**.

Modifikuesit funksionojnë mbi një objekt kurbë si mbi një rrjetë: një Array përgjatë saj, një Mirror, një sipërfaqe Subdivision. Shih [Modifikuesit mbi një rrjetë](topic:modifiers).

## Kthe në rrjetë

{{ui:To mesh}} (në hapësirën Curve ose te Informacioni i entitetit, {{ui:Curve to mesh}}) e bën objektin kurbë rrjetën që shfaq tani; modifikuesit e tij mbeten sipër. Pastaj redakto në hapësirën e Rrjetës. Zhbëj e kthen përsëri.

Shih edhe [Rrjetat](topic:meshes) dhe [Redakto një rrjetë](topic:mesh-edit).
