---
title: Disporre le UV di una mesh
summary: Contrassegnare le cuciture, srotolare, proiettare e impacchettare le coordinate di texture di una mesh nell'area di lavoro UV, e verificarle con una scacchiera e i colori dello stiramento.
keywords: uv, uvs, srotolare, srotolamento, cucitura, cuciture, texture, coordinate di texture, atlante, impacchettare, impacchettamento, isola, isole, scacchiera, stiramento, distorsione, proiezione cubica, proiezione cilindrica, proiezione sferica, conforme, angle based, lscm, abf
from: 00028f20
---

Una texture è un'immagine piatta, una mesh non lo è. Le sue **UV** indicano dove si trova ogni vertice di ogni faccia sull'immagine. L'area di lavoro UV le crea: si taglia la mesh lungo le **cuciture**, si distendono i pezzi sul piano (**srotolare**) e li si adatta nel quadrato (**impacchettare**).

## Aprirla

Selezionare una mesh e scegliere {{ui:UV}} nell'elenco delle aree di lavoro. Un gruppo o un componente diventa prima una mesh, come nell'area di lavoro Mesh. La vista 3D si sposta sulla metà sinistra; l'**editor UV** a destra mostra le facce della mesh distese sul quadrato della texture. La selezione funziona come nell'area di lavoro Mesh, e ciò che si seleziona in una vista risulta selezionato anche nell'altra.

## Contrassegnare le cuciture

Le cuciture sono i punti in cui la mesh può essere aperta; appaiono in rosso in entrambe le viste.

- Selezionare gli spigoli ({{ui:Spigolo}}, oppure {{key:2}}) e premere {{ui:Segna cucitura}} ({{key:Ctrl+E}}). {{ui:Cancella cucitura}} ({{key:Ctrl+Shift+E}}) le rimuove.
- {{ui:Cuciture sugli spigoli vivi}} contrassegna ogni spigolo vivo e ogni spigolo in cui le facce si incontrano con più di 60°: un cubo si scompone nelle sue sei facce.
- {{ui:Cuciture dagli UV}} contrassegna le cuciture dove le UV sono già interrotte, per esempio dopo una proiezione.

Un pezzo chiuso ha bisogno di cuciture per distendersi: una sfera richiede almeno un taglio, un tubo un taglio lungo la sua lunghezza.

## Srotolare

Selezionare le facce da distendere (o nessuna, per l'intera mesh) e premere {{ui:Srotola}} ({{key:U}}). Ogni pezzo compreso tra le cuciture viene steso sul piano, mantenendo gli angoli il più fedeli possibile (appiattimento basato sugli angoli), poi i pezzi vengono impacchettati nel quadrato. {{ui:Conforme}} srotola invece con mappe conformi a minimi quadrati: più rapido, un po' meno fedele sui pezzi molto curvi. Una forma che si può ricavare da un foglio piatto, come il lato di un cilindro tagliato una sola volta, si srotola senza alcuno stiramento.

## Proiettare

Per forme semplici una proiezione spesso basta:

| Proiezione | Cosa fa |
| --- | --- |
| {{ui:Cubo}} | Ogni faccia sul lato di un cubo verso cui è più rivolta |
| {{ui:Cilindro}} | Attorno all'asse blu: in larghezza c'è l'angolo intorno, in altezza c'è l'altezza |
| {{ui:Sfera}} | Dal centro: in larghezza c'è l'angolo intorno, in altezza c'è la latitudine |
| {{ui:Dalla vista}} | Come sono viste le facce nella vista 3D in questo momento |

Una faccia a cavallo della giunzione del cilindro o della sfera viene mantenuta in un unico pezzo, quindi le sue UV possono superare di poco il bordo destro del quadrato; lì le texture si ripetono.

## Disporre

- {{ui:Impacchetta}} dispone i pezzi (isole) nel quadrato a una sola dimensione di texel, ciascuno ruotato in modo da occupare il minimo spazio. Il pannello imposta lo spazio lasciato tra di essi.
- {{ui:Ruota di 90°}} e {{ui:Specchia}} ruotano o specchiano le UV delle facce selezionate.
- Nell'editor UV, trascinare una faccia selezionata per spostare le UV della selezione, oppure posizionarsi sull'editor e premere {{key:R}} o {{key:S}}, poi muovere per ruotarle o scalarle (un clic le conferma, {{key:Esc}} annulla). {{key:G}} sposta senza trascinare. Fare doppio clic su una faccia (oppure premere {{key:L}}) per selezionare l'intera isola. La rotella fa lo zoom; trascinare con il pulsante centrale o destro per spostare la vista; {{key:F}} riadatta di nuovo il quadrato.

Ogni modifica è un unico passo di annulla.

## Verificarle

- {{ui:Scacchiera}} mostra sulla mesh una scacchiera etichettata, nelle sue UV: quadretti uniformi e quadrati significano che la texture è distribuita in modo regolare; le etichette indicano la direzione in cui scorre.
- {{ui:Stiramento}} colora ogni faccia in base a quanto le sue UV la stirano: blu nessuno, poi verde, fino al rosso per uno stiramento forte. Il pannello sceglie se misurare **angoli piegati** oppure **dimensione modificata**, e ne mostra la media.

Vedi anche [Modificare una mesh](topic:mesh-edit), [Mesh](topic:meshes) e [Modificatori su una mesh](topic:modifiers).
