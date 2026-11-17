---
title: Labels: sets dingen tonen en verbergen
summary: Geef groepen en componenten een label, zoals Meubilair of Wanden, en verberg of toon alles met dat label in één keer.
keywords: labels, label, lagen, laag, tonen, verbergen, zichtbaarheid, ordenen, meubilair, wanden, zonder label, label hernoemen, label verwijderen
from: c1a95a05
---

Een label is een naam die u groepen en componenten geeft, zoals **Meubilair**, **Wanden** of **Bouwplaats**, zodat u alles met dat label in één keer kunt verbergen of tonen. Labels zijn wat CAD-programma's lagen noemen. Om één ding per keer te verbergen, zie [Verbergen, isoleren en weer tonen](topic:hide-isolate).

## Een label maken

1. Klik in {{ui:Labels}} rechts op {{ui:Label toevoegen}}.
2. Typ de naam en druk op {{key:Enter}}.

Om een label te hernoemen, klikt u op de naam in {{ui:Labels}}, typt u de nieuwe naam en drukt u op {{key:Enter}}. Twee labels kunnen niet dezelfde naam hebben.

## Groepen en componenten labelen

1. Selecteer een of meer groepen of componenten.
2. Kies in {{ui:Entiteitsinformatie}} het label bij {{ui:Label}}. {{ui:Nieuw label…}} maakt een nieuw label aan en geeft de selectie dat label.

{{ui:Zonder label}} verwijdert het label. Het getal naast elk label in {{ui:Labels}} geeft aan hoeveel groepen en componenten het hebben.

Label groepen en componenten, niet losse vlakken en randen: teken de dingen die u wilt labelen eerst als groepen (selecteer ze, {{key:Shift+G}}).

## Verbergen en tonen

Klik op het oog naast een label. Alles met dat label verdwijnt uit beeld, waar het ook in het model zit (ook binnen andere groepen), en klikken en snappen gaan er langs heen. Klik nogmaals op het oog om het weer te tonen. Dingen zonder label worden altijd getoond ({{ui:Zonder label}}).

Als u binnen een groep bewerkt waarvan u het label verbergt, dan sluit de groep.

## Een label verwijderen

Klik op de prullenbak ernaast. Wat het label had, krijgt {{ui:Zonder label}} en wordt getoond.

## Let op

- Labels, hun namen en welke ervan verborgen zijn, worden opgeslagen in het ModelCraft-bestand. Een gelabelde groep naar een ander model kopiëren neemt het label mee.
- Verbergen en tonen van een label, en elke andere wijziging aan labels, is één stap ongedaan maken.
- Exports bevatten alles, ook verborgen labels, net als verborgen dingen.
- Lagen in DWG- en DXF-situatietekeningen worden nog niet als labels geïmporteerd: de hele tekening komt binnen als één groep.
