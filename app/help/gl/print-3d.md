---
title: Preparar un modelo para impresión 3D
summary: Comprobe que un modelo está pechado e as caras miran ao lado correcto, vexa o seu tamaño, a base e os voadizos, corrixa o que estea mal, e descárguello como STL ou 3MF para o seu slicer.
keywords: impresión 3d, impresión, impresora, imprimir, slicer, stl, 3mf, hermético, pechado, variedade, sólido, buratos, do revés, voadizo, soportes, base, cama, milímetros, exportar, corrixir, reparar, oco, tamaño da cama, principiante, grosor do muro, ferramentas de impresión
from: 948e19af
---

O slicer dunha impresora 3D precisa unha forma pechada: sen buratos, con cada cara apuntando cara a fóra, e sen atravesarse a si mesma. {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}} busca exactamente iso antes de descargar o ficheiro.

## Comprobar e descargar

1. Seleccione o que quere imprimir: un ou máis grupos ou compoñentes, ou algunhas caras. Sen nada seleccionado, imprímese todo o mostrado.
2. Prema {{ui:Export}} no grupo {{ui:File}}, logo {{ui:Check for 3D printing (STL or 3MF)…}}.

   O diálogo comeza cunha liña: «Listo para imprimir», cantas cousas hai que corrixir antes de imprimir, ou cantas hai que mirar primeiro. Cada problema ten tres partes: o que está mal, por que importa, e que facer. Logo veñen o tamaño en milímetros, o volume, o número de triángulos e a súa cama de impresora.

3. Se o diálogo lista cousas para corrixir, prema {{ui:Fix what can be fixed}} (vexa abaixo). A comprobación volve a executarse por si soa.
4. Prema {{ui:Download 3MF}} ou {{ui:Download STL}}.

O que se imprime é o que ve: as caras ocultas, os grupos e compoñentes ocultos, e calquera cousa nunha etiqueta oculta quedan fóra. Os tamaños están sempre en milímetros, a unidade que esperan os slicers, sexa cal sexa a unidade que mostre o modelo.

:::tip
Prefira 3MF cando o seu slicer o lea: conserva as cores e as unidades. STL non ten nin unha nin outra, e os slicers asumen milímetros.
:::

## Que busca a comprobación

Isto para unha impresión ou a estraga, e fai que o diálogo diga «Non listo para imprimir»:

| Problema | Que significa | Que facer |
|---|---|---|
| Unha cara só nun lado | Un burato: un bordo ten unha cara dun lado e nada do outro | Debuxe a cara que falta (unha liña atravesando o oco adoita pechalo), ou use {{ui:Fix}} (abaixo) |
| Compartido por tres ou máis caras | As caras xúntanse nunha aleta ou nun muro dentro dun sólido | Borre a cara interior |
| Caras que miran en sentidos opostos | Algunhas caras miran para dentro, outras para fóra | Seleccione as caras que miran para dentro e prema {{ui:Reverse face}} en {{ui:Entity info}} |
| Do revés | Unha peza pechada enteira mira cara dentro | Seleccione as súas caras e inviértaas |
| Atravesa a si mesma | Unha parte se dobra a través de si mesma | {{ui:Edit}} › {{ui:More}} › {{ui:Intersect with model}}, logo borre o que está dentro. Vexa [Intersectar caras](topic:intersect) |

Son avisos: o modelo imprímese, pero mire primeiro.

- **Pezas separadas solápanse**, ou **tocan cara a cara**: os slicers adoitan unilas nunha soa. Para un ficheiro máis limpo, únaas con {{ui:Solids}} › {{ui:Union}}. Vexa [Ferramentas de sólidos](topic:solids).
- **Nada queda plano na parte inferior**: xire o modelo para que unha cara repouse na cama, ou o slicer engadirá soportes ou unha balsa.
- **Inclínase máis de 45° da vertical**: esas caras precisan soporte. O diálogo di canto da superficie o necesita.
- **Menos de 1 mm de lado**: probablemente modelado na unidade equivocada. Comprobe a unidade na barra de estado.

Unha peza oca (unha casca pechada dentro doutra) está ben: as súas caras miran cara ao oco, e o seu volume réstase.

## Corrixir os problemas

Baixo **Onde están os problemas**, o diálogo nomea cada grupo ou compoñente que ten algo mal (as caras soltas que non están nun grupo aparecen como «Caras fóra dun grupo»), co que está mal en el. Un compoñente colocado varias veces aparece unha soa vez: corrixilo corrixe todas as copias.

- {{ui:Show}} abre ese grupo e selecciona os bordos e caras que están mal, para que se vexan resaltados.
- {{ui:Fix what can be fixed}} corrixe todos de unha vez: pecha buratos cuxos bordos quedan planos, quita as caras dentro da forma e os bordos soltos, e volve as caras cara a fóra. É un paso: {{key:Mod+Z}} desfaino. A comprobación volve a executarse e amosa o que queda.

O que non pode corrixir (un burato cuxos bordos non quedan planos, unha peza que atravesa a si mesma) queda na lista co que facer á man. {{ui:Repair}} baixo **Ferramentas de impresión** vai máis lonxe: pecha buratos que non son planos, quita pezas soltas e caras duplicadas, e lista cada corrección. Vexa [Soportes, grosor do muro, ocado e reparación](topic:print-tools#repair). Tamén pode corrixir un grupo de cada vez: selecciónao, logo use {{ui:Show problems}} e {{ui:Fix}} en {{ui:Entity info}}. Vexa [Ferramentas de sólidos](topic:solids).

## Unha peza oca

{{ui:Hollow}} baixo **Ferramentas de impresión** vacía unha peza ata o grosor de muro que indique, con buratos de drenaxe onde prema. Vexa [Ocar](topic:print-tools#hollow).

Tamén pode debuxar o oco vostede mesmo: un grupo pechado dentro da peza, sen tocala, con todas as súas caras volvidas para que miren ao oco. A comprobación conta isto como oco e réstalle o volume; non se lista como algo que corrixir.

## A cama da súa impresora

Escolla o tamaño da cama da súa impresora en {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:3D printer bed}}. A comprobación avisa entón cando o modelo é máis grande que a cama, xirado en calquera sentido. Vexa [Configuración](topic:settings#3d-printer-bed).

## Ferramentas de impresión

Baixo as conclusións do diálogo, **Ferramentas de impresión** abre {{ui:Supports preview}} (onde van os soportes e canto máis ou menos), {{ui:Wall thickness}} (muros demasiado finos para imprimir), {{ui:Hollow}} e {{ui:Repair}}. Vexa [Soportes, grosor do muro, ocado e reparación](topic:print-tools). {{ui:Split for printing}} corta un modelo demasiado grande para a cama en pezas con conectores e unións numeradas: vexa [Dividir un modelo grande para imprimir](topic:print-split).

## Non comprobado

A comprobación non fai o slicing: os detalles diminutos que a súa boquilla non pode debuxar e os soportes reais son do seu slicer. Vexa [Aínda non dispoñible](topic:not-built-yet#3d-printing).
