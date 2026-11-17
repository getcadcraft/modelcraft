---
title: Dispor os UV de uma malha
summary: Marcar costuras, desdobrar, projetar e arrumar as coordenadas de textura de uma malha na área de trabalho UV, e verificá-las com um xadrez e as cores de estiramento.
keywords: uv, uvs, desdobrar, desdobramento, costura, costuras, textura, coordenadas de textura, atlas, arrumar, arrumação, ilha, ilhas, xadrez, estiramento, distorção, projeção de caixa, projeção de cilindro, projeção de esfera, conforme, baseado em ângulos, lscm, abf
from: 00028f20
---

Uma textura é uma imagem plana; uma malha não é plana. Os **UV** indicam onde fica cada canto de cada face na imagem. A área de trabalho UV cria-os: abre-se a malha ao longo das **costuras**, estendem-se as peças no plano (**desdobrar**) e encaixam-se no quadrado (**arrumar**).

## Abrir

Selecione uma malha e escolha {{ui:UV}} na lista Área de trabalho. Um grupo ou componente passa primeiro a malha, como na área de trabalho Malha. A vista 3D passa para a metade esquerda; o **editor UV**, à direita, mostra as faces da malha dispostas no quadrado da textura. A seleção funciona como na área de trabalho Malha, e o que selecionar numa vista fica selecionado na outra.

## Marcar costuras

As costuras são os sítios onde a malha pode ser aberta; aparecem a vermelho em ambas as vistas.

- Selecione arestas ({{ui:Aresta}}, ou {{key:2}}) e prima {{ui:Marcar costura}} ({{key:Ctrl+E}}). {{ui:Limpar costura}} ({{key:Ctrl+Shift+E}}) retira-as.
- {{ui:Costuras nas vivas}} marca cada aresta viva e cada aresta onde as faces se encontram com mais de 60°: uma caixa fica dividida nos seus seis lados.
- {{ui:Costuras pelos UVs}} marca costuras onde os UV já se interrompem, por exemplo depois de uma projeção.

Uma peça fechada precisa de costuras para ficar plana: uma esfera precisa de pelo menos um corte, e um tubo de um corte ao longo do comprimento.

## Desdobrar

Selecione as faces a dispor (ou nenhuma, para a malha inteira) e prima {{ui:Desdobrar}} ({{key:U}}). Cada peça entre costuras é estendida no plano, mantendo os seus ângulos o mais verdadeiros possível (achatamento baseado em ângulos), e depois as peças são arrumadas no quadrado. {{ui:Conforme}} desdobra por mapas conformes de mínimos quadrados: é mais rápido, e ligeiramente menos fiel em peças muito curvas. Uma forma que pode ser feita a partir de uma folha plana, como a lateral de um cilindro cortada uma vez, desdobra-se sem qualquer estiramento.

## Projetar

Para formas simples, uma projeção costuma bastar:

| Projeção | O que faz |
| --- | --- |
| {{ui:Caixa}} | Cada face sobre o lado de uma caixa para o qual está mais voltada |
| {{ui:Cilindro}} | Em torno do eixo azul: na horizontal, o ângulo à volta; na vertical, a altura |
| {{ui:Esfera}} | A partir do centro: na horizontal, o ângulo à volta; na vertical, a latitude |
| {{ui:Da vista}} | Tal como as faces se veem agora na vista 3D |

Uma face que atravesse a junção do cilindro ou da esfera fica numa só peça, pelo que os UV dessa face podem ultrapassar ligeiramente o bordo direito do quadrado; as texturas repetem-se aí.

## Arrumar

- {{ui:Arrumar}} encaixa as peças (ilhas) no quadrado, com uma só escala de texel, cada uma rodada para ocupar o menos espaço possível. O painel define o espaço deixado entre elas.
- {{ui:Rodar 90°}} e {{ui:Espelhar}} rodam ou espelham os UV das faces selecionadas.
- No editor UV, arraste uma face selecionada para mover os UV da seleção, ou aponte para o editor e prima {{key:R}} ou {{key:S}}, depois mova o cursor para rodar ou escalar (um clique mantém, e {{key:Esc}} cancela). {{key:G}} move sem arrastar. Faça duplo clique numa face (ou prima {{key:L}}) para selecionar a ilha inteira. A roda faz zoom; arraste com o botão do meio ou o direito para deslocar a vista; {{key:F}} volta a ajustar o quadrado.

Cada alteração é um só passo de anulação.

## Verificar

- {{ui:Xadrez}} mostra um xadrez com rótulos na malha, nos seus UV: quadrados regulares e iguais indicam que a textura assenta de forma uniforme; os rótulos mostram o sentido em que corre.
- {{ui:Estiramento}} colore cada face conforme o estiramento dos UV: azul para nenhum, passando pelo verde, até ao vermelho para muito estiramento. O painel escolhe se mede **ângulos dobrados** ou **tamanho alterado**, e mostra a média.

Ver também [Editar uma malha](topic:mesh-edit), [Malhas](topic:meshes) e [Modificadores numa malha](topic:modifiers).
