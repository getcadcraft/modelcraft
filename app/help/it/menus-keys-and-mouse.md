---
title: Menu, tasti e mouse
summary: Scegliere uno stile di menu che corrisponde al modellatore già conosciuto, assegnare un tasto personalizzato a ogni comando, spostare i comandi tra i menu e impostare cosa fanno la rotella e i pulsanti centrale e destro del mouse.
keywords: stile menu, menu, barra dei menu, barra degli strumenti, scorciatoie da tastiera, tasti di scelta rapida, tasti, stile tasti, mappa tasti, personalizza, riassegna, rimappa, mouse, rotella, inverti, direzione zoom, pulsante centrale, pulsante destro, orbita, panoramica, esporta, importa, passaggio, familiare, push-pull, modellatore
from: e56fce3d
---

Gli strumenti di ModelCraft sono gli stessi qualunque sia il modo in cui vi si accede. Uno **stile di menu** decide dove si trovano sullo schermo, come si chiamano e quali tasti li eseguono. Sceglierne uno in {{ui:Impostazioni}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Menu, tasti e mouse}}; la modifica è immediata e questo browser la ricorda.

## Gli stili

| Stile | Che cosa si ottiene |
|---|---|
| {{ui:ModelCraft}} | La barra degli strumenti propria di ModelCraft (File, Disegna, Trasforma, Organizza, Modifica, Camera) e i suoi tasti a una lettera: {{key:L}} linea, {{key:R}} rettangolo, {{key:P}} push/pull, {{key:M}} sposta, {{key:Q}} ruota, {{key:S}} scala, {{key:E}} gomma, {{key:O}} orbita. Lo stile di partenza. |
| {{ui:Push-pull}} | Una barra dei menu (File, Modifica, Vista, Camera, Disegna, Strumenti, Finestra) sopra una riga di strumenti principali, con gli stessi tasti a una lettera. |
| {{ui:Modellatore}} | Una barra dei menu in testa (File, Modifica, Vista, Seleziona, Aggiungi, Oggetto, Mesh) e i tasti dei modellatori di mesh: {{key:W}} seleziona, {{key:G}} sposta, {{key:R}} ruota e {{key:S}} scala la selezione in una volta sola ({{key:X}}, {{key:Y}} o {{key:Z}} bloccano un asse mentre si sposta), {{key:E}} push/pull, {{key:B}} rettangolo, {{key:X}} elimina, {{key:A}} seleziona tutto, {{key:Alt+A}} nessuno, {{key:Shift+D}} duplica, {{key:Mod+G}} gruppo, {{key:H}} nascondi. Il pulsante centrale orbita; {{key:Shift}} e il pulsante centrale spostano la vista in panoramica, {{key:Mod}} e il pulsante centrale ingrandiscono; il pulsante destro annulla ciò che sta facendo uno strumento. |
| {{ui:Principiante}} | Una barra multifunzione la cui scheda {{ui:Crea}} contiene pochi pulsanti grandi: forme da inserire, fori, sposta, ruota e ridimensiona, allinea, {{ui:Gruppo}} (fori ritagliati nelle forme) e il controllo per la stampa 3D; ogni altro strumento è nella scheda {{ui:Altri strumenti}}. Il pulsante destro orbita, il pulsante centrale effettua la panoramica. Vedere [Lo stile Principiante](topic:beginner). |

Lo stile dei tasti che si conosce da {{ui:Tasti}} in basso a destra della vista e da {{ui:Modifica}} › {{ui:Altro}} è la stessa scelta: scegliere lì i tasti del modellatore equivale a scegliere lo stile {{ui:Modellatore}}, e scegliere i tasti push-pull lo lascia per lo stile {{ui:ModelCraft}}. Se in una versione precedente si erano scelti i tasti del modellatore, ModelCraft si apre una sola volta nello stile {{ui:Modellatore}}, da solo.

:::tip
Un tasto appartenente ai tasti push-pull, ma che lo stile assegna a un altro comando, non fa nulla, e la riga di stato indica dove è finito il suo comando ("In Modellatore, Push/pull è E"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e le frecce mantengono sempre il loro significato, i numeri vanno sempre nella casella del valore, e mentre uno strumento sta spostando qualcosa vincono i suoi tasti.
:::

## Personalizzare

1. Scegliere lo stile più vicino a ciò che si desidera, poi fare clic su {{ui:Personalizza…}}.
2. In {{ui:Tasti e menu}}, trovare un comando (la casella di ricerca aiuta). Fare clic su {{ui:Aggiungi un tasto}} e premere il tasto. Fare clic su un tasto per rimuoverlo.
3. Con una barra dei menu, {{ui:Dove si trova}} sposta il comando in un altro menu, oppure in {{ui:Solo tasti}}.
4. In {{ui:Mouse}}, impostare la rotella e l'azione dei pulsanti nella vista 3D.
5. Dare un nome e fare clic su {{ui:Salva}}.

Salvare uno stile integrato crea una propria copia ("Il mio Modellatore"); quello integrato non cambia mai. La copia legge i tasti come lo stile di partenza: una creata da {{ui:Modellatore}} mantiene attivi insieme i tasti sposta, ruota e scala.

## Mouse

- **Rotella del mouse**: {{ui:Scorrere in avanti ingrandisce}} (predefinito) oppure {{ui:Scorrere in avanti riduce}}, e la velocità. Il pizzico sul trackpad ingrandisce sempre nel verso in cui si muovono le dita.
- **Trascinamento nella vista 3D**: {{ui:Propria di ogni vista}} mantiene i pulsanti di ModelCraft (il pulsante centrale orbita, il pulsante destro o {{key:Shift}} e il pulsante centrale effettuano la panoramica). Oppure impostare i pulsanti centrale e destro su orbita, panoramica, zoom o nessuna azione; {{key:Shift}} con il pulsante scambia orbita e panoramica. Il pulsante sinistro appartiene sempre allo strumento in uso.
- **Trackpad**: {{ui:Impostazioni}} › {{ui:ModelCraft}} › {{ui:Scorrimento}} decide ancora se due dita orbitano (trackpad) o ingrandiscono (mouse). Vedere [Orbita, panoramica e zoom](topic:orbit-pan-zoom).

## Portarlo con sé

{{ui:Esporta}} salva lo stile in uso come piccolo file `.ccinput.json`; {{ui:Importa…}} ne aggiunge uno, da un altro computer o da un collega. Un file importato può puntare solo ai comandi propri di ModelCraft: tutto il resto viene escluso e conteggiato nella riga di stato. {{ui:Elimina questo stile}} rimuove uno dei propri.

:::note
Queste impostazioni restano in questo browser. {{ui:Usa questo stile in ogni app}}, sotto le schede degli stili, fa aprire ogni app nello stile corrispondente: {{ui:Push-pull}} va con gli stili a barra dei menu delle altre app. {{ui:Modellatore}} non ha un corrispettivo nelle altre app, quindi resta una scelta di ModelCraft.
:::

Correlati: [Azioni di tasti e mouse](topic:keyboard) · [Impostazioni di ModelCraft](topic:settings) · [Provenienza da altri modellatori](topic:coming-from)
