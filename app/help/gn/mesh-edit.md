---
title: Editar una malla en el espacio de trabajo Malla
summary: Ejeporo malla vértice, arista ha cara; emoveha, ha extruir, insertar, biselar, cortar, fusionar, rellenar ha puente ndive, ambos estilo teclas ndive.
keywords: malla, modo de edición, espacio de trabajo malla, vértice, vértices, arista, aristas, cara, caras, extruir, insertar, biselar, corte de bucle, cuchillo, bisecar, girar, fusionar, disolver, rellenar, rellenar con cuadrícula, puente, subdividir, deslizar, edición proporcional, caída, espacio de trabajo
from: 92a372dd
---

**Malla** espacio de trabajo [malla](topic:meshes) punto por punto edita: vértices, aristas ha caras. Empujar/tirar geometría oĩ **Model** espacio de trabajo-pe.

## Ejepe'a

- Ejepe'a {{ui:Mesh}} {{ui:Workspace}} lista-pe, toolbar ryepýpe. Ejeporu malla oñepyrũ edición-pe; grupo térã componente ejepe'a jave peteĩ malla ojapo (peteĩ paso deshacer).
- Térã doble clic malla-pe, térã modelador teclas ndive: ejepe'a ha {{key:Tab}}.
- Mba'eve ndejepe'áiva: panel ofrece malla ojapo: plano, cuadrícula, cubo, círculo, cilindro, cono, esfera, ico esfera ha toro. Peteĩ pyahu ojapo vista ojehechaukáva-pe ha edición-pe oñepyrũ.

{{ui:Back to Model}} (térã lista, {{key:Tab}} modelador teclas-pe, {{key:Esc}} mba'eve ndejepe'ái empujar/tirar teclas-pe) Model-pe malla ejepe'a jave ejevolve. Malla espacio de trabajo oĩ jave, modelo ambue opaite pálido-pe, Model herramienta ojeguejy.

## Seleccionar

| Mba'e | Mba'épa |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Vértice, arista térã cara seleccionar |
| Clic | Peteĩ seleccionar; {{key:Shift}}+clic ojuhe térã omboguejy |
| Arrastrar caja | Mba'e ohechaukáva caja apytépe seleccionar; {{key:Shift}} ojuhe, {{key:Ctrl}} omboguejy |
| {{key:Alt}}+clic arista, térã doble clic | Arista bucle (cara bucle cara modo-pe; borde abierto arista-pe opa borde) |
| {{key:Ctrl}}+{{key:Alt}}+clic arista | Arista anillo |
| Triple clic | Opa ojoaju peteĩ rehe |

{{ui:Select}} grupo-pe oĩ avei {{ui:All}}, {{ui:Linked}}, {{ui:Loop}}, {{ui:Ring}}, {{ui:More}} ha {{ui:Less}}.

## Mover, rotar, escalar

