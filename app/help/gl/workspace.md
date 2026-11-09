---
title: A pantalla de ModelCraft
summary: Un percorrido pola barra de ferramentas, os paneis de cada lado, a vista 3D e a barra de estado polos seus nomes na pantalla.
keywords: pantalla, disposición, barra de ferramentas, paneis, esquema, información da entidade, estilo, escenas, barra de estado, caixa de valor, unidades, interface, percorrido
from: 4a9a4516
---

De arriba abaixo: a barra de aplicación, a barra de ferramentas, as tres columnas (paneis da esquerda, vista 3D, paneis da dereita) e a barra de estado.

## A barra de aplicación

A barra estreita da parte superior pertence a todas as aplicacións de CadCraft. Ten o nome e a versión da aplicación, {{ui:Acerca de ModelCraft}}, o botón de modo de pantalla e o interruptor {{ui:Papel}} / {{ui:Modelo}}.

- {{ui:Papel}} é o tema claro e {{ui:Modelo}} o escuro. A vista 3D cambia as súas cores para coincidir; o seu modelo non cambia.
- O botón de modo de pantalla (ao principio pon {{ui:Pantalla completa}}) e {{key:Ctrl+Shift+F}} alternan entre tres modos: normal, pantalla completa, e pantalla completa coas barras ocultas. Con as barras ocultas, sitúe o punteiro na beira superior da pantalla (ou toque nela) para facelas volver. {{key:Esc}} sae da pantalla completa.

:::note
{{key:Ctrl+Shift+F}} usa a tecla Control en todos os ordenadores, tamén nun Mac. No iPhone, onde os navegadores non teñen pantalla completa, o botón só oculta e amosa as barras.
:::

## A barra de ferramentas

A barra de ferramentas está dividida en grupos con etiqueta. Pase o punteiro sobre un botón para ver o seu nome e a súa tecla.

