---
title: Estilos e sombras do sol
summary: Mostre o modelo sombreado, como linhas ocultas, em arame ou transparente, e estude as sombras que projeta em qualquer data, hora e local.
keywords: vista de apresentação, vista limpa, ocultar guias, ocultar eixos, estilo, sombreado, linha oculta, arame, raio x, arestas, sombras, sol, estudo solar, solar, data, hora, latitude, longitude, fuso horário, norte
from: 09c95329
---

O painel {{ui:Estilo}}, à direita, altera a forma como o modelo é desenhado. Nada nele altera o próprio modelo, e não faz parte do anular. Cada [cena](topic:scenes) guarda o seu próprio estilo, e o ficheiro guarda o estilo que tinha quando o guardou.

## Faces

Escolha um na lista {{ui:Faces}}:

| Estilo | Aspeto |
|---|---|
| {{ui:Sombreado}} | Faces sólidas, com iluminação suave. As faces vistas por trás são azul-acinzentadas. As cores importadas aparecem. |
| {{ui:Linhas ocultas}} | Faces na cor de fundo, com arestas a tinta: um desenho de linhas limpo, sem as linhas ocultas. Branco em {{ui:Papel}}, escuro em {{ui:Modelo}}. |
| {{ui:Arames}} | Apenas arestas. As faces não são desenhadas, mas continuam a contar quando clica e quando usa o snap: não é possível selecionar através delas. |
| {{ui:Raio X}} | Faces transparentes, para ver o que está atrás ou dentro. Tal como em arame, os cliques e os snaps continuam a parar na face mais próxima. |

{{ui:Mostrar arestas}} liga ou desliga as arestas em todos os estilos, exceto {{ui:Arames}}. Com esta opção desligada, {{ui:Linhas ocultas}} quase não mostra nada, pois as faces coincidem com a cor de fundo. As arestas suaves, como os lados de um círculo puxado, nunca são desenhadas.

## Ligar as sombras do sol

1. Marque {{ui:Sombras do sol}}. As definições do sol abaixo ficam ativas, e o modelo projeta sombras em si próprio e no chão.
2. Defina o local:
   - {{ui:Latitude}}: norte é positivo, sul negativo (Nova Iorque tem cerca de 40.7, Sydney cerca de -33.9).
   - {{ui:Longitude}}: este é positivo, oeste negativo (Nova Iorque tem cerca de -74.0).
   - {{ui:Diferença para UTC}}: a diferença do local para UTC, em horas, como `-5` para Nova Iorque no inverno. O ModelCraft não aplica a hora de verão; use `-4` para Nova Iorque no verão.
3. Defina a {{ui:Data}} (mês e dia) e arraste a barra de {{ui:Hora}}. A hora avança em passos de 15 minutos e aparece junto à barra, por exemplo "3:00 pm".

Uma linha por baixo das definições indica onde está o sol, por exemplo "Sol 52° acima, 250° a partir do norte. O norte é o eixo verde." De noite diz "O sol está abaixo do horizonte nesta hora."

Um modelo novo começa com o sol a 21 de junho às 3:00 pm, com latitude 40, longitude -105 e diferença para UTC -7.

## Orientar o modelo a norte

O norte do ModelCraft é sempre o **eixo verde**. Para estudar um local real, rode o modelo para que o lado norte fique virado ao longo do verde: selecione tudo ({{key:Mod+A}}), prima {{key:Q}}, clique num centro no chão e rode-o pelo ângulo do local em relação ao norte (ver [Rodar e escalar](topic:rotate-scale)).

## Um estudo solar

1. Defina o local e a data.
2. Adicione uma cena ({{ui:Adicionar cena}} em {{ui:Cenas}}).
3. Mova a barra de {{ui:Hora}} e depois adicione outra cena. Repita para cada hora que quiser.
4. Clique em {{ui:Reproduzir}} para avançar entre elas. Ver [Guardar vistas como cenas](topic:scenes).

## Coisas a saber

- As sombras podem parecer dentadas num modelo muito grande, pois um único mapa de sombras cobre o modelo inteiro.
- As sombras não são desenhadas em {{ui:Arames}}.
- A posição do sol segue o cálculo solar da NOAA e é exata a uma fração de grau, o que chega para estudos de volumetria. A refração atmosférica é ignorada, pelo que ângulos do sol muito baixos, perto do nascer e do pôr do sol, podem estar ligeiramente errados.

## Vista de apresentação

{{ui:Vistas}} › {{ui:Vista de apresentação}} (ou {{key:Shift+P}}) mostra apenas o modelo: somem os eixos, as linhas-guia e os pontos-guia, os contornos dos planos de corte (o corte mantém-se), as marcas das luzes, a caixa de um grupo aberto, as marcas e as sugestões de snap, e o realce da seleção. Use-a para ver o modelo com clareza, ou antes de uma captura de ecrã. As ferramentas continuam a funcionar e continuam a fazer snap; só não vê as marcas. Prima {{key:Shift+P}} de novo para as repor. As cotas mantêm-se, pois fazem parte do desenho. Enquanto edita dentro de um grupo, o resto do modelo deixa de desvanecer: aparece como está, incluindo as texturas.
