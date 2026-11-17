---
title: Rediger et net i arbejdsområdet Net
summary: Vælg et nets hjørnepunkter, kanter og flader, flyt dem, og ekstruder, indsæt, affas, skær, sammenflet, udfyld og byg bro mellem dem, med begge tastestile.
keywords: net, redigeringstilstand, arbejdsområde Net, hjørnepunkt, hjørnepunkter, kant, kanter, flade, flader, ekstruder, indsæt, affas, løkkesnit, kniv, halvér, drej, sammenflet, opløs, udfyld, gitterudfyld, bro, underinddel, glid, proportional redigering, aftagning, arbejdsområde
from: 92a372dd
---

Arbejdsområdet **Net** redigerer et [net](topic:meshes) punkt for punkt: dets hjørnepunkter, kanter og flader. Skub/træk-geometri bliver i arbejdsområdet **Model**.

## Åbn det

- Vælg {{ui:Net}} i listen {{ui:Arbejdsområde}} til venstre i værktøjslinjen. Det valgte net åbnes til redigering; en valgt gruppe eller komponent laves først om til et net (ét trin i fortrydelsen).
- Eller dobbeltklik på et net, eller vælg det med modellør-tasterne og tryk {{key:Tab}}.
- Er intet valgt, tilbyder panelet net at tilføje: plan, gitter, kube, cirkel, cylinder, kegle, kugle, ikosfærekugle og torus. Et nyt net placeres dér, hvor visningen kigger, og åbnes til redigering.

{{ui:Tilbage til Model}} (eller listen, {{key:Tab}} med modellør-tasterne, {{key:Esc}} uden valg med skub/træk-tasterne) går tilbage til Model med nettet valgt. Mens arbejdsområdet Net er åbent, blegnes resten af modellen, og Modellens tegneværktøjer lægges væk.

## Vælg

| Gør | For at |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Vælg hjørnepunkter, kanter eller flader |
| Klik | Vælg ét; {{key:Shift}}+klik tilføjer eller fjerner |
| Træk en boks | Vælg det, der er inde i boksen og ses; {{key:Shift}} tilføjer, {{key:Ctrl}} fjerner |
| {{key:Alt}}+klik på en kant, eller dobbeltklik på den | Dens kantløkke (en flade-løkke i fladetilstand; hele kanten på en åben kant) |
| {{key:Ctrl}}+{{key:Alt}}+klik på en kant | Dens kantring |
| Tredobbeltklik | Alt, der er forbundet med den |

Gruppen {{ui:Vælg}} har også {{ui:Alle}}, {{ui:Forbundne}}, {{ui:Løkke}}, {{ui:Ring}}, {{ui:Mere}} og {{ui:Mindre}}.

## Flyt, roter, skalér

