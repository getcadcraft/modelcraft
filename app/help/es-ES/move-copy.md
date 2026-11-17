---
title: Mover, copiar y crear matrices
summary: Mueva objetos haciendo clic o a una distancia exacta, cópielos con una tecla modificadora y cree una fila de copias equidistantes.
keywords: mover, copiar, duplicar, matriz, fila, espaciado, dividir, desplazamiento, estirar, columnas, repetir, copia múltiple
from: 280245fc
---

{{ui:Desplazar}} ({{key:M}}) mueve lo seleccionado de un punto a otro. Si mantiene pulsada una tecla modificadora, se convierte en una copia, y después de copiar puede escribir cuántas copias más quiere.

## Mover algo

1. Seleccione lo que desea mover (véase [Seleccionar objetos](topic:select)). Si no hay nada seleccionado, {{ui:Desplazar}} toma el objeto en el que haga clic.
2. Pulse {{key:M}}.
3. Haga clic en un punto desde el que desplazar. Elija algo significativo, como una esquina: ese punto quedará exactamente donde haga clic a continuación.
4. Mueva el puntero. La selección lo sigue. Se ajusta a puntos, aristas y a las direcciones roja, verde y azul, igual que lo hace una línea.
5. Haga clic donde debe ir el punto, o escriba una distancia y pulse {{key:Enter}}.

   El consejo de la barra de estado vuelve a «Haga clic en un punto desde el que desplazar…» para el siguiente desplazamiento.

A la distancia escrita se le aplica la dirección hacia la que apunta. También puede escribir un desplazamiento exacto, `<2m,0,0>` (2 m a lo largo del rojo), o un destino exacto para el punto elegido, `[0,0,0]` (el origen). Véase [Introducir medidas exactas](topic:value-box).

Para desplazar solo a lo largo de un eje, pulse una tecla de flecha tras el primer clic: {{key:Right}} bloquea en rojo, {{key:Left}} en verde y {{key:Up}} en azul. Pulse de nuevo la misma flecha para desbloquear.

## Desplazar parte de una forma la estira

La geometría que no está agrupada está conectada. Si selecciona una cara o unas pocas aristas y las desplaza, las caras unidas a ellas se estiran para seguirlas. Si mueve la cara superior de una caja hacia un lado, la caja se inclina; si mueve una arista del tejado, el tejado cambia de pendiente. Las caras que ya no pueden permanecer planas se pliegan en triángulos.

Para desplazar un objeto completo sin estirarlo, selecciónelo entero primero (haga triple clic sobre él) o, mejor, conviértalo en grupo o componente (véase [Grupos y componentes](topic:groups-components)).

## Copiar algo

1. Seleccione lo que desea copiar.
2. Pulse {{key:M}}.
3. Mantenga pulsada {{key:Ctrl}} (o {{key:Alt}}) y haga clic en el punto desde el que desplazar. En Mac, {{key:Mod}} o {{key:Alt}} hacen lo mismo. El consejo dice «Ctrl desplaza en su lugar», lo que significa que está copiando.

   También puede pulsar y soltar {{key:Ctrl}} o {{key:Alt}} tras el primer clic para cambiar entre desplazar y copiar.

4. Haga clic donde debe ir la copia, o escriba una distancia y pulse {{key:Enter}}.

   El original permanece donde estaba y la copia queda seleccionada.

## Copiar, cortar, pegar y duplicar

- {{key:Mod+C}} copia la selección, {{key:Mod+X}} la corta (copia y después borra). {{ui:Copiar}} y {{ui:Pegar}} son también botones del grupo {{ui:Edición}} de la barra de herramientas; {{ui:Más}}, junto a ellos, ofrece cortar, pegar en su sitio y duplicar.
- {{key:Mod+V}} pega: un contorno de la copia sigue al puntero, ajustándose como cualquier herramienta, y un clic la coloca con su esquina inferior en ese punto. {{key:Esc}} cancela.
- {{key:Mod+Shift+V}} pega en su sitio, exactamente donde estaba la copia; es útil para llevar algo a un grupo que tiene abierto.
- {{key:Mod+D}} ({{key:Shift+D}} en el estilo Modeler) duplica: se crea una copia que se mueve con el puntero de inmediato. Haga clic para colocarla, escriba una distancia o pulse {{key:Esc}} para soltarla. Justo después, escriba `3x` para más copias seguidas.

Un grupo pegado se convierte en un grupo nuevo. Un componente pegado es otra colocación del mismo componente, así que al editar uno también cambian todos. Las copias también se pegan en otra pestaña de ModelCraft de este navegador (llegan allí como definiciones nuevas).

## Una fila de copias

Justo después de copiar, mientras {{ui:Desplazar}} sigue siendo la herramienta activa:

- Escriba `3x` (o `*3`) y pulse {{key:Enter}} para tres copias seguidas, cada una con la misma separación que la primera. Obtiene tres copias nuevas además del original.
- Escriba `/3` y pulse {{key:Enter}} para dividir en su lugar: tres copias repartidas por igual desde el original hasta donde colocó la primera copia, quedando la última en ese punto. Úselo para llenar un tramo: coloque una copia en el extremo lejano y después divida.

Puede escribir un número distinto justo después: `5x` sustituye a la fila `3x`. El consejo se lo recuerda: «Copiado. Escriba 3x para más copias seguidas, o /3 para dividir la distancia.»

### Ejemplo: columnas cada 6 metros

1. Cree un pilar y conviértalo en componente ({{key:G}}), para que después todas las copias cambien a la vez.
2. Pulse {{key:M}}, mantenga pulsada {{key:Ctrl}} y haga clic en la esquina de la base del pilar.
3. Desplácese a lo largo del eje rojo, escriba `6m` y pulse {{key:Enter}}.
4. Escriba `4x` y pulse {{key:Enter}}. Tendrá cinco columnas, separadas 6 m.

## Cosas que debe saber

- Pulse {{key:Esc}} antes del segundo clic para cancelar; todo vuelve a donde estaba.
- {{ui:Desplazar}} funciona dentro del grupo que está editando. Para desplazar un grupo completo, ciérrelo primero y selecciónelo desde fuera.
- Con {{ui:Colisión}} activada (abajo a la derecha, y en [Configuración de ModelCraft](topic:settings#solids-stop-where-they-touch)), un desplazamiento se detiene donde la selección toca otro sólido en lugar de atravesarlo. Haga clic en {{ui:Colisión}} para desactivarla en un desplazamiento que deba atravesarlo.
- Para colocar una copia dentro de otro grupo: cópiela, abra el otro grupo y pegue ({{key:Mod+Shift+V}} la mantiene en el mismo sitio).
