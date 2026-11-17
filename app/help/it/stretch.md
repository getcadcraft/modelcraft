---
title: Componenti che si stirano
summary: Rendi una copia di un componente più larga, più profonda o più alta mentre le sue parti mantengono le proprie dimensioni: un tavolo più lungo con le stesse gambe, una libreria più alta con i ripiani distanziati, una ringhiera i cui montanti si ripetono.
keywords: componente dinamico, stiramento, ridimensiona componente, parametrico, dimensioni con nome, ripetizione, serie, gambe, ripiani, ringhiera, regole, variabili
from: b4c40f43
---

Scalare un componente rende più grande tutto ciò che contiene, anche le gambe e i correnti. **Stira questa copia** modifica la larghezza, la profondità o l'altezza di un componente mentre ogni parte segue una regola: il piano di un tavolo si allunga, le sue gambe mantengono lo spessore e restano alle estremità.

Funziona su componenti composti da parti, cioè gruppi o componenti all'interno del componente, come tutti gli elementi della [libreria iniziale](topic:starter).

## Stirare una copia

1. Selezionare il componente.
2. In {{ui:Informazioni sull'entità}}, fare clic su {{ui:Stira questa copia…}}.
3. Digitare la nuova {{ui:Larghezza (rosso)}}, {{ui:Profondità (verde)}} e {{ui:Altezza (blu)}}, quindi fare clic su {{ui:Stiramento}}.

Cambia solo quella copia: diventa un componente a sé stante, che ricorda l'originale da cui deriva. È possibile stirarla di nuovo in qualsiasi momento: viene ricalcolata a partire dall'originale, quindi non si verificano scostamenti. Le altre copie dell'originale restano invariate.

## Le regole

Aprire il componente (fare doppio clic) e selezionare una delle sue parti. In {{ui:Informazioni sull'entità}} compare {{ui:Quando il componente si stira}}, con una regola lungo rosso, verde e blu:

| Regola | Cosa fa la parte | Per esempio |
|---|---|---|
| {{ui:Stiramento}} | Cresce con il componente; le distanze da entrambi i lati restano | Il piano di un tavolo |
| {{ui:Resta all'inizio}} / {{ui:Resta alla fine}} | Mantiene la sua dimensione e la sua distanza da quel lato | Gambe |
| {{ui:Sposta in proporzione}} | Mantiene la sua dimensione; il suo centro si sposta in proporzione | Ripiani, una maniglia di porta |
| {{ui:Scala in proporzione}} | Posizione e dimensione variano in proporzione | I gradini di una scala |
| {{ui:Ripetizione}} | Copie della parte, a intervalli ({{ui:Ogni}}), dal punto di inizio fino al lato opposto | I montanti di una ringhiera |

{{ui:Automatiche}} (il valore iniziale) calcola la regola e mostra quale: {{ui:Stiramento}} quando la parte attraversa il componente, {{ui:Sposta in proporzione}} quando si trova più o meno al centro, altrimenti resta sul lato più vicino.

## Da sapere

- Le forme delle parti sono condivise, quindi una copia stirata è leggera. Modificare una parte la cambia in tutte le copie.
- Una copia stirata non segue le modifiche successive alle regole o alla disposizione dell'originale: stirarla di nuovo per recepirle.
- Le facce disegnate libere nel componente (non in una parte) mantengono le proprie dimensioni; per farle seguire, renderle una parte.
- Regole e origine di ogni copia stirata vengono salvate nel file ModelCraft.
