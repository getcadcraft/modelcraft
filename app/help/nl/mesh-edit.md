---
title: Een mesh bewerken in de Mesh-werkomgeving
summary: Selecteer de hoekpunten, randen en vlakken van een mesh, verplaats ze, en extrudeer, zet in, schuin af, snijd, voeg samen, vul en overbrug ze, met beide toetssets.
keywords: mesh, bewerkingsmodus, mesh-werkomgeving, hoekpunt, hoekpunten, rand, randen, vlak, vlakken, extruderen, inzetten, afschuinen, lus snijden, mes, halveren, draaien, samenvoegen, oplossen, vullen, rasteren vullen, brug, overbruggen, verdelen, schuiven, proportionele bewerking, verloop, werkomgeving
from: 92a372dd
---

De **Mesh**-werkomgeving bewerkt een [mesh](topic:meshes) punt voor punt: de hoekpunten, randen en vlakken. Geometrie van duwen en trekken blijft in de **Model**-werkomgeving.

## Openen

- Kies {{ui:Mesh}} in de lijst {{ui:Werkomgeving}} links in de werkbalk. De geselecteerde mesh opent voor bewerking; een geselecteerde groep of component wordt eerst in een mesh omgezet (één stap ongedaan maken).
- Of dubbelklik op een mesh, of selecteer hem met de modelertoetsen en druk op {{key:Tab}}.
- Zonder selectie biedt het paneel meshes aan om toe te voegen: vlak, raster, kubus, cirkel, cilinder, kegel, bol, icosfeer en torus. Een nieuwe mesh komt waar de weergave naar kijkt en opent voor bewerking.

{{ui:Terug naar Model}} (of de lijst, {{key:Tab}} met de modelertoetsen, {{key:Esc}} zonder selectie met de toetsen van duwen en trekken) gaat terug naar Model met de mesh geselecteerd. Terwijl de Mesh-werkomgeving open is, is de rest van het model vervaagd en zijn de tekengereedschappen van Model weggelegd.

## Selecteren

| Doe | Om te |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Hoekpunten, randen of vlakken selecteren |
| Klik | Er één selecteren; {{key:Shift}}+klik voegt toe of haalt weg |
| Sleep een vak | Selecteer wat erin ligt en zichtbaar is; {{key:Shift}} voegt toe, {{key:Ctrl}} haalt weg |
| {{key:Alt}}+klik op een rand, of dubbelklik erop | De randlus (een vlaklus in vlakmodus; de hele rand bij een open rand) |
| {{key:Ctrl}}+{{key:Alt}}+klik op een rand | De randring |
| Drievoudig klikken | Alles wat ermee verbonden is |

De groep {{ui:Selecteren}} heeft ook {{ui:Alles}}, {{ui:Verbonden}}, {{ui:Lus}}, {{ui:Ring}}, {{ui:Meer}} en {{ui:Minder}}.

## Verplaatsen, draaien, schalen

