---
title: Pren un emplaçament des de CivilCraft
summary: Obriu el fitxer d'adreça a emplaçament que crea CivilCraft i afegiu-hi els edificis i la parcel·la al voltant com a masses i una línia d'emplaçament, només els que marqueu.
keywords: emplaçament, civilcraft, adreça, parcel·la, edificis veïns, masses, context, ccsite, dades obertes, openstreetmap
from: f28e4a3b
---

CivilCraft pot cercar una adreça i desar el que les fonts de dades obertes saben al voltant: edificis veïns, la parcel·la, i els contorns d'inundació, zonificació i sòls. ModelCraft ho llegeix com a suggeriments. No s'afegeix res fins que ho indiqueu.

## Porta el fitxer

1. A CivilCraft, envieu l'emplaçament a ModelCraft, o deseu el fitxer (acaba en `.ccsite.json`).
2. A ModelCraft, obriu o arrossegueu el fitxer. S'obre una llista amb una casella per a cada edifici i per a la parcel·la.
3. Escriviu una alçada per als edificis de què la font no n'ha donat cap. Una línia al costat de cadascun indica d'on ve la seva alçada: el seu nombre de plantes a 3 m cada una, o l'alçada que heu escrit.
4. Premeu {{ui:Afegeix els marcats}}.

Els edificis marcats esdevenen masses extruïdes en un sol component, i la parcel·la esdevé una línia al voltant de l'emplaçament. Tot és un sol pas de desfer. El punt de l'adreça és a l'origen, i les coordenades es mesuren en metres a l'est i al nord respecte d'aquest punt.

Els contorns d'inundació, zonificació i sòls es llisten només a títol informatiu; no es dibuixen.

Les dades provenen de fonts obertes i porten l'atribució al peu de la llista. Les alçades que no s'han indicat són suposicions: comproveu-les abans de confiar-hi.
