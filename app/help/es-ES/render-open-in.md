---
title: Abrir la escena en otro programa
summary: Guarde la escena como archivo USD o glTF para cualquier programa que los lea, o ábrala desde Studio en un programa de este ordenador.
keywords: abrir en, usd, gltf, glb, exportar, programa de renderizado, archviz, studio, usdview, enviar, entrega, paquete, carpeta unreal
from: 812329d5
---

Elija una entrada **Abrir en** en la lista Motor de {{ui:Renderizar una imagen…}} para llevar la escena a otro programa. Nada vuelve al modelo.

## Un archivo para cualquier programa

- **Archivo USD** guarda la escena como `.usdc` (o `.usdz` cuando el modelo lleva imágenes): el [mismo archivo que Guardar como USD](topic:usd), con materiales, lámparas y cámaras. Conserva las instancias y los valores exactos de los materiales. La mayoría de renderizadores, motores de videojuegos y visores leen USD.
- **Archivo glTF (.glb)** guarda el archivo glTF 2.0, más ligero, con materiales, texturas y lámparas; consulte [Exportar un modelo para otros programas](topic:export-model) para los formatos que escribe ModelCraft.

- **Carpeta de proyecto de Unreal (.zip)** guarda la carpeta que escribe [Enviar la escena a un motor de videojuegos](topic:render-unreal), para un proyecto en cualquier ordenador.

Las tres funcionan en el navegador y en Studio.

## En Studio: abrirla en un programa

Studio enumera los programas que encuentra en este ordenador capaces de abrir la escena: usdview si está en su ruta de búsqueda, y el programa propio del ordenador para ese tipo de archivo. Elija uno, elija USD o glTF cuando lea ambos, y haga clic en {{ui:Renderizar}}. Studio escribe el paquete en una carpeta nueva dentro de Documentos (`CadCraft hand-off`; no se sobrescribe nada, cada envío tiene su propia carpeta) y arranca el programa con ella, y después indica dónde están los archivos.

| Programa | Lee mejor |
|---|---|
| usdview | USD |
| El programa propio del ordenador | Lo que tenga el ordenador para ese tipo de archivo |

Studio solo inicia programas de esta lista fija; no ejecuta nada que la página pida por nombre, y nunca inicia un programa bajo la licencia GNU GPL (consulte [Dibujar la imagen con otro programa](topic:render-other-program#programs-cadcraft-never-runs)). Cualquier programa que lea USD o glTF abre el archivo de **Un archivo para cualquier programa** de arriba.

:::note
Twinmotion, Enscape y otros programas de visualización no están en la lista: CadCraft no los ha comprobado y no afirma nada sobre ellos. Un archivo glTF o USD desde aquí es la vía de entrada.
:::
