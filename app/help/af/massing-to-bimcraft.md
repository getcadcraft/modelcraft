---
title: Stuur massa na BimCraft
summary: Stuur stoot/trek-massa na BimCraft as massa-opsies, met vloere, voetspoor, bruto vloeroppervlak en volume wat uit elke soliede liggaam bereken word.
keywords: massa, massa-konsep, konsep, opsies, bimcraft, ifc, bim, stoot, trek, vloere, verdiepings, bruto vloeroppervlak, voetspoor, volume, stuur, oorhandig, gebouwe-massa, fase 2
from: 73c51f3f
---

## Wat jy sal doen

Verander die blokke wat jy met stoot/trek gemodelleer het in massa-opsies wat BimCraft verstaan, sodat die konsep as 'n gebouwmodel voortgaan.

## Voor jy begin

Maak elke massa 'n **groep** of **komponent** en gee dit 'n naam. Elkeen word een opsie. Losse meetkunde word nie gestuur nie.

## Stuur dit

1. Kies die groepe om te stuur. Met niks gekies nie, gaan elke boonste groep en komponent.
2. Kies {{ui:Voer uit}}, en dan {{ui:Massa na BimCraft…}}.
3. Tik die {{ui:Naam van die opsiestel}} en die {{ui:Verdiepinghoogte}}.
4. Kontroleer die lys: elke opsie se vloere, voetspoor, bruto vloeroppervlak en volume.
5. Kies **Stuur na BimCraft** om BimCraft in 'n nuwe oortjie oop te maak met die opsies, of {{ui:Stoor as IFC}} om die lêer af te laai en dit self daar oop te maak.

In BimCraft is die opsies gelys onder "Massa-opsies in die model", waar een die huidige opsie gemaak en in mure en vloere uitgewerk kan word.

## Hoe 'n soliede liggaam 'n massa word

- **Vloere** is die soliede liggaam se hoogte gedeel deur die verdiepingshoogte, afgerond, en minstens een. Die vloere deel dan die soliede liggaam se hoogte gelyk, so 'n blok van 10 m met 3 m-vloere het 3 vloere van 3.33 m.
- **'n Vloer se oppervlakte** is die oppervlakte van die soliede liggaam se eie horisontale snit op daardie vloer se vlak. 'n Blok wat terugtrek, het kleiner boonste vloere, en die bruto vloeroppervlak is hulle som.
- **Die voetspoor** is die omtrek van die snit net bo die soliede liggaam se basis.
- **Die volume** is die soliede liggaam s'n.

In die IFC-lêer is elke opsie 'n gebou-element-proxy (die voetspoor verhoog tot die soliede liggaam se hoogte) met een ruimte per vloer wat die vloer se bruto oppervlakte dra. Alle opsies deel een gebou, met soveel verdiepings as die hoogste opsie.

## Vereenvoudigde vorms

'n Gewone regop blok gaan oor presies soos gemodelleer. Enigiets anders word steeds gestuur, en die lys sê waarom sy vorm vereenvoudig is:

- **Nie al sy vloere is die grootte van sy basis nie** (dit trek terug of hel af): die massa in BimCraft is die basisomtrek opgetrek tot die volle hoogte, maar die vloeroppervlaktes en die volume is die soliede liggaam s'n.
- **Die soliede liggaam is nie gesluit nie**: vloere waarvan die snit nie gesluit kan word nie, word nie gemeet nie en tel as niks. Sluit die soliede liggaam ({{ui:Entiteitinligting}} sê "Solid: Ja") vir volle syfers.
- **Sy basis het meer as een omtrek**: die grootste word as die voetspoor gebruik.

## Goed om te weet

- {{ui:IFC vir BimCraft (.ifc)}} is 'n ander uitvoer: dit stuur net vorms en name, sonder vloere of oppervlaktes.
- Niks word opgelaai nie. Die lêer word aan die BimCraft-oortjie op hierdie rekenaar oorhandig.
