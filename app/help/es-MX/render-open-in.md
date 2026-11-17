---
title: Abra la escena en otro programa
summary: Guarde la escena como archivo USD o glTF para cualquier programa que los lea, o ábrala desde Studio en un programa de esta computadora.
keywords: abrir en, usd, gltf, glb, exportar, programa de renderizado, archviz, studio, usdview, enviar, entrega, paquete, carpeta de unreal
from: 812329d5
---

Elija una entrada **Abrir en** en la lista Motor de {{ui:Renderizar una imagen…}} para llevar la escena a otro programa. No regresa nada al modelo.

## Un archivo para cualquier programa

- El **archivo USD** guarda la escena como `.usdc` (o `.usdz` cuando el modelo lleva imágenes): el [mismo archivo que Guardar como USD](topic:usd), con materiales, lámparas y cámaras. Conserva las instancias y los valores exactos de los materiales. La mayoría de los renderizadores, motores de juego y visores leen USD.
- El **archivo glTF (.glb)** guarda el archivo glTF 2.0, más ligero, con materiales, texturas y lámparas; vea [Exportar un modelo para otros programas](topic:export-model) para los formatos que escribe ModelCraft.
- La **carpeta de proyecto de Unreal (.zip)** guarda la carpeta que escribe [Enviar la escena a un motor de juegos](topic:render-unreal), para un proyecto en cualquier computadora.

Los tres funcionan en el navegador y en Studio.

## En Studio: abrirla en un programa

Studio enumera los programas que encuentra en esta computadora capaces de abrir la escena: usdview si está en su ruta de búsqueda, y el programa propio de la computadora para ese tipo de archivo. Elija uno, elija USD o glTF donde lea ambos, y haga clic en {{ui:Renderizar}}. Studio escribe el paquete en una carpeta nueva dentro de Documentos (`CadCraft hand-off`; nada se sobrescribe, cada envío tiene su propia carpeta) e inicia el programa con ella, y luego indica dónde están los archivos.

| Programa | Lee mejor |
|---|---|
| usdview | USD |
| El programa propio de la computadora | Lo que la computadora tenga para ese tipo de archivo |

Studio solo inicia programas de esta lista fija; no ejecuta nada que la página pida por nombre, y nunca inicia un programa bajo la licencia GNU GPL (vea [Dibujar la imagen con otro programa](topic:render-other-program#programs-cadcraft-never-runs)). Cualquier programa que lea USD o glTF abre el archivo de **Un archivo para cualquier programa**, arriba.

:::note
Twinmotion, Enscape y otros programas de visualización no están en la lista: CadCraft no los ha probado y no hace afirmaciones sobre ellos. Un archivo glTF o USD de aquí es la vía de entrada.
:::
