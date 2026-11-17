---
title: Stilarter og solskygger
summary: Vis modellen skygget, som skjulte linjer, som trådmodel eller gennemsigtig, og undersøg de skygger, den kaster på ethvert tidspunkt, dato og sted.
keywords: præsentationsvisning, ren visning, skjul hjælpelinjer, skjul akser, stil, skygget, skjulte linjer, trådmodel, røntgen, kanter, skygger, sol, solstudie, solar, dato, tid, breddegrad, længdegrad, tidszone, nord
from: 09c95329
---

Panelet {{ui:Stil}} til højre ændrer, hvordan modellen tegnes. Intet i det ændrer selve modellen, og det er ikke en del af fortryd. Hver [scene](topic:scenes) husker sin egen stil, og filen husker den stil, du havde, da du gemte.

## Flader

Vælg én i listen {{ui:Flader}}:

| Stil | Ser ud som |
|---|---|
| {{ui:Skygget}} | Massive flader, blødt belyst. Flader set bagfra er blågrå. Importerede farver vises. |
| {{ui:Skjulte linjer}} | Flader i baggrundsfarven med kanter i blæk: en ren linjetegning med skjulte linjer fjernet. Hvid på {{ui:Papir}}, mørk på {{ui:Model}}. |
| {{ui:Trådmodel}} | Kun kanter. Flader tegnes ikke, men de tæller stadig, når du klikker og fanger: du kan ikke vælge igennem dem. |
| {{ui:Røntgen}} | Gennemsigtige flader, så du kan se, hvad der er bag eller inde i. Som i trådmodel stopper klik og fangst stadig ved den nærmeste flade. |

{{ui:Vis kanter}} slår kanterne til eller fra i alle stilarter undtagen {{ui:Trådmodel}}. Når den er fra, viser {{ui:Skjulte linjer}} næsten intet, da dens flader matcher baggrunden. Bløde kanter, som siderne på en trukket cirkel, tegnes aldrig.

## Tænd solskygger

1. Sæt kryds i {{ui:Solskygger}}. Solindstillingerne under den bliver aktive, og modellen kaster skygger på sig selv og på jorden.
2. Indstil stedet:
   - {{ui:Breddegrad}}: nord er positiv, syd negativ (New York er cirka 40.7, Sydney cirka -33.9).
   - {{ui:Længdegrad}}: øst er positiv, vest negativ (New York er cirka -74.0).
   - {{ui:UTC-forskydning}}: stedets forskydning fra UTC i timer, fx `-5` for New York om vinteren. ModelCraft anvender ikke sommertid; brug `-4` for New York om sommeren.
3. Indstil {{ui:Dato}} (måned og dag) og træk i {{ui:Tid}}-skyderen. Tiden flyttes i trin på 15 minutter og vises ved siden af skyderen, fx "3:00 pm".

En linje under indstillingerne siger, hvor solen er, fx "Sol 52° over horisonten, 250° fra nord. Nord er den grønne akse." Om natten står der "Solen er under horisonten på dette tidspunkt."

En ny model starter med solen den 21. juni kl. 3:00 pm, ved breddegrad 40, længdegrad -105 og UTC-forskydning -7.

## Drej modellen mod nord

ModelCraft's nord er altid den **grønne akse**. For at undersøge en rigtig grund drejer du modellen, så dens nordside vender langs grøn: vælg alt ({{key:Mod+A}}), tryk på {{key:Q}}, klik på et centrum på jorden, og drej den med stedets vinkel fra nord (se [Roter og skalér](topic:rotate-scale)).

## Et solstudie

1. Indstil stedet og datoen.
2. Tilføj en scene ({{ui:Tilføj scene}} i {{ui:Scener}}).
3. Flyt tidsskyderen, og tilføj så en ny scene. Gentag for hvert klokkeslæt, du vil have med.
4. Klik på {{ui:Afspil}} for at gennemgå dem. Se [Gem visninger som scener](topic:scenes).

## Ting at vide

- Skygger kan se takkede ud på en meget stor model, da ét skyggekort dækker hele modellen.
- Skygger tegnes ikke i {{ui:Trådmodel}}.
- Solens position følger NOAA's solberegning og er præcis til en brøkdel af en grad, hvilket er rigeligt til massestudier. Atmosfærisk lysbrydning ignoreres, så meget lave solvinkler nær solopgang og solnedgang kan være lidt forkerte.

## Præsentationsvisning

{{ui:Visninger}} › {{ui:Præsentationsvisning}} (eller {{key:Shift+P}}) viser kun modellen: akserne, hjælpelinjer og hjælpepunkter, konturerne af sektionsplaner (snittet bliver), lampernes markeringer, boksen om en åben gruppe, fangemarkeringer og tips samt markeringen af valget forsvinder alle. Brug den til at se modellen tydeligt eller før et skærmbillede. Værktøjer virker stadig og fanger stadig; du ser blot ikke markeringerne. Tryk på {{key:Shift+P}} igen for at få dem tilbage. Mål bliver, da de er en del af tegningen. Mens du redigerer inde i en gruppe, toner resten af modellen ikke længere ud: den vises, som den er, inklusive teksturer.
