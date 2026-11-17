---
title: Soportes, grosor de pared, ahuecado y reparación
summary: Vea dónde una impresión necesita soportes y cuántos aproximadamente, encuentre paredes demasiado delgadas para imprimir, ahueque una pieza a un grosor de pared con orificios de drenaje y repare una malla con cada corrección enumerada.
keywords: impresión 3d, soportes, vista previa de soportes, voladizo, soportes en árbol, soportes en columna, grosor de pared, paredes delgadas, demasiado delgado, boquilla, ahuecar, ahuecado, cáscara, orificio de drenaje, resina, reparar, reparar malla, no variedad, caras volteadas, huecos, piezas pequeñas, autointersección, traslape, unir
from: 286bde26
---

Cuatro herramientas para preparar un modelo para una impresora 3D. Abra {{ui:Exportar}} › {{ui:Revisar para impresión 3D (STL o 3MF)…}}; la línea **Herramientas de impresión** del diálogo tiene {{ui:Vista previa de soportes}}, {{ui:Grosor de pared}}, {{ui:Ahuecar}} y {{ui:Reparar}}. Cada una se abre como una tarjeta sobre la vista; {{ui:Cerrar}} (la cruz) la cierra y quita sus marcas. Solo se muestra una tarjeta a la vez.

Cada herramienta trabaja sobre lo que se imprime: la selección, o todo lo visible si no hay nada seleccionado. {{ui:Ahuecar}} y {{ui:Reparar}} necesitan un grupo, componente o malla seleccionado, porque lo modifican.

## Vista previa de soportes

Las caras que se inclinan hacia afuera más que el **ángulo de voladizo** respecto de la vertical se sombrean en rojo, y desde ellas se dibujan soportes sencillos (en naranja) hasta la cama, o hasta la parte del modelo que esté debajo.

- **Ángulo de voladizo**: 45° es lo que la mayoría de impresoras logra sin soporte. Auméntelo para una impresora que puentea bien.
- **Columnas**: una columna recta cada 3 mm bajo cada voladizo. El cálculo las cuenta como un patrón de soporte de 15%.
- **Árbol**: los puntos cercanos se unen en un tronco bajo su punto medio; ninguna rama se inclina más de 45°. Los árboles suelen gastar menos material y tocan la cama en menos puntos.

La tarjeta indica cuánta superficie necesita soporte, cuántos puntos de soporte hay y cuánto material aproximado ocupan. Los soportes que se apoyan sobre el modelo (no en la cama) se cuentan, porque dejan marcas ahí. Con una cama elegida en {{ui:Configuración}}, la cama se dibuja bajo el modelo.

:::note
Esto es una vista previa, no un laminador: su laminador decide los soportes reales. En un voladizo muy grande los puntos de soporte se reparten más para que la vista previa siga rápida; la tarjeta lo indica.
:::

## Grosor de pared

Cada cara se mide en línea recta a través del sólido hasta el otro lado. Las paredes por debajo del **grosor mínimo de pared permitido** se ven en rojo, y las que están por debajo de una vez y media ese valor, en naranja: se imprimen, pero pueden salir débiles.

Las áreas delgadas se enumeran, de la más delgada a la más gruesa, con su espesor y su tamaño. {{ui:Mostrar}} orienta la cámara hacia ellas.

Una impresora no puede hacer una pared más delgada que unos dos anchos de su boquilla: 0.8 mm para la boquilla común de 0.4 mm (el valor inicial). Las impresoras de resina logran menos; consulte la guía de su impresora.

En un modelo muy grande, solo algunas caras lanzan un rayo y las demás toman el grosor de sus vecinas; la tarjeta indica cuántas se midieron.

## Ahuecar

Ahuecar conserva el exterior tal como está y quita el interior, dejando paredes del grosor que pida. Las impresiones en resina gastan menos resina y tiran menos de la plataforma de construcción; las de filamento gastan menos plástico que el relleno.

