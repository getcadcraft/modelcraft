---
title: Amaga, aïlla i mostra
summary: Aparta les coses per treballar entre elles, o mostra només el que estàs treballant; les coses amagades segueixen amagades al fitxer.
keywords: amaga, mostra, mostra-ho tot, aïlla, amaga els altres, mostra, amagat, vista local, visibilitat, fora del pas
from: 2c8a3457
---

Amagar aparta les coses sense esborrar-les. Una cara, aresta, grup o component amagat no es dibuixa, i no s'hi pot ajustar, fer clic ni seleccionar, de manera que pots treballar en allò que hi ha darrere o entre altres coses.

## Amaga

1. Selecciona el que vols amagar: cares, arestes, grups o components.
2. {{ui:Edita}} › {{ui:Més}} › {{ui:Amaga}}.

Per exemple, per treballar al buit estret entre dos grups que estan junts, selecciona el de davant i amaga'l: els clics i els ajustos ara arriben a la cara que hi ha darrere.

## Aïlla

Selecciona el que vols mantenir a la vista i després {{ui:Edita}} › {{ui:Més}} › {{ui:Aïlla (amaga la resta)}}. Tota la resta del model s'amaga o, mentre edites dins d'un grup, tota la resta d'aquell grup. Una cara seleccionada manté les seves arestes.

## Mostra-ho tot

{{ui:Edita}} › {{ui:Més}} › {{ui:Mostra-ho tot}} torna a mostrar tot, a tots els grups. {{ui:Informació de l'entitat}} diu quantes coses estan amagades quan no hi ha res seleccionat, amb un botó {{ui:Mostra-ho tot}} també allà.

{{ui:Esquema}} mostra els grups i components amagats en cursiva, amb un ull barrat; fes clic a l'ull per tornar a mostrar-ne un.

:::note
Amb les tecles de l'estil Modeler, {{key:H}} amaga, {{key:Shift+H}} aïlla i {{key:Alt+H}} mostra-ho tot. ({{ui:Configuració}} › {{ui:ModelCraft}} tria l'estil de tecles.)
:::

## Coses a tenir en compte

- El que està amagat es desa al fitxer de ModelCraft i torna a estar amagat quan l'obres.
- Les coses amagades segueixen al model: les exportacions les inclouen, i també els volums i les mides d'{{ui:Informació de l'entitat}}.
- Cada operació d'amagar, aïllar o mostrar és un sol pas per desfer.
