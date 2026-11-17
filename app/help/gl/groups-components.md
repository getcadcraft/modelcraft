---
title: Grupos e compoñentes
summary: Evite que os obxectos se peguen, edite unha copia para cambialas todas e use os paneis Esquema e Compoñentes.
keywords: grupo, compoñente, crear grupo, crear compoñente, desagrupar, facer único, esquema, instancias, copias, bloque, aniñado, editar grupo, colocar
from: 7cb925f3
---

A xeometría solta en ModelCraft pégase: as liñas que se tocan córtanse mutuamente, e as caras que comparten unha aresta móvense xuntas. Iso é o que fai que debuxar sobre caras funcione, pero tamén que unha caixa debuxada contra outra se funda con ela. Os **grupos** e os **compoñentes** manteñen as cousas separadas.

- Un **grupo** envolve algunha xeometría para que actúe como un só obxecto. Nada de fóra pode pegarse a el.
- Un **compoñente** é un grupo que se pode colocar moitas veces. Todas as copias comparten o mesmo contido: edite unha e cambiaranse todas. Use compoñentes para todo o que se repita: xanelas, piares, mesas, árbores.

## Crear un grupo ou un compoñente

1. Seleccione a xeometría. Un triple clic nunha cara selecciona o obxecto conectado completo; un arrastre con xanela selecciona todo o que hai na caixa.
2. Prema {{key:Shift+G}} para un grupo, ou {{key:G}} para un compoñente. Tamén pode facer clic en {{ui:Group}} ou {{ui:Component}} no grupo {{ui:Organize}} da barra de ferramentas, ou en {{ui:Make group (Shift+G)}} ou {{ui:Make component (G)}} en {{ui:Entity info}}.

   A barra de estado di "Agrupado como Group#1." ou "Creado o compoñente Component#1.", o novo obxecto queda seleccionado e aparece no {{ui:Outliner}}.

3. Para darlle un nome, escriba un nome no campo {{ui:Name}} de {{ui:Entity info}} e prema {{key:Enter}} ou faga clic fóra.

Seleccionar unha cara tamén trae as súas arestas. Se non hai nada seleccionado, a barra de estado di "Seleccione primeiro xeometría (arrastre cunha xanela, ou faga un triple clic para seleccionar todo o conectado)."

Tamén pode agrupar grupos: seleccione varios grupos e prema {{key:Shift+G}}. O {{ui:Outliner}} mostra o aniñamento.

:::note
As teclas coinciden coas predeterminadas de SketchUp: {{key:G}} crea un compoñente, {{key:Shift+G}} un grupo.
:::

## Editar dentro dun grupo ou compoñente

1. Faga un doble clic nel (na vista ou no {{ui:Outliner}}), ou seleccione o e faga clic en {{ui:Edit}} en {{ui:Entity info}}.

   O resto do modelo esmorece, os eixos pasan aos propios eixos do grupo e o {{ui:Outliner}} di "Editando: Modelo › Group#1". A barra de estado di "Editando Group#1. Esc ou un doble clic fóra pecha o grupo."

2. Debuxe, empurre/tire, mova e borre como de costume. Todo o que faga queda dentro do grupo.
3. Para pechalo, prema {{key:Esc}} (dúas veces se hai algo seleccionado), faga un doble clic nun espazo baleiro, ou faga clic en {{ui:Close group}} no {{ui:Outliner}}.

Mentres un compoñente está aberto, cada copia del cambia segundo traballa.

## Colocar máis copias dun compoñente

- Cópieo con {{ui:Move}} e {{key:Ctrl}} (consulte [Mover e copiar](topic:move-copy)). Cada copia é outra colocación do mesmo compoñente.
- Ou faga clic en {{ui:Place}} xunto a el no panel {{ui:Components}}, e despois faga clic onde debe ir. A súa orixe, a esquina inferior da caixa que rodea o seleccionado cando o creou, cae onde fai clic. Logo a ferramenta volve a {{ui:Select}}.

{{ui:Components}} mostra cantas copias están colocadas ("4×"), e o {{ui:Outliner}} mostra o contador despois do nome.

## Reordenar no Esquema

Arrastre unha fila do {{ui:Outliner}} para cambiar onde pertence. Nada se move na vista: un grupo mantén o seu sitio no modelo.

- **Dentro dun grupo:** solte sobre o centro da fila do grupo (a fila recibe un contorno de trazos). Entra dentro, o último.
- **Nunha orde distinta:** solte sobre o bordo superior ou inferior dunha fila (aparece unha liña). Queda xusto antes ou despois desa fila, dentro do mesmo grupo que ela, así que tamén pode telo dentro dun grupo nun lugar escollido.
- **Ao nivel superior:** solte sobre o título do {{ui:Outliner}}. Vai o último.

Cada soltura é un paso: {{key:Mod+Z}} o devolve ao seu sitio. {{key:Esc}} durante un arrastre non solta nada. Un grupo non pode ir dentro de si mesmo nin dentro dun grupo que contén. O arrastre está desactivado mentres {{ui:Find by name}} teña texto.

:::touch
Manteña un dedo sobre unha fila un momento e despois arrástreo. Un deslizamento rápido despraza a lista.
:::

## Facer unha copia diferente

Seleccione a copia e faga clic en {{ui:Make unique}} en {{ui:Entity info}} (móstrase cando o compoñente está colocado máis dunha vez). Esa copia recibe a súa propia definición, co nome do orixinal e un número novo. Edítea sen tocar as demais.

## Converter un grupo nun compoñente

Seleccione o grupo e faga clic en {{ui:Make component}} en {{ui:Entity info}}. Recibe un nome novo, como Component#2, aínda que lle puxese nome ao grupo; escriba o nome de novo en {{ui:Name}}.

## Desagrupar

Seleccione un grupo ou compoñente e faga clic en {{ui:Explode}} (na barra de ferramentas ou en {{ui:Entity info}}). O seu contido convértese en xeometría solta no mesmo lugar, e pégase ao que toca. Os grupos que contén seguen sendo grupos.

## Sólido e volume

Cando selecciona un grupo ou compoñente, {{ui:Entity info}} mostra **Sólido: Sí** se as súas caras pechan sen buratos (cada aresta é compartida por exactamente dúas caras) e non hai grupos aniñados dentro. Entón mostra tamén o **volume**. Unha caixa, un muro cunha xanela recortada e un cilindro estirado son sólidos; unha caixa á que se lle borrou a tapa non o é.

## Cando desaparece a última copia

Borrar a última copia dun compoñente tamén o elimina do panel {{ui:Components}}. {{key:Mod+Z}} o devolve.

## Cousas que debe saber

- As copias dun **grupo** feitas con Mover comparten o contido nesta versión, como as copias de compoñentes: editar unha cambia as outras. Para que sexa independente, faga clic en {{ui:Make component}} e despois en {{ui:Make unique}}. Consulte [Solución de problemas](topic:troubleshooting#editing-one-group-changed-another).
- Os compoñentes non abren furados nos muros nin se pegan ás caras, e non hai biblioteca de compoñentes prefabricados. Vostede crea os seus ou impórtaos.
- Os ficheiros importados chegan como un grupo. Os ficheiros Collada conservan dentro os seus propios grupos e compoñentes.
