---
title: Usar ModelCraft con un asistente de IA
summary: Permita que su propio asistente de IA o script revise el modelo y cree sólidos sencillos: permisos, conexión a través de CadCraft Studio y el registro de actividad.
keywords: asistente de IA, asistente, agente, mcp, protocolo de contexto de modelo, script, automatización, modelado, caja, cilindro, render, cola de render, permisos, desconectar, actividad
from: 629cd0b7
---

## Lo que aprenderá

Cómo permitir que un asistente de IA (o un script que usted escribió) trabaje con ModelCraft, y cómo decidir qué puede modificar.

ModelCraft **no tiene IA propia** y no envía nada a ningún lugar. Usted aporta el asistente: cualquier programa que hable el Protocolo de contexto de modelo (MCP). ModelCraft solo le da herramientas, y usted elige cuáles.

## Activarlo

1. Abra {{ui:Configuración}} (el engranaje de la barra de aplicación, o {{key:Mod+,}}) y vaya a la pestaña {{ui:ModelCraft}}.
2. En {{ui:Asistentes}}, marque **Permitir que los asistentes de IA y los scripts usen ModelCraft**. Está desactivado hasta que lo haga.
3. Elija qué puede hacer: **Leer** viene marcado al inicio; marque **Editar**, **Guardar** o **Exportar** solo cuando los necesite.

Las herramientas fuera de los permisos que marcó no se ofrecen al asistente, y si este pide una de todos modos, ModelCraft la rechaza y lo anota en el registro de actividad. Desactivar el interruptor termina de inmediato todas las conexiones; {{ui:Restablecer configuración de ModelCraft}} también lo desactiva.

## Conecte su asistente

Los asistentes se conectan mediante **CadCraft Studio** en su equipo: Studio ejecuta un pequeño servidor al que solo este equipo puede acceder, protegido por un token que genera cada vez que se inicia. En Studio, elija {{ui:Conectar un asistente}} y copie la dirección y el token en su asistente (Studio muestra los ajustes exactos que debe pegar). Nunca comparta el token.

:::note
Una pestaña del navegador no puede abrir una conexión para un asistente: en las apps de navegador el interruptor no tiene efecto hasta que use CadCraft Studio en su equipo.
:::

## Usted mantiene el control

- **Cada cambio es un paso de deshacer**, identificado con el nombre del asistente (por ejemplo, "Asistente: caja"). {{key:Mod+Z}} revierte el último cambio del asistente en su totalidad.
- **Sabrá cuándo hay uno conectado.** Un botón en la barra de aplicación muestra el nombre del asistente mientras está conectado; haga clic en él para ver lo que puede hacer, o para {{ui:Desconectar}}.
- **Actividad.** {{ui:Configuración}} › {{ui:ModelCraft}} › {{ui:Asistentes}} › {{ui:Actividad}} enumera cada llamada: cuándo, qué herramienta, y si se completó o se rechazó. {{ui:Guardar el registro}} conserva una copia.

## Qué puede pedir un asistente

| Herramienta | Permiso | Qué hace |
|---|---|---|
| `app_info`, `model_describe` | Leer | La unidad del modelo, su tamaño, y cada grupo y componente con su ubicación, si es un sólido cerrado y su volumen |
| `view_screenshot` | Leer | Una imagen de la vista 3D tal como se muestra |
| `box_add`, `cylinder_add` | Editar | Una caja o un cilindro como grupo nuevo, en un lugar y con un tamaño que usted o el asistente indiquen ("3m", "10'" o un número en la unidad del modelo) |
| `instance_move`, `instances_erase` | Editar | Desplaza o borra grupos y componentes |
| `faces_list`, `materials_list` | Leer | Las caras de un grupo o de la geometría suelta (la dirección, el área y el centro de cada una); los materiales y colores con los que puede pintar |
| `push_pull` | Editar | Empuja o tira de una cara, como lo hace {{ui:Empujar/tirar}} |
| `paint` | Editar | Pinta caras o un grupo completo con un color o un material |
| `group_make` | Editar | Crea un grupo o un componente a partir de caras y grupos sueltos |
| `scene_add`, `scene_show` | Editar | Guarda la vista como escena; va a una escena guardada |
| `mesh_add` | Editar | Un objeto de malla desde el cual comenzar (cubo, esfera, cilindro…), tal como lo agrega el espacio de trabajo Malla |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Leer / Editar | La pila de modificadores de una malla: espejo, matriz, subdivisión, bisel y los demás; nada se aplica de forma definitiva |
| `usd_export` | Exportar | El modelo como OpenUSD (.usda, .usdc o .usdz), tal como lo escribe al guardar el modelo como USD ([USD](topic:usd)); a una carpeta que haya permitido en Studio, o de lo contrario como descarga |
| `render_still` | Exportar | Una imagen renderizada de la vista o de una escena guardada, como la hace el botón {{ui:Renderizar}} del diálogo {{ui:Renderizar}}, con su configuración de render salvo que pida otra (un preajuste de escena: exterior, interior, sección, noche o automático; rápido o alta calidad, tamaño, muestras, cielo); una PNG que puede revisar, o un archivo PNG, EXR o de render en una carpeta que haya permitido en Studio ([Renderizar una imagen](topic:render)) |
| `render_queue` | Exportar | Agrega imágenes de alta calidad a la cola del diálogo Renderizar (la vista, o escenas guardadas) y ejecuta la cola; las imágenes terminadas van a una carpeta que haya permitido, o quedan en la {{ui:Cola de render}} del diálogo para usted. Requiere WebGPU |
| `link_push` | Editar | Actualiza un modelo vinculado desde otro programa (vea [Mantener en vivo un modelo .3dm](topic:live-3dm-link)) |
| `link_status` | Leer | Indica si un modelo vinculado sigue presente y cuándo se actualizó por última vez |
| `undo` | Editar | Revierte sus propios pasos |

Los sólidos que crea un asistente entran como grupos, así que nunca se fusionan con lo que usted dibujó. No hay ninguna herramienta que guarde el modelo: guardar es decisión suya, y exportar o renderizar requiere tener marcado **Exportar**. Un render no cambia nada en el modelo; renderizar una escena guardada mueve la vista hacia ella, como lo hace {{ui:Escenas}}.

## Si algo no funciona

- **El asistente no ve herramientas de ModelCraft:** compruebe que el interruptor esté activado en esta ventana, y que la ventana esté abierta en Studio.
- **"requiere el permiso de edición":** marque **Editar** en {{ui:Asistentes}} y vuelva a preguntar.
- **Errores "401" o "token":** el token cambió (Studio se reinició, o {{ui:Nuevo token}}). Copie el nuevo en los ajustes del asistente.

## Vea también

- [Recetas para asistentes de IA](common:assistants-recipes): ejemplos resueltos, cada uno con las herramientas que usa.
