---
title: Menu's, toetsen en muis
summary: Kies een menustijl die past bij de modeler die u al kent, geef elk commando uw eigen toets, verplaats commando's tussen menu's, en stel in wat het wiel en de middelste en rechter muisknop doen.
keywords: menustijl, menu's, menubalk, werkbalk, sneltoetsen, sneltoetsen, toetsen, toetsenstijl, toetsenkaart, aanpassen, opnieuw toewijzen, muis, wiel, omkeren, zoomrichting, middelste knop, rechter knop, orbiteren, verschuiven, exporteren, importeren, overschakelen, vertrouwd, duwen en trekken, modeler
from: e56fce3d
---

De gereedschappen van ModelCraft zijn hetzelfde, hoe u ze ook bereikt. Een **menustijl** bepaalt waar ze op het scherm staan, hoe ze heten en met welke toetsen ze lopen. Kies er een in {{ui:Settings}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Menus, keys and mouse}}; de wijziging werkt meteen, en deze browser onthoudt haar.

## De stijlen

| Stijl | Wat u krijgt |
|---|---|
| {{ui:ModelCraft}} | De eigen werkbalk van ModelCraft (Bestand, Tekenen, Wijzigen, Ordenen, Bewerken, Camera) en de toetsen met één letter: {{key:L}} lijn, {{key:R}} rechthoek, {{key:P}} duwen/trekken, {{key:M}} verplaatsen, {{key:Q}} draaien, {{key:S}} schalen, {{key:E}} gum, {{key:O}} orbiteren. Het begin. |
| {{ui:Duwen en trekken}} | Een menubalk (Bestand, Bewerken, Beeld, Camera, Tekenen, Hulpmiddelen, Venster) boven een rij met de belangrijkste gereedschappen, met dezelfde toetsen met één letter. |
| {{ui:Modeleerder}} | Een kopmenubalk (Bestand, Bewerken, Beeld, Selecteren, Toevoegen, Object, Mesh) en de toetsen van meshmodelers: {{key:W}} selecteren, {{key:G}} grijpen, {{key:R}} draaien en {{key:S}} schalen van de selectie tegelijk ({{key:X}}, {{key:Y}} of {{key:Z}} vergrendelt een as terwijl het verplaatst), {{key:E}} duwen/trekken, {{key:B}} rechthoek, {{key:X}} verwijderen, {{key:A}} alles selecteren, {{key:Alt+A}} niets, {{key:Shift+D}} dupliceren, {{key:Mod+G}} groep, {{key:H}} verbergen. De middelste knop orbiteert; {{key:Shift}} en de middelste knop verschuiven, {{key:Mod}} en de middelste knop zoomen; de rechter knop annuleert wat een gereedschap doet. |
| {{ui:Beginner}} | Een lint waarvan het tabblad {{ui:Maken}} een paar grote knoppen heeft: vormen om neer te zetten, gaten, verplaatsen, draaien en schalen, uitlijnen, {{ui:Groep}} (gaten die in de vormen worden gesneden) en de controle voor 3D-printen; elk ander gereedschap staat op het tabblad {{ui:Meer gereedschappen}}. De rechter knop orbiteert, de middelste knop verschuift. Zie [De Beginner-stijl](topic:beginner). |

De toetsenstijl die u kunt kennen van {{ui:Keys}} rechtsonder in de weergave en van {{ui:Edit}} › {{ui:More}} is dezelfde keuze: de modelertoetsen kiezen zet de stijl {{ui:Modeleerder}}, en de toetsen van duwen en trekken kiezen gaat terug naar de stijl {{ui:ModelCraft}}. Had u in een oudere versie de modelertoetsen gekozen, dan opent ModelCraft eenmalig vanzelf in de stijl {{ui:Modeleerder}}.

:::tip
Een toets die bij de toetsen van duwen en trekken hoort, maar die uw stijl aan een ander commando geeft, doet niets, en de statusregel zegt waar het commando naartoe is gegaan ("In Modeleerder, Duwen en trekken is E"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} en de pijltoetsen behouden altijd hun betekenis, cijfers gaan altijd naar het waardevak, en terwijl een gereedschap iets verplaatst, winnen de eigen toetsen ervan.
:::

## Maak het uw eigen

1. Kies de stijl die het dichtst bij wat u wilt ligt, en klik daarna op {{ui:Aanpassen…}}.
2. Zoek op {{ui:Toetsen en menu's}} een commando (het zoekvak helpt). Klik op {{ui:Een toets toevoegen}} en druk op de toets. Klik op een toets om hem weg te halen.
3. Met een menubalk verplaatst {{ui:Waar het staat}} het commando naar een ander menu, of naar {{ui:Alleen toetsen}}.
4. Stel op {{ui:Muis}} het wiel en wat de knoppen doen in de 3D-weergave in.
5. Geef het een naam en klik op {{ui:Opslaan}}.

Een ingebouwde stijl opslaan maakt een eigen kopie ("Mijn Modeleerder"); de ingebouwde verandert nooit. Uw kopie leest toetsen zoals de stijl waarmee die begon: een kopie van {{ui:Modeleerder}} houdt de grijp-, draai- en schaaltoetsen direct tegelijk werkend.

## Muis

- **Muiswiel**: {{ui:Omhoog scrollen zoomt in}} (de standaard) of {{ui:Omhoog scrollen zoomt uit}}, en hoe snel. Een pinch op een touchpad zoomt altijd in de richting waarin uw vingers bewegen.
- **Slepen in de 3D-weergave**: {{ui:Eigen per weergave}} houdt de knoppen van ModelCraft (de middelste knop orbiteert, de rechter knop of {{key:Shift}} en de middelste knop verschuiven). Of zet de middelste en rechter knop op orbiteren, verschuiven, zoomen of niets; {{key:Shift}} met de knop wisselt orbiteren en verschuiven. De linkerknop hoort altijd bij het gebruikte gereedschap.
- **Touchpads**: {{ui:Instellingen}} › {{ui:ModelCraft}} › {{ui:Scrollen}} bepaalt nog steeds of twee vingers orbiteren (touchpad) of zoomen (muis). Zie [Orbiteren, verschuiven en zoomen](topic:orbit-pan-zoom).

## Neem het mee

{{ui:Exporteren}} bewaart de gebruikte stijl als een klein `.ccinput.json`-bestand; {{ui:Importeren…}} voegt er een toe, van een andere computer of van een collega. Een geïmporteerd bestand kan alleen naar de eigen commando's van ModelCraft verwijzen: al het andere erin wordt weggelaten en in de statusregel geteld. {{ui:Deze stijl verwijderen}} verwijdert een van uw eigen stijlen.

:::note
Deze instellingen blijven in deze browser. {{ui:Deze stijl in elke app gebruiken}} onder de stijlkaarten zorgt dat elke app opent in de bijpassende stijl: {{ui:Duwen en trekken}} hoort bij de menubalkstijlen van de andere apps. {{ui:Modeleerder}} heeft geen tegenhanger in de andere apps, dus het blijft een keuze van ModelCraft.
:::

Gerelateerd: [Toets- en muisacties](topic:keyboard) · [Instellingen van ModelCraft](topic:settings) · [Overstappen van andere modelers](topic:coming-from)
