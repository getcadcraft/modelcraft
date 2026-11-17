---
title: Inferencia e encaixe
summary: Que significan os marcadores de cor, que encaixe gaña e como bloquear unha dirección coas teclas de flecha ou Shift.
keywords: inferencia, encaixe, encaixar, punto final, punto medio, centro da cara, centro, sobre aresta, sobre cara, eixo, eixo vermello, eixo verde, eixo azul, paralelo, perpendicular, bloqueo, shift, osnap
from: e78984e9
---

Mentres unha ferramenta de debuxo ou de edición traballa, ModelCraft mira o que está baixo o punteiro e encaixa na cousa máis útil próxima. Un marcador mostra o que atopou, e a punta na parte inferior esquerda indícao.

## Marcadores e puntas

| Punta | Marcador | Encaixa en |
|---|---|---|
| Punto final | Círculo verde | O extremo dunha aresta |
| Punto medio | Círculo cian | O centro dunha aresta |
| Centro da cara | Círculo azul | O centro da cara baixo o punteiro |
| Punto guía | Gris | Un punto guía deixado pola cinta de medir |
| Orixe | Ocre | Onde se cruzan os eixos vermello, verde e azul |
| Sobre o eixo vermello / Sobre o eixo verde / Sobre o eixo azul | Unha liña desa cor | Unha liña desde o punto de inicio nesa dirección |
| Paralelo á aresta / Perpendicular á aresta | Liña magenta | Unha liña desde o punto de inicio, paralela ou perpendicular á aresta lembrada (consulte máis abaixo) |
| Bloqueado | Liña magenta | Unha dirección que bloqueou cunha tecla de flecha ou {{key:Shift}} |
| Sobre a aresta | Cadrado vermello | En calquera punto dunha aresta |
| Sobre a guía | Gris | En calquera punto dunha liña guía |
| Sobre a cara | Rombo azul | En calquera punto dunha cara |
| Sobre o plano | ningún | O plano no que comezou, cando o punteiro está sobre espazo baleiro |
| No chan | ningún | O chan (o plano vermello-verde), cando non hai nada máis |

Cando unha liña de eixo desde o seu punto de inicio cruza unha aresta ou unha guía, ModelCraft encaixa no cruzamento e a punta nomea ambos, como "Sobre o eixo vermello, sobre a aresta".

## Que encaixe gaña

1. **Puntos** a uns 12 píxeles: primeiro os puntos finais, despois os puntos guía, os puntos medios, o centro da cara baixo o punteiro e a orixe.
2. **Direccións** desde o punto de inicio: os eixos vermello, verde e azul, e paralela ou perpendicular á aresta lembrada.
3. **Sobre unha aresta** ou unha liña guía.
4. **Sobre unha cara.**
5. **O plano de debuxo**, ou o chan.

As cousas ocultas detrás dunha cara nunca encaixan. Oriente a vista para ver o punto que quere.

## Debuxar sobre unha cara desde un punto

Un {{ui:Rectangle}}, {{ui:Circle}} ou {{ui:Polygon}} iniciado nunha esquina, nun punto medio, nunha aresta ou no centro dunha cara debúxase **no plano da cara baixo o punteiro**, e recorta esa cara. Unha aresta pertence a dúas caras, así que o lado da aresta onde está o punteiro decide: para debuxar no extremo dunha caixa longa, comece no punto medio dunha das súas arestas co punteiro xusto dentro da cara final.

## Paralelo e perpendicular

ModelCraft lembra a **última aresta sobre a que pasou o punteiro antes do primeiro clic**. Comezar nunha esquina ou nunha aresta conta como pasar sobre esa aresta. Unha vez que a ferramenta traballa, as outras arestas sobre as que pase non substitúen esa.

Para debuxar unha liña paralela a unha aresta existente:

1. Prema {{key:L}} e pase o punteiro sobre a aresta que quere igualar.
2. Mova ata o punto de inicio, sen cruzar outras arestas polo camiño se pode, e faga clic.
3. Mova na dirección paralela a esa aresta. A liña se pon magenta e a punta di "Paralelo á aresta". Perpendicular funciona igual, dentro do plano no que debuxa.

Se se lembrou a aresta equivocada, prema {{key:Esc}}, pase o punteiro sobre a aresta correcta e comece de novo.

## Bloquear unha dirección

Despois do primeiro clic dunha ferramenta, pode manter o seguinte punto nunha soa liña:

| Tecla | Bloquea en |
|---|---|
| {{key:Right}} | O eixo vermello |
| {{key:Left}} | O eixo verde |
| {{key:Up}} | O eixo azul (recto cara arriba) |
| {{key:Down}} | Paralelo á aresta lembrada (consulte enriba) |

Prema a mesma flecha de novo para desbloquear. A barra de estado di "Bloqueado ao eixo vermello. Prema a mesma flecha para desbloquear."

Mentres está bloqueado, o punto esvara pola liña cara a onde estea o punteiro, e segue aliñándose cos puntos sobre os que pasa: pase sobre a esquina doutra caixa para debuxar unha liña ao longo do vermello exactamente ata esa esquina.

**{{key:Shift}}** bloquea a dirección á que está encaixado neste momento (un eixo, ou paralelo), mentres o manteña premido. Solte para desbloquear.

Os bloqueos funcionan en {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Polygon}}, {{ui:Move}}, {{ui:Scale}} e {{ui:Tape}}. Antes do primeiro clic, as teclas de flecha orbitan a vista.

## Dentro dun grupo

Mentres edita dentro dun grupo ou compoñente, os eixos son os propios do grupo (móvense con el, e xíranse con el se foi xirado). Os encaixes seguen atopando puntos e arestas fóra do grupo, así que pode aliñar cousas co resto do modelo.