1. Seleccione el grupo, componente o malla, y luego abra {{ui:Ahuecar}}.
2. Indique la **pared** (2 mm para empezar) y qué tan anchos son los **orificios de drenaje**.
3. En una impresión en resina, haga clic en {{ui:Colocar un orificio de drenaje}} y luego haga clic en el exterior del modelo donde irá: abajo, cerca de la cama, para que la resina líquida salga. Coloque tantos como necesite; cada uno aparece como un círculo azul y se enumera con {{ui:Quitar}}.
4. {{ui:Vista previa}} indica cuánto material quita el ahuecado.
5. {{ui:Ahuecarlo}} hace el cambio: un paso que {{key:Mod+Z}} deshace.

El resultado es un sólido cerrado que acepta la revisión de impresión 3D: ModelCraft lo revisa primero y no cambia nada si no lo pasaría. Donde el modelo es más delgado que dos paredes, queda sólido. El resultado es un grupo cuyas caras planas son caras únicas, así que puede seguir modelándolo con {{ui:Empujar/tirar}}; una pieza curva ahuecada con la cuadrícula fina suele tener demasiadas caras para eso y se convierte en malla, y la barra de estado indica cuál es el caso.

:::tip
En la mayoría de formas, el interior es el exterior desplazado hacia dentro exactamente el grosor de la pared. Donde las esquinas o las partes delgadas lo hacen imposible, ModelCraft sigue el exterior a la distancia de la pared en una cuadrícula fina; la tarjeta indica entonces qué tan cerca está (con una precisión de fracciones de milímetro).
:::

## Reparar

{{ui:Reparar}} revisa la pieza seleccionada como lo haría el laminador de una impresora, corrige con seguridad lo que puede corregir y enumera cada corrección:

| Corrige | Qué significa |
|---|---|
| Triángulos sin área | se quitan |
| Un triángulo dibujado dos veces | se conserva una copia; una cara dibujada espalda con espalda consigo misma (sin grosor) se quita |
| Piezas sueltas de menos de 0.5 mm | se quitan |
| Triángulos orientados al revés | se giran para coincidir con sus vecinos |
| Huecos, planos o no | se cierran con un abanico de triángulos nuevos desde el centro de cada hueco |
| Una pieza al revés | se gira hacia afuera (un hueco dentro de otra pieza se deja como está, porque debe mirar hacia adentro) |

{{ui:Corregir lo seguro}} hace todas en un paso que {{key:Mod+Z}} deshace, y la barra de estado enumera cada corrección. La pieza corregida se convierte en un grupo cuyas caras planas son caras únicas. Si todavía no cierra (queda algo bajo **Para usted**), o tendría demasiadas caras para un grupo, se convierte en malla: sus caras siguen siendo triángulos, y las caras planas se siguen viendo planas. La barra de estado indica cuál es el caso. {{ui:Unir piezas traslapadas}} funciona igual.

Lo que no se puede corregir con seguridad aparece bajo **Para usted** y se marca en morado en la vista, con {{ui:Mostrar}}:

- **Aristas donde se encuentran tres o más caras**: decida a cuál pertenece y borre las demás.
- **Una pieza que atraviesa a sí misma**: mueva o vuelva a dibujar esa parte. Vea [Intersecar caras](topic:intersect).
- **Huecos demasiado grandes o enredados para cerrarse**: dibuje caras a través de ellos.
- **Piezas separadas que se traslapan**: los laminadores las fusionan de todos modos. {{ui:Unir piezas traslapadas}} las convierte en un solo cuerpo cerrado (reconstruye las caras donde se encuentran, por eso es un botón aparte que nunca se aplica por usted).

Para grupos de empujar/tirar también puede corregir una por una en {{ui:Información de entidad}} › {{ui:Mostrar problemas}} / {{ui:Corregir}}, lo que conserva las caras que dibujó. Vea [Herramientas de sólidos](topic:solids).

Relacionado: [Prepare un modelo para imprimir en 3D](topic:print-3d) · [El estilo Principiante](topic:beginner) · [Aún no disponible](topic:not-built-yet#3d-printing)
