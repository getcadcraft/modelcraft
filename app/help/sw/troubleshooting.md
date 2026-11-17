---
title: Utatuzi wa matatizo
summary: Dalili, sababu na suluhu, kuanzia mwonekano wa 3D tupu hadi uletaji wa ukubwa usio sahihi, pamoja na ujumbe ambao ModelCraft inaonyesha.
keywords: tatizo, hitilafu, haifanyi kazi, tupu, WebGL, michoro, polepole, ujumbe, uletaji umeshindwa, ukubwa usio sahihi, haiwezi kuchagua, skrini ya kugusa, vitufe havifanyi kazi, kupoteza kazi
from: 6e7394be
---

## Mwonekano wa 3D ni tupu

**Dalili:** katikati ya skrini kunabaki tupu, au kinaonyesha rangi ya usuli tu, na kubofya zana hakufanyi kitu.

**Sababu:** ModelCraft inachora kwa WebGL 2, michoro ya 3D ya kivinjari. Haipo wakati kivinjari ni cha zamani, kuongeza kasi ya vifaa kumezimwa, au dereva wa michoro amezuiwa.

**Suluhu:**

:::chromium
1. Fungua mipangilio ya kivinjari na utafute "graphics acceleration".
2. Washa "Use graphics acceleration when available" kisha anzisha upya kivinjari.
3. Ikiwa tayari imewashwa, andika `chrome://gpu` kwenye upau wa anwani (`edge://gpu` katika Edge) na utafute "WebGL2" kwenye orodha. Ikisema imezimwa, sasisha dereva wa michoro.
:::

:::firefox
1. Fungua **Settings**, kisha **General**, na usogeze hadi "Performance".
2. Ondoa alama "Use recommended performance settings", kisha weka alama "Use hardware acceleration when available". Anzisha upya Firefox.
3. Ikiwa bado inashindwa, andika `about:support` kwenye upau wa anwani na uangalie sehemu ya "Graphics" kwa WebGL 2.
:::

:::safari
Sasisha macOS na Safari. Matoleo ya hivi karibuni ya Safari daima huwa na WebGL 2 imewashwa. Ikiwa ulibadilisha vipengele vya majaribio chini ya **Safari**, kisha **Settings**, kisha **Advanced** (au **Feature Flags**), viweke upya.
:::

Kwenye kompyuta ya kazini, remote desktop au mashine pepe, michoro ya 3D inaweza kuzuiwa na sera. Jaribu kompyuta nyingine. Tazama [Vivinjari na kompyuta](common:browsers).

## Vitufe havifanyi kazi, au vinaandika kwenye kisanduku

**Sababu:** mwelekeo wa kibodi uko kwenye sehemu ya paneli: orodha ya {{ui:Nyuso}} katika {{ui:Mtindo}}, mpangilio wa jua, sehemu ya {{ui:Jina}} katika {{ui:Taarifa ya kitu}}, au kichagua vipimo. Herufi na vitufe vya mishale kisha vinaenda kwenye sehemu hiyo.

**Suluhu:** bofya kwenye mwonekano wa 3D, kisha bonyeza kitufe tena. Vitufe pia havifanyi kazi wakati kisanduku cha mazungumzo kiko wazi.

## Kuandika namba hakufanyi kitu

- **Hakuna mwelekeo bado.** Urefu uliondikwa unafuata njia ambayo kishale kinaelekeza tangu mbofyo wa kwanza. Sogeza kishale kidogo kwenye mwelekeo unaotaka, kisha andika.
- **Wakati usio sahihi.** Zana nyingi zinakubali thamani iliyoandikwa baada ya mbofyo wa kwanza tu: bofya kona ya kwanza, uso au nukta ya kusogea kutoka kwanza. {{ui:Duara}} na {{ui:Poligoni}} zinakubali idadi ya pande kabla ya mbofyo wa kwanza.
- **"Andika urefu kama vile 3m, 10'6" au 4m,3m."** ModelCraft haikuweza kuisoma. Angalia koma ya desimali (`2,5`): tumia nukta.

## Kuburuta kunaanzia mahali pasipo sahihi kwenye skrini ya kugusa

