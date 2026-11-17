---
title: "Piani di sezione: tagliare il modello"
summary: Posizionare un piano di sezione per vedere all'interno del modello, farlo scorrere, invertirlo o disattivare il taglio.
keywords: sezione, piano di sezione, taglio di sezione, taglio, vista sezionata, ritaglio, interno, pianta, fetta, sezione trasversale
from: 28c3a645
---

Un piano di sezione taglia il modello aprendolo, così si può vedere e lavorare all'interno: una pianta di una casa, l'interno di un mobile. Il modello non viene modificato; il taglio è solo una vista.

## Posizionarne uno

1. Fare clic su {{ui:Sezione}} nel gruppo {{ui:Camera}}.
2. Fare clic su una faccia. Il piano viene posizionato su quella faccia, con quattro frecce che puntano verso chi guarda.

   Fare clic lontano da qualsiasi faccia per un piano quadrato rispetto alla direzione in cui si guarda di più. Premere prima un tasto freccia per disporlo ad angolo retto rispetto al rosso ({{key:Right}}), al verde ({{key:Left}}) o al blu ({{key:Up}}).

Il lato verso cui puntano le frecce viene **tagliato via**. Un piano posizionato su una faccia non taglia ancora nulla: farlo scorrere dentro il modello.

## Farlo scorrere, invertirlo, disattivarlo

Fare clic sul contorno del piano per selezionarlo. In {{ui:Informazioni sull'entità}}:

- {{ui:Lungo le sue frecce}} indica dove si trova. Digitare una nuova distanza e premere {{key:Enter}} per farlo scorrere attraverso il modello; digitare `-1m` su un piano posizionato su una faccia frontale lo sposta di 1 m dentro il modello.
- {{ui:Inverti}} gira le frecce, così viene tagliato via l'altro lato.
- {{ui:Attivo (taglia il modello)}}: un solo piano taglia alla volta. Selezionare la casella di un altro piano, oppure posizionarne uno nuovo, e quello taglia al suo posto.
- Rinominarlo in {{ui:Nome}}; eliminarlo con {{key:Delete}} o con la {{ui:Gomma}}.

Dove il piano attraversa un solido chiuso, il taglio viene riempito con un colore scuro. La geometria non chiusa (una faccia singola, una scatola aperta) viene tagliata ma non riempita.

## Mostrare e nascondere

In {{ui:Viste}}:

- {{ui:Mostra i piani di sezione}} nasconde i contorni e le frecce dei piani (il taglio resta).
- {{ui:Mostra i tagli di sezione}} disattiva il taglio e mostra l'intero modello, senza eliminare i piani.

[Vista di presentazione](topic:styles-shadows#presentation-view) nasconde anche i contorni.

## Cose da sapere

- Ciò che viene tagliato via non può essere cliccato né agganciato, quindi si può disegnare su ciò che mostra il taglio.
- I piani di sezione, quello attivo e i due interruttori vengono salvati nel file ModelCraft. Ogni modifica è un passo di annullamento.
- Le esportazioni contengono sempre l'intero modello: una sezione è una vista, non una modifica.
