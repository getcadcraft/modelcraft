---
title: Mover e xirar os eixos de debuxo
summary: Xire os eixos vermello, verde e azul para que coincidan cun edificio que non está en ángulo recto con eles, ou aliñeos cunha cara, para que o debuxo e a escritura os sigan.
keywords: eixos, eixos de debuxo, orixe, aliñar eixos, xirar eixos, restablecer eixos, edificio inclinado, torto, ucs, sistema de coordenadas
from: cab258f7
---

Os eixos vermello, verde e azul guían todo o que debuxa: os rectángulos alíñanse con eles, as liñas bloquéanse a eles, e o chan é o plano vermello-verde. Cando un edificio está en ángulo (un plano de situación que non está en ángulo recto co norte, un ala xirada 30°), mova os eixos sobre el, para que o debuxo siga os seus muros. O modelo en si non se move.

As tres ordes están en {{ui:Editar}} › {{ui:Máis}}.

## Colocar os eixos

1. {{ui:Editar}} › {{ui:Máis}} › {{ui:Colocar eixos}}.
2. Prema onde vai a orixe, como unha esquina do edificio.
3. Prema un punto ao longo do novo eixo vermello, como máis adiante nun muro.
4. Prema un punto cara ao novo eixo verde. O verde faise perpendicular ao vermello, e o azul queda perpendicular aos dous.

Os eixos debúxanse no seu novo lugar. Un rectángulo que debuxe agora no chan, ou que escriba como `4m,3m`, vai en liña cos eixos vermello e verde xirados; as teclas de frecha bloquéanse a eles; e a referencia da orixe está na nova orixe.

## Aliñar os eixos cunha cara

Seleccione unha cara e logo {{ui:Editar}} › {{ui:Máis}} › {{ui:Aliñar eixos á cara}}. O azul pasa entón a apuntar fóra da cara, o vermello vai ao longo da súa aresta máis longa, e a orixe está no inicio desa aresta. Use isto para debuxar nun tellado inclinado como se fose o chan.

## Restablecer os eixos

{{ui:Editar}} › {{ui:Máis}} › {{ui:Restablecer eixos}} devolve os eixos ao lugar onde comezou o modelo.

## Cousas que hai que saber

- Dentro dun grupo ou compoñente aberto, úsanse os seus propios eixos (xíranse con el); os eixos do modelo aplícanse no nivel superior.
- Os eixos gárdanse no ficheiro de ModelCraft, e cada cambio é un paso de desfacer.
- As exportacións e as vistas estándar ({{ui:Superior}}, {{ui:Frontal}}…) seguen usando as direccións propias do modelo.
