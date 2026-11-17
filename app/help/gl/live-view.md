---
title: A vista en directo
summary: Unha xanela xunto ao modelo que o mostra co aspecto en tempo real, con sol e sombras, e que segue cada cambio que fai; pasee por el e axuste a hora do día e o mes.
keywords: compartir, panorama, 360, percorrido, percorrido virtual, visor autónomo, visor sen conexión, enviar a un cliente, vídeo, vídeo de percorrido, espallado, espallar, herba, prado, bosque, rochas, plantas, árbores, multitude, pintar plantas, vista en directo, tempo real, render en tempo real, paseo, camiñar, primeira persoa, presentación, cliente, segunda pantalla, segunda xanela, monitor, hora do día, sol, estación, mes, sombras, oclusión ambiental, reflexos, luz reflectida, iluminación global, webgpu, webgl
from: fca3b0d6
---

{{ui:Exportar}} › {{ui:Vista en directo}} abre un panel sobre a aplicación que mostra o modelo co aspecto en tempo real: o ceo e o sol segundo o lugar e a data do modelo, as sombras do sol, os aspectos e materiais que lles deu ás caras, as lámpadas e a luz que rebota nas paredes e nos chans. Segue o que fai: se xira a vista, xírase tamén; se cambia o modelo, mostra o cambio un momento despois. Non se envía nada.

## Abrila

1. Escolla {{ui:Exportar}} › {{ui:Vista en directo}}. O panel abre no canto inferior dereito.
2. Arrastre a súa barra de título para movelo, e tire da súa esquina para facelo máis grande.
3. {{ui:Xanela nova}} move o panel a unha xanela propia, para unha segunda pantalla. {{ui:Exportar}} › {{ui:Vista en directo nunha xanela nova}} ábreo alí directamente. Se o navegador bloquea as xanelas emerxentes, ábrese como panel.
4. {{ui:Pechar}} pecha o panel.

## Os controis

| Control | Que fai |
|---|---|
| {{ui:Seguir a vista}} | Activado: a vista en directo mira onde mira a vista de ModelCraft. Camiñar desactívao |
| {{ui:Camiñar}} | Pasea polo modelo (máis abaixo) |
| {{ui:Gravidade}} | Mentres camiña: pisa os chans e sobe escaleiras. Desactivada: voa |
| {{ui:Hora}} | A hora do día, das 05:00 ás 21:00. O sol móvese ao arrastrar |
| {{ui:Mes}} | O mes (o día 21 del), para ver o sol no inverno e no verán |
| {{ui:Calidade}} | {{ui:Para este ordenador}} (o que obtén [o seu equipo](topic:your-machine)), ou {{ui:Baixa}}, {{ui:Media}} ou {{ui:Alta}} |

A liña inferior indica o que debuxa a vista (WebGPU ou WebGL 2), a calidade e a luz reflectida.

## Pasear polo modelo

1. Xire a vista principal cara ao lugar onde quere estar de pé e escolla {{ui:Camiñar}}. Estará no chan baixo o punto de vista da vista, a 1,6 m de altura.
2. Prema a vista en directo e logo use {{key:W}} {{key:A}} {{key:S}} {{key:D}} ou as teclas de frecha. Manteña {{key:Shift}} para correr. Arrastre para mirar ao seu arredor.
3. Pódense subir chanzos de até 40 cm (escaleiras); o que sexa máis alto é unha parede. As paredes deténno e vostede esvara ao longo delas.
4. Con {{ui:Gravidade}} desactivada, voa: {{key:E}} sobe, {{key:Q}} baixa.
5. {{key:Esc}} deixa de camiñar.

## Espallar plantas, rochas e persoas

{{ui:Espallar}} na barra da vista en directo abre o panel de espallado xunto á imaxe. Un conxunto de espallado reparte elementos da biblioteca de entorno (árbores, arbustos, herba, flores, rochas, persoas, coches) sobre unha parte do modelo. Os elementos debúxanse só na vista en directo: non son xeometría do modelo, e a vista principal non os mostra.

1. **Encha as caras:** seleccione caras (ou un grupo, como un terreo) en ModelCraft e logo escolla {{ui:Encher a selección}}. O conxunto cóbreas.
2. **Pinte:** escolla {{ui:Pintar}} e logo arrastre sobre a vista en directo. Con caras seleccionadas, a pintura cae só sobre elas; sen selección, cae sobre o que haxa baixo o pincel, incluído o chan. {{ui:Tamaño do pincel}} fixa o pincel; {{ui:Goma}} quita os puntos pintados.
3. Marque o que espallar. O número ao lado de cada un é o seu peso: 3 e 1 fan tres do primeiro por cada un do segundo.

