---
title: Volg mij: een vlak langs een pad vegen
summary: Maak pijpen, kabels, trapleuningen, lijsten en ringen door een vlak langs randen, bogen of een kromme te vegen.
keywords: volg mij, vegen, pad, pijp, kabel, buis, trapleuning, lijst, goot, ring, torus, draaien, extruderen langs
from: ec7b3839
---

{{ui:Volg mij}} verplaatst een vlak langs een pad en bouwt het volume dat het doorloopt. Het vlak behoudt zijn vorm en blijft haaks op het pad, en bij elke hoek van het pad komen de stukken samen op een schone verstekverbinding.

## Een kabel maken

1. Teken het pad: een {{ui:Kromme}} door de punten waar de kabel doorheen gaat (hij mag stijgen en dalen), of {{ui:Lijn}}en en {{ui:Boog}}en die uiteinde aan uiteinde verbonden zijn.
2. Teken aan het begin van het pad de doorsnede van de kabel: een klein {{ui:Cirkel}} dwars op het pad. Start de cirkel op het eindpunt van het pad en draai hem zodat hij langs het pad wijst; of teken hem op een vlak dat het pad daar kruist.
3. Selecteer het pad (één klik selecteert een hele kromme of boog; {{key:Ctrl}}+klik voegt meer randen toe).
4. Klik op {{ui:Volg mij}} in de groep {{ui:Wijzigen}}, en klik daarna op de cirkel.

De buis is een gesloten volume, met gladde (zachte) zijden.

## Zonder het pad eerst te selecteren

Klik op {{ui:Volg mij}}, klik op het vlak, en klik daarna op elke rand van het pad. Het pad is de keten van randen door die rand heen, tot waar drie of meer randen samenkomen.

## Wat u moet weten

- **Gesloten paden** (een cirkel, een gesloten kromme, de omtrek van een rechthoek) maken een ring: het vlak wordt opgebruikt en de ring sluit zich op zichzelf. Teken een cirkel op de grond als pad en een kleine cirkel die er dwars op staat voor een donut.
- **Naast het pad:** het vlak hoeft het pad niet te raken. Een profiel dat naast een pad is getekend, veegt er langs mee, zoals een lijst langs de bovenkant van een muur.
- **Het pad mag niet vertakken**, en moet één samenhangende keten zijn. ModelCraft meldt dat wanneer dat niet zo is.
- **Een vlak dat langs het pad ligt** (in hetzelfde vlak als de eerste rand van het pad) kan niet worden geveegd: draai het zodat het het pad kruist.
- Het is één stap ongedaan maken.
