---
title: Digitare misure esatte nella casella dei valori
summary: Tutti i modi per digitare lunghezze, dimensioni, punti, offset, angoli, lati e copie, e come vengono lette unità e numeri senza unità.
keywords: casella dei valori, vcb, digitare, esatto, quota, lunghezza, unità, piedi, pollici, metrico, millimetri, coordinate, offset, serie, lati, angolo, virgola decimale
from: 0148dc3d
---

La casella dei valori si trova nella barra di stato in basso, con un'etichetta che cambia con lo strumento. Mentre si lavora mostra la misura in tempo reale; in qualsiasi momento si può digitarne una esatta.

## Come digitare

1. Iniziare l'azione con un clic (il primo angolo, la faccia, il punto da cui spostarsi).
2. Digitare. Non serve fare clic sulla casella dei valori: una cifra o uno dei caratteri `. , - ' " [ < * /` invia la digitazione lì.
3. Premere {{key:Enter}}.

Premere {{key:Esc}} nella casella dei valori per cancellarla e tornare alla vista. Su uno schermo touch, toccare la casella dei valori per far comparire la tastiera.

Se ModelCraft non riesce a leggere ciò che è stato digitato, la barra di stato indica: "Digitare una lunghezza, ad esempio 3m, 10'6" o 4m,3m." Se lo strumento non può usarla, indica "Operazione non riuscita: …" con il motivo.

## Lunghezze

| Digitare | Significa |
|---|---|
| `3m` `320cm` `3200mm` | Metri, centimetri, millimetri |
| `10'` `10ft` `10 feet` | Piedi |
| `6"` `6in` `6 inches` | Pollici |
| `10'6"` `10' 6"` `10'-6 1/2"` | Piedi e pollici, con frazione |
| `6 1/2"` `6-1/2"` `3/4"` | Pollici con frazione |
| `1.5ft` `.5m` | Decimali con unità |
| `120` | Un numero senza unità, nell'unità del modello |

**Un numero senza unità usa l'unità del modello**, come mostrato nel selettore in basso a destra: pollici in un modello in piedi e pollici (quindi `120` vale 10 piedi), millimetri in un modello in millimetri, e così via. Digitare un'unità prevale sempre, qualunque sia l'unità del modello. Anche gli apici tipografici e i segni di primo (’ ” ′ ″) vengono letti come piedi e pollici.

:::warning
Usare sempre un **punto** per i decimali: `2.5m`. La virgola separa due valori, quindi `2,5` significa 2 e 5 (due valori), qualunque siano le impostazioni di lingua.
:::

## Calcoli

Ogni lunghezza può essere un calcolo: addizione `+`, sottrazione `-`, moltiplicazione `*`, divisione `/`, e si possono usare le parentesi. Non serve alcuna calcolatrice.

