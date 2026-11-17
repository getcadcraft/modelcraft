---
title: Teken vlakke met lyne, reghoeke, sirkels en boë
summary: Maak plat vlakke op die grond of op ander vlakke, verdeel dit met lyne, en teken sirkels en veelhoeke met die aantal sye wat jy wil hê.
keywords: teken, lyn, reghoek, sirkel, veelhoek, ofset, insit, raamwerk, rand, boog, kurwe, spline, glad, kabel, pad, buling, radius, kurwe, vlak, vloerplan, voetspoor, verdeel, sye, segmente, buitelyn, potlood
from: b6d7b7dd
---

Alles in ModelCraft begin as 'n plat **vlak**: 'n oppervlak wat deur rande gesluit word. Jy kan 'n vlak direk met {{ui:Reghoek}}, {{ui:Sirkel}} of {{ui:Veelhoek}} teken, of een rand op 'n slag met {{ui:Lyn}} omlyn. Vlakke is wat [Druk/trek](topic:push-pull) in soliede liggame verander.

## Teken 'n reghoek

1. Druk {{key:R}}.
2. Klik die eerste hoek: op die grond, of op enige vlak van die model.
3. Beweeg die aanwyser. Die reghoek bly op die grond (of op die vlak waarop jy begin het), en die waardeboks ({{ui:Afmetings}}) wys sy breedte en diepte. Die wenk sê "Vierkant" wanneer die sye gelyk is.

   Om op 'n ander vlak te teken, wys na dit: 'n vlak wat deur die eerste hoek loop, plaas die reghoek op daardie vlak, en vasvang aan 'n punt buite die vlak ('n eindpunt, 'n rand, of die blou as) staan die reghoek regop deur albei hoeke. Vang weer vas aan 'n punt op die eerste vlak, en dit lê weer plat. Om een vlak te hou, druk 'n pyltjiessleutel: {{key:Up}} hou die reghoek gelyk (die blou vlak), {{key:Right}} op die rooi vlak, {{key:Left}} op die groen vlak. Druk dieselfde sleutel weer om te ontsluit.
4. Klik die teenoorstaande hoek, of tik die twee groottes met 'n komma tussen en druk {{key:Enter}}: `4m,3m`, `4000,3000` in 'n millimeter-model, of `12',10'6"` in voet en duim.

   'n Vlak verskyn met vier rande rondom.

Die getikte groottes gaan in die rigting waarna jy gewys het: as die aanwyser links van die eerste hoek is wanneer jy tik, groei die reghoek na links.

:::warning
Die komma skei die twee groottes, dus kan dit nie 'n desimale teken wees nie. Tik `2.5m,3m`, nooit `2,5m` nie.
:::

## Teken 'n sirkel of 'n veelhoek

1. Druk {{key:C}} vir 'n sirkel of {{key:N}} vir 'n veelhoek.
2. Om die aantal sye te verander, tik dit voor jy klik: `12s` (of net `12`) en {{key:Enter}}. 'n Sirkel begin met 24 sye en 'n veelhoek met 6. Die wenk wys die huidige getal, en ModelCraft hou dit vir die volgende sirkel tot jy dit verander of die gereedskap wissel.
3. Klik die middelpunt, op die grond of op 'n vlak. Om op 'n vlak te sentreer, wys na die middel van die vlak ("Middelpunt van vlak") of na die middel van een van sy rande ("Middelpunt") met die aanwyser net binne daardie vlak: die sirkel word op daardie vlak geteken, selfs op die smal punt van 'n lang blok.
4. Klik om die radius te stel, of tik dit ({{ui:Radius}} in die waardeboks) en druk {{key:Enter}}.

'n Sirkel is 'n veelhoek met baie sye. Wanneer jy 'n sirkel met Druk/trek optrek, word sy sye versag sodat die silinder as een gladde oppervlak lees.

## Teken 'n boog

