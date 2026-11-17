---
title: Empurrar e puxar faces para formar sólidos
summary: Transforme uma face numa caixa, torne um edifício mais alto ou mais baixo, acrescente um corpo saliente ou um recesso e repita uma distância com duplo clique.
keywords: empurrar puxar, extrudir, altura, sólido, caixa, massa, mais alto, recesso, saliência, repetir, duplo clique, volume, nível, sobre a face, nivelar, mesma altura
from: dc093c91
---

{{ui:Empurrar/puxar}} ({{key:P}}) move uma face ao longo da sua própria direção: para cima e para baixo num piso, para dentro e para fora numa parede. O que acontece depende da face.

## Criar um sólido a partir de uma face

1. Desenhe uma face, por exemplo um retângulo no chão ([Desenhar faces](topic:draw-faces)).
2. Prima {{key:P}}.
3. Passe o ponteiro sobre a face. Ela fica realçada.
4. Clique na face e depois mova o ponteiro. A face sobe (ou desce) e formam-se paredes a partir das suas arestas. A caixa de valor ({{ui:Distância}}) e a dica mostram a distância.
5. Clique para terminar, ou escreva uma distância e prima {{key:Enter}}: `3m`, `10'`, `2700` num modelo em milímetros.

   Agora tem um sólido fechado. Selecione-o todo e agrupe-o (veja [Grupos e componentes](topic:groups-components)): {{ui:Informações da entidade}} mostra então "Sólido: Sim" e o seu volume.

Uma face isolada pode ir para qualquer lado: puxe-a para cima para obter uma massa acima do chão, ou empurre-a para baixo para uma cava ou uma fundação.

:::tip
Em vez de clicar duas vezes, prima sobre a face, arraste e solte. Num ecrã tátil, esta é a forma natural: prima, arraste, levante.
:::

## Puxar até à altura de outra coisa

Enquanto puxa, passe o ponteiro sobre um canto, um ponto médio, uma aresta ou uma guia de outra parte do modelo. A face ajusta-se a essa altura e um marcador mostra o ponto. Use-o para fazer dois blocos com a mesma altura, ou para parar numa linha-guia que colocou com a [fita métrica](topic:guides-measure).

Também pode passar o ponteiro sobre uma face paralela à que está a empurrar, como o topo de outro bloco ou o topo da caixa sobre a qual assenta um poste. A dica diz "Sobre a face", e a face que está a empurrar termina nivelada com ela. Por exemplo, empurre a face interior de um tubo para baixo até ficar nivelada com a caixa sob o tubo.

Uma face inclinada em relação à que está a empurrar não define um nível: a distância segue o ponteiro. O mesmo acontece com uma face atrás da face que está a empurrar.

Quando uma face empurrada volta a terminar alinhada com as faces à volta, as suas laterais desaparecem. Não ficam laterais de altura zero, e o contorno que desenhou mantém-se na face, para que a possa voltar a empurrar mais tarde. Para a tornar de novo uma só face, apague as arestas do contorno com a {{ui:Borracha}}: as duas faces juntam-se.

## Tornar uma caixa mais alta ou mais baixa

Empurre/puxe o topo de uma caixa. Como as laterais já sobem retas a partir dele, o topo simplesmente move-se: a caixa fica mais alta ou mais baixa, e não se criam arestas novas.

- Empurrar o topo até ao fundo remove a caixa. O ModelCraft para na altura zero; nunca vira a caixa do avesso.
- O mesmo se aplica a qualquer face cujos vizinhos sigam todos na sua direção, como a extremidade de uma parede.

## Acrescentar um corpo saliente ou um recesso

1. Desenhe um retângulo na lateral de uma caixa (comece-o na face; fica no plano da face).
2. Prima {{key:P}} e puxe o novo retângulo **para fora**. Acrescenta material: um corpo saliente, uma chaminé, uma cobertura.
3. Ou empurre-o **para dentro**. Corta um recesso: um alpendre, um nicho, uma entrada recuada.

Quando as laterais da nova peça ficam alinhadas com faces que já existem, fundem-se numa só face, para não aparecerem linhas perdidas numa parede plana.

## Empurrar até ao fim

Empurrar uma face para dentro de um sólido para na primeira face que está atrás dela. Ao chegar a essa face, abre uma passagem. É assim que se fazem janelas e portas numa parede com espessura. Veja [Cortar uma abertura numa parede](topic:openings).

## Escrever uma distância

Depois de clicar na face, escreva a distância e prima {{key:Enter}}.

- A distância escrita segue o sentido em que se estava a mover. Se ainda não se moveu, segue para a frente da face (para fora de um sólido, para cima a partir do chão).
- Escreva um número negativo, como `-500`, para ir no sentido contrário.
- Se mudar de ideias antes de clicar, prima {{key:Esc}}. A face volta ao lugar.

## Repetir a última distância

Depois de um empurrar/puxar, faça duplo clique noutra face com {{ui:Empurrar/puxar}} ainda selecionado. Ela move-se pela mesma distância. É a forma rápida de dar a várias paredes ou a vários pisos a mesma espessura ou altura.

O ModelCraft lembra-se da distância até mudar para outra ferramenta.

## Coisas a saber

- Empurrar/puxar trabalha numa face de cada vez. Se clicar em algo que não é uma face, a barra de estado diz "Empurrar/puxar trabalha numa face. Clique numa face."
- Para empurrar/puxar uma face dentro de um grupo ou componente, abra-o primeiro (faça duplo clique nele).
- Com **Colidir** ativo, um empurrar ou puxar que chega a outro sólido para onde toca, e a dica diz com o quê (o nome do objeto, ou "geometria solta neste grupo") e realça as faces que encontrou. Uma cavidade que empurra para dentro do seu próprio sólido (por exemplo, uma face deslocada empurrada outra vez para baixo) faz parte desse sólido e nunca é parada pelas suas paredes.
- Dois sólidos empurrados um contra o outro não se cortam nem se juntam: as suas faces simplesmente passam uma pela outra. Veja [Ainda não implementado](topic:not-built-yet).
