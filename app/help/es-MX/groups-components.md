---
title: Grupos y componentes
summary: Evite que los objetos se peguen entre sí, edite una copia para cambiarlas todas y use los paneles Esquema y Componentes.
keywords: grupo, componente, crear grupo, crear componente, descomponer, hacer único, esquema, instancias, copias, bloque, anidado, editar grupo, colocar
from: 7cb925f3
---

La geometría suelta en ModelCraft se pega entre sí: las líneas que se tocan se dividen mutuamente, y las caras que comparten una arista se desplazan juntas. Eso es lo que hace posible dibujar sobre caras, pero también significa que una caja dibujada contra otra se fusiona con ella. Los **grupos** y los **componentes** mantienen las cosas separadas.

- Un **grupo** envuelve cierta geometría para que actúe como un solo objeto. Nada fuera de él puede pegarse a él.
- Un **componente** es un grupo que puede colocarse muchas veces. Todas las copias comparten el mismo contenido: si edita una, cambian todas. Use componentes para cualquier cosa que se repita: ventanas, columnas, escritorios, árboles.

## Crear un grupo o un componente

1. Designe la geometría. Un triple clic sobre una cara selecciona todo el objeto conectado; arrastrar una ventana selecciona todo lo que esté dentro del recuadro.
2. Pulse {{key:Shift+G}} para un grupo, o {{key:G}} para un componente. También puede hacer clic en {{ui:Grupo}} o {{ui:Componente}} en el grupo {{ui:Organizar}} de la barra de herramientas, o en {{ui:Crear grupo (Shift+G)}} o {{ui:Crear componente (G)}} en {{ui:Información de entidad}}.

   La barra de estado dice "Agrupado como Group#1." o "Componente creado Component#1.", el nuevo objeto queda seleccionado y aparece en el {{ui:Esquema}}.

3. Para nombrarlo, escriba un nombre en el campo {{ui:Nombre}} de {{ui:Información de entidad}} y pulse {{key:Enter}} o haga clic fuera.

Al designar una cara, sus aristas se incluyen también. Si no hay nada seleccionado, la barra de estado dice "Primero designe alguna geometría (arrastre una ventana, o haga triple clic para seleccionar todo lo conectado)."

También puede agrupar grupos: seleccione varios grupos y pulse {{key:Shift+G}}. El {{ui:Esquema}} muestra la anidación.

:::note
Las letras de las teclas coinciden con los valores predeterminados de SketchUp: {{key:G}} crea un componente, {{key:Shift+G}} un grupo.
:::

## Editar dentro de un grupo o componente

1. Haga doble clic en él (en la vista o en el {{ui:Esquema}}), o selecciónelo y haga clic en {{ui:Edición}} en {{ui:Información de entidad}}.

   El resto del modelo se atenúa, los ejes se mueven a los ejes propios del grupo, y el {{ui:Esquema}} dice "Editando: Modelo › Group#1". La barra de estado dice "Editando Group#1. Esc o doble clic fuera lo cierra."

2. Dibuje, empuje/tire, mueva y borre como de costumbre. Todo lo que haga se queda dentro del grupo.
3. Ciérrelo: pulse {{key:Esc}} (dos veces si hay algo seleccionado), haga doble clic en un espacio vacío, o haga clic en {{ui:Cerrar grupo}} en el {{ui:Esquema}}.

Mientras un componente está abierto, cada copia de él cambia a medida que trabaja.

## Colocar más copias de un componente

- Cópielo con {{ui:Desplazar}} y {{key:Ctrl}} (vea [Desplazar y copiar](topic:move-copy)). Cada copia es otra colocación del mismo componente.
- O haga clic en {{ui:Colocar}} junto a él en el panel {{ui:Componentes}}, y luego haga clic donde debe ir. Su origen, la esquina más baja de la caja alrededor de lo que seleccionó al crearlo, cae donde haga clic. Después la herramienta vuelve a {{ui:Seleccionar}}.

{{ui:Componentes}} muestra cuántas copias están colocadas ("4×"), y el {{ui:Esquema}} muestra la cantidad después del nombre.

## Reorganizar en el Esquema

Arrastre una fila del {{ui:Esquema}} para cambiar a qué pertenece. Nada se mueve en la vista: un grupo conserva su lugar en el modelo.

- **Dentro de un grupo:** suéltela sobre la parte central de la fila de un grupo (la fila se marca con un contorno punteado). Entra al final.
- **En otro orden:** suéltela sobre el borde superior o inferior de una fila (aparece una línea). Queda justo antes o después de esa fila, dentro del mismo grupo que esa fila, así que esto también la pone dentro de un grupo en el lugar elegido.
- **Al nivel superior:** suéltela sobre el encabezado del {{ui:Esquema}}. Entra al final.

Cada soltar es un paso: {{key:Mod+Z}} la devuelve. {{key:Esc}} durante un arrastre no suelta nada. Un grupo no puede ir dentro de sí mismo ni dentro de un grupo que contiene. Arrastrar está desactivado mientras {{ui:Buscar por nombre}} tiene texto.

:::touch
Mantenga un dedo sobre una fila un momento y luego arrástrela. Un deslizamiento rápido desplaza la lista.
:::

## Hacer diferente una copia

Seleccione la copia y haga clic en {{ui:Hacer único}} en {{ui:Información de entidad}} (se muestra cuando el componente está colocado más de una vez). Esa copia obtiene su propia definición, con el nombre del original y un número nuevo. Edítela sin tocar las demás.

## Convertir un grupo en componente

Seleccione el grupo y haga clic en {{ui:Crear componente}} en {{ui:Información de entidad}}. Recibe un nombre nuevo, como Component#2, aunque haya nombrado el grupo; escriba el nombre de nuevo en {{ui:Nombre}}.

## Descomponer

Seleccione un grupo o componente y haga clic en {{ui:Descomponer}} (en la barra de herramientas o en {{ui:Información de entidad}}). Su contenido pasa a ser geometría suelta en el lugar donde estaba, y se pega a lo que toca. Los grupos dentro de él siguen siendo grupos.

## Sólido y volumen

Cuando selecciona un grupo o componente, {{ui:Información de entidad}} muestra **Sólido: Sí** si sus caras cierran sin huecos (cada arista es compartida por exactamente dos caras) y no hay grupos anidados dentro. Entonces también muestra el **volumen**. Una caja, un muro con una ventana recortada y un cilindro extruido son sólidos; una caja a la que se le borró la tapa no lo es.

## Cuando se va la última copia

Borrar la última copia de un componente también lo quita del panel {{ui:Componentes}}. {{key:Mod+Z}} lo devuelve.

## Cosas que debe saber

- Las copias de un **grupo** hechas con Desplazar comparten su contenido en esta versión, igual que las copias de componentes: editar una cambia las demás. Para hacer una independiente, haga clic en {{ui:Crear componente}} y luego en {{ui:Hacer único}}. Vea [Solución de problemas](topic:troubleshooting#editing-one-group-changed-another).
- Los componentes no hacen aberturas en muros ni se pegan a caras, y no hay biblioteca de componentes listos para usar. Usted crea los suyos, o los importa.
- Los archivos importados llegan como un grupo. Los archivos Collada conservan sus propios grupos y componentes dentro de él.
