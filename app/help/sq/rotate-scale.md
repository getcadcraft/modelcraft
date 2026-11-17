---
title: Rrotullo dhe shkallëzo
summary: Kthe gjërat rreth një pike duke klikuar ose duke shkruar gradë, dhe ndrysho madhësinë e tyre në mënyrë të njëtrajtshme me një faktor.
keywords: shkallë, kapëse të shkallës, shtrirje, jo uniforme, për bosht, kthim, përmbys, kopje e pasqyruar, përmbys përgjatë, rrotullo, kthe, kënd, gradë, transportues, shkallë, ndrysho madhësinë, zmadho, zvogëlo, faktor, shkallë uniforme
from: 45cdcb49
---

## Rrotullo

{{ui:Rrotullo}} ({{key:Q}}) kthen përzgjedhjen rreth një pike qendrore. Merr tre klikime: qendrën, një drejtim fillestar dhe drejtimin e fundit.

1. Zgjidh atë që do të kthesh. Nëse asgjë nuk është zgjedhur, Rrotullo merr gjënë që klikon së pari.
2. Shtyp {{key:Q}}. Një unazë ndjek treguesin, duke treguar planin në të cilin do të kthesh.
3. Kliko qendrën e rrotullimit.
   - Mbi tokë ose në hapësirë bosh, unaza shtrihet e sheshtë (blu): kthesa është rreth një boshti vertikal, si kur kthen një ndërtesë në vendin e saj.
   - Mbi një sipërfaqe, unaza shtrihet në planin e asaj sipërfaqeje: kthesa është rreth drejtimit të vetë sipërfaqes. Kliko mbi një mur për të kthyer diçka rreth një boshti horizontal.
4. Kliko një pikë që cakton ku fillon këndi, për shembull përgjatë një skaji të gjërës që po kthen.
5. Lëviz treguesin rreth qendrës. Këndi shfaqet në majë dhe në kutinë e vlerës ({{ui:Këndi}}). Ngjitet në hapa prej 15° kur je afër një prej tyre.
6. Kliko për të përfunduar, ose shkruaj këndin në gradë dhe shtyp {{key:Enter}}: `90`, `45`, `-30`.

   Këndet pozitive kthehen në drejtim kundër akrepave të orës, parë nga ana nga shikon unaza.

Shtyp {{key:Ctrl}} (ose {{key:Alt}}) gjatë rrotullimit për të kthyer një **kopje** dhe për ta lënë origjinalin aty ku është, si me Zhvendos; maja thotë nëse kopjimi është i ndezur, dhe shtypja e tastit përsëri e fik. Shkruaj `3x` menjëherë pas një kopjeje të rrotulluar për më shumë kopje rreth të njëjtës qendër.

Ngjashëm me Zhvendos, rrotullimi i një pjese të gjeometrisë së lidhur e tërheq edhe sipërfaqet e bashkangjitura me të. Grupo gjërat më parë për t'i kthyer të tëra.

:::note
Maja thotë që tastet me shigjeta zgjedhin boshtin e rrotullimit, por në këtë version ato e rrotullojnë pamjen para klikimit të parë. Për të zgjedhur boshtin, kliko qendrën mbi një sipërfaqe që kah në drejtimin që dëshiron. Shih [Nuk është ndërtuar ende](topic:not-built-yet).
:::

## Shkallë

{{ui:Shkallë}} ({{key:S}}) ndryshon madhësinë e përzgjedhjes. Zgjidh së pari atë që do të ndryshosh, pastaj shtyp {{key:S}}: katrorë të vegjël (kapëse) shfaqen në cepat, skajet dhe mesin e anëve të kutisë së saj.

### Shtrij ose shkallëzo me kapëset

- Një kapëse **cepi** shkallëzon njëtrajtësisht në çdo drejtim, rreth cepit të kundërt.
- Kapësja në mesin e një **ane** shtrihet vetëm përgjatë asaj drejtimi, rreth anës së kundërt: e bën një kuti më të gjatë pa e bërë më të lartë.
- Kapësja në mesin e një **skaji të kutisë** shtrihet në dy drejtimet që kalojnë nëpër të.
- Mbaj {{key:Ctrl}} kur klikon një kapëse për të shkallëzuar rreth mesit të kutisë.

