---
title: De afbeelding tekenen met een ander programma
summary: Onze eigen path tracer tekent de afbeelding van Renderen; een ander programma kan hem alleen tekenen via een render-engine-add-on in CadCraft Studio. Wat er wordt meegenomen, en waarom sommige programma's nooit worden aangeboden.
keywords: renderen, engine, extern programma, add-on-engine, studio, achtergrond, wachtrij, usd, gltf, getekend door, blender, gpl
from: 150f94f1
---

De afbeelding in {{ui:Een afbeelding renderen…}} wordt getekend door **onze eigen engines**: Fast en de Path tracer, in de browser en in CadCraft Studio. Een ander programma kan hem alleen tekenen wanneer een **render-engine-add-on** het aanbrengt: zie [Een renderengine toevoegen met een add-on](topic:render-engine-addons). Om de scène naar een ander programma te brengen en er verder mee te werken, gebruikt u [De scène openen in een ander programma](topic:render-open-in) of [De scène naar een game-engine sturen](topic:render-unreal).

## Een afbeelding tekenen met de engine van een add-on

1. Zet de add-on aan in Instellingen › Add-ons. De engine verschijnt in de lijst Engine van {{ui:Een afbeelding renderen…}}.
2. Kies hem. De eigen instellingen verschijnen onder de lijst Engine.
3. Klik op {{ui:Renderen}}. In Studio vraagt Studio, de eerste keer dat een add-on een programma draait, in een eigen dialoogvenster. De voortgang wordt getoond terwijl hij tekent; {{ui:Stoppen}} beëindigt hem. De afbeelding verschijnt gemarkeerd met de engine die hem heeft getekend.

Een engine geschreven in JavaScript draait ook in de browser. Een engine die een programma op deze computer draait, draait alleen in Studio; in de browser verschijnt hij als een bestand om op te slaan.

## Wat wordt meegenomen

De engine krijgt een **pakket**: het model als USD-bestand (en een glTF-bestand wanneer hij erom vraagt), en een instellingenbestand met de exacte materiaalwaarden, de zon en de lucht, elke lamp die aan staat met zijn vermogen en lichtprofiel, de camera en de belichting. Elk programma belicht, toont en bemonstert op zijn eigen manier, dus afbeeldingen zijn gelijk in camera, zon, lampen en belichting, niet pixel voor pixel.

## Programma's die CadCraft nooit draait

CadCraft start nooit een programma onder de GNU GPL-licentie en vermeldt er nooit een als engine of als doel van Openen in. Blender is er een van, dus die staat niet in de lijst Engine. Een USD- of glTF-bestand dat is opgeslagen vanuit {{ui:Een afbeelding renderen…}} opent er nog steeds in, zoals in elk programma dat die bestanden leest.

:::note
Panorama- en stereocamera's en een hemelafbeelding (de kleuren van de lucht worden in plaats daarvan gebruikt) worden niet naar een ander programma meegenomen. Niets wat in een ander programma is gedaan, komt terug in het model.
:::
