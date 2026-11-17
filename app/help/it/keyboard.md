---
title: Tasti e azioni del mouse
summary: Ogni scorciatoia da tastiera, azione del mouse, gesto del trackpad e gesto touch in ModelCraft, raggruppati per funzione.
keywords: tastiera, scorciatoie, tasti, tasti di scelta rapida, mouse, trackpad, touch, gesti, riepilogo, ctrl, comando, tasti freccia
from: e2348957
---

Questi sono i tasti del metodo spingi/tira, quelli con cui ModelCraft inizia. Per l'altro stile, vedi [Tasti Modeler](topic:keyboard#modeler-keys) più sotto e [Impostazioni di ModelCraft](topic:settings).

Le scorciatoie funzionano quando la vista 3D o un pulsante della barra degli strumenti ha il focus. Se hai appena digitato in un campo di un pannello o cambiato un elenco in {{ui:Style}}, fai clic prima nella vista 3D, altrimenti i tasti andranno a quel campo. Vedi [Tasti, mouse e trackpad](common:keys) per come vengono scritti i tasti su ogni computer.

## Strumenti

| Tasto | Strumento |
|---|---|
| {{key:Space}} | {{ui:Select}} |
| {{key:L}} | {{ui:Line}} |
| {{key:R}} | {{ui:Rectangle}} |
| {{key:C}} | {{ui:Circle}} |
| {{key:N}} | {{ui:Polygon}} |
| {{key:A}} | {{ui:Arc}} |
| {{key:F}} | {{ui:Offset}} |
| {{key:B}} | {{ui:Paint}} |
| {{key:P}} | {{ui:Push/pull}} |
| {{key:M}} | {{ui:Move}} |
| {{key:Q}} | {{ui:Rotate}} |
| {{key:S}} | {{ui:Scale}} |
| {{key:E}} | {{ui:Eraser}} |
| {{key:T}} | {{ui:Tape}} misura |
| {{key:D}} | {{ui:Dimension}} |
| {{key:O}} | {{ui:Orbit}} |
| {{key:H}} | {{ui:Pan}} |
| {{key:Z}} | {{ui:Zoom}} |

Le lettere degli strumenti funzionano solo senza tasti modificatori: {{key:Shift}} con una lettera non fa nulla, tranne i due sotto.

## Modello e file

