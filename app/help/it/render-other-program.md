---
title: Disegnare l'immagine con un altro programma
summary: Il nostro path tracer disegna l'immagine di Render; un altro programma può disegnarla solo tramite un add-on di motore di rendering in CadCraft Studio. Cosa viene portato con sé, e perché alcuni programmi non vengono mai proposti.
keywords: render, motore, programma esterno, motore add-on, studio, sfondo, coda, usd, gltf, disegnato da, blender, gpl
from: 150f94f1
---

L'immagine in {{ui:Render di un'immagine…}} è disegnata dai **nostri motori**: Veloce e Path tracer, nel browser e in CadCraft Studio. Un altro programma può disegnarla solo quando un **add-on di motore di rendering** lo porta: vedere [Aggiungere un motore di rendering con un add-on](topic:render-engine-addons). Per portare la scena in un altro programma e continuare a lavorarci, usare [Aprire la scena in un altro programma](topic:render-open-in) oppure [Inviare la scena a un motore di gioco](topic:render-unreal).

## Disegnare un'immagine con il motore di un add-on

1. Attivare l'add-on in Impostazioni › Add-on. Il suo motore compare nell'elenco Motore di {{ui:Render di un'immagine…}}.
2. Sceglierlo. Le sue impostazioni appaiono sotto l'elenco Motore.
3. Fare clic su {{ui:Render}}. In Studio, la prima volta che un add-on esegue un programma, Studio chiede con una propria finestra. Il progresso viene mostrato mentre disegna; {{ui:Stop}} lo termina. L'immagine compare contrassegnata con il motore che l'ha disegnata.

Un motore scritto in JavaScript funziona anche nel browser. Un motore che esegue un programma su questo computer funziona solo in Studio; nel browser appare come un file da salvare.

## Cosa viene portato con sé

Il motore riceve un **pacchetto**: il modello come file USD (e un file glTF quando lo chiede), e un file di impostazioni con i valori esatti dei materiali, il sole e il cielo, ogni lampada accesa con la sua potenza e il suo profilo di luce, la camera e l'esposizione. Ogni programma illumina, tonalizza e campiona a modo suo, quindi le immagini sono simili per inquadratura, sole, lampade ed esposizione, ma non pixel per pixel.

## Programmi che CadCraft non esegue mai

CadCraft non avvia mai un programma sotto licenza GNU GPL, e non lo elenca mai come motore o come destinazione di Apri in. Blender è uno di questi, quindi non è nell'elenco Motore. Un file USD o glTF salvato da {{ui:Render di un'immagine…}} si apre comunque in esso, come in qualsiasi programma che legge quei file.

:::note
Le camere panoramiche e stereo e un'immagine del cielo (vengono usati i colori del cielo) non vengono portate in un altro programma. Nulla fatto in un altro programma torna al modello.
:::
