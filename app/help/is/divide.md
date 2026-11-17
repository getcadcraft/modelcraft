---
title: Skipta jaðri eða ferli í jafna hluta
summary: Skiptu línu í jafna búta, eða gefðu boga eða hring nýjan fjölda hluta, með verkfærinu Skipta.
keywords: skipta, skipta jaðri, jafnir hlutar, jafnir hlutar, skipta jöðrum, hlutar, undirskipta, bogahlutar, hringhlutar, punktar eftir línu
from: 5c3ce3ed
---

{{ui:Divide}} skiptir jaðri í jafna búta, með horni á hverjum skurðarstað. Notaðu hornin til að festast við, til að byrja línur frá, eða til að ýta og toga hlutum flatar.

## Skipta jaðri

1. Smelltu á {{ui:Divide}} á verkfærastikunni, eða veldu jaðar og smelltu á {{ui:Divide…}} í {{ui:Entity info}}.
2. Bentu á jaðarinn. Merki sýna hvar skurðirnir verða: yfir miðjum jaðrinum eru það tveir hlutar; færðu nær enda fyrir fleiri.
3. Smelltu til að skipta honum í þá hluta sem sýndir eru. Eða skrifaðu tölu, eins og `5` (eða `5s`, eða `/5`), og ýttu á {{key:Enter}}: hann skiptist strax.

Hlutarnir haldast valdir og þetta er eitt skref í afturköllun. Flötur sem jaðarinn tilheyrir heldur lögun sinni og fær nýju hornin.

## Skipta boga eða hring

Bentu á hvaða hluta boga eða hrings sem er: hann skiptist í heild sinni.

- Bogi eða hringur sem engin önnur horn nota, og liggur flatt á sínum fleti, er **teiknaður aftur með svo mörgum hlutum** á réttum boga. Endar hans haldast þar sem þeir eru, og hann er áfram einn ferill, svo þú getur enn valið hann með einum smelli og breytt radíus hans í {{ui:Entity info}}. 24 hliða hringur sem er skiptur í 8 verður að átthyrningi.
- Allir aðrir ferlar — brún dreginnar sívalningsar, ferill teiknaður með {{ui:Curve}}, bogi með línum tengdum við hornin — fá ný horn með jafnri lengd eftir sér, og ekkert hreyfist.

## Með lyklum Modeler

Verkfærið er það sama með lyklum Modeler (Stillingar › ModelCraft › Lyklar, eða Modeler-valmyndarstíllinn), þar sem það er í valmyndinni {{ui:Mesh}} sem {{ui:Subdivide edges}}.

## Gott að vita

- Skrifaðar tölur eru frá 2 til 1000; ef bendillinn er færður fást allt að 100.
- Ferill teiknaður með {{ui:Curve}} heldur punktum sínum: eftir {{ui:Edit points}} er hann teiknaður aftur út frá þeim og nýju hornin hverfa.

Sjá einnig [Teikna fleti með línum, rétthyrningum, hringjum og bogum](topic:draw-faces) og [Skrifaðu nákvæmar stærðir í gildareitinn](topic:value-box).
