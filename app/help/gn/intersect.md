---
title: Intersecar caras
summary: Dibuje las líneas donde las caras se cortan entre sí, para poder empujar, borrar o pintar las piezas.
keywords: intersecar, intersecar caras, intersecar con modelo, intersecar con selección, cortar, abertura, hueco, unir, líneas donde se cruzan las caras, booleano
from: 6bc58526
---

Cuando una forma atraviesa otra, ModelCraft no dibuja la línea donde se encuentran sus caras: solo se superponen. **Intersecar** dibuja esas líneas, como aristas, para que las caras se dividan allí. Luego puede empujar/tirar, borrar o pintar las piezas.

Ambos comandos están en {{ui:Editar}} › {{ui:Más}}.

## Intersecar con modelo

Corta lo que selecciona contra **cada cara en pantalla**.

Por ejemplo, una viga (un grupo) atraviesa un muro (otro grupo), y usted quiere una abertura en el muro:

1. Haga doble clic en el muro para abrirlo, y seleccione todas sus caras ({{key:Ctrl+A}}).
2. {{ui:Editar}} › {{ui:Más}} › {{ui:Intersecar con modelo}}.

El contorno de la viga se dibuja en ambas caras del muro, como dos caras nuevas. Empuje una de ellas a través del muro para hacer la abertura, y luego cierre el muro.

## Intersecar con selección

Corta las caras, grupos y componentes seleccionados **solo entre ellos**. Seleccione al menos dos.

## Hacia dónde van las líneas

Las líneas siempre se dibujan en el **contexto abierto**: en el modelo cuando no hay ningún grupo abierto, o en el grupo que edita. Los grupos y componentes que no están abiertos no cambian. Así que para cortar las caras de un grupo, ábralo primero, como en el ejemplo de arriba.

## Cosas que conviene saber

- Las caras que están en el mismo plano no se intersecan.
- Las líneas que cierran un bucle en una cara crean una cara nueva, como lo hacen las líneas dibujadas.
- Cada intersección es un paso de deshacer. Si nada se cruza, nada cambia.
- Para formas cerradas, las [herramientas de sólidos](topic:solids) (Unir, Restar) hacen todo el trabajo en un paso.
