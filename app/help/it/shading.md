---
title: Creare materiali con i nodi
summary: Costruire un materiale da texture, immagini e formule nell'area di lavoro Shading, vederlo nella vista mentre si procede, e dipingere le facce con esso.
keywords: shading, bake, baking, texture baking, ambient occlusion, ao, curvatura, bake delle normali, alta poligonazione, bassa poligonazione, mappa di luce, decalcomania, decalcomanie, adesivo, logo, etichetta, pittura della texture, pennello, materiale, materiali, materialx, mtlx, openpbr, standard surface, libreria di materiali, librarycraft, set di texture, pbr, importa texture, zip, cc0, trascina, nodo, nodi, editor dei nodi, shader, texture, procedurale, rumore, scacchiera, voronoi, celle, onde, mattoni, piastrelle, legno, marmo, sfumatura, sporco, usura dei bordi, rampa di colore, mix, bump, normal map, rugosità, metallicità, opacità, ritaglio, emissione, bagliore, spostamento, mappatura a scatola, triplanare, uv, immagine, texture immagine
from: d7368b21
---

Un materiale creato nell'area di lavoro **Shading** appartiene al file. È un piccolo grafo: **nodi** che creano texture, immagini e numeri, collegati all'**Uscita materiale**, i cui ingressi definiscono l'aspetto della superficie — colore di base, rugosità, metallicità, normale, opacità, emissione e il resto del modello OpenPBR. Si dipingono le facce con esso come con qualsiasi materiale della libreria, e ogni modifica appare subito nella vista.

## Aprire

Scegliere {{ui:Shading}} nell'elenco delle aree di lavoro. La vista 3D mantiene la parte alta dello schermo e l'**editor dei nodi** occupa quella bassa. Il pannello a destra elenca i materiali propri del file.

- {{ui:Nuovo materiale}} crea un materiale grigio con solo la sua Uscita materiale.
- **Creare una copia modificabile di un materiale della libreria** trasforma mattoni, legno, piastrelle e il resto in un grafo modificabile: la sua texture arriva tramite un nodo Texture della libreria, i suoi rilievi tramite un nodo Bump.
- {{ui:Dipingi con esso}} dipinge le facce o i gruppi selezionati, oppure sceglie il materiale per lo strumento {{ui:Colora}}. I materiali dello strumento Colora elencano anche quelli del file sotto **In questo file**.
- {{ui:Duplica}} ed {{ui:Elimina}} agiscono sul materiale che si sta modificando. Eliminare non si può annullare: le facce dipinte con esso mostrano il colore predefinito finché non vengono dipinte di nuovo.

## Materiali dalla libreria

Nel pannello, **Libreria materiali (Libreria)** elenca i materiali della libreria, ciascuno con un'anteprima resa dal path tracer di CadCraft. Sono set di texture rilasciati sotto CC0, attribuiti alle persone che li hanno creati.

- Fare clic su uno per portarlo nel file (con le sue immagini) e, con facce o gruppi selezionati, dipingerli.
- Trascinarne uno su una faccia o un gruppo nella vista per dipingere solo quella.
- Diventa uno dei materiali del file: si modificano i suoi nodi come quelli di qualsiasi altro. La sua attribuzione appare nel pannello e resta nel file.

## Importare un set di texture

{{ui:Immagini o uno zip…}} o {{ui:Una cartella…}} sotto **Importa un set di texture** crea un materiale da un insieme di mappe. Le mappe vengono riconosciute dalle parole nei nomi dei file: color, albedo, diffuse o basecolor; roughness (oppure gloss, convertito in rugosità); metalness o metallic; normal (OpenGL o DirectX, da `gl` / `dx` nel nome); height o displacement; ambient occlusion; opacity; emission. Le mappe combinate (ARM, ORM) sono escluse. La piastrella parte da 1 × 1 m: impostarne la dimensione reale sull'Uscita materiale. L'altezza va allo spostamento con la scala a 0 — aumentare la scala per usarla sulle mesh.

## MaterialX

MaterialX è il formato aperto che altri programmi 3D e di rendering usano per scambiarsi i materiali.

- {{ui:Esporta come MaterialX…}} salva il materiale che si sta modificando: i suoi valori, e ogni texture come immagine PNG accanto al file `.mtlx` (in uno zip). Scegliere lo shader con cui viene scritto: **OpenPBR Surface** (MaterialX 1.39, lo stesso modello usato da ModelCraft) oppure **Standard Surface** (MaterialX 1.38, che oggi più programmi leggono). Le texture sono posizionate con coordinate UV in metri; il posizionamento a scatola e quello triplanare vengono scritti come UV.
- {{ui:Importa MaterialX…}} (oppure {{ui:Da una cartella…}}) legge i file `.mtlx` con shader OpenPBR, Standard Surface, UsdPreviewSurface o glTF PBR. Fornire anche le immagini, oppure uno zip con tutto: un'immagine viene trovata dal suo percorso, dal suo nome, oppure dal suo nome con un altro tipo di immagine (un `.exr` indicato nel file può arrivare come `.jpg` accanto ad esso). Texture, mappe delle normali, aritmetica, miscele e spostamento arrivano come nodi; il resto mantiene il suo valore, e la riga di stato indica cosa è stato escluso.

