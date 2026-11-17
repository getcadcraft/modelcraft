---
title: Salvare viste come scene
summary: Salvare una camera e uno stile come scena, aggiornarla e rinominarla, e scorrere o riprodurre le scene per presentare un progetto.
keywords: scena, vista, vista salvata, camera, presentazione, animazione, riproduci, diapositive, Page Up, Page Down, schede, percorso guidato
from: 38680d6e
---

Una **scena** ricorda una posizione della camera, uno stile e ciò che è nascosto: da dove si guarda, prospettiva o parallela, lo stile delle facce, i bordi, le impostazioni del sole, i gruppi nascosti, i tag disattivati e il taglio di sezione. Le scene vengono salvate nel file `.modelcraft`.

## Aggiungere una scena

1. Impostare la vista: ruotare, zoomare, scegliere uno stile, impostare il sole.
2. Nel pannello {{ui:Scene}} a destra, fare clic su {{ui:Aggiungi scena}}.

   La scena compare nell'elenco, chiamata "Scena 1", "Scena 2" e così via, e come scheda nella parte superiore della vista 3D. La barra di stato dice "Scena 1 salvata: questa camera, stile e ciò che è nascosto."

## Andare a una scena

- Fare clic sulla sua scheda sopra la vista 3D, oppure sul suo nome nell'elenco {{ui:Scene}}.
- Oppure premere {{key:PageDown}} per la scena successiva e {{key:PageUp}} per la precedente. {{ui:Successiva}} e {{ui:Precedente}} sotto l'elenco fanno lo stesso.

La camera scivola verso la scena in poco più di mezzo secondo. Se il computer è impostato per ridurre le animazioni, vi salta direttamente.

## Modificare, rinominare o eliminare una scena

Ogni scena nell'elenco ha tre piccoli pulsanti dopo il nome:

- **Aggiorna** (le frecce circolari): salva la camera, lo stile e ciò che è nascosto correnti nella scena. "Scena 2 aggiornata."
- **Rinomina** (la matita): apre la finestra di dialogo "Rinomina scena". Digitare il nuovo nome e fare clic su {{ui:Salva}}.
- **Elimina** (il cestino): rimuove la scena. "Scena 2 eliminata. Ctrl+Z la ripristina."

Aggiungere, aggiornare, rinominare ed eliminare scene sono passaggi annullabili, come le modifiche al modello.

## Bloccare la camera di una scena

Quando si renderizza più volte la stessa vista mentre il progetto cambia, bloccare la camera di quella scena, così la vista non si sposta per errore.

1. Nell'elenco {{ui:Scene}}, fare clic sul pulsante **lucchetto** (il lucchetto aperto) dopo il nome della scena. Si chiude, e la scheda della scena sopra la vista 3D mostra un piccolo lucchetto. La barra di stato dice "Scena 2: camera bloccata."
2. Andare alla scena ogni volta che si vuole renderizzare: la camera torna esattamente alla vista salvata, così le immagini prodotte si allineano con quelle precedenti.

Con la camera bloccata, **Aggiorna** salva comunque stile e ciò che è nascosto nella scena, ma la camera resta dov'era, anche dopo averla ruotata altrove. Fare di nuovo clic sul lucchetto per sbloccarla; poi Aggiorna salva di nuovo la vista corrente. Bloccare e sbloccare sono passaggi annullabili, e il blocco viene salvato nel file `.modelcraft`.

## Presentare

1. Aggiungere due o più scene.
2. Fare clic su {{ui:Riproduci}} sotto l'elenco. ModelCraft passa alla scena successiva ogni pochi secondi e torna alla prima dopo l'ultima.
3. Fare clic su {{ui:Stop}} (lo stesso pulsante) oppure premere {{key:Esc}} per fermarla.

Per uno studio del sole, aggiungere una scena per ogni ora cambiando solo {{ui:Ora}}, poi riprodurle. Vedi [Stili e ombre del sole](topic:styles-shadows#a-sun-study).

Per presentare senza le barre, premere due volte {{key:Ctrl+Shift+F}}: prima schermo intero, poi schermo intero con le barre nascoste. Le schede delle scene restano sopra la vista.

## Che cosa mostra una scena

Una scena ricorda ciò che era nascosto al momento del salvataggio: gruppi e componenti che si sono [nascosti](topic:hide-isolate), [tag](topic:tags) disattivati e quali [piani di sezione](topic:sections) tagliano. Andando alla scena, questi elementi vengono di nuovo nascosti o mostrati. Così una scena può mostrare l'intera casa, la successiva la casa con il tag del tetto disattivato, quella dopo una sezione attraverso di essa.

Facce e spigoli sciolti nascosti non fanno parte delle scene. Andare a una scena non crea un passo di annullamento. Le scene salvate da una versione precedente di ModelCraft mantengono ciò che è nascosto così com'è; fare clic su Aggiorna per salvarlo in esse.

## Esportare un'animazione

{{ui:Esporta animazione}}, sotto l'elenco, riproduce le scene dalla prima all'ultima, spostando la camera in modo fluido tra una e l'altra, e salva il filmato come video **WebM** (due secondi di movimento e una breve pausa per scena). Registra la vista così come appare, alla dimensione sullo schermo, in [vista di presentazione](topic:styles-shadows#presentation-view) (senza assi, guide o selezione). Premere {{key:Esc}} o fare di nuovo clic sul pulsante per fermare senza salvare. WebM si riproduce nei browser e in VLC, e gli editor video lo convertono.

Per un percorso guidato renderizzato (cielo, sole, ombre, materiali) a una dimensione scelta, usare invece {{ui:Render di un video…}}: senza chiavi di animazione prende le scene, in ordine, come percorso della camera. Vedi [Animare la camera e gli oggetti](topic:animation).

## Cose da sapere

- Cambiare lo stile o spostare la camera dopo essere andati a una scena non modifica la scena finché non si fa clic su Aggiorna.
- Le scene non vengono esportate in Collada, OBJ, glTF, STL o IFC.
