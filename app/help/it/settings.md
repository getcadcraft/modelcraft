---
title: Impostazioni di ModelCraft
summary: Scegliere lo stile dei tasti che si conosce, far orbitare e spostare la vista con il trackpad senza i pulsanti Orbita, Pan e Zoom, e attivare o disattivare lo snap e le collisioni tra solidi.
keywords: impostazioni, preferenze, controlli, stile dei tasti, mappa dei tasti, scorciatoie, blender, trackpad, touchpad, scorrimento, orbita, pizzico, snap, collisione, sovrapposizione, intersezione, attraversare
from: caf77d5b
---

Aprire {{ui:Impostazioni}} con l'ingranaggio nella barra dell'app oppure con {{key:Mod+,}}. La prima scheda, {{ui:ModelCraft}}, contiene le impostazioni proprie di questa app; {{ui:Generali}} contiene quelle condivise da tutte le app di CadCraft (tema, barra degli strumenti, pannelli). Le impostazioni di ModelCraft esistono solo nell'app: si modificano qui, e questo browser le ricorda.

## Controlli: quali tasti e pulsanti del mouse

Due stili di tasti. Si cambiano qui, con {{ui:Tasti: spingi/tira}} / {{ui:Tasti: modellatore}} in basso a destra della vista, oppure alla fine del menu {{ui:Altro}} della barra degli strumenti:

- **Stile spingi/tira** (quello iniziale; le lettere dei modellatori a spinta e trazione come SketchUp): una lettera sceglie uno strumento: {{key:L}} linea, {{key:R}} rettangolo, {{key:P}} spingi/tira, {{key:M}} sposta, {{key:Q}} ruota, {{key:S}} scala, {{key:G}} crea componente. Vedi [Tasti e azioni del mouse](topic:keyboard).
- **Stile modellatore** (i tasti dei modellatori a mesh come Blender): prima si seleziona, poi si agisce subito sulla selezione. {{key:G}} la sposta, {{key:R}} la ruota e {{key:S}} la scala a partire dal puntatore — senza primo clic. Durante lo spostamento, {{key:X}}, {{key:Y}} o {{key:Z}} bloccano l'asse rosso, verde o blu, un numero digitato imposta la distanza (oppure i gradi, o il fattore), e un clic o {{key:Enter}} la posa; {{key:Esc}} o il clic destro la riportano indietro. Poi si torna a {{ui:Seleziona}}.

Lo stile dei tasti coincide con lo stile dei menu: lo stile modellatore è il menu {{ui:Modellatore}}, e scegliere l'uno sceglie anche l'altro. Vedi [Menu, tasti e mouse](topic:menus-keys-and-mouse). L'elenco completo dello stile modellatore è in [Tasti e azioni del mouse](topic:keyboard#modeler-keys). I suggerimenti sulla barra degli strumenti e nella scheda iniziale seguono lo stile scelto.

## Scorrimento: rotellina del mouse o trackpad

- **Rilevamento automatico** (iniziale): ModelCraft osserva lo scorrimento. Lo scorrimento laterale o fine, come lo invia un trackpad, orbita la vista; le tacche intere della rotellina fanno zoom.
- **Rotellina del mouse**: lo scorrimento fa sempre zoom verso il puntatore.
- **Trackpad**: scorrere con due dita per orbitare, tenere premuto {{key:Shift}} e scorrere per spostare la vista, pizzicare per fare zoom. Non servono mai i pulsanti {{ui:Orbita}}, {{ui:Pan}} o {{ui:Zoom}}.

Pizzicare fa zoom in ogni scelta. Se il rilevamento automatico sbaglia per il proprio mouse o trackpad, scegliere quello in uso.

:::tip
Nello stile modellatore si può anche orbitare tenendo premuto {{key:Alt}} e trascinando, e spostare la vista con {{key:Alt+Shift}} e un trascinamento — utile su un portatile senza pulsante centrale.
:::

## Snap

**Snap a punti, spigoli e assi** (attivo all'inizio) attira il puntatore verso estremità, punti medi, spigoli, guide e gli assi rosso, verde e blu — vedi [Inferenza](topic:inference). Disattivarlo quando si vuole posizionare qualcosa liberamente vicino ad altra geometria senza che salti. Facce, terreno e blocchi degli assi funzionano anche con lo snap disattivato.

Il pulsante {{ui:Snap}} in basso a destra della vista fa lo stesso per il lavoro di questa sessione (viene salvato anche lui). Nello stile modellatore, {{key:Shift+Tab}} lo alterna.

## I solidi si fermano al contatto

**Fermare i solidi al contatto** (attivo all'inizio) impedisce che un muro venga trascinato attraverso un altro muro. Con {{ui:Sposta}} (e con {{key:G}}, e incolla-poi-sposta con {{key:Mod+D}}) la selezione scorre fino all'altro solido e si ferma a contatto; con {{ui:Spingi/tira}} una faccia si ferma dove incontra un altro solido. Poggiare su qualcosa e scorrerci sopra va bene: viene bloccato solo l'ingresso nell'interno. Le cose che si sovrappongono già all'inizio possono comunque essere separate.

Per spingere qualcosa attraverso di proposito, fare clic su {{ui:Collisione}} in basso a destra (o disattivare l'impostazione), eseguire lo spostamento e fare di nuovo clic.

:::note
Le collisioni sono verificate per gli spostamenti e per spingi/tira. {{ui:Ruota}} e {{ui:Scala}} non le verificano ancora, e la geometria libera che tocca si unisce comunque, come sempre: tenere separate le cose distinte in [gruppi](topic:groups-components) perché restino separate.
:::

## Piano della stampante 3D

Le dimensioni del piano della stampante: {{ui:Non impostato}} (all'inizio), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 oppure 300 × 300 × 400 mm. Scegliere la misura più vicina al volume di stampa della stampante. [Verifica per la stampa 3D](topic:print-3d) segnala poi quando un modello supera il piano; con {{ui:Non impostato}} la dimensione non viene verificata.

## Orbita e pan

**Orbita attorno a ciò che è sotto il cursore** (attivo all'inizio): l'orbita ruota attorno alla parte del modello sotto il puntatore, e il pan mantiene quel punto sotto il puntatore; sullo spazio vuoto entrambi usano il centro della vista. Disattivarlo per orbitare sempre attorno al centro della vista. **Velocità di orbita** e **Velocità di pan** vanno da 0.25× a 3× (1× è l'iniziale) e valgono per mouse, trackpad, tocco e tasti freccia. Vedi [Orbita, pan e zoom](topic:orbit-pan-zoom).

## Indicatore d'angolo

Cosa appare nell'angolo della vista 3D: **Cubo di navigazione** (iniziale; in alto a destra — fare clic su una faccia, uno spigolo o un vertice per guardare da lì, trascinarlo per orbitare, trascinare il suo anello della bussola per ruotare il modello), **Icona degli assi** (un piccolo marcatore X, Y, Z in basso a sinistra che ruota con la vista: X rosso, Y verde, Z blu) oppure **Nessuno**. Vedi [Il cubo di navigazione](topic:view-cube).
