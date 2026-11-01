---
title: Fungua, hifadhi, leta na safirisha
summary: Faili la ModelCraft, unachoweza kuleta na kutuma, mahali faili zinapokwenda, na kinachobadilika nje ya mtandao na kati ya vivinjari.
keywords: fungua, hifadhi, leta, safirisha, faili, 3dm, skp, rejesha, hifadhi kiotomatiki, za hivi karibuni, eneo-kazi, fungua kwa 3D, kabidhi, pakua, faili la modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, miundo, nje ya mtandao, hifadhi kama
from: 0b4896d1
---

ModelCraft inasoma na kuandika faili kwenye kompyuta yako. Hakuna kinachopakiwa: faili unalofungua linasomwa ndani ya kivinjari chako, na faili unalohifadhi ni upakuaji. Tazama [Faili zako zinakwenda wapi](common:your-files).

## Miundo kwa muhtasari

| Umbizo | Fungua | Leta | Safirisha | Ni kwa ajili ya nini |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | ndiyo | hapana | {{ui:Hifadhi}} | Faili lako la kazi. Linahifadhi kila kitu. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | ndiyo | ndiyo | {{ui:Hifadhi kama}}, {{ui:Safirisha}} | Programu za uonyeshaji na za kukusanya matukio. USD ya ModelCraft yenyewe inahifadhi kila kitu. Tazama [Hifadhi, fungua na safirisha USD](topic:usd). |
| SketchUp (`.skp`) | hapana | ndiyo | hapana | Kuleta modeli kutoka SketchUp. Inahifadhi vikundi, vipengele, rangi, maumbile ya nyuso, lebo na kingo laini. Tazama [Leta modeli ya SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | hapana | ndiyo | ndiyo | Kubadilishana modeli na wanamodeli wengine wa 3D. Inahifadhi vikundi, vipengele na rangi. |
| OBJ (`.obj`) | hapana | ndiyo | ndiyo | Programu za uonyeshaji na taswira. |
| glTF (`.glb`, `.gltf`) | hapana | ndiyo | `.glb` pekee | Vitazamaji vya wavuti, injini za michezo, AR. |
| STL (`.stl`) | hapana | ndiyo | ndiyo | Uchapishaji wa 3D (kwa milimita). |
| PLY (`.ply`) | hapana | ndiyo | ndiyo | Matundu yenye rangi: skani, uchapishaji wa rangi. |
| FBX (`.fbx`) | hapana | ndiyo | hapana | Modeli kutoka programu za uhuishaji na michezo (FBX 2011 na mpya zaidi). |
| Alembic (`.abc`) | hapana | ndiyo | hapana | Akiba za jiometri, katika sampuli yake ya kwanza. |
| STEP (`.step`, `.stp`) | hapana | ndiyo | hapana | Sehemu kutoka kwa wanamodeli wa sehemu na wasambazaji, kama matundu yaliyofungwa kwa ukubwa wake halisi. Tazama [Miundo ya faili](topic:formats). |
| `.3dm` | hapana | ndiyo | hapana | Modeli za NURBS: poliuso, matundu, mikunjo, bloku na tabaka, kama matundu, kingo, vipengele na lebo. Tazama [Leta modeli ya .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | hapana | hapana | ndiyo | Uchapishaji wa 3D, pamoja na rangi (kwa milimita). Kutoka {{ui:Kagua uchapishaji wa 3D (STL au 3MF)…}}: tazama [Andaa modeli kwa uchapishaji wa 3D](topic:print-3d). |
| IFC (`.ifc`) | hapana | hapana | ndiyo | Programu za BIM, na BimCraft. |
| DWG (`.dwg`) | hapana | ndiyo | ndiyo | Mpango wa tovuti au wa sakafu wa kuigia modeli; kutuma modeli kwa programu ya CAD. |
| DXF (`.dxf`) | hapana | ndiyo | ndiyo | Hivyo hivyo, kwa programu yoyote ya CAD. |

[Miundo ya faili kwa undani](topic:formats) inaorodhesha kile hasa kila umbizo linahifadhi na kinachoacha.

## Faili la ModelCraft

Faili `.modelcraft` linahifadhi modeli nzima: jiometri, vikundi, vipengele, miongozo, matukio, vipimo, pamoja na kamera na mtindo ulivyokuwa ukitumia ulipohifadhi. Halihifadhi historia ya kutendua.

### Fungua modeli

1. Bofya {{ui:Fungua}} kwenye kikundi cha {{ui:Faili}}, au bonyeza {{key:Mod+O}}.
2. Kama modeli iliyo skrinini ina mabadiliko ambayo hayajahifadhiwa, ModelCraft inauliza: "Modeli hii ina mabadiliko ambayo hayajahifadhiwa. Hifadhi nakala kwanza?" Chagua {{ui:Hifadhi nakala}}, {{ui:Tupa mabadiliko}} au {{ui:Ghairi}}.
3. Chagua faili la `.modelcraft`.

Modeli inafunguka kwa vipimo ilivyohifadhiwa, pamoja na kamera ilivyohifadhiwa nayo. Unaweza pia kudondosha faili la `.modelcraft` kwenye mwonekano wa 3D, au kubofya moja kwenye orodha ya faili za hivi karibuni kwenye kadi ya kuanza (vivinjari vinavyoweza kufungua tena faili, na programu ya eneo-kazi).

:::desktop
Kwenye programu ya eneo-kazi, kubofya mara mbili faili la `.modelcraft` kunalifungua kwenye ModelCraft, na vivyo hivyo **Fungua kwa** kwenye faili la Collada, OBJ, glTF, DWG au DXF (linaletwa kwenye modeli mpya).
:::

### Hifadhi modeli

Bofya {{ui:Hifadhi}} au bonyeza {{key:Mod+S}}. Kivinjari kinapakua `<name>.modelcraft`, ambapo jina ni faili ulilofungua, au "Untitled" kwa modeli mpya.

:::desktop
Kwenye programu ya eneo-kazi, {{ui:Hifadhi}} inaandika faili ulilolifungua mahali pake. Modeli mpya inauliza mahali pa kuhifadhi.
:::

- {{ui:Hifadhi kama}} ({{key:Mod+Shift+S}}) inahifadhi nakala kama faili la `.modelcraft` au kama [USD](topic:usd); pale kivinjari kinapoweza, kinauliza jina na mahali. Vinginevyo badilisha jina la faili lililopakuliwa: hifadhi inayofuata baada ya kufungua faili lililobadilishwa jina inatumia jina jipya.
- Kila hifadhi ni upakuaji mpya. Kulingana na mipangilio ya kivinjari, linaenda moja kwa moja kwenye folda yako ya upakuaji au linauliza mahali pa kuhifadhi. Faili lenye jina hilo likiwa tayari huko, vivinjari vingi huongeza nambari, kama `Untitled (1).modelcraft`.

:::chromium
Ili kuchagua folda kila wakati, fungua mipangilio ya kivinjari, tafuta "downloads" na uwashe "Ask where to save each file before downloading".
:::

:::firefox
Ili kuchagua folda kila wakati, fungua **Settings**, kisha **General**, na chini ya "Downloads" chagua "Always ask you where to save files".
:::

:::safari
Ili kubadilisha mahali upakuaji unapokwenda, fungua **Safari**, kisha **Settings**, kisha **General**, na weka "File download location".
:::

### Anza modeli mpya

Bofya {{ui:Mpya}}. Kama kuna mabadiliko ambayo hayajahifadhiwa, ModelCraft inauliza kwanza. Modeli mpya inaanza tupu, kwa kipimo cha eneo lako (futi na inchi Marekani, milimita kwingineko), bila matukio.

### Kama kivinjari kinafungwa kabla hujahifadhi

ModelCraft inaweka nakala ya kazi isiyohifadhiwa kwenye kivinjari chako sekunde chache baada ya kila mabadiliko. Kama kichupo au kivinjari kikifungwa kabla hujahifadhi, mara nyingine utakapofungua ModelCraft itauliza "Rejesha kazi yako?". Kurejesha kunafungua modeli kama ilivyokuwa, lakini bado haijahifadhiwa kwenye faili:ihifadhi ili kuibakiza. Tazama [Rejesha kazi yako](common:recover).

### Kutoka CadCraft: Fungua kwenye ModelCraft

Kwenye programu ya kuchora ya CadCraft, **Mwonekano**, kisha **Zaidi**, kisha **Fungua kwenye ModelCraft** inakabidhi mchoro uliofunguliwa kwa ModelCraft kwenye kichupo kipya, kama DWG. Unafika kama DWG iliyoletwa: mistari ardhini, kwenye kikundi, tayari kwa kuigia modeli. Hakuna kinachopakiwa; faili linapitia hifadhi ya kivinjari chako yenyewe.

## Leta

Kuleta kunaongeza faili kwenye modeli uliyofungua; hakubadilishi.

1. Bofya {{ui:Leta}} kwenye kikundi cha {{ui:Faili}}, au dondosha faili kwenye mwonekano wa 3D.
2. Chagua faili la SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG au DXF.

   Faili linafika kama **kikundi kimoja**, kikiwa kimechaguliwa, na mwonekano unakuza kulionyesha. Upau wa hali unaonyesha kilichoingia, na unaorodhesha chochote kisichoweza kuletwa, kama "Haijaletwa: umbile 2".

3. Ili kufanya kazi moja kwa moja kwenye jiometri yake, bofya mara mbili kikundi ili kuhariri ndani yake, au bofya {{ui:Vunja}}.

Mambo ya kujua:

- **Ukubwa na mwelekeo wa juu:** faili za Collada zinasema kipimo chao na mhimili upi ni juu, na ModelCraft inabadilisha. glTF iko kila wakati kwa mita. Faili za OBJ hazibebi kipimo: ModelCraft inazisoma kama mita, kwa Y juu. Kama OBJ imeingia mara 1000 kubwa au ndogo, tumia [Badilisha ukubwa](topic:rotate-scale) kwa kipengele kama `0.001` au `1000`.
- **DWG na DXF** huingia kama mistari (kingo) ardhini, si kama nyuso. Kama mchoro hausemi kipimo chake, kisanduku cha mazungumzo chenye kichwa "Vipimo vya mchoro" kinauliza umbali mmoja wa mchoro ni kipi. Tazama [Modeli kwenye mpango wa tovuti](topic:site-plan).
- **Mipaka:** faili zaidi ya 300 MB zinakataliwa kuletwa, na zaidi ya 200 MB kwa kufungua. Faili zenye kona zaidi ya milioni 2 au nyuso zaidi ya milioni 2 zinakataliwa kwa kuwa kubwa mno.

## Safirisha

1. Bofya {{ui:Safirisha}} kwenye kikundi cha {{ui:Faili}}.
2. Chagua umbizo: {{ui:glTF binary (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL kwa uchapishaji (.stl, milimita)}}, {{ui:PLY yenye rangi (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC kwa BimCraft (.ifc)}}, {{ui:DWG kwa CAD (.dwg, 2004)}} au {{ui:DXF kwa CAD (.dxf, R12)}}.

Kivinjari kinapakua faili, likiitwa kama modeli. Modeli nzima inasafirishwa, si uteuzi tu. Modeli tupu haisafirishwi: "Modeli ni tupu: chora kitu kwanza." Tazama [Safirisha modeli kwa programu nyingine](topic:export-model).

## Mtandaoni na nje ya mtandao

ModelCraft yote inaendeshwa kwenye kompyuta yako, kwa hivyo kuigia, kufungua, kuhifadhi, kuleta na kusafirisha vyote vinafanya kazi bila muunganisho mara programu ikishapakiwa.

Ili kufungua ModelCraft bila muunganisho wowote kabisa, ihifadhi kwa matumizi ya nje ya mtandao ukiwa mtandaoni:

1. Bofya {{ui:Hifadhi kwa matumizi ya nje ya mtandao}} kwenye upau wa programu juu.
2. Kitufe kinahesabu juu ("Inahifadhi 40 kati ya 212") kinapohifadhi. ModelCraft inahifadhi faili zake yenyewe (kisomaji chake cha DWG miongoni mwao), msaada huu na maktaba ya 3D, kwa hivyo inaweza kuchukua muda.
3. Kitufe kinaposoma {{ui:Tayari kwa matumizi ya nje ya mtandao}}, ModelCraft inafunguka kutoka anwani ile ile bila muunganisho, na kuleta DWG kunafanya kazi nje ya mtandao pia.

Bofya {{ui:Tayari kwa matumizi ya nje ya mtandao}} baadaye kwa {{ui:Hifadhi tena (pata toleo la hivi karibuni)}} au {{ui:Ondoa nakala ya nje ya mtandao}}. Kama kitufe kinasoma {{ui:Imeshindwa kuhifadhi}}, faili zingine hazikupakuliwa: angalia muunganisho kisha ubofye tena. {{ui:Matumizi ya nje ya mtandao hayapatikani}} linamaanisha dirisha hili la kivinjari haliwezi kuweka nakala (madirisha ya faragha na baadhi ya kompyuta zinazosimamiwa). Tazama [Kufanya kazi nje ya mtandao](common:offline).

Kuhifadhi kwenye wingu bado hakupatikani. Kila modeli inakaa mahali unapoihifadhi.

:::offline
Uko nje ya mtandao. Unaweza kuendelea kuunda na kuhifadhi. Isipokuwa upau wa programu unaonyesha {{ui:Tayari kwa matumizi ya nje ya mtandao}}, usipakie upya kichupo hiki hadi uwe mtandaoni tena.
:::

## Programu ya eneo-kazi

:::desktop
Unatumia ModelCraft ndani ya CadCraft Studio, programu ya eneo-kazi yenye programu zote nane. Faili zinafunguka na kuhifadhiwa mahali unapochagua.
:::

:::web
ModelCraft inaendeshwa kwenye kivinjari kwenye Mac, Windows na Linux, na ndani ya CadCraft Studio, programu ya eneo-kazi yenye programu zote nane kwenye usakinishaji mmoja, kutoka getcadcraft.com/download.
:::
