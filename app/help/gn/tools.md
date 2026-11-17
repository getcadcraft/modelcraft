---
title: Herramientas lista
summary: ModelCraft herramienta opa, tecla ndive, ojeheja mba'e ojapo, ha casilla valor-pe mba'e ojehai ikatu herramienta ojapo jave.
keywords: herramientas, barra, comandos, lista, línea, rectángulo, círculo, polígono, desfase, arco, curva, spline, seguirme, barrer, arco 2 puntos, arco desde centro, seleccionar, empujar tirar, mover, rotar, escalar, goma, cinta, cota, orbitar, desplazar, zoom, colocar componente
from: e08a274f
---

Barra de estado consejo siempre ohechauka mba'e herramienta ohoseva. {{key:Esc}} cancela herramienta ojapo jave.

## Herramientas de dibujo

| Herramienta | Tecla | Clic | Escribir casilla valor-pe |
|---|---|---|---|
| {{ui:Línea}} | {{key:L}} | Comienzo, upéi punto pyahu. Ojeguahẽ caras cerrado jave, térã {{key:Esc}} | Longitud punto rupi; `[x,y,z]` punto; `<dx,dy,dz>` desfase ({{ui:Longitud}}) |
| {{ui:Rectángulo}} | {{key:R}} | Primer esquina (yvy térã cara), opuesto esquina | Ancho ha profundidad: `4m,3m` ({{ui:Cotas}}) |
| {{ui:Círculo}} | {{key:C}} | Centro (yvy térã cara), peteĩ punto borde-pe | Primer clic ántes: lado, `24s` térã `24` ({{ui:Lado}}). Upéi: radio ({{ui:Radio}}) |
| {{ui:Polígono}} | {{key:N}} | Centro, esquina | Círculo haguéicha; 6 lado-gui oñepyrũ |
| {{ui:Arco}} | {{key:A}} | Comienzo, final, upéi abultamiento | Cuerda longitud comienzo rupi ({{ui:Longitud}}); abultamiento final rupi ({{ui:Abultamiento}}); `12s` segmento-kuéra |
| {{ui:Transportador}} | — | Centro, 0° punto, upéi ángulo | Ángulo grado-pe ({{ui:Ángulo}}) |
| {{ui:Seguirme}} | — | Ojeheja trayectoria, upéi cara (térã cara, upéi trayectoria borde) | — |
| {{ui:Pintar}} | {{key:B}} | Cara, grupo térã componente | — ({{key:Ctrl}} conectado, {{key:Shift}} opa color, {{key:Alt}} color ojagarra) |
| {{ui:Desfase}} | {{key:F}} | Cara (térã cara térã borde ántes), upéi lado ha distancia | Distancia ({{ui:Distancia}}); cara ryepýpe oike adentro |
| {{ui:Curva}} | — | Puntos curva ojehasa; {{key:Enter}} térã doble clic ojapo | Puntero rupi longitud, `[x,y,z]` térã `<dx,dy,dz>` pyahu punto-pe |
| {{ui:Arco desde el centro}} | — | Centro, comienzo, upéi final | Centro rupi radio; comienzo rupi ángulo grado-pe; `12s` segmento-kuéra |

## Herramientas de edición

| Herramienta | Tecla | Clic | Escribir casilla valor-pe |
|---|---|---|---|
| {{ui:Seleccionar}} | {{key:Space}} | Clic, doble clic, triple clic, caja ojeheja. Ehecha [Seleccionar cosas](topic:select) | Peteĩ dimensión térã borde ojeporavo: longitud pyahu, modelo tamaño ojapo |
| {{ui:Empujar/tirar}} | {{key:P}} | Cara, upéi distancia. Cara doble clic: última distancia jey | Distancia; menos ambue rupi ({{ui:Distancia}}) |
| {{ui:Mover}} | {{key:M}} | Punto-gui punto-pe. {{key:Ctrl}} térã {{key:Alt}} mantené kopia jave | Distancia puntero rupi, `<dx,dy,dz>` térã `[x,y,z]` ({{ui:Distancia}}). Kopia upéi: `3x` térã `/3` |
| {{ui:Rotar}} | {{key:Q}} | Centro (cara ári plano-pe mbyjuka), comienzo dirección, final dirección | Ángulo grado-pe ({{ui:Ángulo}}) |
| {{ui:Escalar}} | {{key:S}} | Punto oĩha, punto referencia, tamaño pyahu | Factor: `2`, `0.5` ({{ui:Escalar}}) |
| {{ui:Goma}} | {{key:E}} | Clic térã ojeheja bordes, grupos, guías ha cotas rupi | nada |
| {{ui:Cinta}} | {{key:T}} | Borde-gui: guía línea paralela. Punto-gui: medida ha punto guía oguejy | Desfase ({{ui:Desfase}}) térã distancia ({{ui:Longitud}}) |
| {{ui:Cota}} | {{key:D}} | Mokõi esquina (térã peteĩ borde), upéi cota línea mboyve | Desfase ({{ui:Desfase}}). Upéi: longitud pyahu, modelo tamaño ojapo |

{{ui:Mover}}, {{ui:Rotar}} ha {{ui:Escalar}} selección-pe ojapo. Ndaipóri selección, ojeheja cosa pyahu (cara ojapo bordes avei).

## Cámara herramientas

| Herramienta | Tecla | Ojeheja jave |
|---|---|---|
| {{ui:Orbitar}} | {{key:O}} | Ojupi modelo parte puntero ryépe ({{key:Shift}} desplazar) |
| {{ui:Desplazar}} | {{key:H}} | Vista ojehejávo |
| {{ui:Zoom}} | {{key:Z}} | Zoom: ári ojapo ojehegui, yvy ári ojapo ojeguahẽ |
| {{ui:Extensiones}} | {{key:Shift+Z}} | (botón, herramienta ndaha) Opa modelo ojehecha |

Mouse-pe ndaikatúi ojapo: punto medio ojupi orbita, derecha ojeheja desplaza, ruedita zoom herramienta opa-pe. Ehecha [Orbitar, desplazar y zoom](topic:orbit-pan-zoom).

## Organizar

| Botón | Tecla | Ojapo |
|---|---|---|
| {{ui:Componente}} | {{key:G}} | Selección componente ojapo |
| {{ui:Grupo}} | {{key:Shift+G}} | Selección grupo ojapo |
| {{ui:Descomponer}} | ndaipóri | Grupos ha componentes ojeporavo oiko geometría suelta-pe |

## Colocar componente

Barra-pe ndaipóri: ojeheja {{ui:Oñemoĩ}} {{ui:Componentes}} panel-pe componente rembe'ýpe. Ojeheja peteĩ jey componente origen oĩ-pe; upéi herramienta {{ui:Seleccionar}}-pe oguejy.
