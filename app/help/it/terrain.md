---
title: Terreno: suolo da curve di livello e sua modellazione
summary: Crea il suolo da curve di livello o come griglia, poi alzalo e abbassalo con un pennello morbido.
keywords: terreno, suolo, paesaggio, topografia, curve di livello, linee di livello, sito, pendenza, collina, cumulo, sandbox, smoove, modellazione, livellamento, TIN
from: 407652b3
---

Il terreno è un suolo fatto di triangoli, quindi può seguire qualsiasi forma. È un gruppo: fare doppio clic per modificarlo.

## Da curve di livello

1. Procurarsi le curve di livello alle rispettive quote: disegnarle, oppure [importare una planimetria](topic:site-plan) e spostare ciascuna curva alla sua quota.
2. Selezionarle (tutti gli spigoli di tutte le curve).
3. {{ui:Modifica}} › {{ui:Altro}} › {{ui:Terreno dalle curve di livello selezionate}}.

ModelCraft unisce i punti delle curve con dei triangoli (un TIN) e ammorbidisce ogni spigolo interno, così il suolo appare con un'ombreggiatura liscia. Le linee restano: cancellarle o nasconderle quando non servono più. Le curve molto fitte vengono ridotte a 8 000 punti.

## Una griglia da modellare

{{ui:Modifica}} › {{ui:Altro}} › {{ui:Griglia del terreno…}} chiede una larghezza, una profondità e una dimensione di cella, poi colloca una griglia piatta di triangoli dove si fa clic sull'angolo. Celle piccole modellano in modo più liscio ma creano più facce (al massimo 200 × 200 celle).

## Modellare: alzare e abbassare il suolo

1. Fare doppio clic sul terreno per aprirlo.
2. {{ui:Modifica}} › {{ui:Altro}} › {{ui:Modella il terreno}}. Un cerchio mostra il pennello sul suolo sotto il puntatore.
3. Trascinare verso l'alto per alzare il suolo sotto il pennello, o verso il basso per abbassarlo. Il centro si sposta di più e il suolo degrada fino a zero sul bordo del cerchio, così cumuli e avvallamenti risultano lisci.

Per fare un cumulo di altezza esatta, fare clic una volta, poi digitare l'altezza, per esempio `1.5m` (un segno meno la abbassa), e premere {{key:Enter}}. Per cambiare il pennello, digitare una lunghezza prima di fare clic: `5m` dà un pennello di 5 m di raggio.

Ogni modellazione è un unico passo di annullamento.

## Da sapere

- La modellazione sposta solo le facce triangolari, quindi ogni faccia resta piana. Le facce disegnate a mano (rettangoli, poligoni) non sono terreno: lo strumento lo segnala.
- La modellazione sposta i punti solo in verticale; non aggiunge punti. Per dettagli più fini, creare una griglia con celle più piccole.
- Il terreno si esporta come qualsiasi altro gruppo. In IFC è un proxy di elemento edilizio, come tutto il resto.
