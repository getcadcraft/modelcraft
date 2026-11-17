---
title: Exportar un modelo para otros programas
summary: Elegí la exportación correcta para renderizar, la web, la impresión 3D, BIM y BimCraft, y revisá qué conserva cada una.
keywords: imprimir, 3mf, pdf, papel, imagen, png, foto, captura, render, guardar vista, exportar, compartir, render, renderizado, gltf, glb, collada, dae, obj, stl, impresión 3d, ifc, bim, bimcraft, enviar, otros programas
from: 9e13e80d
---

Exportar hace una copia del modelo en otro formato. Conservá también tu archivo `.modelcraft`: es el único que guarda todo, y el único que ModelCraft abre directamente.

## Exportar

1. Guardá primero ({{key:Mod+S}}), para que tu archivo de trabajo quede a salvo.
2. Ojapo clic en {{ui:Exportar}} en el grupo {{ui:Archivo}}.
3. Elegí el formato. El navegador descarga el archivo, con el nombre del modelo.

Se exporta el modelo completo. Para exportar una sola parte, guardá, borrá el resto, exportá y después deshacé o volvé a abrir.

## Qué formato

| Querés | Elegí | Notas |
|---|---|---|
| Abrirlo en otro modelador 3D | {{ui:Collada (.dae)}} | Conserva grupos, grupos anidados, componentes (compartidos, no copiados), nombres y colores. Z hacia arriba, metros. |
| Renderizarlo, o usarlo en un programa de visualización | {{ui:OBJ (.obj)}} o {{ui:glTF binario (.glb)}} | OBJ es el más leído; escribe la colocación de cada grupo como un objeto separado, pero no tiene colores ni componentes compartidos. glTF conserva componentes y colores. |
| Publicarlo en la web, en un motor de juegos o en AR | {{ui:glTF binario (.glb)}} | Un solo archivo con todo adentro. |
| Imprimirlo en 3D | {{ui:Verificar impresión 3D (STL o 3MF)…}} | Verifica que el modelo esté cerrado y que las caras miren bien, después escribe STL o 3MF en milímetros. Mirá [Preparar un modelo para impresión 3D](topic:print-3d). {{ui:STL para impresión (.stl, milímetros)}} escribe el modelo completo sin la verificación. |
| Abrirlo en BimCraft u otro programa BIM | {{ui:IFC para BimCraft (.ifc)}} | Cada grupo o componente de nivel superior pasa a ser un elemento de construcción. |

La barra de estado confirma cada exportación, por ejemplo "Se exportó House.stl (milímetros)." o "Se exportó House.dae (Collada 1.4.1, Z arriba, metros; los componentes siguen compartidos)."

## Antes de exportar

- **Agrupá tus objetos.** Collada, glTF e IFC conservan grupos y componentes como objetos separados. La geometría suelta sale como un solo bloque; en IFC pasa a ser un elemento llamado "Geometría suelta".
- **Ponele nombre.** Los nombres de grupos y componentes van a Collada e IFC, así que un muro llamado "Muro norte" llega como "Muro norte".
- **Revisá la dirección de las caras.** Las caras que se ven gris azulado por fuera apuntarán hacia adentro en la exportación. Corregilas con {{ui:Cara ojejapova'ekue}} (mirá [Borrar y limpiar](topic:erase#a-face-facing-the-wrong-way)).
- **Para imprimir,** hacé que las piezas sean sólidos cerrados: seleccioná cada grupo y revisá que {{ui:Información de entidad}} diga "Sólido: Sí". Después escalá el modelo al tamaño impreso, o escalalo en el software de la impresora.

## Enviar un modelo a BimCraft

1. Hacé que cada parte del edificio sea un grupo o componente y ponele nombre.
2. Elegí {{ui:Exportar}}, después {{ui:IFC para BimCraft (.ifc)}}.
3. Abrí el archivo `.ifc` descargado en BimCraft.

Para un volumen conceptual, usá {{ui:Exportar}} › {{ui:Massing a BimCraft…}} en su lugar: cada grupo sale como una opción de volumen con pisos, superficies de piso y volumen. Mirá [Enviar volumen a BimCraft](topic:massing-to-bimcraft).

La exportación IFC común no tiene un vínculo directo entre las dos apps. El IFC tiene un solo piso, y cada elemento es un proxy genérico de elemento de construcción, sin tipo ni propiedades: lleva solo forma y nombre. Los grupos cerrados se vuelven formas sólidas; los abiertos se vuelven superficies.

## Líneas sin caras

Los bordes que no forman parte de ninguna cara (líneas tipo guía, un plano de sitio importado) pasan a OBJ y Collada como líneas. glTF y STL no tienen lugar para ellas y las dejan afuera. Las guías y las escenas no se exportan a ningún formato.

## Guardar la vista como imagen

{{ui:Exportar}} › {{ui:Imagen de la vista (.png)}} guarda exactamente lo que muestra la vista 3D, con su tamaño en pantalla. {{ui:Imagen al doble del tamaño (.png)}} la guarda con el doble de ancho y el doble de alto (para impresión o una presentación nítida), con las cotas y marcas redibujadas a ese tamaño y no estiradas.

Para una imagen que parezca de día (cielo, sol, sombras suaves, vidrio), usá {{ui:Exportar}} › {{ui:Render de una imagen…}} en su lugar: mirá [Renderizar una imagen](topic:render).

Para una imagen limpia, activá primero la [vista de presentación](topic:styles-shadows#presentation-view) ({{key:Shift+P}}): se dejan fuera los ejes, las guías, los contornos de corte y la selección. Ajustá la cámara, el estilo y las sombras como quieras, o pasá a una [escena](topic:scenes); para guardar una película en movimiento de tus escenas, usá {{ui:Exportar animación}} en el panel {{ui:Escenas}}.

## Imprimir la vista, o guardarla como PDF

- {{ui:Exportar}} › {{ui:PDF de la vista (.pdf)}} guarda un PDF de una página: la vista con el doble de su tamaño en pantalla, con sus cotas, en una hoja A4 (Carta cuando el modelo está en pies y pulgadas), horizontal, con una línea abajo que indica el nombre del archivo, la fecha y la unidad.
- {{ui:Exportar}} › {{ui:Imprimir la vista…}} pone la misma página frente al diálogo de impresión del navegador. Elegí una impresora, o "Guardar como PDF".

La página muestra la vista tal como está: en una vista en perspectiva no hay escala. Para un dibujo a escala, desactivá {{ui:Perspectiva}} y mirá desde {{ui:Superior}} o {{ui:Frontal}}, y agregá [cotas](topic:dimensions) para las medidas importantes. La [vista de presentación](topic:styles-shadows#presentation-view) deja fuera los ejes, las guías y la selección; las cotas se quedan.
