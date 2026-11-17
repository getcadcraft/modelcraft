---
title: Wysig 'n maas in die Maas-werkruimte
summary: Kies 'n maas se hoekpunte, rande en vlakke, skuif hulle, en trek uit, binnesnit, skuins, sny, samevoeg, vul en brug hulle, met enige sleutelstyl.
keywords: maas, redigeermodus, maas-werkruimte, hoekpunt, hoekpunte, rand, rande, vlak, vlakke, trek uit, binnesnit, skuins, lussnit, mes, halveer, draai rond, samevoeg, ontbind, vul, roosvul, brug, verdeel, gly, proporsionele redigering, uitval, werkruimte
from: 92a372dd
---

Die **Maas**-werkruimte wysig 'n [maas](topic:meshes) punt vir punt: sy hoekpunte, rande en vlakke. Stoot/trek-meetkunde bly in die **Model**-werkruimte.

## Maak dit oop

- Kies {{ui:Maas}} in die {{ui:Werkruimte}}-lys aan die linkerkant van die nutsbalk. Die gekose maas gaan oop om te wysig; 'n gekose groep of komponent word eers in 'n maas omgeskakel (een ontdoen-stap).
- Of dubbelklik op 'n maas, of, met die modelleerder-sleutels, kies dit en druk {{key:Tab}}.
- Met niks gekies nie, bied die paneel maasse om by te voeg: plat vlak, rooster, kubus, sirkel, silinder, keël, sfeer, ico-sfeer en torus. 'n Nuwe een gaan waar die aansig kyk en gaan oop om te wysig.

{{ui:Terug na Model}} (of die lys, {{key:Tab}} met die modelleerder-sleutels, {{key:Esc}} met niks gekies met die stoot/trek-sleutels) gaan terug na Model met die maas gekies. Terwyl die Maas-werkruimte oop is, word die res van die model verbleek en Model se teken-gereedskap word weggesit.

## Kies

| Doen | Om |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Kies hoekpunte, rande of vlakke |
| Klik | Kies een; {{key:Shift}}+klik voeg by of haal weg |
| Sleep 'n boks | Kies wat binne en sigbaar is; {{key:Shift}} voeg by, {{key:Ctrl}} verwyder |
| {{key:Alt}}+klik 'n rand, of dubbelklik dit | Sy randlus (vlaklus in vlakmodus; die hele rand op 'n oop rand) |
| {{key:Ctrl}}+{{key:Alt}}+klik 'n rand | Sy randring |
| Drie keer klik | Alles wat daaraan geheg is |

Die {{ui:Kies}}-groep het ook {{ui:Alles}}, {{ui:Gekoppel}}, {{ui:Lus}}, {{ui:Ring}}, {{ui:Meer}} en {{ui:Minder}}.

## Skuif, draai, skaal

{{ui:Skuif}}, {{ui:Draai}} en {{ui:Skaal}} begin vanaf die wyser: beweeg dit, en klik dan of druk {{key:Enter}} om die seleksie neer te sit, of {{key:Esc}} om te kanselleer. {{key:X}}, {{key:Y}} of {{key:Z}} (of die pyltjiesleutels) sluit 'n as. Tik 'n afstand, 'n hoek of 'n faktor vir 'n presiese een — [berekeninge](topic:value-box#calculations) werk ook.

**Proporsioneel** ({{ui:Proporsioneel}}, of die paneel): hoekpunte naby die seleksie volg 'n skuif, minder hoe verder hulle is, tot die bereik wat jy stel, met die uitval wat jy kies. Skakel {{ui:Net langs die maas}} aan om langs rande te meet eerder as reguit.

{{ui:Gly}} skuif 'n gekose randlus langs die rande daarnaas.

## Verander die vorm

