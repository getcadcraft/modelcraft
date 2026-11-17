---
title: Empurrar e puxar faces para formar sólidos
summary: Transforme uma face em uma caixa, torne um prédio mais alto ou mais baixo, adicione um vão ou um recesso e repita uma distância com um duplo clique.
keywords: empurrar puxar, extrudar, altura, sólido, caixa, massa, mais alto, recesso, saliência, repetir, duplo clique, volume, nível, sobre a face, nivelar, mesma altura
from: dc093c91
---

{{ui:Empurrar/puxar}} ({{key:P}}) move uma face na sua própria direção: para cima e para baixo em um piso, para dentro e para fora em uma parede. O que acontece depende da face.

## Criar um sólido a partir de uma face

1. Desenhe uma face, por exemplo um retângulo no chão ([Desenhar faces](topic:draw-faces)).
2. Pressione {{key:P}}.
3. Passe o ponteiro sobre a face. Ela fica destacada.
4. Clique na face e depois mova o ponteiro. A face sobe (ou afunda) e as laterais crescem a partir das suas arestas. A caixa de valor ({{ui:Distância}}) e a dica mostram a distância.
5. Clique para concluir, ou digite uma distância e pressione {{key:Enter}}: `3m`, `10'`, `2700` em um modelo em milímetros.

   Agora você tem um sólido fechado. Selecione tudo e agrupe-o (veja [Grupos e componentes](topic:groups-components)): {{ui:Informações da entidade}} então mostra "Sólido: Sim" e o seu volume.

Uma face isolada pode ir para qualquer lado: puxe-a para cima para uma massa acima do solo, ou empurre-a para baixo para um poço ou uma fundação.

:::tip
Em vez de clicar duas vezes, pressione sobre a face, arraste e solte. Em uma tela de toque, essa é a forma natural: pressionar, arrastar, levantar.
:::

## Puxar até a altura de outro elemento

Enquanto puxa, passe o ponteiro sobre um canto, um ponto médio, uma aresta ou uma guia de outra parte do modelo. A face se encaixa nessa altura e um marcador mostra o ponto. Use isso para fazer dois blocos com a mesma altura, ou para parar em uma linha-guia que você colocou com a [trena](topic:guides-measure).

Você também pode passar o ponteiro sobre uma face paralela à que está empurrando, como o topo de outro bloco ou o topo da caixa sobre a qual se apoia um pilar. A dica diz "Sobre a face", e a face que você empurra termina nivelada com ela. Por exemplo, empurre a face interna de um tubo para baixo até que fique nivelada com a caixa sob o tubo.

Uma face em ângulo com a que você está empurrando não define um nível. A distância segue o ponteiro. O mesmo vale para uma face atrás da face que você está empurrando.

Quando uma face empurrada volta a terminar nivelada com as faces ao redor, as suas laterais desaparecem. Não sobram laterais de altura zero, e o contorno que você desenhou permanece na face, então você pode empurrá-la de novo depois. Para torná-la uma face única outra vez, apague as arestas do contorno com a {{ui:Borracha}}: as duas faces se unem.

## Tornar uma caixa mais alta ou mais baixa

Empurre ou puxe o topo de uma caixa. Como as laterais já sobem retas a partir dele, o topo simplesmente se move: a caixa fica mais alta ou mais baixa, e nenhuma aresta nova é criada.

- Empurrar o topo até o fundo remove a caixa. O ModelCraft para em altura zero; nunca vira a caixa do avesso.
- O mesmo vale para qualquer face cujos vizinhos correm todos na sua direção, como a extremidade de uma parede.

## Adicionar um vão ou um recesso

1. Desenhe um retângulo na lateral de uma caixa (comece na face; ele fica no plano da face).
2. Pressione {{key:P}} e puxe o novo retângulo **para fora**. Isso adiciona material: um vão saliente, uma chaminé, uma marquise.
3. Ou empurre-o **para dentro**. Isso corta um recesso: um pórtico, um nicho, uma entrada recuada.

Quando as laterais da nova parte se alinham com faces já existentes, elas se unem em uma única face, para que você não tenha linhas perdidas em uma parede plana.

## Empurrar até atravessar

Empurrar uma face para dentro de um sólido para na primeira face atrás dela. Ao chegar a essa face, ela corta uma abertura. É assim que você faz janelas e portas em uma parede com espessura. Veja [Cortar uma abertura em uma parede](topic:openings).

## Digitar uma distância

Depois de clicar na face, digite a distância e pressione {{key:Enter}}.

- A distância digitada segue o sentido em que você estava movendo. Se você ainda não moveu, ela vai para a frente da face (para fora de um sólido, para cima a partir do chão).
- Digite um número negativo, como `-500`, para ir para o outro lado.
- Se mudar de ideia antes de clicar, pressione {{key:Esc}}. A face volta.

## Repetir a última distância

Depois de um empurrar/puxar, clique duas vezes em outra face com {{ui:Empurrar/puxar}} ainda selecionado. Ela se move pela mesma distância. Esse é o jeito rápido de dar a várias paredes ou vários pisos a mesma espessura ou altura.

O ModelCraft lembra a distância até que você troque para outra ferramenta.

## Coisas a saber

- Empurrar/puxar trabalha em uma face por vez. Se você clicar em algo que não é uma face, a barra de status diz: "Empurrar/puxar trabalha em uma face. Clique em uma face."
- Para empurrar/puxar uma face dentro de um grupo ou componente, abra-o primeiro (clique duas vezes nele).
- Com **Colidir** ativado, um empurrar ou puxar que encontra outro sólido para onde toca, e a dica informa o que toca (o nome do objeto, ou "geometria solta neste grupo") e destaca as faces que encontrou. Um recesso que você empurra para dentro do próprio sólido (por exemplo, uma face deslocada empurrada de volta para baixo) faz parte desse sólido e nunca é interrompido pelas suas paredes.
- Dois sólidos empurrados um contra o outro não se cortam nem se unem: as faces apenas passam uma pela outra. Veja [Ainda não implementado](topic:not-built-yet).
