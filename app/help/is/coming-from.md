---
title: Að koma frá öðrum mótunarforritum
summary: Hvernig vanar aðferðir við push/pull-mótun færast yfir í ModelCraft, lykill fyrir lykil, og þau atriði sem koma fólki á óvart.
keywords: skipti, flytja, kunnuglegt, mismunur, push pull mótari, skp, flýtilyklar, vanar, bera saman, mælingakassi, útlínuyfirlit, upplýsingar um eind
from: 74ffd4ac
---

Ef þú hefur mótað í SketchUp mun ModelCraft líða kunnuglega: sama hugmynd um fleti og push/pull, sömu verkfæraslaufur, gildiskassi sem þú skrifar í án þess að smella, ályktun með rauðum, grænum og bláum ásum, hópar, einingar, útlínuyfirlit, Upplýsingar um eind og senur. Þessi síða listar hvað flyst beint yfir og, mikilvægara, hvað ekki.

## Venjur sem halda sér

| Þú ert vanur að | Í ModelCraft |
|---|---|
| Ýta á Space fyrir Velja, L fyrir Línu, R fyrir Rétthyrning, C fyrir Hring | Það sama: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Ýta á P Push/Pull, M Færa, Q Snúa, S Mælikvarði, E Strokleður, T Málband | Það sama: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Ýta á O Sveigja, H Hliðra, Z Aðdráttur, Shift+Z Aðdráttur á allt | Það sama: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Ýta á G til að búa til einingu | Það sama: {{key:G}}. {{key:Shift+G}} býr til hóp |
| Skrifa í mælingakassann án þess að smella á hann | Það sama, í gildiskassanum neðst. Ýttu á {{key:Enter}} |
| Skrifa `4m,3m` fyrir rétthyrning, `12s` fyrir hliðar | Það sama |
| Skrifa `3x` eða `/3` eftir afritun með Færa | Það sama; `*3` virkar líka |
| Skrifa `[x,y,z]` eða `<dx,dy,dz>` fyrir punkt eða frávik | Það sama |
| Skrifa tölu án eininga í arkitektamódeli í tommum og fá tommur | Það sama |
| Miðjudraga til að sveigja, Shift+miðjudraga til að hliðra, hjól til að aðdraga við bendilinn | Það sama |
| Tvísmella með Push/Pull til að endurtaka fjarlægðina | Það sama |
| Örvatakkar til að læsa rauðum, grænum, bláum og samsíða | Það sama: {{key:Right}} rautt, {{key:Left}} grænt, {{key:Up}} blátt, {{key:Down}} samsíða |
| Halda Shift til að læsa ályktun | Það sama |
| Ctrl (Option á Mac) til að afrita meðan þú færir | {{key:Ctrl}}, {{key:Mod}} eða {{key:Alt}}, á hvaða tölvu sem er |
| Shift til að skipta, Ctrl til að bæta við, Shift+Ctrl til að taka úr valinu | Sömu lyklar; á Mac notaðu {{key:Mod}} þar sem stendur Ctrl |
| Gluggi vinstri til hægri, krossval hægri til vinstri | Það sama |
| Málsetningartól til að merkja lengdir | {{key:D}}, og meira: skrifaðu nýja lengd í málsetningu og líkanið breytist í hana. Sjá [Málsetning og breyting á stærð](topic:dimensions) |
| Tvísmella á flöt fyrir flötinn og brúnir; þrísmella fyrir allt tengt | Það sama |
| Tvísmella á hóp til að breyta honum; Esc til að loka | Það sama |
| Teikna línu yfir flöt til að kljúfa hann; eyða brún milli samplana fleta til að sameina þá | Það sama |
| Ýta gluggarammanum í gegnum vegg til að skera hann | Það sama |
| Bakflatir í blágráu; Snúa flötum við | Sami litur; {{ui:Snúa fleti við}} í Upplýsingum um eind |
| Senur sem flipar yfir sýninni, Page Up og Page Down | Það sama, með {{ui:Spila}} í spjaldinu {{ui:Senur}} |
| Skuggar eftir dagsetningu, tíma, breiddar- og lengdargráðu, með norður á grænu | Það sama, í spjaldinu {{ui:Stíll}} |

## Atriði sem koma fólki á óvart

### Vistun er niðurhal

Það er enginn Vista sem skrifar yfir skrána sem þú opnaðir, enginn Vista sem-gluggi með nafni, engin sjálfvistun og engin öryggisafritsskrá. {{ui:Vista}} ({{key:Mod+S}}) hleður niður nýrri `.modelcraft`-skrá í hvert skipti, venjulega í niðurhalsmöppuna þína. Vistaðu oft, og endurnefndu eða færðu skrárnar sjálfur. Sjá [Opna, vista, flytja inn og út](topic:files).

### Það flytur inn .skp-skrár en vistar þær ekki

