---
title: Skär ytor
summary: Rita linjerna där ytor skär igenom varandra, så att du kan skjuta, radera eller måla bitarna.
keywords: skär, skär ytor, skär mot modellen, skär mot markering, skär av, öppning, hål, sammanfoga, linjer där ytor korsar, boolesk
from: 6bc58526
---

När en form passerar genom en annan ritar ModelCraft inte linjen där deras ytor möts: de överlappar bara. **Skär** ritar dessa linjer, som kanter, så att ytorna delas där. Sedan kan du tryck/dra, radera eller måla bitarna.

Båda kommandona finns i {{ui:Redigera}} › {{ui:Mer}}.

## Skär mot modellen

Skär det du markerar mot **varje yta på skärmen**.

Till exempel, en balk (en grupp) passerar genom en vägg (en annan grupp), och du vill ha en öppning i väggen:

1. Dubbelklicka på väggen för att öppna den, och markera alla dess ytor ({{key:Ctrl+A}}).
2. {{ui:Redigera}} › {{ui:Mer}} › {{ui:Skär mot modellen}}.

Balkens kontur ritas på båda ytorna av väggen, som två nya ytor. Tryck en av dem genom väggen för att göra öppningen, och stäng sedan väggen.

## Skär mot markering

Skär de markerade ytorna, grupperna och komponenterna **endast mot varandra**. Markera minst två.

## Var linjerna hamnar

Linjerna ritas alltid i **det öppna sammanhanget**: i modellen när ingen grupp är öppen, eller i gruppen du redigerar. Grupper och komponenter som inte är öppna ändras inte. För att skära en grupps ytor, öppna den först, som i exemplet ovan.

## Bra att veta

- Ytor som ligger i samma plan skärs inte.
- Linjer som sluter en slinga på en yta gör en ny yta, precis som ritade linjer gör.
- Varje skärning är ett steg för ångra. Om inget korsar något ändras inget.
- För slutna former gör [solidverktygen](topic:solids) (Förena, Subtrahera) hela jobbet i ett steg.
