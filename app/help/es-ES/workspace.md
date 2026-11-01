---
title: La pantalla de ModelCraft
summary: Un recorrido por la barra de herramientas, los paneles de cada lado, la vista 3D y la barra de estado, según sus nombres en pantalla.
keywords: pantalla, disposición, barra de herramientas, paneles, esquema, información de entidad, estilo, escenas, barra de estado, cuadro de valores, unidades, interfaz, recorrido
from: 4a9a4516
---

De arriba abajo: la barra de la aplicación, la barra de herramientas, las tres columnas (paneles de la izquierda, vista 3D, paneles de la derecha) y la barra de estado.

## La barra de la aplicación

La barra fina de la parte más alta pertenece a todas las aplicaciones de CadCraft. Tiene el nombre y la versión de la aplicación, {{ui:Acerca de ModelCraft}}, el botón de modo de pantalla y el selector {{ui:Papel}} / {{ui:Modelo}}.

- {{ui:Papel}} es el tema claro y {{ui:Modelo}} el oscuro. La vista 3D cambia sus colores en consecuencia; su modelo no cambia.
- El botón de modo de pantalla (al principio dice {{ui:Pantalla completa}}) y {{key:Ctrl+Shift+F}} recorren tres modos: normal, pantalla completa y pantalla completa con las barras ocultas. Con las barras ocultas, apunte al borde superior de la pantalla (o tóquelo) para recuperarlas. {{key:Esc}} sale de la pantalla completa.

:::note
{{key:Ctrl+Shift+F}} usa la tecla Control en todos los ordenadores, también en un Mac. En iPhone, donde los navegadores no tienen pantalla completa, el botón solo oculta y muestra las barras.
:::

## La barra de herramientas

La barra de herramientas se divide en grupos rotulados. Sitúe el puntero sobre un botón para ver su nombre y su tecla.

