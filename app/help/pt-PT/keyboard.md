---
title: Teclas e ações do rato
summary: Todos os atalhos de teclado, ações do rato, gestos do touchpad e gestos no ecrã tátil do ModelCraft, agrupados pelo que fazem.
keywords: teclado, atalhos, teclas de atalho, rato, touchpad, toque, gestos, folha de consulta, ctrl, comando, teclas de seta
from: e2348957
---

Estas são as teclas de empurrar/puxar, as com que o ModelCraft começa. Para o outro estilo, veja [Teclas Modeler](topic:keyboard#modeler-keys) abaixo e [Definições do ModelCraft](topic:settings).

Os atalhos funcionam quando a vista 3D ou um botão da barra de ferramentas tem o foco. Se acabou de escrever num campo do painel ou mudou uma lista em {{ui:Style}}, clique primeiro na vista 3D, senão as teclas vão para esse campo. Veja [Teclas, ratos e touchpads](common:keys) para saber como se escrevem as teclas em cada computador.

## Ferramentas

| Tecla | Ferramenta |
|---|---|
| {{key:Space}} | {{ui:Select}} |
| {{key:L}} | {{ui:Line}} |
| {{key:R}} | {{ui:Rectangle}} |
| {{key:C}} | {{ui:Circle}} |
| {{key:N}} | {{ui:Polygon}} |
| {{key:A}} | {{ui:Arc}} |
| {{key:F}} | {{ui:Offset}} |
| {{key:B}} | {{ui:Paint}} |
| {{key:P}} | {{ui:Push/pull}} |
| {{key:M}} | {{ui:Move}} |
| {{key:Q}} | {{ui:Rotate}} |
| {{key:S}} | {{ui:Scale}} |
| {{key:E}} | {{ui:Eraser}} |
| {{key:T}} | Medição com {{ui:Tape}} |
| {{key:D}} | {{ui:Dimension}} |
| {{key:O}} | {{ui:Orbit}} |
| {{key:H}} | {{ui:Pan}} |
| {{key:Z}} | {{ui:Zoom}} |

As letras das ferramentas funcionam só sem teclas de modificação: {{key:Shift}} com uma letra não faz nada, exceto as duas abaixo.

## Modelo e ficheiro

| Tecla | Faz |
|---|---|
| {{key:G}} | Cria um componente a partir da seleção |
| {{key:Shift+G}} | Cria um grupo a partir da seleção |
| {{key:Shift+Z}} | Zoom a extensões (o modelo inteiro) |
| {{key:Mod+Z}} | Anular |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | Refazer |
| {{key:Mod+S}} | Guardar (transfere o ficheiro `.modelcraft`) |
| {{key:Mod+O}} | Abrir um modelo |
| {{key:Mod+A}} | Selecionar tudo (no grupo aberto, se houver um) |
| {{key:Mod+C}} | Copiar a seleção |
| {{key:Mod+X}} | Cortar a seleção |
| {{key:Mod+V}} | Colar: a cópia segue o cursor; clique onde deve ficar |
| {{key:Mod+Shift+V}} | Colar no mesmo sítio (de onde foi copiada) |
| {{key:Mod+D}} | Duplicar: uma cópia move-se com o cursor; clique para a pousar |
| {{key:Delete}} ou {{key:Backspace}} | Apagar a seleção |
| {{key:PageDown}} / {{key:PageUp}} | Cena seguinte / anterior |
| {{key:F1}} | Abre ou fecha esta ajuda (também {{ui:Help}} na barra da aplicação; {{key:Esc}} dentro da ajuda fecha-a) |
| {{key:Ctrl+Shift+F}} | Modo de ecrã: ecrã inteiro, depois barras ocultas, depois normal (Control também num Mac) |

## Esc

{{key:Esc}} recua um nível cada vez que o prime:

1. Cancela o que a ferramenta está a fazer a meio (uma linha a ser desenhada, um empurrar/puxar, uma deslocação). Tudo volta atrás.
2. Muda para {{ui:Select}}.
3. Limpa a seleção.
4. Fecha o grupo que está a editar.

Também para a reprodução das cenas. Na caixa de valor, {{key:Esc}} limpa o que escreveu e volta à vista.

## Enquanto uma ferramenta trabalha

| Tecla | Faz |
|---|---|
| Um algarismo, ou um de `. , - ' " [ < * /` | Começa a escrever na caixa de valor |
| {{key:Enter}} | Aplica o que escreveu na caixa de valor |
| {{key:Right}} | Bloqueia no eixo vermelho (prima de novo para desbloquear) |
| {{key:Left}} | Bloqueia no eixo verde (prima de novo para desbloquear) |
| {{key:Up}} | Bloqueia no eixo azul (prima de novo para desbloquear) |
| {{key:Down}} | Bloqueia paralelo à última aresta sobre a qual passou antes do primeiro clique |
| Manter {{key:Shift}} premida | Mantém a direção ativa enquanto a tecla estiver premida |
| {{key:Ctrl}}, {{key:Mod}} ou {{key:Alt}} (Mover) | Alterna entre mover e copiar |

Os bloqueios com as setas funcionam em {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Polygon}}, {{ui:Move}}, {{ui:Scale}} e {{ui:Tape}} (ao medir a partir de um ponto), depois do primeiro clique. {{ui:Push/pull}} desloca-se sempre na direção da face e não tem bloqueios. Em {{ui:Rotate}}, as teclas de seta mostram a mensagem "Bloqueado" depois do primeiro clique, mas não alteram a rotação.

## Teclas de seta noutros momentos

Quando nenhuma ferramenta está a meio de uma ação, as teclas de seta movem a câmara:

