---
title: Skuif, kopieer en maak rye
summary: Skuif dinge deur te klik of oor 'n presiese afstand, kopieer hulle met 'n wysigersleutel, en maak 'n ry gelyk gespasieerde kopieë.
keywords: skuif, kopieer, dupliseer, ry, spasiëring, verdeel, verskuiwing, rek, kolomme, herhaal, meervoudige kopie
from: 280245fc
---

{{ui:Skuif}} ({{key:M}}) skuif wat ookal gekies is van een punt na 'n ander. As jy 'n wysigersleutel hou, word dit 'n kopie, en ná 'n kopie kan jy tik hoeveel meer jy wil hê.

## Skuif iets

1. Kies wat jy wil skuif (sien [Kies dinge](topic:select)). As niks gekies is nie, neem Skuif die ding waarop jy klik.
2. Druk {{key:M}}.
3. Klik 'n punt om vanaf te skuif. Kies iets betekenisvols, soos 'n hoek: daardie punt sal presies land waar jy volgende klik.
4. Beweeg die aanwyser. Die keuse volg. Dit klik vas aan punte, rande en die rooi, groen en blou rigtings, soos 'n lyn dit doen.
5. Klik waar die punt heen moet, of tik 'n afstand en druk {{key:Enter}}.

   Die statusbalk se wenk keer terug na "Klik 'n punt om vanaf te skuif…" vir die volgende skuif.

'n Getikte afstand gaan in die rigting waarna jy wys. Jy kan ook 'n presiese verskuiwing tik, `<2m,0,0>` (2 m langs rooi), of 'n presiese bestemming vir die punt wat jy gekies het, `[0,0,0]` (die oorsprong). Sien [Tik presiese groottes](topic:value-box).

Om net langs een as te skuif, druk 'n pyltjiesleutel ná die eerste klik: {{key:Right}} sluit vas op rooi, {{key:Left}} op groen, {{key:Up}} op blou. Druk dieselfde pyltjie weer om te ontsluit.

## Om deel van 'n vorm te skuif, rek dit

Geometrie wat nie gegroepeer is nie, is verbind. As jy een vlak of 'n paar rande kies en hulle skuif, rek die vlakke wat daaraan vasgeheg is om te volg. Skuif die boonste vlak van 'n blok sywaarts en die blok hel oor; skuif een rand van die dak en die dak se helling verander. Vlakke wat nie meer plat kan bly nie, vou in driehoeke.

Om 'n hele voorwerp sonder om dit te rek te skuif, kies eers alles (drie keer klik daarop), of, beter, maak dit 'n groep of komponent (sien [Groepe en komponente](topic:groups-components)).

## Kopieer iets

1. Kies wat jy wil kopieer.
2. Druk {{key:M}}.
3. Hou {{key:Ctrl}} (of {{key:Alt}}) vas en klik die punt om vanaf te skuif. Op 'n Mac doen {{key:Mod}} of {{key:Alt}} dieselfde. Die wenk sê "Ctrl skuif eerder", wat beteken jy kopieer.

   Jy kan ook {{key:Ctrl}} of {{key:Alt}} indruk en loslaat ná die eerste klik om tussen skuif en kopieer te wissel.

4. Klik waar die kopie heen moet, of tik 'n afstand en druk {{key:Enter}}.

   Die oorspronklike bly waar dit was, en die kopie is gekies.

## Kopieer, sny, plak en dupliseer

- {{key:Mod+C}} kopieer die keuse, {{key:Mod+X}} sny dit (kopieer, dan vee uit). {{ui:Kopieer}} en {{ui:Plak}} is ook knoppies in die gereedskapbalk se {{ui:Redigeer}}-groep, en {{ui:Meer}} langs hulle het sny, plak op dieselfde plek en dupliseer.
- {{key:Mod+V}} plak: 'n buitelyn van die kopie volg die aanwyser, klik vas soos enige gereedskap, en 'n klik sit dit neer met sy onderste hoek daar. {{key:Esc}} kanselleer.
- {{key:Mod+Shift+V}} plak op dieselfde plek, presies waar die kopie vandaan gekom het; nuttig om iets in 'n groep wat jy oopgemaak het, te skuif.
- {{key:Mod+D}} ({{key:Shift+D}} in die Modeler-styl) dupliseer: 'n kopie word gemaak en beweeg dadelik met die aanwyser. Klik om dit neer te sit, tik 'n afstand, of druk {{key:Esc}} om dit te laat val. Direk daarna tik `3x` vir meer kopieë in 'n ry.

'n Geplakte groep word 'n nuwe groep. 'n Geplakte komponent is nog 'n plasing van dieselfde komponent, so as jy een wysig, verander hulle almal. Kopieë plak ook in 'n ander ModelCraft-oortjie in hierdie blaaier (hulle kom daar as nuwe definisies in).

## 'n Ry kopieë

Direk ná 'n kopie, terwyl {{ui:Skuif}} nog die gereedskap is:

- Tik `3x` (of `*3`) en druk {{key:Enter}} vir drie kopieë in 'n ry, elk op dieselfde afstand as die eerste kopie. Jy kry drie nuwe kopieë benewens die oorspronklike.
- Tik `/3` en druk {{key:Enter}} om eerder te verdeel: drie kopieë versprei eweredig van die oorspronklike tot waar jy die eerste kopie geplaas het, met die laaste een op daardie plek. Gebruik dit om 'n afstand te vul: plaas een kopie aan die verste einde, en verdeel dan.

Jy kan direk daarna 'n ander getal tik: `5x` vervang die `3x`-ry. Die wenk herinner jou: "Gekopieer. Tik 3x vir meer kopieë in 'n ry, of /3 om die afstand te verdeel."

### Voorbeeld: kolomme elke 6 meter

1. Maak 'n kolom en maak dit 'n komponent ({{key:G}}), sodat alle kopieë later saam verander.
2. Druk {{key:M}}, hou {{key:Ctrl}} vas en klik die kolom se basishoek.
3. Beweeg langs die rooi as en tik `6m`, dan {{key:Enter}}.
4. Tik `4x` en {{key:Enter}}. Jy het vyf kolomme, 6 m uitmekaar.

## Dinge om te weet

- Druk {{key:Esc}} voor die tweede klik om te kanselleer; alles gaan terug waar dit was.
- Skuif werk binne die groep wat jy wysig. Om 'n hele groep te skuif, maak dit eers toe en kies dit van buite.
- Met **Bots** aan (onder regs, en in [ModelCraft-instellings](topic:settings#solids-stop-where-they-touch)), stop 'n skuif waar die keuse 'n ander soliede raak, in plaas daarvan om daardeur te gaan. Klik {{ui:Bots}} om dit af te skakel vir 'n skuif wat daardeur moet gaan.
- Om 'n kopie binne 'n ander groep te sit: kopieer dit, maak die ander groep oop, en plak ({{key:Mod+Shift+V}} hou dit op dieselfde plek).
