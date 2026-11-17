---
title: Enviar la volumetría a BimCraft
summary: Pase las masas de empuje y tracción a BimCraft como opciones de volumetría, con pisos, huella, área bruta de piso y volumen calculados a partir de cada sólido.
keywords: volumetría, masa, concepto, opciones, bimcraft, ifc, bim, empujar tirar, pisos, niveles, área bruta de piso, huella, volumen, enviar, entregar, masa de edificio, etapa 2
from: 73c51f3f
---

## Lo que hará

Convierta los bloques que modeló con empujar/tirar en opciones de volumetría que BimCraft entiende, para que el concepto siga como un modelo de edificio.

## Antes de empezar

Haga de cada masa un **grupo** o **componente** y póngale nombre. Cada una se convierte en una opción. La geometría suelta no se envía.

## Enviarla

1. Designe los grupos que desea enviar. Si no hay nada designado, se envían todos los grupos y componentes de nivel superior.
2. Elija {{ui:Export}} y luego {{ui:Massing to BimCraft…}}.
3. Escriba el {{ui:Name of the option set}} y la {{ui:Floor height}}.
4. Revise la lista: los pisos, la huella, el área bruta de piso y el volumen de cada opción.
5. Elija **Enviar a BimCraft** para abrir BimCraft en una pestaña nueva con las opciones, o {{ui:Save as IFC}} para descargar el archivo y abrirlo allí usted mismo.

En BimCraft, las opciones aparecen en "Opciones de volumetría en el modelo", donde una puede marcarse como la opción actual y desarrollarse en muros y pisos.

## Cómo se convierte un sólido en masa

- **Los pisos** son la altura del sólido dividida entre la altura de piso, redondeada, y por lo menos uno. Luego los pisos reparten la altura del sólido por igual, así que un bloque de 10 m con pisos de 3 m tiene 3 pisos de 3.33 m.
- **El área de un piso** es el área de la sección horizontal propia del sólido a la altura de ese piso. Un bloque que se retrae tiene pisos superiores más pequeños, y el área bruta de piso es la suma de ellos.
- **La huella** es el contorno de la sección justo encima de la base del sólido.
- **El volumen** es el del propio sólido.

En el archivo IFC, cada opción es un elemento proxy de edificio (la huella elevada a la altura del sólido), con un espacio por piso que lleva el área bruta de ese piso. Todas las opciones comparten un mismo edificio, con tantos niveles como tenga la opción más alta.

## Formas simplificadas

Un bloque simple, recto y vertical se envía tal como se modeló. Cualquier otra forma también se envía, y la lista indica por qué su forma se simplifica:

- **Sus pisos no tienen todos el tamaño de su base** (se retrae o tiene pendiente): la masa en BimCraft es el contorno de la base elevado a la altura total, pero las áreas de piso y el volumen son los del propio sólido.
- **El sólido no está cerrado**: los pisos cuya sección no puede cerrarse no se miden y cuentan como nada. Cierre el sólido ({{ui:Entity info}} debe indicar "Sólido: Sí") para obtener cifras completas.
- **Su base tiene más de un contorno**: se usa el más grande como huella.

## Conviene saber

- {{ui:IFC for BimCraft (.ifc)}} es una exportación distinta: envía solo formas y nombres, sin pisos ni áreas.
- No se sube nada. El archivo se entrega a la pestaña de BimCraft en esta computadora.
