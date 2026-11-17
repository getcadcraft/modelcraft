---
title: Stiler og solskygger
summary: Vis modellen skyggelagt, som skjulte linjer, som en trådramme eller gjennomsiktig, og studer skyggene den kaster på en hvilken som helst dato, tid og sted.
keywords: presentasjonsvisning, ren visning, skjul hjelpelinjer, skjul akser, stil, skygget, skjulte linjer, trådramme, røntgen, kanter, skygger, sol, solstudie, dato, tid, breddegrad, lengdegrad, tidssone, nord
from: 09c95329
---

{{ui:Stil}}-panelet til høyre endrer hvordan modellen tegnes. Ingenting der endrer selve modellen, og det inngår ikke i angre. Hver [scene](topic:scenes) husker sin egen stil, og filen husker stilen som var aktiv da den ble lagret.

## Flater

Velg én i listen {{ui:Flater}}:

| Stil | Ser ut som |
|---|---|
| {{ui:Skygget}} | Massive flater, lyst mykt. Flater sett bakfra er blågrå. Importerte farger vises. |
| {{ui:Skjulte linjer}} | Flater i bakgrunnsfargen med kanter i strek: en ren linjetegning der skjulte linjer er fjernet. Hvit på {{ui:Papir}}, mørk på {{ui:Modell}}. |
| {{ui:Trådramme}} | Bare kanter. Flater tegnes ikke, men de teller likevel når man klikker og fanger: man kan ikke velge gjennom dem. |
| {{ui:Røntgen}} | Gjennomsiktige flater, for å se hva som er bak eller inne i. Som i trådramme stopper klikk og fangst fortsatt ved nærmeste flate. |

{{ui:Vis kanter}} slår kantene av eller på i alle stiler unntatt {{ui:Trådramme}}. Når den er av, viser {{ui:Skjulte linjer}} nesten ingenting, siden flatene da har bakgrunnsfargen. Myke kanter, som sidene på en trukket sirkel, tegnes aldri.

## Slå på solskygger

1. Kryss av for {{ui:Solskygger}}. Solinnstillingene under den blir aktive, og modellen kaster skygger på seg selv og på bakken.
2. Sett stedet:
   - {{ui:Breddegrad}}: nord er positiv, sør negativ (New York er omtrent 40.7, Sydney omtrent -33.9).
   - {{ui:Lengdegrad}}: øst er positiv, vest negativ (New York er omtrent -74.0).
   - {{ui:UTC-forskyvning}}: stedets forskyvning fra UTC i timer, for eksempel `-5` for New York om vinteren. ModelCraft bruker ikke sommertid; bruk `-4` for New York om sommeren.
3. Sett {{ui:Dato}} (måned og dag), og dra skyveknappen for {{ui:Tid}}. Tiden flytter seg i trinn på 15 minutter og vises ved siden av skyveknappen, for eksempel «15:00».

En linje under innstillingene forteller hvor solen er, for eksempel «Solen 52° over horisonten, 250° fra nord. Nord er den grønne aksen.» Om natten står det «Solen er nede på dette tidspunktet.»

En ny modell starter med solen 21. juni kl. 15:00, på breddegrad 40, lengdegrad -105 og UTC-forskyvning -7.

## Pek modellen mot nord

ModelCraft sin nord er alltid den **grønne aksen**. For å studere et ekte sted, snu modellen slik at nordsiden peker langs grønn: velg alt ({{key:Mod+A}}), trykk {{key:Q}}, klikk et senter på bakken, og roter den med stedets vinkel fra nord (se [Roter og skaler](topic:rotate-scale)).

## Et solstudium

1. Sett opp stedet og datoen.
2. Legg til en scene ({{ui:Legg til scene}} i {{ui:Scener}}).
3. Flytt tidsskyveknappen, og legg deretter til en ny scene. Gjenta for hver time som skal med.
4. Klikk {{ui:Spill av}} for å gå gjennom dem. Se [Lagre visninger som scener](topic:scenes).

## Ting å vite

- Skygger kan se tannete ut på en svært stor modell, siden ett skyggekart dekker hele modellen.
- Skygger tegnes ikke i {{ui:Trådramme}}.
- Solens posisjon følger NOAAs solberegning og er nøyaktig til en brøkdel av en grad, noe som er mer enn nok til massestudier. Atmosfærisk refraksjon er ikke tatt med, så svært lave solvinkler nær soloppgang og solnedgang kan avvike litt.

## Presentasjonsvisning

{{ui:Visninger}} › {{ui:Presentasjonsvisning}} (eller {{key:Shift+P}}) viser bare modellen: aksene, hjelpelinjer og hjelpepunkter, konturene til snittplan (snittet blir), lampemerkene, boksen til en åpen gruppe, fangemerkene og tipsene, og utvalgsmarkeringen forsvinner alle. Bruk den til å se modellen tydelig, eller før et skjermbilde. Verktøyene fungerer fortsatt og fanger fortsatt; merkene vises bare ikke. Måltilsettinger blir værende, siden de er en del av tegningen. Mens det redigeres inne i en gruppe, falmer ikke resten av modellen lenger: den vises slik den er, med teksturer.
