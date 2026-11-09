---
title: La pantalla de ModelCraft
summary: Tour de la barra de herramientas, los paneles de cada lado, la vista 3D y la barra de estado, por sus nombres en pantalla.
keywords: pantalla, diseño, barra de herramientas, paneles, esquema, información de entidad, estilo, escenas, barra de estado, cuadro de valor, unidades, interfaz, recorrido
from: 4a9a4516
---

Yvate-gui yvy peve: barra superior, barra de herramientas, mokõi columna (paneles izquierda, vista 3D, paneles derecha) ha barra de estado.

## Barra superior

Barra michĩ ypykuépe opa CadCraft app-pe oĩ. Oguereko app réra ha versión, {{ui:Acerca de ModelCraft}}, pantalla modo botón ha {{ui:Papel}} / {{ui:Modelo}} cambio.

- {{ui:Papel}} ha'e tema claro ha {{ui:Modelo}} oscuro. Vista 3D colores ojemoambue ndive; nde modelo ndoñemyatyrõi.
- Pantalla modo botón (al principio dice {{ui:Pantalla completa}}) ha {{key:Ctrl+Shift+F}} oho mbohapy modo: normal, pantalla completa, ha pantalla completa barras ndohechaukavéva. Barras ndohechaukavéva jave, eheka pantalla yvate borde-pe (térã toca) barras oguejýta haguã. {{key:Esc}} pantalla completa-gui oho.

:::note
{{key:Ctrl+Shift+F}} Control tecla opa computadora-pe ojeporu, Mac-pe avei. iPhone-pe, nevegadór pantalla completa ndoguerekóiva, botón ho'a barras ojehechaukávo ha ojehechauka jey.
:::

## Herramientas barra

Herramientas barra ojeikuaa grupo-kuéra ndive. Pointer boton ri ohechauka réra ha tecla.

Izquierda-pe, {{ui:Espacio de trabajo}} lista oikuaáta mba'éichapa herramientas barra ha derecha panel ojeporu: {{ui:Modelo}} (empujar/tirar modelado, ko recorrido), {{ui:Malla}} ([editar malla](topic:mesh-edit)), {{ui:Curva}} ([objetos curvas](topic:curves)), {{ui:UV}} ([disponer UV](topic:uv)), {{ui:Esculpir}} ([esculpir](topic:sculpt)), {{ui:Sombreado}} ([materiales nodos ndive](topic:shading)), {{ui:Animar}} ([animar](topic:animate)) ha {{ui:Renderizar}} ([render vista-pe](topic:render#render-in-the-view)).

| Grupo | Botones |
|---|---|
| Archivo | {{ui:Nuevo}}, {{ui:Abrir}}, {{ui:Guardar}}, {{ui:Importar}}, {{ui:Exportar}} (formato menú) |
| Dibujar | {{ui:Línea}} ({{key:L}}), {{ui:Rectángulo}} ({{key:R}}), {{ui:Círculo}} ({{key:C}}), {{ui:Polígono}} ({{key:N}}) |
| Modificar | {{ui:Seleccionar}} ({{key:Space}}), {{ui:Empujar/tirar}} ({{key:P}}), {{ui:Mover}} ({{key:M}}), {{ui:Rotar}} ({{key:Q}}), {{ui:Escalar}} ({{key:S}}), {{ui:Goma}} ({{key:E}}), {{ui:Cinta}} ({{key:T}}) |
| Organizar | {{ui:Componente}} ({{key:G}}), {{ui:Grupo}} ({{key:Shift+G}}), {{ui:Descomponer}} |
| Editar | {{ui:Deshacer}} ({{key:Mod+Z}}), {{ui:Rehacer}} ({{key:Mod+Y}}), {{ui:Copiar}} ({{key:Mod+C}}), {{ui:Pegar}} ({{key:Mod+V}}), {{ui:Más}} (menú: cortar, copiar, pegar, pegar en el mismo lugar {{key:Mod+Shift+V}}, duplicar {{key:Mod+D}}, eliminar, seleccionar todo, ninguna selección, ha tecla estilo) |
| Cámara | {{ui:Orbitar}} ({{key:O}}), {{ui:Desplazar}} ({{key:H}}), {{ui:Zoom}} ({{key:Z}}), {{ui:Extensiones}} ({{key:Shift+Z}}), {{ui:Vistas}} (menú) |

