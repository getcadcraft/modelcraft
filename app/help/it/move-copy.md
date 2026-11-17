---
title: Sposta, copia e crea serie
summary: Sposta oggetti cliccando o per una distanza esatta, copiali con un tasto modificatore e crea una fila di copie equidistanti.
keywords: sposta, copia, duplica, serie, fila, spaziatura, dividi, offset, stira, colonne, ripeti, copie multiple
from: 280245fc
---

{{ui:Sposta}} ({{key:M}}) sposta ciò che è selezionato da un punto a un altro. Tenendo premuto un tasto modificatore si ottiene una copia, e dopo una copia è possibile digitare quante copie aggiuntive si vogliono.

## Sposta qualcosa

1. Selezionare ciò che si vuole spostare (vedi [Seleziona oggetti](topic:select)). Se non è selezionato nulla, {{ui:Sposta}} prende l'oggetto su cui si clicca.
2. Premere {{key:M}}.
3. Cliccare un punto da cui partire. Scegliere un punto significativo, per esempio un angolo: quel punto finirà esattamente dove si clicca dopo.
4. Muovere il puntatore. La selezione lo segue. Si aggancia a punti, spigoli e alle direzioni rossa, verde e blu come fa una linea.
5. Cliccare dove deve andare il punto, oppure digitare una distanza e premere {{key:Enter}}.

   La riga di suggerimento della barra di stato torna a "Cliccare un punto da cui spostare…" per lo spostamento successivo.

Una distanza digitata va nella direzione in cui si punta. È anche possibile digitare uno scostamento esatto, `<2m,0,0>` (2 m lungo il rosso), oppure una destinazione esatta per il punto scelto, `[0,0,0]` (l'origine). Vedi [Digitare dimensioni esatte](topic:value-box).

Per spostare lungo un solo asse, premere un tasto freccia dopo il primo clic: {{key:Right}} blocca sul rosso, {{key:Left}} sul verde, {{key:Up}} sul blu. Premere di nuovo la stessa freccia per sbloccare.

## Spostare una parte di una forma la allunga

La geometria non raggruppata è collegata. Se si selezionano una faccia o alcuni spigoli e li si sposta, le facce collegate si allungano per seguirli. Spostando la faccia superiore di una scatola lateralmente, la scatola si inclina; spostando uno spigolo del tetto, il tetto cambia pendenza. Le facce che non possono più restare piane si ripiegano in triangoli.

Per spostare un intero oggetto senza allungarlo, selezionarlo tutto prima (triplo clic su di esso), oppure, meglio, renderlo un gruppo o un componente (vedi [Gruppi e componenti](topic:groups-components)).

## Copiare qualcosa

1. Selezionare ciò che si vuole copiare.
2. Premere {{key:M}}.
3. Tenere premuto {{key:Ctrl}} (o {{key:Alt}}) e cliccare il punto da cui partire. Su Mac, {{key:Mod}} o {{key:Alt}} fa lo stesso. Il suggerimento dice "Ctrl sposta invece", il che significa che si sta copiando.

   Si può anche premere e rilasciare {{key:Ctrl}} o {{key:Alt}} dopo il primo clic per passare tra spostamento e copia.

4. Cliccare dove deve andare la copia, oppure digitare una distanza e premere {{key:Enter}}.

   L'originale resta dov'era e la copia risulta selezionata.

## Copia, taglia, incolla e duplica

- {{key:Mod+C}} copia la selezione, {{key:Mod+X}} la taglia (copia, poi cancella), {{ui:Copia}} e {{ui:Incolla}} sono anche pulsanti nel gruppo {{ui:Modifica}} della barra degli strumenti, e {{ui:Altro}} accanto a loro contiene taglia, incolla nella stessa posizione e duplica.
- {{key:Mod+V}} incolla: un contorno della copia segue il puntatore, agganciandosi come qualsiasi strumento, e un clic la posiziona con il suo angolo più basso in quel punto. {{key:Esc}} annulla.
- {{key:Mod+Shift+V}} incolla nella stessa posizione, esattamente dove si trovava la copia: utile per spostare qualcosa in un gruppo aperto.
- {{key:Mod+D}} ({{key:Shift+D}} nello stile Modeler) duplica: viene creata una copia che si muove subito con il puntatore; cliccare per posizionarla, digitare una distanza, oppure premere {{key:Esc}} per lasciarla. Subito dopo, digitare `3x` per altre copie di seguito.

Un gruppo incollato diventa un nuovo gruppo. Un componente incollato è un'altra collocazione dello stesso componente, quindi modificarne uno cambia anche tutti gli altri. Le copie vengono incollate anche in un'altra scheda di ModelCraft in questo browser (vi arrivano come nuove definizioni).

## Una fila di copie

Subito dopo una copia, mentre {{ui:Sposta}} è ancora lo strumento attivo:

- Digitare `3x` (o `*3`) e premere {{key:Enter}} per tre copie di seguito, ciascuna alla stessa spaziatura della prima copia. Si ottengono tre nuove copie oltre all'originale.
- Digitare `/3` e premere {{key:Enter}} per dividere: tre copie distribuite uniformemente dall'originale fino al punto in cui si è posizionata la prima copia, con l'ultima proprio in quel punto. Usarlo per riempire una campata: posizionare una copia all'estremità lontana, poi dividere.

Digitare subito un altro numero: `5x` sostituisce la fila `3x`. Il suggerimento ricorda: "Copiato. Digitare 3x per altre copie di seguito, oppure /3 per dividere la distanza."

### Esempio: colonne ogni 6 metri

1. Creare una colonna e renderla un componente ({{key:G}}), in modo che tutte le copie cambino insieme in seguito.
2. Premere {{key:M}}, tenere premuto {{key:Ctrl}} e cliccare l'angolo di base della colonna.
3. Muoversi lungo l'asse rosso e digitare `6m`, poi {{key:Enter}}.
4. Digitare `4x` e {{key:Enter}}. Si hanno cinque colonne, distanti 6 m.

## Cose da sapere

- Premere {{key:Esc}} prima del secondo clic per annullare: tutto torna dov'era.
- {{ui:Sposta}} funziona all'interno del gruppo che si sta modificando. Per spostare un intero gruppo, chiuderlo prima e selezionarlo dall'esterno.
- Con {{ui:Collisione}} attivo (in basso a destra, e nelle [impostazioni di ModelCraft](topic:settings#solids-stop-where-they-touch)), uno spostamento si ferma dove la selezione tocca un altro solido invece di attraversarlo. Cliccare {{ui:Collisione}} per disattivarlo per uno spostamento che deve attraversare.
- Per mettere una copia dentro un altro gruppo: copiarla, aprire l'altro gruppo e incollare ({{key:Mod+Shift+V}} la mantiene nella stessa posizione).
