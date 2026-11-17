---
title: Toetsen en muisacties
summary: Elke sneltoets, muisactie, trackpadgebaar en aanraakgebaar in ModelCraft, gegroepeerd naar wat ze doen.
keywords: toetsenbord, sneltoetsen, toetsen, hotkeys, muis, trackpad, aanraken, gebaren, spiekbriefje, ctrl, opdracht, pijltjestoetsen
from: e2348957
---

Dit zijn de toetsen voor duwen/trekken, de toetsen waarmee ModelCraft start. Voor de andere stijl, zie [Modeler-toetsen](topic:keyboard#modeler-keys) hieronder en [Instellingen van ModelCraft](topic:settings).

Sneltoetsen werken wanneer de 3D-weergave of een werkbalkknop focus heeft. Als u net in een veld van een paneel typte of een lijst in {{ui:Stijl}} wijzigde, klik dan eerst in de 3D-weergave, anders gaan uw toetsen naar dat veld. Zie [Toetsen, muizen en trackpads](common:keys) voor hoe toetsen op elke computer worden geschreven.

## Gereedschappen

| Toets | Gereedschap |
|---|---|
| {{key:Space}} | {{ui:Selecteren}} |
| {{key:L}} | {{ui:Lijn}} |
| {{key:R}} | {{ui:Rechthoek}} |
| {{key:C}} | {{ui:Cirkel}} |
| {{key:N}} | {{ui:Veelhoek}} |
| {{key:A}} | {{ui:Boog}} |
| {{key:F}} | {{ui:Offset}} |
| {{key:B}} | {{ui:Verven}} |
| {{key:P}} | {{ui:Duwen/trekken}} |
| {{key:M}} | {{ui:Verplaatsen}} |
| {{key:Q}} | {{ui:Draaien}} |
| {{key:S}} | {{ui:Schalen}} |
| {{key:E}} | {{ui:Gum}} |
| {{key:T}} | {{ui:Meetlint}} (meten) |
| {{key:D}} | {{ui:Maatvoering}} |
| {{key:O}} | {{ui:Draaien}} |
| {{key:H}} | {{ui:Verschuiven}} |
| {{key:Z}} | {{ui:Zoomen}} |

Gereedschapsletters werken alleen zonder modifiertoetsen: {{key:Shift}} met een letter doet niets, behalve de twee hieronder.

## Model en bestand

| Toets | Doet |
|---|---|
| {{key:G}} | Maak een component van de selectie |
| {{key:Shift+G}} | Maak een groep van de selectie |
| {{key:Shift+Z}} | Alles tonen (het hele model) |
| {{key:Mod+Z}} | Ongedaan maken |
| {{key:Mod+Y}} of {{key:Mod+Shift+Z}} | Opnieuw |
| {{key:Mod+S}} | Opslaan (downloadt het `.modelcraft`-bestand) |
| {{key:Mod+O}} | Een model openen |
| {{key:Mod+A}} | Alles selecteren (in de geopende groep, als er een open is) |
| {{key:Mod+C}} | Kopieer de selectie |
| {{key:Mod+X}} | Knip de selectie |
| {{key:Mod+V}} | Plakken: de kopie volgt de aanwijzer, klik waar hij moet komen |
| {{key:Mod+Shift+V}} | Plakken op dezelfde plaats (waar hij vandaan is gekopieerd) |
| {{key:Mod+D}} | Dupliceren: een kopie beweegt met de aanwijzer, klik om hem neer te zetten |
| {{key:Delete}} of {{key:Backspace}} | Wis de selectie |
| {{key:PageDown}} / {{key:PageUp}} | Volgende / vorige scène |
| {{key:F1}} | Deze Help openen of sluiten (ook {{ui:Help}} in de appbalk; {{key:Esc}} binnen de Help sluit hem) |
| {{key:Ctrl+Shift+F}} | Schermmodus: volledig scherm, dan balken verborgen, dan normaal (Control ook op een Mac) |

## Esc

{{key:Esc}} gaat elke keer dat u erop drukt één niveau terug:

1. Annuleert wat het gereedschap midden in doet (een lijn die wordt getekend, een duwen/trekken, een verplaatsing). Alles gaat terug.
2. Schakelt over naar {{ui:Selecteren}}.
3. Wist de selectie.
4. Sluit de groep die u bewerkt.

Het stopt ook scènes die worden afgespeeld. In het waardevak wist {{key:Esc}} wat u typte en keert terug naar het beeld.

## Terwijl een gereedschap werkt

| Toets | Doet |
|---|---|
| Een cijfer, of een van `. , - ' " [ < * /` | Begint met typen in het waardevak |
| {{key:Enter}} | Past toe wat u typte in het waardevak |
| {{key:Right}} | Vergrendelt op de rode as (druk opnieuw om te ontgrendelen) |
| {{key:Left}} | Vergrendelt op de groene as |
| {{key:Up}} | Vergrendelt op de blauwe as |
| {{key:Down}} | Vergrendelt evenwijdig aan de laatste rand waarover u zweefde vóór de eerste klik |
| Houd {{key:Shift}} ingedrukt | Houdt de richting vast waarop u gesnapt bent, zolang het ingedrukt is |
| {{key:Ctrl}}, {{key:Mod}} of {{key:Alt}} (Verplaatsen) | Schakelt tussen verplaatsen en kopiëren |

Pijltjestoetsvergrendelingen werken in {{ui:Lijn}}, {{ui:Rechthoek}}, {{ui:Cirkel}}, {{ui:Veelhoek}}, {{ui:Verplaatsen}}, {{ui:Schalen}} en {{ui:Meetlint}} (bij meten vanaf een punt), na de eerste klik. {{ui:Duwen/trekken}} beweegt altijd langs de richting van het vlak en heeft geen vergrendelingen. In {{ui:Draaien}} tonen de pijltjestoetsen na de eerste klik een melding "Vergrendeld", maar veranderen ze de draaiing niet.

## Pijltjestoetsen op andere momenten

Wanneer geen gereedschap midden in iets zit, verplaatsen de pijltjestoetsen de camera:

| Toets | Doet |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Draaien |
| {{key:Shift}} met een pijltjestoets | Verschuiven |

## Muis

| Actie | Doet |
|---|---|
| Klik | Gebruikt het huidige gereedschap |
| Indrukken, slepen, loslaten | Hetzelfde als twee klikken (voor tekengereedschappen); een kaderselectie (voor {{ui:Selecteren}}); wist onderweg (voor {{ui:Gum}}) |
| Dubbelklik | {{ui:Selecteren}}: vlak met zijn randen, rand met zijn vlakken, opent een groep; lege ruimte sluit de groep. {{ui:Duwen/trekken}}: herhaalt de laatste afstand |
| Drievoudige klik | {{ui:Selecteren}}: alles wat verbonden is |
| {{key:Shift}} + klik | {{ui:Selecteren}}: in en uit de selectie wisselen |
| {{key:Mod}} + klik | {{ui:Selecteren}}: aan de selectie toevoegen |
| {{key:Shift}} + {{key:Mod}} + klik | {{ui:Selecteren}}: uit de selectie verwijderen |
| Slepen met de middelste knop | Draaien, met elk gereedschap |
| {{key:Shift}} + slepen met de middelste knop | Verschuiven, met elk gereedschap |
| Slepen met de rechter knop | Verschuiven, met elk gereedschap |
| Wiel | Zoomen naar de aanwijzer |

Er is geen contextmenu met de rechtermuisknop.

## Trackpad

Wat een tweevingerveeg doet, hangt af van {{ui:Instellingen}} › {{ui:ModelCraft}} › Scrollen:

| Gebaar | Trackpad (of afgeleid) | Muiswiel |
|---|---|---|
| Tweevingerveeg | Draaien | Zoomen naar de aanwijzer |
| {{key:Shift}} + tweevingerveeg | Verschuiven | Zoomen |
| Knijpen | Zoomen naar de aanwijzer | Zoomen naar de aanwijzer |
| Tweevingerindrukken en slepen (secundaire klik ingedrukt) | Verschuiven | Verschuiven |

Zie [Draaien, verschuiven en zoomen](topic:orbit-pan-zoom#on-a-trackpad) en [Instellingen van ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Modeler-toetsen

Met {{ui:Instellingen}} › {{ui:ModelCraft}} › Besturing ingesteld op Modeler-stijl:

| Toets | Doet |
|---|---|
| {{key:W}} of {{key:Space}} | {{ui:Selecteren}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Lijn}} / {{ui:Rechthoek}} / {{ui:Cirkel}} / {{ui:Veelhoek}} |
| {{key:E}} | {{ui:Duwen/trekken}} (extruderen) |
| {{key:T}} | {{ui:Meetlint}} (meten) |
| {{key:D}} | {{ui:Maatvoering}} |
| {{key:G}} | Verplaats de selectie meteen, vanaf de aanwijzer |
| {{key:R}} | Draai de selectie om het midden (blauwe as) |
| {{key:S}} | Schaal de selectie vanuit het midden |
| {{key:X}} / {{key:Y}} / {{key:Z}} tijdens verplaatsen of draaien | Vergrendel de rode / groene / blauwe as (opnieuw om te ontgrendelen) |
| Klik of {{key:Enter}} | Zet hem neer |
| {{key:Esc}} of rechtermuisklik | Zet hem terug |
| {{key:Shift+D}} | Dupliceer en verplaats de kopie |
| {{key:X}} of {{key:Delete}} | Verwijder de selectie |
| {{key:A}} / {{key:Alt+A}} | Alles selecteren / niets selecteren |
| {{key:Tab}} | Open de geselecteerde groep of component; nogmaals om te sluiten |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Groep maken / component maken |
| Numpad {{key:1}} / {{key:3}} / {{key:7}} | Voor- / rechts- / bovenaanzicht ({{key:Mod}} voor achter- / links- / onderaanzicht) |
| Numpad {{key:5}} | Perspectief aan of uit |
| Numpad {{key:.}} | Zoom naar de selectie |
| {{key:Home}} of {{key:Shift+C}} | Alles tonen |
| {{key:Shift+Tab}} | Snappen aan of uit |
| Middelste knop slepen / met {{key:Shift}} / met {{key:Mod}} | Draaien / verschuiven / zoomen |
| {{key:Alt}} + slepen / {{key:Alt+Shift}} + slepen | Draaien / verschuiven (geen middelste knop nodig) |

Kopiëren, plakken, ongedaan maken, opslaan en openen behouden de hierboven vermelde toetsen. Getypte waarden, het waardevak en {{ui:Duwen/trekken}} werken in beide stijlen hetzelfde.

## Touchscreen

| Gebaar | Doet |
|---|---|
| Tik | Een klik met het huidige gereedschap |
| Dubbeltik | Een dubbelklik |
| Indrukken, slepen, loslaten | Hetzelfde als indrukken, slepen en loslaten met een muis |
| Twee vingers: knijpen | Zoomen |
| Twee vingers: samen bewegen | Verschuiven ({{ui:Instellingen}} › {{ui:ModelCraft}} › Touchscreen kan dit Draaien maken) |
| Drie vingers: samen bewegen | Draaien (Verschuiven wanneer twee vingers draaien) |
| Eén vinger stil houden | Rondt het gereedschap af, zoals Enter; als er niets gebeurt, sleep dan om te draaien |
| Een tweede vinger tijdens een actie met één vinger | Annuleert die actie |
| {{ui:Draaien}}-gereedschap, sleep dan met één vinger | Draaien |

Om op een touchscreen een waarde te typen, tikt u op het waardevak onderaan, typt u, en drukt u op de Enter- (of Go-) toets van het toetsenbord.

## Waar Verplaatsen zit

Verplaatsen zit in het gereedschap {{ui:Verplaatsen}}, toets {{key:M}}: kies wat u wilt verplaatsen, klik een basispunt, en klik dan op een tweede punt of typ een afstand. Zie [Verplaatsen, kopiëren en arrays maken](topic:move-copy).
