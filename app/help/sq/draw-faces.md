---
title: Vizato faqe me vija, drejtkëndësha, rrethe dhe harqe
summary: Krijo faqe të sheshta mbi tokë ose mbi faqe të tjera, ndaji me vija, dhe vizato rrethe e shumëkëndësha me numrin e anëve që dëshiron.
keywords: vizato, vijë, drejtkëndësh, rreth, shumëkëndësh, ofset, zhvendosje brenda, kornizë, kufi, hark, kurbë, spline, e lëmuar, kabllo, rrugë, fryrje, rreze, kurbë, faqe, plan dyshemeje, gjurmë, ndaj, anë, segmente, përvijim, laps
from: b6d7b7dd
---

Çdo gjë në ModelCraft fillon si një **faqe** e sheshtë: një sipërfaqe e mbyllur nga skajet. Mund të vizatosh drejtpërdrejt një faqe me {{ui:Drejtkëndësh}}, {{ui:Rreth}} ose {{ui:Shumëkëndësh}}, ose ta përvijosh një skaj çdo herë me {{ui:Vijë}}. Faqet janë ato që [Shtyp/tërhiq](topic:push-pull) i kthen në trupa të ngurtë.

## Vizato një drejtkëndësh

1. Shtyp {{key:R}}.
2. Kliko kulmin e parë: mbi tokë, ose mbi çdo faqe të modelit.
3. Lëviz treguesin. Drejtkëndëshi qëndron mbi tokë (ose mbi faqen nga ku nise), dhe kutia e vlerës ({{ui:Përmasa}}) tregon gjerësinë dhe thellësinë e tij. Këshilla thotë "Katror" kur anët janë të barabarta.

   Për të vizatuar mbi një plan tjetër, drejto treguesin drejt tij: një faqe që kalon nëpër kulmin e parë e vendos drejtkëndëshin mbi atë faqe, dhe kapja te një pikë jashtë planit (një pikë fundore, një skaj, boshti blu) e ngre drejtkëndëshin në këmbë përmes të dy kulmeve. Kapu përsëri te një pikë në planin e parë dhe ai shtrihet përsëri. Për të mbajtur një plan, shtyp një tast shigjete: {{key:Up}} e mban drejtkëndëshin horizontal (planin blu), {{key:Right}} në planin e kuq, {{key:Left}} në planin e gjelbër. Shtyp të njëjtin tast përsëri për ta zhbllokuar.
4. Kliko kulmin e kundërt, ose shkruaj dy përmasat e ndara me presje dhe shtyp {{key:Enter}}: `4m,3m`, `4000,3000` në një model në milimetra, ose `12',10'6"` në këmbë e inç.

   Shfaqet një faqe me katër skaje rreth saj.

Përmasat e shkruara shkojnë në drejtimin ku po drejtoje: nëse treguesi është në të majtë të kulmit të parë kur shkruan, drejtkëndëshi rritet në të majtë.

:::warning
Presja ndan dy përmasat, kështu që nuk mund të jetë presje dhjetore. Shkruaj `2.5m,3m`, kurrë `2,5m`.
:::

## Vizato një rreth ose një shumëkëndësh

1. Shtyp {{key:C}} për rreth ose {{key:N}} për shumëkëndësh.
2. Për të ndryshuar numrin e anëve, shkruaje përpara se të klikosh: `12s` (ose thjesht `12`) dhe {{key:Enter}}. Një rreth fillon me 24 anë dhe një shumëkëndësh me 6. Këshilla tregon numrin aktual, dhe ModelCraft e mban për rrethin e radhës derisa ta ndryshosh ose ta ndërrosh veglën.
3. Kliko qendrën, mbi tokë ose mbi një faqe. Për ta vendosur në qendër mbi një faqe, drejto treguesin te mesi i faqes ("Qendra e faqes") ose te mesi i një prej skajeve të saj ("Mesi"), me treguesin pak brenda asaj faqeje: rrethi vizatohet mbi atë faqe, edhe në skajin e ngushtë të një kutie të gjatë.
4. Kliko për të caktuar rrezen, ose shkruaje ({{ui:Rreze}} te kutia e vlerës) dhe shtyp {{key:Enter}}.

Një rreth është një shumëkëndësh me shumë anë. Kur e ngre një rreth me Shtyp/tërhiq, anët e tij zbuten, që cilindri të lexohet si një sipërfaqe e vetme e lëmuar.

