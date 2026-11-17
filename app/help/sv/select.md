---
title: Markera objekt
summary: Klicka, dubbelklicka och trippelklicka, dra en fönster- eller korsande ruta, lägg till och ta bort med modifierartangenter, och ta bort.
keywords: markera, markering, fönster, korsande, lägg till i markering, avmarkera, markera allt, trippelklick, dubbelklick, ta bort, radera
from: d56d1f89
---

{{ui:Markera}} ({{key:Space}}) är verktyget ModelCraft startar med, och det {{key:Esc}} för dig tillbaka till. Markerade saker blir blå, och {{ui:Entitetsinfo}} till höger säger vad de är.

## Klicka

| Gör så här | Markerar |
|---|---|
| Klicka på en yta eller kant | Den ytan eller kanten |
| Klicka på en grupp eller komponent | Hela gruppen eller komponenten |
| Dubbelklicka på en yta | Ytan och dess kanter |
| Dubbelklicka på en kant | Kanten och ytorna på var sida |
| Dubbelklicka på en grupp eller komponent | Öppnar den för redigering (se [Grupper och komponenter](topic:groups-components)) |
| Trippelklicka på en yta eller kant | Allt som är kopplat till den: hela objektet |
| Klicka på tomt utrymme | Ingenting (rensar markeringen) |
| Dubbelklicka på tomt utrymme när en grupp redigeras | Stänger gruppen |

Kanter är lättare att träffa än ytor: när pekaren är inom några pixlar från en kant tar klicket kanten.

## Dra en ruta

- **Vänster till höger** ritar en solid ruta: en **fönstermarkering**. Endast saker som helt ligger inuti den markeras.
- **Höger till vänster** ritar en streckad ruta: en **korsande markering**. Allt som rutan rör markeras, och en yta markeras när rutan ligger helt inne i den.

En grupp eller komponent räknas som en sak: en fönstermarkering måste rymma hela den, en korsande markering behöver bara röra den.

## Lägg till och ta bort

Håll ned en tangent medan du klickar eller drar:

| Tangent | Effekt |
|---|---|
| {{key:Shift}} | Växlar: lägger till det som inte är markerat, tar bort det som är det |
| {{key:Mod}} | Lägger till |
| {{key:Shift}} och {{key:Mod}} tillsammans | Tar bort |

För att markera allt i modellen (eller allt i gruppen du redigerar), tryck {{key:Mod+A}}.

## Rensa markeringen

Tryck {{key:Esc}} (med {{ui:Markera}} som verktyg), eller klicka på tomt utrymme.

## Ta bort det markerade

Tryck {{key:Delete}} eller {{key:Backspace}}. Ytor, kanter, grupper och hjälplinjer i markeringen tas bort i ett steg; {{key:Mod+Z}} hämtar tillbaka dem.

Att ta bort en kant tar bort de ytor som behöver den, om inte kanten bara skilde två ytor i samma plan: då slås de två ytorna ihop till en. Att ta bort en yta lämnar kvar dess kanter. Se [Radera och städa upp](topic:erase).

## Markera inuti en grupp

Att klicka på en grupp markerar hela gruppen. För att markera en yta inuti den, dubbelklicka på gruppen för att öppna den och klicka sedan. Medan en grupp är öppen når klick bara det som finns inuti den; allt annat tonas ned. Tryck {{key:Esc}} utan något markerat, eller dubbelklicka på tomt utrymme, för att stänga den.

{{ui:Disposition}} till vänster markerar grupper och komponenter efter namn, vilket hjälper när de är gömda bakom andra saker.
