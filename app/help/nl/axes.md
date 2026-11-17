---
title: Verplaats en draai de tekenassen
summary: Draai de rode, groene en blauwe assen zodat ze passen bij een gebouw dat niet haaks op ze staat, of lijn ze uit op een vlak, zodat tekenen en typen erop volgen.
keywords: assen, tekenassen, oorsprong, assen uitlijnen, assen draaien, assen resetten, hoekig gebouw, scheef, ucs, coördinatenstelsel
from: cab258f7
---

De rode, groene en blauwe assen geleiden alles wat u tekent: rechthoeken lijnen erop uit, lijnen vergrendelen erop, en de grond is het rood-groene vlak. Staat een gebouw onder een hoek (een situatietekening die niet haaks op het noorden staat, een vleugel gedraaid over 30°), verplaats de assen erop, zodat tekenen de muren volgt. Het model zelf beweegt niet.

Alle drie de commando's staan onder {{ui:Bewerken}} › {{ui:Meer}}.

## Assen plaatsen

1. {{ui:Bewerken}} › {{ui:Meer}} › {{ui:Assen plaatsen}}.
2. Klik waar de oorsprong komt, zoals een hoek van het gebouw.
3. Klik op een punt langs de nieuwe rode as, zoals verder langs een muur.
4. Klik op een punt richting de nieuwe groene as. Groen wordt haaks op rood gezet, en blauw staat haaks op beide.

De assen worden getekend op hun nieuwe plaats. Een rechthoek die u nu op de grond tekent, of typt als `4m,3m`, loopt langs het gedraaide rood en groen; de pijltjestoetsen vergrendelen erop; en de objectsnap naar de oorsprong ligt op de nieuwe oorsprong.

## Assen uitlijnen op een vlak

Selecteer één vlak, en daarna {{ui:Bewerken}} › {{ui:Meer}} › {{ui:Assen uitlijnen op vlak}}. Blauw wijst dan uit het vlak, rood loopt langs de langste rand, en de oorsprong ligt op het begin van die rand. Gebruik dit om op een hellend dak te tekenen alsof het de grond was.

## Assen resetten

{{ui:Bewerken}} › {{ui:Meer}} › {{ui:Assen resetten}} zet ze terug waar het model begon.

## Let op

- Binnen een open groep of component worden de eigen assen ervan gebruikt (ze draaien mee); de assen van het model gelden op het hoogste niveau.
- De assen worden opgeslagen in het ModelCraft-bestand, en elke wijziging is één stap ongedaan maken.
- Exports en de standaardweergaven ({{ui:Boven}}, {{ui:Voor}}…) gebruiken nog steeds de eigen richtingen van het model.
