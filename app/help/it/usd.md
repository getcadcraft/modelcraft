---
title: Salvare, aprire ed esportare USD
summary: Salvare l'intero modello come USD (.usda, .usdc o .usdz) senza perdere nulla, riaprirlo e importare scene USD da altri programmi 3D.
keywords: usd, usda, usdc, usdz, openusd, descrizione universale di scena, salva come, esporta, importa, assemblaggio di scene, archviz, openpbr, materialx, pacchetto
from: 73d299f9
---

USD è un formato di scena che molti programmi 3D, di rendering e di archviz condividono. ModelCraft lo scrive e lo legge. `.modelcraft` resta il formato che scrive {{ui:Salva}}; USD è una scelta in {{ui:Salva come}}.

## Salvare come USD

1. Scegliere {{ui:Salva come}} nel gruppo {{ui:File}} (oppure premere {{key:Mod+Shift+S}}).
2. Scegliere il formato: {{ui:Testo (.usda)}} (leggibile, adatto al controllo di versione), {{ui:Binario (.usdc)}} (il più piccolo e veloce) oppure {{ui:Pacchetto (.usdz)}} (un solo file con le texture al suo interno).
3. Il file viene scaricato (nell'app desktop si sceglie dove salvarlo).

Le stesse scelte si trovano in {{ui:Esporta}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Nulla va perso

Aprendo un file USD salvato da ModelCraft si ottiene il modello esattamente com'era: facce con i loro fori, spigoli morbidi e nascosti, curve, gruppi e componenti, tag, scene, quote, guide, piani di sezione, lampade, texture importate e la vista. Altri programmi vedono lo stesso modello come mesh, gruppi, prototipi per i componenti, materiali, lampade e telecamere.

:::note
Se un altro programma modifica la geometria di un gruppo o componente, ModelCraft apre quella parte come mesh mantenendo la modifica, e indica quante parti ha letto in questo modo. Una collocazione spostata o eliminata in un altro programma resta spostata o eliminata.
:::

## Aprire o importare USD di altri

- {{ui:Apri}} un file `.usd`, `.usda`, `.usdc` o `.usdz` per iniziare un modello da esso.
- {{ui:Importa}} uno per aggiungerlo al modello aperto. Trascinare insieme ad esso i file a cui fa riferimento (altri layer, texture).

Le mesh entrano con le loro normali, coordinate UV e colori; la geometria condivisa come componenti, i materiali come colori di pittura, le lampade come lampade e le telecamere come scene, in metri con Z verso l'alto, qualunque siano le unità e l'asse verticale del file.

## Non ancora

Animazione, scheletri e grafi a nodi MaterialX non vengono ancora letti né scritti come USD. Le animazioni e i materiali a nodi propri di ModelCraft vengono conservati in un file USD da esso salvato, perché ModelCraft possa riaprirlo, ma gli altri programmi non li vedono. I layer a cui un file fa riferimento che ModelCraft non sa leggere (per esempio un documento MaterialX) vengono omessi con una nota.
