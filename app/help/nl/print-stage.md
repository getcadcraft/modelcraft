---
title: Dingen op het printbed zetten en naar een printer sturen
summary: Voeg items uit de bibliotheek of uw eigen model toe aan het bed van uw printer, rangschik ze, bekijk de gesneden lagen, en stuur de print via usb of het netwerk, of sla de G-code op, zonder eerst een STL te exporteren.
keywords: printfase, 3d-printen, printer, bed, naar 3d-printer sturen, slicer, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, bibliotheek, rangschikken, alles passend maken, laagvoorbeeld, vulling, steunen, filament, pla, petg, add-on, 3d-printen add-on
from: abcf5d7e
---

De {{ui:Printfase}} legt dingen op het bed van uw printer, snijdt ze in lagen en stuurt ze naar de printer. U exporteert eerst geen bestand. Het hoort bij de 3D Print-add-on, die standaard aan staat.

:::note
Hiermee is nog niets op een echte printer geprint. De slicer is nieuw: let op de eerste lagen van uw eerste print, en gebruik het laagvoorbeeld voordat u verzendt.
:::

## Wat u gaat doen

Zet een model op het bed, controleer of het past, bekijk de gesneden lagen en stuur het naar een printer of sla de G-code op.

## Stappen

1. Klik op {{ui:Printfase}} in de werkbalk. Er opent een kaart over de weergave en een gestreepte omtrek laat uw bed zien.
2. Typ onder **Toevoegen uit de bibliotheek** een naam in het zoekveld, druk op {{ui:Zoeken}} en druk bij een resultaat op {{ui:Toevoegen}}. Het item komt op het bed op ware grootte, of verkleind om te passen. Alles wat u al hebt getekend of geïmporteerd en in de weergave ziet, staat ook op het bed.
3. Controleer onder **Op het bed** de grootte van elk item. Een item met **Buiten het bed** moet worden verplaatst. Verplaats, roteer en schaal dingen in de weergave met de gebruikelijke gereedschappen.
4. Druk op {{ui:Op het bed rangschikken}} om de items uit elkaar te zetten, of op {{ui:Alles passend maken op het bed}} om ze zo te verkleinen dat ze passen.
5. Kies onder **Uw printer** het formaat van het **Bed** of een van de printerprofielen.
6. Kies onder **Printinstellingen** het **Materiaal**, de **Kwaliteit** en de **Vulling %**, en vink **Steunen toevoegen onder overhangen** aan als de vorm ze nodig heeft.
7. Druk op {{ui:Voorbeeld van lagen}} en verschuif de schuif **Laag** om door de gesneden lagen te kijken. Als u daarna de fase of de instellingen wijzigt, druk dan opnieuw op {{ui:Voorbeeld van lagen}}.
8. Kies onder **Verbinding** {{ui:USB-kabel}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} of {{ui:PrusaLink}}. Voor usb drukt u op {{ui:Verbinden}}. Voor een netwerkprinter typt u het **Adres** (en de **API-sleutel** als erom wordt gevraagd) en drukt u daarna op {{ui:Verbinding testen}}.
9. Druk op {{ui:Naar 3D-printer sturen}}. De kaart vraagt of het bed vrij is en het juiste materiaal is geladen, en toont de tijd, het materiaal en de temperaturen. Bevestig om te verzenden.

U krijgt een bericht dat de printer start. {{ui:De print stoppen}} zet de verwarmingen, de ventilator en de motoren uit. Als u alleen een bestand wilt, druk dan op {{ui:De G-code opslaan}}.

## Opmerkingen

- USB vereist Chrome of Edge op een computer, en de pagina moet open blijven tot de print klaar is. Als u de pagina sluit, stopt de stroom.
- Een netwerkprinter moet deze site toestaan (in Moonraker voegt u hem toe aan `cors_domains`; in OctoPrint schakelt u CORS in en kopieert u een API-sleutel). Uw browser kan vragen om toegang tot apparaten op uw netwerk.
- Er wordt niets verbonden of verzonden zonder uw klik.
- De lijst met slicers staat onder **Slicer**. {{ui:CadCraft basic (inbegrepen, snelst)}} is ingebouwd. Kiri:Moto, PrusaSlicer, OrcaSlicer en de Bambu Lab P2S zijn eigen add-ons die u aanzet op de kaart of onder {{ui:Instellingen}} › {{ui:Add-ons}}. PrusaSlicer en OrcaSlicer gebruiken uw eigen kopie en werken vanuit CadCraft Studio op een computer.
- Stukken die geen gesloten volumes zijn, worden weggelaten, en de kaart laat u zien hoeveel van de vorm dat is.
- Voor harsprinters, zie [Slicen voor een harsprinter](topic:resin-printing). Om een model eerst te controleren of te repareren, zie [Steunen, wanddikte, uithollen en repareren](topic:print-tools).
