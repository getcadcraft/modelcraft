---
title: Hämta en tomt från CivilCraft
summary: Öppna adress-till-tomt-filen som CivilCraft skapar och lägg till byggnaderna och fastigheten runt den som massor och en tomtlinje, bara de du bockar för.
keywords: tomt, civilcraft, adress, fastighet, grannbyggnader, massor, kontext, ccsite, öppna data, openstreetmap
from: f28e4a3b
---

CivilCraft kan slå upp en adress och spara vad de öppna datakällorna vet runt den: grannbyggnader, fastigheten och konturer för översvämning, zonering och jord. ModelCraft tar emot filen som förslag. Ingenting läggs till förrän du säger till.

## Ta in filen

1. I CivilCraft, skicka tomten till ModelCraft, eller spara filen (den slutar på `.ccsite.json`).
2. I ModelCraft, öppna eller släpp filen. En lista öppnas med en kryssruta för varje byggnad och för fastigheten.
3. Skriv en höjd för de byggnader som källan inte gav någon för. En rad bredvid varje visar var dess höjd kommer ifrån: antalet våningar à 3 m, eller höjden du skrev.
4. Tryck på {{ui:Lägg till de ikryssade}}.

De ikryssade byggnaderna blir extruderade massor i en komponent, och fastigheten blir en linje runt tomten. Allt är ett ångra-steg. Adresspunkten sitter i origo, i meter öster och norr om den.

Översvämnings-, zonerings- och jordkonturer listas bara för information; de ritas inte.

Datan kommer från öppna källor och har sin källangivelse längst ned i listan. Höjder som inte angetts är antaganden, så kontrollera dem innan du litar på dem.
