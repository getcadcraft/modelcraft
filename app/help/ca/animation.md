---
title: Anima la càmera i els objectes, i renderitza un vídeo
summary: Definiu claus per a la càmera i per als grups i components en una línia de temps, reproduïu-les a la vista i renderitzeu l'animació en un vídeo WebM amb el cel, el sol i els materials del renderitzador.
keywords: animació, anima, línia de temps, fotograma clau, claus, fotograma clau, camí de la càmera, sobrevol, recorregut, passeig, vídeo, pel·lícula, film, webm, renderitza vídeo, fotogrames, velocitat de fotogrames, fps, capçal de reproducció, clau automàtica, suavitza, suau, manté, escenes, seqüència PNG, moviment
from: d3a58249
---

La **línia de temps** mou la càmera i qualsevol grup o component al llarg del temps. Definiu **claus** (on és alguna cosa en un moment determinat); ModelCraft el mou suaument d'una clau a la següent. Reprodueixi-la a la vista i després renderitzeu-la en un vídeo amb el mateix cel, sol, materials i llums que [una imatge renderitzada](topic:render).

## Obrir la línia de temps

Feu clic a {{ui:Vistes}} al grup {{ui:Càmera}} i després a {{ui:Línia de temps d'animació}}. La línia de temps s'obre sota la vista: els controls a la part superior, i després una fila **Càmera** i una fila per a cada grup o component que es mogui. Els rombes són claus; la línia vermella és el **capçal de reproducció**, el moment que es mostra a la vista.

:::touch
En un telèfon, la línia de temps també s'obre sota la vista. Els seus controls són en una sola fila: llischeu-la de costat per arribar a la resta; el botó que la tanca es queda al seu extrem.
:::

Arrossegueu el control lliscant (o feu clic en una fila) per moure el capçal de reproducció. {{ui:Reprodueix}} reprodueix des del capçal de reproducció i es converteix en {{ui:Pausa}} mentre sona; feu-hi clic de nou per aturar-la on és. {{key:Space}} fa el mateix mentre la línia de temps és oberta (amb la línia de temps tancada, Space continua sent Selecciona). {{ui:Clau anterior}} i {{ui:Clau següent}} salten entre claus. Un estil propi pot assignar una altra tecla a reproduir i pausar: {{ui:Configuració}}, després els menús, les tecles i el ratolí, l'ordre *Reprodueix o pausa l'animació*.

## Moure la càmera

1. Moveu el capçal de reproducció fins on comença la presa (0 s), prepareu la vista i feu clic a {{ui:Clau de càmera}}.
2. Moveu el capçal de reproducció més endavant (per exemple, 4 s), feu orbitar, desplaçar o caminar la vista fins a la següent posició, i torneu a fer clic a {{ui:Clau de càmera}}.
3. Afegiu tantes claus com vulgueu i després {{ui:Reprodueix}}.

La càmera passa suaument per cada clau i comença i acaba en repòs.

:::tip
Ja teniu [escenes](topic:scenes)? {{ui:Des d'escenes}} crea el camí de la càmera a partir d'elles: es manté a cada escena i després es mou cap a la següent. Si la línia de temps no té cap clau, {{ui:Renderitza vídeo…}} ho fa automàticament, de manera que dues escenes o més bastan per a un vídeo de recorregut.
:::

## Moure un grup o un component

1. Seleccioneu el grup o component (només es mouen els grups i components sencers; [feu un grup](topic:groups-components) primer).
2. A 0 s, feu clic a {{ui:Clau de la selecció}}.
3. Moveu el capçal de reproducció més endavant, [mogueu, gireu o escaleu](topic:move-copy) el grup fins on ha d'anar, i torneu a fer clic a {{ui:Clau de la selecció}}.

Llisca, gira i creix entre les seves claus. Els girs prenen el camí més curt.

**Clau automàtica** estalvia el clic del pas 3: mentre {{ui:Clau automàtica}} és activada, un grup o component seleccionat que moveu, gireu o escaleu rep una clau al capçal de reproducció per si mateix (i, la primera vegada, una clau a 0 s on era).

:::note
Moure un grup animat sense clau només dura fins que el capçal de reproducció es mou: la pròxima vegada que reproduïu o desplaceu el capçal, torna on el posen les seves claus. La barra d'estat ho indica. Premeu {{ui:Clau de la selecció}} per conservar-lo.
:::

## Canviar les claus

- **Triar una clau** fent clic al seu rombe: el capçal de reproducció hi va.
- **Moure una clau** arrossegant el seu rombe al llarg de la fila, o amb {{key:Left}} i {{key:Right}} (un fotograma; amb {{key:Shift}}, deu).
- **Suprimir** amb {{ui:Suprimeix la clau}} (la clau triada, o totes les claus del capçal de reproducció) o amb {{key:Delete}} sobre un rombe triat.
- **Com es mou cap a la següent**, per a la clau triada: {{ui:Suavitza}} (una corba que passa per les claus del voltant), {{ui:Constant}} (una línia recta a una velocitat fixa), {{ui:Lenta a l'inici i al final}} (s'atura en aquesta clau) o {{ui:Manté}} (es queda quieta fins a la següent clau).
- **Durada (s)** fixa la durada de l'animació; una clau definida després del final l'allarga. Per escurçar-la, primer moveu o suprimiu les claus que hi ha després del nou final.
- La **×** de la fila d'un grup atura la seva animació.

La línia de temps té el seu propi {{ui:Desfés}} i {{ui:Refés}}: el desfer del model ({{key:Mod+Z}}) canvia el model, no les claus. L'animació es desa al fitxer `.modelcraft`. En tancar la línia de temps, els grups que es mouen tornen a la seva primera postura.

## Renderitzar el vídeo

1. Feu clic a {{ui:Renderitza vídeo}} a la línia de temps (o a {{ui:Exporta}} › {{ui:Renderitza vídeo…}}).
2. Trieu la {{ui:Mida}}, la {{ui:Velocitat de fotogrames}}, la {{ui:Qualitat de cada fotograma}} i el {{ui:Fitxer}}.
3. Feu clic a {{ui:Renderitza vídeo}}. Cada fotograma es mostra a mesura que es fa, amb el temps que falta.
4. Quan acabi, feu clic a {{ui:Desa el vídeo}}.

{{ui:Atura}} (o {{key:Esc}}) acaba abans de temps; {{ui:Desa el vídeo}} llavors conserva els fotogrames ja fets com un vídeo més curt.

El cel, el sol, els materials, les llums i la brillantor són els que es defineixen a {{ui:Renderitza una imatge…}}: definiu-los primer, comprovant una imatge fixa. Cada fotograma es renderitza en aquest ordinador; no es puja res.

| Ajust | Què fa |
|---|---|
| {{ui:Mida}} | 480p, 720p HD, 1080p Full HD, o la forma pròpia de la vista (fins a 1920 píxels d'amplada) |
| {{ui:Velocitat de fotogrames}} | 24, 25, 30 o 60 fotogrames per segon. El doble de fotogrames triga el doble |
| {{ui:Qualitat de cada fotograma}} | {{ui:Ràpida}} (4 passades), {{ui:Esborrany}} (16) o {{ui:Bona}} (64): més passades donen ombres i vores més suaus |
| {{ui:Fitxer}} | {{ui:Vídeo WebM}}, {{ui:Vídeo MP4 (H.264)}} quan el navegador el pot escriure, o {{ui:Imatges PNG, una per fotograma (ZIP)}} per als editors de vídeo (i per als navegadors sense codificador de vídeo) |

:::tip
Un vídeo de 10 segons a 30 fotogrames per segon són 301 fotogrames. Proveu primer {{ui:Ràpida}} a 480p per comprovar el moviment, i després renderitzeu amb {{ui:Esborrany}} o {{ui:Bona}} a una mida més gran.
:::

El WebM es reprodueix en navegadors i a VLC, i els editors de vídeo el converteixen. {{ui:Vídeo MP4 (H.264)}} s'ofereix quan el navegador el pot escriure. {{ui:Renderitza vídeo}} fa servir el renderitzador ràpid; per fer traçat de camins de cada fotograma, trieu {{ui:Afegeix aquesta animació a la cua}} al mateix diàleg: els fotogrames es renderitzen a la [cua de renderitzat](topic:render#the-render-queue), que necessita WebGPU.

:::firefox safari
Renderitzar un vídeo necessita un navegador que codifiqui el vídeo per si mateix (WebCodecs): els Chrome, Edge, Firefox i Safari 17 recents ho fan. Sense això, trieu {{ui:Imatges PNG, una per fotograma (ZIP)}}.
:::

## Coses que cal saber

- Només es mouen els grups i components sencers. Les cares, les arestes, el temps del sol i l'estil encara no canvien amb el temps.
- {{ui:Exporta l'animació}} sota [Escenes](topic:scenes) encara registra la vista tal com és a la pantalla, en temps real; {{ui:Renderitza vídeo}} renderitza cada fotograma amb cel, ombres i materials.
