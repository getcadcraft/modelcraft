---
title: Shkruaj madhësi të sakta në kutinë e vlerës
summary: Çdo mënyrë për të shkruar gjatësi, madhësi, pika, zhvendosje, kënde, anë dhe kopje, dhe si lexohen njësitë dhe numrat e thjeshtë.
keywords: kutia e vlerës, kutia e masave, vcb, shkruaj, e saktë, përmasë, gjatësi, njësi, këmbë, inç, metrik, milimetra, koordinata, zhvendosje, varg, anë, kënd, presje dhjetore
from: 0148dc3d
---

Kutia e vlerës ndodhet në shiritin e statusit në fund, me një etiketë që ndryshon sipas veglës. Ndërsa punon, ajo tregon madhësinë live; në çdo çast mund të shkruash një madhësi të saktë.

## Si shkruhet

1. Fillo veprimin me një klikim (cepi i parë, sipërfaqja, pika nga ku lëviz).
2. Shkruaj. Nuk ke nevojë të klikosh kutinë e vlerës: një shifër ose një nga `. , - ' " [ < * /` e dërgon shkrimin aty.
3. Shtyp {{key:Enter}}.

Shtyp {{key:Esc}} në kutinë e vlerës për ta pastruar dhe për t'u kthyer te pamja. Në një ekran me prekje, prek kutinë e vlerës për të hapur tastierën.

Nëse ModelCraft nuk mund ta lexojë atë që shkrove, shiriti i statusit thotë "Shkruaj një gjatësi si 3m, 10'6" ose 4m,3m." Nëse vegla nuk mund ta përdorë, thotë "Nuk funksionoi: …" me arsyen.

## Gjatësitë

| Shkruaj | Do të thotë |
|---|---|
| `3m` `320cm` `3200mm` | Metra, centimetra, milimetra |
| `10'` `10ft` `10 feet` | Këmbë |
| `6"` `6in` `6 inches` | Inç |
| `10'6"` `10' 6"` `10'-6 1/2"` | Këmbë dhe inç, me një thyesë |
| `6 1/2"` `6-1/2"` `3/4"` | Inç me një thyesë |
| `1.5ft` `.5m` | Dhjetore me një njësi |
| `120` | Një numër i thjeshtë, në njësinë e modelit |

**Një numër i thjeshtë përdor njësinë e modelit**, siç tregohet te zgjedhësi i njësisë në fund djathtas: inç në një model këmbë-inç (kështu `120` është 10 këmbë), milimetra në një model milimetrik, e kështu me radhë. Shkrimi i një njësie gjithmonë mbizotëron, pavarësisht njësisë së modelit. Thonjëzat e kthyera dhe shenjat e primit (’ ” ′ ″) lexohen gjithashtu si këmbë dhe inç.

:::warning
Përdor gjithmonë një **pikë** për dhjetoret: `2.5m`. Një presje ndan dy vlera, kështu që `2,5` do të thotë 2 dhe 5 (dy vlera), pavarësisht cilësimeve të gjuhës tënde.
:::

## Llogaritjet

Çdo gjatësi mund të jetë një llogaritje: shto `+`, zbrit `-`, shumëzo `*`, pjesëto `/`, dhe përdor kllapa. Nuk nevojitet makinë llogaritëse.

| Shkruaj | Do të thotë |
|---|---|
| `2.5/3` | Një e treta e 2.5 (në njësinë e modelit) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" në një model këmbë-inç |
| `3m-25cm` | 2.75 m |

Një numër i thjeshtë është në njësinë e modelit kur është gjatësi (`2.5/3` në një model metrik është 0.833 m), dhe një faktor i thjeshtë kur shumëzon ose pjesëton një gjatësi (`2*450mm`). Këndet dhe faktorët pranojnë gjithashtu llogaritje: `90/2` është 45°. Dy gjatësi të shumëzuara japin një sipërfaqe, jo një gjatësi, kështu që `2m*3m` refuzohet.

Nëse ModelCraft nuk mund ta llogarisë, shiriti i statusit thotë çfarë nuk shkon dhe ku, për shembull "Pjesëtim me zero (karakteri 4)." Një kllapë gjithashtu e nis kutinë e vlerës, kështu që mund të fillosh me `(`.

Këto mbajnë kuptimin e tyre: `/3`, `3x` dhe `*3` pas një kopjeje, `24s` për anët, dhe `/3` me një skaj të përzgjedhur (ai [pjesëton skajin](topic:divide)).

## Sipas veglës