**Dalili:** kwa kidole, mstatili wa kwanza uko sawa, lakini mstatili, duara au mstari unaofuata unaanzia pale mguso wako uliopita ulipomalizika badala ya pale ulipogusa.

**Sababu:** hitilafu katika toleo hili: kwenye skrini ya kugusa zana inakumbuka nukta ya mwisho ya kunasa kutoka mguso uliopita.

**Suluhu:** gusa kitufe cha zana kwenye upau wa zana tena kabla ya kila umbo jipya. Hilo linaanzisha zana upya, na nukta ya kwanza inatua pale unapogusa.

## Kuhariri kikundi kimoja kilibadilisha kingine

**Dalili:** ulinakili kikundi kwa {{ui:Hamisha}} na {{key:Ctrl}}, ukafungua nakala moja ukahariri, na nyingine nayo ikabadilika. {{ui:Muhtasari}} inaonyesha zote mbili kwa jina moja.

**Sababu:** katika toleo hili, kunakili kikundi kunatengeneza uwekaji wa pili wa kikundi kile kile, kama kwa kipengele. Kitufe cha {{ui:Fanya kuwa cha pekee}} kinatolewa kwa vipengele pekee.

**Suluhu:** chagua nakala unayotaka kubadilisha, bofya {{ui:Tengeneza kipengele}} katika {{ui:Taarifa ya kitu}}, kisha {{ui:Fanya kuwa cha pekee}}. Nakala hiyo sasa ina yaliyomo yake. Au {{ui:Vunja}} hiyo.

## Sukuma/vuta haifanyi unavyotarajia

