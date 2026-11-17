---
title: Meet en plaas leidrade
summary: Lees lengtes en oppervlaktes, meet tussen twee punte met die maatband, en lê leidlyne en leidpunte uit om teen te teken.
keywords: meet, maatband, gradeboog, hoek, hoekleidraad, leidraad, leidlyn, konstruksielyn, afstand, maat, lengte, oppervlakte, ofset, uitleg, leidpunt
from: de6d04d9
---

## Lees groottes sonder om te meet

Kies iets en kyk na {{ui:Entity info}}:

- 'n Rand wys sy **lengte**.
- 'n Vlak wys sy **oppervlakte** en hoeveel gate dit het.
- Verskeie vlakke wys hul **totale oppervlakte**.
- 'n Groep of komponent wys sy **grootte** (breedte × diepte × hoogte van die boks rondom dit) en, as dit 'n geslote soliede is, sy **volume**.
- Met niks gekies nie, wys {{ui:Entity info}} die grootte van die hele model.

Lengtes en oppervlaktes gebruik die eenheid in die kieser onder regs. 'n Millimeter-model wys oppervlaktes van 0.01 m² en hoër in vierkante meter ('n 4 × 3 m-kamer lees "12 m²").

Terwyl jy teken, wys die waardeblokkie die lewendige lengte, grootte, radius of afstand, so jy hoef selde ná die tyd te meet.

Om 'n grootte ná tekening te verander, kies 'n rand of 'n groep en tik sy lengte of grootte weer in {{ui:Entity info}}. Of plaas 'n [maat](topic:dimensions) en tik 'n nuwe lengte daarin.

## Meet tussen twee punte

1. Druk {{key:T}} vir die {{ui:Tape}}-meting.
2. Klik op 'n punt: 'n hoek, 'n middelpunt, 'n punt op 'n vlak, of die grond. (Om op 'n rand te klik doen iets anders; sien hieronder.)
3. Beweeg na die tweede punt. Die punt en die waardeblokkie ({{ui:Length}}) wys die afstand. Dit vang vas aan punte en aan die rooi, groen en blou rigtings.
4. Klik. Die statusbalk sê "Gemeet 4' 6"." en 'n **leidpunt** word op die tweede punt gelaat.

Om die leidpunt op 'n presiese afstand te laat, tik dit ná die eerste klik en druk {{key:Enter}}: dit gaan in die rigting waarna jy wys.

## Plaas 'n leidlyn

'n Leidlyn is 'n eindelose gestreepte lyn, parallel met 'n rand, op 'n afstand wat jy kies. Gebruik leidrade om 'n terugtrek, 'n vloerhoogte, of waar 'n venster begin uit te lê.

1. Druk {{key:T}}.
2. Klik op 'n **rand** (nie sy einde nie). Die aanwyser sê "Op rand".
3. Beweeg weg van die rand, na die kant waar die leidlyn moet gaan. 'n Gestreepte lyn volg, parallel met die rand, en die waardeblokkie ({{ui:Offset}}) wys die afstand.
4. Klik, of tik die ofset en druk {{key:Enter}}: `1.5m`, `5'`.

   Die statusbalk sê "Leidlyn 1.5 m van die rand."

Om op 'n bestaande leidlyn te begin, maak 'n ander leidlyn daarmee parallel, so jy kan 'n rooster uit een leidlyn uitbou.

As jy 'n ofset tik sonder om eers van die rand af te beweeg, kan ModelCraft nie sê watter kant jy bedoel nie: "Beweeg eers van die rand af om te wys watter kant."

## 'n Leidlyn teen 'n hoek: gradeboog

1. Klik op {{ui:Protractor}} in die {{ui:Modify}}-groep.
2. Klik op die middelpunt: die punt waardeur die leidlyn gaan. Op 'n vlak lê die gradeboog op daardie vlak; elders lê dit plat. Ná hierdie klik stel {{key:Right}}, {{key:Left}} of {{key:Up}} dit reg op rooi, groen of blou (druk weer om dit ongedaan te maak).
3. Klik op 'n punt wat 0° bepaal, byvoorbeeld langs 'n rand.
4. Beweeg na die hoek wat jy wil hê en klik: dit vang in stappe van 15° vas. Of tik die hoek in grade, soos `22.5`, en druk {{key:Enter}}; die leidlyn gaan na die kant waar die wyser is.

Die leidlyn gaan deur die middelpunt teen daardie hoek. Teken langs dit met {{ui:Line}} vir 'n dakhelling, 'n skuinssnit of 'n skuins muur.

## Teken teen leidrade

Teekengereedskap vang vas aan leidlyne ("Op leidraad") en leidpunte ("Leidpunt"), en aan waar 'n leidlyn 'n asrigting kruis. Begin 'n reghoek waar twee leidrade kruis om dit presies te plaas.

## Verwyder leidrade

- Een leidlyn: klik daarop met {{ui:Select}} en druk {{key:Delete}}, of klik daarop met die {{ui:Eraser}}.
- Alle leidrade: met niks gekies nie, klik op {{ui:Delete all guides}} in {{ui:Entity info}}.

Leidrade word in die `.modelcraft`-lêer gestoor. Hulle word nie na ander formate uitgevoer nie.