| Digitare | Significa |
|---|---|
| `2.5/3` | Un terzo di 2.5 (nell'unità del modello) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" in un modello in piedi e pollici |
| `3m-25cm` | 2.75 m |

Un numero senza unità è nell'unità del modello quando rappresenta una lunghezza (`2.5/3` in un modello in metri vale 0.833 m), e un semplice fattore quando moltiplica o divide una lunghezza (`2*450mm`). Anche angoli e fattori accettano calcoli: `90/2` vale 45°. Due lunghezze moltiplicate danno un'area, non una lunghezza, quindi `2m*3m` viene rifiutato.

Se ModelCraft non riesce a calcolarlo, la barra di stato indica che cosa non va e dove, per esempio "Divisione per zero (carattere 4)." Anche una parentesi avvia la casella dei valori, quindi si può iniziare con `(`.

Questi mantengono il loro significato: `/3`, `3x` e `*3` dopo una copia, `24s` per i lati, e `/3` con uno spigolo selezionato (che [divide lo spigolo](topic:divide)).

## Per strumento

| Strumento | Etichetta | Digitare |
|---|---|---|
| {{ui:Linea}} | {{ui:Lunghezza}} | Una lunghezza (verso il puntatore), oppure un punto o un offset (sotto) |
| {{ui:Rettangolo}} | {{ui:Quote}} | Due lunghezze: `4m,3m`, `12',10'`. Funziona anche il punto e virgola: `4m;3m` |
| {{ui:Cerchio}}, {{ui:Poligono}} | {{ui:Lati}}, poi {{ui:Raggio}} | Prima del primo clic, il numero di lati: `12s` oppure `12` (da 3 a 999). Dopo, il raggio |
| {{ui:Spingi/tira}} | {{ui:Distanza}} | Una lunghezza. Una negativa va nella direzione opposta |
| {{ui:Sposta}} | {{ui:Distanza}} | Una lunghezza (verso il puntatore), oppure un punto o un offset. Dopo una copia: `3x`, `*3`, `/3` |
| {{ui:Ruota}} | {{ui:Angolo}} | Gradi: `90`, `-45`, `22.5` |
| {{ui:Scala}} | {{ui:Scala}} | Un fattore maggiore di 0: `2`, `0.5`, `1.25` |
| {{ui:Metro}} | {{ui:Offset}} oppure {{ui:Lunghezza}} | Una lunghezza |
| {{ui:Dividi}} | {{ui:Parti}} | Quante parti uguali: `5`, `5s` oppure `/5` (da 2 a 1000). Vedi [Dividere uno spigolo o una curva in parti uguali](topic:divide) |
| {{ui:Quota}} | {{ui:Offset}}, poi {{ui:Lunghezza}} | Dove va la linea di quota; subito dopo il posizionamento, una nuova lunghezza ridimensiona il modello |
| {{ui:Seleziona}} | {{ui:Valore}} | Con una quota o uno spigolo selezionato, una nuova lunghezza ridimensiona il modello. Vedi [Quotare e ridimensionare](topic:dimensions) |

## Punti e offset

Per {{ui:Linea}} e {{ui:Sposta}}, dopo il primo clic:

- `[x,y,z]` va a quel punto esatto nel modello (negli assi propri del gruppo quando si modifica all'interno di un gruppo). Esempio: `[0,0,3m]` è 3 m dritto sopra l'origine.
- `<dx,dy,dz>` va a quella distanza dal primo punto lungo rosso, verde e blu. Esempio: `<0,0,10'>` è 10 piedi dritto verso l'alto.

Ognuno dei tre valori può avere una propria unità: `<12',0,6">`.

## Copie dopo uno spostamento

Subito dopo una copia con {{ui:Sposta}}:

| Digitare | Crea |
|---|---|
| `3x` oppure `*3` | 3 copie in fila alla stessa distanza |
| `/3` | 3 copie distribuite in modo uniforme tra l'originale e la prima copia |

Fino a 500 copie. Vedi [Spostare, copiare e creare serie](topic:move-copy#a-row-of-copies).

## I valori digitati hanno bisogno di una direzione

Una singola lunghezza digitata va nella direzione in cui punta il puntatore dal primo clic. Se si digita subito dopo il clic, prima di muoversi, non c'è ancora una direzione e non succede nulla. Spostare un po' il puntatore verso dove si vuole andare, poi digitare.

## L'unità del modello

Cambiare l'unità nel selettore in basso a destra: {{ui:ft and in}}, in, ft, yd, mi, mil, µm, mm, cm, m o km, purché siano attivate in {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Unità}} (l'unità propria del modello è sempre presente). Una lunghezza digitata con il simbolo di una qualsiasi unità viene letta in quell'unità. Vedi [Unità, valori digitati ed elenchi delle unità](common:unit-lists). Cambia il modo in cui le lunghezze vengono mostrate e come vengono lette le misure senza unità; il modello resta della stessa dimensione. L'unità viene salvata nel file.

Come vengono mostrate le dimensioni:

| Unità | Lunghezze | Aree | Volumi |
|---|---|---|---|
| ft and in | `10' 6 1/2"` (fino a 1/16") | piedi quadrati | piedi cubi |
| in | `126 1/2"` | pollici quadrati | pollici cubi |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² da 0.01 m², altrimenti mm² | m³ da 0.01 m³, altrimenti mm³ |

Un nuovo modello parte in piedi e pollici quando la lingua del browser è impostata su una regione degli Stati Uniti (e Liberia e Myanmar), e in millimetri in tutti gli altri casi. Un'unità con l'asterisco in {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Unità}} viene usata al suo posto, quando ModelCraft la prevede. Oppure cambiare il selettore dopo {{ui:Nuovo}}.
