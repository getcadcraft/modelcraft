---
title: Vlakken snijden
summary: Teken de lijnen waar vlakken elkaar snijden, zodat u de stukken kunt duwen, wissen of verven.
keywords: snijden, vlakken snijden, snijden met model, snijden met selectie, snijden, opening, gat, samenvoegen, lijnen waar vlakken kruisen, booleaans
from: 6bc58526
---

Wanneer de ene vorm door een andere heen gaat, tekent ModelCraft de lijn waar hun vlakken elkaar raken niet: ze overlappen gewoon. **Snijden** tekent die lijnen als randen, zodat de vlakken daar splitsen. Daarna kunt u de stukken duwen/trekken, wissen of verven.

Beide opdrachten staan in {{ui:Bewerken}} › {{ui:Meer}}.

## Snijden met model

Snijdt wat u selecteert tegen **elk vlak op het scherm**.

Bijvoorbeeld: een balk (een groep) gaat door een wand (een andere groep), en u wilt een opening in de wand:

1. Dubbelklik op de wand om hem te openen, en selecteer al zijn vlakken ({{key:Ctrl+A}}).
2. {{ui:Bewerken}} › {{ui:Meer}} › {{ui:Snijden met model}}.

De omtrek van de balk wordt op beide vlakken van de wand getekend, als twee nieuwe vlakken. Duw er één door de wand om de opening te maken, en sluit daarna de wand.

## Snijden met selectie

Snijdt de geselecteerde vlakken, groepen en componenten **alleen tegen elkaar**. Selecteer er minstens twee.

## Waar de lijnen komen

De lijnen worden altijd getekend in de **open context**: in het model wanneer er geen groep open is, of in de groep die u bewerkt. Groepen en componenten die niet open zijn, worden niet gewijzigd. Om de vlakken van een groep te snijden, opent u die dus eerst, zoals in het voorbeeld hierboven.

## Wat u moet weten

- Vlakken die in hetzelfde vlak liggen, worden niet gesneden.
- Lijnen die een lus op een vlak sluiten, maken een nieuw vlak, zoals getekende lijnen doen.
- Elke snij-actie is één stap voor ongedaan maken. Als niets kruist, verandert er niets.
- Voor gesloten vormen doen de [solid-gereedschappen](topic:solids) (Samenvoegen, Aftrekken) het hele werk in één stap.
