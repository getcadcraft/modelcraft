---
title: Chegando desde outros modeladores
summary: Como os hábitos de modelado con empurrar e tirar se corresponden con ModelCraft, tecla a tecla, e as diferenzas que sorprenden á xente.
keywords: cambio, migrar, familiar, diferenzas, modelador de empurrar e tirar, skp, atallos, hábitos, comparar, caixa de medidas, esquema, información da entidade
from: 74ffd4ac
---

Se modelou en SketchUp, ModelCraft resultaralle familiar: a mesma idea de caras e de empurrar e tirar, as mesmas letras de ferramenta, unha caixa de valores onde escribir sen facer clic, inferencia cos eixos vermello, verde e azul, grupos, compoñentes, un Esquema, Información da entidade e escenas. Esta páxina indica o que se corresponde directamente e, o que é máis importante, o que non.

## Hábitos que se manteñen

| Está afeito a | En ModelCraft |
|---|---|
| Prema Space para Seleccionar, L para Liña, R para Rectángulo, C para Círculo | Igual: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Prema P para Empurrar/tirar, M para Mover, Q para Xirar, S para Escalar, E para Goma, T para Fita métrica | Igual: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Prema O para Orbitar, H para Desprazar, Z para Zoom, Shift+Z para Zoom a todo | Igual: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Prema G para crear un compoñente | Igual: {{key:G}}. {{key:Shift+G}} crea un grupo |
| Escriba na caixa de medidas sen facer clic nela | Igual, na caixa de valores de abaixo. Prema {{key:Enter}} |
| Escriba `4m,3m` para un rectángulo, `12s` para os lados | Igual |
| Escriba `3x` ou `/3` despois dunha copia con Mover | Igual; `*3` tamén funciona |
| Escriba `[x,y,z]` ou `<dx,dy,dz>` para un punto ou un desprazamento | Igual |
| Escriba un número simple nun modelo en pulgadas arquitectónicas e obteña pulgadas | Igual |
| Arrastre co botón central para orbitar, Shift con botón central para desprazar, roda para facer zoom no cursor | Igual |
| Clic doble con Empurrar/tirar para repetir a distancia | Igual |
| Teclas de frecha para bloquear vermello, verde, azul e paralelo | Igual: {{key:Right}} vermello, {{key:Left}} verde, {{key:Up}} azul, {{key:Down}} paralelo |
| Manter Shift para bloquear unha inferencia | Igual |
| Ctrl (Option nun Mac) para copiar mentres se move | {{key:Ctrl}}, {{key:Mod}} ou {{key:Alt}}, en calquera computador |
| Shift para alternar, Ctrl para engadir, Shift+Ctrl para quitar da selección | As mesmas teclas; nun Mac use {{key:Mod}} onde diga Ctrl |
| Xanela de esquerda a dereita, cruzamento de dereita a esquerda | Igual |
| Unha ferramenta Cota para etiquetar lonxitudes | {{key:D}}, e máis: escriba unha lonxitude nova nunha cota e o modelo redimensionarase a ela. Ver [Cota e redimensionado](topic:dimensions) |
| Clic dobre sobre unha cara para a cara máis as aresas; triple clic para todas as conectadas | Igual |
| Clic dobre sobre un grupo para editalo; Esc para pechar | Igual |
| Debuxar unha liña sobre unha cara para dividila; borrar unha aresta entre caras coplanares para unilas | Igual |
| Empurrar un rectángulo de xanela a través dun muro para cortalo | Igual |
| Caras traseiras en azul grisáceo; Inverter caras | A mesma cor; {{ui:Inverter cara}} en {{ui:Información da entidade}} |
| Escenas como lapelas sobre a vista, Page Up e Page Down | Igual, con {{ui:Reproducir}} no panel {{ui:Escenas}} |
| Sombras segundo a data, a hora, a latitude e a lonxitude, con norte en verde | Igual, no panel {{ui:Estilo}} |

## Diferenzas que sorprenden

### Gardar é unha descarga

Non hai un Gardar que sobrescriba o ficheiro aberto, non hai un diálogo Gardar como con nome, non hai gardado automático nin ficheiro de copia. {{ui:Gardar}} ({{key:Mod+S}}) descarga un ficheiro `.modelcraft` novo cada vez, normalmente na súa cartafol de descargas. Garde a miúdo, e cambie o nome ou mova os ficheiros vostede mesmo. Ver [Abrir, gardar, importar e exportar](topic:files).

### Importa ficheiros .skp, pero non os garda

