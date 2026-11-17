---
title: Tegn flader med linjer, rektangler, cirkler og buer
summary: Lav flade flader på jorden eller på andre flader, del dem med linjer, og tegn cirkler og polygoner med det antal sider, du ønsker.
keywords: tegn, linje, rektangel, cirkel, polygon, forskyd, indrykning, ramme, kant, bue, kurve, spline, glat, kabel, sti, buet, radius, kurve, flade, plantegning, fodaftryk, del, sider, segmenter, omrids, blyant
from: b6d7b7dd
---

Alt i ModelCraft starter som en flad **flade**: en overflade lukket af kanter. Du kan tegne en flade direkte med {{ui:Rektangel}}, {{ui:Cirkel}} eller {{ui:Polygon}}, eller tegne omridset én kant ad gangen med {{ui:Linje}}. Flader er det, som [Skub/træk](topic:push-pull) gør til massive legemer.

## Tegn et rektangel

1. Tryk på {{key:R}}.
2. Klik på det første hjørne: på jorden eller på en hvilken som helst flade på modellen.
3. Flyt markøren. Rektanglet bliver på jorden (eller på den flade, du startede på), og værdifeltet ({{ui:Mål}}) viser dens bredde og dybde. Tippet siger »Kvadrat«, når siderne er lige lange.

   Hvis du vil tegne på et andet plan, peg på det: en flade, der går gennem det første hjørne, lægger rektanglet på den flade, og fangst til et punkt uden for planet (et endepunkt, en kant eller den blå akse) rejser rektanglet op gennem begge hjørner. Fang tilbage til et punkt på det første plan, så ligger det ned igen. For at fastholde ét plan trykker du på en piletast: {{key:Up}} holder rektanglet vandret (det blå plan), {{key:Right}} på det røde plan, {{key:Left}} på det grønne plan. Tryk på samme tast igen for at låse op.
4. Klik på det modsatte hjørne, eller skriv de to mål adskilt af et komma og tryk {{key:Enter}}: `4m,3m`, `4000,3000` i en model i millimeter, eller `12',10'6"` i fod og tommer.

   En flade vises med fire kanter rundt om sig.

De skrevne mål går i den retning, du pegede: hvis markøren er til venstre for det første hjørne, når du skriver, vokser rektanglet mod venstre.

:::warning
Kommaet adskiller de to mål, så det kan ikke være et decimaltegn. Skriv `2.5m,3m`, aldrig `2,5m`.
:::

## Tegn en cirkel eller en polygon

1. Tryk på {{key:C}} for en cirkel eller {{key:N}} for en polygon.
2. For at ændre antal sider skriver du tallet, før du klikker: `12s` (eller bare `12`) og {{key:Enter}}. En cirkel starter med 24 sider og en polygon med 6. Tippet viser det aktuelle tal, og ModelCraft beholder det til næste cirkel, indtil du ændrer det eller skifter værktøj.
3. Klik på centrum, på jorden eller på en flade. For at centrere den på en flade peger du på flademidten (»Centrum af flade«) eller på midten af en af dens kanter (»Midtpunkt«) med markøren lige inde i fladen: cirklen tegnes på fladen, selv på den smalle ende af en lang kasse.
4. Klik for at angive radius, eller skriv den ({{ui:Radius}} i værdifeltet) og tryk {{key:Enter}}.

En cirkel er en polygon med mange sider. Når du trækker en cirkel op med Skub/træk, bliver dens sider blødgjort, så cylinderen fremstår som én glat overflade.

## Tegn en bue

1. Tryk på {{key:A}} ({{ui:Bue}}).
2. Klik, hvor buen starter, og derefter hvor den slutter (eller skriv længden mellem dem).
3. Flyt markøren for at bule buen ud, og klik. Tippet siger »Halvcirkel«, når bulen er halvdelen af afstanden mellem enderne. Eller skriv, hvor langt midten står ud: `2` og {{key:Enter}}.

For at tegne en bue omkring et punkt i stedet bruger du {{ui:Bue fra centrum}}: klik på centrum, derefter hvor buen starter (eller skriv radius), og derefter hvor den slutter (eller skriv vinklen i grader, fx `90`). Den fanger i trin på 15°.

En bue startet på en flade tegnes på den flade; ellers ligger den på jorden, eller den står lodret, når dens to ender er i forskellige højder. En bue har 12 segmenter; skriv `24s` under tegning for flere. Buer lukker flader på samme måde som linjer: en bue hen over hjørnet af et rektangel deler det.

## Tegn en glat kurve

{{ui:Kurve}} tegner en glat linje, der går gennem hvert punkt, du klikker på: et kabel, en trappegelænders sti, en havekant. Den kan forlade jorden: punkter fanger til hjørner, kanter og flader overalt, og piletasterne låser rød, grøn eller blå, som ved {{ui:Linje}}.

1. Klik på {{ui:Kurve}} i gruppen {{ui:Tegn}}.
2. Klik på de punkter, kurven skal gå igennem. Skriv `<0,0,1>` og {{key:Enter}} for et punkt 1 over det sidste, `[x,y,z]` for et præcist sted, eller en længde for et punkt så langt i retning af markøren.
3. Tryk på {{key:Enter}} eller dobbeltklik for at afslutte. Klik på det første punkt igen for at lukke kurven. {{key:Backspace}} tager det sidste punkt tilbage.

