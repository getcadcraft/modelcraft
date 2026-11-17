---
title: Meshes
summary: Zet een groep of component om in een mesh — het soort object waarmee 3D-contenttools modelleren — en weer terug in geometrie van duwen en trekken.
keywords: mesh, meshes, polygoon, polygonen, n-hoek, vierhoek, vierhoeken, hoekpunten, half-edge, uv, uv's, omzetten, omzetten naar mesh, omzetten naar geometrie, subdivisie, beeldhouwen, modelleren, 3d-content
from: e32363e8
---

ModelCraft heeft twee soorten geometrie. **Geometrie van duwen en trekken** is wat u tekent: platte vlakken die aan elkaar vastzitten, elkaar snijden en weer heel worden. Een **mesh** is het soort object waarmee 3D-contenttools modelleren: vlakken met een willekeurig aantal hoeken, elke hoek met eigen textuurcoördinaten (UV's), normalen en kleuren, en elk hoekpunt met waarden zoals gewichten. Een mesh wordt geplaatst zoals een groep of component, en staat naast geometrie van duwen en trekken in hetzelfde model.

## Een groep of component omzetten in een mesh

1. Selecteer een groep of component.
2. Klik in {{ui:Entiteitsinformatie}} op {{ui:Omzetten naar mesh}}.

Zijn vlakken worden de vlakken van de mesh (een vlak met gaten komt binnen als driehoeken), scherpe randen blijven scherp, zachte randen worden zacht geschaduwd, en verf, materialen en geïmporteerde texturen blijven op hun vlakken. Groepen en componenten erin worden samengevoegd tot de ene mesh. Losse randen worden weggelaten: een mesh bewaart vlakken. Elke plaatsing van een component toont de mesh. Het is één stap ongedaan maken.

## Wat Entiteitsinformatie toont

Selecteer een mesh om zijn vlakken, hoekpunten en randen te zien, of het een gesloten volume is (en zijn volume), en zijn grootte zoals geplaatst. Een mesh met open randen zegt hoeveel.

## Een mesh terug omzetten in geometrie van duwen en trekken

Selecteer de mesh en klik op {{ui:Omzetten naar geometrie}}. Platte vlakken komen terug zoals ze waren; een vlak waarvan de hoeken niet in één vlak liggen, komt terug als driehoeken. Scherpe randen zijn hard, de rest zacht. {{ui:Ontbinden}} zet de vlakken van een mesh rechtstreeks in de groep eromheen.

## Wat u moet weten

- Dubbelklik op een mesh om [zijn hoekpunten, randen en vlakken te bewerken](topic:mesh-edit) in de Mesh-werkomgeving. Zet hem om in geometrie om hem met duwen en trekken te bewerken; verplaats, draai, schaal, kopieer, verf, verberg en tag hem zoals elke groep.
- Exporten, 3D-printen, renders en VR zien een mesh als zijn vlakken.
- Een bestand met een mesh wordt opgeslagen als een nieuwere versie van het `.modelcraft`-bestand, dus ModelCraft 0.6 en ouder kan het niet openen; bestanden zonder mesh openen daarin net als voorheen. Zet meshes eerst om in geometrie om een bestand te delen met iemand met een oudere versie.
- Ongedaan maken op een mesh bewaart alleen wat elke stap wijzigde, dus zelfs een zeer grote mesh gaat snel terug.

Zie ook [Groepen en componenten](topic:groups-components) en [Nog niet beschikbaar](topic:not-built-yet).
