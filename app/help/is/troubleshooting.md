---
title: Úrræðaleit
summary: Einkenni, orsakir og lausnir, frá auðri þrívíddarmynd til innflutnings í röngum stærðum, með skilaboðunum sem ModelCraft sýnir.
keywords: vandamál, bilun, villa, virkar ekki, autt, webgl, skjákort, hægt, skilaboð, innflutningur mistókst, röng stærð, get ekki valið, snertiskjár, lyklar virka ekki, tapað vinna
from: 6e7394be
---

## Þrívíddarmyndin er auð

**Einkenni:** miðja skjásins er tóm, eða sýnir aðeins bakgrunnslitinn, og það að smella á verkfæri gerir ekkert.

**Orsök:** ModelCraft teiknar með WebGL 2, þrívíddargrafík vafrans. Hún vantar þegar vafrinn er gamall, þegar vélbúnaðarhröðun er slökkt, eða þegar skjárekillinn er læstur.

**Lausn:**

:::chromium
1. Opnaðu stillingar vafrans og leitaðu að "graphics acceleration".
2. Kveiktu á "Use graphics acceleration when available" og endurræstu vafrann.
3. Ef það er þegar kveikt, skrifaðu `chrome://gpu` í veffangastikuna (`edge://gpu` í Edge) og leitaðu að "WebGL2" í listanum. Ef þar stendur „disabled“, uppfærðu skjárekilinn.
:::

:::firefox
1. Opnaðu **Settings**, síðan **General**, og skrunaðu að "Performance".
2. Afhakaðu "Use recommended performance settings", hakaðu síðan við "Use hardware acceleration when available". Endurræstu Firefox.
3. Ef það bilar enn, skrifaðu `about:support` í veffangastikuna og skoðaðu kaflann "Graphics" fyrir WebGL 2.
:::

:::safari
Uppfærðu macOS og Safari. Nýlegar útgáfur af Safari hafa alltaf WebGL 2 kveikt. Ef þú breyttir tilraunaeiginleikum undir **Safari**, síðan **Settings**, síðan **Advanced** (eða **Feature Flags**), endurstilltu þá.
:::

Á vinnutölvu, fjarskjáborði eða sýndarvél getur þrívíddargrafík verið læst með stefnu. Prófaðu aðra tölvu. Sjá [Vafrar og tölvur](common:browsers).

## Lyklar gera ekkert, eða skrifa í reit

**Orsök:** lyklaborðsfókusinn er í reit á spjaldi: listinn {{ui:Fletir}} í {{ui:Stíll}}, sólarstilling, reiturinn {{ui:Heiti}} í {{ui:Upplýsingar um eind}}, eða valmynd mælieininga. Stafir og örvatakkar fara þá í þann reit.

**Lausn:** smelltu í þrívíddarsýnina og ýttu síðan aftur á takkann. Lyklar gera líka ekkert meðan gluggi er opinn.

## Að slá inn tölu gerir ekkert

- **Engin stefna enn.** Lengd sem þú slærð inn fer þá leið sem bendillinn vísar frá fyrsta smelli. Færðu bendilinn aðeins í þá átt sem þú vilt, og sláðu síðan inn.
- **Rangt augnablik.** Flest verkfæri taka slegið gildi aðeins eftir fyrsta smell: smelltu fyrst á fyrsta hornið, flötinn eða punktinn sem á að færa frá. {{ui:Hringur}} og {{ui:Marghyrningur}} taka fjölda hliða áður en fyrsti smellur er gerður.
- **„Sláðu inn lengd, til dæmis 3m, 10'6" eða 4m,3m.“** ModelCraft gat ekki lesið það. Athugaðu hvort komma sé í tugabroti (`2,5`): notaðu punkt.

## Mynd byrjar á röngum stað á snertiskjá

**Einkenni:** með fingri er fyrsti rétthyrningurinn réttur, en næsti rétthyrningur, hringur eða lína byrjar þar sem fyrri snerting endaði í stað þess sem þú snertir.