| Control | Que fai |
|---|---|
| {{ui:Por m²}} | Cantos elementos hai en cada metro cadrado |
| {{ui:Manter afastado (m)}} | Ningún elemento máis preto que isto doutros obxectos, e ningún baixo un teito ou unha mesa. 0 desactívao |
| {{ui:Xiro (°)}} | Canto xira ao azar cada elemento ao redor da vertical |
| {{ui:Máis inclinado (°)}} | Ningún elemento onde a superficie sexa máis inclinada |
| {{ui:Tamaño}} | O tamaño máis pequeno e o máis grande, como factor do tamaño propio do elemento |
| {{ui:Altura desde, ata (m)}} | Só entre estas alturas (en branco, calquera) |
| {{ui:Inclinar coa superficie}} | 0 mantén os elementos verticais; 1 déixaos perpendiculares á pendente |
| {{ui:Semente}}, {{ui:Remesturar}} | A mesma semente dá sempre o mesmo espallado; Remesturar escolle outro |

Os conxuntos gárdanse no ficheiro .modelcraft e seguen as caras que cobren cando as cambia. O número máximo de elementos que debuxa a vista en directo depende do nivel de [o seu equipo](topic:your-machine): 20 000 para {{ui:Só procesador}}, 100 000 para {{ui:Tarxeta gráfica, básico}}, un millón para {{ui:Tarxeta gráfica, alto}}. O panel indica cantos se colocan de cantos pide a densidade: colócanse menos cando se chega ao límite, ou onde os obxectos os manteñen fóra. Os elementos próximos á cámara debúxanse tal como son; os lonxanos, como formas simples nas súas cores.

:::note
Os elementos espallados aparecen na vista en directo (e no seu paseo, nos panoramas e no visor autónomo). Renderizar unha imaxe aínda non os debuxa.
:::

## Compartir: panoramas, percorridos, un visor, un vídeo

{{ui:Compartir}} na barra da vista en directo crea ficheiros a partir dela. Todo se fai neste ordenador; non se envía nada.

| Opción | Que obtén |
|---|---|
| {{ui:Panorama de 360°}} | Unha imaxe de 360° desde onde está a vista (ou onde estea camiñando), como PNG equirectangular que abren os visores de panoramas e a maioría dos sitios de fotografía |
| {{ui:Engadir este punto ao percorrido}}, logo {{ui:Gardar o recorrido}} | Unha páxina web cun panorama en cada punto e frechas cara aos puntos que cada un pode ver (unha parede no medio oculta a frecha) |
| {{ui:Gardar un visor}} | Unha páxina web co modelo con este aspecto en tempo real: xírao, paseie por el, salte ás escenas gardadas. Ábrese sen conexión nun navegador con WebGPU ou WebGL 2, desde unha cartafol, unha memoria USB ou un correo, sen instalación e sen conta, e non carga nada da internet |
| {{ui:Vídeo do camiño}} | A traxectoria da cámara da liña de tempo (ou as escenas gardadas en orde) como vídeo con este aspecto en tempo real, co tamaño da vista en directo: WebM ou MP4 onde o navegador os poida crear, e se non, fotogramas numerados nun ZIP |

O tamaño do panorama segue a calidade: 1024, 2048 ou 4096 píxeles de ancho en Baixa, Media e Alta. Un ficheiro de visor ocupa uns 5 MB máis o modelo.

:::note
O percorrido e o visor fanse para amosar, non para editar: conservan o modelo tal como está cando os garda.
:::

## Calidade

| | Baixa | Media | Alta |
|---|---|---|---|
| Sombras do sol | un mapa de sombras | tres cascadas | catro cascadas |
| Oclusión ambiental (sombras de contacto) | | ✓ | ✓, máis fina |
| Reflexos no metal | | | ✓ |
| Resplandor (cando Renderizar unha imaxe o activa) | | ✓ | ✓ |
| Bordos suavizados | FXAA | ao longo de varios fotogramas (TAA) | ao longo de varios fotogramas (TAA) |
| Luz reflectida | grosa | máis fina | a máis fina |

{{ui:Para este ordenador}} escolle Baixa nun ordenador sen tarxeta gráfica utilizable, Media cun chip gráfico integrado e Alta cunha tarxeta gráfica separada. Baixa está pensada para un portátil de 8 GB sen tarxeta gráfica.

## Luz reflectida

A luz que rebota dunha parede iluminada ao chan, e o interior máis escuro dun cuarto, calcúlaos o mesmo trazador de camiños que fai as [imaxes renderizadas](topic:render): renderiza un pequeno panorama en puntos a través do modelo, en segundo plano e en cada núcleo do procesador. Mentres traballa, a liña inferior indica {{ui:Luz reflectida: 40 %}}; cando está lista, a vista a incorpora. Despois dun cambio, comeza de novo.

:::note
Isto é unha aproximación para unha vista en directo, non unha imaxe renderizada: os detalles pequenos entre puntos reciben a luz reflectida dos puntos próximos. Para unha imaxe acabada use [Renderizar unha imaxe](topic:render).
:::

## Brillo e cores

A vista en directo usa o mesmo brillo, balance de branco, contraste e transformación de vista (ACES, AgX, filmic ou estándar) que [Renderizar unha imaxe](topic:render): fíxeos alí e a vista en directo séguen.

:::note
Os navegadores difiren. Onde o navegador ten WebGPU (Chrome e Edge en Windows, macOS e ChromeOS, Safari 26), a vista en directo úsao; en todos os demais (a maioría dos navegadores en Linux, sistemas Apple máis antigos) usa WebGL 2 e ten o mesmo aspecto.
:::
