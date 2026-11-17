---
title: Mallas
summary: Convirta un grupo ou compoñente nunha malla —o tipo de obxecto co que modelan as ferramentas de contido 3D— e de novo en xeometría de empurrar e tirar.
keywords: malla, mallas, polígono, polígonos, n-gon, cuadrilátero, cuadriláteros, vértices, semibordo, uv, uvs, converter, converter en malla, converter en xeometría, subdivisión, esculpir, modelado, contido 3D
from: e32363e8
---

ModelCraft ten dous tipos de xeometría. A **xeometría de empurrar e tirar** é o que debuxa: caras planas que se pegan, se cortan entre si e se curan. Unha **malla** é o tipo de obxecto co que modelan as ferramentas de contido 3D: caras con calquera número de esquinas, cada esquina con capacidade para levar as súas propias coordenadas de textura (UV), normais e cores, e cada vértice con valores como os pesos. Unha malla colócase como un grupo ou compoñente, e convive coa xeometría de empurrar e tirar no mesmo modelo.

## Converter un grupo ou compoñente nunha malla

1. Seleccione un grupo ou compoñente.
2. En {{ui:Información da entidade}}, prema {{ui:Converter en malla}}.

As súas caras pasan a ser as caras da malla (unha cara con buratos entra como triángulos), os bordos duros quedan afiados, os bordos suaves sombrean de xeito suave, e a pintura, os materiais e as texturas importadas quedan nas súas caras. Os grupos e compoñentes que hai dentro únense nunha soa malla. Os bordos soltos quedan fóra: unha malla conserva caras. Cada colocación dun compoñente mostra a malla. É un paso de desfacer.

## Que mostra Información da entidade

Seleccione unha malla para ver as súas caras, vértices e bordos, se é un sólido pechado (e o seu volume) e o seu tamaño tal como está colocada. Unha malla con bordos abertos indica cantos son.

## Converter unha malla de novo en xeometría de empurrar e tirar

Seleccione a malla e prema {{ui:Converter en xeometría}}. As caras planas volven como estaban; unha cara cuxas esquinas non están nun mesmo plano volve como triángulos. Os bordos afiados son duros, os outros son suaves. {{ui:Desagrupar}} pon as caras dunha malla directamente no grupo que a rodea.

## Cousas a saber

- Faga dobre clic nunha malla para [editar os seus vértices, bordos e caras](topic:mesh-edit) no espazo de traballo Malla. Conviértaa en xeometría para editala con empurrar e tirar; móvao, xírao, escálao, copie, pinte, oculte e etiquete como calquera grupo.
- As exportacións, a impresión 3D, os renderizados e a RV ven unha malla como as súas caras.
- Un ficheiro que contén unha malla gárdase como unha versión máis nova do ficheiro `.modelcraft`, así que ModelCraft 0.6 e anteriores non o poden abrir; os ficheiros sen malla ábrense neles como antes. Converta as mallas en xeometría antes de compartir un ficheiro con alguén que use unha versión anterior.
- O desfacer nunha malla conserva só o que cambiou en cada paso, así que mesmo unha malla moi grande desfai rápido.

Vexa tamén [Grupos e compoñentes](topic:groups-components) e [Aínda non implementado](topic:not-built-yet).
