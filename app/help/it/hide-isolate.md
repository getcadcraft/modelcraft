---
title: Nascondere, isolare e mostrare di nuovo
summary: Metti da parte le cose per lavorare tra di esse, oppure visualizza solo ciò su cui stai lavorando; gli elementi nascosti restano nascosti nel file.
keywords: nascondi, mostra di nuovo, mostra tutto, isola, nascondi gli altri, visualizza, nascosto, vista locale, visibilità, fuori dal percorso
from: 2c8a3457
---

Nascondere mette le cose da parte senza eliminarle. Una faccia, uno spigolo, un gruppo o un componente nascosto non viene disegnato, e non puoi agganciarlo, fare clic su di esso o selezionarlo, così puoi lavorare su ciò che si trova dietro o tra gli oggetti.

## Nascondere

1. Seleziona ciò che vuoi nascondere: facce, spigoli, gruppi o componenti.
2. {{ui:Edit}} › {{ui:More}} › {{ui:Hide}}.

Ad esempio, per lavorare nello stretto spazio tra due gruppi vicini, seleziona quello davanti e nascondilo: ora clic e aggancio raggiungono la faccia dietro di esso.

## Isolare

Seleziona ciò che vuoi tenere visibile, poi {{ui:Edit}} › {{ui:More}} › {{ui:Isolate (hide the rest)}}. Tutto il resto del modello si nasconde — oppure, mentre modifichi all'interno di un gruppo, tutto il resto di quel gruppo. Una faccia selezionata mantiene i suoi spigoli.

## Mostrare tutto

{{ui:Edit}} › {{ui:More}} › {{ui:Unhide all}} rende di nuovo visibile tutto, in ogni gruppo. Con nulla di selezionato, {{ui:Entity info}} indica quante cose sono nascoste, con anche lì un pulsante {{ui:Unhide all}}.

{{ui:Outliner}} mostra i gruppi e i componenti nascosti in corsivo, con un occhio barrato; fai clic sull'occhio per mostrarne uno di nuovo.

:::note
Con i tasti Modeler, {{key:H}} nasconde, {{key:Shift+H}} isola e {{key:Alt+H}} mostra tutto. ({{ui:Settings}} › {{ui:ModelCraft}} sceglie lo stile dei tasti.)
:::

## Da sapere

- Ciò che è nascosto viene salvato nel file ModelCraft e torna nascosto quando lo apri.
- Le cose nascoste restano nel modello: le esportazioni le includono, così come volumi e dimensioni in {{ui:Entity info}}.
- Ogni nascondi, isola o mostra tutto è un singolo passo di annullamento.
