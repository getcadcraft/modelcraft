---
title: Animar a cámara e os obxectos, e renderizar un vídeo
summary: Crear chaves para a cámara e para grupos e compoñentes nunha liña de tempo, reproducilas na vista e renderizar a animación como vídeo WebM co ceo, o sol e os materiais do renderizador.
keywords: animación, animar, liña de tempo, fotograma clave, chaves, imaxe clave, trazado da cámara, percorrido, recorrido, percorrer, vídeo, película, filme, webm, renderizar vídeo, imaxes, velocidade de imaxe, fps, cabezal de reprodución, chave automática, suavizar, manter, escenas, secuencia png, movemento
from: d3a58249
---

A **liña de tempo** move a cámara e calquera grupo ou compoñente ao longo do tempo. Creas **chaves** (onde está algo nun momento concreto); ModelCraft move o obxecto suavemente de chave en chave. Repróduza na vista e logo renderízao como vídeo co mesmo ceo, sol, materiais e lámpadas que [unha imaxe renderizada](topic:render).

## Abrir a liña de tempo

Prema {{ui:Vistas}} no grupo {{ui:Cámara}} e logo en {{ui:Liña de tempo de animación}}. A liña de tempo ábrese baixo a vista: os controis na parte superior, despois unha fila **Cámara** e unha fila para cada grupo ou compoñente que se move. Os rombos son chaves; a liña vermella é o **cabezal de reprodución**, o momento que se amosa na vista.

:::touch
En teléfono a liña de tempo tamén se abre baixo a vista. Os seus controis ocupan unha soa fila: deslízaa de lado para chegar ao resto; o botón que pecha a liña de tempo queda ao final.
:::

Arrastre o control deslizante (ou prema nunha fila) para mover o cabezal de reprodución. {{ui:Reproducir}} reproduce desde o cabezal e cambia a {{ui:Pausar}} mentres reproduce; prema de novo para parar no punto onde está. {{key:Space}} fai o mesmo mentres a liña de tempo está aberta (con ela pechada, Space segue sendo Seleccionar). {{ui:Chave anterior}} e {{ui:Chave seguinte}} saltan entre chaves. Un estilo propio pode dar a reproducir e pausar outra tecla: {{ui:Configuración}}, despois os menús, as teclas e o rato, o comando *Reproducir ou pausar a animación*.

## Mover a cámara

1. Mova o cabezal ata onde comeza a toma (0 s), prepare a vista e prema {{ui:Cámara clave}}.
2. Mova o cabezal máis tarde (por exemplo, 4 s), oriente, desprace ou percorra a vista ata a seguinte posición e prema {{ui:Cámara clave}} de novo.
3. Engada as chaves que queira e logo prema {{ui:Reproducir}}.

A cámara pasa suavemente por cada chave e comeza e acaba en repouso.

:::tip
Xa ten [escenas](topic:scenes)? {{ui:Desde as escenas}} crea o trazado da cámara a partir delas: mantense en cada escena e logo move cara á seguinte. Se a liña de tempo non ten chaves, {{ui:Renderizar vídeo…}} faino por si mesma, así que bastan dúas escenas ou máis para un vídeo de percorrido.
:::

## Mover un grupo ou compoñente

1. Seleccione o grupo ou compoñente (só se moven os grupos e compoñentes completos; [cree un grupo](topic:groups-components) primeiro).
2. A 0 s, prema {{ui:Chave seleccionada}}.
3. Mova o cabezal máis tarde, [mova, xire ou escale](topic:move-copy) o grupo ata onde debe estar e prema {{ui:Chave seleccionada}} de novo.

Deslízase, xira e crece entre as súas chaves. As rotacións toman o camiño curto.

**Chave automática** evita o clic do paso 3: mentres {{ui:Chave automática}} estea activada, un grupo ou compoñente seleccionado que mova, xire ou escale recibe unha chave no cabezal por si mesmo (e, a primeira vez, unha chave a 0 s no lugar onde estaba).

:::note
Mover un grupo animado sen chave só dura ata que o cabezal se move: a próxima vez que reproduza ou arrastre o cabezal, volve ao lugar onde o sitúan as súas chaves. A barra de estado indícao. Prema {{ui:Chave seleccionada}} para conservalo.
:::

## Cambiar chaves

