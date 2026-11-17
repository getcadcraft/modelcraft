---
title: Schalen met factoren en krimptoeslag
summary: Schaal een selectie met een factor per as rond een punt dat u kiest, of maak een patroon groter met het percentage waarmee een gegoten onderdeel krimpt.
keywords: schalen, niet-uniform, factor, percentage, uitrekken, krimp, krimpen, gieten, patroon, gieterij, toeslag, formaat wijzigen
from: 37e1bbff
---

Het schaalgereedschap ({{key:S}}) schaalt gelijkmatig, of sleept een grip om één of twee richtingen uit te rekken. **{{ui:Schalen met factoren…}}** (menu Extra, of de groep Wijzigen) is de getypte vorm: een getal voor elk van de drie assen.

1. Selecteer randen, vlakken, groepen of componenten.
2. Open {{ui:Schalen met factoren…}}. Typ een factor voor rood, groen en blauw. Een factor kan `1.015`, `101.5%` of `+1.5%` zijn (en `-2%` voor kleiner). {{ui:Hetzelfde op alle drie de assen}} kopieert de eerste naar de andere twee.
3. Kies wat **op zijn plaats blijft**: het midden van de selectie, de laagste hoek, het midden van de onderkant, of de oorsprong.
4. De regel onder de velden toont de huidige grootte en de grootte na het schalen. {{ui:Schalen}} voert het uit in één stap ongedaan maken.

De assen zijn die van de geopende groep (op het hoogste niveau die van het model). Een groep of component die gedraaid is, komt scheef uit als de factoren verschillen; schaal in plaats daarvan de groep die hem bevat. De inhoud van een component wordt niet aangeraakt, dus de andere kopieën ervan blijven zoals ze zijn.

## Krimptoeslag

Een gegoten onderdeel krimpt bij het afkoelen, dus het patroon wordt groter gemaakt. Typ onder **Krimptoeslag** het percentage voor elke as (uw gieterij of modelmaker geeft het voor uw metaal; 1.5 % hieronder is slechts een voorbeeld) en druk op {{ui:Als factoren gebruiken}}.

- **Het percentage zelf** maakt de factor 1 plus het percentage: 1.5 % geeft 1.015, wat een krimpliniaal aangeeft.
- **Precies genoeg** maakt de factor 1 gedeeld door één min het percentage: 1.5 % geeft 1.0152, zodat het gietstuk op de grootte van het onderdeel uitkomt nadat het zoveel is gekrompen.

Uw laatste percentages worden in deze browser onthouden.

:::note
Het percentage is aan u: ModelCraft weet niets over uw metaal, mal of proces.
:::