**Orsök:** galli í þessari útgáfu: á snertiskjá man verkfærið síðasta smellipunkt úr fyrri ábendingu.

**Lausn:** pikkaðu aftur á hnapp verkfærisins á tækjastikunni áður en hvert nýtt form er teiknað. Það ræsir verkfærið upp á nýtt, og fyrsti punkturinn lendir þar sem þú snertir.

## Breyting á einum hópi breytti öðrum

**Einkenni:** þú afritaðir hóp með {{ui:Færa}} og {{key:Ctrl}}, opnaðir annað afritið og breyttir því, og hitt breyttist líka. {{ui:Yfirlit}} sýnir bæði með sama heiti.

**Orsök:** í þessari útgáfu býr það til annað tilvik sama hóps þegar hóp er afritaður, eins og með einingu. Hnappurinn {{ui:Gera einstaka}} er aðeins í boði fyrir einingar.

**Lausn:** veldu afritið sem þú vilt breyta, smelltu á {{ui:Búa til einingu}} í {{ui:Upplýsingar um eind}}, og síðan á {{ui:Gera einstaka}}. Þetta afrit hefur þá sitt eigið innihald. Eða {{ui:Sundurliða}} það.

## Ýta/toga gerir ekki það sem ég bjóst við

- **„Ýta/toga virkar á flöt. Smelltu á flöt.“** Þú smelltir á brún eða tómt rými. Færðu bendilinn þar til flöturinn auðkennist, smelltu síðan.
- **Flöturinn er inni í hópi.** Tvísmelltu á hópinn til að opna hann fyrst.
- **Gluggi skar ekki í gegnum vegginn.** Rétthyrningurinn verður að vera teiknaður á fleti veggsins, ekki fyrir framan hann, og veggurinn verður að hafa bakflöt. Sjá [Skera op í gegnum vegg](topic:openings#if-it-did-not-cut-through).
- **Tveir kassar skarast án þess að renna saman.** Heilir hlutir sem ýtt er hver inn í annan skera ekki hvor annan og tengjast ekki í þessari útgáfu.

## Lína eða mynd myndaði ekki flöt

Flötur fyllist aðeins þegar brúnirnar loka flatri lykkju. Athugaðu hvort síðasti punkturinn smellti á þann fyrsta („Endapunktur“), og að allar brúnir liggi í einu plani. Lykkja sem er lítillega út úr plani helst sem línur. Teiknaðu eina af brúnum hennar aftur, og smelltu á hornin.

## Ég get ekki valið eða eytt fleti

- Með {{ui:Velja}} tekur smellur nálægt brún brúnina. Smelltu nær miðju flatarins.
- {{ui:Strokleður}} velur ekki fleti. Veldu flötinn og ýttu á {{key:Delete}}, eða eyddu einni af brúnum hans.
- Ef hann tilheyrir hópi eða einingu velur smellurinn allt sem heild. Tvísmelltu til að opna.

## „Veldu eitthvað til að færa fyrst, eða smelltu á það.“

{{ui:Færa}}, {{ui:Snúa}} og {{ui:Mælikvarði}} þurfa eitthvað til að vinna á: veldu það fyrst, eða byrjaðu verkfærið með því að smella á hlutinn sjálfan (ekki á tómt rými eða leiðbeiningu).

## „Veldu rúmfræði fyrst (dragðu glugga, eða þrísmelltu til að velja allt sem tengist).“

{{key:G}} og {{key:Shift+G}} þurfa val. Ekki er hægt að hópa leiðbeiningar.

## Örvatakkarnir snúa sýninni í stað þess að læsa

Læsingar virka aðeins eftir fyrsta smell í teikni- eða breytingaverkfæri. {{ui:Ýta/toga}} hefur engar læsingar, og í {{ui:Snúa}} breyta þær ekki snúningnum. Annars snúa örvatakkarnir sýninni.

## Esc á öllum skjá

Á öllum skjá getur vafrinn notað fyrsta {{key:Esc}} til að hætta á öllum skjá. Ýttu aftur á {{key:Esc}} til að hætta við verkfærið.

## Enginn miðjutakki

Ýttu á {{key:O}} fyrir {{ui:Snúast}} og dragðu, eða notaðu örvatakkana. Sjá [Snúast, hliðra og aðdráttur](topic:orbit-pan-zoom#without-a-middle-button).

## Innflutningur

| Skilaboð | Hvað á að gera |
|---|---|
| „ModelCraft flytur inn SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG og DXF. … er ekkert af þessu.“ | Fluttu út líkanið úr hinu forritinu á einu af þessum sniðum |
| „Þessi skrá er yfir 300 MB.“ | Einfaldaðu eða skiptu líkaninu í hinu forritinu |
| „…of stórt til að móta hér (yfir 2 milljónir hornpunkta).“ | Það sama |
| „Þessi .gltf-skrá þarf „…“…“ | Settu `.gltf`-skrána ásamt `.bin`- og áferðarskrám hennar, eða opnaðu `.glb`-útgáfuna |
| „Þessi glTF-skrá þarf viðbótina …, sem ModelCraft les ekki enn.“ | Fluttu út aftur úr hinu forritinu án þeirrar viðbótar (KTX2-áferðir, til dæmis) |
| OBJ kemur inn án lita eða áferða | Settu `.obj`-skrána ásamt `.mtl`-skránni og myndum hennar |
| „Þessi Alembic-skrá notar gömlu HDF5-uppsetninguna…“ | Vistaðu hana aftur úr hinu forritinu sem Ogawa Alembic-skrá |
| FBX kemur inn án áferða | Settu `.fbx`-skrána ásamt áferðamyndunum, eða felldu miðlana inn við útflutning |
| „Þessi FBX-skrá er útgáfa …, sem ModelCraft les ekki“ | Fluttu út aftur sem FBX 2011 eða nýrri |
| STL eða PLY kemur inn 1000 sinnum of stórt eða lítið | STL er lesið sem millimetrar og PLY sem metrar: breyttu mælikvarðanum (sjá [Snúa og mælikvarði](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| „Þetta er ekki Collada (.dae)-skrá…“ eða „…ekki vel mynduð XML…“ | Skráin er skemmd eða ekki Collada. Fluttu hana út aftur |
| „Þessi Collada-skrá hefur enga rúmfræði sem ModelCraft getur flutt inn.“ | Hún hefur aðeins myndavélar, ljós eða tilvísanir í aðrar skrár |
| „Þetta er tvíundar-DXF. Vistaðu hana sem ASCII-DXF og reyndu aftur.“ | Vistaðu hana aftur úr CAD-forritinu sem ASCII |
| „Þetta er ekki DWG-teikning…“ | Skráin er ekki DWG, eða hún er skemmd |
| „Ekki var hægt að lesa þessa teikningu (…). Hún gæti verið skemmd, eða vistuð í DWG-útgáfu sem lesarinn ræður ekki við…“ | Sviga-innihaldið gefur ástæðuna. Vistaðu hana sem DXF, eða sem DWG frá AutoCAD 2000 til 2018, úr CAD-forritinu |
| „Þessi teikning nær meira en 10.000 km frá uppruna sínum…“ | Færðu teikninguna nálægt 0,0 í CAD-forritinu |

### Innflutningurinn er í röngri stærð eða liggur á hliðinni

- **OBJ:** OBJ hefur enga mælieiningu; ModelCraft les metra. Líkan í millimetrum kemur inn 1000 sinnum of stórt: [breyttu mælikvarðanum](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) með `0.001`; líkan í tommum með `0.0254`.
- **OBJ á hliðinni:** ModelCraft býst við OBJ-skrám með Y upp. Skrá sem er skrifuð með Z upp kemur inn liggjandi. Snúðu henni 90° um rauða ásinn: smelltu á miðju {{ui:Snúa}} á fleti sem snýr eftir rauðu, eða opnaðu skrána í forritinu og fluttu út með Y upp.
- **DWG eða DXF:** þú valdir ranga mælieiningu í glugganum „Mælieiningar teikningar“. Afturkallaðu og fluttu inn aftur.

## Opnun skráa

| Skilaboð | Hvað á að gera |
|---|---|
| „Þetta er ekki ModelCraft-líkan (það er ekki JSON).“ | Notaðu {{ui:Flytja inn}} fyrir önnur snið |
| „Þetta er ekki ModelCraft-skrá sem við getum opnað: …“ | Skráin er skemmd eða var breytt með höndum |
| „Þetta líkan var vistað af nýrri ModelCraft…“ | Opnaðu það í nýrri útgáfunni |
| „Þessi skrá er yfir 200 MB.“ | Líkanið er of stórt til að opna hér |

## Ég tapaði vinnu

ModelCraft vistar ekki sjálfkrafa í skrá. Þegar þú lokar eða endurhleður flipa með óvistuðum breytingum spyr vafrinn fyrst („Yfirgefa síðu?“ eða „Endurhlaða síðu?“); veldu að vera áfram og vista. {{ui:Nýtt}} og {{ui:Opna}} spyrja líka („Óvistaðar breytingar“). Ef vafrinn eða tölvan hrundi, opnaðu ModelCraft aftur í sama vafra: það býður þér óvistuðu vinnuna til baka („Endurheimta vinnuna þína?“; sjá [Endurheimta vinnuna þína](common:recover)). Vistaðu oft með {{key:Mod+S}}.

## Niðurhalsmappan fyllist af afritum

Hver vistun er nýtt niðurhal, sem heitir `Untitled (1).modelcraft`, `Untitled (2).modelcraft` og svo framvegis. Eyddu þeim gömlu, eða stilltu vafrann til að spyrja hvar hver skrá eigi að vistast og skrifa yfir gömlu skrána sjálfur. Sjá [Opna, vista, flytja inn og flytja út](topic:files#save-a-model).

## Það verður hægt

- Hvert skref í afturköllun geymir afrit af líkaninu (en [möskvi](topic:meshes) geymir aðeins það sem breyttist), þannig að við mjög stóran innflutning á rúmfræði dreginni út tekur hver breyting lengri tíma. Sundurliðaðu eða eyddu því sem þú þarft ekki, vistaðu og opnaðu aftur: enduropnun hreinsar líka afturköllunarsöguna.
- Sólarskuggar kosta mest. Afhakaðu {{ui:Sólarskuggar}} á meðan þú mótar.

## Engir skuggar

{{ui:Sólarskuggar}} er slökkt, sólin er niðri á þeim tíma sem þú valdir („Sólin er niðri á þessum tíma.“), eða stíllinn er {{ui:Vírlíkan}}, sem teiknar enga skugga.

## „This browser did not allow full screen.“

Sumir vafrar og innfelldar sýnir hafna öllum skjá. Notaðu í staðinn eigin öllum skjá vafrans ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft opnast ekki án tengingar

ModelCraft opnast án nettengingar aðeins eftir að það var vistað til notkunar án nettengingar í þeim vafra: hnappur forritastikunnar verður að sýna {{ui:Tilbúið án nettengingar}}. Opnaðu það á meðan þú ert tengdur og smelltu á {{ui:Vista til notkunar án nettengingar}}. Ef hnappurinn sýnir {{ui:Ekki tókst að vista}}, smelltu aftur á hann með betri tengingu; {{ui:Notkun án nettengingar er ekki í boði}} þýðir að þessi gluggi (einkagluggi eða stýrð tölva) getur ekki geymt afrit. Sjá [Vinna án nettengingar](common:offline).