1. Druk {{key:A}} ({{ui:Boog}}).
2. Klik waar die boog begin, dan waar dit eindig (of tik die lengte tussen hulle).
3. Beweeg die aanwyser om die boog uit te bol, en klik. Die wenk sê "Halwe sirkel" wanneer die buiging die helfte van die afstand tussen die punte is. Of tik hoe ver die middel uitstaan: `2` en {{key:Enter}}.

Om in plaas daarvan 'n boog om 'n punt te teken, gebruik {{ui:Boog vanaf middelpunt}}: klik die middelpunt, dan waar die boog begin (of tik die radius), dan waar dit eindig (of tik die hoek in grade, soos `90`). Dit vang vas in stappe van 15°.

'n Boog wat op 'n vlak begin, word op daardie vlak geteken; andersins lê dit op die grond, of staan regop wanneer sy twee punte op verskillende hoogtes is. 'n Boog het 12 segmente; tik `24s` terwyl jy teken vir meer. Bogas sluit vlakke net soos lyne: 'n boog oor die hoek van 'n reghoek verdeel dit.

## Teken 'n gladde kurwe

{{ui:Kurwe}} teken 'n gladde lyn wat deur elke punt gaan wat jy klik: 'n kabel, 'n leuningpad, 'n tuinrand. Dit kan van die grond af wegbeweeg: punte vang vas aan hoeke, rande en vlakke oral, en die pyltjiessleutels sluit rooi, groen of blou soos by {{ui:Lyn}}.

1. Klik {{ui:Kurwe}} in die {{ui:Teken}}-groep.
2. Klik die punte waardeur die kurwe gaan. Tik `<0,0,1>` en {{key:Enter}} vir 'n punt 1 bo die laaste een, `[x,y,z]` vir 'n presiese plek, of 'n lengte vir 'n punt so ver in die rigting van die aanwyser.
3. Druk {{key:Enter}} of dubbelklik om klaar te maak. Klik die eerste punt weer om die kurwe te sluit. {{key:Backspace}} neem die laaste punt terug.

'n Kurwe kies as een stuk. Om dit te verander, kies dit en klik {{ui:Wysig punte}} in {{ui:Entiteitinligting}}: sy punte wys as vierkante. Klik een, en klik dan waar dit heen moet (of tik `<dx,dy,dz>`). {{key:Esc}} plaas 'n punt terug, en beëindig die wysiging. 'n Geslote plat kurwe maak 'n vlak; 'n kurwe wat 'n vlak omlyn, kan nie meer gewysig word nie.

## Ofset: 'n rand binne of buite 'n vlak

{{ui:Ofset}} kopieer 'n vlak se buitelyn 'n vaste afstand binne daarin (of daarbuite), vir 'n raamwerk, 'n rand, 'n vensterbank of die glas van 'n skerm.

1. Druk {{key:F}} en klik die vlak, of kies eers die vlak en druk dan {{key:F}}.
2. Beweeg die aanwyser in die vlak vir 'n binne-buitelyn, of uit die vlak vir 'n buite-een. Die nuwe buitelyn volg, en die wenk sê hoe ver.
3. Klik, of tik die afstand en druk {{key:Enter}}.

Die vlak word in twee verdeel: die binne-vlak en 'n raamwerk daarom (of 'n nuwe ring buite). Druk/trek enige een dadelik: vir 'n skerm, teken die blok, stoot dit tot sy dikte, ofset die voorvlak 30 mm na binne en stoot die binne-vlak 'n bietjie in vir die glas. Gate in die vlak word ook geofset, en 'n boog of 'n sirkel bly een (kleiner of groter) kurwe.

- **Dubbelklik** 'n vlak met {{ui:Ofset}} om dit weer met die laaste afstand te ofset.
- **Rande:** kies 'n ketting van verbonde rande in een vlak (byvoorbeeld die twee lyne van 'n L), druk {{key:F}}, beweeg na die kant wat jy wil hê en tik die afstand: 'n parallelle kopie word geteken, met gemitreerde hoeke.
- Wanneer die afstand meer is as die vlak toelaat, sê ModelCraft dit en teken niks nie.

