---
title: Borrar y limpiar
summary: Borrar bordes, grupos y guías con la goma o la tecla Delete, unir caras partidas, y corregir caras que miran al revés.
keywords: borrar, goma, eliminar, quitar, unir, combinar caras, limpiar, líneas sueltas, invertir cara, cara trasera, deshacer
from: 80b92a81
---

## Borrar con la goma

1. Presioná {{key:E}} para la {{ui:Goma}}.
2. Ojapo clic en un borde, un grupo o componente, o una guía. Se borra.
3. Para borrar varios, presioná y arrastrá sobre ellos. Todo lo que pasás se resalta, y todo se va al soltar.

La goma no elige caras: una cara se va cuando borrás los bordes que necesita. Las caras son lo que la goma atraviesa para encontrar bordes.

## Qué pasa con las caras

- **Un borde entre dos caras del mismo plano** (una línea que dibujaste sobre un piso, por ejemplo) desaparece y las dos caras **se unen** en una.
- **Un borde que una cara necesita para quedar cerrada** (el borde de una caja) se lleva esa cara. Si borrás un borde superior de una caja, se van la tapa y un lado, quedando una caja abierta.
- **Extremos sueltos** (puntos que ningún borde usa ya) se limpian.

Borrar la última copia de un componente también lo quita del panel {{ui:Componentes}}.

## Borrar con la tecla Delete

1. Seleccioná lo que querés quitar con {{ui:Seleccionar}}.
2. Presioná {{key:Delete}} o {{key:Backspace}}.

Esto quita también las caras. Una cara borrada así deja sus bordes, así que podés borrar la tapa de una caja, conservar su contorno y dibujar otra cosa encima.

## Limpiar líneas sueltas en una cara plana

Si un muro o piso muestra líneas que no querés (sobras del dibujo), borralas con la {{ui:Goma}}. Las líneas que están dentro de la cara se unen y se borran; la cara queda.

## Una cara que mira al revés

Una cara vista desde atrás se ve gris azulada. Si una cara muestra gris azulado por fuera de tu modelo:

1. Seleccioná la cara.
2. Ojapo clic en {{ui:Cara ojejapova'ekue}} en {{ui:Información de entidad}}.

La dirección de las caras importa sobre todo al exportar: los renderizadores, motores de juegos e impresoras 3D pueden ocultar o leer mal las caras que apuntan hacia adentro.

## Deshacer un error

{{key:Mod+Z}} deshace un paso por vez, {{key:Mod+Y}} (o {{key:Mod+Shift+Z}}) rehace. Un arrastre con la goma es un solo paso, sin importar cuántas cosas haya tomado. La barra de estado indica qué se deshizo: "Se deshizo borrar."
