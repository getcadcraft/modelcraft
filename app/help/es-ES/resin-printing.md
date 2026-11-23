---
title: Laminar para una impresora de resina
summary: Lamine la base de impresión de la etapa de impresión para una impresora de resina, vacíe y apuntale la pieza, revise las capas, guarde el archivo de la impresora y encuentre su exposición con la prueba de exposición.
keywords: resina, sugerir inclinación, ventosa, fuerza de despegue, arriostramiento, impresión en resina, sla, msla, dlp, laminador, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, vaciado, orificio de ventilación, balsa, soportes, prueba de exposición, escalera de exposición, calibración, capas, complemento
from: 8cc12858
---

Los complementos de resina laminan lo que hay en la base de impresión en imágenes de capas para la pantalla de su impresora, y guardan el archivo que lee su impresora. Son gratuitos, sin nada bloqueado, y están desactivados hasta que los active.

:::note
Todavía no se ha cargado ningún archivo en una impresora real. Los archivos solo los han leído los propios lectores de CadCraft, y los soportes son nuevos. Revise las capas y haga la primera impresión a mano.
:::

## Qué hará

Lamine una pieza para resina, revise las capas, guarde el archivo y cópielo a su impresora.

## Pasos

1. Abra {{ui:Configuración}} › {{ui:Complementos}} y active el complemento de laminado para resina y el complemento del formato de archivo de su impresora (Elegoo GOO, SL1, Chitubox o Anycubic). También puede pulsar {{ui:Añadir impresión en resina}} en la tarjeta de la etapa de impresión.
2. Coloque su pieza en la base como en [Colocar objetos en la base de impresión](topic:print-stage), y luego elija {{ui:Resina}} junto a **Imprimir con**.
3. En **Ajustes de impresión en resina**, elija su **Impresora** y su **Resina**. La tarjeta muestra el tamaño de la pantalla en píxeles. Son los tamaños publicados por el fabricante, así que compruebe el suyo; puede editarlos en **Personalizado**.
4. Ajuste **Altura de capa (mm)**, **Exposición (s)** y **Exposición de la base (s)**. Los valores de cada resina son solo un punto de partida.
5. Marque **Vaciarla, con un orificio de ventilación** si quiere una pieza hueca, y ajuste **Pared (mm)** y **Ancho del orificio (mm)**.
6. Marque **Soportes y balsa**, y elija la **Densidad de soportes**: Ligera, Media o Alta.
7. Elija el **Formato de archivo**. Si la tarjeta indica que todavía no se ha añadido ninguno, pulse el botón que dice Añadir y el nombre del formato.
8. Pulse {{ui:Vista previa de capas}} y mueva el deslizador **Capa**. Las piezas flotantes aparecen marcadas con un círculo. La línea de debajo indica las capas, el tiempo y la resina en mL, gramos y coste.
9. Pulse {{ui:Guardar el archivo de impresión}}, revise el resumen y pulse {{ui:Guardar}}. Copie el archivo a su impresora.

## Inclinación, ventosas, arriostres y la cifra de despegue

Estas cuatro son estimaciones a partir de la forma de la pieza. Ninguna se ha probado en una impresora real, así que tómela como una pista y revise las capas.

1. Pulse {{ui:Sugerir una inclinación}} bajo **Inclinación (grados)**. CadCraft prueba inclinaciones de 0 a 60 grados y elige la que tiene la capa más grande más pequeña, la superficie en voladizo menor y ninguna ventosa. Ajusta **Inclinación (grados)** e indica lo que ha encontrado. Los pesos de la puntuación son nuestros, no de un fabricante de impresoras.
2. Tras {{ui:Vista previa de capas}}, un aviso indica las cavidades que solo se abren hacia la película. Una cavidad así puede retener succión cuando una capa se despega. Incline la pieza o añada un orificio. Los huecos más estrechos que el tamaño de celda del aviso no se detectan.
3. Con **Soportes y balsa** activado, marque **Arriostrar soportes altos** para añadir travesaños entre los pilares altos y finos.
4. La línea bajo la vista previa indica la capa más grande en cm2. Solo muestra una fuerza si introduce una **Tensión de despegue medida** en **Capas de base, elevación y velocidades**. Sin su propio valor medido, muestra solo el área.

## Encuentre su exposición

1. Active el complemento de prueba de exposición en {{ui:Configuración}} › {{ui:Complementos}}.
2. Pulse {{ui:Colocar la pieza de prueba en la base}}.
3. Pulse {{ui:Guardar la escalera de exposición}}. Obtiene un archivo por cada exposición, en un zip.
4. Imprima cada archivo con la misma resina, y conserve la exposición con los pilares finos más nítidos y los orificios abiertos.

## Notas

- El laminado se ejecuta en segundo plano, así que la página sigue siendo utilizable con una placa grande.
- Las piezas que no son sólidos cerrados se excluyen, y la tarjeta lo indica.
- Si su impresora rechaza un archivo, la tarjeta del formato tiene opciones para lo que el formato deja sin definir. Cambie una, guarde de nuevo e indíquenos cuál funcionó.
- No se escriben las versiones 517 y 518 de Anycubic.
