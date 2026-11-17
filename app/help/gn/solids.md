---
title: Herramientas de sólidos: unión, restar, intersecar
summary: Unir grupos y componentes cerrados en uno, cortar uno de otro, o quedarte solo con lo que comparten.
keywords: sólido, sólidos, inspector de sólidos, no es sólido, corregir sólido, agujero, borde suelto, al revés, unión, unir, combinar, fusionar, restar, diferencia, cortar, agujero, intersecar, intersección, booleana, cáscara exterior
from: f35df1cc
---

Las herramientas de sólidos combinan **sólidos**: grupos y componentes cuyas caras cierran un volumen, con cada borde uniendo exactamente dos caras. {{ui:Información de entidad}} dice {{ui:Sólido}}: {{ui:Heẽ}} para uno, y muestra su volumen.

Están en el menú {{ui:Sólidos}} del grupo {{ui:Organizar}}.

## Cuando algo no es un sólido

Seleccioná el grupo o componente. Cuando no es un sólido, {{ui:Información de entidad}} dice por qué, por ejemplo "No es un sólido: 4 bordes limitan un agujero · 1 borde suelto":

| Problema | Qué significa |
|---|---|
| Bordes que limitan un agujero | Falta una cara |
| Bordes compartidos por tres caras o más | Una cara divide el interior, o dos formas se tocan a lo largo de un borde |
| Caras dentro de la forma | Un muro que quedó dentro del volumen |
| Bordes sueltos | Líneas que no limitan ninguna cara |
| Caras al revés | Sus caras frontales miran hacia adentro, en contra de sus vecinas |

{{ui:Mostrar problemas}} lo abre con esos bordes y caras seleccionados, para que los veas. {{ui:Corregir}} arregla los casos simples en un paso de deshacer: elimina bordes sueltos y caras dentro de la forma, da vuelta las caras para que queden hacia afuera, y cierra los agujeros cuyo borde está plano. Lo que no puede arreglar con seguridad (un agujero que no es plano, un borde compartido por muchas caras) lo deja para vos, y dice qué queda.

## Unión

1. Seleccioná dos o más sólidos (clic en uno, {{key:Ctrl}}+clic en los otros).
2. {{ui:Sólidos}} › {{ui:Unión}}.

Pasan a ser un solo sólido, en un solo grupo. Donde se superponían, las caras de adentro desaparecen.

## Restar

1. {{ui:Sólidos}} › {{ui:Restar}}.
2. Hacé clic en el sólido que vas a **quitar** (la herramienta de corte).
3. Hacé clic en el sólido que se **corta**.

Lo que queda del segundo sólido se conserva; la herramienta de corte se consume. Por ejemplo, para hacer un agujero a través de un bloque, dibujá un poste que lo atraviese, convertí el poste en un grupo, y después restá el poste del bloque.

## Intersecar

Seleccioná dos o más sólidos y después {{ui:Sólidos}} › {{ui:Intersecar}}. Se conserva solo la parte que todos comparten.

## Cosas para saber

- El resultado es un grupo nuevo. Conserva el nombre, color y etiqueta del primer sólido (para Restar: el que cortaste). Los colores pintados en sus caras no se conservan.
- Los lados planos del resultado son caras simples. Los lados redondos quedan como las facetas planas con que fueron dibujados.
- Si un grupo o componente no es un sólido, la herramienta dice cuál es y no cambia nada. Buscá una cara que falte o una cara suelta dentro de él.
- Dentro de un grupo abierto, las herramientas actúan sobre los grupos y componentes de ese grupo.
- Cada herramienta es un paso de deshacer.
- La primera vez que usás una herramienta de sólidos, se carga su motor (manifold-3d), lo que puede tardar un momento.
