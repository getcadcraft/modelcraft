---
title: Estils i ombres del sol
summary: Mostreu el model ombrejat, com a línies ocultes, en filferro o transparent, i estudieu les ombres que projecta en qualsevol data, hora i lloc.
keywords: vista de presentació, vista neta, amaga les guies, amaga els eixos, estil, ombrejat, línia oculta, filferro, raigs X, arestes, ombres, sol, estudi solar, solar, data, hora, latitud, longitud, fus horari, nord
from: 09c95329
---

El tauler {{ui:Estil}} de la dreta canvia la manera com es dibuixa el model. Res del que hi ha no canvia el model en si, i no forma part de desfer. Cada [escena](topic:scenes) recorda el seu propi estil, i el fitxer recorda l'estil que teníeu quan el vau desar.

## Cares

Trieu-ne un a la llista {{ui:Cares}}:

| Estil | Aspecte |
|---|---|
| {{ui:Ombrejat}} | Cares sòlides, amb llum suau. Les cares vistes des de darrere són gris blavós. Es mostren els colors importats. |
| {{ui:Línia oculta}} | Cares del color de fons amb arestes en tinta: un dibuix de línies net, amb les línies ocultes eliminades. Blanc sobre {{ui:Paper}}, fosc sobre {{ui:Model}}. |
| {{ui:Filferro}} | Només arestes. Les cares no es dibuixen, però compten quan feu clic i quan ajusteu: no podeu seleccionar a través d'elles. |
| {{ui:Raigs X}} | Cares transparents, per veure el que hi ha darrere o a dins. Igual que en filferro, els clics i els ajustos s'aturen a la cara més propera. |

{{ui:Mostra les arestes}} activa o desactiva les arestes en tots els estils excepte {{ui:Filferro}}. Amb l'opció desactivada, {{ui:Línia oculta}} gairebé no mostra res, ja que les seves cares coincideixen amb el color de fons. Les arestes suaus, com els costats d'un cercle estirat, mai no es dibuixen.

## Activa les ombres del sol

1. Marqueu {{ui:Ombres del sol}}. Els paràmetres del sol que hi ha a sota s'activen, i el model projecta ombres sobre si mateix i sobre el terra.
2. Definiu el lloc:
   - {{ui:Latitud}}: el nord és positiu, el sud negatiu (Nova York és cap a 40,7, Sydney cap a -33,9).
   - {{ui:Longitud}}: l'est és positiu, l'oest negatiu (Nova York és cap a -74,0).
   - {{ui:Desfasament UTC}}: el desfasament del lloc respecte de l'UTC en hores, com ara `-5` per a Nova York a l'hivern. ModelCraft no aplica l'horari d'estiu; useu `-4` per a Nova York a l'estiu.
3. Definiu la {{ui:Data}} (mes i dia) i arrossegueu el control lliscant de {{ui:Hora}}. L'hora avança en passos de 15 minuts i es mostra al costat del control lliscant, com ara «3:00 pm».

Una línia sota els paràmetres indica on és el sol, com ara «Sol 52° amunt, 250° des del nord. El nord és l'eix verd.». De nit diu «El sol és a sota en aquest moment.».

Un model nou comença amb el sol el 21 de juny a les 3:00 pm, amb latitud 40, longitud -105 i desfasament UTC -7.

## Oriente el model cap al nord

El nord de ModelCraft és sempre l'**eix verd**. Per estudiar un lloc real, gireu el model perquè el seu costat nord miri al llarg del verd: seleccioneu-ho tot ({{key:Mod+A}}), premeu {{key:Q}}, feu clic en un centre al terra, i gireu-lo l'angle del lloc respecte del nord (vegeu [Gira i escala](topic:rotate-scale)).

## Un estudi solar

1. Definiu el lloc i la data.
2. Afegiu una escena ({{ui:Afegeix una escena}} a {{ui:Escenes}}).
3. Mogueu el control lliscant de l'hora i després afegiu-ne una altra. Repetiu-ho per a cada hora que vulgueu.
4. Feu clic a {{ui:Reprodueix}} per recórrer-les. Vegeu [Desa vistes com a escenes](topic:scenes).

## Coses a tenir en compte

- Les ombres poden semblar dentades en un model molt gran, ja que un únic mapa d'ombres cobreix tot el model.
- Les ombres no es dibuixen en {{ui:Filferro}}.
- La posició del sol segueix el càlcul solar de la NOAA i és precisa a una fracció de grau, cosa més que suficient per als estudis de volums. La refracció atmosfèrica no es té en compte, de manera que els angles del sol molt baixos a la sortida i a la posta poden ser lleugerament inexactes.

## Vista de presentació

{{ui:Vistes}} › {{ui:Vista de presentació}} (o {{key:Shift+P}}) mostra només el model: se'n van els eixos, les línies guia i els punts guia, els contorns dels plans de secció (el tall es manté), les marques de les llums, la caixa d'un grup obert, les marques i les suggerències d'ajust, i el ressaltat de la selecció. Feu-la servir per veure el model amb claredat, o abans de fer una captura de pantalla. Les eines continuen funcionant, i continuen ajustant; només no es veuen les marques. Premeu de nou {{key:Shift+P}} per tornar-les a mostrar. Les cotes es mantenen, perquè formen part del dibuix. Mentre editeu dins d'un grup, la resta del model ja no s'esvaeix: es mostra tal com és, amb les textures incloses.
