---
title: Een rand of kromme in gelijke delen verdelen
summary: Splits een lijn in gelijke stukken, of geef een boog of cirkel een nieuw aantal segmenten, met het gereedschap Verdelen.
keywords: verdelen, rand verdelen, gelijke delen, gelijke segmenten, rand splitsen, segmenten, onderverdelen, randen onderverdelen, boogsegmenten, cirkelsegmenten, punten langs een lijn
from: 5c3ce3ed
---

{{ui:Verdelen}} snijdt een rand in gelijke stukken, met een hoekpunt bij elke snede. Gebruik de hoekpunten om naar te snappen, om lijnen vanaf te starten, of om delen van een vlak te duwen en te trekken.

## Een rand verdelen

1. Klik op {{ui:Verdelen}} in de werkbalk, of selecteer een rand en klik op {{ui:Verdelen…}} in {{ui:Entiteitsinformatie}}.
2. Richt de aanwijzer op de rand. Markeringen tonen waar de sneden komen: in het midden van de rand zijn het twee delen; beweeg naar een uiteinde voor meer.
3. Klik om de rand in de getoonde delen te verdelen. Of typ een getal, zoals `5` (of `5s`, of `/5`), en druk op {{key:Enter}}: de rand wordt meteen verdeeld.

De stukken blijven geselecteerd, en het is één stap ongedaan maken. Een vlak waar de rand bij hoort, behoudt zijn vorm en krijgt de nieuwe hoekpunten.

## Een boog of cirkel verdelen

Richt de aanwijzer op een segment van een boog of cirkel: hij wordt als geheel verdeeld.

- Een boog of cirkel waarvan geen andere lijn de hoekpunten gebruikt, en die plat op zijn vlak ligt, wordt **opnieuw getekend met dat aantal segmenten** op de echte boog. De uiteinden blijven waar ze zijn, en het blijft één kromme, zodat u hem nog steeds met één klik kunt selecteren en de straal kunt wijzigen in {{ui:Entiteitsinformatie}}. Een cirkel van 24 zijden die in 8 wordt verdeeld, wordt een achthoek.
- Elke andere kromme — de rand van een uitgetrokken cilinder, een kromme getekend met {{ui:Kromme}}, een boog met lijnen aan zijn hoekpunten — krijgt nieuwe hoekpunten op gelijke lengtes langs de kromme, en niets beweegt.

## Met de modelleertoetsen

Het gereedschap is hetzelfde met de modelleertoetsen (Instellingen › ModelCraft › Sneltoetsen, of de menustijl Modeler), waar het in het menu {{ui:Mesh}} staat als {{ui:Randen onderverdelen}}.

## Aandachtspunten

- Getypte getallen lopen van 2 tot 1000; het verplaatsen van de aanwijzer geeft tot 100.
- Een kromme getekend met {{ui:Kromme}} behoudt zijn punten: na {{ui:Punten bewerken}} wordt hij opnieuw getekend vanaf die punten, en vervallen de nieuwe hoekpunten.

Zie ook [Vlakken tekenen met lijnen, rechthoeken, cirkels en bogen](topic:draw-faces) en [Exacte maten typen in het waardeveld](topic:value-box).
