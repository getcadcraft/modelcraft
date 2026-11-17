---
title: Enviar la volumetría a BimCraft
summary: Envíe a BimCraft los volúmenes modelados con empujar/tirar como opciones de volumetría, con plantas, huella, superficie bruta de planta y volumen calculados a partir de cada sólido.
keywords: volumetría, masa, concepto, opciones, bimcraft, ifc, bim, empujar tirar, plantas, pisos, superficie bruta de planta, huella, volumen, enviar, entregar, masa del edificio, etapa 2
from: 73c51f3f
---

## Qué hará

Convierta los bloques que modeló con empujar/tirar en opciones de volumetría que BimCraft entiende, para que el concepto continúe como modelo de edificio.

## Antes de empezar

Haga que cada masa sea un **grupo** o un **componente** y póngale nombre. Cada una se convierte en una opción. La geometría suelta no se envía.

## Enviarla

1. Seleccione los grupos que quiere enviar. Sin selección, se envían todos los grupos y componentes de primer nivel.
2. Elija {{ui:Exportar}} y después {{ui:Volumetría a BimCraft…}}.
3. Escriba el {{ui:Nombre del conjunto de opciones}} y la {{ui:Altura de planta}}.
4. Revise la lista: las plantas, la huella, la superficie bruta de planta y el volumen de cada opción.
5. Elija **Enviar a BimCraft** para abrir BimCraft en una pestaña nueva con las opciones, o {{ui:Guardar como IFC}} para descargar el archivo y abrirlo allí usted mismo.

En BimCraft, las opciones aparecen en "Opciones de volumetría en el modelo", donde una puede convertirse en la opción actual y desarrollarse en muros y forjados.

## Cómo se convierte un sólido en masa

- **Las plantas** son la altura del sólido dividida entre la altura de planta, redondeada, y como mínimo una. Después, las plantas reparten la altura del sólido por igual, así que un bloque de 10 m con plantas de 3 m tiene 3 plantas de 3.33 m.
- **La superficie de una planta** es el área de la sección horizontal propia del sólido a la altura de esa planta. Un bloque que retrocede tiene plantas superiores más pequeñas, y la superficie bruta de planta es su suma.
- **La huella** es el contorno de la sección justo encima de la base del sólido.
- **El volumen** es el propio del sólido.

En el archivo IFC, cada opción es un elemento proxy de edificio (la huella elevada a la altura del sólido) con un espacio por planta que lleva la superficie bruta de esa planta. Todas las opciones comparten un edificio, con tantas plantas como tenga la opción más alta.

## Formas simplificadas

Un bloque sencillo y vertical se envía tal como lo modeló. Cualquier otra forma también se envía, y la lista indica por qué su forma se simplifica:

- **Sus plantas no son todas del tamaño de su base** (retrocede o tiene pendiente): la masa en BimCraft es el contorno de la base elevado a la altura total, pero las superficies de planta y el volumen son los propios del sólido.
- **El sólido no está cerrado**: las plantas cuya sección no puede cerrarse no se miden y cuentan como nada. Cierre el sólido ({{ui:Información de entidad}} indica "Sólido: Sí") para obtener cifras completas.
- **Su base tiene más de un contorno**: se usa el mayor como huella.

## Conviene saber

- {{ui:IFC para BimCraft (.ifc)}} es una exportación distinta: envía solo formas y nombres, sin plantas ni superficies.
- No se sube nada. El archivo se entrega a la pestaña de BimCraft de este equipo.
