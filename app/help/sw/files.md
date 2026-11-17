---
title: Fungua, hifadhi, leta na safirisha
summary: Faili ya ModelCraft, unachoweza kuleta na kutuma nje, mahali faili zinapohifadhiwa, na kinachobadilika nje ya mtandao na kati ya vivinjari.
keywords: fungua, hifadhi, leta, safirisha, faili, 3dm, skp, rejesha, hifadhi kiotomatiki, za hivi karibuni, kompyuta ya mezani, fungua katika 3d, makabidhiano, pakua, faili ya modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, miundo, nje ya mtandao, hifadhi kama
from: 3f09ab72
---

ModelCraft husoma na kuandika faili kwenye kompyuta yako. Hakuna kinachopakiwa: faili unayofungua husomwa ndani ya kivinjari chako, na faili unayohifadhi ni upakuaji. Tazama [Mahali faili zako zinapoenda](common:your-files).

## Muhtasari wa miundo

| Umbizo | Fungua | Leta | Safirisha | Kwa matumizi gani |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | ndiyo | hapana | {{ui:Hifadhi}} | Faili yako ya kazi. Inahifadhi kila kitu. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | ndiyo | ndiyo | {{ui:Hifadhi kama}}, {{ui:Safirisha}} | Programu za kutengeneza picha na kukusanya matukio. USD ya ModelCraft yenyewe huhifadhi kila kitu. Tazama [Hifadhi, fungua na safirisha USD](topic:usd). |
| SketchUp (`.skp`) | hapana | ndiyo | hapana | Kuleta modeli kutoka SketchUp. Huhifadhi vikundi, vipengele, rangi, umbile kwenye nyuso, lebo na kingo laini. Tazama [Leta modeli ya SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | hapana | ndiyo | ndiyo | Kubadilishana modeli na wabunifu wengine wa 3D. Huhifadhi vikundi, vipengele na rangi. |
| OBJ (`.obj`) | hapana | ndiyo | ndiyo | Programu za kutengeneza picha na taswira. |
| glTF (`.glb`, `.gltf`) | hapana | ndiyo | `.glb` pekee | Vionyeshi vya wavuti, injini za michezo, AR. |
| STL (`.stl`) | hapana | ndiyo | ndiyo | Uchapishaji wa 3D (kwa milimita). |
| PLY (`.ply`) | hapana | ndiyo | ndiyo | Matundu yenye rangi: skani, uchapishaji wa rangi. |
| FBX (`.fbx`) | hapana | ndiyo | hapana | Modeli kutoka programu za uhuishaji na michezo (FBX 2011 na mpya zaidi). |
| Alembic (`.abc`) | hapana | ndiyo | hapana | Akiba za jiometri, katika sampuli yake ya kwanza. |
| STEP (`.step`, `.stp`) | hapana | ndiyo | hapana | Sehemu kutoka kwa wabunifu wa sehemu na wasambazaji, kama matundu yaliyofungwa katika ukubwa wake halisi. Tazama [Miundo ya faili](topic:formats). |
| `.3dm` | hapana | ndiyo | hapana | Modeli za NURBS: polisurfesi, matundu, mikunjo, bloku na tabaka, kama matundu, kingo, vipengele na lebo. Tazama [Leta modeli ya .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | hapana | hapana | ndiyo | Uchapishaji wa 3D, wenye rangi (kwa milimita). Kutoka {{ui:Kagua uchapishaji wa 3D (STL au 3MF)…}}: tazama [Andaa modeli kwa uchapishaji wa 3D](topic:print-3d). |
| IFC (`.ifc`) | hapana | hapana | ndiyo | Programu za BIM, na BimCraft. |
| DWG (`.dwg`) | hapana | ndiyo | ndiyo | Mpango wa eneo au mpango wa ghorofa wa kuundia modeli juu yake; kutuma modeli kwenye programu ya CAD. |
| DXF (`.dxf`) | hapana | ndiyo | ndiyo | Sawa, kwa programu yoyote ya CAD. |

[Miundo ya faili kwa undani](topic:formats) inaorodhesha kwa usahihi kile kila umbizo huhifadhi na kile linachoacha.

## Faili ya ModelCraft

Faili ya `.modelcraft` huhifadhi modeli nzima: jiometri, vikundi, vipengele, miongozo, matukio, vipimo, pamoja na kamera na mtindo uliokuwa unatumia ulipohifadhi. Haihifadhi historia ya kutendua.

### Fungua modeli

1. Bofya {{ui:Fungua}} katika kundi la {{ui:Faili}}, au bonyeza {{key:Mod+O}}.
2. Ikiwa modeli iliyo kwenye skrini ina mabadiliko ambayo hayajahifadhiwa, ModelCraft inauliza: "Modeli hii ina mabadiliko ambayo hayajahifadhiwa. Hifadhi nakala kwanza?" Chagua {{ui:Hifadhi nakala}}, {{ui:Tupa mabadiliko}} au {{ui:Ghairi}}.
3. Chagua faili ya `.modelcraft`.

Modeli hufunguka katika vipimo ilivyohifadhiwa, ikiwa na kamera ilivyohifadhiwa. Unaweza pia kudondosha faili ya `.modelcraft` kwenye mwonekano wa 3D, au kubofya moja kwenye orodha ya faili za hivi karibuni kwenye kadi ya kuanzia (vivinjari vinavyoweza kufungua faili tena, na programu ya kompyuta ya mezani).

:::desktop
Katika programu ya kompyuta ya mezani, kubofya mara mbili faili ya `.modelcraft` huifungua katika ModelCraft, na vivyo hivyo **Fungua na** kwenye faili ya Collada, OBJ, glTF, DWG au DXF (inaletwa kwenye modeli mpya).
:::

### Hifadhi modeli

Bofya {{ui:Hifadhi}} au bonyeza {{key:Mod+S}}. Kivinjari hupakua `<name>.modelcraft`, ambapo jina ni faili uliyofungua, au "Untitled" kwa modeli mpya.

:::desktop
Katika programu ya kompyuta ya mezani, {{ui:Hifadhi}} huandika faili uliyofungua papo hapo. Modeli mpya huuliza mahali pa kuihifadhi.
:::

- {{ui:Hifadhi kama}} ({{key:Mod+Shift+S}}) huhifadhi nakala kama faili ya `.modelcraft` au kama [USD](topic:usd); pale kivinjari kinapoweza, huuliza jina na mahali. Vinginevyo, badilisha jina la faili iliyopakuliwa: uhifadhi unaofuata baada ya kufungua faili iliyobadilishwa jina hutumia jina jipya.
- Kila uhifadhi ni upakuaji mpya. Kulingana na mipangilio ya kivinjari, huenda moja kwa moja kwenye folda yako ya upakuaji au huuliza mahali pa kuhifadhi. Faili yenye jina hilo ikiwa tayari ipo, vivinjari vingi huongeza namba, kama `Untitled (1).modelcraft`.

:::chromium
Ili kuchagua folda kila wakati, fungua mipangilio ya kivinjari, tafuta "downloads" kisha washa "Ask where to save each file before downloading".
:::

:::firefox
Ili kuchagua folda kila wakati, fungua **Settings**, kisha **General**, na chini ya "Downloads" chagua "Always ask you where to save files".
:::

:::safari
Ili kubadilisha mahali upakuaji unapoenda, fungua **Safari**, kisha **Settings**, kisha **General**, na weka "File download location".
:::

### Anza modeli mpya

Bofya {{ui:Mpya}}. Ikiwa kuna mabadiliko ambayo hayajahifadhiwa, ModelCraft huuliza kwanza. Modeli mpya huanza tupu, katika kipimo cha eneo lako (futi na inchi nchini Marekani, milimita kwingineko), bila matukio.

### Kama kivinjari kinafungwa kabla ya kuhifadhi

ModelCraft huhifadhi nakala ya kazi ambayo haijahifadhiwa kwenye kivinjari chako sekunde chache baada ya kila mabadiliko. Nakala huandikwa chinichini, hivyo modeli kubwa haikuzuii wakati inahifadhiwa. Kichupo au kivinjari kikifungwa kabla ya kuhifadhi, mara ujayo ukifungua ModelCraft itauliza "Rejesha kazi yako?". Kurejesha hufungua modeli kama ilivyokuwa, bado haijahifadhiwa kwenye faili:ihifadhi ili kuibakiza. Tazama [Rejesha kazi yako](common:recover).

### Kutoka CadCraft: Open in ModelCraft

Katika programu ya uchoraji ya CadCraft, **View**, kisha **More**, kisha **Open in ModelCraft** huikabidhi ModelCraft mchoro uliofunguliwa kwenye kichupo kipya, kama DWG. Unafika kama DWG iliyoletwa: mistari chini, katika kikundi, tayari kuundia modeli juu yake. Hakuna kinachopakiwa; faili hupita kwenye hifadhi ya kivinjari chako yenyewe.

## Leta

Kuleta huongeza faili kwenye modeli uliyo nayo wazi; haibadilishi modeli hiyo.

1. Bofya {{ui:Leta}} katika kundi la {{ui:Faili}}, au dondosha faili kwenye mwonekano wa 3D.
2. Chagua faili ya SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG au DXF.

   Faili hufika kama **kikundi kimoja**, kilichochaguliwa, na mwonekano unakuza kukionyesha. Upau wa hali unaonyesha kilichoingia, na unaorodhesha chochote kisichoweza kuletwa, kama "Haijaletwa: 2 texture".

3. Ili kufanya kazi na jiometri yake moja kwa moja, bofya mara mbili kikundi ili uhariri ndani yake, au bofya {{ui:Vunja}}.

Mambo ya kujua:

- **Ukubwa na mwelekeo wa juu:** Faili za Collada zinaeleza kipimo chao na mhimili upi ni juu, na ModelCraft huzibadilisha. glTF daima iko katika mita. Faili za OBJ hazina kipimo: ModelCraft huzisoma kama mita, na Y juu. Ikiwa OBJ inaingia mara 1000 kubwa mno au ndogo mno, tumia [Badilisha ukubwa](topic:rotate-scale) kwa kigezo kama `0.001` au `1000`.
- **DWG na DXF** huingia kama mistari (kingo) chini, si kama nyuso. Ikiwa mchoro hausemi kipimo chake, kisanduku chenye kichwa "Drawing units" huuliza kipimo kimoja cha mchoro ni kipi. Tazama [Modeli kwenye mpango wa eneo](topic:site-plan).
- **Mipaka:** faili zaidi ya 300 MB hukataliwa kuletwa, na zaidi ya 200 MB kwa kufunguliwa. Faili zenye zaidi ya vertices au nyuso milioni 2 hukataliwa kwa kuwa kubwa mno. OBJ zaidi ya 64 MB hukataliwa kabla hazijasomwa. Faili za maandishi (Collada, OBJ, ASCII STL, maandishi ya USD) husomwa kipande kimoja kwa wakati, takriban 4 MB, kwa hiyo hakuna kizuizi kimoja cha maandishi kinachoshikilia faili nzima; OBJ ya 16 MB ilitumia takriban 0.5 GB ya kumbukumbu ilipofunguliwa katika jaribio letu.

## Safirisha

1. Bofya {{ui:Safirisha}} katika kundi la {{ui:Faili}}.
2. Chagua umbizo: {{ui:glTF binary (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL kwa uchapishaji (.stl, milimita)}}, {{ui:PLY yenye rangi (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC kwa BimCraft (.ifc)}}, {{ui:DWG kwa CAD (.dwg, 2004)}} au {{ui:DXF kwa CAD (.dxf, R12)}}.

Kivinjari hupakua faili, ikiwa na jina kama la modeli. Modeli nzima inasafirishwa, si uteuzi tu. Faili za glTF, Collada na OBJ huandikwa chinichini, kwa hiyo ModelCraft inaendelea kufanya kazi modeli kubwa inaposafirishwa; upakuaji huanza faili ikiwa tayari. Modeli tupu haisafirishwi: "Modeli ni tupu: chora kitu kwanza." Tazama [Safirisha modeli kwa programu nyingine](topic:export-model).

## Mtandaoni na nje ya mtandao

Kila kitu katika ModelCraft kinaendeshwa kwenye kompyuta yako, kwa hiyo kuunda modeli, kufungua, kuhifadhi, kuleta na kusafirisha vyote hufanya kazi bila muunganisho mara programu inapokuwa imepakiwa.

Ili kufungua ModelCraft bila muunganisho kabisa, ihifadhi kwa matumizi ya nje ya mtandao ukiwa mtandaoni:

1. Bofya {{ui:Hifadhi kwa matumizi ya nje ya mtandao}} kwenye upau wa programu juu.
2. Kitufe huhesabu juu ("Inahifadhi 40 kati ya 212") wakati kinahifadhi. ModelCraft huhifadhi faili zake zenyewe (pamoja na kisomaji chake cha DWG), msaada huu na maktaba ya 3D, kwa hiyo inaweza kuchukua muda.
3. Kitufe kikisomeka {{ui:Tayari kwa matumizi ya nje ya mtandao}}, ModelCraft hufunguka kutoka anwani ile ile bila muunganisho, na kuleta DWG pia hufanya kazi nje ya mtandao.

Baadaye bofya {{ui:Tayari kwa matumizi ya nje ya mtandao}} kwa {{ui:Hifadhi tena (pata toleo la hivi karibuni)}} au {{ui:Ondoa nakala ya nje ya mtandao}}. Kitufe kikisomeka {{ui:Imeshindwa kuhifadhi}}, baadhi ya faili hazikupakuliwa: angalia muunganisho kisha ubofye ili ujaribu tena. {{ui:Matumizi ya nje ya mtandao hayapatikani}} yanamaanisha dirisha hili la kivinjari haliwezi kuhifadhi nakala (madirisha ya faragha na baadhi ya kompyuta zinazosimamiwa). Tazama [Kufanya kazi nje ya mtandao](common:offline).

Kuhifadhi kwenye wingu hakupatikani bado. Kila modeli huishi mahali unapoihifadhi.

:::offline
Huna muunganisho. Unaweza kuendelea kuunda modeli na kuhifadhi. Isipokuwa upau wa programu unaonyesha {{ui:Tayari kwa matumizi ya nje ya mtandao}}, usiupakie upya kichupo hiki hadi uwe mtandaoni tena.
:::

## Programu ya kompyuta ya mezani

:::desktop
Unatumia ModelCraft ndani ya CadCraft Studio, programu ya kompyuta ya mezani yenye programu zote nane. Faili hufunguka na kuhifadhiwa mahali unapochagua.
:::

:::web
ModelCraft inaendeshwa kwenye kivinjari kwenye Mac, Windows na Linux, na katika CadCraft Studio, programu ya kompyuta ya mezani yenye programu zote nane katika usakinishaji mmoja, kutoka getcadcraft.com/download.
:::