## Vizato një hark

1. Shtyp {{key:A}} ({{ui:Hark}}).
2. Kliko ku fillon harku, pastaj ku mbaron (ose shkruaj gjatësinë midis tyre).
3. Lëviz treguesin për ta fryrë harkun jashtë, dhe kliko. Këshilla thotë "Gjysmë rrethi" kur fryrja është gjysma e distancës midis skajeve. Ose shkruaj sa larg qëndron mesi: `2` dhe {{key:Enter}}.

Për të vizatuar një hark rreth një pike, përdor {{ui:Hark me qendër}}: kliko qendrën, pastaj ku fillon harku (ose shkruaj rrezen), pastaj ku mbaron (ose shkruaj këndin në gradë, si `90`). Kapet në hapa prej 15°.

Një hark i nisur mbi një faqe vizatohet mbi atë faqe; përndryshe shtrihet mbi tokë, ose qëndron vertikalisht kur dy fundet e tij janë në lartësi të ndryshme. Një hark ka 12 segmente; shkruaj `24s` gjatë vizatimit për më shumë. Harqet mbyllin faqe njësoj si vijat: një hark përgjatë kulmit të një drejtkëndëshi e ndan atë.

## Vizato një kurbë të lëmuar

{{ui:Kurbë}} vizaton një vijë të lëmuar që kalon nëpër çdo pikë që klikon: një kabllo, rruga e një dore, një skaj kopshti. Mund të largohet nga toka: pikat kapen te kulmet, skajet dhe faqet kudo, dhe tastet e shigjetave e kyçin kuqen, gjelbrin ose blunë si me {{ui:Vijë}}.

1. Kliko {{ui:Kurbë}} te grupi {{ui:Vizato}}.
2. Kliko pikat nëpër të cilat kalon kurba. Shkruaj `<0,0,1>` dhe {{key:Enter}} për një pikë 1 mbi të fundit, `[x,y,z]` për një vend të saktë, ose një gjatësi për një pikë kaq larg drejt treguesit.
3. Shtyp {{key:Enter}} ose kliko dy herë për të përfunduar. Kliko pikën e parë përsëri për ta mbyllur kurbën. {{key:Backspace}} e heq pikën e fundit.

Një kurbë përzgjidhet si një copë e vetme. Për ta ndryshuar, përzgjidhe dhe kliko {{ui:Redakto pikat}} te {{ui:Informacioni i entitetit}}: pikat e saj shfaqen si katrorë. Kliko një, pastaj kliko ku shkon (ose shkruaj `<dx,dy,dz>`). {{key:Esc}} e kthen pikën dhe mbyll redaktimin. Një kurbë e sheshtë e mbyllur bëhet një faqe; një kurbë që përvijon një faqe nuk mund të redaktohet më.

## Ofset: një kufi brenda ose jashtë një faqeje

{{ui:Ofset}} kopjon përvijimin e një faqeje në një largësi të caktuar brenda saj (ose jashtë), për një kornizë, një kufi, një pragun ose qelqin e një ekrani.

1. Shtyp {{key:F}} dhe kliko faqen, ose përzgjidh faqen së pari dhe pastaj shtyp {{key:F}}.
2. Lëviz treguesin brenda faqes për një përvijim të brendshëm, ose jashtë saj për një të jashtëm. Përvijimi i ri ndjek, dhe këshilla tregon sa larg.
3. Kliko, ose shkruaj largësinë dhe shtyp {{key:Enter}}.

Faqja ndahet në dy: faqja e brendshme dhe një kornizë rreth saj (ose një unazë e re jashtë). Shtyp/tërhiq secilën menjëherë: për një ekran, vizato kutinë, shtyje në trashësinë e saj, ofseto faqen e përparme 30 mm brenda dhe shtyje pak faqen e brendshme për qelqin. Vrimat në faqe ofsetohen gjithashtu, dhe një hark ose rreth mbetet një kurbë e vetme (më e vogël ose më e madhe).

- **Klikim dy herë** mbi një faqe me {{ui:Ofset}} e ofseton përsëri me largësinë e fundit.
- **Skajet:** përzgjidh një zinxhir skajesh të lidhura në një plan (për shembull dy vijat e një L), shtyp {{key:F}}, lëviz në anën që dëshiron dhe shkruaj largësinë: vizatohet një kopje paralele, me qoshe të këndëzuara.
- Kur largësia është më shumë se sa lejon faqja, ModelCraft e thotë këtë dhe nuk vizaton asgjë.

