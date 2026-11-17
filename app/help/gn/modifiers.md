---
title: Modificadores en una malla, un grupo o un componente
summary: Escalar, espejar, matriz, alisar, biselar, cortar y doblar malla ojecambiáramo; grupo térã componente pila ndive repetir térã escalar, listo jave permanente ojapo.
keywords: modificador, modificadores, pila, grupo, componente, escalar, hornear, editar origen, no destructivo, espejo, matriz, matriz radial, subdivisión, superficie de subdivisión, alisar, biselar, solidificar, espesor, booleano, cortar, desplazar, ruido, soldar, decimar, simplificar, celosía, jaula, deformación de curva, doblar, shrinkwrap, aplicar
from: dd5ec1cb
---

**Modificador** malla ohechauka mba'e ojecambia malla ndejejapóvo. Parte peteĩ espejo ojapo, ha ojapo solo upe mitā; caja subdivisión superficie-pe redondo ojapo ha caja ojecambiáva. Modificadores **pila**-pe oĩ ha orden-pe ojeporu, arriba gui abajo. Ohechaukáva, exportación, impresión ha render ha'e malla opa modificador ojehasáva.

## Modificador emoĩ

1. Ejepe'a malla. Model espacio de trabajo-pe **Modificadores** apartado {{ui:Entity info}}-pe oĩ; Malla espacio de trabajo-pe panel derecha-pe.
2. {{ui:Add a modifier…}}-gui peteĩ ejepe'a. Pila fondo-pe oĩta.
3. Nombre rembýpe ajuste ojecambia. Longitudes Value caja-pe ojeikuaa ha'e rehe: `600mm`, `2'6"` ha `(6m)/4` ojeporu ojeporu.

Cada cambio peteĩ deshacer paso: {{key:Mod+Z}} omboguejy.

## Modificador botones

- Casilla ojehasa térã ojehai.
- Pantalla botón vista-pe ohechauka térã ohecha (pila-pe oiko).
- Cámara botón render imagen ha video-pe ohechauka térã ndohechaukái, upévare modificador render-pe nomás (térã vista-pe nomás) ikatu.
- Flechas pila-pe arriba térã abajo ojeguata. Orden importa: espejo upéi subdivisión suave costura omoĩ; subdivisión upéi espejo ndoikói.
- {{ui:Apply}} forma malla parte-pe oñemoĩ: hi'ánguri modificadores ha ko'ã ojapo malla-pe ha pila-gui ojeguejy. Peteĩ deshacer paso.
- Cruz omboguejy.

## Modificadores

| Modificador | Mba'épa ojapo |
|---|---|
| Escalar | Objeto origen rehe escala, factor rojo, verde ha azul. Grupo térã componente-pe avei |
| Espejo | Espejo copia rojo, verde térã azul rehe malla origen-gui, mitākuéra ojoaju ha ojejoaju hendaʼe |
| Matriz | Línea-pe copia (paso ijeʼeva tamaño ojapo ha número, peteĩ paso ojapóva), eje rehe redondo, térã modelo curva rehe. Grupo térã componente línea ojeporu |
| Superficie de subdivisión | Catmull-Clark subdivisión-pe malla alisa. Arista afiladas ojepliegue. Render-pe vista-gui mboyve nivel ojeporu ikatu |
| Biselar | Arista ojehasa ángulo-gui afilada opaite redondo |
| Solidificar | Superficie espesor ome'ẽ ha borde ojeguejy |
| Booleano | Modelo ambue objeto ndive superposición ojekáva, ojeguejy, ojejoaju térã ojeikuaa. Mokõi sólido cerrado oĩ ha'e |
| Desplazar | Superficie ruido liso ndive adentro térã afuera ojeguata. Semilla mismo bultos opa jeýpe |
| Soldar | Distancia-gui michĩvéva vértices ojejoaju |
| Decimar | Triángulo ndaha'éi forma ojecambia michĩ ojeguejy, parte ojeikuaa |
| Alisar | Vértices vecinos-kuéra rehe relajado |
| Celosía | Jaula ndive malla doblar: jaula puntos ojeguata, malla oheka |
| Deformación de curva | Modelo curva rehe malla dobla, rojo, verde térã azul rehe |
| Shrinkwrap | Opa vértice ambue objeto punto más cercano rehe ojeguata |

## Grupo térã componente rehe

Grupo térã componente receta ikatu oguereko, upévare lámpara pantalla **Escalar** ha peteĩ pantalla **Matriz** ikatu, número ojecambia lámpara ojecambia.

