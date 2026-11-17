---
title: Configuració de ModelCraft
summary: Trieu l'estil de tecles que coneixeu, feu que un ratolí tàctil òrbiti i desplaci sense els botons de la càmera, i activeu o desactiveu l'ajust i les col·lisions de sòlids.
keywords: configuració, preferències, controls, estil de tecles, mapa de tecles, dreceres, blender, ratolí tàctil, touchpad, desplaçament, òrbita, pinça, pas, ajust, col·lisió, solapament, interseca, travessa
from: caf77d5b
---

Obriu {{ui:Configuració}} amb l'engranatge de la barra d'aplicacions o amb {{key:Mod+,}}. La primera pestanya, {{ui:ModelCraft}}, conté la configuració pròpia d'aquesta aplicació; {{ui:General}} conté la que comparteixen totes les aplicacions de CadCraft (tema, barra d'eines, taulers). La configuració de ModelCraft només existeix a l'aplicació: la canvieu aquí, i aquest navegador la recorda.

## Controls: quines tecles i botons del ratolí

Hi ha dos estils de tecles. Canvieu-los aquí, amb {{ui:Tecles: Prem/Estira}} / {{ui:Tecles: Modelador}} a la part inferior dreta de la vista, o al final del menú {{ui:Més}} de la barra d'eines:

- **Estil Prem/Estira** (l'inicial; les lletres dels modeladors prem/estira com SketchUp): una lletra tria una eina: {{key:L}} línia, {{key:R}} rectangle, {{key:P}} prem/estira, {{key:M}} mou, {{key:Q}} gira, {{key:S}} escala, {{key:G}} crea component. Vegeu [Tecles i accions del ratolí](topic:keyboard).
- **Estil Modelador** (les tecles dels modeladors de malla com Blender): primer seleccioneu, i després actueu sobre la selecció de seguida. {{key:G}} la mou, {{key:R}} la gira i {{key:S}} l'escala des d'on és el punter, sense primer clic. Mentre es mou, {{key:X}}, {{key:Y}} o {{key:Z}} bloquegen l'eix vermell, verd o blau, un número escrit fixa la distància (o els graus, o el factor), i un clic o {{key:Enter}} la deixa anar; {{key:Esc}} o un clic dret la torna enrere. Després torneu a {{ui:Selecciona}}.

L'estil de tecles és la mateixa elecció que l'estil del menú: l'estil de tecles Modelador és l'estil de menú {{ui:Modelador}}, i triar-ne un tria també l'altre. Vegeu [Menús, tecles i ratolí](topic:menus-keys-and-mouse). La llista completa del Modelador és a [Tecles i accions del ratolí](topic:keyboard#modeler-keys). Les indicacions de les eines de la barra i de la targeta d'inici segueixen l'estil que trieu.

## Desplaçament: roda del ratolí o ratolí tàctil

- **Detecta-ho** (l'inicial): ModelCraft observa el desplaçament. El desplaçament lateral o detallat, com l'envia un ratolí tàctil, orbita; les muescas senceres de la roda fan zoom.
- **Roda del ratolí**: el desplaçament fa sempre zoom cap al punter.
- **Ratolí tàctil**: lliscueu amb dos dits per orbitar, mantingueu {{key:Shift}} i lliscueu per desplaçar, i feu pinça per fer zoom. No cal que useu mai els botons {{ui:Òrbita}}, {{ui:Desplaça}} o {{ui:Zoom}}.

Una pinça fa zoom en totes les opcions. Si «Detecta-ho» s'equivoca amb el vostre ratolí o ratolí tàctil, trieu el que teniu.

:::tip
En l'estil Modelador també podeu orbitar mantenint {{key:Alt}} i arrossegant, i desplaçar amb {{key:Alt+Shift}} i un arrossegament: és útil en un portàtil sense botó central.
:::

## Pas

**Pas a punts, arestes i eixos** (activat a l'inici) atreu el punter a extrems, punts mitjans, arestes, guies i als eixos vermell, verd i blau; vegeu [Inferència](topic:inference). Desactiveu-ho quan vulgueu col·locar alguna cosa lliurement a prop d'altra geometria sense que salti. Les cares, el terra i els bloquejos d'eix continuen funcionant amb el pas desactivat.

El botó {{ui:Pas}} a la part inferior dreta de la vista fa el mateix per al treball d'aquesta sessió (també es desa). En l'estil Modelador, {{key:Shift+Tab}} l'activa o desactiva.

## Els sòlids s'aturen on es toquen

**Atura els sòlids on es toquen** (activat a l'inici) evita que un mur s'arrossegui a través d'un altre. Amb {{ui:Mou}} (i {{key:G}}, i enganxar-i-moure amb {{key:Mod+D}}, és a dir, duplicar i moure) la selecció llisca fins a l'altre sòlid i s'atura en tocar-lo; amb {{ui:Prem/Estira}} una cara s'atura quan topa amb un altre sòlid. Reposar sobre alguna cosa i lliscar-hi per sobre és correcte: només s'atura el fet d'entrar-hi per dins. Les coses que ja se solapen en començar encara es poden separar.

Per empènyer alguna cosa a través a propòsit, feu clic a {{ui:Col·lisió}} a la part inferior dreta (o desactiveu l'opció), feu el moviment i torneu a fer-hi clic.

:::note
Les col·lisions es comproven per als moviments i per a prem/estira. {{ui:Gira}} i {{ui:Escala}} encara no les comproven, i la geometria solta que es toca s'uneix, com sempre: manteniu les coses separades dins de [grups](topic:groups-components) perquè segueixin separades.
:::

## Plataforma de la impressora 3D

La mida de la plataforma de la vostra impressora: {{ui:No definida}} (l'inici), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 o 300 × 300 × 400 mm. Trieu la mida més propera al volum d'impressió de la màquina. [Comprovació per a impressió 3D](topic:print-3d) indica després quan un model és més gran que la plataforma; amb {{ui:No definida}}, la mida no es comprova.

## Òrbita i desplaçament

**Orbita al voltant del que hi ha sota el cursor** (activat a l'inici): l'òrbita gira al voltant de la part del model que hi ha sota el punter, i el desplaçament manté aquell punt sota el punter; sobre l'espai buit, tots dos fan servir el centre de la vista. Desactiveu-ho per orbitar sempre al voltant del centre de la vista. **Velocitat d'òrbita** i **Velocitat de desplaçament** van de 0.25× a 3× (1× és l'inici) i s'apliquen al ratolí, al ratolí tàctil, al tàctil i a les tecles de fletxa. Vegeu [Òrbita, desplaçament i zoom](topic:orbit-pan-zoom).

## Indicador de cantonada

Què es mostra a la cantonada de la vista 3D: **Cub de vista** (l'inici; a dalt a la dreta: feu clic a una cara, aresta o cantonada per mirar des d'allà, arrossegueu-lo per orbitar, i arrossegueu-ne l'anell de la brúixola per girar el model), **Icona d'eixos** (un petit marcador X, Y, Z a baix a l'esquerra que gira amb la vista: X vermell, Y verd, Z blau) o **Cap**. Vegeu [El cub de vista](topic:view-cube).
