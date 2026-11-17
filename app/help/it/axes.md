---
title: Sposta e ruota gli assi di disegno
summary: Ruota gli assi rosso, verde e blu per adattarli a un edificio non squadrato rispetto a essi, oppure allineali a una faccia, così il disegno e la digitazione li seguono.
keywords: assi, assi di disegno, origine, allinea assi, ruota assi, gira assi, reimposta assi, edificio inclinato, obliquo, ucs, sistema di coordinate
from: cab258f7
---

Gli assi rosso, verde e blu guidano tutto ciò che si disegna: i rettangoli si allineano con loro, le linee vi si agganciano, e il terreno è il piano rosso–verde. Quando un edificio è inclinato (una planimetria non squadrata rispetto al nord, un'ala ruotata di 30°), spostare gli assi su di esso, così il disegno segue le sue pareti. Il modello in sé non si muove.

Tutti e tre i comandi sono in {{ui:Modifica}} › {{ui:Altro}}.

## Posiziona assi

1. {{ui:Modifica}} › {{ui:Altro}} › {{ui:Posiziona assi}}.
2. Fare clic dove deve stare l'origine, per esempio su un angolo dell'edificio.
3. Fare clic su un punto lungo il nuovo asse rosso, per esempio più avanti lungo una parete.
4. Fare clic su un punto verso il nuovo asse verde. Il verde viene reso perpendicolare al rosso, e il blu sta perpendicolare a entrambi.

Gli assi vengono disegnati nella loro nuova posizione. Un rettangolo che si disegna ora sul terreno, o si digita come `4m,3m`, corre lungo il rosso e il verde ruotati; i tasti freccia li bloccano; e lo snap all'origine è sulla nuova origine.

## Allinea assi a una faccia

Selezionare una faccia, poi {{ui:Modifica}} › {{ui:Altro}} › {{ui:Allinea gli assi alla faccia}}. Il blu allora punta fuori dalla faccia, il rosso corre lungo il suo spigolo più lungo, e l'origine è all'inizio di quello spigolo. Usarlo per disegnare su un tetto inclinato come se fosse il terreno.

## Reimposta assi

{{ui:Modifica}} › {{ui:Altro}} › {{ui:Reimposta assi}} li riporta dove il modello è cominciato.

## Cose da sapere

- All'interno di un gruppo o componente aperto si usano i suoi assi (ruotano con esso); gli assi del modello valgono al livello superiore.
- Gli assi sono salvati nel file di ModelCraft, e ogni modifica è un passo di annullamento.
- Le esportazioni e le viste standard ({{ui:Sopra}}, {{ui:Anteriore}}…) usano ancora le direzioni proprie del modello.
