---
title: Oggetti curva
summary: Disegna curve Bézier, NURBS e a segmenti dritti, dai loro uno spessore, una larghezza o una rastremazione, riempi quelle piatte, imposta del testo come curva e trasformale in mesh.
keywords: curva, curve, bezier, nurbs, spline, percorso, tubo, tubazione, cavo, corda, smusso, estrudi, rastremazione, inclinazione, raggio, riempimento, profilo, testo, lettere, logo, curva in mesh
from: 602bf077
---

Un **oggetto curva** è una curva che genera una forma: un tubo lungo di essa (smusso), una fascia (estrusione), un corno che si assottiglia (rastremazione) o, quando è piatta e chiusa, una lastra piena o delle lettere. La forma segue la curva: spostare un punto e il tubo si muove con esso. Quando la forma è giusta, trasformarla in una mesh.

## Aggiungere una curva

Scegliere {{ui:Curva}} nell'elenco delle aree di lavoro e premere {{ui:Aggiungi}}:

| Tipo | Cos'è |
| --- | --- |
| Curva Bézier, cerchio Bézier | Passa attraverso i suoi punti; ogni punto ha due maniglie che impostano la direzione della curva |
| Curva NURBS, cerchio NURBS, Percorso | Liscia, disegnata verso i suoi punti (inizia e termina sui suoi punti finali); ogni punto ha un peso |
| Testo | Il testo come contorni di lettere piatte e piene |

Una nuova curva ha un tubo sottile così si vede e si può selezionare; impostare la sua profondità dello smusso a 0 per una curva nuda.

Si può anche partire da qualcosa di già disegnato: selezionare un arco, un cerchio, un poligono o una curva disegnata nell'area di lavoro Modello e premere {{ui:Crea un oggetto curva}} in Informazioni sull'entità. Le linee disegnate restano.

## Modificare i punti

Fare doppio clic su un oggetto curva (o selezionarlo e scegliere {{ui:Curva}}) per modificarlo.

- Fare clic su un punto o una maniglia ({{key:Shift}} aggiunge o toglie); trascinare per spostarlo. Trascinare su uno spazio vuoto per selezionare con un riquadro.
- {{ui:Estendi}} ({{key:E}}, oppure {{key:Ctrl}}+clic) aggiunge un punto dopo l'estremità selezionata, sul puntatore.
- {{ui:Suddividi}} ({{key:W}}) mette un punto tra ogni coppia di vicini selezionati; una Bézier mantiene la sua forma.
- {{ui:Sposta}}, {{ui:Ruota}}, {{ui:Scala}} spostano i punti selezionati con il puntatore (con i tasti della modalità modellatore {{key:G}} {{key:R}} {{key:S}}, con i tasti spingi/tira {{key:M}} {{key:Q}} {{key:S}}); fare clic per confermare, {{key:Esc}} per annullare.
- {{ui:Chiudi}} ({{key:C}}) chiude una spline aperta o ne apre una chiusa; {{ui:Inverti}} ({{key:Shift+R}}) la percorre nell'altro verso.
- Maniglie Bézier: {{ui:Leviga}} ({{key:V}}) le dispone per una curva morbida, {{ui:Spigolo}} ({{key:Shift+V}}) le punta verso i vicini, {{ui:Libera}} ({{key:Alt+V}}) le lascia dove le si mette. Trascinare una maniglia la rende libera.
- {{ui:Bézier}}, {{ui:NURBS}} e {{ui:Poli}} cambiano il tipo delle spline selezionate, mantenendo i punti.

Ogni modifica è un passo di annullamento.

## Forma

Le impostazioni sono nel pannello (e in Informazioni sull'entità nell'area di lavoro Modello):

- **Forma:** le curve 3D vanno in qualsiasi direzione; una curva piatta resta nel suo piano e si può riempire.
- **Riempi spline chiuse** (piatte): i contorni diventano una lastra; un contorno dentro un altro è un foro, così le lettere mantengono i loro fori.
- **Estrusione:** metà della larghezza della fascia (curve aperte o 3D), oppure metà dello spessore della lastra (riempita).
- **Profondità dello smusso** e **arrotondamento:** un tubo tondo lungo la curva (con estrusione: una fascia arrotondata); su una forma riempita, uno spigolo arrotondato.
- **Chiudi le estremità:** tappi su un tubo aperto.
- **Rastremazione lungo la curva:** scala in modo uniforme lungo ogni spline, per esempio `1, 0.2` per un corno, `0, 1, 0` per un fuso.
- **Morbidezza** e, per NURBS, **ordine**: quanto finemente è disegnata, e quanto liscia (da 2, dritta, a 6, la più liscia).
- Con punti selezionati: **raggio** (lo spessore del tubo in quel punto, per lo smusso), **inclinazione** (ruota la fascia attorno alla curva) e, per NURBS, **peso**.

I modificatori lavorano sopra un oggetto curva come su una mesh: un Array lungo di essa, uno Specchio, una superficie Subdivision. Vedi [Modificatori su una mesh](topic:modifiers).

## Trasformarla in mesh

{{ui:In mesh}} (nell'area di lavoro Curva o in Informazioni sull'entità, {{ui:Curva in mesh}}) rende l'oggetto curva la mesh che mostra ora; i suoi modificatori restano sopra. Poi modificarla nell'area di lavoro Mesh. Annulla la riporta indietro.

Vedi anche [Mesh](topic:meshes) e [Modificare una mesh](topic:mesh-edit).
