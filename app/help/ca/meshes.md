---
title: Malles
summary: Converteix un grup o component en una malla —el tipus d'objecte amb què modelen les eines de contingut 3D— i de nou en geometria de prem/estira.
keywords: malla, malles, polígon, polígons, n-gon, quad, quads, vèrtexs, half-edge, uv, uvs, converteix, converteix a malla, converteix a geometria, subdivisió, escultura, modelatge, contingut 3D
from: e32363e8
---

ModelCraft té dos tipus de geometria. La **geometria de prem/estira** és la que dibuixeu: cares planes que s'uneixen, es tallen entre elles i es reparen. Una **malla** és el tipus d'objecte amb què modelen les eines de contingut 3D: cares amb qualsevol nombre de cantons, cada canton capaç de portar les seves pròpies coordenades de textura (UV), normals i colors, i cada vèrtex valors com els pesos. Una malla es col·loca com un grup o component, i es queda al costat de la geometria de prem/estira al mateix model.

## Converteix un grup o component en malla

1. Seleccioneu un grup o component.
2. A {{ui:Entity info}}, feu clic a {{ui:Convert to mesh}}.

Les seves cares esdevenen les cares de la malla (una cara amb forats entra com a triangles), les arestes vives es mantenen vives, les arestes toves s'ombregen suaument, i la pintura, els materials i les textures importades es mantenen a les seves cares. Els grups i components que hi ha dins s'uneixen en una sola malla. Les arestes soltes es deixen fora: una malla conserva les cares. Cada col·locació d'un component mostra la malla. És un sol pas de desfer.

## Què mostra la informació de l'entitat

Seleccioneu una malla per veure'n les cares, els vèrtexs i les arestes, si és un sòlid tancat (i el seu volum), i la seva mida tal com està col·locada. Una malla amb arestes obertes diu quantes.

## Torna una malla a geometria de prem/estira

Seleccioneu la malla i feu clic a {{ui:Convert to geometry}}. Les cares planes tornen tal com eren; una cara els cantons de la qual no són en un sol pla torna com a triangles. Les arestes vives són dures, les altres toves. {{ui:Explode}} posa les cares d'una malla directament al grup que hi ha al voltant.

## Coses a saber

- Feu doble clic en una malla per [editar-ne els vèrtexs, arestes i cares](topic:mesh-edit) a l'espai Malla. Convertiu-la en geometria per editar-la amb prem/estira; moveu, gireu, escaleu, copieu, pinteu, amagueu i etiqueteu-la com qualsevol grup.
- Les exportacions, la impressió 3D, les imatges renderitzades i la RV veuen una malla com les seves cares.
- Un fitxer que conté una malla es desa com una versió més nova del fitxer `.modelcraft`, així que ModelCraft 0.6 i versions anteriors no el poden obrir; els fitxers sense malla s'obren com abans. Convertiu les malles en geometria primer per compartir un fitxer amb algú amb una versió anterior.
- El desfer en una malla només guarda el que canvia cada pas, així que fins i tot una malla molt gran es desfà de pressa.

Vegeu també [Grups i components](topic:groups-components) i [Encara no implementat](topic:not-built-yet).
