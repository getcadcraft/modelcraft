---
title: Inviare la volumetria a BimCraft
summary: Passare le masse modellate con push/pull a BimCraft come opzioni di volumetria, con piani, impronta, superficie lorda di pavimento e volume calcolati da ogni solido.
keywords: volumetria, massa, concept, opzioni, bimcraft, ifc, bim, push pull, piani, livelli, superficie lorda di pavimento, impronta, volume, invio, passaggio di consegna, massa dell'edificio, fase 2
from: 73c51f3f
---

## Che cosa si fa

Trasformare i blocchi modellati con push/pull in opzioni di volumetria che BimCraft riconosce, così il concept prosegue come modello dell'edificio.

## Prima di iniziare

Rendere ogni massa un **gruppo** o un **componente** e darle un nome. Ciascuno diventa un'opzione. La geometria libera non viene inviata.

## Inviare

1. Selezionare i gruppi da inviare. Senza selezione, vengono inviati tutti i gruppi e componenti di primo livello.
2. Scegliere {{ui:Esporta}}, poi {{ui:Volumetria verso BimCraft…}}.
3. Digitare il {{ui:Nome del set di opzioni}} e l'{{ui:Altezza di piano}}.
4. Verificare l'elenco: piani, impronta, superficie lorda di pavimento e volume di ogni opzione.
5. Scegliere **Invia a BimCraft** per aprire BimCraft in una nuova scheda con le opzioni, oppure {{ui:Salva come IFC}} per scaricare il file e aprirlo da sé.

In BimCraft le opzioni sono elencate sotto "Opzioni di volumetria nel modello", dove una può essere resa l'opzione corrente e sviluppata in muri e solai.

## Come un solido diventa una massa

- **I piani** sono l'altezza del solido divisa per l'altezza di piano, arrotondata, e almeno uno. I piani dividono poi l'altezza del solido in parti uguali, quindi un blocco di 10 m con piani da 3 m ha 3 piani da 3.33 m.
- **La superficie di un piano** è l'area della sezione orizzontale del solido alla quota di quel piano. Un blocco che rientra ha piani superiori più piccoli, e la superficie lorda di pavimento è la loro somma.
- **L'impronta** è il contorno della sezione appena sopra la base del solido.
- **Il volume** è quello del solido stesso.

Nel file IFC ogni opzione è un proxy di elemento edilizio (l'impronta portata all'altezza del solido) con uno spazio per piano che porta la superficie lorda del piano. Tutte le opzioni condividono un unico edificio, con tanti livelli quanti ne ha l'opzione più alta.

## Forme semplificate

Un blocco semplice e verticale passa esattamente come modellato. Tutto il resto viene comunque inviato, e l'elenco indica perché la sua forma è semplificata:

- **I suoi piani non hanno tutti le dimensioni della base** (rientra o è inclinato): la massa in BimCraft è il contorno della base portato all'altezza piena, ma le superfici dei piani e il volume sono quelli del solido.
- **Il solido non è chiuso**: i piani la cui sezione non può essere chiusa non vengono misurati e valgono zero. Chiudere il solido ({{ui:Informazioni sull'entità}} indica "Solido: Sì") per valori completi.
- **La sua base ha più di un contorno**: viene usato come impronta il più grande.

## Da sapere

- {{ui:IFC per BimCraft (.ifc)}} è un'esportazione diversa: invia solo forme e nomi, senza piani né superfici.
- Non viene caricato nulla. Il file viene consegnato alla scheda di BimCraft su questo computer.
