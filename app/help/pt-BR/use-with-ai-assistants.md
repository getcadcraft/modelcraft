---
title: Usar o ModelCraft com um assistente de IA
summary: Deixe seu próprio assistente de IA ou script examinar o modelo e criar sólidos simples: permissões, conexão pelo CadCraft Studio e o registro de atividades.
keywords: ia, assistente, agente, mcp, protocolo de contexto de modelo, script, automação, modelagem, caixa, cilindro, renderizar, fila de renderização, permissões, desconectar, atividade
from: 629cd0b7
---

## O que você vai aprender

Como deixar um assistente de IA (ou um script que você escreveu) trabalhar com o ModelCraft, e como decidir o que ele pode alterar.

O ModelCraft **não tem IA própria** e não envia nada para lugar nenhum. Você traz o assistente: qualquer programa que fale o Model Context Protocol (MCP). O ModelCraft apenas oferece ferramentas a ele, e você escolhe quais.

## Ativar

1. Abra {{ui:Configurações}} (a engrenagem na barra do aplicativo, ou {{key:Mod+,}}) e vá para a guia {{ui:ModelCraft}}.
2. Em {{ui:Assistentes}}, marque **Permitir que assistentes de IA e scripts usem o ModelCraft**. Ele fica desligado até você fazer isso.
3. Escolha o que ele pode fazer: **Ler** vem marcado por padrão; marque **Editar**, **Salvar** ou **Exportar** somente quando precisar deles.

Ferramentas fora das permissões que você marcou não são oferecidas ao assistente, e se ele pedir uma mesmo assim, o ModelCraft recusa e registra no registro de atividades. Desligar a chave encerra todas as conexões de uma vez; {{ui:Redefinir configurações do ModelCraft}} também a desliga.

## Conecte seu assistente

Os assistentes se conectam pelo **CadCraft Studio** no seu computador: o Studio executa um pequeno servidor que só este computador consegue alcançar, protegido por um token que ele gera toda vez que inicia. No Studio, escolha {{ui:Conectar um assistente}} e copie o endereço e o token para o seu assistente (o Studio mostra as configurações exatas a colar). Nunca compartilhe o token.

:::note
Uma guia do navegador não consegue abrir uma conexão para um assistente: nos aplicativos do navegador a chave não tem efeito até você usar o CadCraft Studio no seu computador.
:::

## Você continua no controle

- **Cada alteração é uma única ação de desfazer**, com o nome do assistente como rótulo (por exemplo, "Assistente: caixa"). {{key:Mod+Z}} desfaz a última alteração do assistente por inteiro.
- **Você sabe quando há um conectado.** Um botão na barra do aplicativo mostra o nome do assistente enquanto ele está conectado; clique nele para ver o que ele pode fazer, ou para **Desconectar**.
- **Atividade.** {{ui:Configurações}} › {{ui:ModelCraft}} › {{ui:Assistentes}} › {{ui:Atividade}} lista cada chamada: quando, qual ferramenta, concluída ou recusada. {{ui:Salvar o registro}} guarda uma cópia.

## O que um assistente pode pedir

| Ferramenta | Permissão | O que faz |
|---|---|---|
| `app_info`, `model_describe` | Ler | A unidade do modelo, o tamanho, e cada grupo e componente com a posição, se é um sólido fechado e o volume |
| `view_screenshot` | Ler | Uma imagem da vista 3D como está exibida |
| `box_add`, `cylinder_add` | Editar | Uma caixa ou um cilindro como um novo grupo, em um lugar e tamanho dados por você ou pelo assistente ("3m", "10'" ou um número na unidade do modelo) |
| `instance_move`, `instances_erase` | Editar | Move ou apaga grupos e componentes |
| `faces_list`, `materials_list` | Ler | As faces de um grupo ou da geometria solta (a direção, a área e o centro de cada uma); os materiais e cores com que pode pintar |
| `push_pull` | Editar | Empurra ou puxa uma face, como faz {{ui:Empurrar/puxar}} |
| `paint` | Editar | Pinta faces ou um grupo inteiro com uma cor ou um material |
| `group_make` | Editar | Cria um grupo ou um componente a partir de faces e grupos soltos |
| `scene_add`, `scene_show` | Editar | Salva a vista como uma cena; vai para uma cena salva |
| `mesh_add` | Editar | Um objeto de malha para começar (cubo, esfera, cilindro …), como a área de trabalho {{ui:Malha}} o adiciona |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Ler / Editar | A pilha de modificadores de uma malha: espelhar, matriz, subdivisão, chanfro e os demais; nada é aplicado de forma definitiva |
| `usd_export` | Exportar | O modelo como OpenUSD (.usda, .usdc ou .usdz), como a gravação do modelo em USD o faz ([USD](topic:usd)); para uma pasta que você permitiu no Studio, senão um download |
| `render_still` | Exportar | Uma imagem renderizada da vista ou de uma cena salva, como o botão {{ui:Renderizar}} da caixa {{ui:Renderizar}} faz, com as suas configurações de renderização, a menos que ele peça outras (um predefinido de cena: exterior, interior, corte, noite ou automático; rápido ou alta qualidade, tamanho, amostras, céu); um PNG que ele pode analisar, ou um arquivo PNG, EXR ou de renderização em uma pasta que você permitiu no Studio ([Renderizar uma imagem](topic:render)) |
| `render_queue` | Exportar | Adiciona imagens de alta qualidade à fila da caixa Renderizar (a vista, ou cenas salvas) e executa a fila; as imagens prontas vão para uma pasta que você permitiu, ou ficam na {{ui:Fila de renderização}} da caixa Renderizar para você. Precisa de WebGPU |
| `link_push` | Editar | Atualiza um modelo vinculado de outro programa (veja [Manter um modelo .3dm ao vivo](topic:live-3dm-link)) |
| `link_status` | Ler | Informa se um modelo vinculado ainda está aqui e quando foi atualizado pela última vez |
| `undo` | Editar | Desfaz os seus próprios passos |

Os sólidos que um assistente cria entram como grupos, então nunca se misturam ao que você desenhou. Não há ferramenta que salve o modelo: salvar fica com você, e exportar ou renderizar exige **Exportar** marcado. Uma renderização não altera nada no modelo; renderizar uma cena salva move a vista para ela, como faz {{ui:Cenas}}.

## Se algo não funcionar

- **O assistente não vê ferramentas do ModelCraft:** verifique se a chave está ligada nesta janela e se a janela está aberta no Studio.
- **"precisa da permissão de edição":** marque **Editar** em {{ui:Assistentes}} e peça de novo.
- **Erros "401" ou "token":** o token mudou (o Studio foi reiniciado, ou {{ui:Novo token}}). Copie o novo para as configurações do assistente.

## Veja também

- [Receitas para assistentes de IA](common:assistants-recipes): exemplos práticos, cada um com as ferramentas que chama.
