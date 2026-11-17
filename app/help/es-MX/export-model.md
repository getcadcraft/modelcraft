---
title: Exportar un modelo para otros programas
summary: Elija la exportación adecuada para renderizar, la web, la impresión 3D, BIM y BimCraft, y revise qué conserva cada una.
keywords: imprimir, 3mf, pdf, papel, imagen, png, foto, captura, renderizar, guardar vista, exportar, compartir, renderizado, gltf, glb, collada, dae, obj, stl, impresión 3D, ifc, bim, bimcraft, enviar, otro software
from: 9e13e80d
---

Exportar crea una copia del modelo en otro formato. Conserve también su archivo `.modelcraft`: es el único que guarda todo, y el único que ModelCraft abre directamente.

## Exportar

1. Guarde primero ({{key:Mod+S}}), para que su archivo de trabajo esté a salvo.
2. Haga clic en {{ui:Exportar}} en el grupo {{ui:Archivo}}.
3. Elija el formato. El navegador lo descarga con el nombre del modelo.

Se exporta el modelo completo. Para exportar una sola pieza, guarde, borre el resto, exporte, y luego deshaga los cambios o vuelva a abrir el archivo.

## Qué formato elegir

| Lo que desea | Elija | Notas |
|---|---|---|
| Abrirlo en otro modelador 3D | {{ui:Collada (.dae)}} | Conserva grupos, grupos anidados, componentes (compartidos, no copiados), nombres y colores. Z hacia arriba, metros. |
| Renderizarlo, o usarlo en un programa de visualización | {{ui:OBJ (.obj)}} o {{ui:glTF binario (.glb)}} | OBJ es el formato más leído; escribe la colocación de cada grupo como un objeto separado, pero no tiene colores ni componentes compartidos. glTF conserva componentes y colores. |
| Publicarlo en la web, en un motor de juegos o en RA | {{ui:glTF binario (.glb)}} | Un solo archivo con todo adentro. |
| Imprimirlo en 3D | {{ui:Revisar para impresión 3D (STL o 3MF)…}} | Revisa que el modelo esté cerrado y que sus caras miren en la dirección correcta, y luego escribe STL o 3MF en milímetros. Vea [Preparar un modelo para impresión 3D](topic:print-3d). {{ui:STL para impresión (.stl, milímetros)}} escribe todo el modelo sin la revisión. |
| Abrirlo en BimCraft u otro programa BIM | {{ui:IFC para BimCraft (.ifc)}} | Cada grupo o componente de nivel superior se convierte en un elemento de construcción. |

La barra de estado confirma cada exportación, por ejemplo "Exportado House.stl (milímetros)." o "Exportado House.dae (Collada 1.4.1, Z hacia arriba, metros; los componentes siguen compartidos)."

## Antes de exportar

- **Agrupe sus objetos.** Collada, glTF e IFC mantienen los grupos y componentes como objetos separados. La geometría suelta sale como un solo bloque; en IFC se convierte en un elemento llamado "Loose geometry".
- **Póngales nombre.** Los nombres de grupos y componentes pasan a Collada e IFC, así que un muro llamado "Muro norte" llega como "Muro norte".
- **Revise la dirección de las caras.** Las caras que se ven gris azulado por fuera apuntarán hacia adentro en la exportación. Corríjalas con {{ui:Invertir cara}} (vea [Borrar y limpiar](topic:erase#a-face-facing-the-wrong-way)).
- **Para imprimir,** haga que las piezas sean sólidos cerrados: seleccione cada grupo y verifique que {{ui:Información de entidad}} diga "Sólido: Sí". Luego escale el modelo al tamaño impreso, o escálelo en el software de la impresora.

## Enviar un modelo a BimCraft

1. Haga de cada parte del edificio un grupo o componente y póngale nombre.
2. Elija {{ui:Exportar}} y luego {{ui:IFC para BimCraft (.ifc)}}.
3. Abra el archivo `.ifc` descargado en BimCraft.

Para volumetría conceptual, use {{ui:Exportar}} › {{ui:Volumetría a BimCraft…}} en su lugar: cada grupo se envía como una opción de volumen con pisos, áreas de piso y volumen. Vea [Enviar volumetría a BimCraft](topic:massing-to-bimcraft).

La exportación IFC simple no tiene vínculo directo entre las dos aplicaciones. El IFC tiene un solo nivel, y cada elemento es un proxy genérico de elemento de construcción, sin tipo ni propiedades: solo lleva forma y nombre. Los grupos cerrados se convierten en formas sólidas; los abiertos, en superficies.

## Líneas sin caras

Las aristas que no forman parte de ninguna cara (líneas tipo guía, un plano de sitio importado) pasan a OBJ y Collada como líneas. glTF y STL no tienen dónde ponerlas y las dejan fuera. Las guías y las escenas no se exportan a ningún formato.

## Guardar la vista como imagen

{{ui:Exportar}} › {{ui:Imagen de la vista (.png)}} guarda exactamente lo que muestra la vista 3D, en su tamaño en pantalla. {{ui:Imagen al doble de tamaño (.png)}} la guarda con el doble de ancho y el doble de alto (para impresión o para una presentación nítida), con las cotas y marcas redibujadas a ese tamaño en lugar de estiradas.

Para una imagen que parezca de luz natural (cielo, sol, sombras suaves, vidrio), use {{ui:Exportar}} › {{ui:Renderizar una imagen…}} en su lugar: vea [Renderizar una imagen](topic:render).

Para una imagen limpia, active primero la [vista de presentación](topic:styles-shadows#presentation-view) ({{key:Shift+P}}): se dejan fuera los ejes, las guías, los contornos de sección y la selección. Configure la cámara, el estilo y las sombras como desee, o vaya a una [escena](topic:scenes); para guardar una película en movimiento de sus escenas, use {{ui:Exportar animación}} en el panel {{ui:Escenas}}.

## Imprimir la vista, o guardarla como PDF

- {{ui:Exportar}} › {{ui:PDF de la vista (.pdf)}} guarda un PDF de una página: la vista al doble de su tamaño en pantalla, con sus cotas, en una hoja A4 (Carta cuando el modelo está en pies y pulgadas), horizontal, con una línea debajo que indica el nombre del archivo, la fecha y la unidad.
- {{ui:Exportar}} › {{ui:Imprimir la vista…}} coloca la misma página en el cuadro de diálogo de impresión de su navegador. Elija una impresora, o "Guardar como PDF".

La página muestra la vista tal como está: una vista en perspectiva no tiene escala. Para un dibujo a escala, desactive {{ui:Perspectiva}} y mire desde {{ui:Superior}} o {{ui:Frontal}}, y agregue [cotas](topic:dimensions) para las medidas que importen. La [vista de presentación](topic:styles-shadows#presentation-view) deja fuera los ejes, las guías y la selección; las cotas se mantienen.
