---
title: Exportar un modelo para outros programas
summary: Escoller a exportación axeitada para renderizar, a web, a impresión 3D, BIM e BimCraft, e comprobar o que conserva cada unha.
keywords: imprimir, 3mf, pdf, papel, imaxe, png, fotografía, captura de pantalla, render, gardar vista, exportar, compartir, render, renderizado, gltf, glb, collada, dae, obj, stl, impresión 3D, ifc, bim, bimcraft, enviar, outro software
from: 9e13e80d
---

Exportar fai unha copia do modelo noutro formato. Conserve tamén o seu ficheiro `.modelcraft`: é o único que conserva todo, e o único que ModelCraft abre directamente.

## Exportar

1. Grade primeiro ({{key:Mod+S}}), para que o seu ficheiro de traballo quede a salvo.
2. Prema {{ui:Export}} no grupo {{ui:File}}.
3. Escolla o formato. O navegador descarga o ficheiro, co mesmo nome que o modelo.

Exportase todo o modelo. Para exportar unha parte, grade, borre o resto, exporte, e logo desfaga ou reabra o ficheiro.

## Que formato

| Quere | Escolla | Notas |
|---|---|---|
| Abrilo noutro modelador 3D | {{ui:Collada (.dae)}} | Conserva grupos, grupos aniñados, compoñentes (compartidos, non copiados), nomes e cores. Z cara arriba, metros. |
| Renderizalo, ou usalo nun programa de visualización | {{ui:OBJ (.obj)}} ou {{ui:glTF binary (.glb)}} | OBJ é o máis lido; escribe cada colocación de grupo como un obxecto separado, pero non ten cores nin compoñentes compartidos. glTF conserva compoñentes e cores. |
| Publicalo na web, nun motor de xogos ou en AR | {{ui:glTF binary (.glb)}} | Un só ficheiro con todo dentro. |
| Imprimilo en 3D | {{ui:Check for 3D printing (STL or 3MF)…}} | Comproba que o modelo está pechado e mira na dirección correcta, e logo escribe STL ou 3MF en milímetros. Consulte [Preparar un modelo para a impresión 3D](topic:print-3d). {{ui:STL for printing (.stl, millimeters)}} escribe todo o modelo sen a comprobación. |
| Abrilo en BimCraft ou noutro programa BIM | {{ui:IFC for BimCraft (.ifc)}} | Cada grupo ou compoñente de nivel superior convértese nun elemento do edificio. |

A barra de estado confirma cada exportación, por exemplo "Exportado House.stl (milímetros)." ou "Exportado House.dae (Collada 1.4.1, Z cara arriba, metros; os compoñentes seguen compartidos)."

## Antes de exportar

- **Agrupe os seus obxectos.** Collada, glTF e IFC conservan grupos e compoñentes como obxectos separados. A xeometría solta sae como un bloque; en IFC convértese nun elemento chamado "Xeometría solta".
- **Póñalles nome.** Os nomes de grupos e compoñentes pásanse a Collada e IFC, así que un muro chamado "Muro norte" chega como "Muro norte".
- **Comprobe a dirección das caras.** As caras que se ven azul-gris por fóra apuntarán cara a dentro na exportación. Corrixa esas caras con {{ui:Reverse face}} (consulte [Borrar e limpar](topic:erase#a-face-facing-the-wrong-way)).
- **Para imprimir,** faga que as pezas sexan sólidos pechados: seleccione cada grupo e comprobe que {{ui:Entity info}} indica "Sólido: Sí". Despois escale o modelo ao tamaño impreso, ou escáleo no software da impresora.

## Enviar un modelo a BimCraft

1. Faga que cada parte do edificio sexa un grupo ou compoñente e póñalle nome.
2. Escolla {{ui:Export}}, e despois {{ui:IFC for BimCraft (.ifc)}}.
3. Abra o ficheiro `.ifc` descargado en BimCraft.

Para unha masa conceptual, use {{ui:Export}} › {{ui:Massing to BimCraft…}} no seu lugar: cada grupo vai como unha opción de masa con pisos, superficies de piso e volume. Consulte [Enviar masas a BimCraft](topic:massing-to-bimcraft).

A exportación IFC simple non ten ligazón directa entre as dúas aplicacións. O IFC ten un só piso, e cada elemento é un proxy de elemento de edificio xenérico, sen tipo nin propiedades: leva só forma e nome. Os grupos pechados convértense en formas sólidas; os abertos, en superficies.

## Liñas sen caras

As arestas que non forman parte de ningunha cara (liñas tipo guía, un plano de situación importado) van a OBJ e Collada como liñas. glTF e STL non teñen lugar para elas e déixanas fóra. As guías e as escenas non se exportan a ningún formato.

## Gardar a vista como imaxe

{{ui:Export}} › {{ui:Image of the view (.png)}} garda exactamente o que mostra a vista 3D, co tamaño que ten na pantalla. {{ui:Image at twice the size (.png)}} gárdaa o dobre de ancha e o dobre de alta (para imprimir ou para unha diapositiva nítida), coas cotas e as marcas redebuxadas a ese tamaño en lugar de estiradas.

Para unha imaxe que pareza de luz natural (ceo, sol, sombras suaves, vidro), use {{ui:Export}} › {{ui:Render a picture…}} no seu lugar: consulte [Renderizar unha imaxe](topic:render).

Para unha imaxe limpa, active primeiro a [vista de presentación](topic:styles-shadows#presentation-view) ({{key:Shift+P}}): quedan fóra os eixes, as guías, os contornos de sección e a selección. Configure a cámara, o estilo e as sombras como queira, ou vaia a unha [escena](topic:scenes); para gardar unha película en movemento das súas escenas, use {{ui:Export animation}} no panel {{ui:Scenes}}.

## Imprimir a vista ou gardala como PDF

- {{ui:Export}} › {{ui:PDF of the view (.pdf)}} garda un PDF dunha soa páxina: a vista ao dobre do seu tamaño na pantalla, coas súas cotas, nunha páxina A4 (Letter cando o modelo está en pés e polgadas), en horizontal, cunha liña debaixo que indica o nome do ficheiro, a data e a unidade.
- {{ui:Export}} › {{ui:Print the view…}} pon a mesma páxina diante do diálogo de impresión do navegador. Escolla unha impresora, ou "Gardar como PDF".

A páxina mostra a vista tal como está: nunha vista en perspectiva non hai escala. Para un debuxo a escala, desactive {{ui:Perspective}} e mire desde {{ui:Top}} ou {{ui:Front}}, e engada [cotas](topic:dimensions) para as medidas que importan. A [vista de presentación](topic:styles-shadows#presentation-view) deixa fóra os eixes, as guías e a selección; as cotas quedan.