- **Elixa unha chave** premendo o seu rombo: o cabezal vai até ela.
- **Mova unha chave** arrastrando o seu rombo pola súa fila, ou con {{key:Left}} e {{key:Right}} (un fotograma; con {{key:Shift}}, dez).
- **Elimine** con {{ui:Eliminar chave}} (a chave elixida, ou todas as chaves do cabezal) ou con {{key:Delete}} sobre un rombo elixido.
- **Como segue**, para a chave elixida: {{ui:Suavizar}} (unha curva polas chaves próximas), {{ui:Constante}} (unha liña recta a unha velocidade), {{ui:Lenta ao entrar e ao saír}} (detense nesta chave) ou {{ui:Manter}} (queda quieta ata a seguinte chave).
- **Lonxitude (s)** fixa a duración da animación; unha chave posta despois do final alárgaa. Para acortala, mova ou elimine antes as chaves que pasan do novo final.
- O **×** na fila dun grupo deixa de animalo.

A liña de tempo ten o seu propio {{ui:Desfacer}} e {{ui:Refacer}}: o desfacer do modelo ({{key:Mod+Z}}) cambia o modelo, non as chaves. A animación gárdase no ficheiro `.modelcraft`. Ao pechar a liña de tempo, os grupos que se moven volven á súa primeira pose.

## Renderizar o vídeo

1. Prema {{ui:Renderizar vídeo}} na liña de tempo (ou {{ui:Exportar}} › {{ui:Renderizar vídeo…}}).
2. Escolla o {{ui:Tamaño}}, a {{ui:Velocidade de imaxe}}, a {{ui:Calidade de cada imaxe}} e o {{ui:Ficheiro}}.
3. Prema {{ui:Renderizar vídeo}}. Cada imaxe amósase ao facerse, co tempo que falta.
4. Cando remate, prema {{ui:Gardar vídeo}}.

{{ui:Parar}} (ou {{key:Esc}}) termina antes; {{ui:Gardar vídeo}} entón conserva as imaxes xa feitas como un vídeo máis curto.

O ceo, o sol, os materiais, as lámpadas e o brillo son os fixados en {{ui:Renderizar unha imaxe…}}: fíxeos alí primeiro, comprobando unha imaxe fixa. Cada imaxe se renderiza neste computador; non se sube nada.

| Axuste | Que fai |
|---|---|
| {{ui:Tamaño}} | 480p, 720p HD, 1080p Full HD, ou a forma propia da vista (ata 1920 píxeles de ancho) |
| {{ui:Velocidade de imaxe}} | 24, 25, 30 ou 60 imaxes por segundo. O dobre de imaxes tarda o dobre |
| {{ui:Calidade de cada imaxe}} | {{ui:Rápido}} (4 pasadas), {{ui:Borrador}} (16) ou {{ui:Boa}} (64): máis pasadas dan sombras e bordos máis suaves |
| {{ui:Ficheiro}} | {{ui:Vídeo WebM}}, {{ui:Vídeo MP4 (H.264)}} onde o navegador o pode escribir, ou {{ui:Imaxes PNG, unha por imaxe (ZIP)}} para editores de vídeo (e para navegadores sen codificador de vídeo) |

:::tip
Un vídeo de 10 segundos a 30 imaxes por segundo son 301 imaxes. Probe primeiro {{ui:Rápido}} a 480p para comprobar o movemento, e logo renderice {{ui:Borrador}} ou {{ui:Boa}} nun tamaño maior.
:::

WebM reprodúcese en navegadores e en VLC, e os editores de vídeo convírtenno. {{ui:Vídeo MP4 (H.264)}} ofrécese onde o navegador o pode escribir. {{ui:Renderizar vídeo}} usa o renderizador rápido; para trazar camiños en cada imaxe, escolla {{ui:Engadir esta animación á cola}} no mesmo diálogo: as imaxes renderízanse na [cola de renderizado](topic:render#the-render-queue), que necesita WebGPU.

:::firefox safari
Renderizar un vídeo necesita un navegador que codifique vídeo por si mesmo (WebCodecs): Chrome, Edge, Firefox e Safari 17 recentes o fan. Sen iso, escolla {{ui:Imaxes PNG, unha por imaxe (ZIP)}}.
:::

## Cousas que hai que saber

- Só se moven os grupos e compoñentes completos. As caras, as aresas, a hora do sol e o estilo aínda non cambian ao longo do tempo.
- {{ui:Exportar animación}} en [Escenas](topic:scenes) segue gravando a vista tal como está na pantalla, en tempo real; {{ui:Renderizar vídeo}} renderiza cada imaxe con ceo, sombras e materiais.
