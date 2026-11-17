---
title: Applicare colori e materiali
summary: Dare a facce, gruppi e componenti un colore pieno o un materiale come mattone, rivestimento, tegole o legno, e conservarli all'esportazione.
keywords: colora, colore, colori, materiale, materiali, texture, mattone, rivestimento, tegole, copertura, legno, pietra, piastrelle, calcestruzzo, stucco, erba, ghiaia, vetro, metallo, secchiello di vernice, riempimento, campione, contagocce, predefinito, glb, obj, mtl, collada
from: b1500523
---

I colori aiutano a distinguere le parti di un modello, e i **materiali** (mattone, rivestimento, copertura, legno, pietra, piastrelle, calcestruzzo, stucco, erba, vetro, metallo) fanno apparire il modello come ciò di cui è costruito. Entrambi si applicano allo stesso modo.

## Scegliere un colore

La sezione {{ui:Colori}} a destra mostra una fila di colori pieni, {{ui:Predefinito}} (quello barrato da una linea: nessun colore) e un campione {{ui:+}} per qualsiasi altro colore. Fare clic su uno per renderlo il colore corrente. Lo strumento Colora parte da quello.

## Colorare

1. Premere {{key:B}} ({{ui:Colora}}), oppure, con nulla selezionato, fare clic su un colore. (Con qualcosa selezionato, fare clic su un colore colora subito la selezione.)
2. Fare clic su una faccia per colorarla.
3. Fare clic su un gruppo o un componente per colorare quella copia: le sue facce che non hanno un colore proprio prendono questo colore. Le facce colorate al suo interno mantengono il proprio.

Per colorare più cose insieme, selezionarle prima e poi fare clic su un colore, oppure fare clic su una qualsiasi di esse con {{ui:Colora}}. È un solo passo di annullamento.

| Tenere premuto | E fare clic su una faccia | Cosa viene colorato |
|---|---|---|
| — | | Quella faccia |
| {{key:Ctrl}} | | Ogni faccia collegata ad essa che ha lo stesso colore |
| {{key:Shift}} | | Ogni faccia di quel colore nel gruppo in cui si sta lavorando |
| {{key:Alt}} | | Niente: si preleva invece quel colore |

Per riportare una faccia a nessun colore, scegliere {{ui:Predefinito}} e fare clic su di essa.

## Colorare con un materiale

La sezione {{ui:Materiali}}, sotto {{ui:Colori}}, elenca la libreria dei materiali per tipo: mattoni e blocchi, rivestimenti, coperture, legno, pietra, piastrelle, calcestruzzo, stucco, terreno, vetro e metallo. Passare sopra un campione per vederne il nome. Fare clic su uno, poi colorare esattamente come con un colore: {{key:B}}, fare clic su facce, gruppi o componenti; oppure selezionare prima e fare clic sul materiale.

- Nello stile **Ombreggiato** le facce mostrano la texture del materiale. Linea nascosta, wireframe e raggi X ne mostrano il colore.
- Le texture sono disposte **in piano lungo ogni faccia** e **verso l'alto**: i corsi di mattoni restano orizzontali su ogni muro, le tegole scendono lungo la falda di un tetto, le assi di un pavimento seguono l'asse rosso. Sono alla loro dimensione reale (un mattone è lungo circa 215 mm), quindi appaiono corrette a qualsiasi distanza.
- In un [rendering](topic:render) i materiali mantengono la texture, la rugosità e, per vetro e metallo, la lucentezza.
- {{key:Alt}}-clic con {{ui:Colora}} preleva anche il materiale di una faccia.

Le texture sono disegnate da ModelCraft stesso, quindi funzionano offline e sono libere da usare per qualsiasi scopo (CC0).

## Componenti e colori

Un colore applicato a una faccia **all'interno** di un componente compare su ogni copia, perché le copie condividono una sola definizione. Un colore applicato a una **copia** dall'esterno (con il componente chiuso) appartiene solo a quella copia, quindi due copie di uno stesso componente possono avere colori diversi. {{ui:Informazioni sull'entità}} mostra il colore di una faccia, gruppo o componente selezionato.

## Colori nei file

- Il file di ModelCraft mantiene ogni colore e ogni materiale.
- Gli altri formati ricevono il **colore di un materiale** (il suo aspetto da lontano) al posto della texture: glTF, Collada, OBJ, DWG e DXF, e il controllo per la stampa 3D. In glTF, Collada e OBJ il materiale mantiene il proprio nome, come `Material_brick-red`.
- **glTF (.glb)** e **Collada (.dae)**: ogni colore diventa un materiale. Un componente mostrato in colori diversi viene scritto una volta per colore. Il glTF scrive anche le texture importate come texture.
- **OBJ**: l'esportazione scarica due file, il `.obj` e un file dei materiali `.mtl` con i colori. Tenerli nella stessa cartella. Con texture importate, il `.obj`, il `.mtl` e le immagini arrivano in un unico `.zip`.
- **DWG** mantiene i colori esatti; **DXF** usa il più vicino dei 255 colori CAD standard.
- **STL** e **PLY** trasportano i colori: lo STL nella convenzione VisCAM / SolidView (i programmi che non la leggono la ignorano), il PLY come colore di ogni punto. Vedi [Formati di file nel dettaglio](topic:formats).

:::tip
Per modellare uno schermo, colorare la cornice in antracite e il vetro in blu dopo aver fatto un [offset](topic:draw-faces) della faccia anteriore.
:::
