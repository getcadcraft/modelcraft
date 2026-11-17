---
title: Esborra i neteja
summary: Esborra arestes, grups i guies amb l'esborrador o la tecla Delete, uneix les cares partides i corregeix les cares que miren en la direcció equivocada.
keywords: esborra, esborrador, suprimeix, elimina, uneix, fusiona cares, neteja, línies soltes, inverteix la cara, cara posterior, desfés
from: 80b92a81
---

## Esborra amb l'esborrador

1. Premeu {{key:E}} per a l'{{ui:Eraser}}.
2. Feu clic a una aresta, a un grup o component, o a una guia. S'esborra.
3. Per esborrar-ne diversos, premeu i arrossegueu per sobre seu. Tot el que passeu per sobre es ressalta, i tot desapareix en alliberar el botó.

L'esborrador no selecciona cares: una cara desapareix quan esborreu les arestes que necessita. Les cares són el que l'esborrador travessa per trobar arestes.

## Què passa amb les cares

- **Una aresta entre dues cares del mateix pla** (una línia que heu dibuixat a través d'un terra, per exemple) desapareix i les dues cares **es fusionen** en una.
- **Una aresta que una cara necessita per estar tancada** (l'aresta d'una caixa) s'emporta aquella cara. Si esborreu una aresta superior d'una caixa, desapareixen la part superior i un costat, i en queda una caixa oberta.
- **Els caps solts** (punts que cap aresta ja utilitza) es netegen.

Esborrar l'última còpia d'un component també el treu del tauler {{ui:Components}}.

## Esborra amb la tecla Delete

1. Seleccioneu el que voleu treure amb {{ui:Selecciona}}.
2. Premeu {{key:Delete}} o {{key:Backspace}}.

Això també elimina les cares. Una cara esborrada d'aquesta manera deixa enrere les seves arestes, de manera que podeu esborrar la part superior d'una caixa i mantenir-ne el contorn, i després dibuixar-hi alguna cosa més.

## Neteja línies soltes en una cara plana

Si un mur o un terra mostra línies que no voleu (sobrants del dibuix), esborreu-les amb l'{{ui:Eraser}}. Les línies que es troben dins la cara es fusionen i desapareixen; la cara es queda.

## Una cara que mira en la direcció equivocada

Una cara vista des del darrere es mostra en gris blavós. Si una cara es veu en gris blavós a l'exterior del model:

1. Seleccioneu la cara.
2. Feu clic a {{ui:Inverteix la cara}} dins de {{ui:Informació de l'entitat}}.

La direcció de les cares importa sobretot en exportar: els programes de renderitzat, els motors de jocs i les impressores 3D poden amagar o interpretar malament les cares que apunten cap a dins.

## Desfer un error

{{key:Mod+Z}} desfà un pas cada vegada, i {{key:Mod+Y}} (o {{key:Mod+Shift+Z}}) el refà. Un arrossegament amb l'esborrador és un sol pas, per molts elements que inclogui. La barra d'estat indica què s'ha desfet: "S'ha desfet: esborra."
