---
title: Vindo de outros modeladores
summary: Como os hábitos de modelagem com empurrar/puxar se correspondem ao ModelCraft, tecla por tecla, e as diferenças que pegam as pessoas de surpresa.
keywords: migração, familiar, diferenças, empurrar puxar, modelador, skp, atalhos, hábitos, comparar, caixa de medidas, lista de objetos, informações da entidade
from: 74ffd4ac
---

Se você modelou no SketchUp, o ModelCraft vai parecer familiar: a mesma ideia de faces e empurrar/puxar, as mesmas letras de ferramenta, uma caixa de valores onde você digita sem clicar, inferência com os eixos vermelho, verde e azul, grupos, componentes, uma lista de objetos (Outliner), Informações da entidade e cenas. Esta página lista o que se corresponde diretamente e, mais importante, o que não se corresponde.

## Hábitos que se mantêm

| Você está acostumado a | No ModelCraft |
|---|---|
| Pressionar Space para Selecionar, L para Linha, R para Retângulo, C para Círculo | O mesmo: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Pressionar P para Empurrar/puxar, M para Mover, Q para Girar, S para Escala, E para Borracha, T para Trena | O mesmo: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Pressionar O para Órbita, H para Pan, Z para Zoom, Shift+Z para Zoom extensão | O mesmo: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Pressionar G para criar um componente | O mesmo: {{key:G}}. {{key:Shift+G}} cria um grupo |
| Digitar na caixa de Medidas sem clicar nela | O mesmo, na caixa de valor na parte inferior. Pressione {{key:Enter}} |
| Digitar `4m,3m` para um retângulo, `12s` para lados | O mesmo |
| Digitar `3x` ou `/3` após uma cópia com Mover | O mesmo; `*3` também funciona |
| Digitar `[x,y,z]` ou `<dx,dy,dz>` para um ponto ou deslocamento | O mesmo |
| Digitar um número puro em um modelo arquitetônico em polegadas e obter polegadas | O mesmo |
| Arrastar com o botão do meio para orbitar, Shift+botão do meio para fazer pan, roda para dar zoom no cursor | O mesmo |
| Clicar duas vezes com Empurrar/puxar para repetir a distância | O mesmo |
| Teclas de seta para travar vermelho, verde, azul e paralelo | O mesmo: {{key:Right}} vermelho, {{key:Left}} verde, {{key:Up}} azul, {{key:Down}} paralelo |
| Segurar Shift para travar uma inferência | O mesmo |
| Ctrl (Option no Mac) para copiar ao mover | {{key:Ctrl}}, {{key:Mod}} ou {{key:Alt}}, em qualquer computador |
| Shift para alternar, Ctrl para adicionar, Shift+Ctrl para remover da seleção | As mesmas teclas; em um Mac use {{key:Mod}} onde está escrito Ctrl |
| Janela da esquerda para a direita, cruzamento da direita para a esquerda | O mesmo |
| Uma ferramenta Cota para rotular comprimentos | {{key:D}}, e mais: digite um novo comprimento em uma cota e o modelo se redimensiona. Veja [Cota e redimensionamento](topic:dimensions) |
| Clicar duas vezes em uma face para a face e as arestas; três vezes para tudo conectado | O mesmo |
| Clicar duas vezes em um grupo para editá-lo; Esc para fechar | O mesmo |
| Desenhar uma linha atravessando uma face para dividi-la; apagar uma aresta entre faces coplanares para uni-las | O mesmo |
| Empurrar um retângulo de janela através de uma parede para recortá-la | O mesmo |
| Faces de trás em cinza-azulado; Inverter faces | A mesma cor; {{ui:Inverter face}} em {{ui:Informações da entidade}} |
| Cenas como abas sobre a vista, Page Up e Page Down | O mesmo, com {{ui:Reproduzir}} no painel {{ui:Cenas}} |
| Sombras a partir de data, hora, latitude e longitude, com o norte em verde | O mesmo, no painel {{ui:Estilo}} |

## Diferenças que pegam as pessoas de surpresa

### Salvar é um download

Não existe um Salvar que sobrescreva o arquivo aberto, nem uma caixa Salvar como com nome, nem salvamento automático e nem arquivo de backup. {{ui:Salvar}} ({{key:Mod+S}}) baixa um novo arquivo `.modelcraft` a cada vez, normalmente para a sua pasta de downloads. Salve com frequência e renomeie ou mova os arquivos você mesmo. Veja [Abrir, salvar, importar e exportar](topic:files).

### Ele importa arquivos .skp, mas não os salva

