---
title: Borrar y limpiar
summary: Borre aristas, grupos y guías con el borrador o con la tecla Supr, repare las caras divididas y corrija las caras orientadas al revés.
keywords: borrar, borrador, suprimir, eliminar, reparar, fusionar caras, limpiar, líneas sueltas, invertir cara, cara trasera, deshacer
from: 80b92a81
---

## Borrar con el borrador

1. Pulse {{key:E}} para usar el {{ui:Borrador}}.
2. Haga clic en una arista, en un grupo o componente, o en una guía. Se borra.
3. Para borrar varios, mantenga pulsado el botón y arrastre sobre ellos. Todo lo que pase por encima se resalta, y todo se borra al soltar.

El borrador no selecciona caras: una cara desaparece cuando se borran las aristas que necesita. Las caras son lo que el borrador recorre para encontrar aristas.

## Qué ocurre con las caras

- **Una arista entre dos caras del mismo plano** (una línea que dibujó atravesando un suelo, por ejemplo) desaparece, y las dos caras **se reparan** y se convierten en una.
- **Una arista que una cara necesita para seguir cerrada** (la arista de una caja) se lleva esa cara consigo. Si borra una arista superior de una caja, se van la cara superior y una lateral, y queda una caja abierta.
- **Los extremos sueltos** (puntos que ya no usa ninguna arista) se limpian.

Borrar la última copia de un componente también lo quita del panel {{ui:Componentes}}.

## Borrar con la tecla Supr

1. Seleccione lo que quiera quitar con {{ui:Seleccionar}}.
2. Pulse {{key:Delete}} o {{key:Backspace}}.

Esto también elimina caras. Una cara eliminada así deja sus aristas, así que puede borrar la tapa de una caja y conservar su contorno, y dibujar algo más allí.

## Limpiar líneas sueltas en una cara plana

Si un muro o un suelo muestra líneas que no quiere (sobrantes de dibujar), bórrelas con el {{ui:Borrador}}. Las líneas que están en la cara se reparan y desaparecen; la cara se mantiene.

## Una cara orientada al revés

Una cara vista desde detrás aparece en gris azulado. Si una cara muestra gris azulado en el exterior de su modelo:

1. Seleccione la cara.
2. Haga clic en {{ui:Invertir cara}} en {{ui:Información de entidad}}.

La dirección de las caras importa sobre todo al exportar: los motores de renderizado, los motores de juegos y las impresoras 3D pueden ocultar o interpretar mal las caras que apuntan hacia dentro.

## Deshacer un error

{{key:Mod+Z}} deshace un paso cada vez, y {{key:Mod+Y}} (o {{key:Mod+Shift+Z}}) rehace. Un arrastre con el borrador es un solo paso, sea cual sea el número de cosas que haya tomado. La barra de estado indica lo deshecho: "Se ha deshecho: borrar."