## Harqet, rrethet dhe shumëkëndëshat janë kurba

Kliko çdo segment të një harku, rrethi ose shumëkëndëshi dhe e tërë kurba përzgjidhet. {{ui:Informacioni i entitetit}} tregon atëherë rrezen, segmentet, këndin (harqet) dhe gjatësinë e saj. Shkruaj një rreze të re aty për ta ndryshuar madhësinë rreth qendrës së saj; faqet e vizatuara në planin e saj ndjekin. Pasi faqja e një kurbe është shtyrë ose tërhequr, rrezja e saj mbetet siç është.

## Vizato me vija

1. Shtyp {{key:L}}.
2. Kliko ku fillon vija.
3. Kliko ku mbaron, ose shkruaj një gjatësi dhe shtyp {{key:Enter}}. Gjatësia e shkruar shkon në drejtimin që tregon treguesi.
4. Vazhdo të klikosh. Çdo klikim e nis vijën e radhës nga fundi i së fundit.
5. Mbyll përvijimin duke klikuar përsëri pikën e parë. Kur vijat mbyllin një unazë të sheshtë, ajo mbushet me një faqe dhe vegla ndalon lidhjen e vijave. Shtyp {{key:Esc}} për të ndalur në çdo kohë.

Vijat ndjekin drejtimet e kuqe, të gjelbër dhe blu kur i afrohesh; vija merr atë ngjyrë dhe këshilla thotë "Te boshti i kuq". Shih [Inferenca dhe kapja](topic:inference) për të kyçur një drejtim dhe për t'u kapur pas pikave.

### Ku shkon një vijë kur nuk prek asgjë

- Një vijë që nis mbi një faqe mbetet në planin e asaj faqeje.
- Një vijë që nis mbi tokë, ose në hapësirë bosh, mbetet në të njëjtin nivel me pikën e nisjes. Nëse e shikon modelin nga anësh, shkon në planin vertikal përballë teje.
- Për të vizatuar një vijë deri në një vend të saktë, shkruaj një pikë: `[x,y,z]` për një pikë në model, ose `<dx,dy,dz>` për një shmangie nga pika e nisjes. Shih [Shkruaj përmasa të sakta](topic:value-box).

## Ndaj një faqe

Vizato një vijë mbi një faqe, nga një skaj te një tjetër (ose nga skaji te skaji përmes vijave të tjera). Faqja ndahet në dy faqe. Secila mban anën dhe ngjyrën e saj. E njëjta gjë vlen me një drejtkëndësh ose rreth të vizatuar mbi një faqe: forma bëhet faqja e vetë brenda asaj më të madhes, e cila tani ka një vrimë.

Kështu planifikon dhoma mbi një soletë dyshemeje, një dritare mbi një mur, ose një shkallë mbi një shkallë të ngritur: vizato përvijimin mbi faqe, pastaj shtyp ose tërhiq faqen e re.

## Faqe që shikojnë në drejtimin e gabuar

Çdo faqe ka një përpara dhe një prapa. Prapa shfaqet gri-blu. Faqet e vizatuara mbi tokë shikojnë lart; faqet e vizatuara mbi një faqe tjetër shikojnë në të njëjtin drejtim me të.

Nëse një faqe tregon prapavijën aty ku pret përparavijën, përzgjidhe dhe kliko {{ui:Kthe faqen}} te {{ui:Informacioni i entitetit}}.

## Çfarë sheh ndërsa vizaton

- Një shenjë me ngjyrë aty ku treguesi kapet, dhe emri i saj në këshillën poshtë majtas.
- Një pamje paraprake e vijës ose formës.
- Madhësia e gjallë në kutinë e vlerës. Mund ta shkruash mbi të në çdo kohë.

## Nëse forma nuk është aty ku pret

- Në ekran me prekje, shih [Zgjidhja e problemeve](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Nëse një vijë u kap te diçka shumë larg prapa, rrotullo pak pamjen: pikat e fshehura pas një faqeje nuk kapen kurrë, por pikat në skajin e saj kapen.
- Shtyp {{key:Mod+Z}} për të zhbërë formën e fundit; një zhbërje heq një vijë ose një formë.
