---
title: Massa naar BimCraft sturen
summary: Geef duwen- en trekkenmassa's door aan BimCraft als massa-opties, met verdiepingen, voetafdruk, bruto vloeroppervlak en volume berekend uit elk volume.
keywords: massa, massa's, concept, opties, bimcraft, ifc, bim, duwen en trekken, verdiepingen, bruto vloeroppervlak, voetafdruk, volume, versturen, overdragen, bouwmassa, fase 2
from: 73c51f3f
---

## Wat u gaat doen

Zet de blokken die u met duwen en trekken hebt gemodelleerd om in massa-opties die BimCraft begrijpt, zodat het concept verder gaat als bouwmodel.

## Voordat u begint

Maak van elke massa een **groep** of **component** en geef die een naam. Elk wordt één optie. Losse geometrie wordt niet verstuurd.

## Versturen

1. Selecteer de groepen die u wilt versturen. Zonder selectie gaat elke groep en component op het hoogste niveau mee.
2. Kies {{ui:Exporteren}}, en daarna {{ui:Massa naar BimCraft…}}.
3. Typ de {{ui:Naam van de optieset}} en de {{ui:Verdiepingshoogte}}.
4. Controleer de lijst: de verdiepingen, voetafdruk, bruto vloeroppervlak en volume van elke optie.
5. Kies **Verzenden naar BimCraft** om BimCraft in een nieuw tabblad te openen met de opties, of {{ui:Opslaan als IFC}} om het bestand te downloaden en zelf in BimCraft te openen.

In BimCraft staan de opties onder "Massaopties in het model", waar er één de huidige optie kan worden en verder uitgewerkt kan worden tot wanden en vloeren.

## Hoe een volume een massa wordt

- **Verdiepingen** zijn de hoogte van het volume gedeeld door de verdiepingshoogte, afgerond en minimaal één. De verdiepingen delen daarna de hoogte van het volume gelijk, dus een blok van 10 m met verdiepingen van 3 m heeft 3 verdiepingen van 3.33 m.
- **Het oppervlak van een verdieping** is het oppervlak van de eigen horizontale doorsnede van het volume op het niveau van die verdieping. Een blok dat terugspringt heeft kleinere bovenverdiepingen, en het bruto vloeroppervlak is hun som.
- **De voetafdruk** is de omtrek van de doorsnede net boven de basis van het volume.
- **Het volume** is dat van het volume zelf.

In het IFC-bestand is elke optie een gebouwelement-proxy (de voetafdruk opgetild tot de hoogte van het volume) met één ruimte per verdieping die het bruto oppervlak van de verdieping draagt. Alle opties delen één gebouw, met zoveel bouwlagen als de hoogste optie.

## Vereenvoudigde vormen

Een eenvoudig rechtop blok gaat precies over zoals gemodelleerd. Al het andere wordt ook verstuurd, en de lijst zegt waarom de vorm vereenvoudigd is:

- **Niet al zijn verdiepingen zijn zo groot als de basis** (het springt terug of loopt schuin): de massa in BimCraft is de omtrek van de basis, opgetild tot de volledige hoogte, maar de vloeroppervlakken en het volume zijn die van het volume zelf.
- **Het volume is niet gesloten**: verdiepingen waarvan de doorsnede niet kan worden gesloten, worden niet gemeten en tellen als niets. Sluit het volume ({{ui:Entiteitsinformatie}} zegt "Solid: Yes") voor volledige cijfers.
- **De basis heeft meer dan één omtrek**: de grootste wordt als voetafdruk gebruikt.

## Goed om te weten

- {{ui:IFC voor BimCraft (.ifc)}} is een andere export: die verstuurt alleen vormen en namen, zonder verdiepingen of oppervlakken.
- Er wordt niets geüpload. Het bestand wordt overgedragen aan het BimCraft-tabblad op deze computer.
