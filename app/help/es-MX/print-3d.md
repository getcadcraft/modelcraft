---
title: Preparar un modelo para la impresión 3D
summary: Revise que un modelo esté cerrado y que sus caras miren en la dirección correcta, vea su tamaño, base y voladizos, corrija lo que esté mal, y descárguelo como STL o 3MF para su programa de corte.
keywords: impresión 3d, imprimir, impresora, impresión, programa de corte, stl, 3mf, hermético, cerrado, variedad, sólido, agujeros, al revés, voladizo, soportes, base, cama, milímetros, exportar, corregir, reparar, ahuecar, tamaño de cama, principiante, grosor de pared, herramientas de impresión
from: 948e19af
---

El programa de corte de una impresora 3D necesita una forma cerrada: sin agujeros, con cada cara apuntando hacia afuera y sin que nada se atraviese a sí mismo. {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}} revisa exactamente eso antes de descargar el archivo.

## Revisar y descargar

1. Seleccione lo que quiere imprimir: uno o más grupos o componentes, o algunas caras. Si no hay nada seleccionado, se imprime todo lo visible.
2. Haga clic en {{ui:Export}} en el grupo {{ui:File}}, y luego en {{ui:Check for 3D printing (STL or 3MF)…}}.

   El diálogo empieza con una línea: "Listo para imprimir", cuántas cosas hay que corregir antes de imprimir, o cuántas hay que revisar primero. Cada problema tiene tres partes: qué está mal, por qué importa y qué hacer. Luego vienen el tamaño en milímetros, el volumen, el número de triángulos y la cama de su impresora.

3. Si el diálogo lista cosas por corregir, haga clic en {{ui:Fix what can be fixed}} (vea abajo). La revisión se vuelve a ejecutar sola.
4. Haga clic en {{ui:Download 3MF}} o {{ui:Download STL}}.

Se imprime lo que se ve: las caras ocultas, los grupos y componentes ocultos, y lo que está en una etiqueta oculta se omiten. Los tamaños siempre están en milímetros, la unidad que esperan los programas de corte, sin importar la unidad que muestre el modelo.

:::tip
Prefiera 3MF cuando su programa de corte lo lea: conserva los colores y las unidades. STL no tiene ninguna de las dos cosas, y los programas de corte asumen milímetros.
:::

## Lo que revisa la revisión

Estos problemas impiden una impresión o la arruinan, y hacen que el diálogo diga "No listo para imprimir":

| Problema | Qué significa | Qué hacer |
|---|---|---|
| Una cara de un solo lado | Un agujero: una arista tiene una cara de un lado y nada del otro | Dibuje la cara que falta (una línea a través del hueco suele cerrarla), o use {{ui:Fix}} (abajo) |
| Compartida por tres o más caras | Las caras se unen en una aleta o en una pared dentro de un sólido | Borre la cara interior |
| Caras que miran en direcciones opuestas | Algunas caras apuntan hacia dentro y otras hacia afuera | Seleccione las caras que miran hacia dentro y haga clic en {{ui:Reverse face}} en {{ui:Entity info}} |
| Al revés | Una pieza cerrada completa apunta hacia dentro | Seleccione sus caras e invíertalas |
| Se atraviesa a sí misma | Una pieza se pliega a través de sí misma | {{ui:Edit}} › {{ui:More}} › {{ui:Intersect with model}}, y luego borre lo que está dentro. Vea [Intersecar caras](topic:intersect) |

Estas son advertencias: el modelo se imprime, pero conviene revisarlo primero.

- **Piezas separadas que se superponen**, o que **se tocan cara a cara**: los programas de corte suelen fusionarlas en una. Para un archivo más limpio, únalas con {{ui:Solids}} › {{ui:Union}}. Vea [Herramientas de sólidos](topic:solids).
- **Nada queda plano en la base**: gire el modelo para que una cara descanse sobre la cama, o el programa de corte agregará soportes o una balsa.
- **Se inclina más de 45° desde la vertical**: esas caras necesitan soporte. El diálogo indica qué proporción de la superficie lo necesita.
- **Menos de 1 mm de ancho**: probablemente se modeló en una unidad equivocada. Revise la unidad en la barra de estado.

Una pieza hueca (una cáscara cerrada dentro de otra) está bien: sus caras miran hacia el hueco, y su volumen se resta.

## Corregir los problemas

Bajo **Dónde están los problemas**, el diálogo nombra cada grupo o componente que tiene algo mal (las caras sueltas que no están en un grupo aparecen como "Caras fuera de un grupo"), con lo que está mal en él. Un componente colocado varias veces aparece una sola vez: corregirlo corrige todas las copias.

- {{ui:Show}} abre ese grupo y selecciona las aristas y caras que están mal, para que se vean resaltadas.
- {{ui:Fix what can be fixed}} corrige todas a la vez: cierra los agujeros cuyas aristas quedan planas, quita las caras dentro de la forma y las aristas sueltas, y voltea las caras para que miren hacia afuera. Es un solo paso: {{key:Mod+Z}} lo deshace. La revisión se vuelve a ejecutar y muestra lo que queda.

Lo que no puede corregir (un agujero cuyas aristas no quedan planas, una pieza que se atraviesa a sí misma) queda en la lista con lo que debe hacerse a mano. {{ui:Repair}} bajo **Herramientas de impresión** va más allá: cierra los agujeros que no son planos, quita piezas sueltas y caras duplicadas, y lista cada corrección. Vea [Soportes, grosor de pared, ahuecado y reparación](topic:print-tools#repair). También puede corregir un grupo a la vez: selecciónelo y use {{ui:Show problems}} y {{ui:Fix}} en {{ui:Entity info}}. Vea [Herramientas de sólidos](topic:solids).

## Una pieza hueca

{{ui:Hollow}} bajo **Herramientas de impresión** ahueca una pieza al grosor de pared que indique, con agujeros de drenaje donde haga clic. Vea [Ahuecar](topic:print-tools#hollow).

También puede dibujar el hueco usted mismo: un grupo cerrado dentro de la pieza, sin tocarla, con todas sus caras invertidas para que miren hacia el hueco. La revisión lo cuenta como hueco y resta su volumen; no aparece como algo por corregir.

## La cama de su impresora

Elija el tamaño de la cama de su impresora en {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:3D printer bed}}. La revisión advierte entonces cuando el modelo es más grande que la cama, en cualquiera de sus giros. Vea [Configuración](topic:settings#3d-printer-bed).

## Herramientas de impresión

Bajo los hallazgos del diálogo, **Herramientas de impresión** abre {{ui:Supports preview}} (dónde van los soportes y cuánto aproximadamente), {{ui:Wall thickness}} (paredes demasiado delgadas para imprimir), {{ui:Hollow}} y {{ui:Repair}}. Vea [Soportes, grosor de pared, ahuecado y reparación](topic:print-tools). {{ui:Split for printing}} corta un modelo demasiado grande para la cama en piezas con conectores y uniones numeradas: vea [Dividir un modelo grande para imprimirlo](topic:print-split).

## No se revisa

La revisión no hace el corte: los detalles demasiado pequeños para que su boquilla los dibuje y los soportes reales son trabajo de su programa de corte. Vea [Todavía no disponible](topic:not-built-yet#3d-printing).
