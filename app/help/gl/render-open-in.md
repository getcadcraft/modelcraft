---
title: Abrir a escena noutro programa
summary: Gardar a escena como ficheiro USD ou glTF para calquera programa que os lea, ou abrila desde Studio nun programa deste ordenador.
keywords: abrir en, usd, gltf, glb, exportar, programa de render, archviz, studio, usdview, enviar, entrega, paquete, cartafol unreal
from: 812329d5
---

Escolla unha entrada **Abrir en** na lista Motor de {{ui:Renderizar unha imaxe…}} para levar a escena a outro programa. Nada volve ao modelo.

## Un ficheiro para calquera programa

- **Ficheiro USD** garda a escena como `.usdc` (ou `.usdz` cando o modelo leva imaxes): o [mesmo ficheiro que Gardar como USD](topic:usd), con materiais, lámpadas e cámaras. Conserva as instancias e os valores exactos dos materiais. A maioría dos renderizadores, motores de xogos e visualizadores len USD.
- **Ficheiro glTF (.glb)** garda o ficheiro glTF 2.0, máis lixeiro, con materiais, texturas e lámpadas; vexa [Exportar un modelo para outros programas](topic:export-model) para os formatos que escribe ModelCraft.

- **Cartafol de proxecto Unreal (.zip)** garda o cartafol que escribe [Enviar a escena a un motor de xogos](topic:render-unreal), para un proxecto en calquera ordenador.

Os tres funcionan no navegador e en Studio.

## En Studio: abrila nun programa

Studio lista os programas que atopa neste ordenador e que poden abrir a escena: usdview se está na súa ruta de busca, e o programa propio do ordenador para o tipo de ficheiro. Escolla un, escolla USD ou glTF onde lee os dous, e faga clic en {{ui:Renderizar}}. Studio escribe o paquete nun cartafol novo en Documentos (`CadCraft hand-off`; nada se sobrescribe, cada envío ten o seu cartafol) e arranca o programa nel, e logo indica onde están os ficheiros.

| Programa | Lee mellor |
|---|---|
| usdview | USD |
| O programa propio do ordenador | Calquera que o ordenador teña para o tipo de ficheiro |

Studio só arranca programas desta lista fixa; non executa nada que a páxina pida por nome, e nunca arranca un programa baixo a licenza GNU GPL (vexa [Debuxar a imaxe con outro programa](topic:render-other-program#programs-cadcraft-never-runs)). Calquera programa que lea USD ou glTF abre o ficheiro desde **Un ficheiro para calquera programa** de arriba.

:::note
Twinmotion, Enscape e outros programas de visualización non están na lista: CadCraft non os comprobou e non fai ningunha afirmación sobre eles. Un ficheiro glTF ou USD desde aquí é a vía de entrada.
:::
