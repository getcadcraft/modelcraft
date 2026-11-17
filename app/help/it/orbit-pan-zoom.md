---
title: Orbita, pan e zoom
summary: Muoversi attorno al modello con mouse, trackpad, schermo tattile o tastiera, e passare alle viste standard.
keywords: orbita, pan, zoom, pressione prolungata, tre dita, due dita, tocco, naviga, camera, vista, ruota vista, trackpad, touch, pizzico, tasto centrale, zoom estensione, prospettiva, parallela, vista dall'alto, iso
from: 10d4d33a
---

Si può spostare la camera in qualsiasi momento, anche nel mezzo del disegno di una linea o dello spingere una faccia: lo strumento aspetta dove si trovava.

## Con un mouse a tre tasti

| Per | Fare questo |
|---|---|
| Orbitare | Trascinare con il tasto centrale (premere la rotella) |
| Pan | Trascinare con il tasto destro, oppure tenere premuto {{key:Shift}} e trascinare con il tasto centrale. Premere o rilasciare {{key:Shift}} durante un trascinamento passa tra orbita e pan |
| Zoom | Girare la rotella. Lo zoom avviene verso la faccia sotto il puntatore, o verso il punto sotto di esso alla profondità del centro della vista |
| Vedere l'intero modello | {{key:Shift+Z}} o {{ui:Estensione}} |

L'orbita ruota la vista attorno alla parte del modello sotto il puntatore, così quel punto resta dov'è mentre tutto gli ruota attorno. Su uno spazio vuoto ruota attorno al centro della vista. Il pan mantiene il punto afferrato sotto il puntatore.

Per orbitare sempre attorno al centro della vista, o per rendere orbita e pan più veloci o più lenti, aprire {{ui:Impostazioni}} ({{key:Mod+,}}), scheda {{ui:ModelCraft}}, **Orbita e pan**. Le velocità si applicano al mouse, al trackpad, al tocco e ai tasti freccia.

Un clic destro senza trascinamento non fa nulla; ModelCraft non ha un menu del clic destro.

## Senza tasto centrale

Usare gli strumenti di camera nella barra degli strumenti, oppure la tastiera:

1. Premere {{key:O}} (o cliccare {{ui:Orbita}}) e trascinare con il tasto sinistro per orbitare. Tenere premuto {{key:Shift}} durante il trascinamento per fare pan.
2. Premere {{key:H}} (o cliccare {{ui:Pan}}) e trascinare per fare pan.
3. Premere {{key:Z}} (o cliccare {{ui:Zoom}}) e trascinare verso l'alto per ingrandire, verso il basso per rimpicciolire.
4. Premere {{key:Space}} per tornare a {{ui:Seleziona}}, oppure premere il tasto dello strumento successivo che si vuole.

Gli strumenti di camera sostituiscono lo strumento in uso. Per guardarsi attorno nel mezzo di un'operazione senza perderla, usare la tastiera:

- I tasti freccia orbitano.
- {{key:Shift}} con i tasti freccia fa pan.

Mentre uno strumento di disegno è nel mezzo di un'operazione (dopo il primo clic), i tasti freccia bloccano le direzioni invece di orbitare. Vedi [Inferenza e aggancio](topic:inference#lock-a-direction).

## Su trackpad

