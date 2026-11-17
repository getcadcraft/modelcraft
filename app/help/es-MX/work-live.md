---
title: Modelar juntos con Live TeamWork
summary: Qué cambia en ModelCraft mientras está en una sesión de Live TeamWork desde CadCraft Studio: los grupos y componentes de todos en un mismo modelo, quién puede reformar qué a la vez, su propio deshacer, y cómo unirse desde un navegador en la misma red.
keywords: en vivo, live teamwork, studio en vivo, juntos, colaborar, sesión, compartir en vivo, unirse, grupo, componente, empujar/tirar, cursor, puntero, verse, nombres, color, selección, deshacer, anfitrión
from: d8d2f282
---

## Lo que aprenderá

Qué pasa con un modelo cuando varias personas trabajan en él al mismo tiempo. CadCraft Studio inicia y se une a la sesión de Live TeamWork (Compartir, Unirse); esta página trata sobre el modelo en sí.

## Trabajar en su propio grupo

Todos editan el mismo modelo, y sus propias ediciones se muestran de inmediato. La forma en que se combinan los cambios depende de lo que modifique:

- **Mover, nombrar, colorear u ocultar grupos y componentes colocados** se combina: dos personas que mueven dos grupos conservan ambos movimientos.
- **La geometría dentro de un grupo** (sus aristas y caras: dibujar, empujar/tirar, borrar) es un bloque. Cuando dos personas reforman el mismo grupo en el mismo momento, el segundo cambio se revierte y la barra de estado lo indica. Los grupos distintos nunca se estorban entre sí.
- **La geometría suelta** (la que no está en ningún grupo) es el grupo propio del modelo: solo una persona puede reformarla a la vez.

Por eso, acuerden quién trabaja en cada grupo, o creen un grupo para la parte de cada persona antes de empezar. Las guías, las cotas y los planos de sección se combinan uno por uno; las escenas, las etiquetas, los niveles y los ejes del dibujo quedan con quien los cambió por última vez.

## Verse unos a otros

Cada persona de la sesión tiene su propio color. Ve el puntero de cada uno como una flecha de su color con su nombre al lado, a la profundidad de la vista que mira, y un recuadro punteado de su color alrededor de lo que haya seleccionado.

Los punteros, nombres y selecciones son solo para la sesión: nunca se guardan en el archivo ni entran en el deshacer de nadie. Se deslizan hasta donde está cada persona, así que se mantienen fluidos incluso con una conexión lenta.

## Deshacer deshace su propio trabajo

{{key:Mod+Z}} deshace su último paso y deja los de los demás intactos. Cuando alguien cambió lo mismo después, no se deshace nada y la barra de estado indica quién fue.

## Unirse desde un navegador

Un compañero sin Studio puede escanear la imagen bajo el código del anfitrión con un teléfono, una tableta o una computadora en la misma red. ModelCraft se abre en el navegador y se llena con el modelo del anfitrión en cuanto el anfitrión le permite entrar. Un enlace de invitación permite a alguien unirse desde otra red: el anfitrión necesita una licencia de Team Cloud Plan para la app, los demás se unen gratis, y el enlace funciona solo mientras la sesión del anfitrión esté abierta.

## Cuando termina la sesión

Solo el anfitrión guarda el modelo. Todos los demás conservan una copia sin guardar: guárdela si quiere conservarla.
