---
title: Componenten die uitrekken
summary: Maak één kopie van een component breder, dieper of hoger, terwijl de onderdelen hun maat behouden: een langere tafel met dezelfde poten, een hogere boekenkast met de planken verder uit elkaar, een leuning waarvan de palen zich herhalen.
keywords: dynamisch component, uitrekken, component formaat wijzigen, parametrisch, benoemde maten, herhalen, array, poten, planken, leuning, regels, variabelen
from: b4c40f43
---

Een component schalen maakt alles erin groter, ook de poten en de latten. **Deze kopie uitrekken** wijzigt de breedte, diepte of hoogte van een component, terwijl elk onderdeel een regel volgt: een tafelblad groeit mee, de poten behouden hun dikte en blijven aan de uiteinden.

Het werkt op componenten die uit onderdelen bestaan, dat wil zeggen groepen of componenten binnen de component, zoals elk ding uit de [startbibliotheek](topic:starter).

## Een kopie uitrekken

1. Selecteer de component.
2. Klik in {{ui:Entiteitsinformatie}} op {{ui:Deze kopie uitrekken…}}.
3. Typ de nieuwe {{ui:Breedte (rood)}}, {{ui:Diepte (groen)}} en {{ui:Hoogte (blauw)}} en klik op {{ui:Rek}}.

Alleen die kopie verandert: ze wordt een eigen component, die onthoudt van welk origineel ze komt. Rek haar op elk moment opnieuw uit, dan wordt ze opnieuw berekend vanuit het origineel, zodat er niets verschuift. Andere kopieën van het origineel blijven zoals ze waren.

## De regels

Open de component (dubbelklik erop) en selecteer een van de onderdelen. {{ui:Entiteitsinformatie}} toont {{ui:Wanneer de component uitrekt}}, met een regel langs rood, groen en blauw:

| Regel | Wat het onderdeel doet | Bijvoorbeeld |
|---|---|---|
| {{ui:Rek}} | Groeit mee met de component; de afstanden tot beide zijden blijven gelijk | Een tafelblad |
| {{ui:Aan het begin blijven}} / {{ui:Aan het einde blijven}} | Behoudt zijn maat en zijn afstand tot die zijde | Poten |
| {{ui:Evenredig verplaatsen}} | Behoudt zijn maat; het midden verschuift evenredig | Planken, een deurklink |
| {{ui:Evenredig schalen}} | Plaats en maat schalen beide evenredig | De treden van een trap |
| {{ui:Herhalen}} | Kopieën ervan, telkens ({{ui:Elke}}), vanaf waar het begint tot aan de verre kant | De palen van een leuning |

{{ui:Automatisch}} (de standaard) berekent zelf welke regel gebruikt wordt en toont die: {{ui:Rek}} wanneer het onderdeel de component overspant, {{ui:Evenredig verplaatsen}} wanneer het ongeveer in het midden zit; anders blijft het aan de zijde waar het het dichtst bij staat.

## Let op

- De eigen vormen van de onderdelen worden gedeeld, daarom is een uitgerekte kopie licht. Een onderdeel bewerken verandert het in elke kopie.
- Een uitgerekte kopie volgt latere wijzigingen aan de regels of de indeling van het origineel niet: rek haar opnieuw uit om die over te nemen.
- Vlakken die los in de component zijn getekend (niet in een onderdeel), behouden hun maat; maak ze tot een onderdeel om ze mee te laten groeien.
- Regels en van welk origineel elke kopie is uitgerekt, worden opgeslagen in het ModelCraft-bestand.
