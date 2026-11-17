---
title: Medir e colocar guías
summary: Lea lonxitudes e superficies, mida entre dous puntos coa cinta e debuxe liñas e puntos guía contra os que debuxar.
keywords: medir, cinta métrica, transportador, ángulo, guía angulada, guía, liña guía, liña de construción, distancia, cota, lonxitude, superficie, desfasar, disposición, punto guía
from: de6d04d9
---

## Ler tamaños sen medir

Seleccione algo e mire {{ui:Entity info}}:

- Unha aresta mostra a súa **lonxitude**.
- Unha cara mostra a súa **superficie** e cantos buratos ten.
- Varias caras mostran a súa **superficie total**.
- Un grupo ou compoñente mostra o seu **tamaño** (ancho × fondo × alto da caixa que o rodea) e, se é un sólido pechado, o seu **volume**.
- Sen nada seleccionado, {{ui:Entity info}} mostra o tamaño de todo o modelo.

As lonxitudes e superficies usan a unidade do selector abaixo á dereita. Un modelo en milímetros mostra as superficies de 0,01 m² ou máis en metros cadrados (unha sala de 4 × 3 m indica "12 m²").

Mentres debuxa, a caixa de valor mostra en directo a lonxitude, o tamaño, o raio ou a distancia, así que raramente necesita medir despois.

Para cambiar un tamaño despois de debuxar, seleccione unha aresta ou un grupo e escriba de novo a súa lonxitude ou tamaño en {{ui:Entity info}}. Ou coloque unha [cota](topic:dimensions) e escriba nela unha lonxitude nova.

## Medir entre dous puntos

1. Prema {{key:T}} para activar a {{ui:Tape}}.
2. Faga clic nun punto: unha esquina, un punto medio, un punto dunha cara ou o chan. (Facer clic nunha aresta fai outra cousa; consulte máis abaixo.)
3. Mova ata o segundo punto. A punta e a caixa de valor ({{ui:Length}}) mostran a distancia. Encaixa en puntos e nas direccións vermella, verde e azul.
4. Faga clic. A barra de estado di "Medido 4' 6"." e queda un **punto guía** no segundo punto.

Para deixar o punto guía a unha distancia exacta, escríbaa despois do primeiro clic e prema {{key:Enter}}: vai na dirección á que apunta.

## Colocar unha liña guía

Unha liña guía é unha liña de trazos sen fin, paralela a unha aresta, a unha distancia que vostede escolle. Use as guías para marcar un retranqueo, unha altura de piso ou onde comeza unha xanela.

1. Prema {{key:T}}.
2. Faga clic nunha **aresta** (non no seu extremo). A punta di "Sobre a aresta".
3. Afástese da aresta, cara ao lado onde debe ir a guía. Unha liña de trazos segue, paralela á aresta, e a caixa de valor ({{ui:Offset}}) mostra a distancia.
4. Faga clic, ou escriba o desfasamento e prema {{key:Enter}}: `1.5m`, `5'`.

   A barra de estado di "Liña guía a 1,5 m da aresta."

Comezar sobre unha liña guía existente crea outra guía paralela a ela, así que pode ir desprazando unha cuadrícula a partir dunha guía.

Se escribe un desfasamento sen separarse antes da aresta, ModelCraft non sabe que lado quere: "Afástese primeiro da aresta para indicar o lado."

## Unha guía en ángulo: transportador

1. Faga clic en {{ui:Protractor}} no grupo {{ui:Modify}}.
2. Faga clic no centro: o punto polo que pasa a guía. Sobre unha cara, o transportador queda sobre esa cara; noutro lugar queda plano. Despois deste clic, {{key:Right}}, {{key:Left}} ou {{key:Up}} o colocan en ángulo recto co vermello, co verde ou co azul (prema de novo para desfacer).
3. Faga clic nun punto que fixe 0°, por exemplo ao longo dunha aresta.
4. Mova ata o ángulo que quere e faga clic: encaixa en pasos de 15°. Ou escriba o ángulo en graos, como `22.5`, e prema {{key:Enter}}; a guía vai ao lado onde está o punteiro.

A liña guía pasa polo centro a ese ángulo. Debuxe ao longo dela con {{ui:Line}} para unha pendente de cuberta, un chaflán ou un muro abocinado.

## Debuxar contra guías

As ferramentas de debuxo encaixan nas liñas guía ("Sobre guía") e nos puntos guía ("Punto guía"), e no lugar onde unha liña guía cruza unha dirección de eixe. Comece un rectángulo onde se cruzan dúas guías para colocalo con exactitude.

## Eliminar guías

- Unha guía: seleccione con {{ui:Select}} e prema {{key:Delete}}, ou fágalle clic coa {{ui:Eraser}}.
- Todas as guías: sen nada seleccionado, faga clic en {{ui:Delete all guides}} en {{ui:Entity info}}.

As guías gárdanse no ficheiro `.modelcraft`. Non se exportan a outros formatos.
