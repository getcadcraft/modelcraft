---
title: Enviar la escena a un motor de juego
summary: Studio puede escribir la escena en un proyecto de Unreal Engine y mantenerla al día en cada envío; sus propias ediciones viven en una capa que CadCraft nunca escribe. El complemento que la abre todavía no está publicado.
keywords: unreal, unreal engine, motor de juego, enlace, enviar, usd stage, proyecto, en vivo, cámara de cine, cola de render de película
from: 9a765cc2
---

En CadCraft Studio, la lista {{ui:Motor}} puede guardar un **enlace** a un proyecto de Unreal Engine. Solo en un sentido: de CadCraft a Unreal.

## Enviar la escena

1. Elija la entrada de Unreal en la lista {{ui:Motor}}. La primera vez, Studio le pide que seleccione la carpeta de su proyecto (la que tiene el archivo `.uproject`); la recuerda.
2. Haga clic en {{ui:Enviar}}. Studio escribe `CadCraft/<file name>/` dentro del proyecto: la escena como archivo USD, el archivo de configuración, los perfiles de luz y dos archivos de capa pequeños.
3. Cambie el modelo, guarde y vuelva a enviar. Solo se reemplazan la escena y el archivo de configuración.

## Sus ediciones están a salvo

El escenario que abre Unreal es una pequeña capa raíz creada una vez, con dos capas debajo: **la suya** arriba (`<name>.user.usda`, vacía al principio y nunca reescrita por CadCraft) y la escena de CadCraft debajo. Las ediciones que guarde en su propia capa se conservan cuando la escena se envía de nuevo. Las luces y los demás actores que coloque en el nivel de Unreal están fuera del escenario y tampoco se tocan.

## Sin Studio

En el navegador, o en una computadora donde Studio no encuentra Unreal, elija **Carpeta de proyecto de Unreal (.zip)** en la lista {{ui:Motor}} y haga clic en {{ui:Renderizar}}. Guarda la misma carpeta como zip: descomprímalo en la carpeta `CadCraft` de su proyecto. Deje activado **Incluir los archivos del escenario** la primera vez; desactívelo en los guardados posteriores, para que el zip contenga solo la escena y el archivo de configuración, y su propia capa nunca se reemplace.

:::note
El complemento de Unreal que abre el escenario, aplica el sol, las lámparas, las cámaras y la exposición, sigue cada envío y renderiza una cámara **todavía no está publicado** y no se ha ejecutado en Unreal. Mientras tanto, {{ui:Enviar}} coloca los archivos en el proyecto, y las herramientas USD de Unreal pueden abrirlos. Windows es el primer sistema; macOS vendrá después.
:::
