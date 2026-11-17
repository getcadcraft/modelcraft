---
title: Terreo: chan a partir de curvas de nivel e modelado
summary: Crear o chan a partir de curvas de nivel ou como unha cuadrícula, e logo subilo e baixalo cun pincel suave.
keywords: terreo, chan, paisaxe, topografía, curvas de nivel, liñas de nivel, emprazamento, pendente, outeiro, montículo, caixa de area, smoove, modelar, nivelar, TIN
from: 407652b3
---

O terreo é chan formado por triángulos, así que pode seguir calquera forma. É un grupo: faga dobre clic para editalo.

## A partir de curvas de nivel

1. Obteña as curvas de nivel á súa altura: debúxeas, ou [importe un plano de emprazamento](topic:site-plan) e mova cada curva ata o seu nivel.
2. Seleccione as curvas (todos os seus bordos).
3. {{ui:Edit}} › {{ui:More}} › {{ui:Terrain from selected contours}}.

ModelCraft une os puntos das curvas con triángulos (un TIN) e suaviza todos os bordos interiores, para que o chan sombree de forma suave. As liñas quedan; bórreas ou ocúltaas cando xa non as precise. As curvas moi densas redúcense a 8 000 puntos.

## Unha cuadrícula para modelar

{{ui:Edit}} › {{ui:More}} › {{ui:Terrain grid…}} pide unha largura, unha profundidade e un tamaño de cela, e logo coloca unha cuadrícula plana de triángulos onde fai clic na súa esquina. As celas pequenas modélanse máis suaves, pero crean máis caras (como máximo, 200 × 200 celas).

## Modelar: subir e baixar o chan

1. Faga dobre clic no terreo para abrilo.
2. {{ui:Edit}} › {{ui:More}} › {{ui:Sculpt terrain}}. Un círculo mostra o pincel sobre o chan baixo o punteiro.
3. Arrastre cara arriba para subir o chan baixo o pincel, ou cara abaixo para baixalo. O centro muévese máis, e o chan vai diminuíndo ata desaparecer na beira do círculo, así que os outeiros e as depresións saen suaves.

Para facer un montículo dunha altura exacta, prema unha vez e logo escriba a altura, como `1.5m` (un signo menos baixa o chan), e prema {{key:Enter}}. Para cambiar o pincel, escriba unha lonxitude antes de facer clic: `5m` dá un pincel con 5 m de radio.

Cada modelado é un paso de desfacer.

## Cousas que debe saber

- Modelar só move caras triangulares, así que cada cara segue plana. As caras debuxadas á man (rectángulos, polígonos) non son terreo: a ferramenta avísao.
- Modelar move os puntos só cara arriba e cara abaixo; non engade puntos. Para máis detalle, faga unha cuadrícula con celas máis pequenas.
- O terreo exporta como calquera outro grupo. En IFC é un proxy de elemento de edificio, como todo o demais.
