---
title: Renderizar unha imaxe do modelo
summary: Faga unha imaxe que pareza luz do día: ceo, sol segundo o lugar e a data do modelo, sombras suaves, aspectos de vidro e metal, e despois gárdea como PNG.
keywords: render, predefinición, predefinicións, predefinición de escena, interior, exterior, vista de sección, noite, un clic, renderizado, trazado de camiños, trazado de raios, iluminación global, reflexos, refracción, alta calidade, foto, fotorrealista, realista, imaxe, png, fixa, ceo, sol, luz do día, sombras, sombras suaves, oclusión ambiental, vidro, metal, brillante, materiais, exposición, brillo, nubrado, crepúsculo, estudio, presentación, néboa, bruma, fume, nube, volume, raios de luz, raios de Dios, cáusticas, mostraxe adaptativa, ruído
from: 517ba4d3
---

{{ui:Renderizar unha imaxe…}} fai unha imaxe da vista que parece luz do día e non un debuxo: un ceo, o sol segundo o lugar e a data do modelo, sombras suaves, luz de todo o ceo que escurece as esquinas e as fendas, e cores que poden parecer vidro, metal ou pintura brillante. O modelo non se cambia.

## Renderizar a vista

1. Prepare a vista como quere a imaxe: oriente, faga zoom, escolla unha [escena](topic:scenes), oculte o que non debe aparecer. A imaxe usa a cámara propia da vista.
2. Prema {{ui:Exportar}} no grupo {{ui:Ficheiro}} e despois {{ui:Renderizar unha imaxe…}}.
3. Escolla unha {{ui:Escena}} se a premida non é a que quere (ver [Predefinicións de escena](topic:render#scene-presets-a-good-picture-in-one-click)), escolla o {{ui:Tamaño}} e prema {{ui:Renderizar}}.

   A imaxe énchese mentres se renderiza e mellora en cada pasada. {{ui:Parar}} (ou {{key:Esc}}) remata antes e conserva a imaxe ata ese momento.

4. Prema {{ui:Gardar}} para descargala (un PNG salvo que {{ui:Gardar como}} indique outra cousa).

:::tip
Comece con {{ui:Borrador}} no {{ui:Tamaño da vista}} para comprobar a cámara e o aspecto, e despois renderice con {{ui:Boa}} ou {{ui:Mellor}} a un tamaño maior para a imaxe final.
:::

## Predefinicións de escena: unha boa imaxe nun clic

Na parte superior do diálogo hai catro botóns {{ui:Escena}}. Cada un fixa o ceo, o brillo, o chan, as liñas de aresta, a calidade e o sol cun clic, así que non hai nada que aprender antes da primeira imaxe. Prema un e despois {{ui:Renderizar}}.

| Escena | Que fixa | Para que se usa |
|---|---|---|
| {{ui:Exterior}} | Ceo despexado, o sol propio do modelo, chan activado | O edificio desde fóra |
| {{ui:Interior}} | Ceo nubrado (luz uniforme, sen manchas de sol duras), medio paso máis brillante | Unha vista desde o interior dunha habitación |
| {{ui:Vista de sección}} | Estudio branco, sen chan, liñas de aresta na renderización rápida | Un modelo cortado por unha sección |
| {{ui:Noite}} | O sol baixo (medianoite en pleno inverno para o hemisferio do lugar), un paso máis brillante | Lámpadas que iluminan o modelo. Sen lámpadas a imaxe sae escura |

- {{ui:Escoller para esta vista}} escolle por vostede: {{ui:Vista de sección}} cando un corte de sección está activo, {{ui:Interior}} cando a cámara está dentro do modelo, en caso contrario {{ui:Exterior}}. A primeira vez que abre o diálogo comeza así por si só.
- Todos os axustes seguen abaixo e poden cambiarse. Cando cambia un que fixa a escena, ningún botón queda premido e a liña debaixo dos botóns indica que os axustes son seus. Prema de novo a escena para repoñer os seus valores.
- Unha escena non toca o motor, o modo, o tamaño, os materiais, a cámara nin as lámpadas.

:::note
As escenas dan os mesmos valores en ModelCraft e en BimCraft. O aspecto da imaxe final depende do seu modelo e da súa tarxeta gráfica.
:::

## Axustes

| Axuste | Que fai |
|---|---|
| {{ui:Tamaño}} | O tamaño da vista, o dobre do tamaño da vista, Full HD, 4K ou un cadrado. Os tamaños fixos conservan a cámara da vista e mostran máis ou menos nos lados |
| {{ui:Modo}} | {{ui:Rápido}}, ou {{ui:Alta calidade (trazado de camiños)}} (abaixo) co seu {{ui:Límite de tempo}} |
| {{ui:Calidade}} | Cantas pasadas (ou, en alta calidade, mostras) se promedian: {{ui:Borrador}} 16, {{ui:Boa}} 64, {{ui:Mellor}} 256. Máis pasadas dan sombras e bordos máis suaves e tardan máis |
| {{ui:Azul celeste}} | {{ui:Ceo despexado}}, {{ui:Nubrado}} (luz suave, sombras feibles), {{ui:Crepúsculo}} (luz baixa e cálida) ou {{ui:Estudio branco}} (un fondo branco liso) |
| {{ui:Sol}} | O sol vén da data, a hora e o lugar en {{ui:Estilo}} › sol. Marque {{ui:Usar outra data e hora para esta imaxe}} para probar outra hora sen cambiar o estilo do modelo |
| {{ui:Brillo}} | Máis claro ou máis escuro, en pasos (stops) |
| {{ui:Terreo baixo o modelo}} | Un chan que recolle as sombras e se esvae no horizonte. Desactívao para un modelo que flota |
| {{ui:Debuxar arestas}} | Debuxa as arestas do modelo finas sobre a imaxe, para un aspecto de debuxo |

Cando o sol está por baixo do horizonte á hora escollida é de noite: o ceo escurece e as [lámpadas](topic:lights) do modelo o iluminan. O diálogo indícao.

Os axustes gárdanse no ficheiro `.modelcraft`, así que a seguinte imaxe do mesmo modelo comeza onde a deixou.

## Facer que as cores parezan vidro ou metal

Baixo {{ui:Materiais}}, cada cor da pantalla ten un aspecto: {{ui:Mate}}, {{ui:Satinado}}, {{ui:Brillante}}, {{ui:Metal}}, {{ui:Metal pulido}}, {{ui:Vidro}} ou {{ui:Cristal esmerilado}}. {{ui:Caras sen pintar}} son as caras que non teñen cor propia.

Para que as xanelas sexan de vidro, [pinte](topic:paint) os cristais da xanela dunha cor e despois estableza esa cor en {{ui:Vidro}}. O vidro deixa ver o ceo e o que hai detrás, tinguido pola súa cor, e reflicte o ceo.

:::note
No modo {{ui:Rápido}}, o vidro e o metal reflicten o ceo, non o resto do modelo, e a luz non se desvía ao atravesar o vidro. O modo {{ui:Alta calidade (trazado de camiños)}} máis abaixo fai as dúas cousas.
:::

## Alta calidade

Escolla {{ui:Modo}} › {{ui:Alta calidade (trazado de camiños)}} para unha imaxe que segue a luz tal como a ve unha cámara:

- a luz rebota entre as superficies, así que unha habitación iluminada por unha xanela ou por unha lámpada recibe luz por todos os lados e as cores tinguen as veciñas;
- o vidro é vidro real: a luz se desvía ao atravesalo e reflicte o modelo;
- o metal e as superficies pulidas reflicten o resto do modelo;
- os paneis de luz iluminan como paneis, con sombras suaves.

É moito máis lento que {{ui:Rápido}}: cada pasada volve trazar a luz de cada píxel. A imaxe comeza granulosa e aclara á medida que se suman as mostras, así que comece pequeno ({{ui:Tamaño da vista}}, {{ui:Borrador}}) e escolla un {{ui:Límite de tempo}}: cando se esgote, consérvase a imaxe ata ese momento. {{ui:Parar}} tamén a conserva. A primeira pasada agarda mentres o navegador prepara o trazador de camiños.

Onde o navegador ten WebGPU, o trazador de camiños é propio de CadCraft e funciona na tarxeta gráfica; a liña debaixo da imaxe indica {{ui:Trazado de camiños na tarxeta gráfica (WebGPU)}}. Despois de {{ui:Parar}} ou do límite de tempo, {{ui:Reanudar}} continúa coa mesma imaxe ata completar todas as súas mostras; cambiar un axuste ou premer de novo {{ui:Renderizar}} comeza desde cero. Sen WebGPU, a imaxe trázase con WebGL (a liña di isto) e non se ofrece {{ui:Reanudar}}.

:::linux
Firefox e a maioría das configuracións de Chrome en Linux aínda non teñen WebGPU, así que a alta calidade usa WebGL nesas configuracións.
:::

Neste modo non se debuxan as arestas, as texturas da biblioteca mostran a súa cor e rugosidade pero non os seus relevos ([un material feito con nodos](topic:shading#in-high-quality-pictures) mostra a súa normal e os seus relevos), e o corte de sección faise sobre o modelo antes de que comece a imaxe.

{{ui:Reducir o ruído (elimina o gran que queda despois das mostras)}} está activado por defecto: cando a imaxe está lista, ou detida, o gran que queda elimínase cunha rede neuronal feita para isto (a publicada por Intel Open Image Denoise, executada no seu propio ordenador: na tarxeta gráfica e, se non, no procesador). Unha imaxe con poucas mostras sae limpa; {{ui:Mostrar}} › {{ui:A imaxe antes de reducir o ruído}} mostra a imaxe tal como se renderizou.

## Renderizar na vista

O espazo de traballo {{ui:Renderizar}} executa o trazador de camiños na propia vista: oriente, edite o modelo ou cambie unha luz e comeza de novo de inmediato. {{ui:Rexión}}: arrastre un rectángulo e só el se renderiza; {{ui:Vista completa}} volve atrás. {{ui:Enfoque}}: prema no que deba estar nítido, e a profundidade de campo enfocará aí. {{ui:Detalle}} fixa cantos píxeis da vista se renderizan (menos é máis rápido). {{ui:Pausar}} detén e continúa. Necesita WebGPU: sen el, o espazo de traballo di isto, e {{ui:Exportar}} › {{ui:Renderizar unha imaxe…}} segue funcionando.

## Ceos e perfís de luz na tarxeta gráfica

Con WebGPU, a alta calidade ten dous ceos máis:

- {{ui:Ceo físico}} calcula a luz do día a partir da altura do sol: un azul profundo no cénit, unha banda pálida no horizonte e un sol que se fai máis cálido e máis tenue canto máis baixo está. {{ui:Bruma}} vai dun día moi claro (2) a un día brumoso (10).
- {{ui:Imaxe do ceo (HDRI)}} ilumina o modelo cunha imaxe panorámica dun lugar real. {{ui:Escolla unha imaxe…}} toma un ficheiro `.hdr` ou `.exr` equirrectangular; {{ui:Xirar}} xíraa arredor do modelo e {{ui:Brillo da imaxe}} fai a imaxe máis clara ou máis escura. A imaxe leva o seu propio sol, así que o sol do modelo non se engade. Consérvase só mentres a páxina está aberta: ao reabrila, escolla de novo.

Cada lámpada da lista {{ui:Lámpadas}} pode tomar un perfil de luz do fabricante: {{ui:Perfil IES…}} lee un ficheiro IES (LM-63) e a lámpada entón lanza a súa luz como o fai esa luminaria (unha lámpada empotrada estreita, un bañador de paredes). Todas as lámpadas con ese nome usan o perfil, e cada unha conserva o seu propio brillo. Prema o nome do perfil para deixar de usalo.

As xanelas de vidro transparente axudan á luz do ceo a entrar nunha habitación, así que as imaxes interiores baixo un ceo aclaran antes.

O modo {{ui:Rápido}} e o trazador de camiños WebGL mostran o {{ui:Ceo físico}} e a {{ui:Imaxe do ceo (HDRI)}} como un ceo despexado e ignoran os perfís de luz.

## A cámara

{{ui:Cámara}} prepara a imaxe como unha fotografía:

- {{ui:Exposición}}: manteña o {{ui:Control de brillo}}, ou escolla {{ui:Axustes da cámara}} e fixe a {{ui:Abertura (f-stop)}}, a {{ui:Velocidade de obturación}} e o {{ui:ISO}} como nunha cámara; o EV xunto a eles é o valor de exposición habitual. f/16 a 1/100 s e ISO 100 corresponde a un día soleado; unha escena máis escura quere unha abertura máis ampla, un obturador máis lento ou un ISO máis alto. Isto funciona en todos os modos.
- {{ui:Profundidade de campo}} esvae o que está máis preto ou máis lonxe da {{ui:Distancia de enfoque (m)}} como o faría unha lente con esa abertura (déixeo baleiro para enfocar o que está no centro da vista); {{ui:Forma da abertura}} dá aos reflexos fóra de foco unha forma redonda ou de láminas.
- {{ui:Perspectiva de dous puntos (as liñas verticais seguen verticais)}} nivela a cámara e despraza a imaxe, como o fai unha obxectiva de desprazamento arquitectónico, para que as paredes non se inclinen ao mirar cara arriba ou cara abaixo dun edificio.
- {{ui:Balance de brancos}} fixa que cor de luz se ve como branca: máis baixo (por exemplo 3000 K) para a luz cálida das lámpadas, máis alto para a sombra e os días nubrados.
- {{ui:Proxección}}: {{ui:Panorama de 360°}} fai unha imaxe 2:1 de todo o que rodea a cámara para visores de panoramas; {{ui:Panorama estéreo de 360°}} apila un panorama para o ollo esquerdo e outro para o dereito, para cascos de realidade virtual; {{ui:Mapa cúbico (6 caras)}} fai seis vistas cadradas nunha cuadrícula de 3 × 2. A largura vén de {{ui:Tamaño}}.

Proxección, profundidade de campo, perspectiva de dous puntos e balance de brancos necesitan o trazador de camiños na tarxeta gráfica (WebGPU), así que só se mostran en {{ui:Alta calidade}}.

## Rematar a imaxe

{{ui:Imaxe}} gradúa a imaxe de alta calidade como unha fotografía, e cada control cambia a imaxe rematada de inmediato, sen renderizar de novo:

- {{ui:Aspecto (transformación de vista)}}: {{ui:ACES filmic}} (a imaxe como antes), {{ui:AgX}} (máis suave, conserva a cor en luz moi brillante), {{ui:Filmic}} (unha curva de película suave) ou {{ui:Estándar}} (simple, a luz brillante recórtase en branco).
- {{ui:Contraste}} e {{ui:Compresión de luces altas}} (recupera detalle nas partes moi brillantes).
- {{ui:Bloom}} (un brillo suave arredor da luz intensa), {{ui:Resplandor}} con as súas {{ui:Raias de resplandor}} (raios en forma de estrela desde os puntos máis brillantes) e {{ui:Viñeteado}} (esquinas máis escuras).
- {{ui:Tabla de cores (.cube)…}} aplica unha graduación de cor desde un ficheiro `.cube`, coa súa {{ui:Intensidade da tabla de cores}}; como unha imaxe de ceo, consérvase só mentres a páxina está aberta.

## Gardar a imaxe

{{ui:Gardar como}} xunto a {{ui:Gardar}} escolle o ficheiro: {{ui:PNG}}, {{ui:JPEG}} ou {{ui:WebP}} para compartir (JPEG e WebP só onde o navegador os pode escribir), e tras unha renderización de alta calidade na tarxeta gráfica tamén:

- {{ui:PNG, 16 bits}}: a imaxe graduada con pasos máis finos entre tons, para imprimir ou para editar máis.
- {{ui:EXR, todas as capas (coma flotante de 32 bits)}}: a imaxe tal como se renderizou (luz lineal, sen graduación) con cada elemento de render e cada grupo de luces como capa propia, para programas de composición.
- {{ui:Ficheiro de render (.ccrender, para axustar de novo despois)}}: todo o que o diálogo precisa para mesturar e graduar a imaxe de novo. {{ui:Abrir un ficheiro de render…}} recupérao, coa súa mestura e a súa graduación, sen renderizar.

## Mesturar as luces despois do render

Active {{ui:Mestura de luces (cambie a cor e o brillo de cada luz despois do render)}} antes de premer {{ui:Renderizar}}. Cando a imaxe estea lista (ou detida), {{ui:Mesturar a imaxe}} enumera as súas luces en grupos: o ceo, o sol e as lámpadas polo nome (todas as lámpadas co mesmo nome forman un grupo). Apague un grupo, déelle unha cor ou fágao máis claro ou máis escuro, e a imaxe cambia de inmediato, sen renderizar de novo. {{ui:Gardar mestura}} conserva a mestura cun nome para escoller de novo máis tarde; {{ui:Tal como se renderizou}} volve á imaxe tal como se fixo. {{ui:Gardar}} garda a imaxe mesturada.

{{ui:Elementos de render (albedo, normais, profundidade, difusa, especular, transmisión, emisión, IDs)}} garda tamén as partes da imaxe. {{ui:Mostrar}} cambia a vista a unha delas: as cores das superficies (albedo), as normais, a profundidade, a luz difusa, especular e transmitida (cada unha directa e indirecta), o que brilla e o ceo, e unha cor por obxecto ou por material para facer máscaras.

Os dous conservan capas extra na tarxeta gráfica. En tamaños grandes a tarxeta gráfica pode non ter espazo; o diálogo di isto e un tamaño menor funciona.

## A cola de render

Despois dunha configuración de alta calidade, {{ui:Engadir esta imaxe á cola}} baixo {{ui:Cola de render}} conserva a imaxe tal como está agora; o diálogo de vídeo {{ui:Engadir esta animación á cola}} fai o mesmo cunha animación completa, trazada fotograma a fotograma. {{ui:Iniciar a cola}} renderiza unha tras outra neste ordenador, e {{ui:Gardar}} xunto a cada unha rematada descárgaa. Pechar a páxina conserva a cola: abra o mesmo modelo e continúa onde se detivo. A cola necesita WebGPU.

## Néboa, fume, ruído e cáusticas

Estes controis están en {{ui:Néboa, fume e ruído}} e funcionan en {{ui:Alta calidade}} na tarxeta gráfica; os outros motores non os inclúen.

- {{ui:Néboa e bruma}} enche o aire ata unha altura cunha néboa que o sol, o ceo e as lámpadas iluminan. {{ui:Ata onde se pode ver, en metros}} fixa o espesor (uns 100 m é unha bruma lixeira, 20 m unha néboa espesa), {{ui:Altura da néboa sobre o chan, en metros}} é onde termina, e {{ui:Raios de luz}} é canto brilla a néboa cara á luz. A luz do sol sae da néboa pola parte superior, así que onde o sol entra por unha xanela ou entre edificios se ven en forma de raios de luz.
- {{ui:Fume ou nube}} engade un volume de fume ou nube iluminado como a néboa. {{ui:Tipo}} é unha {{ui:Nube}}, unha {{ui:Columna de fume}} ou {{ui:Desde un ficheiro de volume (.ccvol)}}, o formato de rede propio de CadCraft. {{ui:Detalle}} e {{ui:Variación}} modifican unha nube ou columna feita; {{ui:Tamaño do seu lado máis longo, en metros (0 = o tamaño do modelo)}}, {{ui:Mover X (m)}}, {{ui:Mover Y (m)}}, {{ui:Mover Z (m)}} e {{ui:Xirar}} colócana (comeza no centro do modelo), {{ui:Grosor}} fai que sexa máis densa, {{ui:Brillo cara adiante}} fai que brille máis cara á luz, e {{ui:Cor}} tinxe. Un ficheiro de volume consérvase só mentres a páxina está aberta, como unha imaxe de ceo.
- {{ui:Deter antes onde a imaxe está limpa (mostraxe adaptativa)}} non dá máis mostras aos píxeis que xa se asentaron, así que o resto da imaxe remata antes. {{ui:Ruído aceptable}} é canto gran queda cando un píxel se detén. A liña debaixo da imaxe indica cantas mostras recibiu de media un píxel.
- {{ui:Cáusticas (luz desviada polo vidro ou reflectida polos espellos)}} traza a luz das lámpadas e do sol, así que a mancha brillante baixo unha esfera de vidro ou a luz dun espello sobre unha parede sae limpa e non granulosa. Está desactivada mentres estean activos a néboa, o fume, {{ui:Mesturar as luces despois do render}} ou os elementos de render, e está feita para imaxes, non para imaxes de 360°, animacións ou o espazo de traballo de Render.

## Canto tarda

A imaxe fáisea no seu propio ordenador, na súa tarxeta gráfica; non se envía nada. Canto tarda depende desa tarxeta. O tempo cresce coas pasadas e cos píxeis: {{ui:Mellor}} ten 16 veces as pasadas de {{ui:Borrador}}, e unha imaxe 4K ten uns catro veces os píxeis de Full HD. Un ordenador sen tarxeta gráfica tamén renderiza, pero máis lento.

:::note
Se o diálogo di que o navegador non pode renderizar imaxes, o navegador non ten WebGL 2. Actualícello ou active a aceleración por hardware nos seus axustes.
:::
