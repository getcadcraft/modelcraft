---
title: Objecten selecteren
summary: Klikken, dubbelklikken en drievoudig klikken, een venster of kruisvenster slepen, toevoegen en verwijderen met modifiertoetsen, en verwijderen.
keywords: selecteren, selectie, venster, kruisvenster, toevoegen aan selectie, selectie opheffen, alles selecteren, drievoudig klikken, dubbelklikken, verwijderen, wissen
from: d56d1f89
---

{{ui:Selecteren}} ({{key:Space}}) is de tool waarmee ModelCraft start, en de tool waarnaar {{key:Esc}} u terugbrengt. Geselecteerde dingen worden blauw, en {{ui:Entiteitsinformatie}} rechts laat zien wat ze zijn.

## Klikken

| Doe dit | Selecteert |
|---|---|
| Klik op een vlak of een rand | Dat vlak of die rand |
| Klik op een groep of component | De hele groep of component |
| Dubbelklik op een vlak | Het vlak en zijn randen |
| Dubbelklik op een rand | De rand en de vlakken aan weerszijden |
| Dubbelklik op een groep of component | Opent deze voor bewerking (zie [Groepen en componenten](topic:groups-components)) |
| Drievoudig klikken op een vlak of rand | Alles wat ermee verbonden is: het hele object |
| Klik op lege ruimte | Niets (wist de selectie) |
| Dubbelklik op lege ruimte terwijl u een groep bewerkt | Sluit de groep |

Randen zijn makkelijker te raken dan vlakken: als de aanwijzer binnen enkele pixels van een rand staat, pakt de klik de rand.

## Een kader slepen

- **Van links naar rechts** tekent een vol kader: een **venster**-selectie. Alleen dingen die er helemaal binnen liggen, worden geselecteerd.
- **Van rechts naar links** tekent een gestippeld kader: een **kruisvenster**-selectie. Alles wat het kader raakt, wordt geselecteerd, en een vlak wordt geselecteerd als het kader er volledig binnen ligt.

Een groep of component telt als één ding: een venster moet alles ervan binnen hebben, een kruisvenster hoeft het alleen te raken.

## Toevoegen en verwijderen

Houd een toets ingedrukt terwijl u klikt of sleept:

| Toets | Effect |
|---|---|
| {{key:Shift}} | Wisselt: voegt toe wat niet geselecteerd is, verwijdert wat wel geselecteerd is |
| {{key:Mod}} | Voegt toe |
| {{key:Shift}} en {{key:Mod}} samen | Verwijdert |

Om alles in het model te selecteren (of alles in de groep die u bewerkt), drukt u op {{key:Mod+A}}.

## De selectie opheffen

Druk op {{key:Esc}} (met {{ui:Selecteren}} als tool), of klik op lege ruimte.

## Geselecteerde dingen verwijderen

Druk op {{key:Delete}} of {{key:Backspace}}. Vlakken, randen, groepen en hulplijnen in de selectie worden in één stap verwijderd; {{key:Mod+Z}} haalt ze terug.

Het verwijderen van een rand verwijdert de vlakken die hem nodig hebben, tenzij de rand alleen twee vlakken in hetzelfde vlak scheidde: dan worden die twee vlakken één vlak. Het verwijderen van een vlak laat zijn randen staan. Zie [Wissen en opschonen](topic:erase).

## Selecteren binnen een groep

Klikken op een groep selecteert de hele groep. Om een vlak erin te selecteren, dubbelklikt u op de groep om hem te openen, en klikt u daarna. Terwijl een groep open is, bereiken klikken alleen wat erin zit; al het andere is verbleekt. Druk op {{key:Esc}} zonder selectie, of dubbelklik op lege ruimte, om de groep te sluiten.

De {{ui:Overzicht}} links selecteert groepen en componenten op naam, wat handig is als ze achter andere dingen verborgen zijn.
