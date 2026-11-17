---
title: Mallas
summary: Convierta un grupo o componente en una malla —el tipo de objeto con el que modelan las herramientas de contenido 3D— y de nuevo en geometría de empujar/tirar.
keywords: malla, mallas, polígono, polígonos, n-gon, cuadrilátero, cuadriláteros, quad, vértices, half-edge, uv, uvs, convertir, convertir en malla, convertir en geometría, subdivisión, escultura, modelado, contenido 3d
from: e32363e8
---

ModelCraft tiene dos tipos de geometría. La **geometría de empujar/tirar** es lo que dibuja: caras planas que se unen, se cortan entre sí y se reparan. Una **malla** es el tipo de objeto con el que modelan las herramientas de contenido 3D: caras con cualquier número de esquinas, cada esquina con sus propias coordenadas de textura (UV), normales y colores, y cada vértice con valores como los pesos. Una malla se coloca como un grupo o componente, y convive con la geometría de empujar/tirar en el mismo modelo.

## Convertir un grupo o componente en malla

1. Seleccione un grupo o componente.
2. En {{ui:Información de entidad}}, haga clic en {{ui:Convertir en malla}}.

Sus caras pasan a ser las caras de la malla (una cara con agujeros entra como triángulos); las aristas duras siguen afiladas, las aristas blandas sombrean de forma suave, y la pintura, los materiales y las texturas importadas se mantienen en sus caras. Los grupos y componentes que contiene se unen en una sola malla. Las aristas sueltas se omiten: una malla conserva caras. Cada colocación de un componente muestra la malla. Es un solo paso de deshacer.

## Qué muestra Información de entidad

Seleccione una malla para ver sus caras, vértices y aristas, si es un sólido cerrado (y su volumen), y su tamaño tal como está colocada. Una malla con aristas abiertas indica cuántas.

## Convertir una malla de nuevo en geometría de empujar/tirar

Seleccione la malla y haga clic en {{ui:Convertir en geometría}}. Las caras planas vuelven como estaban; una cara cuyas esquinas no están en un mismo plano vuelve como triángulos. Las aristas afiladas son duras, y las demás, blandas. {{ui:Descomponer}} pone las caras de una malla directamente en el grupo que la rodea.

## Conviene saber

- Haga doble clic en una malla para [editar sus vértices, aristas y caras](topic:mesh-edit) en el espacio de trabajo Malla. Conviértala en geometría para editarla con empujar/tirar; muévala, gírela, escálela, cópiela, pinte, oculte y etiquétela como cualquier grupo.
- Las exportaciones, la impresión 3D, los renderizados y la RV ven una malla como sus caras.
- Un archivo que contiene una malla se guarda como una versión más nueva del archivo `.modelcraft`, así que ModelCraft 0.6 y anteriores no pueden abrirlo; los archivos sin malla se abren en ellas como antes. Convierta las mallas en geometría antes de compartir un archivo con alguien que use una versión anterior.
- Deshacer en una malla conserva solo lo que cambió en cada paso, así que incluso una malla muy grande se deshace con rapidez.

Vea también [Grupos y componentes](topic:groups-components) y [Todavía no disponible](topic:not-built-yet).
