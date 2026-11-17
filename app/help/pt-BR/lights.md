---
title: Iluminar um modelo com lâmpadas
summary: Coloque lâmpadas, refletores e painéis de luz em um modelo para que as imagens renderizadas mostrem ambientes à noite ou interiores iluminados, com sombras suaves.
keywords: luz, luzes, lâmpada, lâmpadas, iluminação, lâmpada incandescente, luz de teto, refletor, luz de embutir, painel de luz, luz de área, lúmens, brilho, temperatura de cor, quente, noite, interior, renderizar
from: c8d72cbc
---

Lâmpadas iluminam [imagens renderizadas](topic:render). Elas não mudam a vista 3D, onde cada lâmpada aparece como uma pequena marca na sua própria cor.

## Adicionar uma lâmpada

1. Na seção {{ui:Lights}} à direita, clique em {{ui:Lamp}}, {{ui:Spotlight}} ou {{ui:Light panel}}.
2. Clique onde ela deve ficar. O snap funciona como ao desenhar.
   - Em um teto ou parede, uma **lâmpada** fica pendurada 25 cm para fora da face, do lado de onde você está olhando; um **painel de luz** fica sobre a face e ilumina para longe dela.
   - Um **refletor** exige dois cliques: primeiro onde ele está e depois para onde aponta.

A nova lâmpada fica selecionada em {{ui:Lights}}, pronta para ser alterada.

## Alterar uma lâmpada

Clique no nome de uma lâmpada em {{ui:Lights}}, ou na sua marca na vista, com {{ui:Select}}. Depois:

| Configuração | O que faz |
|---|---|
| {{ui:Brightness (lumens)}} | Quanta luz ela emite. Uma lâmpada doméstica tem cerca de 800 lúmens; um painel de teto forte, 3000 |
| {{ui:Color}} | {{ui:Warm}} (uma lâmpada doméstica), {{ui:Neutral}} ou {{ui:Daylight}}, ou qualquer cor |
| {{ui:Beam (degrees)}} | O cone de um refletor, de borda a borda |
| {{ui:Bulb size}}, {{ui:Width}}, {{ui:Depth}} | Lâmpadas e painéis maiores geram sombras mais suaves |
| {{ui:Red (x)}}, {{ui:Green (y)}}, {{ui:Height}} | Onde ela está |

O marcador ao lado do nome de uma lâmpada a liga ou desliga. {{ui:Delete the light}} remove a luz. Cada alteração é uma única etapa: {{key:Ctrl+Z}} a desfaz. As lâmpadas são salvas no arquivo `.modelcraft`.

## Imagens à noite

Em {{ui:Render a picture…}}, marque {{ui:Use another date and time for this picture}} e escolha um horário do fim da tarde. Com o sol já posto, o céu escurece e só as lâmpadas iluminam o modelo. Aumente {{ui:Brightness}} na caixa de diálogo se a imagem ficar escura demais, ou adicione lâmpadas.

:::tip
Para um ambiente visto por dentro, coloque a câmera dentro dele (oriente e aproxime, ou use uma [cena](topic:scenes)), adicione uma lâmpada no teto e renderize à noite. No modo {{ui:Fast}}, os cantos longe de uma lâmpada ficam mais escuros do que em uma foto; o [modo de alta qualidade](topic:render#high-quality) deixa a luz refletir nas paredes.
:::
