---
title: Hent en tomt fra CivilCraft
summary: Åpne adresse-til-tomt-filen CivilCraft lager, og legg til bygningene og eiendommen rundt som masser og en tomtelinje, bare de du krysser av.
keywords: tomt, civilcraft, adresse, eiendom, nabobygninger, masser, kontekst, ccsite, åpne data, openstreetmap
from: f28e4a3b
---

CivilCraft kan slå opp en adresse og lagre det åpne datakildene vet rundt den: nabobygninger, eiendommen, og kontur for flom, arealplan og grunn. ModelCraft tar filen som forslag. Ingenting legges til før du sier det.

## Hent filen inn

1. I CivilCraft, send tomten til ModelCraft, eller lagre filen (den slutter på `.ccsite.json`).
2. I ModelCraft, åpne eller slipp filen. En liste åpnes med en avkrysningsboks for hver bygning og for eiendommen.
3. Skriv inn en høyde for bygningene kilden ikke ga noen høyde for. En linje ved siden av sier hvor høyden kommer fra: antall etasjer à 3 m, eller høyden du skrev.
4. Trykk {{ui:Legg til de avmerkede}}.

De avmerkede bygningene blir ekstruderte masser i én komponent, og eiendommen blir en linje rundt tomten. Alt dette er ett angrertrinn. Adresspunktet ligger i origo, i meter øst og nord for den.

Kontur for flom, arealplan og grunn vises kun til informasjon; de tegnes ikke.

Dataene kommer fra åpne kilder og har kildehenvisningen nederst i listen. Høyder som ikke er oppgitt, er antakelser, så kontroller dem før du stoler på dem.
