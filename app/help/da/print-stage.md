---
title: Læg ting på printbedet og send dem til en printer
summary: Tilføj biblioteksemner eller din egen model til din printers printbed, ordn dem, gennemse de skårne lag, og send printet over USB eller netværket, eller gem G-code, uden at eksportere en STL først.
keywords: printtrin, 3D-print, printer, printbed, send til 3D-printer, slicer, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, bibliotek, ordn, tilpas alle, lagforhåndsvisning, infill, understøtninger, filament, pla, petg, add-on, 3D-print-add-on
from: abcf5d7e
---

{{ui:Printtrin}} lægger ting ud på din printers printbed, skærer dem i lag og sender dem til printeren. Du eksporterer ikke først en fil. Det hører til 3D Print-add-on'en, som er slået til som standard.

:::note
Intet er endnu printet på en rigtig printer med dette. Slicer'en er ny: hold øje med de første lag af dit første print, og brug lagforhåndsvisningen, før du sender.
:::

## Hvad du skal gøre

Læg en model på printbedet, kontrollér at den passer, se på de skårne lag, og send den til en printer eller gem G-code.

## Trin

1. Klik {{ui:Printtrin}} i værktøjslinjen. Et kort åbner over visningen, og en stiplet kontur viser dit printbed.
2. Under **Tilføj fra biblioteket** skriver du et navn i søgefeltet, trykker {{ui:Søg}} og trykker {{ui:Tilføj}} på et resultat. Emnet havner på printbedet i fuld størrelse eller skaleret ned, så det passer. Alt, du allerede har tegnet eller importeret, og som kan ses i visningen, er også på printbedet.
3. Under **På printbedet** kontrollerer du størrelsen på hvert emne. Et emne markeret **Uden for printbedet** skal flyttes. Flyt, roter og skalér ting i visningen med de sædvanlige værktøjer.
4. Tryk {{ui:Arrangér på printbedet}} for at sprede emnerne ud, eller {{ui:Tilpas alle på printbedet}} for at skalere dem ned, til de passer.
5. Under **Din printer** vælger du **Printbed**-størrelsen eller en af printerprofilerne.
6. Under **Printindstillinger** vælger du **Materiale**, **Kvalitet** og **Infill %**, og sætter flueben i **Tilføj understøtninger under overhæng**, hvis formen kræver det.
7. Tryk {{ui:Forhåndsvis lag}} og flyt **Lag**-skyderen for at gennemse de skårne lag. Ændrer du trinnet eller indstillingerne bagefter, trykker du {{ui:Forhåndsvis lag}} igen.
8. Under **Forbindelse** vælger du {{ui:USB-kabel}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} eller {{ui:PrusaLink}}. Ved USB trykker du {{ui:Opret forbindelse}}. For en netværksprinter skriver du dens **Adresse** (og **API-nøglen**, hvis den spørger), og trykker derefter {{ui:Test forbindelsen}}.
9. Tryk {{ui:Send til 3D-printer}}. Kortet spørger, om printbedet er frit, og at det rigtige materiale er lagt i, og viser tiden, materialet og temperaturerne. Bekræft for at sende.

Du får en besked om, at printeren er ved at starte. {{ui:Stop printet}} slukker for varmerne, blæseren og motorerne. Hvis du kun vil have en fil, trykker du {{ui:Gem G-code i stedet}}.

## Noter

- USB kræver Chrome eller Edge på en computer, og siden skal forblive åben, til printet er færdigt. Lukker du den, stopper strømmen.
- En netværksprinter skal tillade denne side (i Moonraker føjer du den til `cors_domains`; i OctoPrint slår du CORS til og kopierer en API-nøgle). Din browser kan spørge, om den må nå enheder på dit netværk.
- Intet forbinder eller sender uden dit klik.
- Slicer-listen står under **Slicer**. {{ui:CadCraft basis (inkluderet, hurtigst)}} er indbygget. Kiri:Moto, PrusaSlicer, OrcaSlicer og Bambu Lab P2S er egne add-ons, som du slår til fra kortet eller under {{ui:Indstillinger}} › {{ui:Add-ons}}. PrusaSlicer og OrcaSlicer bruger din egen kopi og arbejder fra CadCraft Studio på en computer.
- Stykker, der ikke er lukkede legemer, udelades, og kortet fortæller dig, hvor stor en del af formen det er.
- Til harpiksprintere, se [Skær til en harpiksprinter](topic:resin-printing). For først at kontrollere eller reparere en model, se [Understøtninger, vægtykkelse, udhulning og reparation](topic:print-tools).
