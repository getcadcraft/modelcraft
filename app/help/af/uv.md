---
title: Rangskik 'n maas se UV's
summary: Merk naatlyne, ontvou, projekteer en pak 'n maas se tekstuurkoördinate in die UV-werkruimte, en kontroleer dit met 'n skaakbord en die rekkleure.
keywords: uv, uv's, ontvou, ontvouing, naat, naatlyne, tekstuur, tekstuurkoördinate, atlas, pak, pakking, eiland, eilande, skaakbord, rek, vervorming, boksprojeksie, silinderprojeksie, sferiese projeksie, konform, hoekgebaseerd, lscm, abf
from: 00028f20
---

'n Tekstuur is 'n plat prent; 'n maas is nie plat nie. Sy **UV's** sê waar elke hoek van elke vlak op die prent sit. Die UV-werkruimte maak hulle: jy sny die maas oop langs **naatlyne**, lê die stukke plat (**ontvou**), en pas hulle in die vierkant (**pak**).

## Maak dit oop

Kies 'n maas en kies {{ui:UV}} in die Werkruimte-lys. 'n Groep of komponent word eers 'n maas, soos in die Maas-werkruimte. Die 3D-aansig skuif na die linkerhelfte; die **UV-redigeerder** regs wys die maas se vlakke wat op die tekstuurvierkant uitgelê is. Kies werk soos in die Maas-werkruimte, en wat jy in een aansig kies, is in die ander gekies.

## Merk naatlyne

Naatlyne is waar die maas oopgesny mag word; hulle wys rooi in albei aansigte.

- Kies rande ({{ui:Rand}}, of {{key:2}}) en druk {{ui:Merk naat}} ({{key:Ctrl+E}}). {{ui:Maak naat leeg}} ({{key:Ctrl+Shift+E}}) haal hulle weg.
- {{ui:Naatlyne by skerp}} merk elke skerp rand en elke rand waar vlakke by meer as 60° ontmoet: 'n boks val in sy ses sye uiteen.
- {{ui:Naatlyne uit UV's}} merk naatlyne waar die UV's reeds breek, byvoorbeeld na 'n projeksie.

'n Geslote stuk het naatlyne nodig om plat te lê: 'n bal het minstens een snit nodig, 'n buis 'n snit langs sy lengte.

## Ontvou

Kies die vlakke om uit te lê (of niks, vir die hele maas) en druk {{ui:Ontvou}} ({{key:U}}). Elke stuk tussen naatlyne word plat gelê, en hou sy hoeke so waar as wat dit kan (hoekgebaseerde platmaak), en dan word die stukke in die vierkant gepak. {{ui:Konform}} ontvou deur kleinste-kwadrate-konforme afbeeldings: dit is vinniger, en 'n bietjie minder waar op sterk geboë stukke. 'n Vorm wat uit 'n plat vel gemaak kan word, soos 'n silinder se sy wat een keer gesny is, ontvou sonder enige rek.

## Projekteer

Vir eenvoudige vorms is 'n projeksie dikwels genoeg:

| Projeksie | Wat dit doen |
| --- | --- |
| {{ui:Boks}} | Elke vlak op die kant van 'n boks waarna dit die meeste wys |
| {{ui:Silinder}} | Rondom die blou as: oor is die hoek rondom, op is die hoogte |
| {{ui:Sfeer}} | Vanaf die middelpunt: oor is die hoek rondom, op is die breedtegraad |
| {{ui:Vanaf aansig}} | Soos die vlakke nou in die 3D-aansig gesien word |

'n Vlak oor die silinder- of sfeer se verbinding bly in een stuk, so sy UV's kan 'n bietjie verby die regterkant van die vierkant loop; teksture herhaal daar.

## Rangskik

- {{ui:Pak}} pas die stukke (eilande) in die vierkant teen een tekselgrootte, elk gedraai om die minste ruimte in te neem. Die paneel stel die ruimte wat tussen hulle oorbly.
- {{ui:Draai 90°}} en {{ui:Spieël}} draai of spieël die gekose vlakke se UV's.
- In die UV-redigeerder, sleep 'n gekose vlak om die keuse se UV's te skuif, of wys na die redigeerder en druk {{key:R}} of {{key:S}}, en beweeg dan om hulle te draai of te skaal ('n klik hou dit, {{key:Esc}} kanselleer). {{key:G}} skuif sonder om te sleep. Dubbelklik op 'n vlak (of {{key:L}}) om sy hele eiland te kies. Die wiel zoem; sleep met die middel- of regterknoppie om te pan; {{key:F}} pas die vierkant weer in.

Elke verandering is een ontdoen-stap.

## Kontroleer hulle

- {{ui:Skaakbord}} wys 'n geëtiketteerde skaakbord op die maas in sy UV's: gelyke, vierkantige ruite beteken die tekstuur lê gelyk; die etikette wys watter kant dit loop.
- {{ui:Rek}} kleur elke vlak volgens hoeveel sy UV's dit rek: blou is geen, deur groen, tot rooi baie. Die paneel kies of dit **hoeke geboë** of **grootte verander** meet, en wys die gemiddelde.

Sien ook [Redigeer 'n maas](topic:mesh-edit), [Mase](topic:meshes) en [Modifiseerders op 'n maas](topic:modifiers).
