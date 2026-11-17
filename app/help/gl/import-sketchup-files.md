---
title: Importar un modelo SKP
summary: Importe un ficheiro .skp cos seus grupos, compoñentes, cores, texturas, etiquetas e arestas suaves, vexa o que entrou e o que non, e siga modelando.
keywords: skp, importar, abrir skp, compoñentes, grupos, etiquetas, capas, materiais, cores, texturas, oculto, arestas suaves, 3D Warehouse, migrar, cambiar
from: 325d3c81
---

ModelCraft le os ficheiros de SketchUp (`.skp`) co seu propio lector, na páxina. Non se sube nada, e funciona sen conexión sempre que funcione ModelCraft. Probáronse ficheiros desde SketchUp 3 ata 2026.

## Importar o ficheiro

1. Faga clic en {{ui:Import}} no grupo {{ui:File}} (ou solte o ficheiro `.skp` na vista 3D).
2. Escolla o ficheiro.

   A barra de estado di "Lendo house.skp…" mentres le, e despois o que entrou, por exemplo "Importado house.skp (SketchUp 25.0.575): 1240 caras, 6 compoñentes, nun grupo."

O modelo completo entra como un grupo co nome do ficheiro, seleccionado, e a vista achégase a el. Un {{key:Mod+Z}} lévao todo de novo, incluídas as etiquetas.

:::tip
Desagrupe o grupo importado ({{ui:Entity info}} › {{ui:Explode}}) cando queira que o seu contido estea solto no modelo, en lugar de nun só grupo.
:::

## Que entra

- **Caras** cos seus buratos, e **arestas** que non forman parte dunha cara.
- **Grupos** entran como grupos, e **compoñentes** como compoñentes: cada copia dun compoñente é unha colocación dunha mesma definición, así que editar unha copia cambia todas, como en SketchUp. Os nomes veñen con eles.
- **Cores.** O material propio dunha cara dalle a súa cor. Un material pintado sobre un grupo ou compoñente convértese na pintura desa colocación, así que as caras dentro del sen cor propia a toman, como en SketchUp. Un compoñente pintado de vermello nun sitio e de azul noutro segue sendo un só compoñente.
- **Texturas.** Unha cara pintada cun material con textura entra coa súa textura, colocada sobre a cara tal como está no ficheiro, e amósase co estilo {{ui:Shaded}}. A imaxe consérvase no ficheiro de ModelCraft ao gardar, e unha [imaxe renderizada](topic:render) tamén a mostra. Un material con textura pintado sobre un grupo ou compoñente enteiro dá a esa copia só a cor do material.
- **Etiquetas.** Un grupo ou compoñente nunha etiqueta de SketchUp recibe unha etiqueta de ModelCraft co mesmo nome, listada en {{ui:Tags}}, mostrada ou oculta como estaba en SketchUp. Se o seu modelo xa ten unha etiqueta con ese nome, usase esa.
- **As cousas ocultas entran ocultas:** caras, arestas, grupos e compoñentes, e caras e arestas nunha etiqueta oculta. Vostede ve o que mostraba SketchUp, e non se perde nada: {{ui:Edit}} › {{ui:More}} › {{ui:Unhide all}} os mostra. Consulte [Ocultar, illar e mostrar](topic:hide-isolate).
- **As arestas suaves e lisas** seguen suaves, así que as superficies curvas seguen parecendo lisas.
- **Os tamaños** saen ben en calquera unidade: os ficheiros de SketchUp están en polgadas por dentro, e ModelCraft convérteos.

## Que non entra

A barra de estado indica o que quedou fóra, con cifras.

- **Algunhas texturas** conservan só a cor do material: unha textura que falta no ficheiro, unha imaxe nun formato que os navegadores non amosan (como un ficheiro de Photoshop), ou unha textura sen tamaño. As caras con textura proxectada entran coa textura colocada de forma aproximada.
- **Etiquetas en caras e arestas soltas.** ModelCraft só etiqueta grupos e compoñentes, así que unha cara ou aresta con etiqueta propia entra sen ela, e a barra de estado as conta. Convértaas nun grupo ({{key:Shift+G}}) e etiquete o grupo.
- **Imaxes** colocadas no modelo, texto, cotas, guías, planos de corte, escenas e estilos.

## Problemas

- "This is not a SketchUp file." ou "This SketchUp file is damaged: …": o ficheiro está cortado ou é outra cousa co nome `.skp`. Gárdeo de novo desde SketchUp, ou pida unha copia nova.
- Un ficheiro dunha versión de SketchUp máis nova que a que coñece ModelCraft recházase, e indícase a versión que se atopou.
- Un modelo que é todo imaxes, texto ou cotas indica que non ten nada que amosar.

## Take the model back

ModelCraft non pode gardar ficheiros `.skp`. Exporte Collada ({{ui:Export}} › `.dae`) e importe ese en SketchUp: grupos, compoñentes e cores pasan; as texturas pasan como a cor do seu material. Consulte [Exportar o seu modelo](topic:export-model).