En kurve vælges som ét stykke. For at ændre den vælger du den og klikker på {{ui:Rediger punkter}} i {{ui:Objektinfo}}: dens punkter vises som firkanter. Klik på et, og klik derefter, hvor det skal ligge (eller skriv `<dx,dy,dz>`). {{key:Esc}} lægger et punkt tilbage og afslutter redigeringen. En lukket flad kurve laver en flade; en kurve, der omrisser en flade, kan ikke redigeres længere.

## Forskyd: en kant inde i eller uden for en flade

{{ui:Forskyd}} kopierer en flades omrids en fast afstand ind i den (eller ud af den), til en ramme, en kant, en karm eller glasset i en skærm.

1. Tryk på {{key:F}} og klik på fladen, eller vælg fladen først og tryk derefter på {{key:F}}.
2. Flyt markøren ind i fladen for et indre omrids, eller ud af den for et ydre. Det nye omrids følger med, og tippet siger, hvor langt.
3. Klik, eller skriv afstanden og tryk {{key:Enter}}.

Fladen deles i to: den indre flade og en ramme omkring den (eller en ny ring udenfor). Skub/træk en af dem med det samme: til en skærm tegner du kassen, skubber den til dens tykkelse, forskyder frontfladen 30 mm indad og skubber den indre flade lidt ind for glasset. Huller i fladen forskydes også, og en bue eller cirkel forbliver én (mindre eller større) kurve.

- **Dobbeltklik** på en flade med {{ui:Forskyd}} for at forskyde den med sidste afstand igen.
- **Kanter:** vælg en kæde af forbundne kanter i ét plan (fx de to linjer i et L), tryk på {{key:F}}, flyt til den side, du vil have, og skriv afstanden: en parallel kopi tegnes, med geringer i hjørnerne.
- Når afstanden er større, end fladen tillader, siger ModelCraft det og tegner intet.

## Buer, cirkler og polygoner er kurver

Klik på et hvilket som helst segment af en bue, en cirkel eller en polygon, og hele kurven vælges. {{ui:Objektinfo}} viser derefter dens radius, dens segmenter, dens vinkel (buer) og dens længde. Skriv en ny radius der for at ændre størrelsen omkring dens centrum; flader tegnet i dens plan følger med. Når en kurves flade er blevet skubbet eller trukket, forbliver dens radius, som den er.

## Tegn med linjer

1. Tryk på {{key:L}}.
2. Klik, hvor linjen starter.
3. Klik, hvor den slutter, eller skriv en længde og tryk {{key:Enter}}. Den skrevne længde går i den retning, markøren viser.
4. Bliv ved med at klikke. Hvert klik starter den næste linje fra enden af den sidste.
5. Luk omridset ved at klikke på det første punkt igen. Når linjerne lukker en flad løkke, fyldes den med en flade, og værktøjet holder op med at kæde. Tryk på {{key:Esc}} for at stoppe når som helst.

Linjer følger de røde, grønne og blå retninger, når du kommer tæt på dem; linjen skifter til den farve, og tippet siger »På rød akse«. Se [Inferens og fangning](topic:inference) for, hvordan du låser en retning og fanger til punkter.

### Hvor en linje går, når den ikke rører noget

- En linje, der starter på en flade, bliver i fladens plan.
- En linje, der starter på jorden eller i tomt rum, bliver vandret med sit startpunkt. Hvis du kigger på modellen i kanten, går den i stedet i det lodrette plan, der vender mod dig.
- For at tegne en linje til et præcist sted skriver du et punkt: `[x,y,z]` for et punkt i modellen, eller `<dx,dy,dz>` for en forskydning fra startpunktet. Se [Skriv præcise størrelser](topic:value-box).

## Del en flade

Tegn en linje hen over en flade, fra en kant til en anden (eller fra kant til kant via andre linjer). Fladen deles i to flader. Hver beholder sin side og farve. Det samme gælder for et rektangel eller en cirkel tegnet på en flade: formen bliver sin egen flade inde i den større, som nu har et hul.

Sådan lægger du rum ud på en gulvplade, et vindue i en væg eller et trin på en trappe: tegn omridset på fladen, og skub eller træk derefter den nye flade.

## Flader, der vender den forkerte vej

Hver flade har en forside og en bagside. Bagsiden vises blågrå. Flader tegnet på jorden vender opad; flader tegnet på en anden flade vender på samme måde som den.

Hvis en flade viser sin bagside, hvor du forventer forsiden, vælger du den og klikker på {{ui:Vend fladen om}} i {{ui:Objektinfo}}.

## Hvad du ser under tegning

- En farvet markør der, hvor markøren fanger, og dens navn i tippet nederst til venstre.
- En forhåndsvisning af linjen eller formen.
- Den aktuelle størrelse i værdifeltet. Du kan skrive over den når som helst.

## Hvis formen ikke er, hvor du forventede

- På en touchskærm, se [Fejlfinding](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Hvis en linje er fanget til noget langt bagved, så drej lidt: punkter skjult bag en flade fanger aldrig, men punkter på dens kant gør.
- Tryk på {{key:Mod+Z}} for at fortryde den sidste form; ét trin fortryd fjerner én linje eller form.
