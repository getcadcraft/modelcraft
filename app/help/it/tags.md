---
title: Tag: mostrare e nascondere insiemi di elementi
summary: Assegna a gruppi e componenti un tag, come Arredi o Muri, e nascondi o mostra tutto ciò che ha quel tag in una sola volta.
keywords: tag, layer, mostra, nascondi, visibilità, organizza, arredi, muri, senza tag, rinomina tag, elimina tag
from: c1a95a05
---

Un tag è un nome che si assegna a gruppi e componenti, come **Arredi**, **Muri** o **Sito**, così da poter nascondere o mostrare tutto ciò che ha quel tag in una sola volta. I tag sono ciò che i programmi CAD chiamano layer. Per nascondere un elemento alla volta, vedi [Nascondi, isola e mostra](topic:hide-isolate).

## Creare un tag

1. In {{ui:Tag}} a destra, fare clic su {{ui:Aggiungi tag}}.
2. Digitare il nome e premere {{key:Enter}}.

Per rinominare un tag, fare clic sul suo nome in {{ui:Tag}}, digitare quello nuovo e premere {{key:Enter}}. Due tag non possono avere lo stesso nome.

## Assegnare il tag a gruppi e componenti

1. Selezionare uno o più gruppi o componenti.
2. In {{ui:Informazioni sull'entità}}, scegliere il tag in {{ui:Tag}}. {{ui:Nuovo tag…}} crea un nuovo tag e lo assegna alla selezione.

{{ui:Senza tag}} rimuove il tag. Il numero accanto a ogni tag in {{ui:Tag}} indica quanti gruppi e componenti lo hanno.

Assegnare tag a gruppi e componenti, non a facce e spigoli liberi: disegnare prima come gruppi gli elementi da taggare (selezionarli, poi {{key:Shift+G}}).

## Nascondere e mostrare

Fare clic sull'occhio accanto a un tag. Tutto ciò che ha quel tag esce dalla vista, ovunque si trovi nel modello (anche dentro altri gruppi), e clic e snap lo oltrepassano. Fare di nuovo clic sull'occhio per mostrarlo. Gli elementi {{ui:Senza tag}} sono sempre visibili.

Se si sta modificando all'interno di un gruppo il cui tag viene nascosto, il gruppo si chiude.

## Eliminare un tag

Fare clic sul cestino accanto al tag. Ciò che aveva quel tag diventa {{ui:Senza tag}} e viene mostrato.

## Da sapere

- Tag, relativi nomi e quali sono nascosti vengono salvati nel file ModelCraft. Copiare un gruppo con tag in un altro modello porta con sé il suo tag.
- Nascondere e mostrare un tag, come ogni altra modifica ai tag, è un unico passo di annullamento.
- Le esportazioni includono tutto, anche i tag nascosti, come avviene per gli elementi nascosti.
- I layer nelle planimetrie DWG e DXF non vengono ancora importati come tag: l'intero disegno entra come un unico gruppo.
