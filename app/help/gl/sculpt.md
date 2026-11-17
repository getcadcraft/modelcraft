---
title: Esculpir unha malla
summary: Dé forma a unha malla como barro con pinceis — debuxar, barro, suavizar, agarrar, inflar, pregar, pinzar, aplanar; protexa partes cunha máscara, espella no eixo X e engada detalle onde esculpe.
keywords: esculpir, escultura, pincel, pinceis, barro, debuxar, suavizar, agarrar, inflar, pregar, pinzar, aplanar, máscara, simetría, espello, detalle, topoloxía dinámica, lapis, presión, tableta, estilete
from: 5477801a
---

O espazo de traballo Esculpir dá forma a unha malla con pinceis, como co barro: arrastre sobre a superficie e esta sobe, afúndese, suaviza ou segue o punteiro baixo un pincel redondo, máis forte no centro e desvanecéndose ata desaparecer no bordo.

## Inicio

Seleccione unha malla e escolla {{ui:Esculpir}} na lista de espazos de traballo. Un grupo ou compoñente convértese primeiro en malla, como no espazo Malla. Os pinceis actúan sobre os vértices da malla, así que unha malla con máis vértices admite formas máis finas: subdivídaa primeiro (a {{ui:Subdividir}} do espazo Malla, ou un modificador de superficie de subdivisión que aplique con Aplicar), ou active {{ui:Detalle}}.

## Pinceis

| Pincel | Tecla | Que fai |
| --- | --- | --- |
| {{ui:Debuxar}} | {{key:D}} | Eleva a superficie baixo o pincel |
| {{ui:Barro}} | {{key:C}} | Constrúe capas planas, enchendo primeiro as depresións |
| {{ui:Suavizar}} | {{key:S}} | Iguala os bultos; manteña premido {{key:Shift}} para suavizar con calquera pincel |
| {{ui:Agarrar}} | {{key:G}} | Arrastra a superficie co punteiro |
| {{ui:Inflar}} | {{key:I}} | Infla a superficie cara á súa propia dirección |
| {{ui:Pregar}} | {{key:Shift+C}} | Corta un sulco agudo |
| {{ui:Pinzar}} | {{key:P}} | Atrae a superficie cara ao centro do pincel |
| {{ui:Aplanar}} | {{key:T}} | Empurra a superficie cara ao seu plano medio |
| {{ui:Máscara}} | {{key:M}} | Pinta unha máscara que protexe a superficie dos outros pinceis |

Manteña premido {{key:Ctrl}} mentres pasa o pincel para traballar ao revés (baixar en lugar de subir, unha crista en lugar dun sulco, quitar a máscara), ou active {{ui:Quitar}}.

## Tamaño e intensidade

O tamaño do pincel está en píxeles na pantalla, así que se sente igual, por moito zoom que se faga: {{key:[}} e {{key:]}} fano máis pequeno e máis grande, e {{key:Shift+[}} e {{key:Shift+]}} cambian a súa intensidade. O panel amosa ambos.

Cun lapis na tableta, premer con máis forza fai o pincel máis grande e máis intenso; o panel desactiva ambas as opcións.

## Espello, máscara e detalle

- {{ui:Espello X}} ({{key:X}}) esculpe os dous lados a través do vermello á vez, para caras e figuras.
- A máscara amósase máis escura mentres esculpe. {{ui:Borrar máscara}} ({{key:Alt+M}}) a quita, {{ui:Inverter máscara}} ({{key:Ctrl+I}}) enmascara o que estaba libre e libera o que estaba enmascarado. A máscara consérvase coa malla.
- {{ui:Detalle}} engade triángulos onde esculpe: as arestas máis longas que o tamaño fixado no panel (píxeis na pantalla) divídense baixo o pincel. Precisa unha malla de triángulos e pide que se cree unha antes.

Cada trazo é un paso de desfacer.

:::note
{{ui:Detalle}} só engade triángulos; non quita os que se volveron minúsculos. Un Remallar (no espazo Malla) iguala de novo toda a malla.
:::

Vexa tamén [Editar unha malla](topic:mesh-edit), [Mallas](topic:meshes) e [Modificadores nunha malla](topic:modifiers).
