---
title: Intersecar caras
summary: Dibuje las líneas donde las caras se cruzan entre sí, para poder empujar, borrar o pintar las piezas.
keywords: intersecar, intersecar caras, intersecar con el modelo, intersecar con la selección, cortar, abertura, hueco, unir, líneas donde se cruzan caras, booleana
from: 6bc58526
---

Cuando una forma atraviesa otra, ModelCraft no dibuja la línea donde se encuentran sus caras: simplemente se solapan. **Intersecar** dibuja esas líneas, como aristas, para que las caras se dividan allí. Después puede empujar/tirar, borrar o pintar las piezas.

Ambos comandos están en {{ui:Edición}} › {{ui:Más}}.

## Intersecar con el modelo

Corta lo seleccionado contra **todas las caras de la pantalla**.

Por ejemplo, una viga (un grupo) atraviesa un muro (otro grupo) y quiere una abertura en el muro:

1. Haga doble clic en el muro para abrirlo y seleccione todas sus caras ({{key:Ctrl+A}}).
2. {{ui:Edición}} › {{ui:Más}} › {{ui:Intersecar con el modelo}}.

El contorno de la viga se dibuja en las dos caras del muro, como dos caras nuevas. Empuje una de ellas a través del muro para hacer la abertura, y después cierre el muro.

## Intersecar con la selección

Corta las caras, grupos y componentes seleccionados **solo entre ellos**. Seleccione al menos dos.

## Dónde van las líneas

Las líneas siempre se dibujan en el **contexto abierto**: en el modelo cuando no hay ningún grupo abierto, o en el grupo que está editando. Los grupos y componentes que no están abiertos no se modifican. Así que, para cortar las caras de un grupo, ábralo primero, como en el ejemplo anterior.

## Cosas que conviene saber

- Las caras que están en el mismo plano no se intersecan.
- Las líneas que cierran un bucle en una cara crean una cara nueva, como ocurre con las líneas dibujadas.
- Cada intersección es un paso de deshacer. Si nada se cruza, nada cambia.
- Para formas cerradas, las [herramientas de sólidos](topic:solids) (Unión, Sustracción) hacen todo el trabajo en un solo paso.
