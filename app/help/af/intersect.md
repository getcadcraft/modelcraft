---
title: Sny vlakke
summary: Teken die lyne waar vlakke deur mekaar sny, sodat jy die stukke kan stoot, uitvee of verf.
keywords: sny, sny vlakke, sny met model, sny met keuse, snit, opening, gat, voeg saam, lyne waar vlakke kruis, boolean
from: 6bc58526
---

Wanneer een vorm deur 'n ander gaan, trek ModelCraft nie die lyn waar hul vlakke ontmoet nie: hulle oorvleuel net. **Sny** trek daardie lyne, as rande, sodat die vlakke daar verdeel. Dan kan jy die stukke stoot/trek, uitvee of verf.

Albei opdragte is in {{ui:Edit}} › {{ui:More}}.

## Sny met model

Sny wat jy kies teen **elke vlak op die skerm**.

Byvoorbeeld, 'n balk ('n groep) gaan deur 'n muur (nog 'n groep), en jy wil 'n opening in die muur hê:

1. Dubbelklik op die muur om dit oop te maak, en kies al sy vlakke ({{key:Ctrl+A}}).
2. {{ui:Edit}} › {{ui:More}} › {{ui:Intersect with model}}.

Die balk se omtrek word op albei vlakke van die muur geteken, as twee nuwe vlakke. Stoot een daarvan deur die muur om die opening te maak, en maak dan die muur toe.

## Sny met keuse

Sny die gekose vlakke, groepe en komponente **net teen mekaar**. Kies ten minste twee.

## Waar die lyne gaan

Die lyne word altyd in die **oop konteks** geteken: in die model wanneer geen groep oop is nie, of in die groep wat jy redigeer. Groepe en komponente wat nie oop is nie, word nie verander nie. So om 'n groep se vlakke te sny, maak dit eers oop, soos in die voorbeeld hierbo.

## Dinge om te weet

- Vlakke wat in dieselfde vlak lê, word nie gesny nie.
- Lyne wat 'n lus op 'n vlak sluit, maak 'n nuwe vlak, soos getekende lyne doen.
- Elke sny is een ontdoen-stap. As niks kruis nie, verander niks nie.
- Vir geslote vorms doen die [soliede gereedskap](topic:solids) (Unie, Aftrek) die hele werk in een stap.