1. Ejepe'a grupo térã componente. {{ui:Entity info}}-pe **Modificadores** apartado pila ohechauka (qüi'ỹ oñepyrũ).
2. {{ui:Add a modifier…}}-gui {{ui:Scale}} térã {{ui:Array}} ejepe'a. Grupo componente oiko, **original, pila-pe emoĩva**. Original oñongatu: ojecambia ha opa copia ojeheka.
3. Escalar factor rojo, verde ha azul-pe (`1, 1, 2` altura mokõi jepe'a). Matriz copia número, paso resultado tamaño parte-pe, ha longitudes extra paso.

Pila original ejes-pe objeto origen rehe, upévare orden importa: Matriz copia mbohapy 3 m rembýpe, upéi Escalar 2 rojo-pe, copia 6 m rembýpe oiko; Escalar primero, Matriz upéi 3 m rembýpe oñongatu. Casilla, flechas ha cruz malla-pe ojapo; vista ha cámara botones ha Apply peteĩ modificador-pe ndojapói, pila grupo-pe peteĩ mba'e.

- {{ui:Edit source}} original ojepe'a ojepe'ápe. Ojecambia opa copia-pe ojehechauka; cerrar ojegueru jey.
- {{ui:Bake modifiers}} resultado borde ha cara simple ojapo ha pila ojeguejy, peteĩ deshacer paso. Copia ojoaju ojeikuaáva apartado geometría-pe oñongatu: Bake ndaha'éi unión.
- Componente copia receta ojeporu; {{ui:Make unique}} ojapo separado (original compartido oñongatu).
- Pila archivo-pe oñongatu, copiar ha pegar ha deshacer ndive ojeguerahaʼa, Purge unused original oñongatu. Modificadores ndoikuaáva programa copia ohechauka.
- Bake peve resultado ndojeikéi, ndojejoaju, ndojejapóiva tamaño ndaha'éi ndojeikotevẽ: próximo cambio ojapo jey. Cada peteĩ ohechauka.
- Límite: 32 modificador ha 1,000 copia. Estirar hag̃ua componente (Stretch) pila ndive definición compartido ndojeikuaái aún.

## Superficie de subdivisión

Subdivisión malla Catmull-Clark rehe alisa: cara cuatro lado-pe ojeguata, nivel cada peteĩ cuatro jey cara. Caja mokõi térã mbohapy nivel redondeado ohechauka, caja ojecambia jey.

- **Niveles en la vista** suavidad ohechauka.
- **Niveles en renders** render imagen ha video suavidad; render vista-gui mboyve nivel ikatu.
- **Renders sobre la superficie lisa real** malla render punto límite superficie-pe ojeguata, mokõi nivel ndive ohechauka suave muchos.
- **Pliegues** aristas afiladas: Malla espacio de trabajo-pe arista ejepe'a ha {{ui:Crease}} ojeporu (1 afilado, 0.5 michĩ redondo, 0 suave). Ver [Editar una malla](topic:mesh-edit).
- **Bajar nivel vista malla guasúpe:** nivel ejerohóva caras guasúva jave vista computadora ndokaraiva, vista nivel ko'ẽ ohechauka ha ohechauka. {{ui:Apply}} opa nivel ojeporu. Caras cantidad ModelCraft **Settings** › Rendering › Your machine clase-gui oñemoĩ.
- Borde abierto esquina oñongatu ha arista línea-pe oĩ.

## Celosía jaula ndive doblar

1. {{ui:Lattice}} modificador ejepe'a ha {{ui:Add a lattice cage round the mesh}} ejejapy. Jaula 3 × 3 × 3 puntos malla rembýpe ohechauka, alambre-pe ojehechauka.
2. Malla espacio de trabajo-pe jaula ojepe'a (doble clic) ha puntos ojeguata. Malla ojeguerova.

:::tip
Jaula ambue malla-icha: etiqueta ndive ocultá ejeho jave.
:::

## Malla guasu

Pila michĩ opa jave oñepyrũ. Guasu pila computadora opa núcleo ryepýpe background-pe ojapo; pantalla ndoikói ha'e mboyve ojeheka hasta pyahu ojapo. Booleano sólido modelador peteĩ jey ojeikuaa; pantalla ohechauka jaeruva.

## Mba'e modificadores ndoʼi aún

- Vértice peso (malla pintado caída) Desplazar, Alisar ha Shrinkwrap-pe.
- Escalar ha lineal Matriz ambue modificador push/pull geometría-pe (grupo ha componente): malla convertí ({{ui:Convert to mesh}}). Espejo, redondo térã curva Matriz, Doblar ha Afilar grupo-pe pyahu ojapóta.
