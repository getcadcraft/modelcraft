---
title: Preparar un modelo para la impresión 3D
summary: Compruebe que un modelo está cerrado y que sus caras miran en la dirección correcta, vea su tamaño, base y voladizos, corrija lo que esté mal, y descárguelo como STL o 3MF para su slicer.
keywords: impresión 3d, imprimir, impresora, impresión, slicer, stl, 3mf, estanco, cerrado, variedad, sólido, agujeros, del revés, voladizo, soportes, base, cama, milímetros, exportar, corregir, reparar, vaciar, tamaño de cama, principiante, grosor de pared, herramientas de impresión
from: 948e19af
---

Un slicer necesita una forma cerrada: sin agujeros, con cada cara apuntando hacia fuera y sin atravesarse a sí misma. {{ui:Exportar}} › {{ui:Revisar para impresión 3D (STL o 3MF)…}} comprueba exactamente eso antes de descargar el archivo.

## Revisar y descargar

1. Seleccione lo que quiere imprimir: uno o varios grupos o componentes, o algunas caras. Si no hay nada seleccionado, se imprime todo lo visible.
2. Haga clic en {{ui:Exportar}} en el grupo {{ui:Archivo}}, y después en {{ui:Revisar para impresión 3D (STL o 3MF)…}}.

   El cuadro empieza con una línea: «Listo para imprimir», cuántas cosas hay que corregir antes de imprimir, o cuántas hay que revisar primero. Cada problema tiene tres partes: qué está mal, por qué importa y qué hacer. Después vienen el tamaño en milímetros, el volumen, el número de triángulos y la cama de su impresora.

3. Si el cuadro enumera cosas que corregir, haga clic en {{ui:Corregir lo que se pueda}} (véase abajo). La comprobación se repite sola.
4. Haga clic en {{ui:Descargar 3MF}} o {{ui:Descargar STL}}.

Lo que se imprime es lo que ve: las caras ocultas, los grupos y componentes ocultos, y lo que esté en una etiqueta oculta quedan fuera. Los tamaños siempre están en milímetros, la unidad que esperan los slicers, sea cual sea la unidad que muestre el modelo.

:::tip
Prefiera 3MF si su slicer lo lee: conserva los colores y las unidades. STL no tiene ninguno de los dos, y los slicers suponen milímetros.
:::

## Qué busca la comprobación

Estos problemas impiden una impresión o la estropean, y hacen que el cuadro diga «No listo para imprimir»:

| Problema | Qué significa | Qué hacer |
|---|---|---|
| Una cara en un solo lado | Un agujero: una arista tiene una cara a un lado y nada al otro | Dibuje la cara que falta (una línea a través del hueco suele cerrarlo), o use {{ui:Corregir}} (abajo) |
| Compartida por tres o más caras | Las caras se unen en una aleta o en un muro dentro de un sólido | Borre la cara interior |
| Caras que miran en sentidos opuestos | Algunas caras apuntan hacia dentro y otras hacia fuera | Seleccione las caras que miran hacia dentro y haga clic en {{ui:Invertir cara}} en {{ui:Información de entidad}} |
| Del revés | Una pieza cerrada entera apunta hacia dentro | Seleccione sus caras e invíertalas |
| Se atraviesa a sí misma | Una pieza se pliega a través de sí misma | {{ui:Edición}} › {{ui:Más}} › {{ui:Intersecar con el modelo}}, y después borre lo que hay dentro. Véase [Intersecar caras](topic:intersect) |

Estas son advertencias: el modelo se imprime, pero conviene echarle un vistazo primero.

- **Piezas separadas se solapan** o **se tocan cara a cara**: los slicers suelen fusionarlas en una. Para un archivo más limpio, únalas con {{ui:Sólidos}} › {{ui:Unión}}. Véase [Herramientas de sólidos](topic:solids).
- **Nada apoya plano en la base**: gire el modelo para que una cara descanse sobre la cama, o el slicer añadirá soportes o una balsa.
- **Se inclina más de 45° desde la vertical**: esas caras necesitan soporte. El cuadro indica qué parte de la superficie lo necesita.
- **Menos de 1 mm de ancho**: probablemente modelado en una unidad incorrecta. Compruebe la unidad en la barra de estado.

Una pieza hueca (una cáscara cerrada dentro de otra) es correcta: sus caras apuntan hacia el hueco, y su volumen se resta.

## Corregir los problemas

Bajo **Dónde están los problemas**, el cuadro nombra cada grupo o componente que tiene algo mal (las caras sueltas que no están en un grupo aparecen como «Caras fuera de un grupo»), con lo que está mal en él. Un componente colocado varias veces aparece una sola vez: corregirlo corrige todas las copias.

- {{ui:Mostrar}} abre ese grupo y selecciona las aristas y caras que están mal, para que aparezcan resaltadas.
- {{ui:Corregir lo que se pueda}} corrige todas a la vez: cierra los agujeros cuyas aristas están planas, elimina las caras dentro de la forma y las aristas sueltas, y gira las caras hacia fuera. Es un solo paso: {{key:Mod+Z}} lo deshace. La comprobación se repite entonces y muestra lo que queda.

Lo que no puede corregir (un agujero cuyas aristas no están planas, una pieza que se atraviesa a sí misma) permanece en la lista con lo que debe hacerse a mano. {{ui:Reparar}} bajo **Herramientas de impresión** va más allá: cierra agujeros que no son planos, elimina piezas sueltas y caras duplicadas, y enumera cada corrección. Véase [Soportes, grosor de pared, vaciado y reparación](topic:print-tools#repair). También puede corregir un grupo cada vez: selecciónelo y use {{ui:Mostrar problemas}} y {{ui:Corregir}} en {{ui:Información de entidad}}. Véase [Herramientas de sólidos](topic:solids).

## Una pieza hueca

{{ui:Vaciar}} bajo **Herramientas de impresión** vacía una pieza hasta el grosor de pared que indique, con agujeros de drenaje donde haga clic. Véase [Vaciar](topic:print-tools#hollow).

También puede dibujar el hueco usted mismo: un grupo cerrado dentro de la pieza, sin tocarla, con todas sus caras invertidas para que miren hacia el hueco. La comprobación lo cuenta como hueco y resta su volumen; no aparece como algo que corregir.

## La cama de su impresora

Elija el tamaño de cama de su impresora en {{ui:Configuración}} › {{ui:ModelCraft}} › {{ui:Cama de la impresora 3D}}. La comprobación avisa entonces cuando el modelo es mayor que la cama, girado en cualquiera de los sentidos. Véase [Configuración](topic:settings#3d-printer-bed).

## Herramientas de impresión

Bajo los resultados del cuadro, **Herramientas de impresión** abre {{ui:Vista previa de soportes}} (dónde van los soportes y aproximadamente cuántos), {{ui:Grosor de pared}} (paredes demasiado finas para imprimir), {{ui:Vaciar}} y {{ui:Reparar}}. Véase [Soportes, grosor de pared, vaciado y reparación](topic:print-tools). {{ui:Dividir para imprimir}} corta un modelo demasiado grande para la cama en piezas con conectores y uniones numeradas: véase [Dividir un modelo grande para imprimir](topic:print-split).

## No se comprueba

La comprobación no lamina: los detalles diminutos que su boquilla no puede dibujar y los soportes reales son competencia de su slicer. Véase [Todavía no disponible](topic:not-built-yet#3d-printing).