- **"Sukuma/vuta inafanya kazi kwenye uso. Bofya uso."** Umebofya kingo au nafasi tupu. Elekeza kishale hadi uso uangazwe, kisha bofya.
- **Uso uko ndani ya kikundi.** Bofya mara mbili kikundi ili kukifungua kwanza.
- **Dirisha halikukata ukuta.** Mstatili lazima uchorwe kwenye uso wa ukuta, si mbele yake, na ukuta lazima uwe na uso wa nyuma. Tazama [Kata ufunguzi kupitia ukuta](topic:openings#if-it-did-not-cut-through).
- **Visanduku viwili vinaingiliana bila kuunganishwa.** Vitu thabiti vilivyosukumwa ndani ya kingine havikatani wala kuungana katika toleo hili.

## Mstari au umbo halikutengeneza uso

Uso unajazwa tu pale kingo zinapofunga kitanzi tambarare. Angalia kama nukta ya mwisho ilinasa kwenye ya kwanza ("Ncha"), na kwamba kingo zote zinalala kwenye ndege moja. Kitanzi kilicho nje ya ndege kidogo kinabaki kama mistari. Chora upya mojawapo ya kingo zake, ukinasa kwenye kona.

## Siwezi kuchagua au kufuta uso

- Kwa {{ui:Chagua}}, bofya karibu na kingo kinachukua kingo. Bofya karibu zaidi na katikati ya uso.
- {{ui:Kifutio}} hakichagui nyuso. Chagua uso kisha bonyeza {{key:Delete}}, au futa mojawapo ya kingo zake.
- Ikiwa ni sehemu ya kikundi au kipengele, kubofya kunachagua kitu chote. Bofya mara mbili ili kukifungua.

## "Chagua kitu cha kusogeza kwanza, au bofya juu yake."

{{ui:Hamisha}}, {{ui:Zungusha}} na {{ui:Badilisha ukubwa}} vinahitaji kitu cha kufanyia kazi: kichague kwanza, au anzisha zana kwa kubofya kitu chenyewe (si nafasi tupu au mwongozo).

## "Chagua jiometri kwanza (buruta dirisha, au bofya mara tatu kuchagua kila kilichounganishwa)."

{{key:G}} na {{key:Shift+G}} vinahitaji uteuzi. Miongozo haiwezi kuwekwa kwenye kikundi.

## Vitufe vya mishale vinazunguka badala ya kufunga

Kufunga kunafanya kazi tu baada ya mbofyo wa kwanza wa zana ya kuchora au kuhariri. {{ui:Sukuma/vuta}} haina kufunga, na katika {{ui:Zungusha}} hazibadilishi mzunguko. Nyakati nyingine vitufe vya mishale vinazunguka mwonekano.

## Esc katika skrini kamili

Katika skrini kamili, kivinjari kinaweza kutumia {{key:Esc}} ya kwanza kutoka skrini kamili. Bonyeza {{key:Esc}} tena ili kughairi zana.

## Hakuna kitufe cha kati

Bonyeza {{key:O}} kwa {{ui:Zunguka}} kisha buruta, au tumia vitufe vya mishale. Tazama [Zunguka, sogeza na kuza](topic:orbit-pan-zoom#without-a-middle-button).

## Uletaji

| Ujumbe | Cha kufanya |
|---|---|
| "ModelCraft inaleta SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG na DXF. … si mojawapo ya hizi." | Hamisha modeli kutoka programu nyingine katika mojawapo ya miundo hii |
| "Faili hii ni kubwa kuliko 300 MB." | Rahisisha au gawanya modeli katika programu nyingine |
| "…kubwa mno kuundwa hapa (zaidi ya vipeo milioni 2)." | Vivyo hivyo |
| "Faili hii ya .gltf inahitaji "…"…" | Weka `.gltf` pamoja na faili zake za `.bin` na picha za uso, au fungua toleo la `.glb` |
| "Faili hii ya glTF inahitaji kiendelezi cha … ambacho ModelCraft bado haisomi." | Hamisha tena kutoka programu nyingine bila kiendelezi hicho (picha za KTX2, kwa mfano) |
| OBJ inaletwa bila rangi zake au picha za uso | Weka `.obj` pamoja na `.mtl` yake na picha |
| "Alembic hii inatumia mpangilio wa zamani wa HDF5…" | Hifadhi tena kutoka programu nyingine kama faili ya Ogawa Alembic |
| FBX inaletwa bila picha zake za uso | Weka `.fbx` pamoja na picha zake za uso, au jumuisha media wakati wa kusafirisha |
| "Faili hii ya FBX ni toleo la …, ambalo ModelCraft haisomi" | Hamisha tena kama FBX 2011 au mpya zaidi |
| STL au PLY inaletwa mara 1,000 kubwa au ndogo zaidi | STL inasomwa kama milimita na PLY kama mita: ibadilishe ukubwa (tazama [Zungusha na badilisha ukubwa](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| "Hii si faili ya Collada (.dae)…" au "…si XML iliyoundwa vizuri…" | Faili imeharibika au si Collada. Hamisha tena |
| "Faili hii ya Collada haina jiometri ambayo ModelCraft inaweza kuleta." | Ina kamera, taa au marejeo ya faili nyingine tu |
| "Hii ni DXF ya binary. Ihifadhi kama DXF ya ASCII kisha ujaribu tena." | Hifadhi tena kutoka programu ya CAD kama ASCII |
| "Hii si mchoro wa DWG…" | Faili si DWG, au imeharibika |
| "Mchoro huu haukuweza kusomwa (…). Huenda umeharibika, au umehifadhiwa katika toleo la DWG ambalo msomaji hashughulikii…" | Mabano yanatoa sababu. Ihifadhi kama DXF, au kama DWG kutoka AutoCAD 2000 hadi 2018, kutoka programu ya CAD |
| "Mchoro huu unafika zaidi ya km 10,000 kutoka asili yake…" | Sogeza mchoro karibu na 0,0 katika programu ya CAD |

### Uletaji una ukubwa usio sahihi au umelala ubavuni

- **OBJ:** OBJ haina kitengo; ModelCraft inasoma mita. Modeli ya milimita inaletwa mara 1000 kubwa zaidi: [ibadilishe ukubwa](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) kwa `0.001`; modeli ya inchi kwa `0.0254`.
- **OBJ imelala ubavuni:** ModelCraft inatarajia faili za OBJ zenye Y juu. Faili iliyoandikwa kwa Z juu inaletwa ikiwa imelala. Izungushe 90° kuzunguka mhimili mwekundu: bofya kituo cha {{ui:Zungusha}} kwenye uso unaoelekea kando ya nyekundu, au fungua faili katika programu yake na usafirishe ukiwa na Y juu.
- **DWG au DXF:** ulichagua kitengo kisicho sahihi kwenye kisanduku cha "Drawing units" (vitengo vya mchoro). Tendua kisha uletaji tena.

## Kufungua faili

| Ujumbe | Cha kufanya |
|---|---|
| "Faili hii si modeli ya ModelCraft (si JSON)." | Tumia {{ui:Leta}} kwa miundo mingine |
| "Hii si faili ya ModelCraft tunayoweza kufungua: …" | Faili imeharibika au imebadilishwa kwa mkono |
| "Modeli hii ilihifadhiwa na ModelCraft mpya zaidi…" | Ifungue katika toleo jipya zaidi |
| "Faili hii ni kubwa kuliko 200 MB." | Modeli ni kubwa mno kufunguliwa hapa |

## Nimepoteza kazi

ModelCraft haihifadhi kwenye faili yenyewe. Unapofunga au kupakia upya kichupo chenye mabadiliko ambayo hayajahifadhiwa, kivinjari kinauliza kwanza ("Ondoka kwenye tovuti?" au "Pakia upya tovuti?"); chagua kubaki na uhifadhi. Mpya na Fungua pia huuliza ("Mabadiliko ambayo hayajahifadhiwa"). Ikiwa kivinjari au kompyuta iliporomoka, fungua ModelCraft tena katika kivinjari kile kile: itakurudishia kazi isiyohifadhiwa ("Rejesha kazi yako?"; tazama [Rejesha kazi yako](common:recover)). Hifadhi mara nyingi kwa {{key:Mod+S}}.

## Folda yangu ya upakuaji imejaa nakala

Kila uhifadhi ni upakuaji mpya, uliopewa jina `Untitled (1).modelcraft`, `Untitled (2).modelcraft` na kadhalika. Futa za zamani, au weka kivinjari kiulize mahali pa kuhifadhi kila faili na ubatilishe faili ya zamani mwenyewe. Tazama [Fungua, hifadhi, leta na safirisha](topic:files#save-a-model).

## Inakuwa polepole

- Kila hatua ya kutendua huweka nakala ya modeli (mesh huweka tu kilichobadilika), kwa hiyo kwenye uletaji mkubwa sana wa jiometri ya sukuma/vuta kila uhariri unachukua muda mrefu. Vunja au futa usichohitaji, hifadhi, kisha fungua tena: kufungua tena pia kunafuta historia ya kutendua.
- Vivuli vya jua ndivyo vinavyogharimu zaidi. Ondoa alama kwenye {{ui:Vivuli vya jua}} unapomodeli.

## Hakuna vivuli

{{ui:Vivuli vya jua}} vimezimwa, au jua limezama kwa wakati uliochagua ("Jua limezama kwa wakati huu."), au mtindo ni {{ui:Fremu ya waya}}, ambayo haichori vivuli.

## "Kivinjari hakikuruhusu skrini kamili."

Baadhi ya vivinjari na mionekano iliyopachikwa vinakataa skrini kamili. Tumia skrini kamili ya kivinjari chenyewe badala yake ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft haifunguki bila muunganisho

ModelCraft inafunguka nje ya mtandao tu baada ya kuhifadhiwa kwa matumizi ya nje ya mtandao katika kivinjari hicho: kitufe cha upau wa programu lazima kisomeke {{ui:Tayari kwa matumizi ya nje ya mtandao}}. Ifungue ukiwa mtandaoni na ubofye {{ui:Hifadhi kwa matumizi ya nje ya mtandao}}. Ikiwa kitufe kinasomeka {{ui:Imeshindwa kuhifadhi}}, bofya tena kwenye muunganisho bora zaidi; {{ui:Matumizi ya nje ya mtandao hayapatikani}} linamaanisha dirisha hili (dirisha la faragha, au kompyuta inayosimamiwa) haliwezi kuweka nakala. Tazama [Kufanya kazi nje ya mtandao](common:offline).
