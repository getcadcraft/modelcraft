---
title: Iluminar um modelo com lâmpadas
summary: Coloque lâmpadas, projetores e painéis de luz num modelo para que as imagens renderizadas mostrem divisões à noite ou interiores iluminados, com sombras suaves.
keywords: luz, luzes, lâmpada, lâmpadas, iluminação, bolbo, candeeiro de teto, projetor, downlight, painel de luz, luz de área, lúmenes, luminosidade, temperatura de cor, quente, noite, interior, renderizar
from: c8d72cbc
---

As lâmpadas iluminam as [imagens renderizadas](topic:render). Não alteram a vista 3D, onde cada lâmpada aparece como uma pequena marca na respetiva cor.

## Adicionar uma lâmpada

1. Na secção {{ui:Luzes}} à direita, clique em {{ui:Lâmpada}}, {{ui:Projetor}} ou {{ui:Painel de luz}}.
2. Clique onde deve ficar. O snap funciona como ao desenhar.
   - Num teto ou numa parede, uma **lâmpada** fica suspensa 25 cm da face, do lado de onde está a olhar; um **painel de luz** fica assente na face e ilumina para longe dela.
   - Um **projetor** exige dois cliques: onde fica e depois o que ilumina.

A nova lâmpada fica selecionada em {{ui:Luzes}}, pronta a ser alterada.

## Alterar uma lâmpada

Clique no nome de uma lâmpada em {{ui:Luzes}}, ou na respetiva marca na vista com {{ui:Selecionar}}. Depois:

| Definição | O que faz |
|---|---|
| {{ui:Intensidade (lúmenes)}} | Quanta luz dá. Uma lâmpada doméstica tem cerca de 800 lúmenes; um painel de teto luminoso, 3000 |
| {{ui:Cor}} | {{ui:Quente}} (uma lâmpada doméstica), {{ui:Neutra}} ou {{ui:Luz do dia}}, ou qualquer cor |
| {{ui:Feixe (graus)}} | O cone de um projetor, de lado a lado |
| {{ui:Tamanho da lâmpada}}, {{ui:Largura}}, {{ui:Profundidade}} | Lâmpadas e painéis maiores dão sombras mais suaves |
| {{ui:Vermelho (x)}}, {{ui:Verde (y)}}, {{ui:Altura}} | Onde fica |

A marca junto ao nome de uma lâmpada liga ou desliga-a. {{ui:Eliminar a luz}} remove-a. Cada alteração é um passo: {{key:Ctrl+Z}} anula-a. As lâmpadas são guardadas no ficheiro `.modelcraft`.

## Imagens à noite

Em {{ui:Renderizar uma imagem…}}, marque {{ui:Usar outra data e hora para esta imagem}} e escolha uma hora do fim da tarde. Com o sol posto, o céu fica escuro e só as lâmpadas iluminam o modelo. Aumente {{ui:Luminosidade}} na caixa de diálogo se a imagem estiver demasiado escura, ou acrescente lâmpadas.

:::tip
Para uma divisão vista por dentro, coloque a câmara dentro da divisão (rode e aproxime a vista, ou use uma [cena](topic:scenes)), acrescente uma lâmpada no teto e renderize à noite. No modo {{ui:Rápido}}, os cantos afastados de uma lâmpada ficam mais escuros do que numa fotografia; o [modo de alta qualidade](topic:render#high-quality) deixa a luz refletir-se nas paredes.
:::
