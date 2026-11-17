---
title: Exportar un modelo para otros programas
summary: Elija la exportación adecuada para renderizar, la web, la impresión 3D, BIM y BimCraft, y compruebe lo que conserva cada una.
keywords: imprimir, 3mf, pdf, papel, imagen, png, foto, captura de pantalla, renderizar, guardar vista, exportar, compartir, render, renderizado, gltf, glb, collada, dae, obj, stl, impresión 3D, ifc, bim, bimcraft, enviar, otro software
from: 9e13e80d
---

Exportar crea una copia del modelo en otro formato. Conserve también su archivo `.modelcraft`: es el único que lo guarda todo, y el único que ModelCraft abre directamente.

## Exportar

1. Guarde primero ({{key:Mod+S}}), para que su archivo de trabajo esté a salvo.
2. Haga clic en {{ui:Exportar}} en el grupo {{ui:Archivo}}.
3. Elija el formato. El navegador lo descarga, con el nombre del modelo.

Se exporta el modelo entero. Para exportar una parte, guarde, borre el resto, exporte y, después, deshaga los cambios o vuelva a abrir el archivo.

## Qué formato

| Quiere | Elija | Notas |
|---|---|---|
| Abrirlo en otro modelador 3D | {{ui:Collada (.dae)}} | Conserva grupos, grupos anidados, componentes (compartidos, no copiados), nombres y colores. Z hacia arriba, metros. |
| Renderizarlo, o usarlo en un programa de visualización | {{ui:OBJ (.obj)}} o {{ui:glTF binary (.glb)}} | OBJ es el más extendido; escribe la colocación de cada grupo como un objeto separado, pero no tiene colores ni componentes compartidos. glTF conserva componentes y colores. |
| Publicarlo en la web, en un motor de juegos o en RA | {{ui:glTF binary (.glb)}} | Un solo archivo con todo dentro. |
| Imprimirlo en 3D | {{ui:Revisar para impresión 3D (STL o 3MF)…}} | Comprueba que el modelo está cerrado y que sus caras miran bien, y después escribe STL o 3MF en milímetros. Véase [Preparar un modelo para impresión 3D](topic:print-3d). {{ui:STL para impresión (.stl, milímetros)}} escribe el modelo entero sin esa comprobación. |
| Abrirlo en BimCraft u otro programa BIM | {{ui:IFC para BimCraft (.ifc)}} | Cada grupo o componente de nivel superior se convierte en un elemento de edificio. |

La barra de estado confirma cada exportación, por ejemplo "Exportado House.stl (milímetros)." o "Exportado House.dae (Collada 1.4.1, Z hacia arriba, metros; los componentes siguen compartidos)."

## Antes de exportar

- **Agrupe sus objetos.** Collada, glTF e IFC conservan grupos y componentes como objetos separados. La geometría suelta sale como un solo bloque; en IFC se convierte en un elemento llamado "Geometría suelta".
- **Póngales nombre.** Los nombres de grupos y componentes pasan a Collada e IFC, así que un muro llamado "Muro norte" llega como "Muro norte".
- **Compruebe la dirección de las caras.** Las caras que muestran gris azulado por fuera apuntarán hacia dentro en la exportación. Corríjalas con {{ui:Invertir cara}} (véase [Borrar y limpiar](topic:erase#a-face-facing-the-wrong-way)).
- **Para imprimir,** haga que las piezas sean sólidos cerrados: seleccione cada grupo y compruebe que {{ui:Información de entidad}} indica "Sólido: Sí". Después, escale el modelo al tamaño impreso, o escálelo en el software de la impresora.

## Enviar un modelo a BimCraft

1. Haga que cada parte del edificio sea un grupo o componente y póngale nombre.
2. Elija {{ui:Exportar}} y, después, {{ui:IFC para BimCraft (.ifc)}}.
3. Abra el archivo `.ifc` descargado en BimCraft.

Para una volumetría conceptual, use {{ui:Exportar}} › {{ui:Volumetría a BimCraft…}}: cada grupo se envía como una opción de volumetría con plantas, superficies de planta y volumen. Véase [Enviar volumetría a BimCraft](topic:massing-to-bimcraft).

La exportación IFC simple no tiene un vínculo directo entre las dos aplicaciones. El IFC tiene una sola planta, y cada elemento es un proxy genérico de elemento de edificio sin tipo ni propiedades: solo lleva forma y nombre. Los grupos cerrados se convierten en formas sólidas; los abiertos, en superficies.

## Líneas sin caras

Las aristas que no forman parte de ninguna cara (líneas tipo guía, o un plano de situación importado) se exportan a OBJ y Collada como líneas. glTF y STL no tienen cabida para ellas y las omiten. Las guías y las escenas no se exportan a ningún formato.

## Guardar la vista como imagen

{{ui:Exportar}} › {{ui:Imagen de la vista (.png)}} guarda exactamente lo que muestra la vista 3D, con su tamaño en pantalla. {{ui:Imagen al doble de tamaño (.png)}} la guarda con el doble de ancho y el doble de alto (para impresión o una diapositiva nítida), con las cotas y las marcas redibujadas a ese tamaño, en lugar de estiradas.

Para una imagen que parezca de luz natural (cielo, sol, sombras suaves, cristal), use {{ui:Exportar}} › {{ui:Renderizar una imagen…}}: véase [Renderizar una imagen](topic:render).

Para una imagen limpia, active primero la [vista de presentación](topic:styles-shadows#presentation-view) ({{key:Shift+P}}): se omiten los ejes, las guías, los contornos de sección y la selección. Configure la cámara, el estilo y las sombras como quiera, o vaya a una [escena](topic:scenes); para guardar una película en movimiento de sus escenas, use {{ui:Exportar animación}} en el panel {{ui:Escenas}}.

## Imprimir la vista, o guardarla como PDF

- {{ui:Exportar}} › {{ui:PDF de la vista (.pdf)}} guarda un PDF de una página: la vista al doble de su tamaño en pantalla, con sus cotas, en una página A4 (Letter cuando el modelo está en pies y pulgadas), apaisada, con una línea debajo que indica el nombre del archivo, la fecha y la unidad.
- {{ui:Exportar}} › {{ui:Imprimir la vista…}} muestra la misma página en el diálogo de impresión de su navegador. Elija una impresora, o "Guardar como PDF".

La página muestra la vista tal como es: una vista en perspectiva no tiene escala. Para un dibujo a escala, desactive {{ui:Perspectiva}} y mire desde {{ui:Superior}} o {{ui:Frontal}}, y añada [cotas](topic:dimensions) para las medidas que importen. La [vista de presentación](topic:styles-shadows#presentation-view) omite los ejes, las guías y la selección; las cotas se mantienen.
