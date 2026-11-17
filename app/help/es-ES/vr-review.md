---
title: Revisar el modelo con un casco de RV
summary: Recorra el modelo a tamaño real con un casco de RV: desplácese, gire, mida, córtelo, coloque incidencias con una imagen, véalo como maqueta y encuéntrese con los demás en una sesión en vivo.
keywords: rv, realidad virtual, casco, webxr, xr, inmersivo, quest, oculus, vive, index, pico, recorrer, recorrido, teletransporte, revisión de diseño, revisar, medir, sección, cortar, incidencia, incidencias, bcf, maqueta, modelo a escala, presencia, avatares, en vivo, juntos
from: fa2f591a
---

{{ui:Revisar en RV}} le sitúa dentro del modelo con un casco de RV, a tamaño real. Se sitúa donde está la cámara de la vista, sobre el suelo que hay debajo, mirando en la misma dirección. No se sube nada: el casco muestra lo que el navegador dibuja en este equipo (o en el navegador propio del casco).

## Lo que necesita

- Un casco que el navegador pueda manejar (WebXR): el navegador propio de un casco autónomo, o Chrome o Edge en un PC con un casco conectado.
- ModelCraft abierto en una página segura (https), como lo está en este sitio.

Si no hay casco, {{ui:Revisar en RV}} aparece atenuado y explica por qué.

## Iniciar

1. Prepare la vista desde donde quiera empezar: dentro de una habitación, o fuera mirando el edificio.
2. Haga clic en {{ui:Vistas}} en el grupo {{ui:Cámara}} y después en {{ui:Revisar en RV}}.
3. Póngase el casco.

El menú está en el dorso de la mano izquierda. Apúntelo con el mando derecho y accione el gatillo para elegir un botón. (Si solo tiene una mano, el menú flota delante de donde empezó.)

## Qué se ve

El casco muestra el modelo con el aspecto de la [vista en vivo](topic:live-view): los acabados y materiales que asignó a las caras, el cielo y el sol según el lugar y la fecha del modelo con su sombra, lámparas, plantas y rocas dispersas, y la luz que rebota en muros y suelos (calculada en este equipo mientras mira alrededor, y siguiéndole al moverse). El brillo y la transformación de vista (ACES o AgX) son los de [Renderizar una imagen](topic:render). Lo que dibuja depende de lo que tenga el navegador del casco, como en el escritorio; la oclusión ambiental, los reflejos y el bloom se quedan en el escritorio.

## Desplazarse

- **Saltar:** en {{ui:Desplazar}}, apunte a un suelo y accione el gatillo; aterriza allí. O empuje el joystick hacia delante para apuntar, y suéltelo para saltar. Solo puede aterrizar en suelos y en el terreno (superficies que miran hacia arriba), nunca en un muro.
- **Girar:** empuje el joystick a izquierda o derecha: gira 30° cada vez.
- **Caminar:** en su zona de juego, simplemente camine.

## Medir

Elija {{ui:Medir}} y accione el gatillo sobre dos puntos. La distancia se muestra entre ellos, en las unidades del modelo. Un punto cerca de una esquina se ajusta a la esquina.

## Cortarlo

Elija {{ui:Sección}} y accione el gatillo sobre una superficie:

- sobre un muro (o cualquier cosa que no sea un suelo): todo lo que haya entre usted y esa superficie se corta, así que puede ver dentro. Funciona mejor desde fuera, o a lo largo de una habitación;
- sobre un suelo, desde arriba: un corte en planta a 1.2 m sobre ese suelo, de modo que los muros muestran su parte inferior.

{{ui:Borrar}} quita el corte y las mediciones. Si un plano de sección corta el modelo en la vista al empezar, el casco empieza con él.

## Colocar una incidencia

Elija {{ui:Incidencia}} y accione el gatillo donde esté el problema. Un alfiler numerado lo marca, y ModelCraft guarda la incidencia junto con una imagen de lo que vio y del lugar en el que estaba. Al salir de RV, las incidencias están en la lista {{ui:Incidencias}} de la derecha:

- el botón del ojo muestra la incidencia desde el lugar donde se colocó;
- {{ui:Guardar como BCF}} descarga todas como archivo BCF, que abren los programas de revisión BIM (con la cámara y la imagen incluidas);
- también se guardan en el archivo `.modelcraft`.

Añada un comentario a una incidencia después de salir de RV, en un programa BCF: escribir en el casco todavía no está disponible.

## Verlo como maqueta

{{ui:Maqueta}} reduce el modelo para que quepa en una mesa delante de usted; rodéela andando, o gírela con el joystick. {{ui:Tamaño real}} le devuelve a donde estaba.

## Con otros, en vivo

En una [sesión en vivo](topic:work-live), todos en RV ven a los demás como una cabeza y dos manos de su propio color, con su nombre, y un punto donde apunta cada uno. Las ediciones que haga cualquiera llegan a su casco en un momento. Las personas en el escritorio todavía no se muestran en el casco.

## Salir

Elija {{ui:Salir de RV}} (o quítese el casco y termine allí). La vista de la pantalla se desplaza a donde estaba su cabeza.

:::note
Probado solo con un emulador de casco, todavía no con un casco real. Un modelo grande puede hacer que el casco se entrecorte: oculte antes lo que no necesite ([ocultar y aislar](topic:hide-isolate)).
:::
