---
title: Empurrar e tirar de caras para formar sólidos
summary: Converter unha cara nunha caixa, facer un edificio máis alto ou máis baixo, engadir un corpo saínte ou un rebaixe, e repetir unha distancia cun dobre clic.
keywords: empurrar tirar, extrudir, altura, sólido, caixa, masa, máis alto, rebaixe, saínte, repetir, dobre clic, volume, nivel, sobre a cara, ao ras, mesma altura
from: dc093c91
---

{{ui:Empurrar/tirar}} ({{key:P}}) move unha cara ao longo da súa propia dirección: arriba e abaixo para un chan, cara dentro e cara fóra para un muro. O que pasa depende da cara.

## Facer un sólido desde unha cara

1. Debuxe unha cara, por exemplo un rectángulo no chan ([Debuxar caras](topic:draw-faces)).
2. Prema {{key:P}}.
3. Pase o punteiro sobre a cara. Ilumínase.
4. Faga clic na cara e logo mova o punteiro. A cara sobe (ou baixa) e saen paredes desde os seus bordos. A caixa de valor ({{ui:Distancia}}) e a punta mostran a distancia.
5. Faga clic para rematar, ou escriba unha distancia e prema {{key:Enter}}: `3m`, `10'`, `2700` nun modelo en milímetros.

   Agora ten un sólido pechado. Séleccioo todo e agrupeo (vexa [Grupos e compoñentes](topic:groups-components)): {{ui:Información da entidade}} mostra entón «Sólido: Sí» e o seu volume.

Unha cara soa pode ir en calquera dos dous sentidos: tírea cara arriba para unha masa sobre o chan, ou empúrrea cara abaixo para un pozo ou unha cimentación.

:::tip
En vez de premer dúas veces, prema sobre a cara, arrastre e solte. Nunha pantalla táctil esa é a forma natural: prema, arrastre, levante.
:::

## Tirar até a altura doutra cousa

Mentres tira, pase o punteiro sobre unha esquina, un punto medio, unha aresta ou unha guía doutra parte do modelo. A cara encaixa nesa altura e un marcador mostra o punto. Use isto para facer dous bloques da mesma altura, ou para parar nunha liña guía que colocou coa [cinta métrica](topic:guides-measure).

Tamén pode pasar o punteiro sobre unha cara paralela á que empurra, como a parte superior doutro bloque ou a parte superior da caixa sobre a que se apoia un poste. A punta di «Sobre a cara», e a cara que empurra acaba ao ras dela. Por exemplo, empurre a cara interior dun tubo cara abaixo até que quede ao ras da caixa baixo o tubo.

Unha cara en ángulo co que empurra non define un nivel. A distancia segue ao punteiro. Tampouco o fai unha cara detrás da cara que empurra.

Cando unha cara empurrada volve quedar ao ras das caras que a rodean, os seus lados desaparecen. Non quedan lados de altura cero, e o contorno que debuxou permanece na cara, así que pode volver empurralo máis tarde. Para que sexa de novo unha soa cara, borre as arestas do contorno coa {{ui:Goma}}: as dúas caras únense.

## Facer unha caixa máis alta ou máis baixa

Empurre/tire da parte superior dunha caixa. Como os lados xa suben rectos desde ela, a parte superior simplemente se move: a caixa fícase máis alta ou máis baixa, e non se fan arestas novas.

- Empurrar a parte superior ata abaixo do todo, até a base, elimina a caixa. ModelCraft para en altura cero; nunca lle dá a volta á caixa do revés.
- Igual con calquera cara cuxos veciños van todos na súa dirección, como o extremo dun muro.

## Engadir un corpo saínte ou un rebaixe

1. Debuxe un rectángulo no lateral dunha caixa (comece sobre a cara; queda no plano da cara).
2. Prema {{key:P}} e tire do novo rectángulo **cara fóra**. Engade material: un corpo saínte, unha cheminea, unha marquesina.
3. Ou empúrreo **cara dentro**. Corta un rebaixe: un pórtico, un nicho, unha entrada retirada.

Cando os lados da nova parte se aliñan con caras que xa existen, fúndense nunha soa cara, así que non quedan liñas perdidas nun muro plano.

## Empurrar de extremo a extremo

Empurrar unha cara para dentro dun sólido detense na primeira cara que hai detrás dela. Cando chega a esa cara, corta unha abertura. Así se fan fiestras e portas nun muro con grosor. Vexa [Cortar unha abertura nun muro](topic:openings).

## Escribir unha distancia

Despois de facer clic na cara, escriba a distancia e prema {{key:Enter}}.

- A distancia escrita vai no sentido no que se movía. Se aínda non se movera, vai cara á fronte da cara (fóra dun sólido, cara arriba desde o chan).
- Escriba un número negativo, como `-500`, para ir no outro sentido.
- Se cambia de idea antes de facer clic, prema {{key:Esc}}. A cara volve atrás.

## Repetir a última distancia

Despois dunha operación de empurrar/tirar, faga dobre clic noutra cara con {{ui:Empurrar/tirar}} aínda seleccionado. Móvese a mesma distancia. É a forma rápida de dar a varios muros ou varios chanos o mesmo grosor ou altura.

ModelCraft recorda a distancia até que cambie a outra ferramenta.

## Cousas que hai que saber

- Empurrar/tirar traballa cunha cara de cada vez. Se fai clic nalgo que non é unha cara, a barra de estado di «Empurrar/tirar funciona sobre unha cara. Faga clic nunha cara».
- Para empurrar/tirar dunha cara dentro dun grupo ou compoñente, ábrao primeiro (faga dobre clic).
- Con **Colisión** activada, unha operación que choca con outro sólido detense onde toca, e a punta di con que toca (o nome do obxecto, ou «xeometría solta neste grupo») e resalta as caras que atopou. Un oco que empurra no seu propio sólido (por exemplo, unha cara desprazada que se empurra de novo cara abaixo) é parte dese sólido e as súas paredes nunca o deteñen.
- Dous sólidos empurrados un contra o outro non se cortan nin se unen: as súas caras simplemente se atravesan. Vexa [Aínda sen construír](topic:not-built-yet).
