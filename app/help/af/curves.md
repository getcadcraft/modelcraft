---
title: Kurwe-voorwerpe
summary: Teken Bézier-, NURBS- en reguitsegment-kurwes, gee hulle 'n dikte, 'n wydte of 'n taps, vul plat kurwes, stel teks as 'n kurwe, en draai hulle in vlakmodelle.
keywords: kurwe, krommes, bezier, nurbs, spline, splines, pad, buis, pyp, kabel, tou, skuinskant, ekstrudeer, taps, kanteling, radius, vul, profiel, teks, letters, logo, kromme na vlakmodel
from: 602bf077
---

'n **kurwe-voorwerp** is 'n kurwe wat 'n vorm maak: 'n buis langs dit (skuinskant), 'n band (ekstrudeer), 'n taps horing (taps), of — wanneer dit plat en geslote is — 'n gevulde plaat of letters. Die vorm volg die kurwe: skuif 'n punt en die buis beweeg saam daarmee. Wanneer die vorm reg is, draai dit in 'n vlakmodel.

## Voeg 'n kurwe by

Kies {{ui:Kurwe}} in die werkruimtelys en druk {{ui:Voeg by}}:

| Soort | Wat dit is |
| --- | --- |
| Bézier-kurwe, Bézier-sirkel | Gaan deur sy punte; elke punt het twee handvatsels wat die kurwe se rigting bepaal |
| NURBS-kurwe, NURBS-sirkel, Pad | Glad, getrek na sy punte (dit begin en eindig op sy eindpunte); elke punt het 'n gewig |
| Teks | Jou teks as plat, gevulde letteromtrekke |

'n Nuwe kurwe kry 'n dun buis sodat dit gesien en gekies kan word; stel sy skuinskantdiepte op 0 vir 'n kaal kurwe.

Jy kan ook begin met iets wat getek is: kies 'n boog, 'n sirkel, 'n veelhoek of 'n getekende kurwe in die Model-werkruimte en druk {{ui:Maak ’n kromme-voorwerp}} in Entiteitinligting. Die getekende lyne bly.

## Wysig die punte

Dubbelklik 'n kurwe-voorwerp (of kies dit en kies {{ui:Kurwe}}) om dit te wysig.

- Klik 'n punt of handvatsel ({{key:Shift}} voeg by of verwyder); sleep dit om dit te skuif. Sleep op leë ruimte om met 'n boks te kies.
- {{ui:Verleng}} ({{key:E}}, of {{key:Ctrl}}+klik) voeg 'n punt by na die gekose einde, by die wyser.
- {{ui:Verdeel}} ({{key:W}}) plaas 'n punt tussen elke paar gekose bure; 'n Bézier behou sy vorm.
- {{ui:Skuif}}, {{ui:Draai}}, {{ui:Skaal}} skuif die gekose punte met die wyser (modelleerder-sleutels {{key:G}} {{key:R}} {{key:S}}, stoot/trek-sleutels {{key:M}} {{key:Q}} {{key:S}}); klik om te hou, {{key:Esc}} om te kanselleer.
- {{ui:Maak toe}} ({{key:C}}) sluit 'n oop spline of open 'n geslote een; {{ui:Keer om}} ({{key:Shift+R}}) laat dit die ander kant toe loop.
- Bézier-handvatsels: {{ui:Gladmaak}} ({{key:V}}) plaas hulle vir 'n gladde kurwe, {{ui:Hoek}} ({{key:Shift+V}}) rig hulle na die bure, {{ui:Vry}} ({{key:Alt+V}}) laat hulle waar jy hulle plaas. Om 'n handvatsel te sleep, maak dit vry.
- {{ui:Bézier}}, {{ui:NURBS}} en {{ui:Poli}} verander die tipe van die gekose splines en behou die punte.

Elke verandering is een ontdoenstap.

## Vorm

Die instellings is in die paneel (en in Entiteitinligting in die Model-werkruimte):

- **Vorm:** 3D-kurwes gaan enige rigting; 'n plat kurwe bly in sy eie vlak en kan gevul word.
- **Vul geslote splines** (plat): die omtrekke word 'n plaat; 'n omtrek binne 'n ander is 'n gat, so letters behou hul gate.
- **Ekstrudeer:** die helfte van die band se wydte (oop of 3D-kurwes), of die helfte van die plaat se dikte (gevul).
- **Skuinskantdiepte** en **rondheid:** 'n ronde buis langs die kurwe (met ekstrudeer: 'n ronde band); op 'n gevulde vorm, 'n ronde rand.
- **Sluit die eindes:** doppe op 'n oop buis.
- **Taps langs dit:** skaal eweredig langs elke spline, byvoorbeeld `1, 0.2` vir 'n horing, `0, 1, 0` vir 'n spoel.
- **Gladheid** en, vir NURBS, **orde**: hoe fyn dit getrek word, en hoe glad (2 reguit … 6 gladste).
- Met punte gekies: **radius** (die buis se dikte daar, keer die skuinskant), **kanteling** (draai die band om die kurwe) en, vir NURBS, **gewig**.

Modifiseerders werk bo-op 'n kurwe-voorwerp soos op 'n vlakmodel: 'n Skikking langs dit, 'n Spieël, 'n Onderverdelingsoppervlak. Sien [Modifiseerders op 'n vlakmodel](topic:modifiers).

## Draai dit in 'n vlakmodel

{{ui:Na vlakmodel}} (in die Kurwe-werkruimte of in Entiteitinligting, {{ui:Kromme na vlakmodel}}) maak die kurwe-voorwerp die vlakmodel wat dit nou wys; sy modifiseerders bly bo-op. Wysig dit dan in die Vlakmodel-werkruimte. Ontdoen draai dit terug.

Sien ook [Vlakmodelle](topic:meshes) en [Wysig 'n vlakmodel](topic:mesh-edit).
