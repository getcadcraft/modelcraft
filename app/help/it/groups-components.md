---
title: Gruppi e componenti
summary: Impedisci che gli oggetti si attacchino tra loro, modifica una copia per cambiarle tutte e usa i pannelli Struttura e Componenti.
keywords: gruppo, componente, crea gruppo, crea componente, esplodi, rendi unico, struttura, istanze, copie, blocco, annidato, modifica gruppo, posiziona
from: 7cb925f3
---

La geometria libera in ModelCraft si attacca: le linee che si toccano si dividono a vicenda, e le facce che condividono uno spigolo si spostano insieme. È ciò che rende possibile disegnare sulle facce, ma significa anche che un box disegnato contro un altro box si fonde con esso. **Gruppi** e **componenti** tengono separate le cose.

- Un **gruppo** racchiude della geometria in modo che agisca come un unico oggetto. Niente al di fuori di esso può attaccarsi.
- Un **componente** è un gruppo che può essere posizionato più volte. Ogni copia condivide lo stesso contenuto: modificandone una, cambiano tutte. Usa i componenti per tutto ciò che si ripete: finestre, colonne, scrivanie, alberi.

## Creare un gruppo o un componente

1. Seleziona la geometria. Un triplo clic su una faccia seleziona l'intero oggetto connesso; un trascinamento a finestra seleziona tutto ciò che è nel riquadro.
2. Premi {{key:Shift+G}} per un gruppo, oppure {{key:G}} per un componente. Puoi anche fare clic su {{ui:Group}} o {{ui:Component}} nel gruppo {{ui:Organize}} della barra degli strumenti, oppure su {{ui:Make group (Shift+G)}} o {{ui:Make component (G)}} in {{ui:Entity info}}.

   La barra di stato indica "Raggruppato come Group#1." oppure "Creato componente Component#1.", il nuovo oggetto è selezionato e compare in {{ui:Outliner}}.

3. Per assegnare un nome, digita un nome nel campo {{ui:Name}} di {{ui:Entity info}} e premi {{key:Enter}} oppure fai clic altrove.

Selezionare una faccia porta con sé i suoi spigoli. Se non c'è nulla di selezionato, la barra di stato indica "Seleziona prima della geometria (trascina una finestra, oppure fai triplo clic per selezionare tutto ciò che è connesso)."

È possibile anche raggruppare dei gruppi: seleziona più gruppi e premi {{key:Shift+G}}. {{ui:Outliner}} mostra l'annidamento.

:::note
I tasti corrispondono ai valori predefiniti di SketchUp: {{key:G}} crea un componente, {{key:Shift+G}} un gruppo.
:::

## Modificare dentro un gruppo o un componente

1. Fai doppio clic su di esso (nella vista o in {{ui:Outliner}}), oppure selezionalo e fai clic su {{ui:Edit}} in {{ui:Entity info}}.

   Il resto del modello si attenua, gli assi si spostano su quelli propri del gruppo e {{ui:Outliner}} riporta "Modifica: Modello › Group#1". La barra di stato indica "Modifica di Group#1. Esc o doppio clic all'esterno lo chiude."

2. Disegna, spingi/tira, sposta ed elimina come di consueto. Tutto ciò che fai resta dentro il gruppo.
3. Per chiuderlo, premi {{key:Esc}} (due volte se qualcosa è selezionato), fai doppio clic su uno spazio vuoto, oppure fai clic su {{ui:Close group}} in {{ui:Outliner}}.

Mentre un componente è aperto, ogni sua copia cambia man mano che lavori.

## Posizionare altre copie di un componente

- Copia con {{ui:Move}} e {{key:Ctrl}} (vedi [Sposta e copia](topic:move-copy)). Ogni copia è un'altra posizione dello stesso componente.
- Oppure fai clic su {{ui:Place}} accanto ad esso nel pannello {{ui:Components}}, poi fai clic dove deve andare. La sua origine, cioè l'angolo più basso del box attorno a ciò che avevi selezionato quando lo hai creato, si posiziona dove fai clic. Lo strumento torna poi su {{ui:Select}}.

{{ui:Components}} mostra quante copie sono posizionate ("4×"), e {{ui:Outliner}} mostra il conteggio dopo il nome.

## Riordinare in Struttura

Trascina una riga in {{ui:Outliner}} per cambiarne la posizione. Nella vista non si sposta nulla: un gruppo mantiene il suo posto nel modello.

- **Dentro un gruppo:** rilascia sulla parte centrale della riga di un gruppo (la riga si evidenzia con un contorno tratteggiato). Va dentro, come ultimo.
- **In un ordine diverso:** rilascia sul bordo superiore o inferiore di una riga (compare una linea). Va subito prima o dopo quella riga, dentro lo stesso gruppo di quella riga; così può anche entrare in un gruppo in una posizione scelta.
- **Al livello superiore:** rilascia sull'intestazione di {{ui:Outliner}}. Va come ultimo.

Ogni rilascio è un passo: {{key:Mod+Z}} lo riporta indietro. {{key:Esc}} durante un trascinamento non rilascia nulla. Un gruppo non può andare dentro sé stesso né dentro un gruppo che contiene. Il trascinamento è disattivato mentre {{ui:Find by name}} contiene del testo.

:::touch
Tieni premuto un dito su una riga per un momento, poi trascinala. Uno scorrimento rapido fa scorrere l'elenco.
:::

## Rendere diversa una copia

Seleziona la copia e fai clic su {{ui:Make unique}} in {{ui:Entity info}} (visibile quando il componente è posizionato più di una volta). Quella copia ottiene una propria definizione, con un nome simile all'originale e un nuovo numero. Modificala senza toccare le altre.

## Trasformare un gruppo in un componente

Seleziona il gruppo e fai clic su {{ui:Make component}} in {{ui:Entity info}}. Riceve un nuovo nome, ad esempio Component#2, anche se avevi dato un nome al gruppo; digita di nuovo il nome in {{ui:Name}}.

## Esplodere

Seleziona un gruppo o un componente e fai clic su {{ui:Explode}} (nella barra degli strumenti o in {{ui:Entity info}}). Il suo contenuto diventa geometria libera nel punto in cui si trovava e si attacca a ciò che tocca. I gruppi al suo interno restano gruppi.

## Solido e volume

Quando selezioni un gruppo o un componente, {{ui:Entity info}} mostra **Solido: Sì** se le sue facce si chiudono senza spazi (ogni spigolo è condiviso da esattamente due facce) e non ci sono gruppi annidati al suo interno. In tal caso mostra anche il **volume**. Un box, un muro con una finestra ritagliata e un cilindro estruso sono solidi; un box con la parte superiore eliminata non lo è.

## Quando va via l'ultima copia

Eliminare l'ultima copia di un componente lo rimuove anche dal pannello {{ui:Components}}. {{key:Mod+Z}} lo riporta.

## Da sapere

- Le copie di un **gruppo** create con Sposta condividono il loro contenuto in questa build, come fanno le copie dei componenti: modificarne una cambia le altre. Per renderne una indipendente, fai clic su {{ui:Make component}}, poi su {{ui:Make unique}}. Vedi [Risoluzione dei problemi](topic:troubleshooting#editing-one-group-changed-another).
- I componenti non praticano aperture nei muri né si agganciano alle facce, e non esiste una libreria di componenti pronti. Ne crei di tuoi, oppure li importi.
- I file importati arrivano come gruppo. I file Collada mantengono al loro interno i propri gruppi e componenti.