| Tasto | Fa |
|---|---|
| {{key:G}} | Crea componente dalla selezione |
| {{key:Shift+G}} | Crea gruppo dalla selezione |
| {{key:Shift+Z}} | Zoom estensione (l'intero modello) |
| {{key:Mod+Z}} | Annulla |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Ripristina |
| {{key:Mod+S}} | Salva (scarica il file `.modelcraft`) |
| {{key:Mod+O}} | Apri un modello |
| {{key:Mod+A}} | Seleziona tutto (nel gruppo aperto, se ce n'è uno) |
| {{key:Mod+C}} | Copia la selezione |
| {{key:Mod+X}} | Taglia la selezione |
| {{key:Mod+V}} | Incolla: la copia segue il puntatore, fai clic dove va |
| {{key:Mod+Shift+V}} | Incolla nella stessa posizione (da dove è stata copiata) |
| {{key:Mod+D}} | Duplica: una copia si sposta con il puntatore, fai clic per posarla |
| {{key:Delete}} o {{key:Backspace}} | Cancella la selezione |
| {{key:PageDown}} / {{key:PageUp}} | Scena successiva / precedente |
| {{key:F1}} | Apri o chiudi questa guida (anche {{ui:Help}} nella barra dell'app; {{key:Esc}} dentro la guida la chiude) |
| {{key:Ctrl+Shift+F}} | Modalità schermo: schermo intero, poi barre nascoste, poi normale (Control anche su Mac) |

## Esc

{{key:Esc}} torna indietro di un livello ogni volta che lo premi:

1. Annulla ciò che lo strumento sta facendo (una linea in disegno, una spinta/trazione, uno spostamento). Tutto torna com'era.
2. Passa a {{ui:Select}}.
3. Cancella la selezione.
4. Chiude il gruppo che stai modificando.

Ferma anche le scene in riproduzione. Nella casella del valore, {{key:Esc}} cancella ciò che hai digitato e torna alla vista.

## Mentre uno strumento è attivo

| Tasto | Fa |
|---|---|
| Una cifra, oppure uno di `. , - ' " [ < * /` | Inizia a digitare nella casella del valore |
| {{key:Enter}} | Applica ciò che hai digitato nella casella del valore |
| {{key:Right}} | Blocca sull'asse rosso (premi di nuovo per sbloccare) |
| {{key:Left}} | Blocca sull'asse verde |
| {{key:Up}} | Blocca sull'asse blu |
| {{key:Down}} | Blocca parallelo all'ultimo spigolo sorvolato prima del primo clic |
| Tieni premuto {{key:Shift}} | Mantiene la direzione a cui sei agganciato, finché è premuto |
| {{key:Ctrl}}, {{key:Mod}} o {{key:Alt}} (Sposta) | Passa tra spostare e copiare |

I blocchi con i tasti freccia funzionano in {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Polygon}}, {{ui:Move}}, {{ui:Scale}} e {{ui:Tape}} (quando misuri da un punto), dopo il primo clic. {{ui:Push/pull}} si muove sempre lungo la direzione della faccia e non ha blocchi. In {{ui:Rotate}} i tasti freccia mostrano il messaggio "Bloccato" dopo il primo clic, ma non cambiano la rotazione.

## Tasti freccia negli altri momenti

Quando nessuno strumento è a metà di un'operazione, i tasti freccia spostano la camera:

| Tasto | Fa |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Orbita |
| {{key:Shift}} con una freccia | Pan |

## Mouse

| Azione | Fa |
|---|---|
| Clic | Usa lo strumento corrente |
| Premi, trascina, rilascia | Uguale a due clic (per gli strumenti di disegno); una selezione a riquadro (per {{ui:Select}}); cancella lungo il percorso (per la {{ui:Eraser}}) |
| Doppio clic | {{ui:Select}}: faccia con i suoi spigoli, spigolo con le sue facce, apre un gruppo; spazio vuoto chiude il gruppo. {{ui:Push/pull}}: ripete l'ultima distanza |
| Triplo clic | {{ui:Select}}: tutto ciò che è connesso |
| {{key:Shift}} + clic | {{ui:Select}}: attiva e disattiva dalla selezione |
| {{key:Mod}} + clic | {{ui:Select}}: aggiunge alla selezione |
| {{key:Shift}} + {{key:Mod}} + clic | {{ui:Select}}: rimuove dalla selezione |
| Trascinamento con il pulsante centrale | Orbita, con qualsiasi strumento |
| {{key:Shift}} + trascinamento con il pulsante centrale | Pan, con qualsiasi strumento |
| Trascinamento con il pulsante destro | Pan, con qualsiasi strumento |
| Rotella | Zoom verso il puntatore |

Non esiste un menu del tasto destro.

## Trackpad

Cosa fa lo scorrimento a due dita dipende da {{ui:Settings}} › {{ui:ModelCraft}} › Scorrimento:

| Gesto | Trackpad (o dedotto) | Rotella del mouse |
|---|---|---|
| Scorrimento a due dita | Orbita | Zoom verso il puntatore |
| {{key:Shift}} + scorrimento a due dita | Pan | Zoom |
| Pizzico | Zoom verso il puntatore | Zoom verso il puntatore |
| Pressione e trascinamento a due dita (clic secondario tenuto) | Pan | Pan |

Vedi [Orbita, pan e zoom](topic:orbit-pan-zoom#on-a-trackpad) e [Impostazioni di ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Tasti Modeler

Con {{ui:Settings}} › {{ui:ModelCraft}} › Controlli impostato su stile Modeler:

| Tasto | Fa |
|---|---|
| {{key:W}} o {{key:Space}} | {{ui:Select}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Line}} / {{ui:Rectangle}} / {{ui:Circle}} / {{ui:Polygon}} |
| {{key:E}} | {{ui:Push/pull}} (estrudi) |
| {{key:T}} | {{ui:Tape}} misura |
| {{key:D}} | {{ui:Dimension}} |
| {{key:G}} | Sposta subito la selezione, dal puntatore |
| {{key:R}} | Ruota la selezione attorno al suo centro (asse blu) |
| {{key:S}} | Scala la selezione attorno al suo centro |
| {{key:X}} / {{key:Y}} / {{key:Z}} mentre sposti o ruoti | Blocca l'asse rosso / verde / blu (di nuovo per sbloccare) |
| Clic o {{key:Enter}} | Posa l'oggetto |
| {{key:Esc}} o clic destro | Rimetti a posto l'oggetto |
| {{key:Shift+D}} | Duplica e sposta la copia |
| {{key:X}} o {{key:Delete}} | Cancella la selezione |
| {{key:A}} / {{key:Alt+A}} | Seleziona tutto / non selezionare nulla |
| {{key:Tab}} | Apri il gruppo o componente selezionato; di nuovo per chiuderlo |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Crea gruppo / crea componente |
| Tastierino numerico {{key:1}} / {{key:3}} / {{key:7}} | Vista anteriore / destra / superiore ({{key:Mod}} per posteriore / sinistra / inferiore) |
| Tastierino numerico {{key:5}} | Prospettiva attivata o disattivata |
| Tastierino numerico {{key:.}} | Zoom sulla selezione |
| {{key:Home}} o {{key:Shift+C}} | Zoom estensione |
| {{key:Shift+Tab}} | Aggancio attivato o disattivato |
| Trascinamento con il pulsante centrale / con {{key:Shift}} / con {{key:Mod}} | Orbita / pan / zoom |
| {{key:Alt}} + trascinamento / {{key:Alt+Shift}} + trascinamento | Orbita / pan (senza bisogno del pulsante centrale) |

Copia, incolla, annulla, salva e apri mantengono i tasti elencati sopra. I valori digitati, la casella del valore e {{ui:Push/pull}} funzionano allo stesso modo in entrambi gli stili.

## Schermo a tocco

| Gesto | Fa |
|---|---|
| Tocco | Un clic con lo strumento corrente |
| Doppio tocco | Un doppio clic |
| Premi, trascina, solleva | Come premi, trascina, rilascia con il mouse |
| Due dita: pizzico | Zoom |
| Due dita che si muovono insieme | Pan (Impostazioni › ModelCraft › Schermo a tocco può farlo diventare Orbita) |
| Tre dita che si muovono insieme | Orbita (Pan quando due dita orbitano) |
| Tieni fermo un dito | Termina lo strumento, come {{key:Enter}}; senza nulla in corso, poi trascina per orbitare |
| Un secondo dito durante un'azione con un dito | Annulla quell'azione |
| Strumento {{ui:Orbit}}, poi trascina con un dito | Orbita |

Per digitare un valore su uno schermo a tocco, tocca la casella del valore in basso, digita e premi il tasto Invio (o Vai) della tastiera.

## Dove si trova Sposta

Sposta si trova nello strumento {{ui:Move}}, tasto {{key:M}}: scegli cosa spostare, fai clic su un punto base, poi su un secondo punto oppure digita una distanza. Vedi [Sposta, copia e crea serie](topic:move-copy).
