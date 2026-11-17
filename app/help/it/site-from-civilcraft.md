---
title: Importare un sito da CivilCraft
summary: Aprire il file da indirizzo a sito che CivilCraft crea e aggiungere intorno ad esso gli edifici e il lotto come masse e una linea di sito, solo quelli spuntati.
keywords: sito, civilcraft, indirizzo, lotto, edifici confinanti, masse, contesto, ccsite, dati aperti, openstreetmap
from: f28e4a3b
---

CivilCraft può cercare un indirizzo e salvare ciò che le fonti di dati aperti conoscono intorno ad esso: edifici confinanti, il lotto, e i contorni di zone allagabili, zonizzazione e terreni. ModelCraft usa quel file come suggerimenti. Non si aggiunge nulla finché non lo si dice.

## Importare il file

1. In CivilCraft, inviare il sito a ModelCraft, oppure salvare il file (termina con `.ccsite.json`).
2. In ModelCraft, aprire o trascinare il file. Si apre un elenco con una casella di spunta per ogni edificio e per il lotto.
3. Digitare un'altezza per gli edifici a cui la fonte non ne ha assegnata una. Accanto a ciascuno compare una riga che indica da dove viene la sua altezza: il numero dei piani a 3 m ciascuno, oppure l'altezza digitata.
4. Premere {{ui:Aggiungi quelli selezionati}}.

Gli edifici spuntati diventano masse estruse in un unico componente, e il lotto diventa una linea intorno al sito. Tutto è un solo passaggio di annullamento. Il punto dell'indirizzo si trova nell'origine; le coordinate sono in metri verso est e verso nord rispetto ad esso.

I contorni di zone allagabili, zonizzazione e terreni sono solo elencati a titolo informativo; non vengono disegnati.

I dati provengono da fonti aperte e riportano la loro attribuzione in fondo all'elenco. Le altezze non fornite sono ipotesi, quindi verificarle prima di farvi affidamento.
