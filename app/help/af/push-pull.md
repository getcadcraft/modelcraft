---
title: Stoot en trek vlakke in soliede voorwerpe
summary: Draai 'n vlak in 'n boks, maak 'n gebou hoër of laer, voeg 'n baai of 'n nis by, en herhaal 'n afstand met 'n dubbelklik.
keywords: stoot trek, ekstrudeer, hoogte, soliede, boks, massa, hoër, nis, uitbult, herhaal, dubbelklik, volume, vlak, op vlak, gelyk, dieselfde hoogte
from: dc093c91
---

{{ui:Stoot/trek}} ({{key:P}}) beweeg 'n vlak langs sy eie rigting: op en af vir 'n vloer, in en uit vir 'n muur. Wat gebeur, hang af van die vlak.

## Maak 'n soliede voorwerp uit 'n vlak

1. Teken 'n vlak, byvoorbeeld 'n reghoek op die grond ([Teken vlakke](topic:draw-faces)).
2. Druk {{key:P}}.
3. Beweeg die aanwyser oor die vlak. Dit lig op.
4. Klik op die vlak, en beweeg dan die aanwyser. Die vlak styg (of sak) en sye groei uit sy rande. Die waardeblokkie ({{ui:Afstand}}) en die wenk wys die afstand.
5. Klik om klaar te maak, of tik 'n afstand en druk {{key:Enter}}: `3m`, `10'`, `2700` in 'n millimeter-model.

   Jy het nou 'n geslote soliede voorwerp. Kies alles en groepeer dit (sien [Groepe en komponente](topic:groups-components)): {{ui:Entiteitinligting}} wys dan "Soliede: Ja" en die volume daarvan.

'n Alleenstaande vlak kan albei kante toe gaan: trek dit op vir 'n massa bo die grond, stoot dit af vir 'n put of 'n fondasie.

:::tip
In plaas daarvan om twee keer te klik, druk op die vlak, sleep, en laat los. Op 'n aanraakskerm is dit die natuurlike manier: druk, sleep, lig op.
:::

## Trek tot die hoogte van iets anders

Terwyl jy trek, beweeg oor 'n hoek, 'n middelpunt, 'n rand of 'n gids van 'n ander deel van die model. Die vlak snap na daardie hoogte en 'n merker wys die punt. Gebruik dit om twee blokke dieselfde hoogte te maak, of om te stop by 'n gidslyn wat jy met die [meetband](topic:guides-measure) geplaas het.

Jy kan ook oor 'n vlak beweeg wat parallel is met die een wat jy stoot, soos die bowkant van 'n ander blok of die bokant van die boks waarop 'n paal staan. Die wenk sê "Op vlak", en die vlak wat jy stoot, eindig gelyk daarmee. Stoot byvoorbeeld die binnevlak van 'n pyp af totdat dit gelyk is met die boks onder die pyp.

'n Vlak teen 'n hoek met die een wat jy stoot, stel nie 'n vlak nie. Die afstand volg die aanwyser. Net so ook 'n vlak agter die vlak wat jy stoot.

Wanneer 'n gestoote vlak weer gelyk eindig met die vlakke rondom, verdwyn sy sye. Geen nul-hoogte sye bly oor nie, en die buitelyn wat jy geteken het, bly op die vlak, sodat jy dit later weer kan stoot. Om dit weer een vlak te maak, vee die buitelyn se rande uit met die {{ui:Uitveër}}: die twee vlakke voeg saam.

## Maak 'n boks hoër of laer

Stoot/trek die bokant van 'n boks. Omdat die sye reeds reguit van dit opgaan, beweeg die bokant eenvoudig: die boks word hoër of laer, en geen nuwe rande word gemaak nie.

- Die bokant heeltemal na onder af stoot, verwyder die boks. ModelCraft stop by nul-hoogte; dit draai die boks nooit binnekant uit nie.
- Dieselfde geld vir enige vlak waarvan die bure almal langs sy rigting loop, soos die einde van 'n muur.

## Voeg 'n baai of 'n nis by

1. Teken 'n reghoek op die sy van 'n boks (begin dit op die vlak; dit bly in die vlak).
2. Druk {{key:P}} en trek die nuwe reghoek **uit**. Dit voeg materiaal by: 'n baai, 'n skoorsteen, 'n afdak.
3. Of stoot dit **in**. Dit sny 'n nis: 'n stoep, 'n holte, 'n ingetrekke ingang.

Wanneer die sye van die nuwe deel in lyn is met vlakke wat reeds daar is, smelt hulle in een vlak saam, sodat jy nie swerwende lyne op 'n plat muur kry nie.

## Stoot heeltemal deur

Om 'n vlak in 'n soliede voorwerp te stoot, stop by die eerste vlak agter dit. Wanneer dit daardie vlak bereik, sny dit 'n opening deur. So maak jy vensters en deure in 'n muur met dikte. Sien [Sny 'n opening deur 'n muur](topic:openings).

## Tik 'n afstand

Ná jy op die vlak geklik het, tik die afstand en druk {{key:Enter}}.

- Die getikte afstand gaan die rigting waarin jy beweeg het. As jy nog nie beweeg het nie, gaan dit na die voorkant van die vlak (uit 'n soliede voorwerp, op van die grond af).
- Tik 'n negatiewe getal, soos `-500`, om die ander kant toe te gaan.
- As jy van plan verander voordat jy klik, druk {{key:Esc}}. Die vlak gaan terug.

## Herhaal die laaste afstand

Ná een stoot/trek, dubbelklik op 'n ander vlak terwyl {{ui:Stoot/trek}} steeds gekies is. Dit beweeg oor dieselfde afstand. Dit is die vinnige manier om verskeie mure of verskeie vloere dieselfde dikte of hoogte te gee.

ModelCraft onthou die afstand totdat jy na 'n ander gereedskap oorskakel.

## Dinge om te weet

- Stoot/trek werk op een vlak op 'n slag. As jy op iets klik wat nie 'n vlak is nie, sê die statusbalk "Stoot/trek werk op 'n vlak. Klik op 'n vlak."
- Om 'n vlak binne 'n groep of komponent te stoot/trek, maak dit eers oop (dubbelklik daarop).
- Met **Bots** aan, stop 'n stoot of trek wat in 'n ander soliede voorwerp loop waar dit raak, en die wenk sê wat dit raak (die voorwerp se naam, of "los geometrie in hierdie groep") en lig die vlakke uit wat dit ontmoet het. 'n Holte wat jy in sy eie soliede voorwerp stoot (byvoorbeeld 'n vlak wat weer afgestoot is), is deel van daardie soliede voorwerp en word nooit deur sy mure gestop nie.
- Twee soliede voorwerpe wat in mekaar gestoot word, sny of voeg nie by mekaar nie: hul vlakke gaan net deur. Sien [Nog nie gebou nie](topic:not-built-yet).
