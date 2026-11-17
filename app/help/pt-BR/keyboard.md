---
title: Teclas e ações do mouse
summary: Todos os atalhos de teclado, ações do mouse, gestos do trackpad e gestos de toque do ModelCraft, agrupados pelo que fazem.
keywords: teclado, atalhos, teclas, teclas de atalho, mouse, trackpad, toque, gestos, cola de atalhos, ctrl, comando, teclas de seta
from: e2348957
---

Estas são as teclas do estilo push-pull, aquele com que o ModelCraft começa. Para o outro estilo, veja [Teclas Modeler](topic:keyboard#modeler-keys) abaixo e [Configurações do ModelCraft](topic:settings).

Os atalhos funcionam quando a vista 3D ou um botão da barra de ferramentas tem o foco. Se você acabou de digitar em um campo de painel ou alterou uma lista em {{ui:Estilo}}, clique primeiro na vista 3D, senão suas teclas vão para esse campo. Veja [Teclas, mouse e trackpads](common:keys) para saber como as teclas são escritas em cada computador.

## Ferramentas

| Tecla | Ferramenta |
|---|---|
| {{key:Space}} | {{ui:Selecionar}} |
| {{key:L}} | {{ui:Linha}} |
| {{key:R}} | {{ui:Retângulo}} |
| {{key:C}} | {{ui:Círculo}} |
| {{key:N}} | {{ui:Polígono}} |
| {{key:A}} | {{ui:Arco}} |
| {{key:F}} | {{ui:Deslocar}} |
| {{key:B}} | {{ui:Pintar}} |
| {{key:P}} | {{ui:Empurrar/puxar}} |
| {{key:M}} | {{ui:Mover}} |
| {{key:Q}} | {{ui:Girar}} |
| {{key:S}} | {{ui:Escala}} |
| {{key:E}} | {{ui:Borracha}} |
| {{key:T}} | Medição com {{ui:Fita métrica}} |
| {{key:D}} | {{ui:Cota}} |
| {{key:O}} | {{ui:Órbita}} |
| {{key:H}} | {{ui:Pan}} |
| {{key:Z}} | {{ui:Zoom}} |

As teclas de ferramenta funcionam somente sem teclas modificadoras: {{key:Shift}} com uma letra não faz nada, exceto as duas abaixo.

## Modelo e arquivo

| Tecla | Faz |
|---|---|
| {{key:G}} | Criar componente a partir da seleção |
| {{key:Shift+G}} | Criar grupo a partir da seleção |
| {{key:Shift+Z}} | Zoom extensão (o modelo inteiro) |
| {{key:Mod+Z}} | Desfazer |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | Refazer |
| {{key:Mod+S}} | Salvar (baixa o arquivo `.modelcraft`) |
| {{key:Mod+O}} | Abrir um modelo |
| {{key:Mod+A}} | Selecionar tudo (no grupo aberto, se houver um) |
| {{key:Mod+C}} | Copiar a seleção |
| {{key:Mod+X}} | Recortar a seleção |
| {{key:Mod+V}} | Colar: a cópia segue o ponteiro; clique onde ela deve ir |
| {{key:Mod+Shift+V}} | Colar no mesmo local (de onde foi copiada) |
| {{key:Mod+D}} | Duplicar: uma cópia se move com o ponteiro; clique para posicioná-la |
| {{key:Delete}} ou {{key:Backspace}} | Apagar a seleção |
| {{key:PageDown}} / {{key:PageUp}} | Cena seguinte / anterior |
| {{key:F1}} | Abrir ou fechar esta ajuda (também {{ui:Ajuda}} na barra do aplicativo; {{key:Esc}} dentro da ajuda a fecha) |
| {{key:Ctrl+Shift+F}} | Modo de tela: tela cheia, depois barras ocultas, depois normal (Control também no Mac) |

## Esc

{{key:Esc}} volta um nível a cada vez que você pressiona:

1. Cancela o que a ferramenta está fazendo (uma linha sendo desenhada, um empurrar/puxar, um mover). Tudo volta ao estado anterior.
2. Muda para {{ui:Selecionar}}.
3. Limpa a seleção.
4. Fecha o grupo que você está editando.

Ele também interrompe a reprodução de cenas. Na caixa de valor, {{key:Esc}} apaga o que você digitou e retorna para a vista.

## Enquanto uma ferramenta funciona

| Tecla | Faz |
|---|---|
| Um dígito, ou um dos caracteres `. , - ' " [ < * /` | Começa a digitar na caixa de valor |
| {{key:Enter}} | Aplica o que você digitou na caixa de valor |
| {{key:Right}} | Bloqueia no eixo vermelho (pressione de novo para desbloquear) |
| {{key:Left}} | Bloqueia no eixo verde |
| {{key:Up}} | Bloqueia no eixo azul |
| {{key:Down}} | Bloqueia paralelo à última aresta sobre a qual você passou antes do primeiro clique |
| Segure {{key:Shift}} | Mantém a direção em que você está encaixado, enquanto estiver pressionado |
| {{key:Ctrl}}, {{key:Mod}} ou {{key:Alt}} (Mover) | Alterna entre mover e copiar |

Os bloqueios com teclas de seta funcionam em {{ui:Linha}}, {{ui:Retângulo}}, {{ui:Círculo}}, {{ui:Polígono}}, {{ui:Mover}}, {{ui:Escala}} e {{ui:Fita métrica}} (ao medir a partir de um ponto), depois do primeiro clique. {{ui:Empurrar/puxar}} sempre se move na direção da face e não tem bloqueios. Em {{ui:Girar}}, as teclas de seta mostram uma mensagem "Bloqueado" depois do primeiro clique, mas não alteram o giro.

## Teclas de seta em outros momentos

Quando nenhuma ferramenta está no meio de uma ação, as teclas de seta movem a câmera:

| Tecla | Faz |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Orbitar |
| {{key:Shift}} com uma seta | Pan |

## Mouse

| Ação | Faz |
|---|---|
| Clique | Usa a ferramenta atual |
| Pressionar, arrastar, soltar | Igual a dois cliques (para ferramentas de desenho); uma seleção por janela (para {{ui:Selecionar}}); apaga pelo caminho (para {{ui:Borracha}}) |
| Clique duplo | {{ui:Selecionar}}: face com suas arestas, aresta com suas faces, abre um grupo; espaço vazio fecha o grupo. {{ui:Empurrar/puxar}}: repete a última distância |
| Clique triplo | {{ui:Selecionar}}: tudo o que está conectado |
| {{key:Shift}} + clique | {{ui:Selecionar}}: alterna entrar e sair da seleção |
| {{key:Mod}} + clique | {{ui:Selecionar}}: adiciona à seleção |
| {{key:Shift}} + {{key:Mod}} + clique | {{ui:Selecionar}}: remove da seleção |
| Arrastar com o botão do meio | Orbitar, com qualquer ferramenta |
| {{key:Shift}} + arrastar com o botão do meio | Pan, com qualquer ferramenta |
| Arrastar com o botão direito | Pan, com qualquer ferramenta |
| Roda | Zoom em direção ao ponteiro |

Não há menu de clique com o botão direito.

## Trackpad

O que um deslize com dois dedos faz depende de {{ui:Configurações}} › {{ui:ModelCraft}} › Rolagem:

| Gesto | Trackpad (ou deduzido) | Roda do mouse |
|---|---|---|
| Deslize com dois dedos | Orbitar | Zoom em direção ao ponteiro |
| {{key:Shift}} + deslize com dois dedos | Pan | Zoom |
| Pinça | Zoom em direção ao ponteiro | Zoom em direção ao ponteiro |
| Pressionar com dois dedos e arrastar (clique secundário mantido) | Pan | Pan |

Veja [Orbitar, pan e zoom](topic:orbit-pan-zoom#on-a-trackpad) e [Configurações do ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Teclas Modeler

Com {{ui:Configurações}} › {{ui:ModelCraft}} › Controles definidos como estilo Modeler:

| Tecla | Faz |
|---|---|
| {{key:W}} ou {{key:Space}} | {{ui:Selecionar}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Linha}} / {{ui:Retângulo}} / {{ui:Círculo}} / {{ui:Polígono}} |
| {{key:E}} | {{ui:Empurrar/puxar}} (extrudar) |
| {{key:T}} | Medição com {{ui:Fita métrica}} |
| {{key:D}} | {{ui:Cota}} |
| {{key:G}} | Move a seleção de uma vez, a partir do ponteiro |
| {{key:R}} | Gira a seleção em torno do seu meio (eixo azul) |
| {{key:S}} | Escala a seleção em torno do seu meio |
| {{key:X}} / {{key:Y}} / {{key:Z}} enquanto move ou gira | Bloqueia o eixo vermelho / verde / azul (de novo para desbloquear) |
| Clique ou {{key:Enter}} | Solta o objeto no lugar |
| {{key:Esc}} ou clique com o botão direito | Devolve o objeto à posição original |
| {{key:Shift+D}} | Duplica e move a cópia |
| {{key:X}} ou {{key:Delete}} | Apaga a seleção |
| {{key:A}} / {{key:Alt+A}} | Seleciona tudo / não seleciona nada |
| {{key:Tab}} | Abre o grupo ou componente selecionado; de novo para fechar |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Criar grupo / criar componente |
| Teclado numérico {{key:1}} / {{key:3}} / {{key:7}} | Vista frontal / direita / superior ({{key:Mod}} para traseira / esquerda / inferior) |
| Teclado numérico {{key:5}} | Perspectiva ligada ou desligada |
| Teclado numérico {{key:.}} | Zoom na seleção |
| {{key:Home}} ou {{key:Shift+C}} | Zoom extensão |
| {{key:Shift+Tab}} | Snap ligado ou desligado |
| Arrastar com o botão do meio / com {{key:Shift}} / com {{key:Mod}} | Orbitar / pan / zoom |
| {{key:Alt}} + arrastar / {{key:Alt+Shift}} + arrastar | Orbitar / pan (sem precisar do botão do meio) |

Copiar, colar, desfazer, salvar e abrir mantêm as teclas listadas acima. Valores digitados, a caixa de valor e {{ui:Empurrar/puxar}} funcionam da mesma forma nos dois estilos.

## Tela sensível ao toque

| Gesto | Faz |
|---|---|
| Toque | Um clique com a ferramenta atual |
| Toque duplo | Um clique duplo |
| Pressionar, arrastar, levantar | Igual a pressionar, arrastar e soltar com o mouse |
| Dois dedos: pinça | Zoom |
| Dois dedos: mover juntos | Pan (Configurações › ModelCraft › Tela sensível ao toque pode fazer isso orbitar) |
| Três dedos: mover juntos | Orbitar (Pan quando dois dedos orbitam) |
| Manter um dedo parado | Finaliza a ferramenta, como Enter; sem nada em andamento, depois arraste para orbitar |
| Um segundo dedo durante uma ação de um dedo | Cancela essa ação |
| Ferramenta {{ui:Órbita}}, depois arraste com um dedo | Orbitar |

Para digitar um valor em uma tela sensível ao toque, toque na caixa de valor na parte inferior, digite e pressione a tecla Enter (ou Ir) do teclado.

## Onde fica Mover

Mover fica na ferramenta {{ui:Mover}}, tecla {{key:M}}: escolha o que mover, clique em um ponto-base e depois em um segundo ponto, ou digite uma distância. Veja [Mover, copiar e criar matrizes](topic:move-copy).
