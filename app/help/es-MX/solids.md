---
title: Herramientas de sólidos: unión, restar, intersecar
summary: Una los grupos y componentes cerrados en uno, corte uno con otro, o conserve solo lo que comparten.
keywords: sólido, sólidos, inspector de sólidos, no es sólido, corregir sólido, agujero, arista suelta, al revés, unión, unir, combinar, fusionar, restar, diferencia, cortar, agujero, intersecar, intersección, booleana, cáscara exterior
from: f35df1cc
---

Las herramientas de sólidos combinan **sólidos**: grupos y componentes cuyas caras cierran un volumen, con cada arista uniendo exactamente dos caras. {{ui:Información de entidad}} indica {{ui:Sólido}}: {{ui:Sí}} para uno, y muestra su volumen.

Están en el menú {{ui:Sólidos}} del grupo {{ui:Organizar}}.

## Cuando algo no es un sólido

Seleccione el grupo o componente. Cuando no es un sólido, {{ui:Información de entidad}} indica por qué, por ejemplo "No es un sólido: 4 aristas bordean un agujero · 1 arista suelta":

| Problema | Qué significa |
|---|---|
| Aristas que bordean un agujero | Falta una cara |
| Aristas compartidas por tres caras o más | Una cara divide el interior, o dos formas se tocan a lo largo de una arista |
| Caras dentro de la forma | Un muro que quedó dentro del volumen |
| Aristas sueltas | Líneas que no delimitan ninguna cara |
| Caras volteadas hacia adentro | Sus caras frontales miran hacia dentro, contra sus vecinas |

{{ui:Mostrar problemas}} lo abre con esas aristas y caras seleccionadas, para que las vea. {{ui:Corregir}} repara los casos simples en un solo paso de deshacer: quita las aristas sueltas y las caras dentro de la forma, voltea las caras al sentido correcto y cierra los agujeros cuyo borde es plano. Lo que no puede reparar con seguridad (un agujero que no es plano, una arista compartida por muchas caras) se deja para usted, y se indica qué queda.

## Unión

1. Seleccione dos o más sólidos (haga clic en uno, y {{key:Ctrl}}+clic en los demás).
2. {{ui:Sólidos}} › {{ui:Unión}}.

Se convierten en un solo sólido, en un solo grupo. Donde se superponían, las caras interiores desaparecen.

## Restar

1. {{ui:Sólidos}} › {{ui:Restar}}.
2. Haga clic en el sólido que **va a quitar** (la herramienta de corte).
3. Haga clic en el sólido que **se corta**.

Lo que queda del segundo sólido se conserva; la herramienta de corte se consume. Por ejemplo, para hacer un agujero a través de un bloque, dibuje un poste que lo atraviese, convierta el poste en grupo y luego reste el poste del bloque.

## Intersecar

Seleccione dos o más sólidos y luego {{ui:Sólidos}} › {{ui:Intersecar}}. Solo se conserva la parte que todos comparten.

## Cosas que debe saber

- El resultado es un grupo nuevo. Conserva el nombre, color y etiqueta del primer sólido (en Restar: el que cortó). Los colores pintados en sus caras no se conservan.
- Los lados planos del resultado son caras únicas. Los lados redondos quedan como las facetas planas con que se dibujaron.
- Si un grupo o componente no es un sólido, la herramienta lo indica y no cambia nada. Busque una cara faltante o una cara suelta dentro de él.
- Dentro de un grupo abierto, las herramientas actúan sobre los grupos y componentes de ese grupo.
- Cada herramienta es un paso de deshacer.
- La primera vez que usa una herramienta de sólidos, se carga su motor (manifold-3d), lo que puede tardar un momento.
