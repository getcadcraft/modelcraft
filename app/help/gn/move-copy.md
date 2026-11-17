---
title: Mover, copiar y hacer matrices
summary: Mové cosas haciendo clic o por una distancia exacta, copialas con una tecla modificadora y hacé una fila de copias igualmente espaciadas.
keywords: mover, copiar, duplicar, matriz, fila, espaciado, dividir, desplazamiento, estirar, columnas, repetir, copia múltiple
from: 280245fc
---

{{ui:Mover}} ({{key:M}}) omové lo que esté ojeporavo'ỹva desde un punto a otro. Ojeapretáva peteĩ tecla modificadora, ojapo copia, ha copia rire ikatu ejeporavo mboy copia más oiporiahuvéva.

## Mover algo

1. Ejeporavo lo que querés mover (ver [Seleccionar cosas](topic:select)). Si nada está ojeporavo, {{ui:Mover}} toma lo que clickeás.
2. Eapretá {{key:M}}.
3. Clickeá un punto desde donde moverás. Escogé algo importante, como una esquina: ese punto va a caer justo donde clickeás después.
4. Mové el puntero. La selección lo sigue. Se pega a puntos, bordes y a las direcciones roja, verde y azul igual que lo hace una línea.
5. Clickeá donde debe ir el punto, o escribí una distancia y apretá {{key:Enter}}.

   La barra de estado vuelve a mostrar "Clickeá un punto desde donde moverás…" para el próximo movimiento.

Una distancia escrita va en la dirección que estás apuntando. También podés escribir un desplazamiento exacto, `<2m,0,0>` (2 m por el rojo), o un destino exacto para el punto que elegiste, `[0,0,0]` (el origen). Ver [Escribir tamaños exactos](topic:value-box).

Para mover por un solo eje, apretá una flecha después del primer clic: {{key:Right}} fija el rojo, {{key:Left}} el verde, {{key:Up}} el azul. Apretá la misma flecha otra vez para soltar.

## Mover una parte de una forma la estira

La geometría que no está agrupada está conectada. Si seleccionás una cara o algunos bordes y los movés, las caras unidas a ellos se estiran para seguirlos. Si movés la cara de arriba de una caja hacia un costado, la caja se inclina; si movés un borde del techo, el techo cambia de pendiente. Las caras que ya no pueden quedar planas se doblan en triángulos.

Para mover un objeto entero sin estirarlo, seleccionalo todo primero (triple clic sobre él), o mejor, hacelo un grupo o componente (ver [Grupos y componentes](topic:groups-components)).

## Copiar algo

1. Ejeporavo lo que querés copiar.
2. Eapretá {{key:M}}.
3. Mantené {{key:Ctrl}} (o {{key:Alt}}) y clickeá el punto desde donde moverás. En Mac, {{key:Mod}} o {{key:Alt}} hacen lo mismo. La pista dice "Ctrl mueve en cambio", lo que significa que estás copiando.

   También podés apretar y soltar {{key:Ctrl}} o {{key:Alt}} después del primer clic para cambiar entre mover y copiar.

4. Clickeá donde debe ir la copia, o escribí una distancia y apretá {{key:Enter}}.

   El original queda donde estaba, y la copia queda seleccionada.

## Copiar, cortar, pegar y duplicar

- {{key:Mod+C}} copia la selección, {{key:Mod+X}} la corta (copia y después borra), {{ui:Copiar}} y {{ui:Pegar}} también son botones en el grupo {{ui:Editar}} de la barra de herramientas, y {{ui:Más}} al lado tiene cortar, pegar en el mismo lugar y duplicar.
- {{key:Mod+V}} pega: un contorno de la copia sigue al puntero, se pega a los puntos como cualquier herramienta, y un clic la deja con su esquina más baja ahí. {{key:Esc}} cancela.
- {{key:Mod+Shift+V}} pega en el mismo lugar, exactamente donde estaba la copia; sirve para mover algo a un grupo que tenés abierto.
- {{key:Mod+D}} ({{key:Shift+D}} en el estilo Modelador) duplica: se hace una copia que de una vez sigue al puntero; clickeá para dejarla, escribí una distancia, o apretá {{key:Esc}} para soltarla. Justo después, escribí `3x` para más copias seguidas.

Un grupo pegado pasa a ser un grupo nuevo. Un componente pegado es otra colocación del mismo componente, así que si editás uno, cambian todos. Las copias también se pegan en otra pestaña de ModelCraft en este navegador (entran allí como definiciones nuevas).

## Una fila de copias

Justo después de copiar, mientras {{ui:Mover}} sigue siendo la herramienta:

- Escribí `3x` (o `*3`) y apretá {{key:Enter}} para tres copias seguidas, cada una con el mismo espaciado que la primera copia. Obtenés tres copias nuevas además del original.
- Escribí `/3` y apretá {{key:Enter}} para dividir en cambio: tres copias repartidas en partes iguales desde el original hasta donde pusiste la primera copia, la última justo en ese lugar. Usalo para llenar un tramo: poné una copia en el extremo lejano, y después dividí.

Podés escribir un número distinto justo después: `5x` reemplaza la fila de `3x`. La pista te lo recuerda: "Copiado. Escribí 3x para más copias seguidas, o /3 para dividir la distancia."

### Ejemplo: columnas cada 6 metros

1. Hacé una columna y hacela un componente ({{key:G}}), así todas las copias cambian juntas más adelante.
2. Eapretá {{key:M}}, mantené {{key:Ctrl}} y clickeá la esquina de la base de la columna.
3. Mové por el eje rojo y escribí `6m`, después {{key:Enter}}.
4. Escribí `4x` y {{key:Enter}}. Tenés cinco columnas, separadas 6 m.

## Cosas que conviene saber

- Apretá {{key:Esc}} antes del segundo clic para cancelar; todo vuelve a donde estaba.
- {{ui:Mover}} funciona dentro del grupo que estás editando. Para mover un grupo entero, cerralo primero y seleccionalo desde afuera.
- Con {{ui:Colisión}} activado (abajo a la derecha, y en la [configuración de ModelCraft](topic:settings#solids-stop-where-they-touch)), un movimiento se detiene donde la selección toca otro sólido en vez de atravesarlo. Clickeá {{ui:Colisión}} para desactivarlo en un movimiento que debe atravesar.
- Para poner una copia dentro de otro grupo: copiala, abrí el otro grupo y pegá ({{key:Mod+Shift+V}} la deja en el mismo lugar).
