---
title: Enviar a escena a un motor de xogos
summary: Studio pode escribir a escena nun proxecto de Unreal Engine e mantela sincronizada en cada envío; as súas propias edicións viven nunha capa que CadCraft nunca escribe. O complemento que a abre aínda non está publicado.
keywords: unreal, unreal engine, motor de xogos, ligazón, enviar, escenario usd, proxecto, en directo, cámara cine, cola de render de película
from: 9a765cc2
---

En CadCraft Studio, a lista de motores pode conter unha **ligazón** a un proxecto de Unreal Engine. Só nun sentido: desde CadCraft cara a Unreal.

## Enviar a escena

1. Escolla a entrada de Unreal na lista de motores. A primeira vez, Studio pide que escolla o cartafol do seu proxecto (o que contén o ficheiro `.uproject`); recórdao.
2. Prema {{ui:Send}}. Studio escribe `CadCraft/<file name>/` dentro do proxecto: a escena como ficheiro USD, o ficheiro de axustes, os perfís de luz e dous ficheiros de capa pequenos.
3. Cambie o modelo, grave e envíe de novo. Só se substitúen a escena e o ficheiro de axustes.

## As súas edicións están a salvo

O escenario que Unreal abre é unha capa raíz pequena, creada unha vez, con dúas capas por debaixo: **a súa** arriba (`<name>.user.usda`, baleira ao principio, que CadCraft nunca reescribe) e a escena de CadCraft por debaixo. As edicións que grave na súa propia capa mantéñense cando a escena se envía de novo. As luces e os outros actores que coloque no nivel de Unreal quedan fóra do escenario e tampouco se tocan.

## Sen Studio

No navegador, ou nun ordenador no que Studio non atope Unreal, escolla **Cartafol de proxecto de Unreal (.zip)** na lista de motores e prema {{ui:Render}}. Gárdase o mesmo cartafol como zip: descomprímao na carpeta `CadCraft` do seu proxecto. Deixe **Incluír os ficheiros do escenario** activado a primeira vez; desactívea nos gardados posteriores, para que o zip conteña só a escena e o ficheiro de axustes e a súa capa nunca se substitúa.

:::note
O complemento de Unreal que abre o escenario, aplica o sol, as lámpadas, as cámaras e a exposición, segue cada envío e renderiza unha cámara **aínda non está publicado** e non se executou en Unreal. Ata entón, Enviar pon os ficheiros no proxecto e as ferramentas USD de Unreal poden abrilos. Windows é o primeiro sistema; macOS segue.
:::
