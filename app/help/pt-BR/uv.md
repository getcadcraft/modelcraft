---
title: Desdobrar as UVs de uma malha
summary: Marque costuras, desdobre, projete e empacote as coordenadas de textura de uma malha na área de trabalho UV, e verifique-as com um xadrez e as cores de esticamento.
keywords: uv, uvs, desdobrar, desdobramento, costura, costuras, textura, coordenadas de textura, atlas, empacotar, empacotamento, ilha, ilhas, xadrez, esticamento, distorção, projeção de caixa, projeção de cilindro, projeção de esfera, conforme, baseado em ângulo, lscm, abf
from: 00028f20
---

Uma textura é uma imagem plana; uma malha não é plana. Suas **UVs** dizem onde cada canto de cada face fica na imagem. A área de trabalho UV as cria: você corta a malha abrindo-a ao longo das **costuras**, estende as peças no plano (**desdobrar**) e as encaixa no quadrado (**empacotar**).

## Abrir

Selecione uma malha e escolha {{ui:UV}} na lista {{ui:Área de trabalho}}. Um grupo ou componente vira uma malha primeiro, como na área de trabalho {{ui:Malha}}. A vista 3D passa para a metade esquerda; o **editor UV** à direita mostra as faces da malha dispostas no quadrado da textura. A seleção funciona como na área de trabalho {{ui:Malha}}, e o que você seleciona em uma vista fica selecionado na outra.

## Marcar costuras

As costuras são onde a malha pode ser cortada e aberta; elas aparecem em vermelho nas duas vistas.

- Selecione arestas ({{ui:Aresta}}, ou {{key:2}}) e pressione {{ui:Marcar costura}} ({{key:Ctrl+E}}). {{ui:Limpar costura}} ({{key:Ctrl+Shift+E}}) as remove.
- {{ui:Costuras nas arestas vivas}} marca toda aresta viva e toda aresta onde as faces se encontram com mais de 60°: uma caixa se divide nos seus seis lados.
- {{ui:Costuras pelos UVs}} marca costuras onde os UVs já se quebram, por exemplo depois de uma projeção.

Uma peça fechada precisa de costuras para ficar plana: uma bola precisa de pelo menos um corte, um tubo de um corte ao longo do comprimento.

## Desdobrar

Selecione as faces a dispor (ou nenhuma, para a malha inteira) e pressione {{ui:Desdobrar}} ({{key:U}}). Cada peça entre as costuras é estendida no plano, mantendo seus ângulos o mais fiéis possível (achatamento baseado em ângulo), e em seguida as peças são empacotadas no quadrado. {{ui:Conforme}} desdobra por mapas conformes de mínimos quadrados: é mais rápido, um pouco menos fiel em peças muito curvas. Uma forma que pode ser feita de uma folha plana, como o lado de um cilindro cortado uma vez, desdobra sem nenhum esticamento.

## Projetar

Para formas simples, uma projeção costuma bastar:

| Projeção | O que faz |
| --- | --- |
| {{ui:Caixa}} | Cada face sobre o lado de uma caixa para o qual ela mais se volta |
| {{ui:Cilindro}} | Em torno do eixo azul: na horizontal é o ângulo em volta, na vertical é a altura |
| {{ui:Esfera}} | A partir do centro: na horizontal é o ângulo em volta, na vertical é a latitude |
| {{ui:Da vista}} | Como as faces são vistas agora na vista 3D |

Uma face que cruza a junção do cilindro ou da esfera é mantida em uma peça só, então os seus UVs podem ultrapassar um pouco a borda direita do quadrado; as texturas se repetem ali.

## Organizar

- {{ui:Empacotar}} encaixa as peças (ilhas) no quadrado em um único tamanho de texel, cada uma girada para ocupar o menor espaço. O painel define o espaço deixado entre elas.
- {{ui:Girar 90°}} e {{ui:Espelhar}} giram ou espelham os UVs das faces selecionadas.
- No editor UV, arraste uma face selecionada para mover os UVs da seleção, ou aponte para o editor e pressione {{key:R}} ou {{key:S}} e depois mova para girá-los ou escalá-los (um clique os mantém, {{key:Esc}} cancela). {{key:G}} move sem arrastar. Clique duas vezes em uma face (ou {{key:L}}) para selecionar a ilha inteira. A roda do mouse aplica zoom; arraste com o botão do meio ou o direito para o pan; {{key:F}} ajusta o quadrado novamente.

Cada alteração é uma única ação de desfazer.

## Verifique-os

- {{ui:Xadrez}} mostra um xadrez rotulado na malha em seus UVs: quadrados uniformes e regulares indicam que a textura está distribuída de forma homogênea; os rótulos mostram em que direção ela corre.
- {{ui:Esticamento}} colore cada face conforme o quanto os seus UVs a esticam: azul nenhum, passando pelo verde, até vermelho muito. O painel escolhe se isso mede **ângulos dobrados** ou **tamanho alterado**, e mostra a média.

Veja também [Editar uma malha](topic:mesh-edit), [Malhas](topic:meshes) e [Modificadores em uma malha](topic:modifiers).