{{ui:Flyt}}, {{ui:Roter}} og {{ui:Skalér}} starter fra markøren: flyt den, og klik derefter eller tryk {{key:Enter}} for at sætte valget ned, eller {{key:Esc}} for at annullere. {{key:X}}, {{key:Y}} eller {{key:Z}} (eller piletasterne) låser en akse. Skriv en afstand, en vinkel eller en faktor for et præcist resultat — [beregninger](topic:value-box#calculations) virker også.

**Proportional redigering** ({{ui:Proportional}}, eller i panelet): hjørnepunkter nær valget følger en flytning, mindre jo længere væk de er, op til den rækkevidde du sætter, med den aftagning du vælger. Sæt kryds ved {{ui:Kun langs nettet}} for at måle langs kanterne i stedet for lige over.

{{ui:Glid}} flytter en valgt kantløkke langs kanterne ved siden af den.

## Ændr formen

| Værktøj | Gør |
|---|---|
| {{ui:Ekstruder}} | Trækker de valgte flader ud langs deres normal med nye sideflader (eller laver flader ud af åbne kanter). Skriv afstanden |
| {{ui:Indsæt}} | Et bånd inde i de valgte flader' omrids; tryk {{key:I}} igen for hver flade for sig |
| {{ui:Affas}} | Skærer de valgte kanter (eller, {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, hjørnepunkter) i en bredde; hjulet eller plus- og minustasterne tilføjer segmenter for en afrundet kant |
| {{ui:Løkkesnit}} | Peg på en kant: nye løkker på tværs af ringen af firkantede flader; hjulet sætter hvor mange snit; klik for at skære |
| {{ui:Kniv}} | Klik på punkter på kanter eller hjørner; {{key:Enter}} skærer lige over de flader, der er mellem dem, som du ser dem |
| {{ui:Halvér}} | Tegn en linje på skærmen: de valgte flader (eller alle) skæres langs den |
| {{ui:Drej rundt}} | Drejer de valgte flader eller åbne kanter rundt om den blå akse i trin (hjulet sætter dem); et helt omløb lukker |
| {{ui:Del}} | Skærer de valgte kanter i to; hele flader bliver til et gitter |
| {{ui:Sammenflet}} | De valgte hjørnepunkter bliver ét, i deres midte |
| {{ui:Opløs}} | Fjerner valget, men beholder overfladen: flader sammenflettes |
| {{ui:Udfyld}} | En flade over en valgt åben kant (eller mellem to åbne kanter) |
| {{ui:Gitterudfyld}} | Udfylder en åben kant med et lige antal kanter med et gitter af firkanter |
| {{ui:Bro}} | Forbinder to valgte åbne kantløkker med flader |
| {{ui:Fold}} | Hvor skarpt de valgte kanter forbliver, når nettet udglattes af en underopdelt overflade: flyt væk fra midten, brug hjulet (trin på 0,1) eller skriv 0 til 1. Panelet viser de valgte kanters fold og tager også en skrevet værdi. Foldede kanter tegnes i magenta |
| {{ui:Vend}}, {{ui:Udglat}}, {{ui:Slet}} | Vend flader; udglat hjørnepunkter mod deres naboer; slet efter valgtilstanden |

Hver er ét trin i fortrydelsen. Teksturkoordinater, farver og vægte følger med ud på de nye flader og hjørnepunkter.

## Genopbyg net

{{ui:Genopbyg net}} laver hele nettet igen som jævne trekanter af én størrelse, bestilt når du trykker (mindre er finere og langsommere). Det lukker huller, samler stykker, der overlapper, og jævner et net, som skulpturering har strakt. Skarpe kanter bliver en smule afrundede. UV'er, maling og folder starter forfra. Ét trin i fortrydelsen.

## Retopologi

For at bygge et nyt, renere net over et detaljeret et (en skulptur, et scan), vælg det detaljerede under {{ui:Retopologi}} › **Byg på** i panelet, og derefter:

- **Fang flyttede punkter til det:** punkter, du flytter, og kanter, du ekstruderer, havner på dets overflade.
- **Sæt de valgte punkter på det** flytter de valgte punkter derhen nu (ét trin i fortrydelsen).
- **Vis dette nets kanter foran** tegner nettet, du bygger, over overfladen, så du kan se det.

## Juster den sidste handling

Efter {{ui:Indsæt}}, {{ui:Affas}}, {{ui:Løkkesnit}}, {{ui:Del}}, {{ui:Udglat}}, {{ui:Gitterudfyld}} eller {{ui:Drej rundt}} viser panelet dets indstillinger (bredde, segmenter, profil, snit …). Ændrer du en, udføres handlingen igen fra start, stadig som ét trin i fortrydelsen.

## Taster

| | Skub/træk-taster | Modellør-taster |
|---|---|---|
| Flyt, roter, skalér | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} to gange glider) |
| Ekstruder, indsæt | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Slet | {{key:E}} eller {{key:Delete}} | {{key:X}} eller {{key:Delete}} |
| Fold | {{key:Shift+C}} | {{key:Shift+E}} |
| Vælg alle, ingen, inverter | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Begge | {{key:Ctrl+B}} affas, {{key:Ctrl+R}} løkkesnit, {{key:K}} kniv | det samme, og {{key:F}} udfyld, {{key:M}} sammenflet, {{key:Ctrl+X}} opløs, {{key:L}} / {{key:Ctrl+L}} forbundne, {{key:Alt+N}} vend, {{key:O}} proportional, {{key:Shift+V}} hjørnepunktglid |

Se også [Net](topic:meshes), [Modifikatorer på et net](topic:modifiers) og [Ikke bygget endnu](topic:not-built-yet).
