---
title: Siga-me: varrer uma face ao longo de um percurso
summary: Fazer tubos, cabos, corrimãos, molduras e anéis varrendo uma face ao longo de arestas, arcos ou uma curva.
keywords: siga-me, follow me, varrimento, varrer, percurso, tubo, cabo, corrimão, moldura, cornija, caleira, anel, toro, torno, extrudir ao longo de
from: ec7b3839
---

{{ui:Follow me}} move uma face ao longo de um percurso e constrói o sólido por onde ela passa. A face mantém a sua forma e fica perpendicular ao percurso, e em cada canto do percurso as peças encontram-se numa meia-esquadria limpa.

## Fazer um cabo

1. Desenhe o percurso: uma {{ui:Curve}} que passe pelos pontos por onde o cabo passa (pode subir e descer), ou {{ui:Line}}s e {{ui:Arc}}s unidos extremo a extremo.
2. No início do percurso, desenhe a secção do cabo: um pequeno {{ui:Circle}} atravessado sobre o percurso. Inicie o círculo no ponto final do percurso e rode-o para ficar voltado ao longo do percurso; ou desenhe-o numa face que atravesse o percurso ali.
3. Selecione o percurso (um clique seleciona uma curva ou um arco inteiro; {{key:Ctrl}}+clique acrescenta mais arestas).
4. Clique em {{ui:Follow me}} no grupo {{ui:Modify}} e, depois, clique no círculo.

O tubo é um sólido fechado, com lados suaves.

## Sem selecionar primeiro o percurso

Clique em {{ui:Follow me}}, clique na face e depois clique em qualquer aresta do percurso. O percurso é a cadeia de arestas através dessa aresta, até onde três ou mais arestas se encontram.

## O que deve saber

- **Percursos fechados** (um círculo, uma curva fechada, o contorno de um retângulo) fazem um anel: a face é consumida e o anel fecha-se sobre si mesmo. Desenhe um círculo no chão para o percurso e um pequeno círculo de pé, atravessado sobre ele, para uma rosquinha.
- **Fora do percurso:** a face não tem de tocar no percurso. Um perfil desenhado ao lado de um percurso varre-se ao lado dele, como uma moldura ao longo do topo de uma parede.
- **O percurso não pode ramificar-se**, e tem de ser uma cadeia única e ligada. O ModelCraft avisa quando não é.
- **Uma face deitada ao longo do percurso** (no mesmo plano da primeira aresta do percurso) não pode ser varrida: rode-a para atravessar o percurso.
- É um só passo de anulação.
