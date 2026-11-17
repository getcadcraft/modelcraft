---
title: Preparar un modelo para impresión 3D
summary: Verificá que un modelo esté cerrado y que sus caras miren al lado correcto, revisá su tamaño, base y voladizos, corregí lo que esté mal, y descargalo como STL o 3MF para tu laminador.
keywords: impresión 3d, impresora, imprimir, laminador, stl, 3mf, estanco, cerrado, variedad, sólido, agujeros, al revés, voladizo, soportes, base, cama, milímetros, exportar, corregir, reparar, ahuecar, tamaño de cama, principiante, grosor de pared, herramientas de impresión
from: 948e19af
---

El laminador de una impresora 3D necesita una forma cerrada: sin agujeros, cada cara apuntando hacia afuera, y nada que se atraviese a sí mismo. {{ui:Exportar}} › {{ui:Verificar impresión 3D (STL o 3MF)…}} revisa exactamente eso antes de que descargues el archivo.

## Verificar y descargar

1. Seleccioná lo que querés imprimir: uno o más grupos o componentes, o algunas caras. Si no hay nada seleccionado, se imprime todo lo visible.
2. Clickeá {{ui:Exportar}} en el grupo {{ui:Archivo}}, después {{ui:Verificar impresión 3D (STL o 3MF)…}}.

   El diálogo empieza con una línea: "Listo para imprimir", cuántas cosas hay que corregir antes de imprimir, o cuántas hay que revisar primero. Cada problema tiene tres partes: qué está mal, por qué importa, y qué hacer. Después vienen el tamaño en milímetros, el volumen, la cantidad de triángulos y la cama de tu impresora.

3. Si el diálogo lista cosas para corregir, clickeá {{ui:Corregir lo que se pueda}} (ver abajo). La verificación se vuelve a correr sola.
4. Clickeá {{ui:Descargar 3MF}} o {{ui:Descargar STL}}.

Se imprime lo que ves: las caras ocultas, los grupos y componentes ocultos, y lo que esté en una etiqueta oculta quedan afuera. Los tamaños siempre van en milímetros, la unidad que esperan los laminadores, sea cual sea la unidad que muestre el modelo.

:::tip
Preferí 3MF si tu laminador lo lee: conserva los colores y las unidades. STL no tiene ninguna de las dos cosas, y los laminadores suponen milímetros.
:::

## Qué busca la verificación

Estos problemas detienen una impresión o la arruinan, y hacen que el diálogo diga "No listo para imprimir":

| Problema | Qué significa | Qué hacer |
|---|---|---|
| Una cara de un solo lado | Un agujero: un borde tiene una cara de un lado y nada del otro | Dibujá la cara que falta (una línea que cruce el hueco suele cerrarlo), o usá {{ui:Corregir}} (abajo) |
| Compartida por tres o más caras | Las caras se encuentran en una aleta o una pared dentro de un sólido | Borrá la cara interior |
| Caras que miran en sentidos opuestos | Algunas caras apuntan hacia adentro, otras hacia afuera | Seleccioná las caras que miran hacia adentro y clickeá {{ui:Cara ojejapova'ekue}} en {{ui:Información de entidad}} |
| Al revés | Una parte cerrada entera apunta hacia adentro | Seleccioná sus caras e invertilas |
| Se atraviesa a sí misma | Una parte se pliega a través de sí misma | {{ui:Editar}} › {{ui:Más}} › {{ui:Intersecar con modelo}}, después borrá lo que está adentro. Ver [Intersecar caras](topic:intersect) |

Estas son advertencias: el modelo se imprime, pero conviene mirarlas primero.

- **Las partes separadas se superponen**, o **se tocan cara a cara**: los laminadores suelen unirlas en una sola. Para un archivo más limpio, unilas con {{ui:Sólidos}} › {{ui:Unión}}. Ver [Herramientas de sólidos](topic:solids).
- **Nada queda plano abajo**: girá el modelo para que una cara apoye en la cama, o el laminador agregará soportes o una balsa.
- **Se inclina más de 45° desde la vertical**: esas caras necesitan soporte. El diálogo dice qué parte de la superficie lo necesita.
- **Menos de 1 mm de ancho**: probablemente se modeló en una unidad equivocada. Revisá la unidad en la barra de estado.

Una parte hueca (una cáscara cerrada dentro de otra) está bien: sus caras apuntan hacia el hueco, y su volumen se resta.

## Corregir los problemas

Debajo de **Dónde están los problemas**, el diálogo indica cada grupo o componente que tiene algo mal (las caras sueltas que no están en un grupo se listan como "Caras fuera de un grupo"), con lo que está mal en él. Un componente colocado varias veces se lista una sola vez: corregirlo corrige cada copia.

- {{ui:Mostrar}} abre ese grupo y selecciona los bordes y caras que están mal, para que se vean resaltados.
- {{ui:Corregir lo que se pueda}} corrige todos a la vez: cierra los agujeros cuyos bordes quedan planos, quita las caras dentro de la forma y los bordes sueltos, y da vuelta a las caras para que miren hacia afuera. Es un solo paso: {{key:Mod+Z}} lo deshace. La verificación se vuelve a correr y muestra lo que queda.

Lo que no puede corregir (un agujero cuyos bordes no quedan planos, una parte que se atraviesa a sí misma) queda en la lista con lo que hay que hacer a mano. {{ui:Reparar}} en **Herramientas de impresión** va más lejos: cierra los agujeros que no son planos, quita las piezas sueltas y las caras duplicadas, y lista cada corrección. Ver [Soportes, grosor de pared, ahuecado y reparación](topic:print-tools#repair). También podés corregir un grupo por vez: seleccionalo, y después usá {{ui:Mostrar problemas}} y {{ui:Corregir}} en {{ui:Información de entidad}}. Ver [Herramientas de sólidos](topic:solids).

## Una parte hueca

{{ui:Ahuecar}} en **Herramientas de impresión** ahueca una parte con el grosor de pared que indiques, con agujeros de drenaje donde clickees. Ver [Ahuecar](topic:print-tools#hollow).

También podés dibujar el hueco vos mismo: un grupo cerrado dentro de la parte, sin tocarla, con todas sus caras invertidas para que miren hacia el hueco. La verificación lo cuenta como hueco y le resta su volumen; no aparece como algo para corregir.

## La cama de tu impresora

Elegí el tamaño de la cama de tu impresora en {{ui:Configuración}} › {{ui:ModelCraft}} › {{ui:Cama de la impresora 3D}}. La verificación avisa cuando el modelo es más grande que la cama, en cualquiera de sus orientaciones. Ver [Configuración](topic:settings#3d-printer-bed).

## Herramientas de impresión

Debajo de los resultados del diálogo, **Herramientas de impresión** abre {{ui:Vista previa de soportes}} (dónde van los soportes y cuántos más o menos), {{ui:Grosor de pared}} (paredes demasiado finas para imprimir), {{ui:Ahuecar}} y {{ui:Reparar}}. Ver [Soportes, grosor de pared, ahuecado y reparación](topic:print-tools). {{ui:Dividir para imprimir}} corta un modelo demasiado grande para la cama en piezas con conectores y uniones numeradas: ver [Dividir un modelo grande para imprimir](topic:print-split).

## No se verifica

La verificación no lamina: los detalles diminutos que tu boquilla no puede dibujar y los soportes reales son trabajo de tu laminador. Ver [Todavía no está hecho](topic:not-built-yet#3d-printing).