Tecla ohechaukáva empujar/tirar ojeporu; [Configuración de ModelCraft](topic:settings)-pe Modelador estilo eligi jave, tooltip oŭ ko'ã tecla-pe. Ojeporu herramienta oĩ apretado ohechaukáva. Pantalla michĩ jave, barra desplázase costádo-pe.

{{ui:Vistas}} menú oguereko {{ui:Iso}}, {{ui:Superior}}, {{ui:Frontal}}, {{ui:Derecha}}, {{ui:Posterior}}, {{ui:Izquierda}} ha {{ui:Inferior}}, opavave modelo-pe ajustado, ha {{ui:Perspectiva}}, perspectiva ha proyección paralela ndive ojeambue.

## Vista 3D

Pantalla mbytépe. Pytã, hũ ha tupa'o líneas ha'e ejes: pytã ha hũ yvy peve, tupa'o arriba, ha **norte ha'e eje verde**. Upe ojoaprévo ha'e origen.

- Ojepyrũmby jave, tarjeta {{ui:Empezar a modelar}} ohechauka primeros tecla-kuéra. Herramienta dibujo eligi térã vista-pe clic-ejapo jave oho.
- Herramienta ojeporúva jave, vista **inference markers** ohechauka: punto snap-pe tupa'o forma-kuéra (endpoint-pe verde círculo, midpoint-pe cian, borde-pe pytã cuadrado, cara-pe azul rombo). Ehecha [Inferencia y snapping](topic:inference).
- Ojeporu cosa azul-pe oiko. Cara atrás-gui azul-gris.
- Grupo editar jave ojapo, grupo ndahi ojeporuvéva ipeʼỹ, ejes grupo mbohapy ejes-pe ojemyatyrõ.
- Modelo escena oguereko jave, escena pestaña fila vista ypykuépe.
- Archivo vista-pe ombohasa térã importa jave.

## Panel izquierda

**{{ui:Esquema}}** ohechauka modelo grupos ha componentes, modelo-pe oĩva ramo. Componente más ojeporúva jave ohechauka mba'e vez, "Ventana (4)" ramo.

