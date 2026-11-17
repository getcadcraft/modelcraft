---
title: Estilos e sombras do sol
summary: Mostre o modelo sombreado, como linhas ocultas, como estrutura de arame ou transparente, e estude as sombras que ele projeta em qualquer data, hora e lugar.
keywords: vista de apresentação, vista limpa, ocultar guias, ocultar eixos, estilo, sombreado, linha oculta, estrutura de arame, raio X, arestas, sombras, sol, estudo solar, solar, data, hora, latitude, longitude, fuso horário, norte
from: 09c95329
---

O painel {{ui:Estilo}} à direita muda a forma como o modelo é desenhado. Nada nele altera o modelo em si, e ele não faz parte do desfazer. Cada [cena](topic:scenes) guarda o próprio estilo, e o arquivo guarda o estilo que você tinha ao salvar.

## Faces

Escolha um na lista {{ui:Faces}}:

| Estilo | Aparência |
|---|---|
| {{ui:Sombreado}} | Faces sólidas, com iluminação suave. Faces vistas por trás são azul-acinzentadas. As cores importadas aparecem. |
| {{ui:Linhas ocultas}} | Faces na cor de fundo, com arestas em tinta: um desenho de linhas limpo, sem as linhas ocultas. Branco em {{ui:Papel}}, escuro em {{ui:Modelo}}. |
| {{ui:Estrutura de arame}} | Somente arestas. As faces não são desenhadas, mas ainda contam quando você clica e faz snap: não é possível selecionar através delas. |
| {{ui:Raio X}} | Faces transparentes, para ver o que está atrás ou dentro. Como na estrutura de arame, cliques e snaps ainda param na face mais próxima. |

{{ui:Mostrar arestas}} liga ou desliga as arestas em todos os estilos, exceto {{ui:Estrutura de arame}}. Com ele desligado, {{ui:Linhas ocultas}} mostra quase nada, pois suas faces se confundem com o fundo. Arestas suaves, como as laterais de um círculo puxado, nunca são desenhadas.

## Ligar as sombras do sol

1. Marque {{ui:Sombras do sol}}. As configurações do sol abaixo dela ficam ativas, e o modelo projeta sombras sobre si mesmo e sobre o chão.
2. Defina o local:
   - {{ui:Latitude}}: norte é positivo, sul é negativo (Nova York fica em torno de 40.7, Sydney em torno de -33.9).
   - {{ui:Longitude}}: leste é positivo, oeste é negativo (Nova York fica em torno de -74.0).
   - {{ui:Deslocamento UTC}}: o deslocamento do local em relação ao UTC, em horas, como `-5` para Nova York no inverno. O ModelCraft não aplica horário de verão; use `-4` para Nova York no verão.
3. Defina a {{ui:Data}} (mês e dia) e arraste o controle deslizante de {{ui:Hora}}. A hora avança em passos de 15 minutos e aparece ao lado do controle, como "3:00 pm".

Uma linha abaixo das configurações indica onde está o sol, como "Sol 52° acima, 250° a partir do norte. O norte é o eixo verde." À noite, diz "O sol está abaixo do horizonte neste horário."

Um modelo novo começa com o sol em 21 de junho às 3:00 pm, na latitude 40, longitude -105, deslocamento UTC -7.

## Apontar o modelo para o norte

O norte do ModelCraft é sempre o **eixo verde**. Para estudar um local real, gire o modelo para que o lado norte fique voltado ao longo do verde: selecione tudo ({{key:Mod+A}}), pressione {{key:Q}}, clique em um centro no chão e gire pelo ângulo do local em relação ao norte (veja [Girar e escalar](topic:rotate-scale)).

## Um estudo de sol

1. Defina o local e a data.
2. Adicione uma cena ({{ui:Adicionar cena}} em {{ui:Cenas}}).
3. Mova o controle de hora e depois adicione outra cena. Repita para cada hora que quiser.
4. Clique em {{ui:Reproduzir}} para percorrê-las. Veja [Salvar vistas como cenas](topic:scenes).

## Coisas a saber

- As sombras podem aparecer serrilhadas em um modelo muito grande, pois um único mapa de sombras cobre o modelo inteiro.
- As sombras não são desenhadas em {{ui:Estrutura de arame}}.
- A posição do sol segue o cálculo solar da NOAA e é precisa até uma fração de grau, o que basta para estudos de volumetria. A refração atmosférica é ignorada, então ângulos muito baixos do sol, perto do nascer e do pôr do sol, podem ficar levemente imprecisos.

## Vista de apresentação

{{ui:Vistas}} › {{ui:Vista de apresentação}} (ou {{key:Shift+P}}) mostra apenas o modelo: somem os eixos, as linhas-guia e os pontos-guia, o contorno dos planos de corte (o corte permanece), as marcas das luzes, a caixa de um grupo aberto, as marcas e dicas de snap e o destaque de seleção. Use para observar o modelo com clareza ou antes de uma captura de tela. As ferramentas continuam funcionando e fazendo snap; você apenas não vê as marcas. Pressione {{key:Shift+P}} de novo para mostrá-las. As cotas permanecem, pois fazem parte do desenho. Enquanto você edita dentro de um grupo, o resto do modelo não fica mais esmaecido: aparece como é, inclusive as texturas.
