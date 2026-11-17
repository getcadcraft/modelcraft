---
title: Herramientas de sólidos: unión, restar, intersecar
summary: Una los grupos y componentes cerrados en uno, recorte uno de otro, o conserve solo lo que comparten.
keywords: sólido, sólidos, inspector de sólidos, no sólido, corregir sólido, agujero, arista suelta, del revés, unión, unir, combinar, fusionar, restar, diferencia, recortar, agujero, intersecar, intersección, booleana, envolvente exterior
from: f35df1cc
---

Las herramientas de sólidos combinan **sólidos**: grupos y componentes cuyas caras cierran un volumen, con cada arista uniendo exactamente dos caras. {{ui:Información de entidad}} indica {{ui:Sólido}}: {{ui:Sí}} para uno, y muestra su volumen.

Están en el menú {{ui:Sólidos}} del grupo {{ui:Organizar}}.

## Cuando algo no es un sólido

Seleccione el grupo o componente. Cuando no es un sólido, {{ui:Información de entidad}} dice por qué, por ejemplo "No es un sólido: 4 aristas bordean un hueco · 1 arista suelta":

| Problema | Qué significa |
|---|---|
| Aristas que bordean un hueco | Falta una cara |
| Aristas compartidas por tres caras o más | Una cara divide el interior, o dos formas se tocan a lo largo de una arista |
| Caras dentro de la forma | Un muro dejado dentro del volumen |
| Aristas sueltas | Líneas que no cierran ninguna cara |
| Caras del revés | Sus caras frontales miran hacia dentro, contra sus vecinas |

{{ui:Mostrar problemas}} lo abre con esas aristas y caras seleccionadas, para que las vea. {{ui:Corregir}} repara los casos sencillos en un solo paso de deshacer: elimina las aristas sueltas y las caras dentro de la forma, orienta bien las caras, y cierra los huecos cuyo borde está plano. Lo que no pueda reparar con seguridad (un hueco que no es plano, una arista compartida por muchas caras) se lo deja a usted, y dice qué queda.

## Unión

1. Seleccione dos o más sólidos (haga clic en uno, y {{key:Ctrl}} + clic en los demás).
2. {{ui:Sólidos}} › {{ui:Unión}}.

Pasan a ser un solo sólido, en un solo grupo. Donde se solapaban, las caras interiores desaparecen.

## Restar

1. {{ui:Sólidos}} › {{ui:Restar}}.
2. Haga clic en el sólido que **va a quitar** (la herramienta de corte).
3. Haga clic en el sólido que **va a cortar**.

Lo que queda del segundo sólido se conserva; la herramienta de corte se consume. Por ejemplo, para hacer un agujero a través de un bloque, dibuje un poste que lo atraviese, convierta el poste en un grupo y luego reste el poste del bloque.

## Intersecar

Seleccione dos o más sólidos y después {{ui:Sólidos}} › {{ui:Intersecar}}. Solo se conserva la parte que todos comparten.

## Cosas que conviene saber

- El resultado es un grupo nuevo. Conserva el nombre, el color y la etiqueta del primer sólido (en Restar: el que cortó). Los colores pintados en sus caras no se conservan.
- Los lados planos del resultado son caras únicas. Los lados redondos salen como las pequeñas caras planas con las que se dibujaron.
- Si un grupo o componente no es un sólido, la herramienta indica cuál y no cambia nada. Busque una cara que falte o una cara suelta dentro de él.
- Dentro de un grupo abierto, las herramientas actúan sobre los grupos y componentes de ese grupo.
- Cada herramienta es un paso de deshacer.
- La primera vez que usa una herramienta de sólidos, se carga su motor (manifold-3d), lo que puede tardar un momento.
