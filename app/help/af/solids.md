---
title: Soliede gereedskap: unie, trek af, snyding
summary: Voeg geslote groepe en komponente in een saam, sny een uit 'n ander, of hou net wat hulle gemeen het.
keywords: soliede, soliede inspekteur, nie soliede, herstel soliede, gat, los rand, binnestebuite, unie, voeg saam, kombineer, samevoeg, trek af, verskil, sny, gat, snyding, doorsnede, boolean, buitenste skil
from: f35df1cc
---

Die soliede gereedskap kombineer **soliede**: groepe en komponente wie se vlakke 'n volume sluit, met elke rand wat presies twee vlakke verbind. {{ui:Entity info}} sê {{ui:Solid}}: {{ui:Yes}} vir een, en wys sy volume.

Hulle is in die {{ui:Solids}}-kieslys in die {{ui:Organize}}-groep.

## Wanneer iets nie 'n soliede is nie

Kies die groep of komponent. As dit nie 'n soliede is nie, sê {{ui:Entity info}} hoekom, byvoorbeeld "Nie 'n soliede: 4 rande grens aan 'n gat · 1 los rand":

| Probleem | Wat dit beteken |
|---|---|
| Rande grens aan 'n gat | 'n Vlak ontbreek |
| Rande gedeel deur drie vlakke of meer | 'n Vlak verdeel die binnekant, of twee vorms raak langs 'n rand |
| Vlakke binne die vorm | 'n Muur wat binne die volume agtergelaat is |
| Los rande | Lyne wat geen vlak omlyn nie |
| Vlakke binnestebuite gedraai | Hulle voorkante wys in, teen hulle bure |

{{ui:Show problems}} maak dit oop met daardie rande en vlakke gekies, sodat jy hulle kan sien. {{ui:Fix}} herstel die eenvoudige gevalle in een ontdoenstap: dit verwyder los rande en vlakke binne die vorm, draai vlakke die regte kant uit, en sluit gate waarvan die rand plat lê. Enigiets wat dit nie veilig kan herstel nie ('n gat wat nie plat is nie, 'n rand wat deur baie vlakke gedeel word) laat dit vir jou, en sê wat oorbly.

## Unie

1. Kies twee of meer soliede (klik een, {{key:Ctrl}}+klik die ander).
2. {{ui:Solids}} › {{ui:Union}}.

Hulle word een soliede, in een groep. Waar hulle oorvleuel het, is die vlakke binne weg.

## Trek af

1. {{ui:Solids}} › {{ui:Subtract}}.
2. Klik die soliede om **weg te neem** (die snyer).
3. Klik die soliede om **te sny**.

Wat van die tweede soliede oorbly, bly; die snyer word opgebruik. Byvoorbeeld, om 'n gat deur 'n blok te maak, teken 'n paal deur dit, maak die paal 'n groep, en trek dan die paal van die blok af.

## Snyding

Kies twee of meer soliede, en dan {{ui:Solids}} › {{ui:Intersect}}. Net die deel wat hulle almal gemeen het, word behou.

## Goed om te weet

- Die resultaat is 'n nuwe groep. Dit behou die naam, kleur en etiket van die eerste soliede (by Trek af: die een wat jy gesny het). Kleure wat op sy vlakke geverf is, word nie behou nie.
- Plat sye van die resultaat is enkele vlakke. Ronde sye kom uit as die plat fasette waarmee hulle geteken is.
- As 'n groep of komponent nie 'n soliede is nie, sê die gereedskap watter een, en verander niks nie. Soek na 'n ontbrekende vlak of 'n los vlak binne dit.
- Binne 'n oop groep werk die gereedskap op die groepe en komponente in daardie groep.
- Elke gereedskap is een ontdoenstap.
- Die eerste keer as jy 'n soliede-gereedskap gebruik, laai sy enjin (manifold-3d), wat 'n oomblik kan neem.
