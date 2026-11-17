---
title: Desplazar, copiar y crear matrices
summary: Desplace elementos haciendo clic o por una distancia exacta, cópielos con una tecla modificadora y cree una fila de copias igualmente espaciadas.
keywords: desplazar, copiar, duplicar, matriz, fila, espaciado, dividir, desfase, estirar, columnas, repetir, copia múltiple
from: 280245fc
---

{{ui:Move}} ({{key:M}}) desplaza lo que esté seleccionado de un punto a otro. Si mantiene presionada una tecla modificadora, se convierte en una copia, y después de copiar puede escribir cuántas copias más quiere.

## Desplazar algo

1. Seleccione lo que quiere desplazar (vea [Seleccionar elementos](topic:select)). Si no hay nada seleccionado, {{ui:Move}} toma el elemento en el que haga clic.
2. Pulse {{key:M}}.
3. Haga clic en un punto desde el cual desplazar. Elija algo significativo, como una esquina: ese punto quedará exactamente donde haga clic a continuación.
4. Mueva el puntero. La selección lo sigue. Se ajusta a puntos, aristas y a las direcciones roja, verde y azul, igual que una línea.
5. Haga clic donde debe quedar el punto, o escriba una distancia y pulse {{key:Enter}}.

   La sugerencia de la barra de estado vuelve a "Haga clic en un punto desde el cual desplazar…" para el siguiente desplazamiento.

Una distancia escrita va en la dirección que apunta. También puede escribir un desfase exacto, `<2m,0,0>` (2 m a lo largo del rojo), o un destino exacto para el punto elegido, `[0,0,0]` (el origen). Vea [Escribir medidas exactas](topic:value-box).

Para desplazar a lo largo de un solo eje, pulse una tecla de flecha después del primer clic: {{key:Right}} bloquea en rojo, {{key:Left}} en verde, {{key:Up}} en azul. Vuelva a pulsar la misma flecha para desbloquear.

## Mover una parte de una forma la estira

La geometría que no está agrupada está conectada. Si selecciona una cara o unas cuantas aristas y las mueve, las caras unidas a ellas se estiran para seguirlas. Mueva la cara superior de una caja hacia un lado y la caja se inclina; mueva una arista del techo y el techo cambia de pendiente. Las caras que ya no pueden mantenerse planas se pliegan en triángulos.

Para mover un objeto completo sin estirarlo, selecciónelo todo primero (triple clic), o mejor, conviértalo en un grupo o componente (vea [Grupos y componentes](topic:groups-components)).

## Copiar algo

1. Seleccione lo que quiere copiar.
2. Pulse {{key:M}}.
3. Mantenga presionada {{key:Ctrl}} (o {{key:Alt}}) y haga clic en el punto desde el cual desplazar. En Mac, {{key:Mod}} o {{key:Alt}} hacen lo mismo. La sugerencia dice "Ctrl mueve en cambio", lo que significa que está copiando.

   También puede presionar y soltar {{key:Ctrl}} o {{key:Alt}} después del primer clic para alternar entre desplazar y copiar.

4. Haga clic donde debe quedar la copia, o escriba una distancia y pulse {{key:Enter}}.

   El original se queda donde estaba, y la copia queda seleccionada.

## Copiar, cortar, pegar y duplicar

- {{key:Mod+C}} copia la selección, {{key:Mod+X}} la corta (copia y luego borra). {{ui:Copy}} y {{ui:Paste}} también son botones del grupo {{ui:Edit}} de la barra de herramientas, y {{ui:More}} junto a ellos tiene cortar, pegar en el mismo lugar y duplicar.
- {{key:Mod+V}} pega: un contorno de la copia sigue al puntero, ajustándose como cualquier herramienta, y un clic la coloca con su esquina más baja ahí. {{key:Esc}} cancela.
- {{key:Mod+Shift+V}} pega en el mismo lugar, exactamente donde estaba la copia; es útil para mover algo a un grupo que tiene abierto.
- {{key:Mod+D}} ({{key:Shift+D}} en el estilo Modeler) duplica: se crea una copia que se mueve con el puntero de inmediato. Haga clic para colocarla, escriba una distancia, o pulse {{key:Esc}} para soltarla. Justo después, escriba `3x` para más copias seguidas.

Un grupo pegado se convierte en un grupo nuevo. Un componente pegado es otra colocación del mismo componente, así que al editar uno también cambian todos. Las copias también se pegan en otra pestaña de ModelCraft en este navegador (llegan allí como definiciones nuevas).

## Una fila de copias

Justo después de copiar, mientras {{ui:Move}} sigue siendo la herramienta activa:

- Escriba `3x` (o `*3`) y pulse {{key:Enter}} para tres copias seguidas, cada una con el mismo espaciado que la primera copia. Obtiene tres copias nuevas además del original.
- Escriba `/3` y pulse {{key:Enter}} para dividir: tres copias repartidas de manera uniforme desde el original hasta donde colocó la primera copia; la última queda en ese punto. Use esto para llenar un tramo: coloque una copia en el extremo lejano y luego divida.

Puede escribir otro número justo después: `5x` reemplaza la fila de `3x`. La sugerencia se lo recuerda: "Copiado. Escriba 3x para más copias seguidas, o /3 para dividir la distancia."

### Ejemplo: columnas cada 6 metros

1. Haga una columna y conviértala en componente ({{key:G}}), para que todas las copias cambien juntas después.
2. Pulse {{key:M}}, mantenga presionada {{key:Ctrl}} y haga clic en la esquina base de la columna.
3. Desplácese a lo largo del eje rojo, escriba `6m` y pulse {{key:Enter}}.
4. Escriba `4x` y pulse {{key:Enter}}. Tendrá cinco columnas, separadas 6 m.

## Puntos a tener en cuenta

- Pulse {{key:Esc}} antes del segundo clic para cancelar; todo vuelve a donde estaba.
- {{ui:Move}} funciona dentro del grupo que está editando. Para desplazar un grupo completo, ciérrelo primero y selecciónelo desde afuera.
- Con **Colisión** activada (abajo a la derecha, y en la [configuración de ModelCraft](topic:settings#solids-stop-where-they-touch)), un desplazamiento se detiene donde la selección toca otro sólido en lugar de atravesarlo. Haga clic en {{ui:Collide}} para desactivarla en un desplazamiento que deba atravesar.
- Para poner una copia dentro de otro grupo: cópiela, abra el otro grupo y pegue ({{key:Mod+Shift+V}} la deja en el mismo lugar).
