---
title: Nota ModelCraft með gervigreindaraðstoðarmanni
summary: Láttu þinn eigin gervigreindaraðstoðarmann eða skriftu skoða líkanið og búa til einföld föst form: heimildir, tenging í gegnum CadCraft Studio og virknaskráin.
keywords: gervigreind, aðstoðarmaður, umboðsmaður, mcp, model context protocol, skrift, sjálfvirkni, líkanagerð, kassi, strokkur, myndgerð, myndgerðarröð, heimildir, aftengja, virkni
from: 629cd0b7
---

## Það sem þú lærir

Hvernig þú leyfir gervigreindaraðstoðarmanni (eða skriftu sem þú skrifaðir) að vinna með ModelCraft, og hvernig þú ákveður hvað hann má snerta.

ModelCraft hefur **enga eigin gervigreind** og sendir ekkert neitt. Þú kemur með aðstoðarmanninn: hvaða forrit sem talar Model Context Protocol (MCP). ModelCraft gefur honum aðeins verkfæri og þú velur hvaða.

## Kveiktu á því

1. Opnaðu {{ui:Stillingar}} (tannhjólið í forritastikunni, eða {{key:Mod+,}}) og farðu á flipann {{ui:ModelCraft}}.
2. Undir {{ui:Aðstoðarmenn}} skaltu haka í **Leyfa gervigreindaraðstoðarmönnum og skriftum að nota ModelCraft**. Það er óvirkt þar til þú gerir það.
3. Veldu hvað hann má gera: **Lesa** er hakað í upphafi; hakaðu í **Breyta**, **Vista** eða **Flytja út** aðeins þegar þú þarft á þeim að halda.

Verkfæri utan þeirra heimilda sem þú hakaðir við eru ekki boðin aðstoðarmanninum. Ef hann biður samt um eitt þeirra hafnar ModelCraft beiðninni og skráir hana í virknaskrána. Ef slökkt er á rofanum slitna allar tengingar í einu; {{ui:Endurstilla ModelCraft-stillingar}} slekkur á honum líka.

## Tengdu aðstoðarmanninn

Aðstoðarmenn tengjast í gegnum **CadCraft Studio** á tölvunni þinni. Studio keyrir lítinn netþjón sem aðeins þessi tölva nær til, varinn með lykli sem hann býr til í hvert skipti sem hann ræsist. Í Studio skaltu velja {{ui:Tengja aðstoðarmann}} og afrita vistfangið og lykilinn yfir í aðstoðarmanninn (Studio sýnir nákvæmar stillingar til að líma inn). Deildu lyklinum aldrei.

:::note
Vafraflipi getur ekki opnað tengingu fyrir aðstoðarmann: í vafraforritunum hefur rofinn engin áhrif fyrr en þú notar CadCraft Studio á tölvunni þinni.
:::

## Þú hefur stjórnina

- **Sérhver breyting er eitt skref í afturköllun**, merkt með nafni aðstoðarmannsins fyrir hana (til dæmis „Aðstoðarmaður: box“). {{key:Mod+Z}} tekur síðustu breytingu aðstoðarmannsins til baka í heild.
- **Þú veist þegar einn er tengdur.** Hnappur í forritastikunni nefnir aðstoðarmanninn meðan hann er tengdur. Smelltu á hann til að sjá hvað hann má gera, eða til að **aftengja** hann.
- **Virkni.** {{ui:Stillingar}} › {{ui:ModelCraft}} › {{ui:Aðstoðarmenn}} › {{ui:Virkni}} sýnir hvert kall: hvenær það var, hvaða verkfæri, og hvort það var framkvæmt eða hafnað. {{ui:Vista atburðaskrána}} geymir afrit.

## Hvað aðstoðarmaður getur beðið um

