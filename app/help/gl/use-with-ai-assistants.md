---
title: Usar ModelCraft cun asistente de IA
summary: Deixe que o seu asistente de IA ou script propio vexa o modelo e cree sólidos sinxelos: permisos, conexión a través de CadCraft Studio e o rexistro de actividade.
keywords: ia, asistente, axente, mcp, protocolo de contexto do modelo, script, automatización, modelado, caixa, cilindro, render, cola de render, permisos, desconectar, actividade
from: 629cd0b7
---

## O que vai aprender

Como deixar que un asistente de IA (ou un script que escribiu) traballe con ModelCraft, e como decidir o que pode tocar.

ModelCraft **non ten IA propia** e non envía nada a ningún lado. Vostede aporta o asistente: calquera programa que fale o protocolo Model Context Protocol (MCP). ModelCraft só lle dá ferramentas, e vostede escolle cales.

## Activalo

1. Abra {{ui:Configuración}} (a engrenaxe da barra da aplicación, ou {{key:Mod+,}}) e vaia á lapela {{ui:ModelCraft}}.
2. Baixo {{ui:Asistentes}}, marque **Permitir que os asistentes de IA e os scripts usen ModelCraft**. Está desactivado ata que o faga.
3. Escolla o que pode facer: **Ler** está marcado ao principio; marque **Editar**, **Gardar** ou **Exportar** só cando os necesite.

As ferramentas fóra dos permisos que marcou non se ofrecen ao asistente; se o pide igualmente, ModelCraft rexéitaa e anótaa no rexistro de actividade. Desactivar o interruptor corta todas as conexións de golpe; {{ui:Restablecer a configuración de ModelCraft}} tamén o desactiva.

## Conectar o asistente

Os asistentes conéctanse a través de **CadCraft Studio** no seu ordenador: Studio executa un pequeno servidor ao que só este ordenador pode chegar, protexido por un token que crea cada vez que arranca. En Studio, escolla {{ui:Conectar un asistente}} e copie o enderezo e o token no seu asistente (Studio mostra os axustes exactos que hai que pegar). Non comparta nunca o token.

:::note
Unha pestana do navegador non pode abrir unha conexión para un asistente: nas aplicacións do navegador o interruptor non ten efecto ata que use CadCraft Studio no seu ordenador.
:::

## Vostede segue ao mando

- **Cada cambio é un paso de desfacer**, etiquetado co nome que lle dá o asistente (por exemplo, "Assistant: box"). {{key:Mod+Z}} desfai por completo o último cambio do asistente.
- **Vostede sabe cando hai un conectado.** Un botón na barra da aplicación indica o nome do asistente mentres está conectado; prema nel para ver o que pode facer, ou para **Desconectalo**.
- **Actividade.** {{ui:Configuración}} › {{ui:ModelCraft}} › {{ui:Asistentes}} › {{ui:Actividade}} enumera cada chamada: cando, que ferramenta, feita ou rexeitada. {{ui:Gardar o rexistro}} conserva unha copia.

## Que lle pode pedir un asistente

| Ferramenta | Permiso | Que fai |
|---|---|---|
| `app_info`, `model_describe` | Ler | A unidade do modelo, o tamaño, e cada grupo e compoñente con onde está, se é un sólido pechado e o seu volume |
| `view_screenshot` | Ler | Unha imaxe da vista 3D tal como se ve |
| `box_add`, `cylinder_add` | Editar | Unha caixa ou un cilindro como grupo novo, nun lugar e tamaño que lle dea vostede ou o asistente ("3m", "10'" ou un número na unidade do modelo) |
| `instance_move`, `instances_erase` | Editar | Move ou borra grupos e compoñentes |
| `faces_list`, `materials_list` | Ler | As caras dun grupo ou da xeometría solta (a dirección, a superficie e o centro de cada unha); os materiais e cores cos que pode pintar |
| `push_pull` | Editar | Empurra ou tira dunha cara, como fai {{ui:Empurrar/tirar}} |
| `paint` | Editar | Pinta caras ou un grupo completo cunha cor ou un material |
| `group_make` | Editar | Crea un grupo ou un compoñente con caras e grupos soltos |
| `scene_add`, `scene_show` | Editar | Garda a vista como escena; vai a unha escena gardada |
| `mesh_add` | Editar | Un obxecto de malla co que comezar (cubo, esfera, cilindro…), tal como o engade o espazo de traballo Malla |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Ler / Editar | A pila de modificadores dunha malla: espello, matriz, subdivisión, bisel e o resto; non se aplica nada de xeito definitivo |
| `usd_export` | Exportar | O modelo como OpenUSD (.usda, .usdc ou .usdz), tal como o escribe gardar o modelo como USD ([USD](topic:usd)); nun cartafol que permitiu en Studio, se non, unha descarga |
| `render_still` | Exportar | Unha imaxe renderizada da vista ou dunha escena gardada, tal como a fai o botón {{ui:Renderizar}} do diálogo {{ui:Renderizar}}, coa configuración de renderizado que vostede fixo salvo que pida outra (un predefinido de escena: exterior, interior, sección, noite ou automático; rápido ou alta calidade, tamaño, mostras, ceo); un PNG que poida ver, ou un PNG, EXR ou ficheiro de render nun cartafol que permitiu en Studio ([Renderizar unha imaxe](topic:render)) |
| `render_queue` | Exportar | Engade imaxes de alta calidade á cola do diálogo Renderizar (a vista, ou escenas gardadas) e executa a cola; as imaxes acabadas van a un cartafol que permitiu, ou quedan na {{ui:Cola de render}} do diálogo Renderizar para vostede. Precisa WebGPU |
| `link_push` | Editar | Actualiza un modelo enlazado desde outro programa (ver [Manter un modelo .3dm en directo](topic:live-3dm-link)) |
| `link_status` | Ler | Indica se un modelo enlazado segue aquí e cando se actualizou por última vez |
| `undo` | Editar | Desfai os seus propios pasos |

Os sólidos que fai un asistente entran como grupos, así que nunca se funden co que vostede debuxou. Non hai ferramenta que garde o modelo: gardar segue sendo cousa súa, e exportar ou renderizar precisa marcado **Exportar**. Un renderizado non cambia nada no modelo; renderizar unha escena gardada move a vista a ela, como fai {{ui:Escenas}}.

## Se algo non funciona

- **O asistente non ve ferramentas de ModelCraft:** comprobe que o interruptor está activado nesta xanela, e que a xanela está aberta en Studio.
- **"necesita o permiso de edición":** marque **Editar** baixo {{ui:Asistentes}} e pregunte de novo.
- **Erros "401" ou "token":** o token cambiou (Studio reiniciouse, ou {{ui:Novo token}}). Copie o novo nos axustes do asistente.

## Ver tamén

- [Receitas para asistentes de IA](common:assistants-recipes): exemplos traballados, cada un coas ferramentas que chama.
