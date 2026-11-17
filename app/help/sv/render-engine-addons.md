---
title: Lägg till en renderingsmotor med ett tillägg
summary: Vad ett tillägg kan lägga till i renderingsdialogens lista över motorer, behörigheten det behöver för att köra ett program, och vad Studio kontrollerar och frågar.
keywords: tillägg, addon, motor, renderingsmotor, utvecklare, engine.run, behörighet, program, skript, signerad, studio, api
from: cd7a39ba
---

Ett tillägg (Inställningar › Tillägg) kan lägga till en motor i listan Motor i {{ui:Rendera en bild…}}. Den fullständiga texten för tilläggsutvecklare är avsnitt 16 i tilläggsspecifikationen; i korthet:

- Tillägget registrerar en motor med ett id som börjar med dess eget, ett namn, valfria inställningar och **antingen** ett program att köra **eller** en funktion i JavaScript som ritar bilden.
- En motor som kör ett program behöver behörigheten **`engine.run`**, som visas före installation och under Inställningar. Den körs bara i Studio; i webbläsaren visas den som en fil att spara.
- Tillägget anger programmet (ett enkelt filnamn, aldrig ett skal), ett skript som ligger **inuti det signerade tillägget**, och argument gjorda av platshållare och vanliga ord. Studio hittar programmet eller ber dig peka ut det en gång.
- Första gången ett tillägg kör ett program frågar **Studio dig i sin egen dialogruta**: vilket tillägg, vilket program, och att ett skript kan göra allt som programmet kan. Tillåt det bara för ett tillägg du litar på. Ditt svar sparas för det tillägget och det programmet.
- Paketet (scenen som USD och en inställningsfil, med glTF-filen när tillägget begär den) och tilläggets skript läggs i en ny tillfällig mapp, programmet körs där, och bilden kommer tillbaka markerad med tilläggets motornamn.

:::note
Tillägg kan bara lägga till renderingsmotorer från tilläggs-API 1.4. Ett utarbetat exempel för en kommandoradsrenderare med öppen källkod finns i sitt eget arkiv; det har ännu inte körts i den renderaren.
:::
