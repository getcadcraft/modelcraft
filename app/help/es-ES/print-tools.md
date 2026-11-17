---
title: Soportes, grosor de pared, vaciado y reparación
summary: Vea dónde necesita soportes una impresión y cuánto aproximadamente, encuentre paredes demasiado finas para imprimir, vacíe una pieza hasta un grosor de pared con orificios de drenaje y repare una malla con cada corrección listada.
keywords: impresión 3D, soportes, vista previa de soportes, voladizo, soportes en árbol, soportes en columna, grosor de pared, paredes finas, demasiado fino, boquilla, vaciar, vaciado, carcasa, orificio de drenaje, resina, reparar, corregir malla, no manifold, caras invertidas, agujeros, piezas pequeñas, autointersección, solapamiento, unir
from: 286bde26
---

Cuatro herramientas para preparar un modelo para una impresora 3D. Abra {{ui:Exportar}} › {{ui:Revisar para impresión 3D (STL o 3MF)…}}; la línea **Herramientas de impresión** del diálogo contiene {{ui:Vista previa de soportes}}, {{ui:Grosor de pared}}, {{ui:Vaciar}} y {{ui:Reparar}}. Cada una se abre como tarjeta sobre la vista; {{ui:Cerrar}} (la cruz) la retira junto con sus marcas. Solo se muestra una tarjeta a la vez.

Cada herramienta trabaja sobre lo que se imprime: la selección o, si no hay nada seleccionado, todo lo visible. {{ui:Vaciar}} y {{ui:Reparar}} necesitan seleccionar un grupo, componente o malla, porque lo modifican.

## Vista previa de soportes

Las caras que se inclinan hacia fuera más que el **ángulo de voladizo** respecto a la vertical se sombrean en rojo, y de ellas se dibujan soportes sencillos (naranja) hasta la plataforma o hasta la parte del modelo que queda debajo.

- **Ángulo de voladizo**: 45° es lo que la mayoría de impresoras logran sin soporte. Auméntelo en una impresora que puentea bien.
- **Columnas**: una columna recta cada 3 mm bajo cada voladizo. La estimación las cuenta como un patrón de soporte del 15%.
- **Árbol**: los puntos cercanos se unen en un tronco bajo su punto medio; ninguna rama se inclina más de 45°. Los soportes en árbol suelen necesitar menos material y tocan la plataforma en menos puntos.

La tarjeta indica cuánta superficie necesita soporte, cuántos puntos de soporte hay y aproximadamente cuánto material ocupan. Los soportes que se apoyan en el modelo (no en la plataforma) se cuentan: dejan marcas allí. Si ha elegido una plataforma de impresora en {{ui:Configuración}}, la plataforma se dibuja bajo el modelo.

:::note
Esto es una vista previa, no un laminador: su laminador decide los soportes reales. En un voladizo muy grande, los puntos de soporte se reparten más para que la vista previa siga siendo rápida; la tarjeta lo indica.
:::

## Grosor de pared

Cada cara se mide en línea recta a través del sólido hasta el otro lado. Las paredes por debajo de la **pared más fina permitida** se ven en rojo, y las que están por debajo de una vez y media esa medida, en naranja: se imprimen, pero pueden salir débiles.

Las zonas finas se enumeran, de la más fina a la menos, con su grosor y su tamaño. {{ui:Mostrar}} orienta la cámara hacia ella.

Una impresora no puede hacer una pared más fina que unos dos anchos de su boquilla: 0.8 mm para la boquilla habitual de 0.4 mm (el valor inicial). Las impresoras de resina logran menos; consulte la guía de su impresora.

En un modelo muy grande, solo algunas caras lanzan un rayo y las demás toman el grosor de sus vecinas; la tarjeta indica cuántas se han medido.

## Vaciar

Vaciar mantiene el exterior tal como está y retira el interior, dejando paredes del grosor que indique. Las impresiones de resina gastan menos resina y tiran menos de la plataforma de impresión; las de filamento usan menos plástico que con relleno.

