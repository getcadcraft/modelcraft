---
title: Intersecare le facce
summary: Disegna le linee in cui le facce si tagliano a vicenda, così puoi spingere, eliminare o colorare i pezzi.
keywords: interseca, interseca facce, interseca con il modello, interseca con la selezione, taglia, apertura, foro, unisci, linee dove le facce si incrociano, booleana
from: 6bc58526
---

Quando una forma ne attraversa un'altra, ModelCraft non disegna la linea in cui si incontrano le loro facce: si sovrappongono e basta. **Interseca** disegna quelle linee, come spigoli, così le facce si dividono lì. Poi puoi spingere/tirare, eliminare o colorare i pezzi.

Entrambi i comandi si trovano in {{ui:Edit}} › {{ui:More}}.

## Interseca con il modello

Taglia ciò che selezioni contro **ogni faccia sullo schermo**.

Ad esempio, una trave (un gruppo) attraversa un muro (un altro gruppo), e vuoi un'apertura nel muro:

1. Fai doppio clic sul muro per aprirlo, e seleziona tutte le sue facce ({{key:Ctrl+A}}).
2. {{ui:Edit}} › {{ui:More}} › {{ui:Intersect with model}}.

Il contorno della trave viene disegnato su entrambe le facce del muro, come due nuove facce. Spingi una di esse attraverso il muro per creare l'apertura, poi chiudi il muro.

## Interseca con la selezione

Taglia le facce, i gruppi e i componenti selezionati **solo uno contro l'altro**. Selezionane almeno due.

## Dove vanno le linee

Le linee vengono sempre disegnate nel **contesto aperto**: nel modello quando non è aperto alcun gruppo, oppure nel gruppo che stai modificando. I gruppi e i componenti non aperti non vengono modificati. Quindi, per tagliare le facce di un gruppo, aprilo prima, come nell'esempio sopra.

## Da sapere

- Le facce che giacciono sullo stesso piano non vengono intersecate.
- Le linee che chiudono un anello su una faccia creano una nuova faccia, come accade per le linee disegnate.
- Ogni intersezione è un passo di annullamento. Se nulla si incrocia, nulla cambia.
- Per le forme chiuse, gli [strumenti solido](topic:solids) (Unione, Sottrazione) eseguono tutto il lavoro in un solo passo.