{{ui:Move}}, {{ui:Rotate}} ha {{ui:Scale}} punteroísmo oñepyrũ: emoveha, upéi clic térã {{key:Enter}} ejejapy selección omboyke hag̃ua, térã {{key:Esc}} omboguejy. {{key:X}}, {{key:Y}} térã {{key:Z}} (térã flecha teclas) eje traba. Distancia, ángulo térã factor emoĩ tiempo exacto hag̃ua — [cálculos](topic:value-box#calculations) avei oikóva.

**Edición proporcional** ({{ui:Proportional}}, térã panel): selección cercana vértices mover ojeguata, menos ojeguerekoi emboguejy peve, ejeeligi caída ndive. {{ui:Only along the mesh}} ojehechauka hasta ejepe'a aristas rehe medir hag̃ua, recta ndaha'éi.

{{ui:Slide}} selección arista bucle ojeguata aristas-kuéra rehe.

## Forma ojapo

| Herramienta | Mba'e ojapo |
|---|---|
| {{ui:Extrude}} | Caras seleccionadas normal rehe ojeguata, cara lado pyahu-kuéra ndive (térã borde abierto aristas-gui cara ojapo). Distancia emoĩ |
| {{ui:Inset}} | Banda caras seleccionadas contorno apytépe; {{key:I}} ojejapy cara peteĩ peteĩ hag̃ua |
| {{ui:Bevel}} | Aristas seleccionadas (térã, {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, vértices) ancho ndive ojeguata; rueda térã {{key:Plus}} {{key:Minus}} segmento pyahu redondeado arista-pe |
| {{ui:Loop cut}} | Arista rehe ejeeligi: cuatro lado cara anillo rehe bucle pyahu; rueda oñemoĩ cuánto; clic cortar |
| {{ui:Knife}} | Clic arista térã esquina puntos; {{key:Enter}} cara ndive recto cortar, ehecha ndive |
| {{ui:Bisect}} | Pantalla línea: seleccionadas (térã opa) cara línea rehe cortado |
| {{ui:Spin}} | Seleccionadas cara térã borde abierto azul eje rehe paso-paso girar (rueda oñemoĩ); vuelta completa oñeñandu |
| {{ui:Subdivide}} | Aristas seleccionadas mokõi cortar; cara entera cuadrícula |
| {{ui:Merge}} | Vértices seleccionados peteĩ ojapo, medio rehe |
| {{ui:Dissolve}} | Selección oñekuaáva, superficie ndojejoaju: caras ojuhe |
| {{ui:Fill}} | Cara seleccionado borde abierto ryepýpe (térã mokõi arista abierta apytépe) |
| {{ui:Grid fill}} | Borde abierto número par aristas-pe cuadrícula cuadrángulo-pe rellenar |
| {{ui:Bridge}} | Mokõi seleccionado borde abierto bucle caras ndive ojuhe |
| {{ui:Crease}} | Seleccionadas aristas cuán afilado ojeikóta malla Subdivision superficie ndive alisada jave: centro gui ojeguata, rueda (0.1 pasos) térã 0 a 1 emoĩ. Panel seleccionadas aristas pliegue ohechauka, tipeado valor avei ojeporu. Pliegue aristas magenta-pe ojehechauka |
| {{ui:Flip}}, {{ui:Smooth}}, {{ui:Delete}} | Caras ojeheka; vértices vecino-kuérape alisar; selección modo ndive eliminar |

Cada peteĩ deshacer paso. Coordenadas textura, colores ha pesos caras y vértices pyahu-kuérape ojeguerahaʼa.

## Remesh

{{ui:Remesh}} malla opa peteĩ tamaño triángulo-kuéra ndive jeýpe ojapo, ejepe'a jave emoĩ (michĩvéva fino ha tardeve). Agujero omboty, superposición ojoaju, ha malla estirada ojeporu ojeheka. Aristas afiladas peteĩ tanto redondeadas ojehecha. UVs, pintura ha pliegues oñepyrũ jey. Peteĩ deshacer paso.

## Retopología

Malla pyahu, porãvéva, peteĩ detallada rehe ojapo hag̃ua (escultura, escaneo), panel-pe {{ui:Retopology}} › **Build on** ojeikuaa detallada ejepe'a, upéi:

- **Puntos movidos ojeguerahaʼa**: ejeguata puntos ha ejeextruí aristas, superficie rehe oñemboja.
- **Puntos seleccionados superficie rehe** puntos seleccionados oho ahora (peteĩ paso deshacer).
- **Mostrar aristas de esta malla adelante** ojapo malla superficie ári, ehecha hag̃ua.

## Ajustar última operación

Después de {{ui:Inset}}, {{ui:Bevel}}, {{ui:Loop cut}}, {{ui:Subdivide}}, {{ui:Smooth}}, {{ui:Grid fill}} térã {{ui:Spin}}, panel ohechauka emoĩva (ancho, segmentos, perfil, cortes…). Peteĩ mudá ojapo ha operación oñepyrũ jey ojapóta, peteĩ deshacer paso.

## Teclas

| | Teclas empujar/tirar | Teclas modelador |
|---|---|---|
| Mover, rotar, escalar | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} mokõi jey deslizar) |
| Extruir, insertar | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Eliminar | {{key:E}} térã {{key:Delete}} | {{key:X}} térã {{key:Delete}} |
| Pliegue | {{key:Shift+C}} | {{key:Shift+E}} |
| Seleccionar todo, ninguno, invertir | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Ambos | {{key:Ctrl+B}} biselar, {{key:Ctrl+R}} corte de bucle, {{key:K}} cuchillo | upe mismo, ha {{key:F}} rellenar, {{key:M}} fusionar, {{key:Ctrl+X}} disolver, {{key:L}} / {{key:Ctrl+L}} vinculado, {{key:Alt+N}} voltear, {{key:O}} proporcional, {{key:Shift+V}} deslizar vértice |

Ver también [Mallas](topic:meshes), [Modificadores en una malla](topic:modifiers) ha [Todavía no construido](topic:not-built-yet).
