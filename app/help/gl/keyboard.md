---
title: Teclas e accións do rato
summary: Cada atallo de teclado, acción do rato, xesto do trackpad e xesto táctil de ModelCraft, agrupados polo que fan.
keywords: teclado, atallos, teclas, teclas rápidas, rato, trackpad, tacto, xestos, chuleta, ctrl, comando, teclas de flecha
from: e2348957
---

Estas son as teclas de empurrar/tirar, coas que ModelCraft arranca. Para o outro estilo, consulte [Teclas Modeler](topic:keyboard#modeler-keys) máis abaixo e [Configuración de ModelCraft](topic:settings).

Os atallos funcionan cando a vista 3D ou un botón da barra de ferramentas ten o foco. Se acaba de escribir nun campo do panel ou de cambiar unha lista en {{ui:Style}}, faga clic primeiro na vista 3D, ou as teclas irán a ese campo. Consulte [Teclas, ratos e trackpads](common:keys) para ver como se escriben as teclas en cada ordenador.

## Ferramentas

| Tecla | Ferramenta |
|---|---|
| {{key:Space}} | {{ui:Select}} |
| {{key:L}} | {{ui:Line}} |
| {{key:R}} | {{ui:Rectangle}} |
| {{key:C}} | {{ui:Circle}} |
| {{key:N}} | {{ui:Polygon}} |
| {{key:A}} | {{ui:Arc}} |
| {{key:F}} | {{ui:Offset}} |
| {{key:B}} | {{ui:Paint}} |
| {{key:P}} | {{ui:Push/pull}} |
| {{key:M}} | {{ui:Move}} |
| {{key:Q}} | {{ui:Rotate}} |
| {{key:S}} | {{ui:Scale}} |
| {{key:E}} | {{ui:Eraser}} |
| {{key:T}} | Medida con {{ui:Tape}} |
| {{key:D}} | {{ui:Dimension}} |
| {{key:O}} | {{ui:Orbit}} |
| {{key:H}} | {{ui:Pan}} |
| {{key:Z}} | {{ui:Zoom}} |

As letras das ferramentas funcionan só sen teclas modificadoras: {{key:Shift}} cunha letra non fai nada, salvo as dúas de abaixo.

## Modelo e ficheiro

| Tecla | Fai |
|---|---|
| {{key:G}} | Crear un compoñente coa selección |
| {{key:Shift+G}} | Crear un grupo coa selección |
| {{key:Shift+Z}} | Zoom a todo o modelo |
| {{key:Mod+Z}} | Desfacer |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | Refacer |
| {{key:Mod+S}} | Gardar (descarga o ficheiro `.modelcraft`) |
| {{key:Mod+O}} | Abrir un modelo |
| {{key:Mod+A}} | Seleccionar todo (no grupo aberto, se hai un aberto) |
| {{key:Mod+C}} | Copiar a selección |
| {{key:Mod+X}} | Cortar a selección |
| {{key:Mod+V}} | Pegar: a copia segue o punteiro; faga clic onde debe ir |
| {{key:Mod+Shift+V}} | Pegar no mesmo sitio (de onde se copiou) |
| {{key:Mod+D}} | Duplicar: unha copia segue o punteiro; faga clic para deixala |
| {{key:Delete}} ou {{key:Backspace}} | Borrar a selección |
| {{key:PageDown}} / {{key:PageUp}} | Escena seguinte / anterior |
| {{key:F1}} | Abrir ou pechar esta axuda (tamén {{ui:Help}} na barra da aplicación; {{key:Esc}} dentro da axuda a pecha) |
| {{key:Ctrl+Shift+F}} | Modo de pantalla: pantalla completa, despois barras ocultas, despois normal (Control tamén nun Mac) |

## Esc

{{key:Esc}} retrocede un nivel cada vez que se preme:

1. Cancela o que a ferramenta está facendo (unha liña en debuxo, un empurrar/tirar, un movemento). Todo volve ao seu sitio.
2. Cambia a {{ui:Select}}.
3. Limpa a selección.
4. Pecha o grupo que está editando.

Tamén detén as escenas que se reproducen. Na caixa de valor, {{key:Esc}} borra o que escribiu e volve á vista.

## Mentres unha ferramenta traballa

| Tecla | Fai |
|---|---|
| Un díxito, ou un de `. , - ' " [ < * /` | Comeza a escribir na caixa de valor |
| {{key:Enter}} | Aplica o que escribiu na caixa de valor |
| {{key:Right}} | Bloquea ao eixo vermello (prema de novo para desbloquear) |
| {{key:Left}} | Bloquea ao eixo verde |
| {{key:Up}} | Bloquea ao eixo azul |
| {{key:Down}} | Bloquea en paralelo á última aresta sobre a que pasou antes do primeiro clic |
| Manter premido {{key:Shift}} | Mantén a dirección á que está encaixado, mentres estea premido |
| {{key:Ctrl}}, {{key:Mod}} ou {{key:Alt}} (Move) | Alterna entre mover e copiar |

Os bloqueos coas teclas de flecha funcionan en {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Polygon}}, {{ui:Move}}, {{ui:Scale}} e {{ui:Tape}} (ao medir desde un punto), despois do primeiro clic. {{ui:Push/pull}} sempre se move na dirección da cara e non ten bloqueos. En {{ui:Rotate}}, as teclas de flecha amosan unha mensaxe "Bloqueado" despois do primeiro clic, pero non cambian o xiro.

## Teclas de flecha en outros momentos

Cando ningunha ferramenta está a meio dun traballo, as teclas de flecha moven a cámara:

