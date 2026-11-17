---
title: Revisar el modelo con un casco de RV
summary: Recorra el modelo a tamaño real con un casco de RV: salte, gire, mida, corte el modelo, coloque incidencias con una imagen, véalo como maqueta sobre una mesa y encuentre a los demás de una sesión en vivo.
keywords: rv, realidad virtual, casco, webxr, xr, inmersivo, quest, oculus, vive, index, pico, recorrer, recorrido, teletransporte, revisión de diseño, revisión, medir, sección, cortar, incidencia, incidencias, bcf, maqueta, modelo a escala, presencia, avatares, en vivo, juntos
from: fa2f591a
---

{{ui:Revisar en RV}} le coloca dentro del modelo con un casco de RV, a tamaño real. Usted se sitúa donde está la cámara de la vista, en el piso debajo de ella, mirando en la misma dirección. No se sube nada: el casco muestra lo que el navegador dibuja en este equipo (o en el propio navegador del casco).

## Lo que necesita

- Un casco que el navegador pueda controlar (WebXR): el navegador propio de un casco independiente, o Chrome o Edge en una PC con un casco conectado.
- ModelCraft abierto en una página segura (https), como en este sitio.

Cuando no hay casco, {{ui:Revisar en RV}} aparece atenuado y explica por qué.

## Iniciar

1. Prepare la vista desde la que quiere empezar: en una habitación, o afuera mirando el edificio.
2. Haga clic en {{ui:Vistas}} en el grupo {{ui:Cámara}}, luego en {{ui:Revisar en RV}}.
3. Póngase el casco.

El menú está en el dorso de su mano izquierda. Apúntelo con el controlador derecho y accione el gatillo para elegir un botón. (Con una sola mano, el menú flota delante del lugar donde empezó.)

## Cómo se ve

El casco muestra el modelo con la apariencia de la [vista en vivo](topic:live-view): los acabados y materiales que asignó a las caras, el cielo y el sol según el lugar y la fecha de su modelo con su sombra, lámparas, plantas y rocas dispersas, y la luz que rebota en muros y pisos (calculada en este equipo mientras mira alrededor, y siguiéndole al moverse). El brillo y la transformación de vista (ACES o AgX) son los de [Renderizar una imagen](topic:render). Lo que dibuja depende de lo que tenga el navegador del casco, igual que en el escritorio; la oclusión ambiental, los reflejos y el resplandor se quedan en el escritorio.

## Moverse

- **Saltar:** en {{ui:Desplazar}}, apunte a un piso y accione el gatillo; aterriza allí. O empuje la palanca hacia adelante para apuntar, y suéltela para saltar. Solo puede aterrizar en pisos y suelos (superficies que miran hacia arriba), nunca en un muro.
- **Girar:** empuje la palanca a la izquierda o a la derecha: gira 30° cada vez.
- **Caminar:** en su área de juego, simplemente camine.

## Medir

Elija {{ui:Medir}} y accione el gatillo en dos puntos. La distancia se muestra entre ellos, en las unidades del modelo. Un punto cerca de una esquina se ajusta a la esquina.

## Cortar

Elija {{ui:Sección}} y accione el gatillo sobre una superficie:

- sobre un muro (o cualquier cosa que no sea un piso): todo lo que está entre usted y esa superficie se recorta, para que pueda ver hacia dentro. Funciona mejor desde afuera, o a través de una habitación;
- sobre un piso, desde arriba: un corte en planta a 1.2 m sobre ese piso, para que los muros muestren su parte inferior.

{{ui:Borrar}} quita el corte y las mediciones. Si un plano de sección corta el modelo en la vista al comenzar, el casco arranca con él.

## Colocar una incidencia

Elija {{ui:Incidencia}} y accione el gatillo donde está el problema. Un alfiler numerado lo marca, y ModelCraft guarda la incidencia con una imagen de lo que vio y de dónde estaba usted. Al salir de RV, las incidencias están en la lista {{ui:Incidencias}} a la derecha:

- el botón del ojo muestra la incidencia desde donde se colocó;
- {{ui:Guardar como BCF}} descarga todas como un archivo BCF, que abren los programas de revisión BIM (con cámara e imagen incluidas);
- también se guardan en el archivo `.modelcraft`.

Agregue un comentario a una incidencia después de salir de RV, en un programa BCF: escribir en el casco todavía no está disponible.

## Verlo como maqueta sobre una mesa

{{ui:Maqueta}} reduce el modelo para que quepa en una mesa frente a usted; camine a su alrededor, o gírelo con la palanca. {{ui:Tamaño real}} lo devuelve a donde estaba.

## Con otros, en vivo

En una [sesión en vivo](topic:work-live), todos en RV ven a los demás como una cabeza y dos manos de su propio color, con su nombre, y un punto donde cada uno apunta. Las ediciones de cualquiera llegan a su casco en un momento. Las personas en el escritorio todavía no se muestran en el casco.

## Salir

Elija {{ui:Salir de RV}} (o quítese el casco y termine allí). La vista de la pantalla se mueve hacia donde estaba su cabeza.

:::note
Probado solo con un emulador de casco, todavía no con un casco real. Un modelo grande puede hacer que el casco se entrecorte: oculte primero lo que no necesita ([ocultar y aislar](topic:hide-isolate)).
:::
