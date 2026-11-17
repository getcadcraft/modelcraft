---
title: Malhas
summary: Transforme um grupo ou componente numa malha — o tipo de objeto com que as ferramentas de conteúdo 3D modelam — e de volta em geometria de empurrar/puxar.
keywords: malha, malhas, polígono, polígonos, n-gon, quad, quads, vértices, half-edge, uv, uvs, converter, converter em malha, converter em geometria, subdivisão, escultura, modelação, conteúdo 3D
from: e32363e8
---

O ModelCraft tem dois tipos de geometria. A **geometria de empurrar/puxar** é o que desenha: faces planas que se unem, se cortam umas às outras e se fecham. Uma **malha** é o tipo de objeto com que modelam as ferramentas de conteúdo 3D: faces com qualquer número de cantos, cada canto podendo ter as respetivas coordenadas de textura (UVs), normais e cores, e cada vértice valores como os pesos. Uma malha é colocada como um grupo ou componente e fica ao lado da geometria de empurrar/puxar no mesmo modelo.

## Converter um grupo ou componente numa malha

1. Selecione um grupo ou componente.
2. Em {{ui:Informações da entidade}}, clique em {{ui:Converter em malha}}.

As faces passam a ser as faces da malha (uma face com furos entra como triângulos), as arestas vivas continuam vivas, as arestas suaves são sombreadas de forma suave, e a pintura, os materiais e as texturas importadas mantêm-se nas respetivas faces. Os grupos e componentes dentro dele são unidos numa só malha. As arestas soltas ficam de fora: uma malha guarda faces. Cada colocação de um componente mostra a malha. É um só passo de anulação.

## O que mostram as Informações da entidade

Selecione uma malha para ver as respetivas faces, vértices e arestas, se é um sólido fechado (e o respetivo volume), e o tamanho como está colocada. Uma malha com arestas abertas indica quantas.

## Converter uma malha de volta em geometria de empurrar/puxar

Selecione a malha e clique em {{ui:Converter em geometria}}. As faces planas voltam como estavam; uma face cujos cantos não estão num só plano volta como triângulos. As arestas vivas ficam rígidas, as restantes suaves. {{ui:Explodir}} coloca as faces de uma malha diretamente no grupo em volta dela.

## Coisas a saber

- Faça duplo clique numa malha para [editar os vértices, arestas e faces](topic:mesh-edit) na área de trabalho Malha. Converta-a em geometria para a editar com empurrar/puxar; mova, rode, escale, copie, pinte, oculte e etiquete-a como qualquer grupo.
- As exportações, a impressão 3D, as renderizações e a RV veem uma malha como um conjunto de faces.
- Um ficheiro que tenha uma malha é guardado como uma versão mais recente do ficheiro `.modelcraft`, por isso o ModelCraft 0.6 e anteriores não o conseguem abrir; os ficheiros sem malha abrem nessas versões como antes. Converta as malhas em geometria antes de partilhar um ficheiro com alguém que use uma versão anterior.
- A anulação numa malha guarda apenas o que cada passo alterou, por isso mesmo uma malha muito grande é anulada depressa.

Ver também [Grupos e componentes](topic:groups-components) e [Ainda não implementado](topic:not-built-yet).
