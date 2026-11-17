---
title: Skriv exakta storlekar i värderutan
summary: Alla sätt att skriva längder, storlekar, punkter, förskjutningar, vinklar, sidor och kopior, och hur enheter och nakna tal tolkas.
keywords: värderuta, måttruta, vcb, skriv, exakt, mått, längd, enheter, fot, tum, metrisk, millimeter, koordinater, förskjutning, matris, sidor, vinkel, decimalkomma
from: 0148dc3d
---

Värderutan sitter i statusfältet längst ned, med en etikett som ändras med verktyget. Medan du arbetar visar den den levande storleken; när som helst kan du skriva en exakt.

## Så skriver du

1. Starta åtgärden med ett klick (det första hörnet, ytan, punkten att flytta från).
2. Skriv. Du behöver inte klicka i värderutan: en siffra eller ett av tecknen `. , - ' " [ < * /` skickar din inmatning dit.
3. Tryck på {{key:Enter}}.

Tryck på {{key:Esc}} i värderutan för att rensa den och gå tillbaka till vyn. På en pekskärm trycker du på värderutan för att få fram tangentbordet.

Om ModelCraft inte kan läsa det du skrev säger statusfältet "Skriv en längd, till exempel 3m, 10'6" eller 4m,3m." Om verktyget inte kan använda den säger det "Det fungerade inte: …" med orsaken.

## Längder

| Skriv | Betyder |
|---|---|
| `3m` `320cm` `3200mm` | Meter, centimeter, millimeter |
| `10'` `10ft` `10 feet` | Fot |
| `6"` `6in` `6 inches` | Tum |
| `10'6"` `10' 6"` `10'-6 1/2"` | Fot och tum, med bråkdel |
| `6 1/2"` `6-1/2"` `3/4"` | Tum med bråkdel |
| `1.5ft` `.5m` | Decimaltal med enhet |
| `120` | Ett naket tal, i modellens enhet |

**Ett naket tal använder modellens enhet**, som visas i väljaren nere till höger: tum i en fot-och-tum-modell (så `120` är 10 fot), millimeter i en millimetermodell, och så vidare. Att skriva en enhet vinner alltid, oavsett modellens enhet. Krulliga citattecken och primtecken (’ ” ′ ″) läses också som fot och tum.

:::warning
Använd alltid en **punkt** för decimaler: `2.5m`. Ett kommatecken skiljer två värden, så `2,5` betyder 2 och 5 (två värden), oavsett dina språkinställningar.
:::

## Beräkningar

Vilken längd som helst kan vara en beräkning: addera `+`, subtrahera `-`, multiplicera `*`, dividera `/`, och använd parenteser. Ingen räknare behövs.

| Skriv | Betyder |
|---|---|
| `2.5/3` | En tredjedel av 2.5 (i modellens enhet) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" i en fot-och-tum-modell |
| `3m-25cm` | 2.75 m |

Ett naket tal är i modellens enhet när det är en längd (`2.5/3` i en metermodell är 0.833 m), och en ren faktor när det multiplicerar eller dividerar en längd (`2*450mm`). Vinklar och faktorer kan också beräknas: `90/2` är 45°. Två längder multiplicerade ger en area, inte en längd, så `2m*3m` nekas.

Om ModelCraft inte kan räkna ut det säger statusfältet vad som är fel och var, till exempel "Division med noll (tecken 4)." En parentes startar också värderutan, så du kan börja med `(`.

Dessa behåller sin egen betydelse: `/3`, `3x` och `*3` efter en kopia, `24s` för sidor, och `/3` när en kant är markerad (den [delar kanten](topic:divide)).

## Per verktyg

