---
title: Een renderengine toevoegen met een add-on
summary: Wat een add-on kan toevoegen aan de lijst Engine van het dialoogvenster Een afbeelding renderen, de toestemming die hij nodig heeft om een programma te draaien, en wat Studio controleert en vraagt.
keywords: add-on, addon, engine, renderengine, ontwikkelaar, engine.run, toestemming, programma, script, ondertekend, studio, api
from: cd7a39ba
---

Een add-on (Instellingen › Add-ons) kan een engine toevoegen aan de lijst Engine van {{ui:Een afbeelding renderen…}}. De volledige tekst voor auteurs van add-ons staat in paragraaf 16 van de add-onspecificatie; kort samengevat:

- De add-on registreert een engine met een id dat begint met het eigen voorvoegsel, een naam, optionele instellingen en **een van beide**: een programma om te draaien **of** een functie in JavaScript die de afbeelding tekent.
- Een engine die een programma draait, heeft de toestemming **`engine.run`** nodig, die vóór de installatie en in Instellingen wordt getoond. Hij draait alleen in Studio; in de browser verschijnt hij als een bestand om op te slaan.
- De add-on noemt het programma (een gewone bestandsnaam: nooit een shell), een script dat **binnen de ondertekende add-on** staat, en argumenten die bestaan uit plaatshouders en gewone woorden. Studio zoekt het programma of vraagt u er één keer naar te wijzen.
- De eerste keer dat een add-on een programma draait, **vraagt Studio u in een eigen dialoogvenster**: welke add-on, welk programma, en dat een script alles kan wat het programma kan. Sta dit alleen toe voor een add-on die u vertrouwt. Uw antwoord wordt onthouden voor die add-on en dat programma.
- Het pakket (de scène als USD en een instellingenbestand, met het glTF-bestand wanneer de add-on erom vraagt) en het script van de add-on gaan in een nieuwe tijdelijke map; het programma draait daar, en de afbeelding komt terug met de naam van de engine van de add-on.

:::note
Add-ons kunnen alleen renderengines toevoegen vanaf add-on-API 1.4. Een uitgewerkt voorbeeld voor een open-source renderer op de opdrachtregel staat in zijn eigen repository; het is nog niet in die renderer gedraaid.
:::