## Decalcomanie

Una decalcomania è un'immagine applicata su una superficie — un logo, un'insegna, un'etichetta, una macchia — con un proprio materiale.

- Impostare **Larghezza di una nuova decalcomania**, poi {{ui:Posiziona una decalcomania…}} (oppure {{ui:Decalcomania}} sulla barra degli strumenti), scegliere un'immagine PNG, JPEG o WebP e fare clic su una faccia. L'immagine viene proiettata sulle superfici lì presenti, mantenendo le proporzioni; le parti trasparenti di un PNG restano trasparenti.
- Appartiene al gruppo o componente su cui si è fatto clic e si sposta con esso. Copre le facce nel suo riquadro che guardano nella stessa direzione, e si ferma ai bordi di ciò su cui poggia.
- Ogni decalcomania ottiene un proprio materiale, chiamato **Decalcomania: <immagine>**, nell'elenco del file: modificarlo come gli altri (rugosità, un rilievo, un bagliore). {{ui:Materiale}} accanto alla decalcomania lo apre.
- Accanto a ogni decalcomania: la sua larghezza (l'altezza segue l'immagine), {{ui:Ruota}} (un quarto di giro) ed {{ui:Elimina}}. Le decalcomanie sono conservate con i materiali del file, fuori da Annulla.
- Appaiono nella vista ombreggiata, nei render rapidi e nelle immagini di alta qualità.

## Dipingere sulla texture

{{ui:Dipingi texture}} (oppure {{ui:Colora}} sotto **Dipingere sulla texture**) trasforma il puntatore in un pennello tondo. Trascinare su una faccia che indossa uno dei materiali del file: il pennello dipinge l'immagine che sta dietro al colore di base.

