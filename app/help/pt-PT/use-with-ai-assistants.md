---
title: Utilizar o ModelCraft com um assistente de IA
summary: Deixe o assistente de IA ou o script ver o modelo e criar sólidos simples: permissões, ligação através do CadCraft Studio e o registo de atividade.
keywords: ia, assistente, agente, mcp, model context protocol, script, automação, modelação, caixa, cilindro, renderizar, fila de renderização, permissões, desligar, atividade
from: 629cd0b7
---

## O que vai aprender

Como deixar um assistente de IA (ou um script que escreveu) trabalhar com o ModelCraft, e como decidir o que ele pode tocar.

O ModelCraft **não tem IA própria** e não envia nada para lado nenhum. Fica a seu cargo trazer o assistente: qualquer programa que fale o Model Context Protocol (MCP). O ModelCraft limita-se a dar-lhe ferramentas, e é o utilizador quem escolhe quais.

## Ativar

1. Abra {{ui:Definições}} (a roda dentada na barra da aplicação, ou {{key:Mod+,}}) e vá para o separador {{ui:ModelCraft}}.
2. Em {{ui:Assistentes}}, marque **Permitir que assistentes de IA e scripts usem o ModelCraft**. Está desativado até que o faça.
3. Escolha o que pode fazer: **Ler** vem marcado por predefinição; marque **Editar**, **Guardar** ou **Exportar** apenas quando precisar deles.

As ferramentas fora das permissões que marcou não são oferecidas ao assistente; se ele pedir uma mesmo assim, o ModelCraft recusa-a e regista-o no registo de atividade. Desligar o interruptor termina de imediato todas as ligações; {{ui:Repor definições do ModelCraft}} também o desliga.

## Ligar o assistente

Os assistentes ligam-se através do **CadCraft Studio** no computador: o Studio executa um pequeno servidor que só este computador consegue alcançar, protegido por um token que gera de cada vez que arranca. No Studio, escolha {{ui:Ligar um assistente}} e copie o endereço e o token para o assistente (o Studio mostra as definições exatas a colar). Nunca partilhe o token.

:::note
Um separador do navegador não consegue abrir uma ligação para um assistente: nas aplicações do navegador, o interruptor não tem efeito até se usar o CadCraft Studio no computador.
:::

## Continua no controlo

- **Cada alteração corresponde a um só passo de anulação**, identificado com o nome que o assistente lhe dá (por exemplo, «Assistente: caixa»). {{key:Mod+Z}} anula a última alteração do assistente por inteiro.
- **Fica a saber quando um assistente está ligado.** Um botão na barra da aplicação indica o assistente enquanto estiver ligado; clique nele para ver o que pode fazer, ou para o **Desligar**.
- **Atividade.** {{ui:Definições}} › {{ui:ModelCraft}} › {{ui:Assistentes}} › {{ui:Atividade}} lista cada chamada: quando, que ferramenta, e se foi concluída ou recusada. {{ui:Guardar o registo}} guarda uma cópia.

## O que um assistente pode pedir

| Ferramenta | Permissão | O que faz |
|---|---|---|
| `app_info`, `model_describe` | Ler | A unidade do modelo, o tamanho, e cada grupo e componente com a sua posição, se é um sólido fechado e o seu volume |
| `view_screenshot` | Ler | Uma imagem da vista 3D tal como está apresentada |
| `box_add`, `cylinder_add` | Editar | Uma caixa ou um cilindro como novo grupo, numa posição e com um tamanho indicados pelo utilizador ou pelo assistente («3m», «10'» ou um número na unidade do modelo) |
| `instance_move`, `instances_erase` | Editar | Move ou apaga grupos e componentes |
| `faces_list`, `materials_list` | Ler | As faces de um grupo ou da geometria solta (a direção, a área e o centro de cada uma); os materiais e as cores com que pode pintar |
| `push_pull` | Editar | Empurra ou puxa uma face, tal como faz {{ui:Empurrar/puxar}} |
| `paint` | Editar | Pinta faces ou um grupo inteiro com uma cor ou um material |
| `group_make` | Editar | Cria um grupo ou um componente a partir de faces e grupos soltos |
| `scene_add`, `scene_show` | Editar | Guarda a vista como cena; vai para uma cena guardada |
| `mesh_add` | Editar | Um objeto de malha com que começar (cubo, esfera, cilindro …), tal como a área de trabalho Malha o adiciona |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Ler / Editar | A pilha de modificadores de uma malha: espelho, matriz, subdivisão, chanfro e os restantes; nada é aplicado de forma definitiva |
| `usd_export` | Exportar | O modelo como OpenUSD (.usda, .usdc ou .usdz), tal como guardar o modelo como USD o escreve ([USD](topic:usd)); para uma pasta autorizada no Studio, caso contrário, uma transferência |
| `render_still` | Exportar | Uma imagem renderizada da vista ou de uma cena guardada, tal como o botão {{ui:Renderizar}} da caixa de diálogo {{ui:Renderizar}} a faz, com as suas definições de renderização, a menos que peça outras (uma predefinição de cena: exterior, interior, {{ui:Corte}}, noite ou automática; rápida ou alta qualidade, tamanho, amostras, céu); um PNG que pode ver, ou um ficheiro PNG, EXR ou de renderização numa pasta autorizada no Studio ([Renderizar uma imagem](topic:render)) |
| `render_queue` | Exportar | Acrescenta imagens de alta qualidade à fila da caixa de diálogo {{ui:Renderizar}} (a vista, ou cenas guardadas) e executa a fila; as imagens concluídas vão para uma pasta autorizada, ou ficam na {{ui:Fila de renderização}} da caixa de diálogo, à disposição. Requer WebGPU |
| `link_push` | Editar | Atualiza um modelo ligado a partir de outro programa (ver [Manter um modelo .3dm em direto](topic:live-3dm-link)) |
| `link_status` | Ler | Indica se um modelo ligado ainda está presente e quando foi atualizado pela última vez |
| `undo` | Editar | Anula os seus próprios passos |

Os sólidos criados por um assistente entram como grupos, pelo que nunca se fundem com o que desenhou. Não existe nenhuma ferramenta que guarde o modelo: guardar cabe ao utilizador, e exportar ou renderizar exige que **Exportar** esteja marcado. Uma renderização não altera nada no modelo; renderizar uma cena guardada move a vista para ela, tal como faz {{ui:Cenas}}.

## Se algo não funcionar

- **O assistente não vê ferramentas do ModelCraft:** verifique se o interruptor está ligado nesta janela e se a janela está aberta no Studio.
- **«requer a permissão de edição»:** marque **Editar** em {{ui:Assistentes}} e peça de novo.
- **Erros «401» ou «token»:** o token mudou (o Studio foi reiniciado, ou {{ui:Novo token}}). Copie o novo token para as definições do assistente.

## Ver também

- [Receitas para assistentes de IA](common:assistants-recipes): exemplos práticos, cada um com as ferramentas que utiliza.