Il modo più semplice: aprire {{ui:Impostazioni}} ({{key:Mod+,}}), scheda {{ui:ModelCraft}}, e impostare Scorrimento su **Trackpad** (o lasciarlo su "Determina automaticamente"). Poi scorrere con due dita per orbitare, tenere premuto {{key:Shift}} e scorrere per fare pan, e pizzicare per lo zoom — senza pulsanti della camera. Vedi [Impostazioni di ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

Con Scorrimento impostato su **Rotella del mouse**:

:::mac
- **Zoom:** scorrere con due dita, o pizzicare. Entrambi fanno zoom verso il puntatore.
- **Pan:** premere con due dita (un clic secondario) e tenere le dita giù mentre si trascina. Attivare "Clic secondario" in **Impostazioni di sistema**, poi **Trackpad**, se il clic a due dita non fa nulla.
- **Orbita:** premere {{key:O}} e trascinare con un dito, oppure usare i tasti freccia.
- Tenere premuto {{key:Ctrl}} mentre si clicca può non contare come clic destro in ModelCraft, a seconda del browser: può agire come clic con {{key:Ctrl}} tenuto premuto. Usare la pressione a due dita per fare pan.
:::

:::windows linux
- **Zoom:** scorrere con due dita. Anche il pizzico fa zoom dove il driver del touchpad lo invia come scorrimento con {{key:Ctrl}}.
- **Pan:** trascinare con il tasto destro (su molti touchpad, premere l'angolo in basso a destra e trascinare), oppure premere {{key:H}} e trascinare.
- **Orbita:** premere {{key:O}} e trascinare, oppure usare i tasti freccia.
:::

Con Rotella del mouse, lo scorrimento a due dita fa zoom; non fa pan. È l'opposto di molte pagine web, ed è come si comporta la rotella del mouse nella maggior parte dei modellatori 3D.

:::tip
{{key:Space}} sceglie lo strumento {{ui:Seleziona}} in ModelCraft. Tenere premuto {{key:Space}} e trascinare non fa pan, come accade in altre app.
:::

## Su schermo tattile

:::touch
- **Un dito** usa lo strumento corrente: **tocco** per cliccare, **premere e trascinare** per disegnare o trascinare.
- Mentre il dito di uno strumento di disegno è abbassato, una **lente** sopra di esso mostra cosa c'è sotto il dito, così si vede l'estremo, il punto medio o lo spigolo a cui si aggancia prima di sollevarlo.
- **Tenere fermo** per mezzo secondo per terminare ciò che lo strumento sta facendo, come fa {{key:Enter}}: una curva, una catena di linee. Senza nulla in corso, tenere fermo e poi trascinare con lo stesso dito **orbita** finché non lo si solleva.
- **Due dita** trascinate insieme **fanno pan**; **pizzicare** per lo zoom. Entrambi funzionano in un solo gesto.
- **Tre dita** trascinate insieme **orbitano**.
- Per scambiarle (due dita orbitano, tre fanno pan), aprire {{ui:Impostazioni}}, scheda {{ui:ModelCraft}}, Schermo tattile.
- Appoggiare un secondo dito **annulla** ciò che il primo dito aveva iniziato (un rettangolo a metà, uno spingi/tira in corso). Sollevare le dita e ricominciare.
- Una piccola barra in fondo alla vista ha **Fine** ({{key:Enter}}), **Annulla** ({{key:Esc}}) e **Annulla**, per quando non c'è la tastiera.
- Gli agganci e le selezioni arrivano un po' più lontano che con il mouse, e i pulsanti sono più grandi, così un dito può colpirli.
:::

:::mouse
Su schermo tattile, un dito usa lo strumento corrente (tocco per cliccare, tenere fermo per terminare, o tenere fermo e trascinare per orbitare), due dita fanno pan e pizzicano per lo zoom, tre dita orbitano, e una piccola barra offre Fine, Annulla e Annulla.
:::

## Viste standard

1. Cliccare {{ui:Viste}} all'estremità destra della barra degli strumenti.
2. Scegliere {{ui:Iso}}, {{ui:Sopra}}, {{ui:Anteriore}}, {{ui:Destra}}, {{ui:Posteriore}}, {{ui:Sinistra}} o {{ui:Sotto}}.

La vista ruota in quella direzione e adatta l'intero modello. {{ui:Anteriore}} guarda a nord, lungo l'asse verde; {{ui:Sopra}} guarda dritto in basso con il nord in alto.

Il cubo di vista in alto a destra della vista fa lo stesso con un clic, più gli spigoli e gli angoli, un anello di bussola per ruotare il modello e un pulsante home. Vedi [Il cubo di vista](topic:view-cube).

## Prospettiva e proiezione parallela

Scegliere {{ui:Viste}}, poi {{ui:Prospettiva}}. Un segno di spunta indica che la prospettiva è attiva. Con essa disattivata, la vista è una proiezione parallela (ortogonale): le linee parallele nel modello restano parallele sullo schermo, che è ciò che serve per i prospetti da {{ui:Anteriore}} o {{ui:Destra}}. La barra di stato dice "Prospettiva." o "Proiezione parallela."

Ogni scena ricorda se era in prospettiva. Vedi [Salvare le viste come scene](topic:scenes).