- Clic-ejapo nombre oeligi haguã. Doble clic ojapo haguã editar.
- **Buscar por nombre** (dos térã más grupo jave ohechauka) solo nombre ojoaprévo fila-kuéra ohechauka, grupo ndive oĩvo. {{key:Esc}} omboty.
- Fila ryépe **ojo** grupo térã componente oculta térã ohechauka ({{ui:Editar}} › {{ui:Más}} › {{ui:Ocultar}} ramo). Tag ícono ohechauka tag rupi oculta.
- **Renombrar lugar-pe:** clic-ejapo fila, upéi ejeprensa {{key:F2}}, escribí, ha ejeprensa {{key:Enter}} ({{key:Esc}} nombre viejo oguardá).
- **Fila arrastrá** otro grupo fila mbytépe grupo-pe ojapo haguã, térã fila borde superior-pe térã inferior-pe ojapo haguã fila antes/después, térã {{ui:Esquema}} título-pe nivel superior-pe. Modelo ryepýpe oĩ, color, tag ha nombre oguardá. Grupo ndoikéi iñambue ndive. Cada cambio peteĩ paso deshacer. Ehecha [Reorganizar en el Esquema](topic:groups-components#rearrange-in-the-outliner).
- Grupo ryepýpe editando jave, línea ohechauka "Editando: Modelo › …", ha {{ui:Cerrar grupo}} botón oĩ. Opa nivel mboyve oje'o.

**{{ui:Componentes}}** lista opa componente definición, mba'e vez ojeñemoĩ ("3×") ha {{ui:Oñemoĩ}} botón, clic-ejapo jave ambue copia ojapo.

## Panel derecha

**{{ui:Información de entidad}}** ohechauka mba'e ojeoeligi. Título ojemyatyrõ ohechauka mba'e ha'e:

| Título | Ohechauka | Botones |
|---|---|---|
| Modelo (nada ojeeligi) | Caras, bordes, grupos, componentes ha mba'e vez ojeñemoĩ, guías, tamaño general | {{ui:Eliminar guía opa}} (guía oĩ jave) |
| Cara | Área, agujero número | {{ui:Cara ojejapova'ekue}} |
| Borde | Largo | ninguno |
| Grupo o Componente | Nombre (escribí renombrar), mba'e vez ojeñemoĩ, sólido cerrado térã, volumen, tamaño | {{ui:Editar}}, {{ui:Descomponer}}, {{ui:Ojapo peteĩ}} (mba'e vez ojeñemoĩva componente), {{ui:Ojapo componente}} (grupo) |
| Punto guía wala línea guía | nada | {{ui:Eliminar}} |
| Varias cosas | Cuántas caras, bordes, grupos ha guías, caras área total | {{ui:Crear componente (G)}}, {{ui:Crear grupo (Shift+G)}} |

**{{ui:Estilo}}** ojapo modelo ohechaukasehápe: {{ui:Caras}} ({{ui:Sombreado}}, {{ui:Línea oculta}}, {{ui:Alambre}}, {{ui:Rayos X}}), {{ui:Mostrar bordes}}, ha {{ui:Sombras de sol}} sol fecha, hora ha lugar ndive. Ehecha [Estilos y sombras de sol](topic:styles-shadows).

**{{ui:Escenas}}** oguardáta vistas: {{ui:Agregar escena}}, escena lista, ha {{ui:Anterior}}, {{ui:Reproducir}} ha {{ui:Siguiente}}. Ehecha [Guardar vistas como escenas](topic:scenes).

## Barra de estado

Yvate-pe, izquierda guýpe derecha:

1. **Consejo**: herramienta mba'e ojeikovéva térã pointer ojeheka mba'e ("Extremo", "En eje rojo").
2. **Mensajes**: mba'e ojapo rire ("Deshice empujar/tirar.", "Importado sitio.dxf: 1697 bordes en el suelo, en un grupo.") térã mba'évépa ndoĩ.
3. **Cuadro de valor**: etiqueta herramienta ndive ojemyatyrõ ({{ui:Longitud}}, {{ui:Cotas}}, {{ui:Radio}}, {{ui:Lado}}, {{ui:Distancia}}, {{ui:Ángulo}}, {{ui:Escalar}}, {{ui:Desfase}}). Tamaño vivo ohechauka mba'e reipota-pe, ha escribí ojapo. Ehecha [Escribir tamaños exactos en el cuadro de valor](topic:value-box).
4. **Tecla estilo**: {{ui:Teclas: Empujar/tirar}} wala {{ui:Teclas: Modelador}} ojemyatyrõ atajo teclado ha mouse botón opavave (ModelCraft configuración ndive ojeikuaa).
5. **{{ui:Ajustar}} ha {{ui:Colisión}}**: punto, borde ha eje-pe ajuste, ha sólido ojeho ojeheja jave. Ojeñemoĩ ramo = ndoĩ. Clic-ejapo ojemyatyrõ. Ehecha [Configuración de ModelCraft](topic:settings).
6. **Unidades selector**: medidas unidad. Ehecha [Empezar](topic:getting-started#check-the-units-first).

## Pantalla michĩ-pe

Ancho ~760 píxel michĩvépe (teléfono térã ventana michĩ), 3D vista pantalla ojeguerekóta. Herramientas barra peteĩ fila, desplázase costádo-pe, paneles pantalla ypykuépe barra-gui hoja ramo oñemoĩ.
