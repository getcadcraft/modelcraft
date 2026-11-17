---
title: Roter og skalér
summary: Drej ting om et punkt ved at klikke eller ved at skrive grader, og ændr størrelsen jævnt med en faktor.
keywords: skalér greb, stræk, ikke-ensartet, pr. akse, vend, spejl, spejlet kopi, vend langs, roter, drej, vinkel, grader, vinkelmåler, skalér, ændr størrelse, forstør, formindsk, faktor, ensartet skalering
from: 45cdcb49
---

## Roter

{{ui:Roter}} ({{key:Q}}) drejer markeringen om et midtpunkt. Det tager tre klik: midtpunktet, en startretning og slutretningen.

1. Markér det, du vil dreje. Hvis intet er markeret, tager Roter det, du klikker på først.
2. Tryk {{key:Q}}. En ring følger markøren og viser det plan, du drejer i.
3. Klik på rotationens midtpunkt.
   - På jorden eller i tomt rum ligger ringen fladt (blå): drejningen sker om en lodret akse, som når man drejer en bygning på sin grund.
   - På en flade ligger ringen i fladens plan: drejningen sker om fladens egen retning. Klik på en væg for at dreje noget om en vandret akse.
4. Klik på et punkt, der angiver, hvor vinklen starter, fx langs en kant på det, du drejer.
5. Flyt markøren rundt om midtpunktet. Vinklen vises i spidsen og i værdifeltet ({{ui:Vinkel}}). Den klikker i trin på 15°, når du kommer tæt på et.
6. Klik for at afslutte, eller skriv vinklen i grader og tryk {{key:Enter}}: `90`, `45`, `-30`.

   Positive vinkler drejer mod uret, set fra den side, ringen vender imod.

Tryk {{key:Ctrl}} (eller {{key:Alt}}), mens du roterer, for at dreje en **kopi** og lade originalen blive, ligesom med Flyt. Tippen siger, om kopiering er slået til, og et nyt tryk på tasten slår det fra. Skriv `3x` lige efter en roteret kopi for flere kopier omkring det samme midtpunkt.

Ligesom Flyt vrider det at rotere en del af sammenhængende geometri de flader, der hænger på den. Gruppér ting først for at dreje dem hele.

:::note
Tippen siger, at piletasterne vælger rotationsaksen, men i denne version kredser de i stedet om visningen, før første klik. For at vælge aksen, klik på midtpunktet på en flade, der vender den vej, du ønsker. Se [Ikke lavet endnu](topic:not-built-yet).
:::

## Skalér

{{ui:Skalér}} ({{key:S}}) ændrer størrelsen på markeringen. Markér det, du vil ændre størrelsen på, først, og tryk derefter {{key:S}}: små kvadrater (greb) vises på hjørnerne, kanterne og midterne af siderne på dens boks.

### Stræk eller skalér med grebene

- Et **hjørnegreb** skalerer jævnt i alle retninger, om det modsatte hjørne.
- Grebet på midten af en **side** strækker kun langs den retning, om den modsatte side: gør en boks længere uden at gøre den højere.
- Grebet på midten af en **boksekant** strækker i de to retninger på tværs af den.
- Hold {{key:Ctrl}}, når du klikker på et greb, for at skalere om boksens midte i stedet.

Klik på et greb, flyt markøren, og klik igen; eller klik på grebet og skriv en faktor (`2` fordobler, `0.5` halverer) og tryk {{key:Enter}}. For at give hver retning sin egen faktor, skriv tre, for rød, grøn og blå: `2,1,0.5`. Inde i en åben gruppe er retningerne gruppens egne.

### Skalér om et vilkårligt punkt

Klik et andet sted end på et greb for at skalere jævnt om et punkt efter eget valg. Det tager tre klik:

1. Markér det, du vil ændre størrelsen på. Hvis intet er markeret, tager Skalér det, du klikker på først.
2. Tryk {{key:S}}.
3. Klik på det punkt, der bliver stående (ikke på et greb), fx et nederste hjørne.
4. Klik på et referencepunkt. Dets afstand fra det første punkt tæller som 1×.
5. Flyt markøren mod eller væk fra det første punkt. Faktoren vises i spidsen og i værdifeltet ({{ui:Skalér}}).
6. Klik for at afslutte, eller skriv en faktor og tryk {{key:Enter}}: `2` fordobler størrelsen, `0.5` halverer den.

### Skalér til en præcis størrelse

For at gøre noget til en præcis længde, beregn faktoren: ny længde divideret med nuværende længde. I tre-klik-tilstanden udfører værdifeltet regning, så skriv `4.2/3.6` for at gøre en 3.6 m væg 4.2 m lang. Et grebs værdifelt tager kun almindelige tal, så beregn faktoren først (4.2 divideret med 3.6 er ca. 1.1667). Markér kanten først for at læse dens nuværende længde i {{ui:Objektinfo}}.

### Ret en import, der kom ind i den forkerte størrelse

OBJ-filer har ingen enhed, så en model tegnet i millimeter kommer ind 1000 gange for stor. Markér den importerede gruppe, tryk {{key:S}}, klik på et hjørnegreb, skriv `0.001` og tryk {{key:Enter}}. For en model tegnet i tommer, skriv `0.0254`.

## Gode at vide

- Skalering om et punkt med tre klik er ensartet. For at strække i kun én retning, brug et side- eller kantgreb (se ovenfor).
- Skalering af en gruppe eller komponent ændrer den kopi, du skalerede; andre kopier af en komponent beholder deres størrelse.
- Tryk {{key:Esc}} før det sidste klik for at annullere.

## Vend

{{ui:Rediger}} › {{ui:Mere}} › {{ui:Vend langs rød}}, {{ui:Vend langs grøn}} eller {{ui:Vend langs blå}} spejler markeringen på stedet, gennem midten af dens boks: en venstredrejet trappe bliver en højredrejet. Flader vender stadig udad, og en gruppe eller komponent spejles som helhed (dens indre omskrives ikke).

{{ui:Vendt kopi langs rød}} (og grøn, blå) lader originalen blive, hvor den er, og sætter en spejlet kopi ved siden af den, på tværs af markeringens boks' modsatte side: den anden dør i et par, den anden fløj på en bygning. Løs geometri, der rører der, slutter sig til originalen, som berørende geometri altid gør; gør først originalen til en gruppe for at holde dem adskilt.

Inde i en åben gruppe er rød, grøn og blå gruppens egne akser.