| Vegla | Etiketa | Shkruaj |
|---|---|---|
| {{ui:Vijë}} | {{ui:Gjatësia}} | Një gjatësi (drejt treguesit), ose një pikë ose zhvendosje (më poshtë) |
| {{ui:Drejtkëndësh}} | {{ui:Përmasa}} | Dy gjatësi: `4m,3m`, `12',10'`. Pikëpresja funksionon gjithashtu: `4m;3m` |
| {{ui:Rreth}}, {{ui:Shumëkëndësh}} | {{ui:Anë}}, pastaj {{ui:Rreze}} | Para klikimit të parë, numri i anëve: `12s` ose `12` (3 deri 999). Pas tij, rrezja |
| {{ui:Shtyj/tërhiq}} | {{ui:Distanca}} | Një gjatësi. Një negative shkon në drejtim të kundërt |
| {{ui:Zhvendos}} | {{ui:Distanca}} | Një gjatësi (drejt treguesit), ose një pikë ose zhvendosje. Pas një kopjeje: `3x`, `*3`, `/3` |
| {{ui:Rrotullo}} | {{ui:Këndi}} | Shkallë: `90`, `-45`, `22.5` |
| {{ui:Shkallë}} | {{ui:Shkallë}} | Një faktor mbi 0: `2`, `0.5`, `1.25` |
| {{ui:Shirit mase}} | {{ui:Ofset}} ose {{ui:Gjatësia}} | Një gjatësi |
| {{ui:Ndaj}} | {{ui:Pjesët}} | Sa pjesë të barabarta: `5`, `5s` ose `/5` (2 deri 1000). Shih [Ndaj një skaj ose kurbë në pjesë të barabarta](topic:divide) |
| {{ui:Përmasë}} | {{ui:Ofset}}, pastaj {{ui:Gjatësia}} | Ku shkon vija e përmasës; menjëherë pas vendosjes, një gjatësi e re e ndryshon madhësinë e modelit |
| {{ui:Përzgjidh}} | {{ui:Vlera}} | Me një përmasë ose skaj të vetëm të përzgjedhur, një gjatësi e re e ndryshon madhësinë e modelit. Shih [Përmasa dhe ndryshimi i madhësisë](topic:dimensions) |

## Pikat dhe zhvendosjet

Për {{ui:Vijë}} dhe {{ui:Zhvendos}}, pas klikimit të parë:

- `[x,y,z]` shkon te ajo pikë e saktë në model (në boshtet e vetë grupit kur redakton brenda një grupi). Shembull: `[0,0,3m]` është 3 m drejt lart nga origjina.
- `<dx,dy,dz>` shkon aq larg nga pika e parë përgjatë të kuqes, jeshiles dhe blusë. Shembull: `<0,0,10'>` është 10 këmbë drejt lart.

Secila nga tre vlerat mund të ketë njësinë e vet: `<12',0,6">`.

## Kopjet pas zhvendosjes

Menjëherë pas një kopjeje me {{ui:Zhvendos}}:

| Shkruaj | Krijon |
|---|---|
| `3x` ose `*3` | 3 kopje me radhë, në të njëjtën distancë |
| `/3` | 3 kopje të shpërndara në mënyrë të barabartë nga origjinali te kopja e parë |

Deri në 500 kopje. Shih [Zhvendos, kopjo dhe bëj vargje](topic:move-copy#a-row-of-copies).

## Gjatësitë e shkruara kanë nevojë për drejtim

Një gjatësi e vetme e shkruar shkon në drejtimin ku tregon treguesi nga klikimi i parë. Nëse shkruan menjëherë pas klikimit, pa lëvizur fare, nuk ka ende drejtim dhe nuk ndodh asgjë. Lëviz pak treguesin drejt ku dëshiron të shkosh, pastaj shkruaj.

## Njësia e modelit

Ndrysho njësinë te zgjedhësi në fund djathtas: {{ui:ft dhe in}}, in, ft, yd, mi, mil, µm, mm, cm, m ose km, deri në atë masë sa janë të ndezura te {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Njësitë}} (njësia e vetë modelit është gjithmonë aty). Një gjatësi e shkruar me shenjën e çdo njësie lexohet në atë njësi. Shih [Njësitë, vlerat e shkruara dhe listat e njësive](common:unit-lists). Ajo ndryshon mënyrën e shfaqjes së gjatësive dhe leximin e numrave të thjeshtë; modeli mbetet i së njëjtës madhësi. Njësia ruhet në skedar.

Mënyra e shfaqjes së madhësive:

| Njësia | Gjatësitë | Sipërfaqet | Vëllimet |
|---|---|---|---|
| ft dhe in | `10' 6 1/2"` (deri 1/16") | sq ft | cu ft |
| in | `126 1/2"` | sq in | cu in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² nga 0.01 m², përndryshe mm² | m³ nga 0.01 m³, përndryshe mm³ |

Një model i ri nis në këmbë dhe inç kur gjuha e shfletuesit është vendosur në një rajon amerikan (dhe Liberi dhe Mianmar), dhe në milimetra kudo tjetër. Një njësi me yll te {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Njësitë}} përdoret në vend të saj, kur ModelCraft e ka. Ose ndrysho zgjedhësin pas {{ui:Të re}}.
