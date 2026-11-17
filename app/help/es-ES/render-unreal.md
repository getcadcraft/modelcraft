---
title: Enviar la escena a un motor de juego
summary: Studio puede escribir la escena en un proyecto de Unreal Engine y mantenerla al día en cada envío; sus propias ediciones quedan en una capa que CadCraft nunca escribe. El complemento que la abre todavía no se ha publicado.
keywords: unreal, unreal engine, motor de juego, enlace, enviar, usd stage, proyecto, en vivo, cine camera, movie render queue
from: 9a765cc2
---

En CadCraft Studio, la lista de motores puede contener un **enlace** a un proyecto de Unreal Engine. Solo en un sentido: de CadCraft a Unreal.

## Enviar la escena

1. Elija la entrada de Unreal en la lista de motores. La primera vez, Studio le pide que seleccione la carpeta de su proyecto (la que contiene el archivo `.uproject`); la recuerda.
2. Pulse {{ui:Enviar}}. Studio escribe `CadCraft/<nombre del archivo>/` dentro del proyecto: la escena como archivo USD, el archivo de ajustes, los perfiles de luz y dos pequeños archivos de capa.
3. Cambie el modelo, guarde y vuelva a enviar. Solo se reemplazan la escena y el archivo de ajustes.

## Sus ediciones están a salvo

El escenario que abre Unreal es una pequeña capa raíz creada una vez, con dos capas debajo: **la suya** encima (`<nombre>.user.usda`, vacía al principio, que CadCraft nunca vuelve a escribir) y la escena de CadCraft debajo. Las ediciones que guarde en su propia capa se conservan cuando la escena se vuelve a enviar. Las luces y otros actores que coloque en el nivel de Unreal quedan fuera del escenario y tampoco se modifican.

## Sin Studio

En el navegador, o en un equipo donde Studio no encuentra Unreal, elija **Carpeta de proyecto de Unreal (.zip)** en la lista de motores y pulse {{ui:Renderizar}}. Guarda la misma carpeta en un zip: descomprímalo en la carpeta `CadCraft` de su proyecto. Deje **Incluir los archivos del escenario** activado la primera vez; desactívelo en los guardados posteriores, para que el zip contenga solo la escena y el archivo de ajustes, y su propia capa nunca se reemplace.

:::note
El complemento de Unreal que abre el escenario, aplica el sol, las lámparas, las cámaras y la exposición, sigue cada envío y renderiza una cámara **todavía no se ha publicado** y no se ha ejecutado en Unreal. Hasta entonces, Enviar coloca los archivos en el proyecto y las herramientas USD de Unreal pueden abrirlos. Windows es el primer sistema; macOS vendrá después.
:::