- Su una mesh dipinge lungo le UV della mesh (srotolarla prima nell'area di lavoro UV); sulle altre facce dipinge attraverso la faccia, quindi la pittura si ripete con la piastrella del materiale.
- Un materiale il cui colore di base è un colore semplice riceve una nuova immagine 512 × 512 di quel colore la prima volta che lo si dipinge. Un materiale il cui colore di base arriva da altri nodi richiede un nodo Immagine collegato a Colore di base.
- Impostare colore, dimensione (in pixel dell'immagine), intensità e durezza del pennello nel pannello. {{ui:Annulla pennellata}} oppure Ctrl+Z (durante la pittura) annulla un tratto, fino agli ultimi 20.
- L'immagine dipinta viene salvata nel file. I materiali della libreria non si possono dipingere: creare prima una copia modificabile.

## Eseguire il bake delle texture

**Eseguire il bake delle texture** scrive in immagini ciò che la forma e la scena danno a una superficie, lungo le UV di una mesh.

- Selezionare una mesh con UV (srotolarla nell'area di lavoro UV), spuntare le mappe e premere {{ui:Esegui il bake}}:
  - **Occlusione ambientale** — quanto è aperto ogni punto: angoli, pieghe e luoghi sotto altre cose diventano più scuri. Tutto ciò che è visibile nel modello la ombreggia, fino alla distanza di occlusione.
  - **Curvatura** — chiaro lungo i bordi esterni, scuro negli angoli interni, grigio medio sulle parti piatte o leggermente curve, sulla larghezza del bordo impostata.
  - **Normali dall'oggetto ad alto dettaglio** — selezionare anche una copia dettagliata: il suo dettaglio di superficie viene scritto come mappa delle normali per quella più semplice (l'oggetto con meno triangoli riceve il bake). La distanza di ricerca indica quanto possono distare le due superfici.
  - **Illuminazione** — il sole del luogo e della data del modello (Stile) con le sue ombre, più il cielo, come mappa di luce.
- Le immagini entrano nel file e compaiono nei nodi Immagine. Se il materiale che si sta modificando ha un nodo **Sporco e usura dei bordi**, legge subito la nuova occlusione e curvatura.
- Più raggi per texel danno occlusione e illuminazione più lisce, ma richiedono più tempo. Il bake gira sui core del processore in background; {{ui:Interrompi il bake}} lo ferma.

## Costruire un grafo

1. {{ui:Aggiungi un nodo…}} (oppure {{key:Shift+A}} nell'editor dei nodi) aggiunge un nodo al centro dell'editor.
2. Trascinare da un punto di uscita (sul lato destro di un nodo) a un punto di ingresso (sul lato sinistro di un nodo) per collegarli. Un secondo collegamento verso un ingresso sostituisce il primo; trascinare via un ingresso collegato per scollegarlo.
3. Gli ingressi non collegati mostrano il loro valore: digitare un numero o scegliere un colore. Le impostazioni sono in fondo a ogni nodo.

Trascinare un nodo dal suo titolo per spostarlo, trascinare lo spazio vuoto per spostare la vista, e usare la rotellina per fare zoom. {{key:Delete}} rimuove i nodi o il collegamento selezionati, {{key:Mod+Z}} annulla, {{key:Mod+D}} duplica, {{key:F}} mostra tutti i nodi. Ogni modifica è un solo passaggio di annullamento dell'editor dei nodi. L'annullamento del modello non cambia i materiali.

| Nodi | Cosa creano |
|---|---|
| Coordinate texture | Dove si trova un punto sulla piastrella: ripeterlo, spostarlo, ruotarlo di un quarto. |
| Valore, Colore | Un numero, un colore. |
| Immagine | Un'immagine del file (una arrivata con un modello importato, oppure una aggiunta con {{ui:Aggiungi un'immagine…}}). Scegliere **Colori** per una foto e **Dati** per una mappa di rugosità o delle normali. |
| Texture della libreria | La texture, la rugosità e l'altezza di un materiale della libreria. |
| Scacchiera, Rumore | Quadrati; rumore frattale liscio con il suo dettaglio, rugosità e seme. |
| Celle di Voronoi, Onde, Sfumatura | Celle (distanza dal punto più vicino, i bordi tra le celle, un colore per cella); bande trasversali, verticali o diagonali, a seno, dente di sega o triangolo, piegate dal rumore; sfumature lineari, quadratiche, radiali e sferiche. |
| Mattoni, Piastrelle | File di mattoni con sfalsamento, oppure una griglia di piastrelle: colori, malta o stucco, un giunto e uno smusso in metri, un'altezza per i rilievi, un numero casuale per ogni pezzo. |
| Legno, Marmo | Anelli lungo la venatura con fibre sottili; vene piegate dalla turbolenza. |
| Sporco e usura dei bordi | Consuma gli spigoli convessi e sporca le cavità a partire dalla curvatura e dalle immagini di occlusione di una mesh ([Eseguire il bake delle texture](topic:shading#bake-textures) le crea; oppure impostare le sue due impostazioni di immagine, nel layout UV della mesh: posizionare il materiale con coordinate UV). Senza di esse non cambia nulla. |
| Miscela colori, Rampa di colore, Tinta/saturazione/valore, Luminosità e contrasto, Inverti, Gamma, Separa e Combina RGB | Lavoro sui colori. |
| Matematica, Mappa intervallo | Aritmetica sui numeri (somma, moltiplicazione, potenza, passo liscio e altro). |
| Bump, Normal map | Una normale da un'altezza (Bump) oppure da un'immagine di mappa delle normali (Normal map: scegliere la direzione del canale verde). |

## L'Uscita materiale

Le sue impostazioni dicono come la texture si adatta alle superfici:

- **Larghezza piastrella** e **Altezza piastrella**: quanti metri copre una piastrella della texture. Tutto ciò che un grafo crea si ripete lungo la piastrella senza giunture.
- **Posizionata da**: **Coordinate UV** segue le facce (facce spingi/tira: lungo ciascuna faccia; mesh: le loro UV, un'unità UV = una piastrella), **Scatola** proietta dal più vicino dei tre assi, **Triplanare** mescola le tre proiezioni sulle superfici inclinate (**Nitidezza della miscela**: più alto, miscela più netta).
- **Intensità normale** scala l'ingresso della normale. **Scala dello spostamento** imposta quanto l'ingresso dello spostamento muove i vertici di una mesh.
- {{ui:Più ingressi}} mostra gli altri ingressi OpenPBR: rivestimento (coat), peluria (fuzz), sottosuperficie, film sottile, trasmissione e i loro colori.

## Nelle immagini di alta qualità

Il path tracer legge colore di base, rugosità, metallicità, opacità, normale ed emissione dal grafo così come variano lungo la superficie. Ogni altro ingresso collegato (un rivestimento che varia, per esempio) viene usato con la sua media; il pannello indica quali. Un ritaglio da una texture di opacità mostra la sua forma, e la sua ombra è uniformemente trasparente. Una texture luminosa illumina ciò che guarda, senza essere campionata come una lampada.

**Lo spostamento** muove i vertici delle sole mesh, quindi aggiungere un modificatore di suddivisione per il dettaglio ([Modificatori](topic:modifiers)). Le facce spingi/tira mantengono la loro forma e ricevono i rilievi dalla normale.

:::tip
Su un computer con WebGPU il grafo viene calcolato sulla scheda grafica; senza, sul processore. Il risultato è lo stesso.
:::
