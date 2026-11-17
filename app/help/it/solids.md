---
title: Strumenti solidi: unione, sottrazione, intersezione
summary: Unire gruppi e componenti chiusi in uno, ritagliarne uno da un altro, oppure tenere solo ciò che condividono.
keywords: solido, solidi, ispettore solidi, non solido, correggi solido, foro, spigolo isolato, rovesciato, unione, unisci, combina, fondi, sottrazione, differenza, taglia, foro, intersezione, booleana, guscio esterno
from: f35df1cc
---

Gli strumenti solidi combinano i **solidi**: gruppi e componenti le cui facce chiudono un volume, con ogni spigolo che unisce esattamente due facce. {{ui:Informazioni sull'entità}} indica {{ui:Solido}}: {{ui:Sì}} per uno, e ne mostra il volume.

Si trovano nel menu {{ui:Solidi}} nel gruppo {{ui:Organizza}}.

## Quando qualcosa non è un solido

Selezionare il gruppo o componente. Quando non è un solido, {{ui:Informazioni sull'entità}} dice perché, per esempio "Non è un solido: 4 spigoli confinano con un foro · 1 spigolo isolato".

| Problema | Cosa significa |
|---|---|
| Spigoli confinano con un foro | Manca una faccia |
| Spigoli condivisi da tre facce o più | Una faccia divide l'interno, oppure due forme si toccano lungo uno spigolo |
| Facce all'interno della forma | Un muro lasciato dentro il volume |
| Spigoli isolati | Linee che non delimitano nessuna faccia |
| Facce rivolte verso l'interno | Le loro facce anteriori sono rivolte all'interno, contro i vicini |

{{ui:Mostra problemi}} lo apre con quegli spigoli e facce selezionati, così si possono vedere. {{ui:Correggi}} ripara i casi semplici in un solo passaggio di annullamento: rimuove gli spigoli isolati e le facce all'interno della forma, orienta le facce dal verso giusto, e chiude i fori il cui bordo giace piatto. Ciò che non può essere riparato in sicurezza (un foro non piatto, uno spigolo condiviso da molte facce) viene lasciato a chi lavora, e lo strumento indica cosa resta.

## Unione

1. Selezionare due o più solidi (fare clic su uno, poi {{key:Ctrl}}+clic sugli altri).
2. {{ui:Solidi}} › {{ui:Unione}}.

Diventano un solo solido, in un gruppo. Dove si sovrapponevano, le facce interne sono scomparse.

## Sottrazione

1. {{ui:Solidi}} › {{ui:Sottrazione}}.
2. Fare clic sul solido da **togliere** (l'utensile di taglio).
3. Fare clic sul solido da **tagliare**.

Ciò che resta del secondo solido rimane; l'utensile di taglio viene consumato. Per esempio, per fare un foro attraverso un blocco, disegnare un palo che lo attraversi, renderlo un gruppo, poi sottrarre il palo dal blocco.

## Intersezione

Selezionare due o più solidi, poi {{ui:Solidi}} › {{ui:Intersezione}}. Viene mantenuta solo la parte che condividono tutti.

## Da sapere

- Il risultato è un nuovo gruppo. Mantiene il nome, il colore e l'etichetta del primo solido (per la Sottrazione: quello che si è tagliato). I colori dipinti sulle sue facce non vengono mantenuti.
- I lati piatti del risultato sono facce singole. I lati tondi risultano come le sfaccettature piatte con cui erano stati disegnati.
- Se un gruppo o componente non è un solido, lo strumento indica quale e non cambia nulla. Cercare una faccia mancante o una faccia isolata al suo interno.
- All'interno di un gruppo aperto, gli strumenti agiscono sui gruppi e componenti di quel gruppo.
- Ogni strumento è un solo passaggio di annullamento.
- La prima volta che si usa uno strumento solido, il suo motore (manifold-3d) viene caricato, il che può richiedere un momento.