{{ui:Flytja inn}} les SketchUp-skrár með eigin lesara ModelCraft, í síðunni: hópar, einingar, litir, áferðir á flötum, merki og mjúkar brúnir berast með. Sjá [Skráarsnið í smáatriðum](topic:formats#skp-files). ModelCraft getur ekki vistað `.skp`: til að fara til baka skaltu flytja út Collada úr ModelCraft og flytja inn í SketchUp.

### Enginn hægrismellivalmynd

Hægridráttur hliðrar; hægrismellur gerir ekkert. Skipanir sem þú myndir finna í samhengisvalmynd eru í Upplýsingum um eind ({{ui:Snúa fleti við}}, {{ui:Breyta}}, {{ui:Sundurliða}}, {{ui:Gera einstaka}}, {{ui:Búa til einingu}}) og í hópnum {{ui:Skipuleggja}} á tækjastikunni.

### Einingar eru í stöðustikunni

Það er enginn valkostur fyrir Líkansupplýsingar eða sniðmát. Einingavalið er neðst hægra megin. Nýtt líkan byrjar í fetum og tommum í Bandaríkjunum og í millimetrum annars staðar, út frá tungumálsstillingu vafrans. Aukastafir taka alltaf punkt: `2.5m`, aldrei `2,5m`, því kommaið skilur alltaf að gildi.

### Málning hefur sín eigin efni

{{ui:Mála}} ({{key:B}}) málar einlita liti og efnin í hlutanum {{ui:Efni}}: múrsteinn, klæðning, þakefni, viður, steinn og fleira, teiknað af ModelCraft. Þú getur ekki enn hlaðið eigin mynd inn sem efni; áferðir sem berast með innfluttum skrám eru geymdar. Sjá [Mála með litum og efnum](topic:paint).

### Mælikvarði er jafn, án handfanga

Mælikvarði sýnir ekki kassa með handföngum. Smelltu á punktinn sem stendur kyrr, viðmiðunarpunkt, og síðan á nýju stærðina eða skrifaðu stuðul. Hann skalar alltaf jafnt í allar áttir. Til að teygja í eina átt skaltu ýta/toga eða færa flöt, eða skrifa aftur breidd, dýpt eða hæð hóps í Upplýsingum um eind, eða [breyta stærð með málsetningu](topic:dimensions).

### Snúningur velur plan sitt af því hvar þú smellir

Það er enginn gráðubogi sem festist við fleti þegar þú sveimar með örvatökkum til að velja plan. Smelltu á miðju á fleti til að snúa í plani þess flatar, eða á jörðina til að snúa um lóðrétta ásinn. Örvatakkarnir sveigja sýnina áður en fyrsti smellurinn kemur.

### Ályktun frá punktum sem þú ferð yfir

ModelCraft smellir á stefnur ása frá **upphafspunkti þínum**, og á punkta, brúnir og fleti undir bendlinum. Það rekur ekki stefnu frá punkti sem þú aðeins sveimaðir yfir (punktalínan „frá punkti“). Til að stilla upp við langt horn skaltu læsa ásnum með örvatakka og sveima yfir hornið: læsti punkturinn rennur til að passa við það. Eða settu [leiðarlínu](topic:guides-measure).

### Samsíða notar brúnina sem þú fórst yfir áður en þú byrjaðir

Samsíða- og hornrétt-ályktun notar síðustu brúnina sem bendillinn fór yfir **áður en fyrsti smellurinn kemur**, ekki brúnir sem þú sveimar yfir meðan þú teiknar. Sjá [Ályktun og smellun](topic:inference#parallel-and-perpendicular).

### Afrit af hópi eru tengd

Að afrita hóp með {{ui:Færa}} býr til aðra staðsetningu sama hóps, svo breyting á einum breytir báðum, eins og með einingar. SketchUp gerir hópa óháða. Sjá [Bilanaleit](topic:troubleshooting#editing-one-group-changed-another).

### Bil hliðrar ekki

{{key:Space}} velur {{ui:Velja}}, eins og í SketchUp. Í sumum öðrum vefforritum hliðrar það að halda Space niðri; hér gerir það það ekki. Hægridráttur hliðrar í staðinn.

### Tveggja fingra skrun aðdregur

Á snertiborði skaltu stilla {{ui:Stillingar}} › {{ui:ModelCraft}} › Skrun á snertiborð: tveir fingur sveigja, {{key:Shift}} og tveir fingur hliðra, klípa aðdregur. Sjá [Sveigja, hliðra og aðdráttur](topic:orbit-pan-zoom#on-a-trackpad).

Ef hendurnar þekkja lyklana í Blender frekar en SketchUp skaltu velja valmyndastílinn {{ui:Mótunarforrit}}: {{key:G}}, {{key:R}} og {{key:S}} verka á valið í einu, {{key:E}} dregur út (push/pull), {{key:Shift+D}} tvíritar, og valmyndastika efst (Skrá, Breyta, Sýn, Velja, Bæta við, Hlutur, Möskvi) kemur í stað tækjastikunnar. Ef þú kemur frá SketchUp gefur stíllinn {{ui:Ýta-toga}} valmyndastiku líka, sína eigin, yfir sömu verkfæraslaufunum. Sjá [Valmyndir, lyklar og mús](topic:menus-keys-and-mouse).

### Föst efni sem eru pressuð inn í hvort annað skerast ekki

Push/pull sker í gegnum flötinn fyrir aftan í sama hlut, en tveir aðskildir solíðar sem eru pressaðir hvor inn í annan skerast ekki. Það er engin Intersect Faces-aðgerð og engin Solid Tools.

### Það sem vantar

Frjáls teikning, Snyrting, Skipting og Ytri skel, þín eigin myndefni sem efni, viðbætur og útlitsverkfæri fyrir blöð eru ekki í þessari útgáfu. [Ekki smíðað enn](topic:not-built-yet) listar hvað á að gera í staðinn.

## Flýtilyklar sem vafrinn heldur

ModelCraft keyrir í vafra, svo nokkrir flýtilyklar tilheyra vafranum, ekki forritinu. {{key:Mod+N}} opnar nýjan vafragluggann (notaðu {{ui:Nýtt}}), og {{key:Mod+W}} lokar flipanum. Ef þú hefur óvistaðar breytingar spyr vafrinn áður en hann lokar. Sjá [Lyklar, mýs og snertiborð](common:keys#shortcuts-the-browser-keeps).