{{ui:Importar}} lê arquivos do SketchUp com o leitor próprio do ModelCraft, na página: grupos, componentes, cores, texturas nas faces, etiquetas e arestas suaves são trazidos. Veja [Formatos de arquivo em detalhes](topic:formats#skp-files). O ModelCraft não consegue salvar `.skp`: para voltar, exporte Collada a partir do ModelCraft e importe no SketchUp.

### Sem menu de clique com o botão direito

Arrastar com o botão direito faz pan; um clique com o botão direito não faz nada. Os comandos que você encontraria no menu de contexto estão em {{ui:Informações da entidade}} ({{ui:Inverter face}}, {{ui:Editar}}, {{ui:Explodir}}, {{ui:Tornar único}}, {{ui:Criar componente}}) e no grupo {{ui:Organizar}} da barra de ferramentas.

### As unidades ficam na barra de status

Não há Informações do modelo nem escolha de modelo. O seletor de unidades fica no canto inferior direito. Um novo modelo começa em pés e polegadas nos EUA e em milímetros nos demais países, conforme a configuração de idioma do seu navegador. Decimais sempre usam ponto: `2.5m`, nunca `2,5m`, porque a vírgula sempre separa valores.

### A pintura tem materiais próprios

{{ui:Pintar}} ({{key:B}}) pinta cores sólidas e os materiais da seção {{ui:Materiais}}: tijolo, revestimento, telhado, madeira, pedra e mais, desenhados pelo ModelCraft. Você ainda não pode carregar sua própria imagem como material; texturas que vêm em arquivos importados são mantidas. Veja [Pintar com cores e materiais](topic:paint).

### A escala é uniforme, sem grips

A escala não mostra uma caixa com grips. Clique no ponto que permanece fixo, um ponto de referência, depois no novo tamanho ou em um fator digitado. Ela sempre escala de forma uniforme em todas as direções. Para esticar em uma direção, use empurrar/puxar ou mova uma face, digite de novo a largura, a profundidade ou a altura de um grupo em {{ui:Informações da entidade}}, ou [redimensione com uma cota](topic:dimensions).

### Girar escolhe seu plano a partir de onde você clica

Não há transferidor que se prende às faces enquanto você passa o cursor com as teclas de seta para escolher o plano. Clique no centro sobre uma face para girar no plano dessa face, ou no chão para girar em torno da vertical. As teclas de seta orbitam a vista antes do primeiro clique.

### Inferência a partir de pontos por onde você passa

O ModelCraft faz snap nas direções dos eixos a partir do **seu ponto inicial**, e em pontos, arestas e faces sob o cursor. Ele não rastreia uma direção a partir de um ponto apenas sobreposto (a inferência pontilhada de "a partir do ponto"). Para alinhar com um canto distante, trave o eixo com uma tecla de seta e passe o cursor sobre esse canto: o ponto travado desliza para se alinhar a ele. Ou coloque uma [guia](topic:guides-measure).

### Paralelo usa a aresta por onde você passou antes de começar

A inferência paralela e perpendicular usa a última aresta que o cursor cruzou **antes do primeiro clique**, não as arestas sobre as quais você passa enquanto desenha. Veja [Inferência e snap](topic:inference#parallel-and-perpendicular).

### Cópias de um grupo são vinculadas

Copiar um grupo com {{ui:Mover}} cria um segundo posicionamento do mesmo grupo, então editar um altera os dois, como acontece com componentes. O SketchUp torna os grupos independentes. Veja [Solução de problemas](topic:troubleshooting#editing-one-group-changed-another).

### Space não faz pan

{{key:Space}} escolhe {{ui:Selecionar}}, como no SketchUp. Em alguns outros aplicativos web, manter Space pressionado faz pan; aqui não. Arrastar com o botão direito faz pan.

### Rolagem com dois dedos dá zoom

Em um trackpad, defina {{ui:Configurações}} › {{ui:ModelCraft}} › Rolagem como Trackpad: dois dedos orbitam, {{key:Shift}} com dois dedos faz pan, um pinçamento dá zoom. Veja [Orbitar, fazer pan e zoom](topic:orbit-pan-zoom#on-a-trackpad).

Se suas mãos conhecem as teclas do Blender em vez das do SketchUp, escolha o estilo de menu {{ui:Modelagem}}: {{key:G}}, {{key:R}} e {{key:S}} agem sobre a seleção de uma vez, {{key:E}} extrude (empurrar/puxar), {{key:Shift+D}} duplica, e uma barra de menus no cabeçalho (Arquivo, Editar, Exibir, Selecionar, Adicionar, Objeto, Malha) substitui a barra de ferramentas. Vindo do SketchUp, o estilo {{ui:Empurrar/puxar}} oferece uma barra de menus parecida com a dele, com as mesmas letras de ferramenta. Veja [Menus, teclas e mouse](topic:menus-keys-and-mouse).

### Sólidos empurrados um contra o outro não se cortam

Empurrar/puxar corta a face atrás dela no mesmo objeto, mas dois sólidos separados empurrados um contra o outro não se interceptam. Não há Interseção de faces nem Ferramentas de sólidos.

### O que falta

Mão livre, Aparar, Dividir e Casca externa, materiais de imagem próprios, extensões e uma ferramenta de layout para folhas não estão nesta versão. [Ainda não implementado](topic:not-built-yet) lista o que fazer em vez disso.

## Atalhos que o navegador mantém

O ModelCraft roda em um navegador, então alguns atalhos pertencem ao navegador, não ao aplicativo. {{key:Mod+N}} abre uma janela do navegador (use {{ui:Novo}}), e {{key:Mod+W}} fecha a aba. Se houver alterações não salvas, o navegador pergunta antes de fechar. Veja [Teclas, mouse e trackpads](common:keys#shortcuts-the-browser-keeps).
