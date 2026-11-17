---
title: Intersecar caras
summary: Debuxe as liñas onde as caras se atravesan, para poder empurrar, borrar ou pintar as pezas.
keywords: intersecar, intersecar caras, intersecar co modelo, cortar, abertura, burato, unir, liñas onde se cruzan as caras, booleana
from: 6bc58526
---

Cando unha forma atravesa outra, ModelCraft non debuxa a liña onde se encontran as súas caras: simplemente se solapan. **Intersecar** debuxa esas liñas, como arestas, para que as caras se dividan alí. Despois pode empurrar/tirar, borrar ou pintar as pezas.

Ambos comandos están en {{ui:Edit}} › {{ui:More}}.

## Intersecar co modelo

Corta o seleccionado contra **todas as caras da pantalla**.

Por exemplo, unha viga (un grupo) atravesa un muro (outro grupo), e quere unha abertura no muro:

1. Faga un doble clic no muro para abrilo, e seleccione todas as súas caras ({{key:Ctrl+A}}).
2. {{ui:Edit}} › {{ui:More}} › {{ui:Intersect with model}}.

O contorno da viga debúxase en ambas as caras do muro, como dúas caras novas. Empurre unha delas a través do muro para facer a abertura, e logo peche o muro.

## Intersecar coa selección

Corta as caras, grupos e compoñentes seleccionados **só uns contra outros**. Seleccione polo menos dous.

## Onde van as liñas

As liñas debúxanse sempre no **contexto aberto**: no modelo cando non hai ningún grupo aberto, ou no grupo que está editando. Os grupos e compoñentes que non están abertos non se modifican. Así que, para cortar as caras dun grupo, ábrao primeiro, como no exemplo de enriba.

## Cousas que debe saber

- As caras que están no mesmo plano non se intersecan.
- As liñas que pechan un lazo sobre unha cara crean unha cara nova, como as liñas debuxadas.
- Cada intersección é un paso de desfacer. Se non se cruza nada, non cambia nada.
- Para formas pechadas, as [ferramentas de sólidos](topic:solids) (Unir, Restar) fan todo o traballo nun só paso.
