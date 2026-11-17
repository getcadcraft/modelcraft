---
title: Testo 3D
summary: Aggiungi scritte a un modello come facce, piatte o solide, appoggiate su qualsiasi faccia: un'insegna, un numero civico, un nome su una porta.
keywords: testo 3d, testo, lettere, scritte, insegna, segnaletica, numero civico, etichetta, incidere, carattere, parole
from: 923f5d93
---

{{ui:Testo 3D}} nel gruppo {{ui:Disegna}} crea scritte fatte di facce, che si possono colorare, spingere o tirare, oppure incidere in un solido.

## Aggiungere testo

1. Fare clic su {{ui:Testo 3D}}.
2. Digitare il testo. Premere {{key:Enter}} nella casella per una seconda riga.
3. Impostare {{ui:Altezza delle lettere}} (l'altezza di una lettera maiuscola, per esempio `30cm` o `1'`) e {{ui:Profondità}}:
   - `0` dà **lettere piatte**: facce appoggiate su ciò su cui vengono collocate, pronte da colorare o da usare con {{ui:Spingi/tira}}.
   - Una profondità come `5cm` dà **lettere solide**, solidi chiusi che si possono usare con gli [strumenti solidi](topic:solids).
4. Fare clic su {{ui:Posiziona}}, poi fare clic dove deve andare il testo.

Su una faccia, il testo giace su quella faccia, leggibile da sinistra a destra: su un muro resta in verticale; sul terreno o su un tavolo giace piatto lungo il rosso. Lontano da qualsiasi faccia, giace sul terreno.

Il testo è un **componente** che prende il proprio testo come nome, quindi ogni copia cambia se ne modifichi una, e compare nell'elenco {{ui:Componenti}} per essere collocato di nuovo.

## Da sapere

- Le lettere usano il carattere a tratto singolo di ModelCraft, ispessito: pulito e leggibile, senza ancora una scelta del tipo di carattere.
- Lettere, cifre e segni comuni (incluse le lettere accentate) vengono disegnati; un carattere assente nel font compare come un piccolo riquadro.
- Per cambiare le parole, eliminare il testo e aggiungerlo di nuovo.
- Per incidere una scritta su una superficie, creare lettere solide, collocarle a metà in un gruppo solido e [sottrarle](topic:solids).