| Verktyg | Etikett | Skriv |
|---|---|---|
| {{ui:Line}} | {{ui:Length}} | En längd (mot pekaren), eller en punkt eller förskjutning (nedan) |
| {{ui:Rectangle}} | {{ui:Dimensions}} | Två längder: `4m,3m`, `12',10'`. Ett semikolon fungerar också: `4m;3m` |
| {{ui:Circle}}, {{ui:Polygon}} | {{ui:Sides}}, sedan {{ui:Radius}} | Före första klicket, antalet sidor: `12s` eller `12` (3 till 999). Efter det, radien |
| {{ui:Push/pull}} | {{ui:Distance}} | En längd. En negativ går åt andra hållet |
| {{ui:Move}} | {{ui:Distance}} | En längd (mot pekaren), eller en punkt eller förskjutning. Efter en kopia: `3x`, `*3`, `/3` |
| {{ui:Rotate}} | {{ui:Angle}} | Grader: `90`, `-45`, `22.5` |
| {{ui:Scale}} | {{ui:Scale}} | En faktor över 0: `2`, `0.5`, `1.25` |
| {{ui:Tape}} | {{ui:Offset}} eller {{ui:Length}} | En längd |
| {{ui:Divide}} | {{ui:Parts}} | Hur många lika delar: `5`, `5s` eller `/5` (2 till 1000). Se [Dela en kant eller kurva i lika delar](topic:divide) |
| {{ui:Dimension}} | {{ui:Offset}}, sedan {{ui:Length}} | Var måttlinjen går; direkt efter placering ändrar en ny längd modellens storlek |
| {{ui:Select}} | {{ui:Value}} | När ett mått eller en kant är markerad ändrar en ny längd modellens storlek. Se [Mått och ändra storlek](topic:dimensions) |

## Punkter och förskjutningar

För {{ui:Line}} och {{ui:Move}}, efter det första klicket:

- `[x,y,z]` går till den exakta punkten i modellen (i gruppens egna axlar när du redigerar inne i en grupp). Exempel: `[0,0,3m]` är 3 m rakt ovanför origo.
- `<dx,dy,dz>` går så långt från första punkten längs röd, grön och blå. Exempel: `<0,0,10'>` är 10 fot rakt upp.

Vart och ett av de tre värdena kan ha sin egen enhet: `<12',0,6">`.

## Kopior efter en flytt

Direkt efter en kopia med {{ui:Move}}:

| Skriv | Gör |
|---|---|
| `3x` eller `*3` | 3 kopior i rad med samma avstånd |
| `/3` | 3 kopior jämnt utspridda från originalet till första kopian |

Upp till 500 kopior. Se [Flytta, kopiera och skapa matriser](topic:move-copy#a-row-of-copies).

## Inmatade längder behöver en riktning

En enskild inskriven längd går åt det håll pekaren pekar från första klicket. Om du skriver direkt efter ett klick, innan du flyttat alls, finns ingen riktning än och ingenting händer. Flytta pekaren lite mot dit du vill, och skriv sedan.

## Modellens enhet

Ändra enheten i väljaren nere till höger: {{ui:ft and in}}, in, ft, yd, mi, mil, µm, mm, cm, m eller km, så länge de är påslagna i {{ui:Settings}} › {{ui:General}} › {{ui:Units}} (modellens egen enhet finns alltid där). En längd som skrivs med någon enhets beteckning läses i den enheten. Se [Enheter, skrivna värden och enhetslistorna](common:unit-lists). Det ändrar hur längder visas och hur nakna tal läses; modellen är lika stor som förut. Enheten sparas i filen.

Hur storlekar visas:

| Enhet | Längder | Areor | Volymer |
|---|---|---|---|
| ft and in | `10' 6 1/2"` (till 1/16") | sq ft | cu ft |
| in | `126 1/2"` | sq in | cu in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² från 0.01 m², annars mm² | m³ från 0.01 m³, annars mm³ |

En ny modell börjar i fot och tum när webbläsarens språk är inställt på en US-region (och Liberia och Myanmar), och i millimeter överallt annars. En enhet som är stjärnmärkt i {{ui:Settings}} › {{ui:General}} › {{ui:Units}} används i stället, när ModelCraft har den. Eller ändra väljaren efter {{ui:Ny}}.
