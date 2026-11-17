---
title: Modelar juntos con Live TeamWork
summary: Qué cambia en ModelCraft mientras está en una sesión de Live TeamWork desde CadCraft Studio: los grupos y componentes de todos en un mismo modelo, quién puede remodelar qué a la vez, su propio deshacer, y unirse desde un navegador en la misma red.
keywords: en vivo, live teamwork, studio en vivo, juntos, colaborar, sesión, compartir en vivo, unirse, grupo, componente, empujar/tirar, cursor, puntero, verse, nombres, color, selección, deshacer, anfitrión
from: d8d2f282
---

## Lo que aprenderá

Qué pasa con un modelo mientras varias personas trabajan en él al mismo tiempo. CadCraft Studio inicia y se une a la sesión de Live TeamWork (Compartir, Unirse); esta página trata del propio modelo.

## Trabajar en su propio grupo

Todos editan el mismo modelo, y sus propias ediciones se ven al instante. Cómo se combinan los cambios depende de lo que cambie:

- **Mover, nombrar, colorear u ocultar grupos y componentes colocados** se combina: dos personas que mueven dos grupos conservan ambos movimientos.
- **La geometría dentro de un grupo** (sus aristas y caras: dibujar, empujar/tirar, borrar) forma una sola pieza. Cuando dos personas remodelan el mismo grupo en el mismo momento, el segundo cambio se revierte y la barra de estado lo indica. Los grupos distintos nunca se estorban.
- **La geometría suelta** (que no está en ningún grupo) es el grupo propio del modelo: solo una persona puede remodelarla a la vez.

Por tanto, acordad quién trabaja en cada grupo, o cread un grupo para la parte de cada persona antes de empezar. Las guías, las cotas y los planos de sección se combinan uno a uno; las escenas, las etiquetas, las plantas y los ejes de dibujo se quedan con quien los cambió por última vez.

## Verse unos a otros

Cada persona de la sesión tiene su propio color. Ve el puntero de cada persona como una flecha de su color con su nombre al lado, a la profundidad de la vista que está mirando, y un recuadro discontinuo de su color alrededor de lo que ha seleccionado.

Los punteros, los nombres y las selecciones son solo para la sesión: nunca se guardan en el archivo y nunca entran en el deshacer de nadie. Se desplazan suavemente hasta donde está cada persona, así que siguen siendo fluidos incluso con una conexión lenta.

## Deshacer deshace su propio trabajo

{{key:Mod+Z}} deshace su último paso y deja en paz los de los demás. Si alguien ha cambiado lo mismo desde entonces, no se deshace nada y la barra de estado indica quién.

## Unirse desde un navegador

Un compañero sin Studio puede escanear la imagen que aparece bajo el código del anfitrión con un teléfono, una tableta o un equipo en la misma red. ModelCraft se abre en el navegador y se llena con el modelo del anfitrión en cuanto el anfitrión le deje entrar. Un enlace de invitación permite que alguien se una desde otra red: el anfitrión necesita una licencia de Team Cloud Plan para la aplicación, los demás se unen gratis, y el enlace solo funciona mientras la sesión del anfitrión está abierta.

## Cuando termina la sesión

Solo el anfitrión guarda el modelo. Los demás conservan una copia sin guardar: guárdela si desea conservarla.
