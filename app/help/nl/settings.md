---
title: ModelCraft-instellingen
summary: Kies de toetsstijl die u kent, laat een trackpad draaien en verschuiven zonder de cameraknoppen, en zet vastklikken en botsen van volumes aan of uit.
keywords: instellingen, voorkeuren, bediening, toetsstijl, toetsenkaart, sneltoetsen, blender, trackpad, touchpad, scrollen, draaien, knijpen, vastklikken, snappen, botsen, botsing, overlappen, snijden, erdoorheen
from: caf77d5b
---

Open {{ui:Instellingen}} met het tandwiel in de app-balk of {{key:Mod+,}}. Het eerste tabblad, {{ui:ModelCraft}}, bevat de instellingen die bij deze app horen; {{ui:Algemeen}} bevat de instellingen die alle CadCraft-apps delen (thema, werkbalk, panelen). De instellingen van ModelCraft gelden alleen in de app: u wijzigt ze hier, en deze browser onthoudt ze.

## Bediening: welke toetsen en muisknoppen

Twee toetsstijlen. Wissel ertussen hier, met {{ui:Toetsen: Duwen/trekken}} / {{ui:Toetsen: Modeleerder}} rechtsonder in de weergave, of aan het eind van het menu {{ui:Meer}} op de werkbalk:

- **Duwen/trekken-stijl** (de start; de letters van duwen-en-trekken-modelleerders zoals SketchUp): een letter kiest een tool — {{key:L}} lijn, {{key:R}} rechthoek, {{key:P}} duwen/trekken, {{key:M}} verplaatsen, {{key:Q}} draaien, {{key:S}} schalen, {{key:G}} component maken. Zie [Toetsen en muisacties](topic:keyboard).
- **Modeleerder-stijl** (de toetsen van mesh-modelleerders zoals Blender): eerst selecteren, dan meteen handelen op de selectie. {{key:G}} verplaatst hem, {{key:R}} draait hem en {{key:S}} schaalt hem vanaf de aanwijzer — geen eerste klik nodig. Terwijl hij beweegt, vergrendelt {{key:X}}, {{key:Y}} of {{key:Z}} de rode, groene of blauwe as, stelt een getal dat u typt de afstand in (of graden, of factor), en zet een klik of {{key:Enter}} hem neer; {{key:Esc}} of een rechtsklik zet hem terug. Daarna bent u weer in {{ui:Selecteren}}.

De toetsstijl is dezelfde keuze als de menustijl: de toetsstijl Modeleerder is de menustijl {{ui:Modeleerder}}, en het kiezen van de een kiest de ander. Zie [Menu's, toetsen en muis](topic:menus-keys-and-mouse). De volledige lijst van de Modeleerder staat in [Toetsen en muisacties](topic:keyboard#modeler-keys). De tooltips op de werkbalk en de startkaart volgen de stijl die u kiest.

## Scrollen: muiswiel of trackpad

- **Zelf bepalen** (de start): ModelCraft let op het scrollen. Zijwaarts of fijn scrollen, zoals een trackpad stuurt, draait; hele klikjes van het wiel zoomen.
- **Muiswiel**: scrollen zoomt altijd naar de aanwijzer.
- **Trackpad**: veeg met twee vingers om te draaien, houd {{key:Shift}} ingedrukt en veeg om te verschuiven, knijp om te zoomen. U hebt de knoppen {{ui:Draaien}}, {{ui:Verschuiven}} of {{ui:Zoomen}} nooit nodig.

Knijpen zoomt in elke keuze. Als "Zelf bepalen" verkeerd raadt voor uw muis of trackpad, kies dan de juiste.

:::tip
In de Modeleerder-stijl kunt u ook draaien door {{key:Alt}} ingedrukt te houden en te slepen, en verschuiven met {{key:Alt+Shift}} en een sleep — handig op een laptop zonder middelste knop.
:::

## Vastklikken

**Vastklikken aan punten, randen en assen** (aan bij de start) trekt de aanwijzer naar eindpunten, middelpunten, randen, hulplijnen en de rode, groene en blauwe assen — zie [Inferentie](topic:inference). Zet het uit als u iets vrij wilt plaatsen dicht bij andere geometrie, zonder dat het springt. Vlakken, de grond en de asvergrendelingen werken ook met vastklikken uit.

De knop {{ui:Vastklikken}} rechtsonder in de weergave doet hetzelfde voor het werk van deze sessie (die keuze wordt ook opgeslagen). In de Modeleerder-stijl schakelt {{key:Shift+Tab}} het om.

## Volumes stoppen waar ze elkaar raken

**Volumes stoppen waar ze elkaar raken** (aan bij de start) voorkomt dat een wand door een andere wand wordt gesleept. Bij {{ui:Verplaatsen}} (en {{key:G}}, en plakken-en-dan-verplaatsen met {{key:Mod+D}}) glijdt de selectie tot aan het andere volume en stopt er vlak tegenaan; bij {{ui:Duwen/trekken}} stopt een vlak waar het een ander volume raakt. Rusten op iets en er langs schuiven is prima — alleen het naar binnen dringen wordt tegengehouden. Dingen die al overlappen wanneer u begint, kunt u nog steeds uit elkaar trekken.

Om iets bewust door iets heen te duwen, klikt u rechtsonder op {{ui:Botsen}} (of zet u de instelling uit), maakt u de verplaatsing, en klikt u er opnieuw op.

:::note
Botsingen worden gecontroleerd bij verplaatsen en duwen/trekken. {{ui:Draaien}} en {{ui:Schalen}} controleren ze nog niet, en losse geometrie die elkaar raakt, voegt zich nog steeds samen, zoals altijd: houd losse dingen gescheiden in [groepen](topic:groups-components), zodat ze gescheiden blijven.
:::

## 3D-printerbed

Het formaat van het bed van uw printer: {{ui:Niet ingesteld}} (de start), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 of 300 × 300 × 400 mm. Kies het formaat dat het dichtst bij het bouwvolume van uw printer ligt. [Controleren op 3D-printen](topic:print-3d) meldt dan wanneer een model groter is dan het bed; bij {{ui:Niet ingesteld}} wordt het formaat niet gecontroleerd.

## Draaien en verschuiven

**Draaien om wat onder de cursor ligt** (aan bij de start): draaien gebeurt om het deel van het model onder de aanwijzer, en verschuiven houdt dat punt onder de aanwijzer; boven lege ruimte gebruiken beide het midden van de weergave. Zet het uit om altijd om het midden van de weergave te draaien. **Draaisnelheid** en **Verschuifsnelheid** lopen van 0.25× tot 3× (1× is de start) en gelden voor de muis, het trackpad, aanraken en de pijltoetsen. Zie [Draaien, verschuiven en zoomen](topic:orbit-pan-zoom).

## Hoekindicator

Wat er in de hoek van de 3D-weergave wordt getoond: **Kubus (weergave)** (de start; rechtsboven — klik op een vlak, rand of hoek om vanaf daar te kijken, sleep hem om te draaien, sleep de kompasring om het model te draaien), **Asicoon** (een klein X-, Y-, Z-merkteken linksonder dat meedraait met de weergave: X rood, Y groen, Z blauw) of **Geen**. Zie [De kubus van de weergave](topic:view-cube).
