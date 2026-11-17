---
title: Tomar un sitio desde CivilCraft
summary: Abra el archivo de dirección a sitio que crea CivilCraft y agregue los edificios y la parcela alrededor como masas y una línea del sitio, solo los que marque.
keywords: sitio, civilcraft, dirección, parcela, edificios vecinos, masas, contexto, ccsite, datos abiertos, openstreetmap
from: f28e4a3b
---

CivilCraft puede buscar una dirección y guardar lo que las fuentes de datos abiertos saben a su alrededor: edificios vecinos, la parcela, y los contornos de inundación, zonificación y suelo. ModelCraft toma ese archivo como sugerencias. No se agrega nada hasta que usted lo indique.

## Traer el archivo

1. En CivilCraft, envíe el sitio a ModelCraft, o guarde el archivo (termina en `.ccsite.json`).
2. En ModelCraft, abra o arrastre el archivo. Se abre una lista con una casilla para cada edificio y para la parcela.
3. Escriba una altura para los edificios a los que la fuente no dio ninguna. Junto a cada uno hay una línea que indica de dónde viene su altura: su número de niveles a 3 m cada uno, o la altura que escribió.
4. Pulse {{ui:Agregar los marcados}}.

Los edificios marcados se convierten en masas extruidas dentro de un componente, y la parcela se convierte en una línea alrededor del sitio. Todo ello es un solo paso de deshacer. El punto de la dirección queda en el origen, en metros al este y al norte de él.

Los contornos de inundación, zonificación y suelo se listan solo a título informativo; no se dibujan.

Los datos provienen de fuentes abiertas y llevan su atribución al final de la lista. Las alturas que no se dieron son supuestos, así que revíselas antes de confiar en ellas.