| Tecla | Faz |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Órbita |
| {{key:Shift}} com uma seta | Deslocar |

## Rato

| Ação | Faz |
|---|---|
| Clique | Usa a ferramenta atual |
| Premir, arrastar, soltar | Igual a dois cliques (para as ferramentas de desenho); uma seleção por caixa (para {{ui:Select}}); apaga ao longo do percurso (para {{ui:Eraser}}) |
| Duplo clique | {{ui:Select}}: face com as suas arestas, aresta com as suas faces, abre um grupo; espaço vazio fecha o grupo. {{ui:Push/pull}}: repete a última distância |
| Clique triplo | {{ui:Select}}: tudo o que está ligado |
| {{key:Shift}} + clique | {{ui:Select}}: alterna entre entrar e sair da seleção |
| {{key:Mod}} + clique | {{ui:Select}}: adiciona à seleção |
| {{key:Shift}} + {{key:Mod}} + clique | {{ui:Select}}: remove da seleção |
| Arrastar com o botão do meio | Órbita, com qualquer ferramenta |
| {{key:Shift}} + arrastar com o botão do meio | Deslocar, com qualquer ferramenta |
| Arrastar com o botão direito | Deslocar, com qualquer ferramenta |
| Roda | Zoom na direção do cursor |

Não há menu de clique direito.

## Touchpad

O que faz um deslize com dois dedos depende de {{ui:Settings}} › {{ui:ModelCraft}} › Deslocamento:

| Gesto | Touchpad (ou deduzido) | Roda do rato |
|---|---|---|
| Deslize com dois dedos | Órbita | Zoom na direção do cursor |
| {{key:Shift}} + deslize com dois dedos | Deslocar | Zoom |
| Pinça | Zoom na direção do cursor | Zoom na direção do cursor |
| Premir e arrastar com dois dedos (clique secundário mantido) | Deslocar | Deslocar |

Veja [Órbita, deslocar e zoom](topic:orbit-pan-zoom#on-a-trackpad) e [Definições do ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Teclas Modeler

Com {{ui:Settings}} › {{ui:ModelCraft}} › Controlos definido para o estilo Modeler:

| Tecla | Faz |
|---|---|
| {{key:W}} ou {{key:Space}} | {{ui:Select}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Line}} / {{ui:Rectangle}} / {{ui:Circle}} / {{ui:Polygon}} |
| {{key:E}} | {{ui:Push/pull}} (extrudir) |
| {{key:T}} | Medição com {{ui:Tape}} |
| {{key:D}} | {{ui:Dimension}} |
| {{key:G}} | Move a seleção de imediato, a partir do cursor |
| {{key:R}} | Roda a seleção em torno do seu meio (eixo azul) |
| {{key:S}} | Escala a seleção em torno do seu meio |
| {{key:X}} / {{key:Y}} / {{key:Z}} ao mover ou rodar | Bloqueia o eixo vermelho / verde / azul (de novo para desbloquear) |
| Clique ou {{key:Enter}} | Pousa-a |
| {{key:Esc}} ou clique com o botão direito | Repõe-a |
| {{key:Shift+D}} | Duplica e move a cópia |
| {{key:X}} ou {{key:Delete}} | Apaga a seleção |
| {{key:A}} / {{key:Alt+A}} | Seleciona tudo / não seleciona nada |
| {{key:Tab}} | Abre o grupo ou componente selecionado; de novo para o fechar |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Cria grupo / cria componente |
| Teclado numérico {{key:1}} / {{key:3}} / {{key:7}} | Vista de frente / direita / topo ({{key:Mod}} para traseira / esquerda / inferior) |
| Teclado numérico {{key:5}} | Perspetiva ligada ou desligada |
| Teclado numérico {{key:.}} | Zoom à seleção |
| {{key:Home}} ou {{key:Shift+C}} | Zoom a extensões |
| {{key:Shift+Tab}} | Snap ligado ou desligado |
| Botão do meio a arrastar / com {{key:Shift}} / com {{key:Mod}} | Órbita / deslocar / zoom |
| {{key:Alt}} + arrastar / {{key:Alt+Shift}} + arrastar | Órbita / deslocar (sem precisar do botão do meio) |

Copiar, colar, anular, guardar e abrir mantêm as teclas indicadas acima. As teclas escritas, a caixa de valor e {{ui:Push/pull}} funcionam da mesma forma nos dois estilos.

## Ecrã tátil

| Gesto | Faz |
|---|---|
| Toque | Um clique com a ferramenta atual |
| Duplo toque | Um duplo clique |
| Premir, arrastar, levantar | Igual a premir, arrastar e soltar com o rato |
| Dois dedos: pinça | Zoom |
| Dois dedos: mover juntos | Deslocar (Definições › ModelCraft › Ecrã tátil pode torná-lo Órbita) |
| Três dedos: mover juntos | Órbita (Deslocar quando dois dedos rodam a vista) |
| Manter um dedo parado | Termina a ferramenta, como {{key:Enter}}; sem nada em curso, arraste para rodar a vista |
| Um segundo dedo durante uma ação com um dedo | Cancela essa ação |
| Ferramenta {{ui:Orbit}}, depois arrastar com um dedo | Órbita |

Para escrever um valor num ecrã tátil, toque na caixa de valor em baixo, escreva e prima a tecla Enter (ou Ir) do teclado.

## Onde fica Mover

{{ui:Move}} está na ferramenta {{ui:Move}}, tecla {{key:M}}: escolha o que mover, clique num ponto base e depois num segundo ponto, ou escreva uma distância. Veja [Mover, copiar e criar matrizes](topic:move-copy).
