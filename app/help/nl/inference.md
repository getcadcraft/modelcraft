---
title: Inferentie en snappen
summary: Wat de gekleurde markeringen betekenen, welke snap wint, en hoe u een richting vergrendelt met de pijltjestoetsen of Shift.
keywords: inferentie, snap, snappen, eindpunt, middelpunt, midden van vlak, middelpunt, op rand, op vlak, as, rode as, groene as, blauwe as, evenwijdig, loodrecht, vergrendelen, shift, objectsnap
from: e78984e9
---

Terwijl een teken- of bewerkingsgereedschap werkt, kijkt ModelCraft naar wat onder de aanwijzer ligt en snapt het aan het meest bruikbare in de buurt. Een markering toont wat het vond, en de tip linksonder noemt het.

## Markeringen en tips

| Tip | Markering | Snapt aan |
|---|---|---|
| Eindpunt | Groene cirkel | Het uiteinde van een rand |
| Middelpunt | Cyaan cirkel | Het midden van een rand |
| Midden van vlak | Blauwe cirkel | Het midden van het vlak onder de aanwijzer |
| Hulppunt | Grijs | Een hulppunt dat het meetlint achterliet |
| Oorsprong | Oker | Waar de rode, groene en blauwe assen samenkomen |
| Op rode as / Op groene as / Op blauwe as | Een lijn in die kleur | Een lijn vanaf uw startpunt in die richting |
| Evenwijdig aan rand / Loodrecht op rand | Magenta lijn | Een lijn vanaf uw startpunt, evenwijdig of loodrecht op de onthouden rand (zie hieronder) |
| Vergrendeld | Magenta lijn | Een richting die u vergrendelde met een pijltjestoets of {{key:Shift}} |
| Op rand | Rood vierkant | Ergens langs een rand |
| Op hulplijn | Grijs | Ergens langs een hulplijn |
| Op vlak | Blauwe ruit | Ergens op een vlak |
| Op tekenvlak | geen | Het vlak waarop u begon, wanneer de aanwijzer boven lege ruimte staat |
| Op de grond | geen | De grond (het rood-groene vlak), wanneer er niets anders is |

Wanneer een asleiding vanaf uw startpunt een rand of hulplijn kruist, snapt ModelCraft aan het kruispunt en noemt de tip beide, zoals "Op rode as, op rand".

## Welke snap wint

1. **Punten** binnen ongeveer 12 pixels: eerst eindpunten, dan hulppunten, middelpunten, het midden van het vlak onder de aanwijzer en de oorsprong.
2. **Richtingen** vanaf het startpunt: de rode, groene en blauwe assen, en evenwijdig of loodrecht op de onthouden rand.
3. **Op een rand** of een hulplijn.
4. **Op een vlak.**
5. **Het tekenvlak**, of de grond.

Dingen die achter een vlak verborgen zijn, snappen nooit. Draai de weergave zodat u het gewenste punt ziet.

## Op een vlak tekenen vanaf een punt

Een {{ui:Rechthoek}}, {{ui:Cirkel}} of {{ui:Veelhoek}} die begint op een hoek, een middelpunt, een rand of het midden van een vlak, wordt getekend **in het vlak van het vlak onder de aanwijzer**, en snijdt dat vlak. Een rand hoort bij twee vlakken, dus de kant van de rand waar de aanwijzer ligt, beslist. Om op het uiteinde van een lange doos te tekenen, begint u vanaf het midden van een van de randen, met de aanwijzer net binnen het eindvlak.

## Evenwijdig en loodrecht

ModelCraft onthoudt de **laatste rand die de aanwijzer passeerde vóór uw eerste klik**. Beginnen op een hoek of op een rand telt als passeren van die rand. Zodra het gereedschap werkt, vervangen andere randen waarover u zweeft die niet.

Om een lijn evenwijdig aan een bestaande rand te tekenen:

1. Druk op {{key:L}} en zweef over de rand die u wilt volgen.
2. Beweeg naar het startpunt, zonder onderweg andere randen te kruisen als dat kan, en klik.
3. Beweeg in de richting evenwijdig aan die rand. De lijn wordt magenta en de tip zegt "Evenwijdig aan rand". Loodrecht werkt op dezelfde manier, binnen het vlak waarin u tekent.

Als de verkeerde rand werd onthouden, druk op {{key:Esc}}, zweef over de juiste rand en begin opnieuw.

## Een richting vergrendelen

Na de eerste klik van een gereedschap kunt u het volgende punt op één lijn houden:

| Toets | Vergrendelt op |
|---|---|
| {{key:Right}} | De rode as |
| {{key:Left}} | De groene as |
| {{key:Up}} | De blauwe as (recht omhoog) |
| {{key:Down}} | Evenwijdig aan de onthouden rand (zie hierboven) |

Druk opnieuw op dezelfde pijl om te ontgrendelen. De statusbalk zegt "Vergrendeld op de rode as. Druk opnieuw op dezelfde pijl om te ontgrendelen."

Terwijl het vergrendeld is, schuift het punt langs de lijn naar waar de aanwijzer is, en sluit het nog steeds aan op punten waarover u zweeft: zweef over de hoek van een andere doos om een lijn langs rood precies zo ver te tekenen als die hoek.

**{{key:Shift}}** vergrendelt de richting waarop u nu gesnapt bent (een as, of evenwijdig), zolang u hem ingedrukt houdt. Laat los om te ontgrendelen.

Vergrendelen werkt in {{ui:Lijn}}, {{ui:Rechthoek}}, {{ui:Cirkel}}, {{ui:Veelhoek}}, {{ui:Verplaatsen}}, {{ui:Schalen}} en {{ui:Meetlint}}. Vóór de eerste klik draaien de pijltjestoetsen in plaats daarvan de weergave.

## Binnen een groep

Terwijl u binnen een groep of component bewerkt, zijn de assen de eigen assen van de groep (ze verschuiven mee, en draaien mee als die was gedraaid). Snaps vinden nog steeds punten en randen buiten de groep, zodat u dingen kunt uitlijnen met de rest van het model.