Kliko një kapëse, lëviz treguesin dhe kliko përsëri; ose kliko kapësen dhe shkruaj një faktor (`2` dyfishon, `0.5` gjysmëzon) dhe shtyp {{key:Enter}}. Për t'i dhënë çdo drejtimi faktorin e vet, shkruaj tre, për të kuqen, jeshilen dhe blunë: `2,1,0.5`. Brenda një grupi të hapur, drejtimet janë ato të vetë grupit.

### Shkallëzo rreth çdo pike

Kliko kudo tjetër përveç një kapëseje për të shkallëzuar njëtrajtësisht rreth një pike tënde. Merr tre klikime:

1. Zgjidh atë që do të ndryshosh. Nëse asgjë nuk është zgjedhur, Shkallë merr gjënë që klikon së pari.
2. Shtyp {{key:S}}.
3. Kliko pikën që mbetet në vend (jo mbi një kapëse), për shembull një cep i poshtëm.
4. Kliko një pikë referimi. Distanca e saj nga pika e parë llogaritet si 1×.
5. Lëviz treguesin drejt ose larg pikës së parë. Faktori shfaqet në majë dhe në kutinë e vlerës ({{ui:Shkallë}}).
6. Kliko për të përfunduar, ose shkruaj një faktor dhe shtyp {{key:Enter}}: `2` dyfishon madhësinë, `0.5` e gjysmëzon.

### Shkallë me madhësi të saktë

Për ta bërë diçka një gjatësi të saktë, llogarit faktorin: gjatësia e re pjesëtuar me gjatësinë aktuale. Në mënyrën me tre klikime, kutia e vlerës bën aritmetikë, kështu që shkruaj `4.2/3.6` për ta bërë një mur 3.6 m të gjatë 4.2 m. Kutia e vlerës së një kapëse pranon vetëm numra të thjeshtë: llogarit faktorin më parë (4.2 pjesëtuar me 3.6 është rreth 1.1667). Zgjidh skajin më parë për të lexuar gjatësinë e tij aktuale te {{ui:Informacioni i entitetit}}.

### Rregullo një import që hyri me madhësi të gabuar

Skedarët OBJ nuk kanë njësi, kështu që një model i vizatuar në milimetra hyn 1000 herë më i madh. Zgjidh grupin e importuar, shtyp {{key:S}}, kliko një kapëse cepi, dhe shkruaj `0.001` dhe shtyp {{key:Enter}}. Për një model të vizatuar në inç, shkruaj `0.0254`.

## Gjëra që duhet të dish

- Shkallëzimi rreth një pike me tre klikime është njëtrajtës. Për të shtrirë vetëm në një drejtim, përdor një kapëse ane ose skaji (shih më sipër).
- Shkallëzimi i një grupi ose komponenti ndryshon kopjen që shkallëzove; kopjet e tjera të një komponenti mbajnë madhësinë e tyre.
- Shtyp {{key:Esc}} para klikimit të fundit për të anuluar.

## Përmbys

{{ui:Redakto}} › {{ui:Më shumë}} › {{ui:Kthe përgjatë të kuqes}}, {{ui:Kthe përgjatë të gjelbrit}} ose {{ui:Kthe përgjatë blusë}} pasqyron përzgjedhjen në vend, nëpërmjet mesit të kutisë së saj: një shkallë me dorë të majtë bëhet një me dorë të djathtë. Sipërfaqet mbeten të kthyera nga jashtë, dhe një grup ose komponent pasqyrohet si tërësi (brendësia e tij nuk rishkruhet).

{{ui:Kopje e kthyer përgjatë të kuqes}} (dhe të gjelbrit, blusë) e lë origjinalin aty ku është dhe vendos një kopje të pasqyruar pranë tij, përtej anës tjetër të kutisë së përzgjedhjes: dera tjetër e një çifti, krahu tjetër i një ndërtese. Gjeometria e lirë që prek atje bashkohet me origjinalin, sikurse gjithmonë bën gjeometria që prek; bëje origjinalin grup më parë për t'i mbajtur të ndarë.

Brenda një grupi të hapur, të kuqja, jeshilja dhe blua janë boshtet e vetë grupit.
