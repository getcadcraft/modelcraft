---
title: Siga-me: varrer uma face ao longo de um caminho
summary: Crie tubos, cabos, corrimãos, molduras e anéis varrendo uma face ao longo de arestas, arcos ou uma curva.
keywords: siga-me, varredura, caminho, tubo, cabo, cano, corrimão, moldura, calha, anel, toro, torno, extrudar ao longo de
from: ec7b3839
---

{{ui:Siga-me}} move uma face ao longo de um caminho e constrói o sólido pelo qual ela passa. A face mantém a sua forma e fica em esquadro com o caminho, e em cada canto do caminho as peças se encontram em uma meia-esquadria limpa.

## Fazer um cabo

1. Desenhe o caminho: uma {{ui:Curva}} pelos pontos que o cabo atravessa (ela pode subir e descer), ou {{ui:Linha}}s e {{ui:Arco}}s unidos ponta a ponta.
2. No início do caminho, desenhe a seção do cabo: um pequeno {{ui:Círculo}} atravessando o caminho. Comece o círculo no ponto final do caminho e gire-o para ficar alinhado ao caminho; ou desenhe-o sobre uma face que cruze o caminho ali.
3. Selecione o caminho (um clique seleciona uma curva ou arco inteiro; {{key:Ctrl}}+clique adiciona mais arestas).
4. Clique em {{ui:Siga-me}} no grupo {{ui:Modificar}}, depois clique no círculo.

O tubo é um sólido fechado, com lados suaves.

## Sem selecionar o caminho primeiro

Clique em {{ui:Siga-me}}, clique na face e depois clique em qualquer aresta do caminho. O caminho é a cadeia de arestas que passa por essa aresta, até onde três ou mais arestas se encontram.

## O que saber

- **Caminhos fechados** (um círculo, uma curva fechada, o contorno de um retângulo) formam um anel: a face é consumida e o anel se fecha sobre si mesmo. Desenhe um círculo no chão para o caminho e um pequeno círculo em pé atravessando-o para uma rosquinha.
- **Fora do caminho:** a face não precisa tocar o caminho. Um perfil desenhado ao lado de um caminho é varrido ao lado dele, como uma moldura ao longo do topo de uma parede.
- **O caminho não pode se ramificar**, e precisa ser uma única cadeia conectada. O ModelCraft informa quando não é.
- **Uma face deitada ao longo do caminho** (no mesmo plano da primeira aresta do caminho) não pode ser varrida: gire-a para cruzar o caminho.
- É uma única etapa de desfazer.
