---
title: Placera saker på utskriftsbädden och skicka dem till en skrivare
summary: Lägg till biblioteksobjekt eller din egen modell på skrivarens bädd, ordna dem, titta igenom de skivade lagren och skicka utskriften över USB eller nätverket, eller spara G-koden, utan att exportera en STL först.
keywords: utskriftsyta, 3d-utskrift, skrivare, bädd, skicka till 3d-skrivare, slicer, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, bibliotek, ordna, passa alla, lagerförhandsvisning, fyllnad, stöd, filament, pla, petg, tillägg, 3d-utskriftstillägg
from: abcf5d7e
---

{{ui:Utskriftsyta}} lägger ut saker på skrivarens bädd, skivar dem och skickar dem till skrivaren. Du exporterar ingen fil först. Den hör till tillägget 3D-utskrift, som är påslaget som standard.

:::note
Ingenting har ännu skrivits ut på en riktig skrivare med detta. Slicern är ny: titta på de första lagren i din första utskrift, och använd lagerförhandsvisningen innan du skickar.
:::

## Vad du gör

Lägg en modell på bädden, kontrollera att den får plats, titta på de skivade lagren, och skicka den till en skrivare eller spara G-koden.

## Steg

1. Klicka på {{ui:Utskriftsyta}} i verktygsfältet. Ett kort öppnas över vyn och en streckad kontur visar din bädd.
2. Under **Lägg till från biblioteket** skriver du ett namn i sökrutan, trycker på {{ui:Sök}} och trycker på {{ui:Lägg till}} på ett resultat. Objektet hamnar på bädden i full storlek, eller skalat så att det får plats. Allt du redan har ritat eller importerat och kan se i vyn finns också på bädden.
3. Under **På bädden** kontrollerar du storleken på varje objekt. Ett objekt markerat **Utanför bädden** behöver flyttas. Flytta, rotera och skala saker i vyn med de vanliga verktygen.
4. Tryck på {{ui:Ordna på bädden}} för att sprida ut objekten, eller {{ui:Anpassa alla på bädden}} för att skala ner dem tills de får plats.
5. Under **Din skrivare** väljer du **Bädd**-storleken eller en av skrivarprofilerna.
6. Under **Utskriftsinställningar** väljer du **Material**, **Kvalitet** och **Fyllnad %**, och markerar **Lägg till stöd under överhäng** om formen behöver det.
7. Tryck på {{ui:Förhandsgranska lager}} och flytta reglaget **Lager** för att titta igenom de skivade lagren. Om du ändrar utskriftsytan eller inställningarna efteråt, tryck på {{ui:Förhandsgranska lager}} igen.
8. Under **Anslutning** väljer du {{ui:USB-kabel}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} eller {{ui:PrusaLink}}. För USB trycker du på {{ui:Anslut}}. För en nätverksskrivare skriver du dess **Adress** (och **API-nyckel** om den frågar), och trycker sedan på {{ui:Testa anslutningen}}.
9. Tryck på {{ui:Skicka till 3D-skrivare}}. Kortet frågar om bädden är tom och rätt material är laddat, och visar tiden, materialet och temperaturerna. Bekräfta för att skicka.

Du får ett meddelande om att skrivaren startar. {{ui:Stoppa utskriften}} stänger av värmarna, fläkten och motorerna. Om du bara vill ha en fil, tryck på {{ui:Spara G-koden i stället}}.

## Noteringar

- USB kräver Chrome eller Edge på en dator, och sidan måste vara öppen tills utskriften är klar. Om den stängs avbryts strömmen.
- En nätverksskrivare måste tillåta den här webbplatsen (i Moonraker lägger du till den i `cors_domains`; i OctoPrint slår du på CORS och kopierar en API-nyckel). Din webbläsare kan fråga om den får nå enheter på ditt nätverk.
- Inget ansluter eller skickas utan ditt klick.
- Slicerlistan finns under **Slicer**. {{ui:CadCraft basic (ingår, snabbast)}} är inbyggd. Kiri:Moto, PrusaSlicer, OrcaSlicer och Bambu Lab P2S är egna tillägg som du slår på från kortet eller under {{ui:Inställningar}} › {{ui:Tillägg}}. PrusaSlicer och OrcaSlicer använder din egen kopia och fungerar från CadCraft Studio på en dator.
- Delar som inte är slutna solider lämnas bort, och kortet säger hur stor del av formen det är.
- För hartsskrivare, se [Skiva för en hartsskrivare](topic:resin-printing). För att kontrollera eller reparera en modell först, se [Stöd, väggtjocklek, urholkning och reparation](topic:print-tools).
