---
title: Tag en grund fra CivilCraft
summary: Åbn adressefilen, som CivilCraft laver, og tilføj bygningerne og matriklen omkring den som masser og en grundlinje, kun dem du sætter flueben ved.
keywords: grund, civilcraft, adresse, matrikel, nabobygninger, masser, kontekst, ccsite, åbne data, openstreetmap
from: f28e4a3b
---

CivilCraft kan slå en adresse op og gemme det, de åbne datakilder ved om den: nabobygninger, matriklen og konturer for oversvømmelse, zoneinddeling og jord. ModelCraft tager filen som forslag. Intet tilføjes, før du siger det.

## Hent filen ind

1. I CivilCraft sender du grunden til ModelCraft, eller gemmer filen (den ender på `.ccsite.json`).
2. I ModelCraft åbner eller slipper du filen. En liste åbner med et afkrydsningsfelt for hver bygning og for matriklen.
3. Skriv en højde for de bygninger, kilden ikke gav en højde for. En linje ved siden af siger, hvor højden kommer fra: dens antal etager à 3 m, eller den højde, du skrev.
4. Tryk {{ui:Tilføj de afkrydsede}}.

De afkrydsede bygninger bliver ekstruderede masser i én komponent, og matriklen bliver en linje rundt om grunden. Det hele er ét fortrydelsestrin. Adressepunktet ligger i origo, i meter øst og nord for det.

Oversvømmelses-, zone- og jordkonturer vises kun til orientering; de tegnes ikke.

Data kommer fra åbne kilder og har deres kildeangivelse nederst på listen. Højder, der ikke er angivet, er antagelser, så kontrollér dem, før du stoler på dem.