| Gereedskap | Wat dit doen |
|---|---|
| {{ui:Trek uit}} | Trek die gekose vlakke uit langs hulle normaal, met nuwe syvlakke (of maak vlakke uit oop randrande). Tik die afstand |
| {{ui:Binnesnit}} | 'n Band binne die gekose vlakke se omtrek; druk {{key:I}} weer vir elke vlak op sy eie |
| {{ui:Skuins}} | Sny die gekose rande (of, {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, hoekpunte) op 'n breedte; die wiel of die plus- en minussleutels voeg segmente by vir 'n geronde rand |
| {{ui:Lussnit}} | Wys na 'n rand: nuwe lusse oor die ring van vierhoekige vlakke; die wiel stel hoeveel snitte; klik om te sny |
| {{ui:Mes}} | Klik punte op rande of hoeke; {{key:Enter}} sny reguit oor die vlakke tussen hulle, soos jy hulle sien |
| {{ui:Halveer}} | Teken 'n lyn op die skerm: die gekose vlakke (of almal) word daarlangs gesny |
| {{ui:Draai rond}} | Draai die gekose vlakke of oop rande om die blou as in stappe (die wiel stel hulle); 'n volle draai sluit |
| {{ui:Verdeel}} | Sny die gekose rande in twee; hele vlakke word 'n rooster |
| {{ui:Samevoeg}} | Die gekose hoekpunte word een, in hulle middelpunt |
| {{ui:Ontbind}} | Haal die seleksie uit maar hou die oppervlak: vlakke voeg saam |
| {{ui:Vul}} | 'n Vlak oor 'n gekose oop rand (of tussen twee oop rande) |
| {{ui:Roosvul}} | Vul 'n oop rand met 'n ewe aantal rande met 'n rooster van vierhoeke |
| {{ui:Brug}} | Voeg twee gekose oop randlusse met vlakke |
| {{ui:Vou}} | Hoe skerp die gekose rande bly wanneer die maas deur 'n onderverdelingsoppervlak gladgemaak word: beweeg weg van die middel, gebruik die wiel (stappe van 0,1) of tik 0 tot 1. Die paneel wys die gekose rande se vou en neem ook 'n getikte waarde. Gevoude rande word in magenta geteken |
| {{ui:Keer om}}, {{ui:Gladmaak}}, {{ui:Skrap}} | Keer vlakke om; gladmaak hoekpunte na hulle bure toe; skrap volgens die keusemodus |

Elkeen is een ontdoen-stap. Teksturkoördinate, kleure en gewigte volg na die nuwe vlakke en hoekpunte.

## Hermesh

{{ui:Hermesh}} maak die hele maas weer as gelyke driehoeke van een grootte, wat gevra word wanneer jy dit druk (kleiner is fyner en stadiger). Dit sluit gate, voeg stukke saam wat oorvleuel, en gelyk 'n maas uit wat beeldhou uitgerek het. Skerp rande kom uit 'n bietjie afgerond. UV's, verf en vou begin weer van vooraf. Een ontdoen-stap.

## Retopologie

Om 'n nuwe, skoner maas oor 'n gedetailleerde een te bou ('n beeldhouwerk, 'n skandering), kies die gedetailleerde een onder {{ui:Retopologie}} › **Bou op** in die paneel, dan:

- **Vasklik geskuifde punte daarop:** punte wat jy skuif, en rande wat jy trek, land op sy oppervlak.
- **Plaas die gekose punte daarop** skuif die gekose punte nou daarop (een ontdoen-stap).
- **Wys hierdie maas se rande voor** teken die maas wat jy bou oor die oppervlak, sodat jy dit kan sien.

## Pas die laaste bewerking aan

Na {{ui:Binnesnit}}, {{ui:Skuins}}, {{ui:Lussnit}}, {{ui:Verdeel}}, {{ui:Gladmaak}}, {{ui:Roosvul}} of {{ui:Draai rond}}, wys die paneel sy instellings (breedte, segmente, profiel, snitte …). Verander een en die bewerking word weer gedoen vanaf waar dit begin het, steeds een ontdoen-stap.

## Sleutels

| | Stoot/trek-sleutels | Modelleerder-sleutels |
|---|---|---|
| Skuif, draai, skaal | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} twee keer gly) |
| Trek uit, binnesnit | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Skrap | {{key:E}} of {{key:Delete}} | {{key:X}} of {{key:Delete}} |
| Vou | {{key:Shift+C}} | {{key:Shift+E}} |
| Kies alles, niks, omkeer | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Albei | {{key:Ctrl+B}} skuins, {{key:Ctrl+R}} lussnit, {{key:K}} mes | dieselfde, en {{key:F}} vul, {{key:M}} samevoeg, {{key:Ctrl+X}} ontbind, {{key:L}} / {{key:Ctrl+L}} gekoppel, {{key:Alt+N}} keer om, {{key:O}} proporsioneel, {{key:Shift+V}} hoekpuntgly |

Sien ook [Maasse](topic:meshes), [Wysigers op 'n maas](topic:modifiers) en [Nog nie gebou nie](topic:not-built-yet).