Á esquerda, a lista {{ui:Espazo de traballo}} cambia para que serven a barra de ferramentas e o panel da dereita: {{ui:Modelo}} (modelado por empurrar/tirar, o percorrido de abaixo), {{ui:Malla}} ([editar unha malla](topic:mesh-edit)), {{ui:Curva}} ([obxectos de curva](topic:curves)), {{ui:UV}} ([dispor os UV](topic:uv)), {{ui:Esculpir}} ([esculpir](topic:sculpt)), {{ui:Sombreado}} ([materiais feitos con nodos](topic:shading)), {{ui:Animar}} ([animar](topic:animate)) e {{ui:Renderizar}} ([renderizar na vista](topic:render#render-in-the-view)).

| Grupo | Botóns |
|---|---|
| Ficheiro | {{ui:Novo}}, {{ui:Abrir}}, {{ui:Gardar}}, {{ui:Importar}}, {{ui:Exportar}} (un menú de formatos) |
| Debuxo | {{ui:Liña}} ({{key:L}}), {{ui:Rectángulo}} ({{key:R}}), {{ui:Círculo}} ({{key:C}}), {{ui:Polígono}} ({{key:N}}) |
| Modificar | {{ui:Seleccionar}} ({{key:Space}}), {{ui:Empurrar/tirar}} ({{key:P}}), {{ui:Mover}} ({{key:M}}), {{ui:Xirar}} ({{key:Q}}), {{ui:Escalar}} ({{key:S}}), {{ui:Goma}} ({{key:E}}), {{ui:Cinta métrica}} ({{key:T}}) |
| Organizar | {{ui:Compoñente}} ({{key:G}}), {{ui:Grupo}} ({{key:Shift+G}}), {{ui:Desagrupar}} |
| Editar | {{ui:Desfacer}} ({{key:Mod+Z}}), {{ui:Refacer}} ({{key:Mod+Y}}), {{ui:Copiar}} ({{key:Mod+C}}), {{ui:Pegar}} ({{key:Mod+V}}), {{ui:Máis}} (un menú: cortar, copiar, pegar, pegar no mesmo lugar {{key:Mod+Shift+V}}, duplicar {{key:Mod+D}}, eliminar, seleccionar todo, deseleccionar todo, e o estilo de teclas) |
| Cámara | {{ui:Orbitar}} ({{key:O}}), {{ui:Desprazar}} ({{key:H}}), {{ui:Zoom}} ({{key:Z}}), {{ui:Extensións}} ({{key:Shift+Z}}), {{ui:Vistas}} (un menú) |

As teclas que se amosan son as de empurrar/tirar; co estilo Modelador escollido en [Configuración de ModelCraft](topic:settings), as indicacións emerxentes amosan esas teclas en vez delas. A ferramenta que usa aparece premida. Nunha pantalla estreita a barra de ferramentas despraza lateralmente.

O menú {{ui:Vistas}} ten {{ui:Isométrica}}, {{ui:Superior}}, {{ui:Frontal}}, {{ui:Dereita}}, {{ui:Posterior}}, {{ui:Esquerda}} e {{ui:Inferior}}, cada unha axustada ao modelo, e {{ui:Perspectiva}}, que alterna entre proxección en perspectiva e paralela.

## A vista 3D

O centro da pantalla. As liñas vermella, verde e azul son os eixos: o vermello e o verde quedan sobre o chan, o azul apunta cara arriba, e o **norte é o eixo verde**. Onde se cruzan está a orixe.

- Ao comezar, unha tarxeta titulada «Comece a modelar» enumera as primeiras teclas. Desaparece cando escolle unha ferramenta de debuxo ou preme na vista.
- Mentres unha ferramenta traballa, a vista amosa **marcadores de inferencia**: formas pequenas de cores onde o punteiro se axusta (un círculo verde nun extremo, un ciano nun punto medio, un cadrado vermello nun bordo, un rombo azul nunha cara). Consulte [Inferencia e axuste](topic:inference).
- As cousas seleccionadas vólvense azuis. Unha cara vista por detrás é azul grisácea.
- Ao abrir un grupo para editalo, todo o que está fóra del esvaece, e os eixos pasan aos eixos propios do grupo.
- Cando un modelo ten escenas, aparece unha fila de lapelas de escena na parte superior da vista.
- Solte un ficheiro en calquera parte da vista para abrilo ou importalo.

## Os paneis da esquerda

**{{ui:Esquema}}** enumera os grupos e compoñentes do modelo, aniñados como o están no modelo. Un compoñente usado máis dunha vez indica cantas veces, como «Xanela (4)».

- Prema un nome para seleccionalo. Faga dobre clic para abrilo e editalo.
- **Buscar por nome** (amósase cando hai dous ou máis grupos) mantén só as filas cuxo nome coincide, cos grupos nos que están. {{key:Esc}} borra a busca.
- O **ollo** ao final dunha fila oculta ou amosa ese grupo ou compoñente (como fai {{ui:Editar}} › {{ui:Máis}} › {{ui:Ocultar}}). Unha icona de etiqueta indica que está oculto pola súa [etiqueta](topic:tags).
- **Renomear no sitio:** prema unha fila, despois prema {{key:F2}}, escriba, e prema {{key:Enter}} ({{key:Esc}} conserva o nome antigo).
- **Arrastre unha fila** sobre o centro da fila doutro grupo para movela dentro dese grupo, sobre a beira superior ou inferior dunha fila para colocala xusto antes ou despois desa fila, ou sobre o título {{ui:Esquema}} para movela ao nivel superior. Queda onde está no modelo, e conserva a súa cor, etiqueta e nome. Un grupo non pode entrar en si mesmo. Cada movemento é un paso de desfacer. Consulte [Reordenar no Esquema](topic:groups-components#rearrange-in-the-outliner).
- Mentres edita dentro dun grupo, unha liña di «Editando: Modelo › …», e aparece un botón {{ui:Pechar grupo}}. Pecha todos os niveis abertos de una vez.

**{{ui:Compoñentes}}** enumera cada definición de compoñente con cantas copias están colocadas («3×») e un botón {{ui:Colocar}} que engade outra copia onde prema.

## Os paneis da dereita

**{{ui:Información da entidade}}** describe o que está seleccionado. O seu título cambia para indicar o que é:

| Título | Amosa | Botóns |
|---|---|---|
| Modelo (nada seleccionado) | Caras, bordos, grupos, compoñentes e cantos están colocados, guías, tamaño total | {{ui:Eliminar todas as guías}} (cando hai guías) |
| Cara | Superficie, número de ocos | {{ui:Inverter cara}} |
| Bordo | Lonxitude | ningún |
| Grupo ou compoñente | Nome (escriba para renomear), cantas veces está colocado, se é un sólido pechado, o seu volume, o seu tamaño | {{ui:Editar}}, {{ui:Desagrupar}}, {{ui:Facer único}} (un compoñente colocado máis dunha vez), {{ui:Crear compoñente}} (un grupo) |
| Punto-guía ou liña-guía | ningún | {{ui:Eliminar}} |
| Varias cousas | Cantas caras, bordos, grupos e guías, a superficie total das caras | {{ui:Crear compoñente (G)}}, {{ui:Crear grupo (Shift+G)}} |

**{{ui:Estilo}}** define como se debuxa o modelo: {{ui:Caras}} ({{ui:Sombreado}}, {{ui:Liña oculta}}, {{ui:Estrutura de arame}}, {{ui:Raios X}}), {{ui:Mostrar bordos}}, e {{ui:Sombras do sol}} coa data, a hora e o lugar do sol. Consulte [Estilos e sombras do sol](topic:styles-shadows).

**{{ui:Escenas}}** garda vistas: {{ui:Engadir escena}}, a lista de escenas, e {{ui:Anterior}}, {{ui:Reproducir}} e {{ui:Seguinte}}. Consulte [Gardar vistas como escenas](topic:scenes).

## A barra de estado

Na parte inferior, de esquerda a dereita:

1. **A indicación**: o que a ferramenta necesita a seguir, ou a que se axusta o punteiro («Extremo», «Sobre o eixo vermello»).
2. **Mensaxes**: o que acaba de pasar («Desfeito empurrar/tirar.», «Importado site.dxf: 1697 bordos sobre o chan, nun grupo.») ou por que algo non funcionou.
3. **A caixa de valor**: a súa etiqueta cambia coa ferramenta ({{ui:Lonxitude}}, {{ui:Cotas}}, {{ui:Raio}}, {{ui:Lados}}, {{ui:Distancia}}, {{ui:Ángulo}}, {{ui:Escalar}}, {{ui:Desfasar}}). Amosa o tamaño en directo mentres traballa, e recibe o que escriba. Consulte [Escribir tamaños exactos na caixa de valor](topic:value-box).
4. **O estilo de teclas**: {{ui:Teclas: Empurrar/tirar}} ou {{ui:Teclas: Modelador}} cambia os atallos de teclado e os botóns do rato á vez (o mesmo que en [Configuración de ModelCraft](topic:settings)).
5. **{{ui:Axustar}} e {{ui:Colisión}}**: axuste a puntos, bordos e eixos, e sólidos que se deteñen onde se tocan. Tachado = desactivado. Prema para cambiar. Consulte [Configuración de ModelCraft](topic:settings).
6. **O selector de unidades**: as unidades nas que se amosan as lonxitudes. Consulte [Primeiros pasos](topic:getting-started#check-the-units-first).

## Nunha pantalla estreita

Por debaixo de uns 760 píxeles de ancho (un teléfono, ou unha xanela estreita), a vista 3D ocupa a pantalla. A barra de ferramentas é unha soa fila que se despraza lateralmente, e os paneis ábrense como follas desde a barra da parte inferior da pantalla.
