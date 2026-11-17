---
title: Eines de sòlids: unió, resta, intersecció
summary: Uniu grups i components tancats en un de sol, traieu-ne un d'un altre, o conserveu només el que comparteixen.
keywords: sòlid, sòlids, inspector de sòlids, no és sòlid, repara sòlid, forat, aresta solta, del revés, unió, uneix, combina, fusiona, resta, diferència, talla, forat, intersecció, booleà, closca exterior
from: f35df1cc
---

Les eines de sòlids combinen **sòlids**: grups i components les cares dels quals tanquen un volum, amb cada aresta unint exactament dues cares. {{ui:Informació de l'entitat}} diu {{ui:Sòlid}}: {{ui:Sí}} per a un, i mostra'n el volum.

Són al menú {{ui:Sòlids}} del grup {{ui:Organitza}}.

## Quan alguna cosa no és un sòlid

Seleccioneu el grup o component. Si no és un sòlid, {{ui:Informació de l'entitat}} indica el motiu, per exemple "No és un sòlid: 4 arestes limiten un forat · 1 aresta solta":

| Problema | Què vol dir |
|---|---|
| Arestes que limiten un forat | Falta una cara |
| Arestes compartides per tres cares o més | Una cara divideix l'interior, o dues formes es toquen per una aresta |
| Cares dins la forma | Un mur deixat dins del volum |
| Arestes soltes | Línies que no limiten cap cara |
| Cares girades del revés | Les seves cares frontals miren cap a dins, contra les veïnes |

{{ui:Mostra els problemes}} l'obre amb aquestes arestes i cares seleccionades, perquè les pugueu veure. {{ui:Repara}} arregla els casos senzills en un sol pas de desfer: elimina les arestes soltes i les cares dins la forma, gira les cares en la direcció correcta i tanca els forats la vora dels quals és plana. Tot el que no pot reparar amb seguretat (un forat que no és pla, una aresta compartida per moltes cares) ho deixa pendent, i diu què queda.

## Unió

1. Seleccioneu dos o més sòlids (feu clic a un i {{key:Ctrl}}+clic als altres).
2. {{ui:Sòlids}} › {{ui:Unió}}.

Esdevenen un sol sòlid, en un sol grup. On se solapaven, les cares de dins desapareixen.

## Resta

1. {{ui:Sòlids}} › {{ui:Resta}}.
2. Feu clic al sòlid per **treure** (la peça de tall).
3. Feu clic al sòlid per **tallar**.

Allò que queda del segon sòlid es conserva; la peça de tall es consumeix. Per exemple, per fer un forat a través d'un bloc, dibuixeu un pilar que el travessi, feu del pilar un grup, i després resteu el pilar del bloc.

## Intersecció

Seleccioneu dos o més sòlids, i després {{ui:Sòlids}} › {{ui:Intersecció}}. Només es conserva la part que tots comparteixen.

## Coses a saber

- El resultat és un grup nou. Manté el nom, el color i l'etiqueta del primer sòlid (per a la Resta: el que heu tallat). Els colors pintats a les seves cares no es mantenen.
- Les cares laterals planes del resultat són cares úniques. Les laterals rodones surten com les facetes planes amb què es van dibuixar.
- Si un grup o component no és un sòlid, l'eina diu quin és i no canvia res. Busqueu una cara que falti o una cara solta dins.
- Dins d'un grup obert, les eines actuen sobre els grups i components que hi ha.
- Cada eina és un sol pas de desfer.
- La primera vegada que useu una eina de sòlids, es carrega el seu motor (manifold-3d), cosa que pot trigar una mica.
