---
title: De UV's van een mesh indelen
summary: Markeer naden, ontvouw, projecteer en pak de texturecoördinaten van een mesh in de UV-werkomgeving, en controleer ze met een schaakbord en de rekkleuren.
keywords: uv, uv's, ontvouwen, ontvouwing, naad, naden, textuur, texturecoördinaten, atlas, inpakken, eiland, eilanden, schaakbord, rek, vervorming, boxprojectie, cilinderprojectie, bolprojectie, conform, hoekgebaseerd, lscm, abf
from: 00028f20
---

Een textuur is een vlakke afbeelding; een mesh is niet vlak. De **UV's** geven aan waar elke hoek van elk vlak op de afbeelding ligt. De UV-werkomgeving maakt ze: u snijdt de mesh open langs **naden**, legt de stukken plat (**ontvouwen**) en past ze in het vierkant (**inpakken**).

## Openen

Selecteer een mesh en kies {{ui:UV}} in de lijst {{ui:Workspace}}. Een groep of component wordt eerst een mesh, zoals in de Mesh-werkomgeving. De 3D-weergave verschuift naar de linkerhelft; de **UV-editor** rechts toont de vlakken van de mesh, uitgelegd op het textuurvierkant. Selecteren werkt zoals in de Mesh-werkomgeving, en wat u in de ene weergave selecteert, is ook in de andere geselecteerd.

## Naden markeren

Naden zijn plaatsen waar de mesh open mag worden gesneden; ze zijn rood in beide weergaven.

- Selecteer randen ({{ui:Rand}}, of {{key:2}}) en druk op {{ui:Naad markeren}} ({{key:Ctrl+E}}). {{ui:Naad wissen}} ({{key:Ctrl+Shift+E}}) haalt ze weg.
- {{ui:Naden bij scherpe hoeken}} markeert elke scherpe rand en elke rand waar vlakken samenkomen onder meer dan 60°: een doos valt uiteen in zijn zes zijden.
- {{ui:Naden uit UV's}} markeert naden waar de UV's al breken, bijvoorbeeld na een projectie.

Een gesloten stuk heeft naden nodig om plat te liggen: een bol heeft minstens één snede nodig, een buis een snede over de lengte.

## Ontvouwen

Selecteer de vlakken die u wilt indelen (of geen, voor de hele mesh) en druk op {{ui:Ontvouwen}} ({{key:U}}). Elk stuk tussen naden wordt plat gelegd, waarbij de hoeken zo getrouw mogelijk blijven (hoekgebaseerd platleggen); daarna worden de stukken in het vierkant ingepakt. {{ui:Conform}} ontvouwt in plaats daarvan met kleinste-kwadratenconforme afbeeldingen: sneller, iets minder getrouw bij sterk gebogen stukken. Een vorm die uit een vel plat materiaal kan worden gemaakt, zoals de zijkant van een cilinder die eenmaal is doorgesneden, ontvouwt zonder enige rek.

## Projecteren

Voor eenvoudige vormen is een projectie vaak voldoende:

| Projectie | Wat het doet |
| --- | --- |
| {{ui:Doos}} | Elk vlak op de zijde van de doos waar het het meest naartoe is gericht |
| {{ui:Cilinder}} | Rond de blauwe as: over de breedte is de hoek rond, omhoog is de hoogte |
| {{ui:Bol}} | Vanuit het middelpunt: over de breedte is de hoek rond, omhoog is de breedtegraad |
| {{ui:Vanuit beeld}} | Zoals de vlakken nu in de 3D-weergave worden gezien |

Een vlak over de verbinding van de cilinder of de bol blijft in één stuk, zodat de UV's iets voorbij de rechterrand van het vierkant kunnen lopen; daar herhalen texturen zich.

## Schikken

- {{ui:Inpakken}} past de stukken (eilanden) in het vierkant op één texelgrootte, elk zo gedraaid dat ze het minste ruimte innemen. Het paneel bepaalt de ruimte tussen de stukken.
- {{ui:90° draaien}} en {{ui:Spiegelen}} draaien of spiegelen de UV's van de geselecteerde vlakken.
- In de UV-editor sleept u een geselecteerd vlak om de UV's van de selectie te verplaatsen. Of u wijst naar de editor en drukt op {{key:R}} of {{key:S}}, en beweegt daarna om ze te draaien of te schalen (een klik bevestigt, {{key:Esc}} annuleert). {{key:G}} verplaatst zonder slepen. Dubbelklik op een vlak (of druk op {{key:L}}) om het hele eiland te selecteren. Het wiel zoomt; slepen met de middelste of rechtermuisknop verschuift; {{key:F}} past het vierkant weer in beeld.

Elke wijziging is één stap ongedaan te maken.

## Controleren

- {{ui:Schaakbord}} toont een geëtiketteerd schaakbordpatroon op de mesh in zijn UV's: gelijke, vierkante vakjes betekenen dat de textuur gelijkmatig ligt; de labels tonen de richting.
- {{ui:Rek}} kleurt elk vlak naar hoeveel de UV's het rekken: blauw is geen rek, via groen naar rood voor veel rek. Het paneel kiest of dat **hoeken gebogen** of **grootte veranderd** meet, en toont het gemiddelde.

Zie ook [Een mesh bewerken](topic:mesh-edit), [Meshes](topic:meshes) en [Modifiers op een mesh](topic:modifiers).
