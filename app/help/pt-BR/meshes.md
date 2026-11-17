---
title: Malhas
summary: Transforme um grupo ou componente em uma malha — o tipo de objeto com que as ferramentas de conteúdo 3D modelam — e de volta em geometria de push/pull.
keywords: malha, malhas, polígono, polígonos, n-gon, quadrilátero, quadriláteros, vértices, meia-aresta, uv, uvs, converter, converter em malha, converter em geometria, subdivisão, escultura, modelagem, conteúdo 3d
from: e32363e8
---

O ModelCraft tem dois tipos de geometria. A **geometria de push/pull** é o que você desenha: faces planas que se unem, se cortam e se fecham. Uma **malha** é o tipo de objeto com que as ferramentas de conteúdo 3D modelam: faces com qualquer número de cantos, cada canto podendo ter suas próprias coordenadas de textura (UVs), normais e cores, e cada vértice com valores como pesos. Uma malha é posicionada como um grupo ou componente e fica ao lado da geometria de push/pull no mesmo modelo.

## Transformar um grupo ou componente em malha

1. Selecione um grupo ou componente.
2. Em {{ui:Entity info}}, clique em {{ui:Convert to mesh}}.

Suas faces se tornam as faces da malha (uma face com furos entra como triângulos), arestas vivas continuam vivas, arestas suaves sombreiam de forma contínua, e a pintura, os materiais e as texturas importadas permanecem em suas faces. Grupos e componentes dentro dele são unidos em uma só malha. Arestas soltas são deixadas de fora: uma malha mantém faces. Cada posicionamento de um componente mostra a malha. É uma só etapa de desfazer.

## O que Informações da entidade mostra

Selecione uma malha para ver suas faces, vértices e arestas, se ela é um sólido fechado (e seu volume), e seu tamanho posicionado. Uma malha com arestas abertas informa quantas.

## Transformar uma malha de volta em geometria de push/pull

Selecione a malha e clique em {{ui:Convert to geometry}}. Faces planas voltam como eram; uma face cujos cantos não estão em um só plano volta como triângulos. Arestas vivas ficam duras, as demais ficam suaves. {{ui:Explode}} coloca as faces de uma malha diretamente no grupo ao redor dela.

## Coisas a saber

- Clique duas vezes em uma malha para [editar seus vértices, arestas e faces](topic:mesh-edit) na área de trabalho Malha. Converta-a em geometria para editá-la com push/pull; mova, gire, escale, copie, pinte, oculte e etiquete-a como qualquer grupo.
- Exportações, impressão 3D, renderizações e VR veem uma malha como as suas faces.
- Um arquivo que contém uma malha é salvo como uma versão mais nova do arquivo `.modelcraft`, então o ModelCraft 0.6 e versões anteriores não conseguem abri-lo; arquivos sem malha abrem neles como antes. Converta as malhas em geometria antes para compartilhar um arquivo com alguém que usa uma versão mais antiga.
- Desfazer em uma malha guarda apenas o que cada etapa alterou, então até uma malha muito grande desfaz rapidamente.

Veja também [Grupos e componentes](topic:groups-components) e [Ainda não implementado](topic:not-built-yet).
