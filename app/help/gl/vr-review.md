---
title: Revisar o modelo cun visor de VR
summary: Percorra o modelo a tamaño real cun visor de VR: salte, xire, mida, corte, coloque incidencias con unha imaxe, vexa o modelo como maqueta sobre unha mesa e atope aos demais nunha sesión en directo.
keywords: vr, realidade virtual, visor, webxr, xr, inmersivo, quest, oculus, vive, index, pico, percorrer, percorrido, teletransporte, revisión de deseño, revisión, medir, sección, cortar, incidencia, incidencias, bcf, sobre de mesa, maqueta a escala, presenza, avatares, en directo, xuntos
from: fa2f591a
---

{{ui:Revisar en VR}} sítao dentro do modelo cun visor de VR, a tamaño real. Vostede queda onde está a cámara da vista, sobre o chan que hai baixo ela, mirando na mesma dirección. Non se envía nada: o visor amosa o que o navegador debuxa neste ordenador (ou no navegador propio do visor).

## O que precisa

- Un visor que o navegador poida manexar (WebXR): o navegador propio dun visor independente, ou Chrome ou Edge nun PC cun visor conectado.
- ModelCraft aberto nunha páxina segura (https), tal como está neste sitio.

Sen visor, {{ui:Revisar en VR}} aparece en gris e di por que.

## Iniciar

1. Prepare a vista desde onde quere comezar: nunha sala, ou fóra mirando o edificio.
2. Prema {{ui:Vistas}} no grupo {{ui:Cámara}}, logo {{ui:Revisar en VR}}.
3. Póñase o visor.

O menú está na parte de atrás da man esquerda. Apúntelo co mando dereito e prema o gatillo para escoller un botón. (Con só unha man, o menú flota diante de onde comezou.)

## Como se ve

O visor amosa o modelo co aspecto da [vista en directo](topic:live-view): os aspectos e materiais que deu ás caras, o ceo e o sol segundo o lugar e a data do modelo con a súa sombra, lámpadas, plantas e rochas dispersas, e a luz que rebota en muros e chans (calculada neste ordenador mentres mira ao seu redor, e seguindo os seus movementos). O brillo e a transformación de vista (ACES ou AgX) son os de [Renderizar unha imaxe](topic:render). Canto debuxa depende do que teña o navegador do visor, como no escritorio; a oclusión ambiental, os reflexos e o resplandor quedan no escritorio.

## Moverse

- **Saltar:** en {{ui:Mover}}, apunte a un chan e prema o gatillo; aterra alí. Ou empurre a palanca cara adiante para apuntar, e solte para saltar. Só pode aterrar en chans e terreo (superficies que miran cara arriba), nunca nun muro.
- **Xirar:** empurre a palanca á esquerda ou á dereita: xira 30° cada vez.
- **Andar:** na súa zona de xogo, simplemente camiñe.

## Medir

Escolla {{ui:Medir}} e prema o gatillo en dous puntos. A distancia amósase entre eles, nas unidades do modelo. Un punto preto dunha esquina encaixa nela.

## Cortar

Escolla {{ui:Sección}} e prema o gatillo sobre unha superficie:

- sobre un muro (ou calquera cousa que non sexa un chan): todo o que hai entre vostede e esa superficie córtase, así que vé dentro. Funciona mellor desde fóra, ou a través dunha sala;
- sobre un chan, desde enriba: un corte en planta a 1,2 m sobre ese chan, para que os muros amosen a súa parte inferior.

{{ui:Limpar}} quita o corte e as medidas. Se un plano de sección corta o modelo na vista ao comezar, o visor comeza con el.

## Colocar unha incidencia

Escolla {{ui:Incidencia}} e prema o gatillo onde está o problema. Un alfinete numerado o marca, e ModelCraft garda a incidencia cunha imaxe do que viu e de onde estaba. Cando sae de VR, as incidencias están na lista {{ui:Incidencias}} á dereita:

- o botón do ollo amosa a incidencia desde onde se colocou;
- {{ui:Gardar como BCF}} descarga todas como ficheiro BCF, que abren os programas de revisión BIM (con cámara e imaxe incluídas);
- tamén se gardan no ficheiro `.modelcraft`.

Engadir un comentario a unha incidencia despois de saír de VR, nun programa BCF: escribir no visor aínda non está feito.

## Velo como maqueta sobre mesa

{{ui:Sobre mesa}} reduce o modelo para encaixalo nunha mesa diante de vostede; camiñe ao seu redor, ou xírello coa palanca. {{ui:Tamaño real}} devólvelle ao lugar onde estaba.

## Con outros, en directo

Nunha [sesión en directo](topic:work-live), todos no VR ven aos demais como unha cabeza e dúas mans nunha cor propia, co seu nome, e un punto onde cada un apunta. As edicións de calquera chegan ao seu visor en pouco tempo. As persoas na mesa de traballo aínda non se amosan no visor.

## Saír

Escolla {{ui:Saír de VR}} (ou quite o visor e remate alí a sesión). A vista na pantalla vai ata onde estaba a súa cabeza.

:::note
Probado só cun emulador de visor, aínda non cun visor real. Un modelo grande pode facer que o visor se entrecorte: oculte antes o que non precise ([ocultar e illar](topic:hide-isolate)).
:::
