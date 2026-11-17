---
title: Orbitar, desprazar e facer zoom
summary: Muévase ao redor do modelo cun rato, un trackpad, unha pantalla táctil ou o teclado, e salte ás vistas estándar.
keywords: orbitar, desprazar, zoom, pulsación longa, tres dedos, dous dedos, toque, navegar, cámara, vista, xirar vista, trackpad, tacto, pinza, botón central, zoom extensións, perspectiva, paralela, vista superior, isométrica
from: 10d4d33a
---

Pode mover a cámara en calquera momento, mesmo no medio de debuxar unha liña ou empurrar unha cara: a ferramenta espera onde estaba.

## Cun rato de tres botóns

| Para | Faga isto |
|---|---|
| Orbitar | Arrastre co botón central (prema a roda) |
| Desprazar | Arrastre co botón dereito, ou manteña premida {{key:Shift}} e arrastre co botón central. Premer ou soltar {{key:Shift}} durante un arrastre alterna entre orbitar e desprazar |
| Facer zoom | Xire a roda. Faino cara á cara baixo o punteiro, ou cara ao punto baixo el á profundidade do centro da vista |
| Ver o modelo completo | {{key:Shift+Z}} ou {{ui:Extents}} |

Orbitar xira a vista arredor da parte do modelo baixo o punteiro, así que ese punto permanece onde está mentres todo xira ao seu redor. Sobre o espazo baleiro xira ao redor do centro da vista. Desprazar mantén o punto que agarrou baixo o punteiro.

Para orbitar sempre ao redor do centro da vista, ou para facer máis rápido ou máis lento orbitar e desprazar, abra {{ui:Settings}} ({{key:Mod+,}}), lapela {{ui:ModelCraft}}, **Orbitar e desprazar**. As velocidades aplícanse ao rato, ao trackpad, ao tacto e ás teclas de frecha.

Un clic dereito sen arrastrar non fai nada; ModelCraft non ten menú de clic dereito.

## Sen botón central

Use as ferramentas de cámara da barra de ferramentas, ou o teclado:

1. Prema {{key:O}} (ou prema {{ui:Orbit}}) e arrastre co botón esquerdo para orbitar. Manteña {{key:Shift}} durante o arrastre para desprazar.
2. Prema {{key:H}} (ou prema {{ui:Pan}}) e arrastre para desprazar.
3. Prema {{key:Z}} (ou prema {{ui:Zoom}}) e arrastre cara arriba para achegar, cara abaixo para afastar.
4. Prema {{key:Space}} para volver a {{ui:Select}}, ou prema a tecla da ferramenta que queira a continuación.

As ferramentas de cámara substitúen a ferramenta que estaba usando. Para mirar ao redor no medio dunha operación sen perdela, use o teclado:

- As teclas de frecha orbitan.
- {{key:Shift}} con teclas de frecha despraza.