A su izquierda, la lista {{ui:Espacio de trabajo}} cambia para qué sirven la barra de herramientas y el panel derecho: {{ui:Modelo}} (modelado por empujar/tirar, el recorrido de más abajo), {{ui:Malla}} ([editar una malla](topic:mesh-edit)), {{ui:Curva}} ([objetos de curva](topic:curves)), {{ui:UV}} ([disponer las UV](topic:uv)), {{ui:Esculpir}} ([esculpir](topic:sculpt)), {{ui:Sombreado}} ([materiales hechos con nodos](topic:shading)), {{ui:Animar}} ([animar](topic:animate)) y {{ui:Renderizar}} ([renderizar en la vista](topic:render#render-in-the-view)).

| Grupo | Botones |
|---|---|
| Archivo | {{ui:Nuevo}}, {{ui:Abrir}}, {{ui:Guardar}}, {{ui:Importar}}, {{ui:Exportar}} (un menú de formatos) |
| Dibujo | {{ui:Línea}} ({{key:L}}), {{ui:Rectángulo}} ({{key:R}}), {{ui:Círculo}} ({{key:C}}), {{ui:Polígono}} ({{key:N}}) |
| Modificar | {{ui:Seleccionar}} ({{key:Space}}), {{ui:Empujar/tirar}} ({{key:P}}), {{ui:Desplazar}} ({{key:M}}), {{ui:Girar}} ({{key:Q}}), {{ui:Escalar}} ({{key:S}}), {{ui:Borrador}} ({{key:E}}), {{ui:Cinta}} ({{key:T}}) |
| Organizar | {{ui:Componente}} ({{key:G}}), {{ui:Grupo}} ({{key:Shift+G}}), {{ui:Descomponer}} |
| Edición | {{ui:Deshacer}} ({{key:Mod+Z}}), {{ui:Rehacer}} ({{key:Mod+Y}}), {{ui:Copiar}} ({{key:Mod+C}}), {{ui:Pegar}} ({{key:Mod+V}}), {{ui:Más}} (un menú: cortar, copiar, pegar, pegar en el mismo sitio {{key:Mod+Shift+V}}, duplicar {{key:Mod+D}}, eliminar, seleccionar todo, no seleccionar nada y el estilo de teclas) |
| Cámara | {{ui:Órbita}} ({{key:O}}), {{ui:Encuadre}} ({{key:H}}), {{ui:Zoom}} ({{key:Z}}), {{ui:Extensión}} ({{key:Shift+Z}}), {{ui:Vistas}} (un menú) |

Las teclas mostradas son las de empujar/tirar; con el estilo Modelador elegido en los [ajustes de ModelCraft](topic:settings), la información emergente muestra esas teclas en su lugar. La herramienta que está usando aparece pulsada. En una pantalla estrecha, la barra de herramientas se desplaza lateralmente.

El menú {{ui:Vistas}} tiene {{ui:Iso}}, {{ui:Superior}}, {{ui:Frontal}}, {{ui:Derecha}}, {{ui:Posterior}}, {{ui:Izquierda}} e {{ui:Inferior}}, cada una ajustada al modelo, y {{ui:Perspectiva}}, que alterna entre proyección en perspectiva y paralela.

## La vista 3D

El centro de la pantalla. Las líneas roja, verde y azul son los ejes: el rojo y el verde están en el suelo, el azul apunta hacia arriba y **el norte es el eje verde**. Donde se cruzan está el origen.

- Al empezar, una tarjeta titulada "Empiece a modelar" enumera las primeras teclas. Desaparece cuando elige una herramienta de dibujo o hace clic en la vista.
- Mientras una herramienta trabaja, la vista muestra **marcadores de inferencia**: pequeñas formas de colores donde el puntero se ajusta (un círculo verde en un extremo, uno cian en un punto medio, un cuadrado rojo en una arista, un rombo azul en una cara). Consulte [Inferencia y ajuste](topic:inference).
- Los elementos seleccionados se vuelven azules. Una cara vista por detrás es gris azulado.
- Al abrir un grupo para editarlo, todo lo que queda fuera se atenúa y los ejes pasan a los ejes propios del grupo.
- Cuando un modelo tiene escenas, aparece una fila de pestañas de escena en la parte superior de la vista.
- Suelte un archivo en cualquier punto de la vista para abrirlo o importarlo.

## Los paneles de la izquierda

**{{ui:Esquema}}** enumera los grupos y componentes del modelo, anidados tal como lo están en el modelo. Un componente usado más de una vez indica cuántas veces, como "Window (4)".

- Pulse un nombre para seleccionarlo. Haga doble clic para abrirlo y editarlo.
- **Buscar por nombre** (se muestra cuando hay dos o más grupos) conserva solo las filas cuyo nombre coincide, con los grupos en que están. {{key:Esc}} lo borra.
- El **ojo** al final de una fila oculta o muestra ese grupo o componente (igual que {{ui:Edición}} › {{ui:Más}} › {{ui:Ocultar}}). Un icono de etiqueta significa que está oculto por su [etiqueta](topic:tags).
- **Renombrar en el sitio:** pulse una fila, después {{key:F2}}, escriba y pulse {{key:Enter}} ({{key:Esc}} conserva el nombre anterior).
- **Arrastre una fila** sobre el centro de la fila de otro grupo para moverla dentro de ese grupo, sobre el borde superior o inferior de una fila para colocarla justo antes o después de ella, o sobre el encabezado {{ui:Esquema}} para llevarla al nivel superior. Permanece donde está en el modelo y conserva su color, su etiqueta y su nombre. Un grupo no puede entrar en sí mismo. Cada movimiento es un paso de deshacer. Consulte [Reorganizar en el Esquema](topic:groups-components#rearrange-in-the-outliner).
- Mientras edita dentro de un grupo, una línea dice "Editando: Modelo › …" y aparece un botón {{ui:Cerrar grupo}}. Cierra todos los niveles abiertos a la vez.

**{{ui:Componentes}}** enumera cada definición de componente con cuántas copias hay colocadas ("3×") y un botón {{ui:Colocar}} que añade otra copia donde usted haga clic.

## Los paneles de la derecha

**{{ui:Información de entidad}}** describe lo seleccionado. Su encabezado cambia para indicar de qué se trata:

| Encabezado | Muestra | Botones |
|---|---|---|
| Modelo (nada seleccionado) | Caras, aristas, grupos, componentes y cuántos están colocados, guías, tamaño total | {{ui:Eliminar todas las guías}} (cuando hay guías) |
| Cara | Área, número de huecos | {{ui:Invertir cara}} |
| Arista | Longitud | ninguno |
| Grupo o Componente | Nombre (escriba para renombrar), cuántas veces está colocado, si es un sólido cerrado, su volumen, su tamaño | {{ui:Editar}}, {{ui:Descomponer}}, {{ui:Hacer único}} (un componente colocado más de una vez), {{ui:Crear componente}} (un grupo) |
| Punto de guía o línea de guía | nada | {{ui:Eliminar}} |
| Varios elementos | Cuántas caras, aristas, grupos y guías, el área total de las caras | {{ui:Crear componente (G)}}, {{ui:Crear grupo (Shift+G)}} |

**{{ui:Estilo}}** fija cómo se dibuja el modelo: {{ui:Caras}} ({{ui:Sombreado}}, {{ui:Líneas ocultas}}, {{ui:Estructura alámbrica}}, {{ui:Rayos X}}), {{ui:Mostrar aristas}} y {{ui:Sombras del sol}} con la fecha, la hora y el lugar del sol. Consulte [Estilos y sombras del sol](topic:styles-shadows).

**{{ui:Escenas}}** guarda vistas: {{ui:Añadir escena}}, la lista de escenas y {{ui:Anterior}}, {{ui:Reproducir}} y {{ui:Siguiente}}. Consulte [Guarde vistas como escenas](topic:scenes).

## La barra de estado

A lo largo de la parte inferior, de izquierda a derecha:

1. **La sugerencia**: lo que la herramienta necesita a continuación, o a qué se está ajustando el puntero ("Extremo", "Sobre el eje rojo").
2. **Mensajes**: lo que acaba de ocurrir ("Se deshizo empujar/tirar.", "Se importó site.dxf: 1697 aristas en el suelo, en un grupo.") o por qué algo no funcionó.
3. **El cuadro de valores**: su etiqueta cambia con la herramienta ({{ui:Longitud}}, {{ui:Dimensiones}}, {{ui:Radio}}, {{ui:Lados}}, {{ui:Distancia}}, {{ui:Ángulo}}, {{ui:Escala}}, {{ui:Desfase}}). Muestra el tamaño en vivo mientras trabaja y recoge lo que escribe. Consulte [Escriba tamaños exactos en el cuadro de valores](topic:value-box).
4. **El estilo de teclas**: {{ui:Teclas: Empujar/tirar}} o {{ui:Teclas: Modelador}} cambia a la vez los atajos de teclado y los botones del ratón (igual que en los [ajustes de ModelCraft](topic:settings)).
5. **{{ui:Ajuste}} y {{ui:Colisión}}**: ajuste a puntos, aristas y ejes, y sólidos que se detienen donde se tocan. Tachado = desactivado. Pulse para cambiar. Consulte [Ajustes de ModelCraft](topic:settings).
6. **El selector de unidades**: la unidad en que se muestran las longitudes. Consulte [Primeros pasos](topic:getting-started#check-the-units-first).

## En una pantalla estrecha

Por debajo de unos 760 píxeles de ancho (un teléfono, o una ventana estrecha), la vista 3D ocupa la pantalla. La barra de herramientas es una sola fila que se desplaza lateralmente y los paneles se abren como hojas desde la barra de la parte inferior de la pantalla.
