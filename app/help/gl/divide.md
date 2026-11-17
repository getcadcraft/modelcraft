---
title: Dividir unha aresta ou curva en partes iguais
summary: Partir unha liña en pezas iguais, ou dar a un arco ou círculo un novo número de segmentos, coa ferramenta Dividir.
keywords: dividir, dividir aresta, partes iguais, segmentos iguais, partir aresta, segmentos, subdividir, subdividir arestas, segmentos do arco, segmentos do círculo, puntos ao longo dunha liña
from: 5c3ce3ed
---

{{ui:Divide}} corta unha aresta en partes iguais, cun vértice en cada corte. Use os vértices para encaixar, para iniciar liñas desde eles ou para empurrar e tirar partes dunha cara.

## Dividir unha aresta

1. Prema en {{ui:Divide}} na barra de ferramentas, ou seleccione unha aresta e prema en {{ui:Divide…}} en {{ui:Entity info}}.
2. Sinale a aresta co punteiro. As marcas indican onde irán os cortes: sobre o centro da aresta son dúas partes; achéguese a un extremo para obter máis.
3. Prema para dividila nas partes mostradas. Ou escriba un número, como `5` (ou `5s`, ou `/5`), e prema en {{key:Enter}}: divídese de inmediato.

As pezas quedan seleccionadas e é un único paso de desfacer. Unha cara á que pertence a aresta conserva a súa forma e gaña os novos vértices.

## Dividir un arco ou un círculo

Sinale calquera segmento dun arco ou círculo: divídese por completo.

- Un arco ou círculo cuxos vértices non usa ningún outro elemento, e que está plano sobre a súa cara, **vólvese debuxar con ese número de segmentos** sobre o arco real. Os seus extremos quedan onde estaban, e segue sendo unha única curva, así que aínda o pode seleccionar cun clic e cambiar o seu raio en {{ui:Entity info}}. Un círculo de 24 lados dividido en 8 convértese nun octógono.
- Calquera outra curva — o bordo dun cilindro empurrado, unha curva debuxada con {{ui:Curve}}, un arco con liñas unidas aos seus vértices — recibe novos vértices a lonxitudes iguais ao longo dela, e non se move nada.

## Cos atallos do modelador

A ferramenta é a mesma cos atallos do modelador (Configuración › ModelCraft › Teclas, ou o estilo de menú Modelador), onde está no menú {{ui:Mesh}} como {{ui:Subdivide edges}}.

## Cousas que hai que saber

- Os números escritos van de 2 a 1000; ao mover o punteiro dá até 100.
- Unha curva debuxada con {{ui:Curve}} conserva os seus puntos: despois de {{ui:Edit points}}, redebúxase a partir deles e os novos vértices desaparecen.

Consulte tamén [Debuxar caras con liñas, rectángulos, círculos e arcos](topic:draw-faces) e [Escribir medidas exactas na caixa de valores](topic:value-box).
