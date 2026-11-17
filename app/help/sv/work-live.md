---
title: Modellera tillsammans med Live TeamWork
summary: Vad som ändras i ModelCraft medan du är i en Live TeamWork-session från CadCraft Studio: alla grupper och komponenter i en modell, vem som kan forma om vad samtidigt, din egen ångra och att ansluta från en webbläsare på samma nätverk.
keywords: live, live teamwork, studio live, tillsammans, samarbeta, session, dela live, anslut, grupp, komponent, push pull, markör, pekare, se varandra, namn, färg, markering, ångra, värd
from: d8d2f282
---

## Vad du lär dig

Vad som händer med en modell när flera personer arbetar på den samtidigt. CadCraft Studio startar och ansluter till Live TeamWork-sessionen (Dela, Anslut); den här sidan handlar om modellen själv.

## Arbeta i din egen grupp

Alla redigerar samma modell, och dina egna redigeringar visas direkt. Hur ändringar slås ihop beror på vad du ändrar:

- **Flytta, namnge, färga eller dölja placerade grupper och komponenter** slås ihop: två personer som flyttar två grupper behåller båda sina flyttar.
- **Geometrin inne i en grupp** (dess kanter och ytor: ritning, push/pull, radering) är en enhet. När två personer formar om samma grupp samtidigt tas den andra ändringen tillbaka, och statusfältet säger det. Olika grupper står aldrig i vägen för varandra.
- **Lös geometri** (som inte finns i någon grupp) är modellens egna grupp: bara en person kan forma om den åt gången.

Så kom överens om vem som arbetar i vilken grupp, eller gör en grupp för varje persons del innan du börjar. Guider, mått och sektionsplan slås ihop en i taget; scener, taggar, våningsplan och ritningens axlar går till den som ändrade dem senast.

## Se varandra

Alla i sessionen har en egen färg. Du ser varje persons pekare som en pil i deras färg med deras namn bredvid, på det djup i vyn du tittar på, och en streckad ruta i deras färg runt det de har markerat.

Pekare, namn och markeringar gäller bara sessionen: de sparas aldrig i filen och hamnar aldrig i någons ångra. De glider till var och en, så de förblir släta även på en långsam anslutning.

## Ångra ångrar ditt eget arbete

{{key:Mod+Z}} ångrar ditt eget senaste steg och lämnar allas andras ifred. När någon ändrat samma sak sedan dess ångras ingenting, och statusfältet säger vem.

## Anslut från en webbläsare

En kollega utan Studio kan skanna bilden under värdens kod med en telefon, surfplatta eller dator på samma nätverk. ModelCraft öppnas i webbläsaren och fylls med värdens modell när värden släpper in dig. En inbjudningslänk låter någon ansluta från ett annat nätverk: värden behöver en Team Cloud Plan-plats för appen, alla andra ansluter gratis, och länken fungerar bara så länge värdens session är öppen.

## När sessionen slutar

Bara värden sparar modellen. Alla andra behåller en osparad kopia: spara den om du vill behålla den.