1. Seleccione el grupo, componente o malla y abra {{ui:Vaciar}}.
2. Indique la **pared** (2 mm al principio) y el ancho de los **orificios de drenaje**.
3. Para una impresión de resina, haga clic en {{ui:Colocar un orificio de drenaje}} y luego en el exterior del modelo donde debe ir: abajo, cerca de la plataforma de impresión, para que salga la resina líquida. Coloque los que necesite; cada uno aparece como un círculo azul y se enumera con {{ui:Quitar}}.
4. {{ui:Vista previa}} indica cuánto material retira el vaciado.
5. {{ui:Vaciarla}} aplica el cambio en un solo paso que {{key:Mod+Z}} deshace.

El resultado es un sólido cerrado que acepta la revisión de impresión 3D: ModelCraft lo comprueba antes y no cambia nada si no lo superaría. Donde el modelo sea más fino que dos paredes, se mantiene macizo. El resultado es un grupo cuyas caras planas son caras sencillas, así que puede seguir modelándolo con {{ui:Empujar/tirar}}; una pieza curva vaciada sobre la cuadrícula fina suele tener demasiadas caras para ello y se convierte en malla, y la barra de estado indica cuál.

:::tip
En la mayoría de formas, el interior es el exterior desplazado hacia dentro exactamente el grosor de la pared. Donde las esquinas o las piezas finas lo hacen imposible, ModelCraft sigue el exterior a la distancia de la pared sobre una cuadrícula fina; la tarjeta indica entonces con qué precisión (con una fracción de milímetro).
:::

## Reparar

{{ui:Reparar}} examina la pieza seleccionada como lo hará el laminador de una impresora, corrige lo que puede corregir con seguridad y enumera cada corrección:

| Corrige | Qué significa |
|---|---|
| Triángulos sin área | se eliminan |
| Un triángulo dibujado dos veces | se conserva una copia; una cara dibujada espalda con espalda consigo misma (sin grosor) se elimina |
| Piezas sueltas de menos de 0.5 mm | se eliminan |
| Triángulos orientados al revés | se giran para coincidir con sus vecinos |
| Agujeros, planos o no | se cierran con un abanico de triángulos nuevos desde el centro de cada agujero |
| Una pieza del revés | se gira hacia fuera (un hueco dentro de otra pieza se deja como está: está pensado para mirar hacia dentro) |

{{ui:Arreglar las seguras}} hace todas ellas en un solo paso que {{key:Mod+Z}} deshace, y la barra de estado enumera cada corrección. La pieza corregida pasa a ser un grupo cuyas caras planas son caras sencillas. Si sigue sin cerrarse (queda algo bajo **Queda para usted**), o tendría demasiadas caras para un grupo, pasa a ser una malla: sus caras siguen siendo triángulos y las caras planas siguen viéndose planas. La barra de estado indica cuál. {{ui:Unir piezas solapadas}} funciona igual.

Lo que no puede corregirse con seguridad aparece en **Queda para usted** y se marca en morado en la vista, con {{ui:Mostrar}}:

- **Aristas donde se encuentran tres o más caras**: decida qué cara corresponde y borre las demás.
- **Una pieza que atraviesa a sí misma**: mueva o vuelva a dibujar esa parte. Consulte [Intersecar caras](topic:intersect).
- **Agujeros demasiado grandes o enredados para cerrarlos**: dibuje caras sobre ellos.
- **Piezas separadas que se solapan**: los laminadores las fusionan de todos modos. {{ui:Unir piezas solapadas}} las convierte en un único cuerpo cerrado (reconstruye las caras donde se encuentran, por lo que es un botón aparte que nunca se aplica por usted).

En los grupos de empujar/tirar también puede corregir uno a uno en {{ui:Información de entidad}} › {{ui:Mostrar problemas}} / {{ui:Corregir}}, lo que conserva las caras que dibujó. Consulte [Herramientas de sólidos](topic:solids).

Relacionado: [Preparar un modelo para impresión 3D](topic:print-3d) · [El estilo Principiante](topic:beginner) · [Todavía no disponible](topic:not-built-yet#3d-printing)
