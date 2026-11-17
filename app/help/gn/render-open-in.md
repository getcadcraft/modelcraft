---
title: Abrir la escena en otro programa
summary: Guardá la escena como archivo USD o glTF para cualquier programa que los lea, o abrila desde Studio en un programa de esta computadora.
keywords: abrir en, usd, gltf, glb, exportar, programa de render, archviz, studio, usdview, enviar, entrega, paquete, carpeta unreal
from: 812329d5
---

Elegí una entrada **Abrir en** en la lista Motor de {{ui:Render de una imagen…}} para llevar la escena a otro programa. Nada vuelve al modelo.

## Un archivo para cualquier programa

- **Archivo USD** guarda la escena como `.usdc` (o `.usdz` cuando el modelo tiene imágenes): el [mismo archivo que Guardar como USD](topic:usd), con materiales, lámparas y cámaras. Conserva las instancias y los valores exactos de material. La mayoría de los renderizadores, motores de juego y visores leen USD.
- **Archivo glTF (.glb)** guarda el archivo glTF 2.0, más liviano, con materiales, texturas y lámparas; ver [Exportar un modelo para otros programas](topic:export-model) para los formatos que escribe ModelCraft.

- **Carpeta de proyecto de Unreal (.zip)** guarda la carpeta que escribe [Enviar la escena a un motor de juego](topic:render-unreal), para un proyecto en cualquier computadora.

Las tres funcionan en el navegador y en Studio.

## En Studio: abrirla en un programa

Studio lista los programas que encuentra en esta computadora y que pueden abrir la escena: usdview si está en tu ruta de búsqueda, y el programa propio de la computadora para ese tipo de archivo. Elegí uno, elegí USD o glTF donde lee ambos, y hacé clic en {{ui:Render}}. Studio escribe el paquete en una carpeta nueva dentro de Documentos (`CadCraft hand-off`; no se sobrescribe nada, cada envío tiene su propia carpeta) y arranca el programa con ella, luego indica dónde están los archivos.

| Programa | Lee mejor |
|---|---|
| usdview | USD |
| El programa propio de la computadora | Lo que la computadora tenga para ese tipo de archivo |

Studio solo arranca programas de esta lista fija; no ejecuta nada que la página pida por nombre, y nunca arranca un programa bajo la licencia GNU GPL (ver [Dibujar la imagen con otro programa](topic:render-other-program#programs-cadcraft-never-runs)). Cualquier programa que lea USD o glTF abre el archivo de **Archivo para cualquier programa** de arriba.

:::note
Twinmotion, Enscape y otros programas de visualización no están en la lista: CadCraft no los probó y no afirma nada sobre ellos. Un archivo glTF o USD desde aquí es la vía de entrada.
:::
