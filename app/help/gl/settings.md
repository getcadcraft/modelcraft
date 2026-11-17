---
title: Configuración de ModelCraft
summary: Escolla o estilo de teclas que coñece, faga que un panel táctil oriente e desprace sen os botóns da cámara, e active ou desactive o axuste e as colisións de sólidos.
keywords: configuración, preferencias, controis, estilo de teclas, mapa de teclas, atallos, blender, panel táctil, touchpad, desprazamento, scroll, órbita, pinzar, axuste, axustar, colisión, solapamento, intersecar, atravesar
from: caf77d5b
---

Abra {{ui:Configuración}} coa engrenaxe da barra da aplicación ou con {{key:Mod+,}}. A primeira lapela, {{ui:ModelCraft}}, contén as opcións propias desta aplicación; {{ui:Xeral}} contén as que comparten todas as aplicacións de CadCraft (tema, barra de ferramentas, paneis). As opcións de ModelCraft existen só na aplicación: cámbiaas aquí, e este navegador as recorda.

## Controis: que teclas e que botóns do rato

Hai dous estilos de teclas. Cámbieos aquí, con {{ui:Teclas: Empurrar/tirar}} / {{ui:Teclas: Modelador}} na parte inferior dereita da vista, ou ao final do menú {{ui:Máis}} da barra de ferramentas:

- **Estilo empurrar/tirar** (o inicial; as letras dos modeladores de empurrar/tirar, como SketchUp): unha letra escolle unha ferramenta — {{key:L}} liña, {{key:R}} rectángulo, {{key:P}} empurrar/tirar, {{key:M}} mover, {{key:Q}} xirar, {{key:S}} escalar, {{key:G}} crear compoñente. Ver [Teclas e accións do rato](topic:keyboard).
- **Estilo modelador** (as teclas dos modeladores de malla, como Blender): seleccione primeiro, e actúe logo sobre a selección de inmediato. {{key:G}} a move, {{key:R}} a xira e {{key:S}} a escala desde onde está o punteiro — sen primeiro clic. Mentres se move, {{key:X}}, {{key:Y}} ou {{key:Z}} bloquea o eixe vermello, verde ou azul, un número escrito fixa a distancia (ou os graos, ou o factor), e un clic ou {{key:Enter}} a deixa no sitio; {{key:Esc}} ou un clic dereito a devolven ao punto de partida. Despois volve a {{ui:Seleccionar}}.

O estilo de teclas é a mesma escolla que o estilo de menú: o estilo de teclas Modelador é o estilo de menú {{ui:Modelador}}, e escoller un escolle o outro. Ver [Menús, teclas e rato](topic:menus-keys-and-mouse). A lista completa do Modelador está en [Teclas e accións do rato](topic:keyboard#modeler-keys). As indicacións da barra de ferramentas e da tarxeta de inicio seguen o estilo que escolla.

## Desprazamento: roda do rato ou panel táctil

- **Detección automática** (a inicial): ModelCraft observa o desprazamento. O desprazamento lateral ou de grao fino, como o que envía un panel táctil, orbita; as voltas enteiras da roda fan zoom.
- **Roda do rato**: o desprazamento fai sempre zoom cara ao punteiro.
- **Panel táctil**: deslice con dous dedos para orbitar, manteña {{key:Shift}} e deslice para desprazar, e pince para facer zoom. Non precisa nunca os botóns {{ui:Orbitar}}, {{ui:Desprazar}} ou {{ui:Zoom}}.

Un pinzamento fai zoom en todas as opcións. Se a detección automática non acerta co seu rato ou panel táctil, escolla o que ten.

:::tip
No estilo Modelador tamén pode orbitar mantendo {{key:Alt}} e arrastrando, e desprazar con {{key:Alt+Shift}} e un arrastre: útil nun portátil sen botón central.
:::

## Axuste

**Axustar a puntos, arestas e eixes** (activado no inicio) atrae o punteiro a extremos, puntos medios, arestas, guías e aos eixes vermello, verde e azul; ver [Inferencia](topic:inference). Desactívao cando queira colocar algo libremente preto doutra xeometría sen que salte. As caras, o chan e os bloqueos de eixe seguen funcionando con o axuste desactivado.

O botón {{ui:Axustar}} na parte inferior dereita da vista fai o mesmo para o traballo desta sesión (tamén se garda). No estilo Modelador, {{key:Shift+Tab}} o alterna.

## Os sólidos párano onde se tocan

**Parar os sólidos onde se tocan** (activado no inicio) evita que un muro se arrastre a través doutro muro. Con {{ui:Mover}} (e con {{key:G}}, e con pegar e logo mover con {{key:Mod+D}}) a selección desliza ata o outro sólido e para ao tocalo; con {{ui:Empurrar/tirar}}, unha cara para onde se atopa cun sólido. Apoiarse sobre algo e deslizarse por el está ben: só se detén a entrada no interior. As cousas que xa se solapan ao comezar aínda se poden separar.

Para empurrar algo a través de forma intencionada, faga clic en {{ui:Colisión}} na parte inferior dereita (ou desactive a opción), faga o movemento, e prema de novo.

:::note
As colisións compróbanse nos movementos e no empurrar/tirar. {{ui:Xirar}} e {{ui:Escalar}} aínda non as comprobaban, e a xeometría solta que toca únese, como sempre: manteña as cousas separadas en [grupos](topic:groups-components) para que sigan separadas.
:::

## Cama da impresora 3D

O tamaño da cama da impresora: {{ui:Sen definir}} (o inicial), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 ou 300 × 300 × 400 mm. Escolla o tamaño máis próximo ao volume de impresión da súa impresora. [Comprobar para impresión 3D](topic:print-3d) indica entón cando un modelo é máis grande que a cama; con {{ui:Sen definir}}, o tamaño non se comproba.

## Orbitar e desprazar

**Orbitar arredor do que hai baixo o cursor** (activado no inicio): a órbita xira arredor da parte do modelo baixo o punteiro, e o desprazamento mantén ese punto baixo o punteiro; sobre o espazo baleiro ambos usan o centro da vista. Desactívao para orbitar sempre arredor do centro da vista. **Velocidade de órbita** e **Velocidade de desprazamento** van de 0,25× a 3× (1× é o inicial) e aplícanse ao rato, ao panel táctil, ao tacto e ás teclas de frecha. Ver [Órbita, desprazamento e zoom](topic:orbit-pan-zoom).

## Indicador de esquina

O que se mostra na esquina da vista 3D: **Cubo de vista** (o inicial; arriba á dereita — faga clic nunha cara, aresta ou vértice para mirar desde aí, arrástreo para orbitar, e arrastre o anel da brúxula para xirar o modelo), **Icona de eixes** (un pequeno marcador X, Y, Z abaixo á esquerda que xira coa vista: X vermello, Y verde, Z azul) ou **Ningún**. Ver [O cubo de vista](topic:view-cube).
