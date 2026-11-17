---
title: Texto 3D
summary: Engadir letras ao modelo como caras, planas ou sólidas, apoiadas en calquera cara: un letreiro, un número de casa, un nome nunha porta.
keywords: texto 3d, texto, letras, rotulación, letreiro, sinalización, número de casa, etiqueta, gravar, tipografía, palabras
from: 923f5d93
---

{{ui:3D Text}} no grupo {{ui:Draw}} crea rotulación a partir de caras, que pode pintar, empurrar/tirar ou cortar nun sólido.

## Engadir texto

1. Prema en {{ui:3D Text}}.
2. Escriba o texto. Prema {{key:Enter}} na caixa para unha segunda liña.
3. Fixe a {{ui:Letter height}} (a altura dunha letra maiúscula, como `30cm` ou `1'`) e a {{ui:Depth}}:
   - `0` dá **letras planas**: caras apoiadas sobre o que as coloque, listas para pintar ou para empurrar/tirar.
   - Unha profundidade como `5cm` dá **letras sólidas**: sólidos pechados que pode usar coas [ferramentas de sólidos](topic:solids).
4. Prema en {{ui:Place}} e logo faga clic onde vai o texto.

Sobre unha cara, o texto queda apoiado nesa cara, lido de esquerda a dereita: nunha parede queda en vertical; no chan ou nunha mesa queda plano ao longo do vermello. Lonxe de calquera cara, queda no chan.

O texto é un **compoñente** co nome do propio texto, así que cada copia cambia se edita unha, e aparece na lista {{ui:Components}} para colocalo de novo.

## Cousas que debe saber

- As letras son a fonte de trazo simple propia de ModelCraft, engrosada: limpa e lexible, sen escolla de tipo de letra por agora.
- Deséñanse as letras, os díxitos e os signos comúns (incluídas as letras acentuadas); un carácter que a fonte non ten aparece como unha pequena caixa.
- Para cambiar as palabras, elimine o texto e engádao de novo.
- Para gravar a rotulación nunha superficie, faga letras sólidas, colóqueas a media altura dun grupo sólido e [restalas](topic:solids).