Mentres unha ferramenta de debuxo está no medio dunha operación (despois do seu primeiro clic), as teclas de frecha bloquean direccións en vez de orbitar. Vexa [Inferencia e axuste](topic:inference#lock-a-direction).

## Nun trackpad

O máis sinxelo: abra {{ui:Settings}} ({{key:Mod+,}}), lapela {{ui:ModelCraft}}, e estableza Rolado en **Trackpad** (ou déixeo en «Calcular automaticamente»). Logo pase dous dedos para orbitar, manteña {{key:Shift}} e pase para desprazar, e faga pinza para facer zoom — sen botóns de cámara. Vexa [Configuración de ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

Con Rolado configurado en **Roda do rato**:

:::mac
- **Zoom:** role con dous dedos, ou faga pinza. Ambos fan zoom cara ao punteiro.
- **Desprazar:** prema con dous dedos (un clic secundario) e manteña os dedos abaixo mentres arrastra. Active «Clic secundario» en **Configuración do sistema**, logo **Trackpad**, se o clic con dous dedos non fai nada.
- **Orbitar:** prema {{key:O}} e arrastre cun dedo, ou use as teclas de frecha.
- Manter {{key:Ctrl}} premida ao facer clic pode non contar como clic dereito en ModelCraft, segundo o navegador: pode actuar como un clic con {{key:Ctrl}} premida. Use a presión con dous dedos para desprazar.
:::

:::windows linux
- **Zoom:** role con dous dedos. A pinza tamén fai zoom onde o controlador do trackpad a envía como desprazamento con {{key:Ctrl}}.
- **Desprazar:** arrastre co botón dereito (en moitos trackpads, prema a esquina inferior dereita e arrastre), ou prema {{key:H}} e arrastre.
- **Orbitar:** prema {{key:O}} e arrastre, ou use as teclas de frecha.
:::

Con Roda do rato, o desprazamento con dous dedos fai zoom; non despraza. É o contrario de moitas páxinas web, e así se comporta a roda do rato na maioría dos modeladores 3D.

:::tip
{{key:Space}} escolle a ferramenta {{ui:Select}} en ModelCraft. Manter {{key:Space}} premida e arrastrar non despraza, como ocorre noutras aplicacións.
:::

## Nunha pantalla táctil

:::touch
- **Un dedo** usa a ferramenta actual: **toque** para facer clic, **prema e arrastre** para debuxar ou arrastrar.
- Mentres o dedo dunha ferramenta de debuxo está baixo, unha **lupa** sobre el mostra o que hai debaixo, así que pode ver o extremo, o punto medio ou o bordo ao que se axusta antes de levantar.
- **Manteña quieto** medio segundo para rematar o que fai a ferramenta, como fai {{key:Enter}}: unha curva, unha cadea de liñas. Sen nada en curso, manter quieto e logo arrastrar co mesmo dedo **orbita** ata que o levante.
- **Dous dedos** arrastrados xuntos **desprazan**; **pinza** para facer zoom. Ambos funcionan nun mesmo xesto.
- **Tres dedos** arrastrados xuntos **orbitan**.
- Para intercambialos (dous dedos orbitan, tres desprazan), abra {{ui:Settings}}, lapela {{ui:ModelCraft}}, Pantalla táctil.
- Poñer un segundo dedo **cancela** o que comezou o primeiro (un rectángulo a medio debuxar, un empurrar/tirar en curso). Levante os dedos e comece de novo.
- Unha pequena barra na parte inferior da vista ten **Feito** ({{key:Enter}}), **Cancelar** ({{key:Esc}}) e **Desfacer**, para cando non hai teclado.
- O axuste e a selección chegan un pouco máis lonxe que cun rato, e os botóns son máis grandes, para que un dedo os poida tocar.
:::

:::mouse
Nunha pantalla táctil, un dedo usa a ferramenta actual (toque para facer clic, manteña quieto para rematar, ou manteña quieto e arrastre para orbitar), dous dedos desprazan e fan pinza para facer zoom, tres dedos orbitan, e unha pequena barra ofrece Feito, Cancelar e Desfacer.
:::

## Vistas estándar

1. Prema {{ui:Views}} no extremo dereito da barra de ferramentas.
2. Escolla {{ui:Iso}}, {{ui:Top}}, {{ui:Front}}, {{ui:Right}}, {{ui:Back}}, {{ui:Left}} ou {{ui:Bottom}}.

A vista xira a esa dirección e axústase a todo o modelo. {{ui:Front}} mira ao norte, ao longo do eixe verde; {{ui:Top}} mira directamente cara abaixo con norte arriba.

O cubo de vistas na parte superior dereita da vista fai o mesmo nun clic, ademais de bordos e esquinas, un anel de brúxula para xirar o modelo e un botón de inicio. Vexa [O cubo de vistas](topic:view-cube).

## Perspectiva e proxección paralela

Escolla {{ui:Views}}, logo {{ui:Perspective}}. Unha marca de verificación indica que a perspectiva está activada. Desactivada, a vista é unha proxección paralela (ortográfica): as liñas paralelas do modelo seguen paralelas na pantalla, o que é o que quere para alzados desde {{ui:Front}} ou {{ui:Right}}. A barra de estado di «Perspectiva.» ou «Proxección paralela.»

Cada escena lembra se estaba en perspectiva. Vexa [Gardar vistas como escenas](topic:scenes).
