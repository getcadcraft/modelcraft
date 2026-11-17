---
title: Seleccionar elementos
summary: Haga clic, doble clic y triple clic, arrastre un recuadro de ventana o de cruce, añada y quite elementos con teclas modificadoras y elimínelos.
keywords: seleccionar, selección, ventana, cruce, añadir a la selección, anular selección, seleccionar todo, triple clic, doble clic, eliminar, borrar
from: d56d1f89
---

{{ui:Seleccionar}} ({{key:Space}}) es la herramienta con la que empieza ModelCraft, y a la que vuelve {{key:Esc}}. Lo seleccionado se vuelve azul, y {{ui:Información de entidad}} a la derecha indica qué es.

## Clic

| Haga esto | Selecciona |
|---|---|
| Clic en una cara o una arista | Esa cara o arista |
| Clic en un grupo o componente | Todo el grupo o componente |
| Doble clic en una cara | La cara y sus aristas |
| Doble clic en una arista | La arista y las caras a cada lado |
| Doble clic en un grupo o componente | Lo abre para editarlo (véase [Grupos y componentes](topic:groups-components)) |
| Triple clic en una cara o arista | Todo lo conectado a ella: el objeto entero |
| Clic en un espacio vacío | Nada (borra la selección) |
| Doble clic en un espacio vacío mientras edita un grupo | Cierra el grupo |

Las aristas son más fáciles de acertar que las caras: cuando el cursor está a pocos píxeles de una arista, el clic toma la arista.

## Arrastrar un recuadro

- **De izquierda a derecha** dibuja un recuadro continuo: una selección **por ventana**. Solo se seleccionan los elementos totalmente dentro de él.
- **De derecha a izquierda** dibuja un recuadro discontinuo: una selección **por cruce**. Se selecciona todo lo que toca el recuadro, y una cara se selecciona cuando el recuadro queda totalmente dentro de ella.

Un grupo o componente cuenta como una sola cosa: una ventana debe contenerlo entero; un cruce solo tiene que tocarlo.

## Añadir y quitar

Mantenga pulsada una tecla mientras hace clic o arrastra:

| Tecla | Efecto |
|---|---|
| {{key:Shift}} | Alterna: añade lo que no está seleccionado y quita lo que sí lo está |
| {{key:Mod}} | Añade |
| {{key:Shift}} y {{key:Mod}} juntas | Quita |

Para seleccionar todo el modelo (o todo el grupo que edita), pulse {{key:Mod+A}}.

## Anular la selección

Pulse {{key:Esc}} (con {{ui:Seleccionar}} como herramienta), o haga clic en un espacio vacío.

## Eliminar lo seleccionado

Pulse {{key:Delete}} o {{key:Backspace}}. Las caras, aristas, grupos y guías de la selección se eliminan de una vez; {{key:Mod+Z}} los devuelve.

Eliminar una arista quita las caras que la necesitan, salvo que la arista solo separara dos caras del mismo plano: entonces las dos caras se unen en una. Eliminar una cara deja sus aristas. Véase [Borrar y limpiar](topic:erase).

## Seleccionar dentro de un grupo

Hacer clic en un grupo selecciona todo el grupo. Para seleccionar una cara dentro, haga doble clic en el grupo para abrirlo y luego haga clic. Mientras un grupo está abierto, los clics solo llegan a lo que hay dentro; todo lo demás se atenúa. Pulse {{key:Esc}} sin nada seleccionado, o haga doble clic en un espacio vacío, para cerrarlo.

El {{ui:Esquema}} de la izquierda selecciona grupos y componentes por nombre, lo que ayuda cuando están ocultos detrás de otras cosas.
