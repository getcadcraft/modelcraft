---
title: Skicka scenen till en spelmotor
summary: Studio kan skriva scenen till ett Unreal Engine-projekt och hålla den i synk vid varje sändning; dina egna ändringar ligger i ett lager som CadCraft aldrig skriver till. Tillägget som öppnar den är ännu inte släppt.
keywords: unreal, unreal engine, spelmotor, länk, skicka, USD-scen, projekt, live, cine-kamera, filmrenderingskö
from: 9a765cc2
---

I CadCraft Studio kan motorlistan innehålla en **länk** till ett Unreal Engine-projekt. Det går bara åt ett håll: från CadCraft till Unreal.

## Skicka scenen

1. Välj Unreal-posten i motorlistan. Första gången ber Studio dig välja projektets mapp (den med `.uproject`-filen); den kommer ihåg den.
2. Klicka på {{ui:Skicka}}. Studio skriver `CadCraft/<filnamn>/` i projektet: scenen som en USD-fil, inställningsfilen, ljusprofiler och två små lagerfiler.
3. Ändra modellen, spara och skicka igen. Det är bara scenen och inställningsfilen som ersätts.

## Dina egna ändringar är säkra

USD-scenen som Unreal öppnar är ett litet rotlager som skapas en gång, med två lager under sig: **ditt eget** överst (`<namn>.user.usda`, tomt från början, skrivs aldrig om av CadCraft) och CadCraft:s scen under. Ändringar du sparar i ditt eget lager finns kvar när scenen skickas igen. Ljus och andra aktörer som du placerar i Unreal-nivån ligger utanför scenen och påverkas inte heller.

## Utan Studio

I webbläsaren, eller på en dator där Studio inte hittar Unreal, välj **Unreal-projektmapp (.zip)** i motorlistan och klicka på {{ui:Rendera}}. Den sparar samma mapp som en zip-fil: packa upp den i projektets mapp `CadCraft`. Låt **Inkludera scenfilerna** vara på första gången; stäng av den för senare sparningar, så att zip-filen bara innehåller scenen och inställningsfilen och ditt eget lager aldrig ersätts.

:::note
Unreal-tillägget som öppnar USD-scenen, tillämpar solen, lamporna, kamerorna och exponeringen, följer varje sändning och renderar en kamera är **ännu inte släppt** och har inte körts i Unreal. Tills dess lägger Skicka filerna i projektet, och Unreals egna USD-verktyg kan öppna dem. Windows är första systemet; macOS följer.
:::