| Tecla | Fai |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Orbitar |
| {{key:Shift}} cunha flecha | Desprazar |

## Rato

| Acción | Fai |
|---|---|
| Clic | Usa a ferramenta actual |
| Premer, arrastrar, soltar | Igual que dous clics (para ferramentas de debuxo); unha selección por xanela (para {{ui:Select}}); borra polo camiño (para {{ui:Eraser}}) |
| Dobre clic | {{ui:Select}}: cara coas súas arestas, aresta coas súas caras, abre un grupo; espazo baleiro pecha o grupo. {{ui:Push/pull}}: repite a última distancia |
| Triple clic | {{ui:Select}}: todo o conectado |
| {{key:Shift}} + clic | {{ui:Select}}: alterna dentro e fóra da selección |
| {{key:Mod}} + clic | {{ui:Select}}: engade á selección |
| {{key:Shift}} + {{key:Mod}} + clic | {{ui:Select}}: quita da selección |
| Arrastre co botón central | Orbitar, con calquera ferramenta |
| {{key:Shift}} + arrastre co botón central | Desprazar, con calquera ferramenta |
| Arrastre co botón dereito | Desprazar, con calquera ferramenta |
| Rodela | Zoom cara ao punteiro |

Non hai menú co botón dereito.

## Trackpad

O que fai un deslizamento con dous dedos depende de {{ui:Settings}} › {{ui:ModelCraft}} › Scrolling:

| Xesto | Trackpad (ou deducido) | Rodela do rato |
|---|---|---|
| Deslizamento con dous dedos | Orbitar | Zoom cara ao punteiro |
| {{key:Shift}} + deslizamento con dous dedos | Desprazar | Zoom |
| Pinza | Zoom cara ao punteiro | Zoom cara ao punteiro |
| Premer con dous dedos e arrastrar (clic secundario mantido) | Desprazar | Desprazar |

Consulte [Orbitar, desprazar e zoom](topic:orbit-pan-zoom#on-a-trackpad) e [Configuración de ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Teclas Modeler

Con {{ui:Settings}} › {{ui:ModelCraft}} › Controis configurado en estilo Modeler:

| Tecla | Fai |
|---|---|
| {{key:W}} ou {{key:Space}} | {{ui:Select}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Line}} / {{ui:Rectangle}} / {{ui:Circle}} / {{ui:Polygon}} |
| {{key:E}} | {{ui:Push/pull}} (extrudir) |
| {{key:T}} | {{ui:Tape}} (medir) |
| {{key:D}} | {{ui:Dimension}} |
| {{key:G}} | Mover a selección de inmediato, desde o punteiro |
| {{key:R}} | Xirar a selección sobre o seu centro (eixo azul) |
| {{key:S}} | Escalar a selección sobre o seu centro |
| {{key:X}} / {{key:Y}} / {{key:Z}} mentres move ou xira | Bloquea o eixo vermello / verde / azul (de novo para desbloquear) |
| Clic ou {{key:Enter}} | Deixar no sitio |
| {{key:Esc}} ou clic dereito | Devolver ao sitio |
| {{key:Shift+D}} | Duplicar e mover a copia |
| {{key:X}} ou {{key:Delete}} | Borrar a selección |
| {{key:A}} / {{key:Alt+A}} | Seleccionar todo / non seleccionar nada |
| {{key:Tab}} | Abrir o grupo ou compoñente seleccionado; de novo para pechalo |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Crear grupo / crear compoñente |
| Teclado numérico {{key:1}} / {{key:3}} / {{key:7}} | Vista de fronte / dereita / superior ({{key:Mod}} para atrás / esquerda / inferior) |
| Teclado numérico {{key:5}} | Perspectiva activada ou desactivada |
| Teclado numérico {{key:.}} | Zoom á selección |
| {{key:Home}} ou {{key:Shift+C}} | Zoom a todo o modelo |
| {{key:Shift+Tab}} | Encaixe activado ou desactivado |
| Arrastre co botón central / con {{key:Shift}} / con {{key:Mod}} | Orbitar / desprazar / zoom |
| {{key:Alt}} + arrastre / {{key:Alt+Shift}} + arrastre | Orbitar / desprazar (sen necesidade do botón central) |

Copiar, pegar, desfacer, gardar e abrir conservan as teclas listadas enriba. Os valores escritos, a caixa de valor e {{ui:Push/pull}} funcionan igual nos dous estilos.

## Pantalla táctil

| Xesto | Fai |
|---|---|
| Toque | Un clic coa ferramenta actual |
| Dobre toque | Un doble clic |
| Premer, arrastrar, levantar | Igual que premer, arrastrar, soltar co rato |
| Dous dedos: pinza | Zoom |
| Dous dedos: mover xuntos | Desprazar (en {{ui:Settings}} › {{ui:ModelCraft}} › Pantalla táctil pode facerse que orbite) |
| Tres dedos: mover xuntos | Orbitar (desprazar cando dous dedos orbitan) |
| Manter un dedo quieto | Remata a ferramenta, como {{key:Enter}}; sen nada en curso, arrastre para orbitar |
| Un segundo dedo durante unha acción dun dedo | Cancela esa acción |
| Ferramenta {{ui:Orbit}}, despois arrastre un dedo | Orbitar |

Para escribir un valor nunha pantalla táctil, toque a caixa de valor na parte inferior, escriba e prema a tecla Enter (ou Ir) do teclado.

## Onde está Mover

Mover está na ferramenta {{ui:Move}}, tecla {{key:M}}: escolla o que mover, faga clic nun punto base e logo nun segundo punto, ou escriba unha distancia. Consulte [Mover, copiar e crear matrices](topic:move-copy).
