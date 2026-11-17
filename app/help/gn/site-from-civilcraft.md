---
title: Tomar un sitio desde CivilCraft
summary: Abrí el archivo de dirección a sitio que crea CivilCraft y agregá los edificios y el predio alrededor como masas y una línea de sitio, solo los que marques.
keywords: sitio, civilcraft, dirección, predio, edificios vecinos, masas, contexto, ccsite, datos abiertos, openstreetmap
from: f28e4a3b
---

CivilCraft puede buscar una dirección y guardar lo que las fuentes de datos abiertos saben alrededor: edificios vecinos, el predio, y los contornos de inundación, zonificación y suelo. ModelCraft toma ese archivo como sugerencias. No se agrega nada hasta que lo indiques.

## Traer el archivo

1. En CivilCraft, enviá el sitio a ModelCraft, o guardá el archivo (termina en `.ccsite.json`).
2. En ModelCraft, abrí o soltá el archivo. Se abre una lista con una casilla para cada edificio y para el predio.
3. Escribí una altura para los edificios que la fuente no tiene. Una línea al lado indica de dónde viene su altura: su cantidad de niveles a 3 m cada uno, o la altura que escribiste.
4. Presioná {{ui:Oñemoĩ marcado-kuéra}}.

Los edificios marcados se vuelven masas extruidas en un componente, y el predio se vuelve una línea alrededor del sitio. Todo es un solo paso de deshacer. El punto de la dirección queda en el origen, en metros al este y al norte de él.

Los contornos de inundación, zonificación y suelo se listan solo a modo informativo; no se dibujan.

Los datos vienen de fuentes abiertas y llevan su atribución al final de la lista. Las alturas que no fueron dadas son supuestos, así que verificalas antes de confiar en ellas.
