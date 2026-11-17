---
title: Borrar y limpiar
summary: Borre aristas, grupos y guías con el borrador o con la tecla Delete, una las caras divididas y corrija las caras que miran en sentido contrario.
keywords: borrar, borrador, eliminar, quitar, reparar, combinar caras, limpiar, líneas sueltas, invertir cara, cara trasera, deshacer
from: 80b92a81
---

## Borrar con el borrador

1. Pulse {{key:E}} para usar el {{ui:Borrador}}.
2. Haga clic en una arista, un grupo o componente, o una guía. Se borra.
3. Para borrar varios, presione y arrastre sobre ellos. Todo lo que pase se resalta, y se borra todo al soltar.

El borrador no elige caras: una cara desaparece cuando se borran las aristas que necesita. Las caras son lo que el borrador recorre para encontrar aristas.

## Qué pasa con las caras

- **Una arista entre dos caras del mismo plano** (una línea que dibujó sobre un piso, por ejemplo) desaparece y las dos caras **se unen** en una.
- **Una arista que una cara necesita para seguir cerrada** (el borde de una caja) se lleva esa cara. Si borra una arista superior de una caja, se van la tapa y un lado, y queda una caja abierta.
- **Los extremos sueltos** (puntos que ninguna arista usa ya) se limpian.

Borrar la última copia de un componente también lo quita del panel {{ui:Componentes}}.

## Borrar con la tecla Delete

1. Seleccione lo que quiere quitar con {{ui:Seleccionar}}.
2. Pulse {{key:Delete}} o {{key:Backspace}}.

Esto quita también las caras. Una cara borrada así deja sus aristas, así que puede borrar la tapa de una caja, conservar su contorno y dibujar otra cosa allí.

## Limpiar líneas sueltas en una cara plana

Si un muro o un piso muestra líneas que no quiere (sobrantes del dibujo), bórrelas con el {{ui:Borrador}}. Las líneas que están en la cara se unen y desaparecen; la cara permanece.

## Una cara que mira en sentido contrario

Una cara vista desde atrás se ve gris azulada. Si una cara muestra gris azulado en el exterior de su modelo:

1. Seleccione la cara.
2. Haga clic en {{ui:Invertir cara}} en {{ui:Información de entidad}}.

La dirección de las caras importa sobre todo al exportar: los renderizadores, los motores de juego y las impresoras 3D pueden ocultar o interpretar mal las caras que apuntan hacia adentro.

## Deshacer un error

{{key:Mod+Z}} deshace un paso a la vez, {{key:Mod+Y}} (o {{key:Mod+Shift+Z}}) rehace. Un arrastre con el borrador es un solo paso, sin importar cuántas cosas abarque. La barra de estado indica lo que se deshizo: "Se deshizo: borrar."
