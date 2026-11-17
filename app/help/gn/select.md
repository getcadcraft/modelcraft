---
title: Seleccionar cosas
summary: Clic, doble clic y triple clic, arrastrar una ventana o una caja de cruce, agregar y quitar con teclas modificadoras, y eliminar.
keywords: seleccionar, selección, ventana, cruce, agregar a la selección, deseleccionar, seleccionar todo, triple clic, doble clic, eliminar, borrar
from: d56d1f89
---

{{ui:Seleccionar}} ({{key:Space}}) ha'e herramienta ModelCraft oñepyrũva'ekue, ha pe {{key:Esc}} oguerohory chupe jey. Mba'e seleccionadas oñemoĩ azul, ha {{ui:Información de entidad}} ojuehe ohechauka mba'épa ha'e kuri.

## Clic

| Ko hag̃ua | Oselecciona |
|---|---|
| Clic en una cara o un borde | Eso cara o borde |
| Clic en un grupo o componente | Pe grupo o componente entero |
| Doble clic en una cara | La cara y sus bordes |
| Doble clic en un borde | El borde y las caras a cada lado |
| Doble clic en un grupo o componente | Ohory chupe para editar (ver [Grupos y componentes](topic:groups-components)) |
| Triple clic en una cara o borde | Todo lo conectado: el objeto entero |
| Clic en espacio vacío | Nada (oheja la selección) |
| Doble clic en espacio vacío mientras se edita un grupo | Cierra el grupo |

Los bordes son más fáciles de tocar que las caras: cuando el puntero está a pocos píxeles de un borde, el clic toma el borde.

## Arrastrar una caja

- **De izquierda a derecha** dibuja una caja sólida: una selección de **ventana**. Solo se seleccionan las cosas que están completamente dentro.
- **De derecha a izquierda** dibuja una caja punteada: una selección de **cruce**. Se selecciona todo lo que toca la caja, y una cara se selecciona cuando la caja está completamente dentro de ella.

Un grupo o componente cuenta como una sola cosa: la ventana debe contenerlo entero, y el cruce solo tiene que tocarlo.

## Agregar y quitar

Mantené una tecla mientras hacés clic o arrastrás:

| Tecla | Efecto |
|---|---|
| {{key:Shift}} | Alterna: agrega lo que no está seleccionado, quita lo que sí lo está |
| {{key:Mod}} | Agrega |
| {{key:Shift}} y {{key:Mod}} juntas | Quita |

Para seleccionar todo el modelo (o todo el grupo que estás editando), presioná {{key:Mod+A}}.

## Quitar la selección

Presioná {{key:Esc}} (con {{ui:Seleccionar}} como herramienta), o hacé clic en espacio vacío.

## Eliminar lo seleccionado

Presioná {{key:Delete}} o {{key:Backspace}}. Las caras, bordes, grupos y guías de la selección se eliminan en un solo paso; {{key:Mod+Z}} los devuelve.

Al eliminar un borde se eliminan las caras que lo necesitan, salvo que el borde solo separaba dos caras en el mismo plano: entonces las dos caras se unen en una. Al eliminar una cara quedan sus bordes. Ver [Borrar y limpiar](topic:erase).

## Seleccionar dentro de un grupo

Hacer clic en un grupo selecciona el grupo entero. Para seleccionar una cara dentro, hacé doble clic en el grupo para abrirlo, y después hacé clic. Mientras un grupo está abierto, los clics solo llegan a lo que está dentro; lo demás se ve atenuado. Presioná {{key:Esc}} sin nada seleccionado, o hacé doble clic en espacio vacío, para cerrarlo.

El {{ui:Esquema}} a la izquierda selecciona grupos y componentes por nombre, lo que ayuda cuando están ocultos detrás de otras cosas.
