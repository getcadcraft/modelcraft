---
title: Laminar para una impresora de resina
summary: Lamine la plataforma de impresión de la etapa de impresión para una impresora de resina, ahueque y dé soporte a la pieza, revise las capas, guarde el archivo de la impresora y encuentre su exposición con la prueba de exposición.
keywords: resina, impresión con resina, sla, msla, dlp, laminador, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, ahuecar, orificio de ventilación, balsa, soportes, prueba de exposición, escalera de exposición, calibración, capas, complemento
from: 83c394e1
---

Los complementos de resina laminan lo que hay en la plataforma de impresión en imágenes de capa para la pantalla de su impresora, y guardan el archivo que lee su impresora. Son gratuitos, sin nada bloqueado, y están desactivados hasta que los active.

:::note
Ningún archivo se ha cargado todavía en una impresora real. Los archivos solo se han leído con los lectores propios de CadCraft, y los soportes son nuevos. Revise las capas y haga su primera impresión a mano.
:::

## Lo que hará

Lamine una pieza para resina, revise las capas, guarde el archivo y cópielo a su impresora.

## Pasos

1. Abra {{ui:Configuración}} › {{ui:Complementos}} y active el complemento laminador de resina y el complemento del formato de archivo de su impresora (Elegoo GOO, SL1, Chitubox o Anycubic). También puede pulsar {{ui:Añadir impresión de resina}} en la tarjeta de la etapa de impresión.
2. Coloque su pieza en la plataforma de impresión como en [Colocar objetos en la plataforma de impresión](topic:print-stage), y luego elija {{ui:Resina}} junto a **Imprimir con**.
3. En **Configuración de impresión de resina**, elija su **Impresora** y su **Resina**. La tarjeta muestra el tamaño de la pantalla en píxeles. Son los tamaños publicados por el fabricante; compruebe el suyo, y puede editarlos en Personalizado.
4. Fije **Altura de capa (mm)**, **Exposición (s)** y **Exposición de la base (s)**. Los números de cada resina son solo un punto de partida.
5. Marque **Ahuecarla, con un orificio de ventilación** si quiere una pieza hueca, y fije **Pared (mm)** y **Ancho del orificio (mm)**.
6. Marque **Soportes y balsa** y elija la **Densidad de soportes**: Ligera, Media o Alta.
7. Elija el **Formato de archivo**. Si la tarjeta indica que todavía no hay ninguno añadido, pulse el botón que dice Añadir y el nombre del formato.
8. Pulse {{ui:Vista previa de capas}} y mueva el control deslizante **Capa**. Las piezas flotantes se marcan con un anillo. La línea debajo indica las capas, el tiempo y la resina en mL, gramos y coste.
9. Pulse {{ui:Guardar el archivo de impresión}}, revise el resumen y pulse {{ui:Guardar}}. Copie el archivo a su impresora.

## Encuentre su exposición

1. Active el complemento de prueba de exposición en {{ui:Configuración}} › {{ui:Complementos}}.
2. Pulse {{ui:Colocar la pieza de prueba en la plataforma}}.
3. Pulse {{ui:Guardar la escalera de exposición}}. Obtendrá un archivo por cada exposición, en un zip.
4. Imprima cada archivo con la misma resina, y conserve la exposición que dé los pilares finos y los agujeros abiertos más nítidos.

## Notas

- El laminado se ejecuta en segundo plano, así que la página sigue utilizable con una plataforma grande.
- Las piezas que no son sólidos cerrados se dejan fuera, y la tarjeta lo indica.
- Si su impresora rechaza un archivo, la tarjeta del formato tiene opciones para lo que el formato deja sin definir. Cambie una, guarde de nuevo y háganos saber cuál funcionó.
- Las versiones 517 y 518 de Anycubic no se generan.