## Bogas, sirkels en veelhoeke is kurwes

Klik enige segment van 'n boog, 'n sirkel of 'n veelhoek, en die hele kurwe word gekies. {{ui:Entiteitinligting}} wys dan sy radius, sy segmente, sy hoek (bogas) en sy lengte. Tik 'n nuwe radius daar om dit rondom sy middelpunt te verander; vlakke wat in sy vlak geteken is, volg. Wanneer 'n kurwe se vlak eenkeer met Druk/trek gestoot of getrek is, bly sy radius soos dit is.

## Teken met lyne

1. Druk {{key:L}}.
2. Klik waar die lyn begin.
3. Klik waar dit eindig, of tik 'n lengte en druk {{key:Enter}}. Die getikte lengte gaan in die rigting wat die aanwyser wys.
4. Hou aan klik. Elke klik begin die volgende lyn vanaf die einde van die laaste een.
5. Sluit die buitelyn deur die eerste punt weer te klik. Wanneer die lyne 'n plat lus sluit, vul dit met 'n vlak en hou die gereedskap op om te ketting. Druk {{key:Esc}} om enige tyd te stop.

Lyne volg die rooi, groen en blou rigtings wanneer jy naby hulle kom; die lyn word daardie kleur en die wenk sê "Op rooi as". Sien [Afleiding en vasvang](topic:inference) vir hoe om 'n rigting te sluit en aan punte vas te vang.

### Waarheen 'n lyn gaan wanneer dit niks raak nie

- 'n Lyn wat op 'n vlak begin, bly in daardie vlak se vlak.
- 'n Lyn wat op die grond, of in leë ruimte begin, bly gelyk met sy beginpunt. As jy die model van die kant af sien, gaan dit in die vertikale vlak wat na jou kyk.
- Om 'n lyn na 'n presiese plek te teken, tik 'n punt: `[x,y,z]` vir 'n punt in die model, of `<dx,dy,dz>` vir 'n verskuiwing vanaf die begin. Sien [Tik presiese groottes](topic:value-box).

## Verdeel 'n vlak

Teken 'n lyn oor 'n vlak, van een rand na 'n ander (of van rand na rand deur ander lyne). Die vlak word in twee vlakke verdeel. Elkeen hou sy kant en kleur. Dieselfde werk met 'n reghoek of sirkel wat op 'n vlak geteken is: die vorm word sy eie vlak binne die groter een, wat nou 'n gat het.

So lê jy kamers op 'n vloerplaat uit, 'n venster op 'n muur, of 'n trap op 'n trap: teken die buitelyn op die vlak, en druk of trek dan die nuwe vlak.

## Vlakke wat die verkeerde kant toe wys

Elke vlak het 'n voor- en 'n agterkant. Die agterkant wys blougrys. Vlakke wat op die grond geteken is, wys op; vlakke wat op 'n ander vlak geteken is, wys dieselfde kant as dit.

As 'n vlak sy agterkant wys waar jy die voorkant verwag, kies dit en klik {{ui:Keer vlak om}} in {{ui:Entiteitinligting}}.

## Wat jy sien terwyl jy teken

- 'n Gekleurde merker waar die aanwyser vaskoppel, en sy naam in die wenk links onder.
- 'n Voorskou van die lyn of vorm.
- Die lewendige grootte in die waardeboks. Jy kan enige tyd daaroor tik.

## As die vorm nie waar is wat jy verwag het nie

- Op 'n aanraakskerm, sien [Probleemoplossing](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- As 'n lyn aan iets ver agter vasgekoppel het, draai 'n bietjie: punte agter 'n vlak koppel nooit vas nie, maar punte op sy rand wel.
- Druk {{key:Mod+Z}} om die laaste vorm ongedaan te maak; een ontdoen verwyder een lyn of een vorm.
