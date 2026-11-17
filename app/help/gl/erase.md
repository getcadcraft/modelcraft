---
title: Borrar e limpar
summary: Borrar arestas, grupos e guías coa goma ou a tecla Delete, reparar caras divididas e corrixir caras que miran á dirección contraria.
keywords: borrar, goma, eliminar, retirar, reparar, unir caras, limpar, liñas soltas, inverter cara, cara posterior, desfacer
from: 80b92a81
---

## Borrar coa goma

1. Prema {{key:E}} para usar a {{ui:Eraser}}.
2. Prema unha aresta, un grupo ou compoñente, ou unha guía. Bórrase.
3. Para borrar varios, prema e arrastre sobre eles. Todo o que pasa por riba queda resaltado, e todo se borra ao soltar.

A goma non selecciona caras: unha cara desaparece cando se borran as arestas que precisa. As caras son o que a goma atravesa para atopar arestas.

## Que lle pasa ás caras

- **Unha aresta entre dúas caras no mesmo plano** (unha liña que debuxou atravesando un chan, por exemplo) desaparece e as dúas caras **se reparan** e fanse unha.
- **Unha aresta que unha cara necesita para seguir pechada** (a aresta dunha caixa) leva consigo esa cara. Se borra unha aresta superior dunha caixa, desaparecen a superior e unha lateral, e queda unha caixa aberta.
- **Os cabos soltos** (puntos que xa non usa ningunha aresta) límpanse.

Ao borrar a última copia dun compoñente, o compoñente tamén se retira do panel {{ui:Components}}.

## Borrar coa tecla Delete

1. Seleccione o que quere retirar con {{ui:Select}}.
2. Prema {{key:Delete}} ou {{key:Backspace}}.

Isto tamén elimina caras. Unha cara borrada así deixa as súas arestas, así que pode borrar a tapa dunha caixa e conservar o seu contorno, e logo debuxar outra cousa alí.

## Limpar liñas soltas nunha cara plana

Se un muro ou un chan mostra liñas que non quere (sobrantes do debuxo), bórreas coa {{ui:Eraser}}. As liñas que están na cara reparan e desaparecen; a cara queda.

## Unha cara que mira á dirección contraria

Unha cara vista desde detrás vese azul-gris. Se unha cara mostra azul-gris no exterior do modelo:

1. Seleccione a cara.
2. Prema {{ui:Reverse face}} en {{ui:Entity info}}.

A dirección das caras importa sobre todo ao exportar: os renderizadores, os motores de xogos e as impresoras 3D poden ocultar ou interpretar mal as caras que miran cara a dentro.

## Desfacer un erro

{{key:Mod+Z}} desfai un paso de cada vez, e {{key:Mod+Y}} (ou {{key:Mod+Shift+Z}}) refai. Un arrastre coa goma é un só paso, por moitas cousas que colla. A barra de estado indica o que se desfixo: "Desfeito: borrado."
