---
title: Kies welk programma de afbeelding tekent
summary: De keuze Engine in het dialoogvenster Een afbeelding renderen: onze eigen twee engines, andere programma's in CadCraft Studio, en wat het web in plaats daarvan doet.
keywords: renderen, engine, renderer, renderengine, plug-in, plugin, studio, extern programma, getekend door, wachtrij, add-on-engine
from: be4b056a
---

{{ui:Een afbeelding renderen…}} heeft een keuze **Engine** boven Modus. Onze eigen twee engines zijn er altijd en werken overal; add-ons kunnen er meer toevoegen, en in CadCraft Studio bevat de lijst ook de programma's die de scène overnemen.

| Engine | Wat het doet | Waar |
|---|---|---|
| Ingebouwd: Fast | Het snelle beeld: daglicht, zachte schaduwen, glas- en metaallooks, in seconden | De browser en Studio |
| Ingebouwd: Path tracer | Licht dat tussen oppervlakken weerkaatst op uw videokaart of processor, de renderwachtrij en de andere computers in uw netwerk | De browser en Studio |
| De engine van een add-on | Hij tekent de afbeelding en geeft die terug: zie [De afbeelding tekenen met een ander programma](topic:render-other-program) | De browser (een engine geschreven in JavaScript) of Studio (een engine die een programma draait) |
| Een programma dat de scène overneemt | Studio zet de scène in zijn map en houdt die gelijk | Studio |
| Openen in … | Slaat de scène op en opent die in een programma; er komt niets terug: zie [De scène openen in een ander programma](topic:render-open-in) | Het web slaat het bestand op |

## Hoe de keuze werkt

- Het kiezen van Fast of de Path tracer wijzigt de Modus mee, en andersom. Verder verandert er niets aan het dialoogvenster voor wie nooit een andere engine gebruikt.
- Een engine die niet beschikbaar is, blijft in de lijst staan met de reden ("niet gevonden", "heeft een nieuwere versie nodig"); u kunt hem niet kiezen. In de browser toont een engine die alleen in Studio draait "slaat een bestand op": {{ui:Een afbeelding renderen…}} slaat dan de scène en de instellingen op in een bestand dat u naar dat programma brengt.
- De keuze wordt opgeslagen met de renderinstellingen van het bestand, en de engine die u het laatst koos, is de startengine voor bestanden die geen eigen keuze hebben.
- Een afbeelding van een ander programma vermeldt welk programma hem heeft getekend en zijn versie, in het dialoogvenster en in de renderwachtrij. De beloften van de pagina [Renderen](topic:render) gelden alleen voor **onze eigen** engines: een ander programma belicht, toont en bemonstert op zijn eigen manier, dus twee afbeeldingen van één scène zijn gelijk in camera, zon, lampen en belichting, niet pixel voor pixel.

## Wat elke engine krijgt

De scène gaat naar een ander programma als een **pakket**: het model als USD-bestand (hetzelfde bestand dat [Opslaan als USD](topic:usd) schrijft), en een instellingenbestand met wat een USD-importeur niet betrouwbaar kan meenemen: de exacte materiaalwaarden, de lampen die aan staan met hun vermogen en lichtprofielen, de zon, de lucht, de belichting en de camera zoals het dialoogvenster die zou tekenen. Er wordt nergens iets geüpload.

## De renderwachtrij

Een afbeelding of animatie voor een ander programma kan wachten in [de renderwachtrij](topic:render#the-render-queue), net als onze eigen; de taak onthoudt voor welke engine hij is. Een animatie gaat in één keer naar het programma.
