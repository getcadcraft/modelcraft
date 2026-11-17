---
title: Debuxar a imaxe con outro programa
summary: O noso trazador de camiños debuxa a imaxe de Renderizar; outro programa só pode debuxala a través dun complemento de motor de render en CadCraft Studio. Que se leva e por que non se ofrecen algúns programas.
keywords: render, motor, programa externo, motor de complemento, studio, segundo plano, cola, usd, gltf, debuxado por, blender, gpl
from: 150f94f1
---

A imaxe de {{ui:Renderizar unha imaxe…}} é debuxada polos **nosos motores**: Rápido e o Trazador de camiños, no navegador e en CadCraft Studio. Outro programa só pode debuxala cando un **complemento de motor de render** o traia: vexa [Engadir un motor de render cun complemento](topic:render-engine-addons). Para levar a escena a outro programa e seguir traballando nel, use [Abrir a escena noutro programa](topic:render-open-in) ou [Enviar a escena a un motor de xogos](topic:render-unreal).

## Debuxar unha imaxe co motor dun complemento

1. Active o complemento en Configuración › Complementos. O seu motor aparece na lista Motor de {{ui:Renderizar unha imaxe…}}.
2. Escóllao. Os seus propios axustes móstranse baixo a lista Motor.
3. Faga clic en {{ui:Renderizar}}. En Studio, a primeira vez que un complemento executa un programa, Studio pregúntalle no seu propio diálogo. O progreso mostrase mentres debuxa; {{ui:Parar}} o detén. A imaxe aparece marcada co motor que a debuxou.

Un motor escrito en JavaScript funciona tamén no navegador. Un motor que executa un programa neste ordenador só funciona en Studio; no navegador aparece como un ficheiro para gardar.

## O que se leva

O motor recibe un **paquete**: o modelo como ficheiro USD (e un ficheiro glTF cando o pide), e un ficheiro de axustes cos valores exactos dos materiais, o sol e o ceo, cada lámpada acesa coa súa potencia e perfil de luz, a cámara e a exposición. Cada programa ilumina, tonifica e toma mostras á súa maneira, así que as imaxes son parecidas en cámara, sol, lámpadas e exposición, pero non píxel a píxel.

## Programas que CadCraft nunca executa

CadCraft nunca arranca un programa baixo a licenza GNU GPL, e nunca o lista como motor nin como destino de Abrir en. Blender é un deles, así que non está na lista Motor. Un ficheiro USD ou glTF gardado desde {{ui:Renderizar unha imaxe…}} aínda se abre nel como en calquera programa que lea eses ficheiros.

:::note
As cámaras de panorama e estéreo e unha imaxe de ceo (usanse as cores do ceo) non se levan a outro programa. Nada feito noutro programa volve ao modelo.
:::
