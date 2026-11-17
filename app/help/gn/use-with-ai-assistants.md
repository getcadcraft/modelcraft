---
title: Ojapo ModelCraft asistente de IA ndive
summary: Emoguahẽ ndéve asistente de IA térã script ojehecha hag̃ua modelo ha ojapo sólido simple: permisos, conexión CadCraft Studio rupive, ha registro de actividad.
keywords: ia, asistente, agente, mcp, protocolo de contexto de modelo, script, automatización, modelado, caja, cilindro, render, cola de renderizado, permisos, desconectar, actividad
from: 629cd0b7
---

## Mba'épa ereikuaa

Mba'éichapa eikotevẽ asistente de IA (térã script nde ojapova'ekue) ojapo ModelCraft ndive ha mba'éichapa eikotevẽ eheja mba'épa oikotevẽ chupe.

ModelCraft-pe **ndaipóri IA ijeheguĩ** ha nomondéi mba'eve. Nde ejuhu asistente: mba'e programa oiporúva Model Context Protocol (MCP). ModelCraft ome'ẽ chupe tembipuru añónte, ha nde ejeporavo mba'épa ojepuráta.

## Emoaktiva

1. Abrí {{ui:Settings}} (engranaje app barra-pe térã {{key:Mod+,}}) ha ejuhu {{ui:ModelCraft}} pestaña-pe.
2. {{ui:Assistants}} apytépe, marcá **Let AI assistants and scripts use ModelCraft**. Ojejapo'ỹ peve ndaipóri.
3. Eporavo mba'épa ojapo ta'ỹ: **Read** oñemarcá kuri; marcá **Edit**, **Save** térã **Export** rehecha añónte oikotevẽvo.

Permiso nderehegua'ỹva tembipuru ndojeskontrolavéi asistente-pe, ha asistente ojerdirexeséramo ndojapomo'ãi ModelCraft, ha ojehai registro de actividad-pe. Llave ojehuguy vove ojeheja opa conexión jeyva, ha {{ui:Reset ModelCraft settings}} omboguejy avei.

## Emoñemoĩ nde asistente

Asistente ohendu CadCraft Studio rupi nde kompyutadór-pe: Studio omoañete peteĩ mbohapy servidor, ohekáva peteĩ tembipuru ojapo chupe avei cada ojepyrũ vez. Studio-pe, eheka {{ui:Connect an assistant}} ha emoña dirección ha token asistente-pe (Studio omosẽ mba'épa oikotevẽ moĩ). **Ndaha'éi jeytapa token.**

:::note
Nevegadór pestaña ndaikatúi oñemoĩ conexión asistente-pe: nevegadór app-pe llave ndoikói peve ndepuráiva CadCraft Studio nde kompyutadór-pe.
:::

## Nde ha'e nde ñemboʼapo rehe

- **Opa cambio peteĩ paso de deshacer**, oñembohérava asistente rérã (ejemplo "Asistente: caja"). {{key:Mod+Z}} omboguejy asistente oikóva opa oñemoambue.
- **Nde ikuaa oñemoĩ vove.** Botón app barra-pe omombe'u asistente oñemoĩva; eheka hag̃ua mba'épa ikatu ha **Desconectar** hag̃ua.
- **Actividad.** {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Assistants}} › {{ui:Activity}} ohechauka opa llamada: mboʼéi jepe, mba'e tembipuru, ojapo térã ojepe'a. {{ui:Save the log}} omoñe'ẽ peteĩ kopia.

## Mba'épa asistente ikatu oikotevẽ

| Tembipuru | Permiso | Mba'épa oñemboja |
|---|---|---|
| `app_info`, `model_describe` | Read | Modelo unidad, tamaño, opa grupo ha componente mba'éichapa oĩ, ha'e sólido cerrado térã ndaha'éi, ha volumen |
| `view_screenshot` | Read | Peteĩ imagen 3D vista oĩvare |
| `box_add`, `cylinder_add` | Edit | Peteĩ caja térã cilindro grupo pyahu-ramo, nde térã chupe emoñeʼẽva tamaño ha lugar ("3m", "10'" térã peteĩ número modelo unidad-pe) |
| `instance_move`, `instances_erase` | Edit | Oñemoambue térã oñemboguejy grupo térã componente |
| `faces_list`, `materials_list` | Read | Grupo térã ndeforma geometría cara (cada peteĩ dirección, superficie ha centro); material ha color oikotevẽva pintar hag̃ua |
| `push_pull` | Edit | Oñemoĩ térã oñemboguejy peteĩ cara, {{ui:Push/Pull}} oipuráva |
| `paint` | Edit | Pinta cara térã grupo entero color térã material rupi |
| `group_make` | Edit | Ojapo grupo térã componente cara ndeforma ha grupo rupi |
| `scene_add`, `scene_show` | Edit | Oñemboʼe vista escena-pe; oho escena oñemboʼévape |
| `mesh_add` | Edit | Peteĩ malla objeto oñepyrũ hag̃ua (cubo, esfera, cilindro …), Mesh workspace oipuráva |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Read / Edit | Malla modificador pila: espejo, array, subdivisión, bisel ha ambue; mba'eve ndojejapói mbovy |
| `usd_export` | Export | Modelo OpenUSD-pe (.usda, .usdc térã .usdz), USD-pe modelo oñemboʼévaicha ([USD](topic:usd)); Studio-pe ejeporavo tenda-pe, térã descarga |
| `render_still` | Export | Peteĩ imagen renderizada vista térã escena oñemboʼévape, {{ui:Render}} diálogo botón oipuráva, Render configuración nde rehe ojapóva ndaipórivoi ambue ojerekóramo (escena preset: exterior, interior, sección, noche térã auto; rápido térã alta calidad, tamaño, muestras, cielo); PNG ojehecha hag̃ua, térã PNG, EXR térã render archivo Studio-pe ejeporavo tenda-pe ([Render a picture](topic:render)) |
| `render_queue` | Export | Ohupyty imagen alta calidad {{ui:Render}} diálogo cola-pe (vista térã escena oñemboʼévape) ha omoñepyrũ cola; imagen oñemohuʼẽva oho tenda eporavo-pe térã ohendive {{ui:Render queue}}-pe. WebGPU oikotevẽ |
| `link_push` | Edit | Oñemoambue modelo ambue programa rupi oñemboʼéva ([Keep a .3dm model live](topic:live-3dm-link)) |
| `link_status` | Read | Omombe'u oĩ piko modelo oñemboʼéva ha mbovy ojemoambuepa |
| `undo` | Edit | Oñembogue chupe ijapo paso |

Asistente ojapova'ekue sólido oúta grupo rupi, upévare ndojoaju'ỹi mba'e nde ojapova'ekuére. Ndaipóri tembipuru oñeambaʼeva modelo: ñeñongatu nde rehe, ha exportar térã render oikotevẽ **Export** marcado. Render ndoñemoambuei modelo; render oñemboʼéva escena oñemboʼe vista chugui, ojehecha {{ui:Scenes}} rupi.

## Oiko jepe ndoikói

- **Asistente ndehecháiva ModelCraft tembipuru:** eikuaa piko llave oĩ ko ventana-pe, ha ko ventana oĩ Studio-pe.
- **"needs the edit permission":** marcá **Edit** {{ui:Assistants}} apytépe, upéi emaña jey.
- **"401" térã "token" error:** token oñemoambue (Studio ojepe'a térã {{ui:New token}}). Emoĩ pyahu asistente configuración-pe.

## Ambue ohechauka

- [Recipes for AI assistants](common:assistants-recipes): ejemplo oñemboja, opa ojapóva tembipuru rehe.
