---
title: Usar ModelCraft con un asistente de IA
summary: Deje que su propio asistente de IA o un script vea el modelo y cree sólidos sencillos: permisos, conexión a través de CadCraft Studio y el registro de actividad.
keywords: ia, asistente, agente, mcp, model context protocol, script, automatización, modelado, caja, cilindro, render, cola de render, permisos, desconectar, actividad
from: 629cd0b7
---

## Lo que aprenderá

Cómo permitir que un asistente de IA (o un script que haya escrito usted) trabaje con ModelCraft, y cómo decidir qué puede tocar.

ModelCraft **no tiene IA propia** y no envía nada a ningún sitio. Usted aporta el asistente: cualquier programa que hable el Model Context Protocol (MCP). ModelCraft solo le ofrece herramientas, y usted elige cuáles.

## Activarlo

1. Abra {{ui:Configuración}} (el engranaje de la barra de aplicaciones, o {{key:Mod+,}}) y vaya a la pestaña {{ui:ModelCraft}}.
2. En {{ui:Asistentes}}, marque **Permitir que los asistentes de IA y los scripts usen ModelCraft**. Está desactivado hasta que lo haga.
3. Elija qué puede hacer: **Leer** viene marcado al principio; marque **Editar**, **Guardar** o **Exportar** solo cuando los necesite.

No se ofrecen al asistente las herramientas que queden fuera de los permisos que haya marcado; si aun así pide una, ModelCraft la rechaza y lo anota en el registro de actividad. Al apagar el interruptor se cortan de inmediato todas las conexiones; {{ui:Restablecer la configuración de ModelCraft}} también lo desactiva.

## Conectar su asistente

Los asistentes se conectan a través de **CadCraft Studio** en su equipo: Studio ejecuta un pequeño servidor al que solo puede acceder este equipo, protegido por un token que genera cada vez que se inicia. En Studio, elija {{ui:Conectar un asistente}} y copie la dirección y el token en su asistente (Studio muestra los ajustes exactos que debe pegar). No comparta nunca el token.

:::note
Una pestaña del navegador no puede abrir una conexión para un asistente: en las aplicaciones de navegador, el interruptor no tiene efecto hasta que use CadCraft Studio en su equipo.
:::

## Usted mantiene el control

- **Cada cambio es un solo paso de deshacer**, identificado con el nombre que le da el asistente (por ejemplo, «Asistente: caja»). {{key:Mod+Z}} deshace en conjunto el último cambio del asistente.
- **Sabrá cuándo hay uno conectado.** Un botón de la barra de aplicaciones muestra el nombre del asistente mientras está conectado; haga clic en él para ver lo que puede hacer, o para **Desconectarlo**.
- **Actividad.** {{ui:Configuración}} › {{ui:ModelCraft}} › {{ui:Asistentes}} › {{ui:Actividad}} muestra cada llamada: cuándo, qué herramienta y si se completó o se rechazó. {{ui:Guardar el registro}} guarda una copia.

## Lo que puede pedir un asistente

| Herramienta | Permiso | Qué hace |
|---|---|---|
| `app_info`, `model_describe` | Leer | La unidad del modelo, su tamaño, y cada grupo y componente con su posición, si es un sólido cerrado y su volumen |
| `view_screenshot` | Leer | Una imagen de la vista 3D tal como se muestra |
| `box_add`, `cylinder_add` | Editar | Una caja o un cilindro como nuevo grupo, en un lugar y con un tamaño que le den usted o el asistente («3m», «10'» o un número en la unidad del modelo) |
| `instance_move`, `instances_erase` | Editar | Mueve o borra grupos y componentes |
| `faces_list`, `materials_list` | Leer | Las caras de un grupo o de la geometría suelta (la dirección, el área y el centro de cada una); los materiales y colores con los que puede pintar |
| `push_pull` | Editar | Empuja o tira de una cara, como lo hace {{ui:Empujar/tirar}} |
| `paint` | Editar | Pinta caras o un grupo entero con un color o un material |
| `group_make` | Editar | Crea un grupo o un componente con caras y grupos sueltos |
| `scene_add`, `scene_show` | Editar | Guarda la vista como escena; va a una escena guardada |
| `mesh_add` | Editar | Un objeto de malla desde el que empezar (cubo, esfera, cilindro…), tal como lo añade el espacio de trabajo de malla |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Leer / Editar | La pila de modificadores de una malla: espejo, matriz, subdivisión, bisel y el resto; no se aplica nada de forma definitiva |
| `usd_export` | Exportar | El modelo como OpenUSD (.usda, .usdc o .usdz), tal como lo escribe guardar el modelo como USD ([USD](topic:usd)); a una carpeta que haya permitido en Studio, si no, como descarga |
| `render_still` | Exportar | Una imagen renderizada de la vista o de una escena guardada, tal como la genera el botón {{ui:Renderizar}} del cuadro de diálogo {{ui:Renderizar}}, con su configuración de renderizado salvo que pida otra (un ajuste de escena: exterior, interior, sección, noche o automático; rápido o alta calidad, tamaño, muestras, cielo); una PNG que pueda revisar, o un archivo PNG, EXR o de render en una carpeta que haya permitido en Studio ([Renderizar una imagen](topic:render)) |
| `render_queue` | Exportar | Añade imágenes de alta calidad a la cola del cuadro de diálogo {{ui:Renderizar}} (la vista o escenas guardadas) y ejecuta la cola; las imágenes terminadas van a una carpeta que haya permitido, o se quedan en la {{ui:Cola de render}} del cuadro de diálogo. Necesita WebGPU |
| `link_push` | Editar | Actualiza un modelo vinculado desde otro programa (véase [Mantener un modelo .3dm en vivo](topic:live-3dm-link)) |
| `link_status` | Leer | Indica si un modelo vinculado sigue ahí y cuándo se actualizó por última vez |
| `undo` | Editar | Deshace sus propios pasos |

Los sólidos que crea un asistente se incorporan como grupos, así que nunca se fusionan con lo que usted dibujó. No hay ninguna herramienta que guarde el modelo: guardar sigue siendo cosa suya, y exportar o renderizar requiere marcar **Exportar**. Un render no cambia nada del modelo; renderizar una escena guardada mueve la vista hasta ella, como lo hace {{ui:Escenas}}.

## Si algo no funciona

- **El asistente no ve ninguna herramienta de ModelCraft:** compruebe que el interruptor está activado en esta ventana y que la ventana está abierta en Studio.
- **«necesita el permiso de edición»:** marque **Editar** en {{ui:Asistentes}} y vuelva a pedirlo.
- **Errores «401» o «token»:** el token ha cambiado (Studio se ha reiniciado o se ha pulsado {{ui:Nuevo token}}). Copie el nuevo en los ajustes del asistente.

## Véase también

- [Recetas para asistentes de IA](common:assistants-recipes): ejemplos resueltos, cada uno con las herramientas que usa.
