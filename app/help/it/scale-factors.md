---
title: Scala per fattori e margine di ritiro
summary: Scalare una selezione con un fattore per ogni asse attorno a un punto scelto, oppure ingrandire un modello della percentuale di ritiro di un pezzo fuso.
keywords: scala, non uniforme, fattore, percentuale, allunga, ritiro, restringimento, fusione, modello, fonderia, margine, ridimensiona
from: 37e1bbff
---

Lo strumento Scala ({{key:S}}) scala in modo uniforme oppure trascina un grip per allungare una o due direzioni. **Scala per fattori…** (menu Strumenti, oppure gruppo Modifica) è la forma digitata: un numero per ciascuno dei tre assi.

1. Selezionare spigoli, facce, gruppi o componenti.
2. Aprire {{ui:Scala per fattori…}}. Digitare un fattore per rosso, verde e blu. Un fattore può essere `1.015`, `101.5%` oppure `+1.5%` (e `-2%` per ridurre). {{ui:Uguale su tutti e tre gli assi}} copia il primo negli altri due.
3. Scegliere che cosa **resta fermo**: il centro della selezione, il suo angolo più basso, il centro della base o l'origine.
4. La riga sotto i campi mostra la dimensione attuale e quella finale. {{ui:Scala}} esegue l'operazione in un unico passo di annullamento.

Gli assi sono quelli del gruppo aperto (quelli del modello, al livello più alto). Un gruppo o un componente ruotato risulta inclinato se i fattori differiscono; scalare invece il gruppo che lo contiene. Il contenuto di un componente non viene toccato, quindi le sue altre copie restano invariate.

## Margine di ritiro

Un pezzo fuso si restringe raffreddandosi, quindi il suo modello viene realizzato più grande. In **Margine di ritiro** digitare la percentuale per ciascun asse (la fonderia o il modellista la fornisce per il metallo usato; 1.5 % qui sotto è solo un esempio) e premere {{ui:Usa come fattori}}.

- **La percentuale stessa** rende il fattore 1 più la percentuale: 1.5 % dà 1.015, quello che indica un regolo di ritiro.
- **Esattamente sufficiente** rende il fattore 1 diviso per uno meno la percentuale: 1.5 % dà 1.0152, così la fusione esce della dimensione del pezzo dopo che si è ritirato di quella quantità.

Le ultime percentuali restano memorizzate in questo browser.

:::note
La percentuale va fornita dall'utente: ModelCraft non sa nulla del metallo, dello stampo o del processo.
:::
