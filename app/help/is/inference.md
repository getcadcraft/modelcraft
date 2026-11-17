---
title: Leiðsögn og smellun
summary: Hvað litaðar merkingar þýða, hvaða smellun vinnur, og hvernig læsa á stefnu með örvatökkum eða Shift.
keywords: leiðsögn, smellun, smella, endapunktur, miðpunktur, miðja flatar, á jaðri, á fleti, ás, rauður ás, grænn ás, blár ás, samsíða, hornrétt, læsa, shift, osnap
from: e78984e9
---

Meðan teikni- eða breytingarverkfæri er í gangi skoðar ModelCraft það sem er undir bendlinum og smellur að því gagnlegasta sem er nálægt. Merki sýnir hvað það fann og oddurinn neðst til vinstri nefnir það.

## Merki og oddar

| Oddur | Merki | Smellur að |
|---|---|---|
| Endapunktur | Grænn hringur | Endi jaðars |
| Miðpunktur | Blágrænn hringur | Miðja jaðars |
| Miðja flatar | Blár hringur | Miðja flatarins undir bendlinum |
| Leiðbeiningarpunktur | Grátt | Leiðbeiningarpunkt sem málbandið skildi eftir |
| Uppruni | Okkurgult | Þar sem rauði, græni og blái ásinn mætast |
| Á rauðum ási / Á grænum ási / Á bláum ási | Lína í þeim lit | Lína frá upphafspunktinum í þá átt |
| Samsíða jaðri / Hornrétt á jaðar | Fjólublá lína | Lína frá upphafspunktinum samsíða eða hornrétt á minnta jaðarinn (sjá að neðan) |
| Læst | Fjólublá lína | Stefna sem þú læstir með örvatakka eða {{key:Shift}} |
| Á jaðri | Rauður ferningur | Hvar sem er á jaðri |
| Á leiðbeiningu | Grátt | Hvar sem er á leiðbeiningarlínu |
| Á fleti | Blár tígull | Hvar sem er á fleti |
| Á plani | enginn | Planið sem þú byrjaðir á, þegar bendillinn er yfir auðu rými |
| Á jörðinni | enginn | Jörðin (rauð-græna planið), þegar ekkert annað er þar |

Þegar ásalína frá upphafspunktinum sker jaðar eða leiðbeiningu, smellur ModelCraft á skurðpunktinn og oddurinn nefnir hvort tveggja, til dæmis „Á rauðum ási, á jaðri“.

## Hvaða smellun vinnur

1. **Punktar** innan um 12 pixla: fyrst endapunktar, þá leiðbeiningarpunktar, miðpunktar, miðja flatarins undir bendlinum og uppruninn.
2. **Stefnur** frá upphafspunktinum: rauði, græni og blái ásinn, og samsíða eða hornrétt á minnta jaðarinn.
3. **Á jaðri** eða leiðbeiningarlínu.
4. **Á fleti.**
5. **Teikniplanið**, eða jörðin.

Hlutir sem eru faldir á bak við flöt smellast aldrei. Snúðu sýninni með {{ui:Snúast}} svo þú sjáir punktinn sem þú vilt.

## Teikna á flöt frá punkti

{{ui:Rétthyrningur}}, {{ui:Hringur}} eða {{ui:Marghyrningur}} sem byrjar á horni, miðpunkti, jaðri eða miðju flatar er teiknaður **í plani flatarins undir bendlinum**, og sker þann flöt. Jaðar tilheyrir tveimur flötum, svo sú hlið jaðarsins sem bendillinn er á ræður: til að teikna á enda á löngum kassa, byrjaðu á miðju eins af jöðrum hans með bendilinn rétt innan við endaflötinn.

## Samsíða og hornrétt

ModelCraft man **síðasta jaðarinn sem bendillinn fór yfir áður en þú smelltir fyrst**. Að byrja á horni eða á jaðri telst sem að hafa farið yfir þann jaðar. Þegar verkfærið er í gangi koma aðrir jaðrar sem þú sveimar yfir ekki í staðinn fyrir hann.

Til að teikna línu samsíða núverandi jaðri:

1. Ýttu á {{key:L}} og sveimaðu yfir jaðarinn sem þú vilt passa við.
2. Færðu þig að upphafspunktinum, án þess að fara yfir aðra jaðra á leiðinni ef þú getur, og smelltu.
3. Færðu þig í stefnu samsíða þeim jaðri. Línan verður fjólublá og oddurinn segir „Samsíða jaðri“. Hornrétt virkar eins, innan planisins sem þú teiknar á.

Ef rangur jaðar var munaður, ýttu á {{key:Esc}}, sveimaðu yfir rétta jaðarinn, og byrjaðu aftur.

## Læsa stefnu

Eftir fyrsta smell verkfæris geturðu haldið næsta punkti á einni línu:

| Takki | Læsir við |
|---|---|
| {{key:Right}} | Rauða ásinn |
| {{key:Left}} | Græna ásinn |
| {{key:Up}} | Bláa ásinn (beint upp) |
| {{key:Down}} | Samsíða minnta jaðrinum (sjá að ofan) |

Ýttu aftur á sömu örina til að opna. Stöðustikan segir „Læst við rauða ásinn. Ýttu á sömu örina til að opna.“

Meðan læst er rennur punkturinn eftir línunni í átt að því sem bendillinn er á, og raðast enn upp með punktum sem þú sveimar yfir: sveimaðu yfir horn annars kassa til að teikna línu eftir rauðu nákvæmlega þangað til að horninu.

**{{key:Shift}}** læsir þeirri stefnu sem þú ert smelltur að núna (ás, eða samsíða), meðan þú heldur honum niðri. Slepptu til að opna.

Læsingar virka í {{ui:Lína}}, {{ui:Rétthyrningur}}, {{ui:Hringur}}, {{ui:Marghyrningur}}, {{ui:Færa}}, {{ui:Mælikvarði}} og {{ui:Málband}}. Fyrir fyrsta smell snúa örvatakkarnir sýninni í staðinn.

## Inni í hópi

Meðan þú breytir inni í hópi eða einingu eru ásarnir eigin ásar hópsins (þeir hreyfast með honum, og snúast með honum ef hann var snúinn). Smellur finnur enn punkta og jaðra utan hópsins, svo þú getur raðað hlutum upp með restinni af líkaninu.
