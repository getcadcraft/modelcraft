---
title: Laminar para una impresora de resina
summary: Lamine lo que está sobre la plataforma de impresión en imágenes de capas para la pantalla de su impresora, vacíe y apoye la pieza, revise las capas, guarde el archivo que lee la impresora y encuentre su exposición con la prueba de exposición.
keywords: resina, sugerir una inclinación, ventosa, fuerza de despegue, arriostramiento, impresión en resina, sla, msla, dlp, laminador, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, hueco, orificio de ventilación, balsa, soportes, prueba de exposición, escalera de exposición, calibración, capas, complemento
from: 8cc12858
---

Los complementos de resina laminan lo que está en la plataforma de impresión en imágenes de capas para la pantalla de su impresora, y guardan el archivo que lee la impresora. Son gratuitos, sin nada bloqueado, y están desactivados hasta que los active.

:::note
Todavía no se ha cargado ningún archivo en una impresora real. Los archivos solo fueron leídos por los lectores propios de CadCraft, y los soportes son nuevos. Revise las capas y haga su primera impresión a mano.
:::

## Qué hará

Lamine una pieza para resina, revise las capas, guarde el archivo y cópielo a su impresora.

## Pasos

1. Abra {{ui:Configuración}} › {{ui:Complementos}} y active el complemento laminador de resina y el complemento del formato de archivo de su impresora (Elegoo GOO, SL1, Chitubox o Anycubic). También puede pulsar {{ui:Añadir impresión en resina}} en la tarjeta de la etapa de impresión.
2. Coloque su pieza en la plataforma como se indica en [Coloque piezas en la plataforma de impresión](topic:print-stage), y luego elija {{ui:Resina}} junto a **Imprimir con**.
3. En **Configuración de impresión en resina**, elija su **Impresora** y su **Resina**. La tarjeta muestra el tamaño de la pantalla en píxeles. Estos son los tamaños publicados por el fabricante; verifique el suyo. Puede editarlos en **Personalizado**.
4. Ajuste **Altura de capa (mm)**, **Exposición (s)** y **Exposición de la base (s)**. Los números de cada resina son solo un punto de partida.
5. Marque **Vaciarla, con un orificio de ventilación** si quiere una pieza hueca, y ajuste **Pared (mm)** y **Ancho del orificio (mm)**.
6. Marque **Soportes y balsa** y elija la **Densidad de soportes**: Ligera, Media o Alta.
7. Elija el **Formato de archivo**. Si la tarjeta indica que todavía no se ha añadido ninguno, pulse el botón que dice Añadir y el nombre del formato.
8. Pulse {{ui:Vista previa de capas}} y mueva el control deslizante **Capa**. Las piezas flotantes se encierran en un anillo. La línea debajo muestra las capas, el tiempo y la resina en mL, gramos y costo.
9. Pulse {{ui:Guardar el archivo de impresión}}, revise el resumen y pulse {{ui:Guardar}}. Copie el archivo a su impresora.

## Inclinación, ventosas, arriostres y la cifra de despegue

Estas cuatro son estimaciones según la forma de la pieza. Ninguna se ha probado en una impresora real, así que trate cada una como una sugerencia y revise las capas.

1. Pulse {{ui:Sugerir una inclinación}} debajo de **Inclinación (grados)**. CadCraft prueba inclinaciones de 0 a 60 grados y elige la que minimiza la capa más grande, la superficie en voladizo menor y no genera ventosa. Ajusta **Inclinación (grados)** y muestra lo que encontró. Los pesos de la puntuación son nuestros, no de un fabricante de impresoras.
2. Después de {{ui:Vista previa de capas}}, una advertencia señala las cavidades que se abren solo hacia la película. Una cavidad así puede retener succión cuando una capa se despega. Incline la pieza o agregue un orificio. Las bolsas más estrechas que el tamaño de celda de la advertencia no se detectan.
3. Con **Soportes y balsa** activado, marque **Arriostrar soportes altos** para agregar travesaños entre pilares altos y delgados.
4. La línea debajo de la vista previa indica la capa más grande en cm2. Muestra una fuerza solo si ingresa un **Esfuerzo de despegue medido** en **Capas de base, elevación y velocidades**. Sin un número medido por usted, muestra solo el área.

## Encuentre su exposición

1. Active el complemento de prueba de exposición en {{ui:Configuración}} › {{ui:Complementos}}.
2. Pulse {{ui:Colocar la pieza de prueba en la plataforma}}.
3. Pulse {{ui:Guardar la escalera de exposición}}. Obtendrá un archivo por cada exposición, en un archivo zip.
4. Imprima cada archivo con la misma resina y conserve la exposición con los pilares delgados y los orificios abiertos más nítidos.

## Notas

- El laminado se ejecuta en segundo plano, así la página sigue disponible en una placa grande.
- Las piezas que no son sólidos cerrados se omiten, y la tarjeta lo indica.
- Si su impresora rechaza un archivo, la tarjeta del formato tiene opciones para lo que el formato deja abierto. Cambie una, guarde de nuevo y avísenos cuál funcionó.
- Las versiones 517 y 518 de Anycubic no se escriben.
