---
title: Guardar, abrir y exportar USD
summary: Guarde todo el modelo como USD (.usda, .usdc o .usdz) sin perder nada, vuelva a abrirlo e importe escenas USD de otros programas 3D.
keywords: usd, usda, usdc, usdz, openusd, descripción universal de escenas, guardar como, exportar, importar, ensamblaje de escenas, archviz, openpbr, materialx, paquete
from: 73d299f9
---

USD es un formato de escena que comparten muchos programas 3D, de render y de archviz. ModelCraft lo escribe y lo lee. `.modelcraft` sigue siendo el formato que escribe {{ui:Guardar}}; USD es una opción en {{ui:Guardar como}}.

## Guardar como USD

1. Elija {{ui:Guardar como}} en el grupo {{ui:Archivo}} (o pulse {{key:Mod+Shift+S}}).
2. Elija el formato: {{ui:Texto (.usda)}} (legible, bueno para control de versiones), {{ui:Binario (.usdc)}} (el más pequeño y rápido) o {{ui:Paquete (.usdz)}} (un solo archivo con las texturas dentro).
3. El archivo se descarga (en la aplicación de escritorio, usted elige dónde se guarda).

Las mismas opciones están en {{ui:Exportar}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## No se pierde nada

Abra un archivo USD que guardó ModelCraft y recupera el modelo exactamente: caras con sus huecos, aristas suaves y ocultas, curvas, grupos y componentes, etiquetas, escenas, cotas, guías, planos de sección, lámparas, texturas importadas y la vista. Otros programas ven el mismo modelo como mallas, grupos, prototipos para componentes, materiales, lámparas y cámaras.

:::note
Si otro programa cambia la geometría de un grupo o componente, ModelCraft abre esa parte como malla con el cambio conservado, e indica cuántas partes leyó así. Una colocación movida o eliminada en otro programa sigue movida o eliminada.
:::

## Abrir o importar un USD de otra persona

- {{ui:Abrir}} un archivo `.usd`, `.usda`, `.usdc` o `.usdz` para iniciar un modelo a partir de él.
- {{ui:Importar}} uno para agregarlo al modelo abierto. Suelte junto con él los archivos a los que hace referencia (otras capas, texturas).

Las mallas se importan con sus normales, coordenadas UV y colores; la geometría compartida, como componentes; los materiales, como colores de pintura; las lámparas, como lámparas, y las cámaras, como escenas. Todo en metros y con Z hacia arriba, sin importar las unidades ni el eje vertical del archivo.

## Todavía no

La animación, los esqueletos y los grafos de nodos de MaterialX aún no se leen ni se escriben como USD. Las animaciones y los materiales de nodos propios de ModelCraft se conservan en un archivo USD que guardó, para que ModelCraft lo vuelva a abrir, pero otros programas no los ven. Las capas a las que hace referencia un archivo y que ModelCraft no puede leer (por ejemplo, un documento MaterialX) se omiten con una nota.