{{ui:Importar}} le ficheiros de SketchUp co lector propio de ModelCraft, na páxina: grupos, compoñentes, cores, texturas nas caras, etiquetas e aresas suaves pasan ao modelo. Ver [Formatos de ficheiro en detalle](topic:formats#skp-files). ModelCraft non pode gardar `.skp`: para volver atrás, exporte Collada desde ModelCraft e impórteo en SketchUp.

### Sen menú do botón dereito

Arrastrar co botón dereito despraza; un clic dereito non fai nada. Os comandos que atoparía no menú contextual están en {{ui:Información da entidade}} ({{ui:Inverter cara}}, {{ui:Editar}}, {{ui:Desagrupar}}, {{ui:Facer único}}, {{ui:Crear compoñente}}) e no grupo {{ui:Organizar}} da barra de ferramentas.

### As unidades viven na barra de estado

Non hai Información do modelo nin escolla de plantilla. O selector de unidades está abaixo á dereita. Un modelo novo comeza en pés e polgadas en Estados Unidos e en milímetros no resto do mundo, segundo a configuración de idioma do navegador. Os decimais sempre levan punto: `2.5m`, nunca `2,5m`, porque a coma sempre separa valores.

### A pintura ten materiais propios

{{ui:Pintar}} ({{key:B}}) pinta cores sólidas e os materiais da sección {{ui:Materiais}}: ladrillo, revestimento, cuberta, madeira, pedra e máis, debuxados por ModelCraft. Aínda non pode cargar unha imaxe propia como material; as texturas que chegan con ficheiros importados consérvanse. Ver [Pintar con cores e materiais](topic:paint).

### A escala é uniforme, sen agarradores

Escalar non mostra unha caixa con agarradores. Prema o punto que se mantén fixo, un punto de referencia, e logo o novo tamaño ou un factor escrito. Escala sempre por igual en todas as direccións. Para estirar nunha soa dirección, empurre/tire ou mova unha cara, volva escribir o ancho, o fondo ou a altura dun grupo en {{ui:Información da entidade}}, ou [redimensione cunha cota](topic:dimensions).

### Xirar escolle o seu plano segundo onde preme

Non hai un transportador que se pegue ás caras mentres move con teclas de frecha para escoller o plano. Prema o centro sobre unha cara para xirar no plano desa cara, ou sobre o chan para xirar sobre a vertical. As teclas de frecha orbitan a vista antes do primeiro clic.

### Inferencia desde puntos por onde pasa

ModelCraft encaixa nas direccións dos eixes desde **o seu punto de inicio**, e nos puntos, aresas e caras baixo o punteiro. Non segue unha dirección desde un punto só sobrevolado (a inferencia punteada de «punto de partida»). Para alinearse cunha esquina lonxana, bloquee o eixo cunha tecla de frecha e sobrevoe esa esquina: o punto bloqueado desprázase para alinearse con ela. Ou coloque unha [guía](topic:guides-measure).

### Paralelo usa a aresta que pasou antes de comezar

A inferencia paralela e perpendicular usa a última aresta que o punteiro cruzou **antes do primeiro clic**, non as aresas que sobrevoa mentres debuxa. Ver [Inferencia e encaixe](topic:inference#parallel-and-perpendicular).

### As copias dun grupo están ligadas

Copiar un grupo con {{ui:Mover}} crea unha segunda colocación do mesmo grupo, así que editar un muda ambos, como cos compoñentes. SketchUp fai os grupos independentes. Ver [Solución de problemas](topic:troubleshooting#editing-one-group-changed-another).

### Space non despraza

{{key:Space}} escolle {{ui:Seleccionar}}, como en SketchUp. Noutras aplicacións web, manter Space preme despraza; aquí non. Arrastrar co botón dereito despraza no seu lugar.

### O desprazamento con dous dedos fai zoom

Nun trackpad, en {{ui:Configuración}} › {{ui:ModelCraft}} › Desprazamento, estableza Trackpad: dous dedos orbitan, {{key:Shift}} e dous dedos desprazan, un pinzamento fai zoom. Ver [Orbitar, desprazar e facer zoom](topic:orbit-pan-zoom#on-a-trackpad).

Se as súas mans coñecen as teclas de Blender e non as de SketchUp, escolla o estilo de menú {{ui:Modelador}}: {{key:G}}, {{key:R}} e {{key:S}} actúan sobre a selección á vez, {{key:E}} extruye (empurrar/tirar), {{key:Shift+D}} duplica, e unha barra de menú superior (Ficheiro, Editar, Vista, Seleccionar, Engadir, Obxecto, Malla) substitúe a barra de ferramentas. Se vén de SketchUp, o estilo {{ui:Empurrar/tirar}} dá unha barra de menú parecida á súa sobre as mesmas letras de ferramenta. Ver [Menús, teclas e rato](topic:menus-keys-and-mouse).

### Os sólidos empurrados un contra outro non se cortan

Empurrar/tirar corta a cara posterior do mesmo obxecto, pero dous sólidos separados empurrados un contra outro non se cruzan. Non hai Intersecar caras nin Ferramentas de sólidos.

### Que falta

Á man alzada, Recortar, Dividir e Casca exterior, as súas propias imaxes como materiais, extensións e unha ferramenta de maquetación para follas non están nesta versión. [Aínda non construído](topic:not-built-yet) indica que facer no seu lugar.

## Atallos que garda o navegador

ModelCraft funciona nun navegador, así que algúns atallos pertencen ao navegador, non á aplicación. {{key:Mod+N}} abre unha xanela do navegador (use {{ui:Novo}}), e {{key:Mod+W}} pecha a lapela. Se ten cambios sen gardar, o navegador pregunta antes de pechar. Ver [Teclas, ratos e trackpads](common:keys#shortcuts-the-browser-keeps).
