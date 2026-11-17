---
title: Starter library
summary: Mga tatlumpung handa nang bagay na ilalagay sa model: pinto at bintana, muwebles, kusina at banyo, haligi at hagdan, puno, tao at kotse.
keywords: furnish, furnish a room, layout ng muwebles, bedroom, living room, kusina, banyo, opisina, rendering, library, starter, entourage, puno, tao, kotse, halaman, shrub, hedge, component, muwebles, pinto, bintana, upuan, mesa, sofa, kama, toilet, hagdan, haligi, warehouse, handa na
from: 3c06b69c
---

Ang {{ui:Starter library}} ay nagbibigay ng pang-araw-araw na bagay sa totoong laki, para madaling mabasa ang model sa unang tingin: isang pinto para ipakita ang laki ng kuwarto, isang kotse sa driveway, at mga tao at puno sa paligid ng gusali.

## Maglagay ng isa

1. Sa {{ui:Components}} sa kaliwa, i-click ang {{ui:Starter library}}.
2. Pumili ng bagay, gaya ng {{ui:Chair}}.
3. I-click kung saan ito ilalagay.

Sa sahig, mesa o lupa, nakatayo ito roon. **Ang mga pinto at bintana** ay ginawang ilagay sa mga pader: i-click sa pader at nakatayo sila roon, nakaharap palabas. (Nakapatong sila sa mukha ng pader; hindi sila gumagawa ng bukana. Para gumawa ng isa, gumuhit ng rectangle sa pader kung saan pupunta ang bintana at itulak ito sa loob.)

Ang bawat bagay ay isang **component**: kapag pinili mo ulit ang parehong isa, may ilalagay na ibang kopya, at magbabago ang bawat kopya kapag may ine-edit ka sa isa. Lumalabas din ito sa listahan ng {{ui:Components}}, kasama ang {{ui:Place}} para magdagdag pa.

## Ano ang nasa loob

| Grupo | Mga bagay |
|---|---|
| Mga pinto at bintana | Pinto, dobleng pinto, bintana, malapad na bintana, pinto ng garahe |
| Muwebles | Mesa sa kainan, bilog na mesa, upuan, bar stool, sofa, armchair, dobleng at single na kama, desk, bookshelf, wardrobe |
| Kusina at banyo | Base at wall cabinet, kitchen counter, ref, kalan, sink unit, toilet, bathtub, shower, washbasin |
| Gusali | Tuwid na hagdan (15 riser na tig-18 cm), bilog at parisukat na haligi, biga |
| Lugar at tao | Puno, shrub, tao (1.75 m), kotse |
| Entourage: mga puno, tao at kotse | Nangungulag na puno (4, 6 at 10 m), isang conifer, isang columnar na puno, bilog at maliliit na shrub, isang hedge, isang halamang nasa paso, mga taong nakatayo at naglalakad, isang bata, isang sedan at isang SUV: mas bilog na hugis sa sariling kulay, para sa [mga rendered na larawan](topic:render) at site plan |

Simpleng hugis ang mga ito, gawa sa mga solid na maaari mong ipinta, i-scale o [gawing kakaiba](topic:groups-components) at baguhin. Nakabitin ang wall cabinet sa 1.45 m sa itaas ng kinaroroonan ng click mo.

Iginuguhit ng CadCraft ang entourage at libre itong gamitin para sa anuman (CC0); nasa Library library ang parehong mga puno, tao at kotse para sa BimCraft at CadCraft. Ipinipinturahan ng materyal na {{ui:Tinted glass}} ang mga bintana ng kotse, kaya see-through ang mga ito sa mga larawan.

## Ayusan ng muwebles ang kuwarto para sa rendering

Piliin ang sahig ng isang kuwarto (isang level face na nakatingin paitaas, sa model o sa loob ng group) at gamitin ang **Organize › Furnish a room…** (ang button na **Furnish**). Piliin kung ano ang kuwarto (bedroom, living room, dining room, kitchen, bathroom o office), o hayaang hulaan ito mula sa laki. Ang starter na muwebles ay inilalagay sa tabi ng mga pader, mula sa pinakamahabang pader paikot, walang nagkakapatong, at nananatiling libre ang swing ng anumang starter door na nakalagay sa pader ng kuwarto (at ang lapad ng mga bintana nito, sa harap ng matataas na piraso). Ito ay default na layout ayon sa mga patakaran para suriin mo, hindi disenyo: palaging ang parehong layout ang nakukuha ng parehong kuwarto.

Ang lahat ay pumapasok sa **isang group** na may tag na **Muwebles**, bilang isang undo step: i-Undo, burahin ang group, o itago ang tag para alisin ito. Ang piraso na hindi kasya ay pinangalanan sa status line at nakalista sa **Problema** bilang tala. Gumagamit ang **Furnish a room** ng BimCraft ng parehong mga patakaran.
