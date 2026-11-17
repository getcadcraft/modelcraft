---
title: Selecciona elements
summary: Feu clic, doble clic i triple clic, arrossegueu un quadre de finestra o d'intersecció, afegiu i traieu amb tecles modificadores, i suprimiu.
keywords: selecciona, selecció, finestra, intersecció, afegeix a la selecció, deselecciona, selecciona-ho tot, triple clic, doble clic, suprimeix, esborra
from: d56d1f89
---

{{ui:Selecciona}} ({{key:Space}}) és l'eina amb què comença ModelCraft, i a la qual et torna {{key:Esc}}. Les coses seleccionades es tornen blaves, i {{ui:Informació de l'entitat}} a la dreta diu què són.

## Clic

| Acció | Selecciona |
|---|---|
| Clic a una cara o una aresta | Aquella cara o aresta |
| Clic a un grup o component | Tot el grup o component |
| Doble clic a una cara | La cara i les seves arestes |
| Doble clic a una aresta | L'aresta i les cares a banda i banda |
| Doble clic a un grup o component | L'obre per editar-lo (vegeu [Grups i components](topic:groups-components)) |
| Triple clic a una cara o aresta | Tot el que hi està connectat: tot l'objecte |
| Clic a l'espai buit | Res (esborra la selecció) |
| Doble clic a l'espai buit mentre s'edita un grup | Tanca el grup |

Les arestes són més fàcils d'encertar que les cares: quan el punter és a pocs píxels d'una aresta, el clic en pren l'aresta.

## Arrossega un quadre

- **D'esquerra a dreta** dibuixa un quadre sòlid: una selecció de **finestra**. Només se selecciona el que hi queda completament dins.
- **De dreta a esquerra** dibuixa un quadre de traços: una selecció d'**intersecció**. Se selecciona tot el que el quadre toca, i una cara se selecciona quan el quadre queda completament dins seu.

Un grup o component compta com una sola cosa: una finestra l'ha de contenir sencer; una intersecció només ha de tocar-lo.

## Afegeix i treu

Manteniu una tecla premuda mentre feu clic o arrossegueu:

| Tecla | Efecte |
|---|---|
| {{key:Shift}} | Alterna: afegeix el que no és seleccionat, treu el que ho és |
| {{key:Mod}} | Afegeix |
| {{key:Shift}} i {{key:Mod}} junts | Treu |

Per seleccionar-ho tot del model (o tot el que hi ha al grup que editeu), premeu {{key:Mod+A}}.

## Esborra la selecció

Premeu {{key:Esc}} (amb {{ui:Selecciona}} com a eina), o feu clic a l'espai buit.

## Suprimeix el que està seleccionat

Premeu {{key:Delete}} o {{key:Backspace}}. Les cares, arestes, grups i guies de la selecció se suprimeixen en un sol pas; {{key:Mod+Z}} les torna.

Suprimir una aresta elimina les cares que en depenen, tret que l'aresta només separés dues cares del mateix pla: aleshores les dues cares s'uneixen en una. Suprimir una cara deixa les seves arestes. Vegeu [Esborra i neteja](topic:erase).

## Selecciona dins d'un grup

Fer clic a un grup selecciona tot el grup. Per seleccionar una cara dins seu, feu doble clic al grup per obrir-lo i després feu clic. Mentre un grup és obert, els clics només arriben al que hi ha dins; la resta s'esvaeix. Premeu {{key:Esc}} sense res seleccionat, o feu doble clic a l'espai buit, per tancar-lo.

L'{{ui:Esquema}} de l'esquerra selecciona grups i components pel nom, cosa que ajuda quan són amagats darrere d'altres objectes.
