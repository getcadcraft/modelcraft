---
title: Panatilihing live ang .3dm model
summary: Baguhin ang model sa programang gumawa nito at makita rito ang pagbabago, mula sa Rhino 8 o isang Grasshopper definition, nang hindi muling sine-save at ini-import.
keywords: rhino, grasshopper, live link, live connection, 3dm, nurbs, parametric, link, sync, script, reference model, itulak
from: 331b0a7e
---

Ipagpatuloy ang pagmomodelo kung saan ka nagmomodelo, at gamitin ang resulta rito: para i-render ito, bigyan ng ilaw, o ayusin ang scene sa paligid nito. Bawat pagbabago sa kabilang programa ay nag-a-update ng isang grupo sa ModelCraft.

:::note
Kailangan ng link ang **CadCraft Studio** sa parehong computer. Hindi kayang kumonekta ng browser tab. Walang ipinapadalang anuman sa internet: nakikipag-usap ang script sa Studio sa sariling address ng computer na ito, gamit ang token.
:::

:::warning
Nasubukan ang link na ito gamit ang file writer ng script at isang stand-in para sa kabilang programa, hindi pa mismo sa loob ng Rhino o Grasshopper. Kung may pumalpak doon, sabihin sa amin ang sinabi nito.
:::

## Ihanda ito

1. Sa Studio, buksan ang ModelCraft. Sa {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Assistants}}, lagyan ng tick ang **Payagan ang AI assistant at script na gamitin ang ModelCraft**, saka i-click ang **Edit**.
2. Sa Studio, piliin ang {{ui:Connect an assistant}}. Ipinapakita nito ang address at ang token na ipe-paste mo sa ibaba.
3. I-download ang script: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Mula sa Rhino

1. Patakbuhin ang `cadcraft_link.py` sa script editor ng Rhino (Python 3 sa Rhino 8).
2. Sa unang pagkakataon, i-paste ang address at ang token. Naka-save ang mga ito sa `.cadcraft-link.json` sa home folder mo, hindi kailanman sa model. Gumagawa ang Studio ng bagong token sa bawat pagsisimula, kaya itatanong ulit ito ng script sa oras na iyon.

Papasok ang buong model bilang isang grupo na ipinangalan sa dokumento, halimbawa "chair (linked)". Pagkatapos, papasok ang bawat pagbabago kapag huminto ka sandali, at ang mga bagay lamang na nagbago ang ipinapadala. Patakbuhin ulit ang script para huminto.

## Mula sa Grasshopper

Patakbuhin muna ang script minsan sa Rhino para ma-save ang address at token.

1. Magdagdag ng Script component (Python 3) at i-paste dito ang buong `cadcraft_link.py`.
2. Bigyan ito ng mga input na ito: `G` (ang geometry, na may list access), `N` (pangalan, opsyonal), `On` (boolean toggle), at `Target` (opsyonal: `model` o `part`, kung bukas ang parehong app).
3. Gawing true ang `On`.

Bawat solve ay nagpapadala ng `G` at pinapalitan ang ipinadala ng component noong huli, kaya ang pag-drag ng slider ay nag-a-update ng grupo rito. Sinasabi ng output nitong `a` kung ano ang nangyari. May sariling grupo ang bawat component.

## Ang magagawa mo sa grupo

- **Ilipat, lagyan ng tag, at magtayo sa paligid nito.** Mananatili ang lugar ng grupo at ng tag nito sa bawat update, pati na ang lahat ng nasa tabi nito.
- **Huwag mag-edit sa loob nito.** Pinapalitan ng bawat update ang laman ng grupo. Pag-aari ng kabilang programa ang mga bagay na iyon.
- **Undo.** Ang mga update na magkasunod sa loob ng dalawang segundo ay nagbabahagi ng isang undo step, kaya binabawi ng {{key:Mod+Z}} ang buong drag. Ibabalik ng susunod na update ang model para tumugma.
- **I-save.** Pinananatili ng na-save na file ang link. Patakbuhin ulit ang script pagkatapos mong buksan ito, at ia-update ang parehong grupo.

## Ano ang papasok

Mesh, polysurface, surface at extrusion bilang mesh na nakikita mo sa screen, SubD bilang mesh nito, curve bilang edge, block bilang hiwalay na bagay kung saan sila nakalagay (hindi bilang component), layer bilang tag, at kulay at unit. Tingnan ang [Mag-import ng .3dm model](topic:import-3dm-files) para sa kung paano lumilitaw ang mga ito rito.

Hindi isinasama ang point, teksto, dimension, lights at iba pa, na may bilang sa kabilang programa.

**Isang direksyon lang.** Hindi bumabalik sa kabilang programa ang mga pagbabagong ginawa rito.

## Kapag may nagkamali

- **"No ModelCraft or PartCraft window allows it":** gawin ang hakbang 1 ng setup.
- **"Studio refused the token":** nag-restart ang Studio. Kopyahin ang bagong token at patakbuhin ulit ang script. Para sa Grasshopper, patakbuhin muna ito sa Rhino.
- **"Cannot reach CadCraft Studio":** hindi tumatakbo ang Studio, o nagbago ang address.
