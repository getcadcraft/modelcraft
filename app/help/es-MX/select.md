---
title: Seleccionar elementos
summary: Haga clic, doble clic y triple clic, arrastre una ventana o una captura, agregue y quite con teclas modificadoras, y elimine.
keywords: seleccionar, selección, ventana, captura, agregar a la selección, quitar de la selección, seleccionar todo, triple clic, doble clic, eliminar, borrar
from: d56d1f89
---

{{ui:Seleccionar}} ({{key:Space}}) es la herramienta con la que ModelCraft inicia, y a la que {{key:Esc}} le regresa. Los elementos seleccionados se vuelven azules, y {{ui:Información de entidad}} a la derecha indica qué son.

## Clic

| Haga esto | Selecciona |
|---|---|
| Haga clic en una cara o una arista | Esa cara o arista |
| Haga clic en un grupo o componente | El grupo o componente completo |
| Haga doble clic en una cara | La cara y sus aristas |
| Haga doble clic en una arista | La arista y las caras a sus lados |
| Haga doble clic en un grupo o componente | Lo abre para editarlo (vea [Grupos y componentes](topic:groups-components)) |
| Haga triple clic en una cara o arista | Todo lo conectado a ella: el objeto completo |
| Haga clic en un espacio vacío | Nada (borra la selección) |
| Haga doble clic en un espacio vacío mientras edita un grupo | Cierra el grupo |

Las aristas son más fáciles de tocar que las caras: cuando el puntero está a pocos píxeles de una arista, el clic toma la arista.

## Arrastrar una caja

- **De izquierda a derecha** dibuja una caja sólida: una selección por **ventana**. Solo se seleccionan los elementos que quedan totalmente dentro.
- **De derecha a izquierda** dibuja una caja punteada: una selección por **captura**. Se selecciona todo lo que toque la caja, y una cara se selecciona cuando la caja queda totalmente dentro de ella.

Un grupo o componente cuenta como un solo elemento: una ventana debe contenerlo completo, una captura solo tiene que tocarlo.

## Agregar y quitar

Mantenga presionada una tecla mientras hace clic o arrastra:

| Tecla | Efecto |
|---|---|
| {{key:Shift}} | Alterna: agrega lo que no está seleccionado y quita lo que sí lo está |
| {{key:Mod}} | Agrega |
| {{key:Shift}} y {{key:Mod}} juntas | Quita |

Para seleccionar todo el modelo (o todo el grupo que edita), pulse {{key:Mod+A}}.

## Quitar la selección

Pulse {{key:Esc}} (con {{ui:Seleccionar}} como herramienta), o haga clic en un espacio vacío.

## Eliminar lo seleccionado

Pulse {{key:Delete}} o {{key:Backspace}}. Las caras, aristas, grupos y guías de la selección se quitan en un solo paso; {{key:Mod+Z}} los devuelve.

Al borrar una arista se eliminan las caras que la necesitan, salvo que la arista solo separara dos caras en el mismo plano: entonces las dos caras se unen en una. Al borrar una cara se conservan sus aristas. Vea [Borrar y limpiar](topic:erase).

## Seleccionar dentro de un grupo

Al hacer clic en un grupo se selecciona el grupo completo. Para seleccionar una cara dentro de él, haga doble clic en el grupo para abrirlo y luego haga clic. Mientras un grupo está abierto, los clics solo llegan a lo que está dentro; lo demás se atenúa. Pulse {{key:Esc}} sin nada seleccionado, o haga doble clic en un espacio vacío, para cerrarlo.

El {{ui:Esquema}} a la izquierda selecciona grupos y componentes por nombre, lo que ayuda cuando están ocultos detrás de otras cosas.