| Verkfæri | Heimild | Hvað það gerir |
|---|---|---|
| `app_info`, `model_describe` | Lesa | Eining líkansins, stærð, og sérhver hópur og íhlutur með staðsetningu sinni, hvort hann er lokað fast form og rúmmál hans |
| `view_screenshot` | Lesa | Mynd af þrívíddarsýninni eins og hún birtist |
| `box_add`, `cylinder_add` | Breyta | Kassi eða strokkur sem nýr hópur, á stað og í stærð sem þú eða hann gefur („3m“, „10'“ eða tala í einingu líkansins) |
| `instance_move`, `instances_erase` | Breyta | Færir eða eyðir hópum og íhlutum |
| `faces_list`, `materials_list` | Lesa | Fletir hóps eða lausrar rúmfræði (stefna, flatarmál og miðja hvers þeirra); efnin og litirnir sem hægt er að mála með |
| `push_pull` | Breyta | Ýtir eða togar flöt, eins og {{ui:Ýta/toga}} gerir |
| `paint` | Breyta | Málar fleti eða heilan hóp með lit eða efni |
| `group_make` | Breyta | Býr til hóp eða íhlut úr lausum fleti og hópum |
| `scene_add`, `scene_show` | Breyta | Vistar sýnina sem senu; fer í vistaða senu |
| `mesh_add` | Breyta | Möskvahlutur til að byrja með (teningur, kúla, strokkur …), eins og Möskvavinnusvæðið bætir honum við |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Lesa / Breyta | Breytingastafli möskva: spegill, fylki, undirskipting, skáskurður og fleira; ekkert er beitt til frambúðar |
| `usd_export` | Flytja út | Líkanið sem OpenUSD (.usda, .usdc eða .usdz), eins og vistun líkans sem USD skrifar það ([USD](topic:usd)); í möppu sem þú leyfðir í Studio, annars sem niðurhal |
| `render_still` | Flytja út | Mynd af sýninni eða vistaðri senu, eins og hnappurinn {{ui:Myndgera}} í myndgerðarglugganum býr hana til, með myndgerðarstillingunum þínum nema hann biðji um aðrar (senuforstilling: utandyra, innandyra, snið, nótt eða sjálfvirk; hröð eða hágæði, stærð, sýnatökur, himinn); PNG-mynd sem hann getur skoðað, eða PNG, EXR eða myndgerðarskrá í möppu sem þú leyfðir í Studio ([Myndgera mynd](topic:render)) |
| `render_queue` | Flytja út | Bætir hágæðamyndum í {{ui:Myndgerðarröð}} myndgerðarglugganum (sýnina eða vistaðar senur) og keyrir röðina; fullgerðu myndirnar fara í möppu sem þú leyfðir, eða eru áfram í myndgerðarglugganum fyrir þig. Þarfnast WebGPU |
| `link_push` | Breyta | Uppfærir líkan sem er tengt úr öðru forriti (sjá [Halda .3dm líkani lifandi](topic:live-3dm-link)) |
| `link_status` | Lesa | Segir hvort tengda líkanið er enn til staðar og hvenær það uppfærðist síðast |
| `undo` | Breyta | Afturkallar eigin skref |

Föst form sem aðstoðarmaður býr til koma sem hópar, þannig að þau sameinast aldrei því sem þú teiknaðir. Ekkert verkfæri vistar líkanið: vistun er áfram í þínum höndum, og útflutningur eða myndgerð krefst þess að **Flytja út** sé hakað. Myndgerð breytir engu í líkaninu; myndgerð vistaðrar senu færir sýnina að henni, eins og {{ui:Senur}} gerir.

## Ef eitthvað virkar ekki

- **Aðstoðarmaðurinn sér engin ModelCraft-verkfæri:** athugaðu hvort rofinn sé kveiktur í þessum glugga og hvort glugginn sé opinn í Studio.
- **„þarf breytingaheimild“:** hakaðu við **Breyta** undir {{ui:Aðstoðarmenn}} og spurðu aftur.
- **„401“ eða „token“-villur:** lykillinn breyttist (Studio var endurræst, eða {{ui:Nýr lykill}}). Afritaðu nýja lykilinn í stillingar aðstoðarmannsins.

## Sjá einnig

- [Uppskriftir fyrir gervigreindaraðstoðarmenn](common:assistants-recipes): unnin dæmi, hvert með þeim verkfærum sem það kallar á.
