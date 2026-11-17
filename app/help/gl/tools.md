---
title: Lista de ferramentas
summary: Cada ferramenta de ModelCraft coa súa tecla, o que fai cada clic e o que pode escribir na caixa de valor mentres traballa.
keywords: ferramentas, barra de ferramentas, comandos, lista, liña, rectángulo, círculo, polígono, desfasar, arco, curva, spline, seguirme, varrido, arco de 2 puntos, arco desde o centro, seleccionar, empurrar tirar, mover, xirar, escalar, goma, cinta, cota, orbitar, desprazar, zoom, colocar compoñente
from: e08a274f
---

A suxestión da barra de estado indica sempre o que a ferramenta actual espera a continuación. {{key:Esc}} cancela o que unha ferramenta está a facer a medias.

## Ferramentas de debuxo

| Ferramenta | Tecla | Clics | Escriba na caixa de valor |
|---|---|---|---|
| {{ui:Line}} | {{key:L}} | Inicio, despois cada punto seguinte. Para cando se pecha unha cara, ou con {{key:Esc}} | Unha lonxitude cara ao punteiro; `[x,y,z]` un punto; `<dx,dy,dz>` un desfase ({{ui:Length}}) |
| {{ui:Rectangle}} | {{key:R}} | Primeira esquina (chan ou cara), esquina oposta | Largura e profundidade: `4m,3m` ({{ui:Dimensions}}) |
| {{ui:Circle}} | {{key:C}} | Centro (chan ou cara), un punto no bordo | Antes do primeiro clic: lados, `24s` ou `24` ({{ui:Sides}}). Despois: o raio ({{ui:Radius}}) |
| {{ui:Polygon}} | {{key:N}} | Centro, unha esquina | Igual que {{ui:Circle}}; comeza con 6 lados |
| {{ui:Arc}} | {{key:A}} | Inicio, fin, despois a curvatura | A lonxitude da corda despois do inicio ({{ui:Length}}); a curvatura despois do fin ({{ui:Bulge}}); `12s` para segmentos |
| {{ui:Protractor}} | — | Centro, punto de 0°, despois o ángulo | O ángulo en graos ({{ui:Angle}}) |
| {{ui:Follow me}} | — | Seleccione un percorrido e logo faga clic na cara (ou faga clic na cara e despois nun bordo do percorrido) | — |
| {{ui:Paint}} | {{key:B}} | Unha cara, grupo ou compoñente | — ({{key:Ctrl}} conectado, {{key:Shift}} toda esa cor, {{key:Alt}} recoller unha cor) |
| {{ui:Offset}} | {{key:F}} | Unha cara (ou seleccione antes unha cara ou bordos), despois o lado e a distancia | A distancia ({{ui:Distance}}); cara ao interior da cara é cara ao interior |
| {{ui:Curve}} | — | Puntos polos que pasa a curva; {{key:Enter}} ou un dobre clic remata | Unha lonxitude seguindo o punteiro, `[x,y,z]` ou `<dx,dy,dz>` para o seguinte punto |
| {{ui:Arc center}} | — | Centro, inicio, despois o fin | O raio despois do centro; o ángulo en graos despois do inicio; `12s` para segmentos |

## Ferramentas de edición

| Ferramenta | Tecla | Clics | Escriba na caixa de valor |
|---|---|---|---|
| {{ui:Select}} | {{key:Space}} | Clic, dobre clic, triplo clic, arrastrar unha caixa. Véxase [Seleccionar elementos](topic:select) | Con unha dimensión ou un bordo seleccionado: unha nova lonxitude, que redimensiona o modelo |
| {{ui:Push/pull}} | {{key:P}} | A cara, despois a distancia. Faga dobre clic nunha cara para repetir a última distancia | Unha distancia; un valor negativo vai no sentido contrario ({{ui:Distance}}) |
| {{ui:Move}} | {{key:M}} | Desde un punto, ata outro. Manteña {{key:Ctrl}} ou {{key:Alt}} para copiar | Unha distancia cara ao punteiro, `<dx,dy,dz>` ou `[x,y,z]` ({{ui:Distance}}). Despois dunha copia: `3x` ou `/3` |
| {{ui:Rotate}} | {{key:Q}} | Centro (sobre unha cara para xirar no seu plano), dirección de inicio, dirección de fin | O ángulo en graos ({{ui:Angle}}) |
| {{ui:Scale}} | {{key:S}} | O punto que se mantén, un punto de referencia, o novo tamaño | Un factor: `2`, `0.5` ({{ui:Scale}}) |
| {{ui:Eraser}} | {{key:E}} | Clic ou arrastre sobre bordos, grupos, guías e cotas | nada |
| {{ui:Tape}} | {{key:T}} | Desde un bordo: unha guía paralela. Desde un punto: mide e deixa un punto guía | O desfase ({{ui:Offset}}) ou a distancia ({{ui:Length}}) |
| {{ui:Dimension}} | {{key:D}} | Dúas esquinas (ou un bordo), despois onde vai a liña de cota. Véxase [Cota e redimensionamento](topic:dimensions) | O desfase ({{ui:Offset}}). Xusto despois: unha nova lonxitude, que redimensiona o modelo |

{{ui:Move}}, {{ui:Rotate}} e {{ui:Scale}} actúan sobre a selección. Se non hai nada seleccionado, usan primeiro o que fai clic (unha cara trae os seus bordos).

## Ferramentas de cámara

| Ferramenta | Tecla | Arrastre para |
|---|---|---|
| {{ui:Orbit}} | {{key:O}} | Xirar ao redor da parte do modelo baixo o punteiro ({{key:Shift}} despraza) |
| {{ui:Pan}} | {{key:H}} | Desprazar a vista |
| {{ui:Zoom}} | {{key:Z}} | Facer zoom: cara arriba é achegar, cara abaixo é afastar |
| {{ui:Extents}} | {{key:Shift+Z}} | (un botón, non unha ferramenta) Axustar todo o modelo á vista |

Raramente as precisa cun rato: o arrastre co botón central orbita, o arrastre co botón dereito despraza e a roda fai zoom con calquera ferramenta. Véxase [Orbitar, desprazar e facer zoom](topic:orbit-pan-zoom).

## Organizar

| Botón | Tecla | Función |
|---|---|---|
| {{ui:Component}} | {{key:G}} | Converte a selección nun compoñente |
| {{ui:Group}} | {{key:Shift+G}} | Converte a selección nun grupo |
| {{ui:Explode}} | ningunha | Devolve os grupos e compoñentes seleccionados a xeometría solta |

## Colocar compoñente

Non está na barra de ferramentas: prema en {{ui:Place}} xunto a un compoñente no panel {{ui:Components}}. Faga clic unha vez onde vai a orixe do compoñente; a ferramenta volve entón a {{ui:Select}}.
