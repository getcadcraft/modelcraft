---
title: Gereedschapslijst
summary: Elk ModelCraft-gereedschap met zijn sneltoets, wat elke klik doet, en wat u in het waardeveld kunt typen terwijl het werkt.
keywords: gereedschappen, werkbalk, opdrachten, lijst, lijn, rechthoek, cirkel, veelhoek, offset, boog, kromme, spline, volg mij, uitvegen, 2-puntsboog, boog vanuit middelpunt, selecteren, duwen trekken, verplaatsen, draaien, schalen, gum, meetlint, maatvoering, verschuiven, zoomen, component plaatsen
from: e08a274f
---

De tip in de statusbalk zegt altijd wat het huidige gereedschap hierna wil. {{key:Esc}} annuleert wat een gereedschap midden in een handeling doet.

## Tekengereedschappen

| Gereedschap | Sneltoets | Klikken | Typ in het waardeveld |
|---|---|---|---|
| {{ui:Lijn}} | {{key:L}} | Start, daarna elk volgend punt. Stopt wanneer een vlak sluit, of met {{key:Esc}} | Een lengte in de richting van de aanwijzer; `[x,y,z]` een punt; `<dx,dy,dz>` een verschuiving ({{ui:Lengte}}) |
| {{ui:Rechthoek}} | {{key:R}} | Eerste hoek (grond of een vlak), tegenoverliggende hoek | Breedte en diepte: `4m,3m` ({{ui:Maatvoeringen}}) |
| {{ui:Cirkel}} | {{key:C}} | Middelpunt (grond of een vlak), een punt op de rand | Vóór de eerste klik: zijden, `24s` of `24` ({{ui:Zijden}}). Daarna: de straal ({{ui:Straal}}) |
| {{ui:Veelhoek}} | {{key:N}} | Middelpunt, een hoek | Hetzelfde als Cirkel; begint met 6 zijden |
| {{ui:Boog}} | {{key:A}} | Start, eind, daarna de bolling | De lengte van de koorde na het begin ({{ui:Lengte}}); de bolling na het eind ({{ui:Bolling}}); `12s` voor segmenten |
| {{ui:Gradenboog}} | — | Middelpunt, 0°-punt, daarna de hoek | De hoek in graden ({{ui:Hoek}}) |
| {{ui:Volg mij}} | — | Selecteer een pad, klik daarna op het vlak (of klik op het vlak en daarna op een rand van het pad) | — |
| {{ui:Verven}} | {{key:B}} | Een vlak, groep of component | — ({{key:Ctrl}} verbonden, {{key:Shift}} alles van die kleur, {{key:Alt}} een kleur oppakken) |
| {{ui:Offset}} | {{key:F}} | Een vlak (of selecteer eerst een vlak of randen), daarna de zijde en de afstand | De afstand ({{ui:Afstand}}); naar binnen in het vlak is naar binnen |
| {{ui:Kromme}} | — | Punten waar de kromme doorheen gaat; {{key:Enter}} of dubbelklikken beëindigt | Een lengte langs de aanwijzer, `[x,y,z]` of `<dx,dy,dz>` voor het volgende punt |
| {{ui:Boog vanuit middelpunt}} | — | Middelpunt, start, daarna het eind | De straal na het middelpunt; de hoek in graden na het begin; `12s` voor segmenten |

## Bewerkingsgereedschappen

| Gereedschap | Sneltoets | Klikken | Typ in het waardeveld |
|---|---|---|---|
| {{ui:Selecteren}} | {{key:Space}} | Klikken, dubbelklikken, drievoudig klikken, een kader slepen. Zie [Dingen selecteren](topic:select) | Met één maat of rand geselecteerd: een nieuwe lengte, die het model van formaat laat veranderen |
| {{ui:Duwen/trekken}} | {{key:P}} | Het vlak, daarna de afstand. Dubbelklik op een vlak om de laatste afstand te herhalen | Een afstand; negatief gaat de andere kant op ({{ui:Afstand}}) |
| {{ui:Verplaatsen}} | {{key:M}} | Van een punt, naar een punt. Houd {{key:Ctrl}} of {{key:Alt}} vast om te kopiëren | Een afstand in de richting van de aanwijzer, `<dx,dy,dz>` of `[x,y,z]` ({{ui:Afstand}}). Na een kopie: `3x` of `/3` |
| {{ui:Draaien}} | {{key:Q}} | Middelpunt (op een vlak om in zijn vlak te draaien), startrichting, eindrichting | De hoek in graden ({{ui:Hoek}}) |
| {{ui:Schalen}} | {{key:S}} | Het punt dat blijft staan, een referentiepunt, de nieuwe maat | Een factor: `2`, `0.5` ({{ui:Schalen}}) |
| {{ui:Gum}} | {{key:E}} | Klik of sleep over randen, groepen, hulplijnen en maatvoeringen | niets |
| {{ui:Meetlint}} | {{key:T}} | Van een rand: een evenwijdige hulplijn. Van een punt: meet en laat een hulppunt achter | De verschuiving ({{ui:Offset}}) of de afstand ({{ui:Lengte}}) |
| {{ui:Maatvoering}} | {{key:D}} | Twee hoeken (of één rand), daarna waar de maatlijn komt. Zie [Maatvoering en formaat wijzigen](topic:dimensions) | De verschuiving ({{ui:Offset}}). Direct daarna: een nieuwe lengte, die het model van formaat laat veranderen |

{{ui:Verplaatsen}}, {{ui:Draaien}} en {{ui:Schalen}} werken op de selectie. Als niets is geselecteerd, nemen ze eerst wat u klikt (een vlak brengt zijn randen mee).

## Cameragereedschappen

| Gereedschap | Sneltoets | Slepen om |
|---|---|---|
| {{ui:Draaien}} | {{key:O}} | Draaien rond het deel van het model onder de aanwijzer ({{key:Shift}} verschuift) |
| {{ui:Verschuiven}} | {{key:H}} | De weergave verschuiven |
| {{ui:Zoomen}} | {{key:Z}} | Zoomen: omhoog is inzoomen, omlaag uitzoomen |
| {{ui:Alles}} | {{key:Shift+Z}} | (een knop, geen gereedschap) Het hele model in beeld brengen |

U hebt deze zelden nodig met een muis: middelslepen draait, rechterslepen verschuift en het wiel zoomt bij elk gereedschap. Zie [Draaien, verschuiven en zoomen](topic:orbit-pan-zoom).

## Ordenen

| Knop | Sneltoets | Doet |
|---|---|---|
| {{ui:Component}} | {{key:G}} | Maakt van de selectie een component |
| {{ui:Groep}} | {{key:Shift+G}} | Maakt van de selectie een groep |
| {{ui:Ontbinden}} | geen | Zet de geselecteerde groepen en componenten terug in losse geometrie |

## Component plaatsen

Niet op de werkbalk: klik op {{ui:Plaatsen}} naast een component in het paneel {{ui:Componenten}}. Klik één keer waar het oorsprongspunt van de component komt; het gereedschap keert daarna terug naar {{ui:Selecteren}}.