{{ui:Verplaatsen}}, {{ui:Draaien}} en {{ui:Schalen}} beginnen bij de aanwijzer: verplaats hem, klik dan of druk op {{key:Enter}} om de selectie neer te zetten, of op {{key:Esc}} om te annuleren. {{key:X}}, {{key:Y}} of {{key:Z}} (of de pijltoetsen) vergrendelen een as. Typ een afstand, hoek of factor voor een exacte waarde — [berekeningen](topic:value-box#calculations) werken ook.

**Proportioneel bewerken** ({{ui:Proportioneel}}, of het paneel): hoekpunten dicht bij de selectie volgen een verplaatsing, minder naarmate ze verder weg zijn, tot het bereik dat u instelt, met het verloop dat u kiest. Zet {{ui:Alleen langs de mesh}} aan om langs randen te meten in plaats van recht.

{{ui:Schuiven}} verplaatst een geselecteerde randlus langs de randen ernaast.

## De vorm veranderen

| Gereedschap | Doet |
|---|---|
| {{ui:Extruderen}} | Trekt de geselecteerde vlakken uit langs hun normaal, met nieuwe zijvlakken (of maakt vlakken van open randen). Typ de afstand |
| {{ui:Inzetten}} | Een band binnen de omtrek van de geselecteerde vlakken; druk opnieuw op {{key:I}} voor elk vlak apart |
| {{ui:Afschuinen}} | Snijdt de geselecteerde randen (of, {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, hoekpunten) op een breedte; het wiel of de plus- en minustoets voegt segmenten toe voor een afgeronde rand |
| {{ui:Lus snijden}} | Wijs naar een rand: nieuwe lussen over de ring van vierhoekige vlakken; het wiel bepaalt hoeveel; klik om te snijden |
| {{ui:Mes}} | Klik op punten op randen of hoeken; {{key:Enter}} snijdt recht over de vlakken ertussen, zoals u ze ziet |
| {{ui:Halveren}} | Teken een lijn op het scherm: de geselecteerde vlakken (of alle) worden erlangs gesneden |
| {{ui:Draaien}} | Draait de geselecteerde vlakken of open randen in stappen rond de blauwe as (het wiel bepaalt de stappen); een volledige draai sluit |
| {{ui:Verdelen}} | Snijdt de geselecteerde randen in tweeën; hele vlakken worden een raster |
| {{ui:Samenvoegen}} | De geselecteerde hoekpunten worden één, in hun midden |
| {{ui:Oplossen}} | Haalt de selectie weg maar bewaart het oppervlak: vlakken worden samengevoegd |
| {{ui:Vullen}} | Een vlak over een geselecteerde open rand (of tussen twee open randen) |
| {{ui:Rasteren vullen}} | Vult een open rand met een even aantal randen met een raster van vierhoeken |
| {{ui:Brug}} | Verbindt twee geselecteerde open randlussen met vlakken |
| {{ui:Kreuk}} | Hoe scherp de geselecteerde randen blijven wanneer de mesh door een subdivisieoppervlak wordt gladgemaakt: beweeg weg van het midden, gebruik het wiel (stappen van 0.1) of typ 0 tot 1. Het paneel toont de kreuk van de geselecteerde randen en neemt ook een getypte waarde aan. Gekreukte randen worden in magenta getekend |
| {{ui:Spiegelen}}, {{ui:Gladmaken}}, {{ui:Verwijderen}} | Keert vlakken om; maakt hoekpunten glad richting hun buren; verwijdert volgens de selectiemodus |

Elk is één stap ongedaan maken. Textuurcoördinaten, kleuren en gewichten gaan mee naar de nieuwe vlakken en hoekpunten.

## Opnieuw meshen

{{ui:Opnieuw meshen}} maakt de hele mesh opnieuw als gelijkmatige driehoeken van één grootte, gevraagd op het moment dat u erop drukt (kleiner is fijner en trager). Het sluit gaten, verbindt stukken die overlappen, en egaliseert een mesh die beeldhouwen heeft uitgerekt. Scherpe randen worden heel licht afgerond. UV's, verf en kreuken beginnen opnieuw. Eén stap ongedaan maken.

## Retopologie

Om een nieuwe, schonere mesh te bouwen over een gedetailleerde (een beeldhouwwerk, een scan), kiest u de gedetailleerde onder {{ui:Retopologie}} › **Bouwen op** in het paneel, daarna:

- **Verplaatste punten op het oppervlak snappen:** punten die u verplaatst, en randen die u extrudeert, komen op het oppervlak terecht.
- **De geselecteerde punten erop zetten** verplaatst de geselecteerde punten er nu naartoe (één stap ongedaan maken).
- **De randen van deze mesh voor laten zien** tekent de mesh die u bouwt over het oppervlak, zodat u het kunt zien.

## De laatste bewerking aanpassen

Na {{ui:Inzetten}}, {{ui:Afschuinen}}, {{ui:Lus snijden}}, {{ui:Verdelen}}, {{ui:Gladmaken}}, {{ui:Rasteren vullen}} of {{ui:Draaien}} toont het paneel de instellingen (breedte, segmenten, profiel, sneden …). Wijzigt u er één, dan wordt de bewerking opnieuw uitgevoerd vanaf het begin, nog steeds als één stap ongedaan maken.

## Toetsen

| | Toetsen van duwen en trekken | Modelertoetsen |
|---|---|---|
| Verplaatsen, draaien, schalen | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} twee keer schuift) |
| Extruderen, inzetten | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Verwijderen | {{key:E}} of {{key:Delete}} | {{key:X}} of {{key:Delete}} |
| Kreuk | {{key:Shift+C}} | {{key:Shift+E}} |
| Alles selecteren, selectie opheffen, omkeren | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Beide | {{key:Ctrl+B}} afschuinen, {{key:Ctrl+R}} lus snijden, {{key:K}} mes | hetzelfde, en {{key:F}} vullen, {{key:M}} samenvoegen, {{key:Ctrl+X}} oplossen, {{key:L}} / {{key:Ctrl+L}} verbonden, {{key:Alt+N}} spiegelen, {{key:O}} proportioneel, {{key:Shift+V}} hoekpuntschuiven |

Zie ook [Meshes](topic:meshes), [Modifiers op een mesh](topic:modifiers) en [Nog niet beschikbaar](topic:not-built-yet).
