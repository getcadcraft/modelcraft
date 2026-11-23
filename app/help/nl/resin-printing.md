---
title: Snijden voor een harsprinter
summary: Snijd de printbed van de printfase voor een harsprinter, hol het onderdeel uit en voorzie het van steunen, bekijk de lagen, sla het bestand van de printer op en vind uw belichting met de belichtingstest.
keywords: hars, kanteling voorstellen, zuignap, afpelkracht, verstevigen, harsprinten, sla, msla, dlp, slicer, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, uithollen, ventilatiegat, vlotter, steunen, belichtingstest, belichtingsladder, kalibratie, lagen, add-on
from: 8cc12858
---

De hars-add-ons snijden wat op het printbed staat in laagafbeeldingen voor het scherm van uw printer, en slaan het bestand op dat uw printer leest. Ze zijn gratis, er is niets vergrendeld, en ze staan uit tot u ze aanzet.

:::note
Er is nog geen bestand op een echte printer geladen. De bestanden zijn alleen teruggelezen door de eigen lezers van CadCraft, en de steunen zijn nieuw. Controleer de lagen en voer uw eerste print met de hand uit.
:::

## Wat u gaat doen

Snijd een onderdeel voor hars, controleer de lagen, sla het bestand op en kopieer het naar uw printer.

## Stappen

1. Open {{ui:Instellingen}} › {{ui:Add-ons}} en zet de hars-slicer-add-on aan, en de add-on voor het bestandsformaat van uw printer (Elegoo GOO, SL1, Chitubox of Anycubic). U kunt ook op {{ui:Harsprinten toevoegen}} drukken op de kaart van de printfase.
2. Plaats uw onderdeel op het bed zoals beschreven in [Objecten op het printbed plaatsen](topic:print-stage), kies daarna {{ui:Hars}} naast **Printen met**.
3. Kies onder **Harsprintinstellingen** uw **Printer** en uw **Hars**. De kaart toont de schermgrootte in pixels. Dit zijn de door de fabrikant gepubliceerde maten, controleer de uwe; onder Aangepast kunt u ze wijzigen.
4. Stel **Laaghoogte (mm)**, **Belichting (s)** en **Belichting onderste lagen (s)** in. De getallen per hars zijn alleen een beginpunt.
5. Vink **Uithollen, met een ventilatiegat** aan als u een holle onderdeel wilt, en stel de **Wand (mm)** en de **Gatbreedte (mm)** in.
6. Vink **Steunen en een vlotter** aan, en kies de **Steundichtheid**: Licht, Gemiddeld of Zwaar.
7. Kies het **Bestandsformaat**. Als de kaart zegt dat er nog geen is toegevoegd, druk dan op de knop met de tekst Toevoegen en de naam van het formaat.
8. Druk op {{ui:Lagen bekijken}} en verplaats de schuif **Laag**. Zwevende delen worden omcirkeld. De regel eronder geeft de lagen, de tijd en de hars in mL, gram en kosten.
9. Druk op {{ui:Printbestand opslaan}}, controleer de samenvatting en druk op {{ui:Opslaan}}. Kopieer het bestand naar uw printer.

## Kanteling, zuignappen, verstevigingen en de afpelwaarde

Deze vier zijn schattingen op basis van de vorm van het onderdeel. Geen van deze is op een echte printer uitgeprobeerd, dus beschouw elk als een hint en bekijk de lagen.

1. Druk op {{ui:Kanteling voorstellen}} onder **Kanteling (graden)**. CadCraft probeert kantelingen van 0 tot 60 graden en kiest de kanteling met de kleinste grootste laag, het minste overhangende oppervlak en geen zuignap. Het stelt **Kanteling (graden)** in en meldt wat het heeft gevonden. De weging van de score is van ons, niet van een printerfabrikant.
2. Na {{ui:Lagen bekijken}} noemt een waarschuwing holtes die alleen naar de film open zijn. Zo'n holte kan zuigkracht vasthouden wanneer een laag loskomt. Kantel het onderdeel of voeg een gat toe. Zakken die smaller zijn dan de celgrootte in de waarschuwing worden niet gezien.
3. Met **Steunen en een vlotter** aan, vink **Hoge steunen verstevigen** aan om dwarsverbindingen tussen hoge, dunne pilaren toe te voegen.
4. De regel onder de voorbeeldweergave geeft de grootste laag in cm2. Er wordt alleen een kracht getoond als u een **Gemeten afpelspanning** invoert onder **Onderste lagen, lift en snelheden**. Zonder uw eigen gemeten getal toont het alleen het oppervlak.

## Uw belichting vinden

1. Zet de belichtingstest-add-on aan in {{ui:Instellingen}} › {{ui:Add-ons}}.
2. Druk op {{ui:Het testonderdeel op het bed plaatsen}}.
3. Druk op {{ui:Belichtingsladder opslaan}}. U krijgt één bestand per belichting, in een zip.
4. Print elk bestand met dezelfde hars, en houd de belichting aan met de scherpste dunne pilaren en open gaten.

## Opmerkingen

- Snijden loopt op de achtergrond, zodat de pagina bruikbaar blijft bij een grote plaat.
- Delen die geen gesloten volumes zijn, worden weggelaten, en de kaart meldt dat.
- Als uw printer een bestand weigert, bevat de formaatkaart opties voor wat het formaat open laat. Wijzig er één, sla opnieuw op en laat ons weten welke werkte.
- Anycubic-versies 517 en 518 worden niet geschreven.
