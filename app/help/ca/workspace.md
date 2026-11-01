---
title: La pantalla de ModelCraft
summary: Un recorregut per la barra d'eines, els taulers de cada costat, la vista 3D i la barra d'estat, pels seus noms a la pantalla.
keywords: pantalla, disposició, barra d'eines, taulers, esquema, informació de l'entitat, estil, escenes, barra d'estat, caixa de valor, unitats, interfície, recorregut
from: 4a9a4516
---

De dalt a baix: la barra de l'aplicació, la barra d'eines, les tres columnes (taulers de l'esquerra, vista 3D, taulers de la dreta) i la barra d'estat.

## La barra de l'aplicació

La barra prima de dalt de tot pertany a totes les aplicacions de CadCraft. Té el nom i la versió de l'aplicació, {{ui:Quant a ModelCraft}}, el botó de mode de pantalla, i el commutador {{ui:Paper}} / {{ui:Model}}.

- {{ui:Paper}} és el tema clar i {{ui:Model}} el fosc. La vista 3D canvia els seus colors per coincidir; el teu model no canvia.
- El botó de mode de pantalla (al principi diu {{ui:Pantalla completa}}) i {{key:Ctrl+Shift+F}} recorren tres modes: normal, pantalla completa, i pantalla completa amb les barres amagades. Amb les barres amagades, apunta a la vora de dalt de la pantalla (o toca-la) per tornar-les a mostrar. {{key:Esc}} surt de la pantalla completa.

:::note
{{key:Ctrl+Shift+F}} fa servir la tecla Control en tots els ordinadors, també al Mac. A l'iPhone, on els navegadors no tenen pantalla completa, el botó només amaga i mostra les barres.
:::

## La barra d'eines

La barra d'eines es divideix en grups amb etiqueta. Passa el punter per sobre d'un botó per veure'n el nom i la tecla.

A l'esquerra, la llista {{ui:Espai de treball}} canvia la finalitat de la barra d'eines i del tauler de la dreta: {{ui:Model}} (modelat amb prem/estira, el recorregut de més avall), {{ui:Malla}} ([edita una malla](topic:mesh-edit)), {{ui:Corba}} ([objectes de corba](topic:curves)), {{ui:UV}} ([disposa les UV](topic:uv)), {{ui:Escultura}} ([esculpeix](topic:sculpt)), {{ui:Ombrejat}} ([materials fets amb nodes](topic:shading)), {{ui:Anima}} ([anima](topic:animate)) i {{ui:Renderitza}} ([renderitza a la vista](topic:render#render-in-the-view)).

| Grup | Botons |
|---|---|
| Fitxer | {{ui:Nou}}, {{ui:Obre}}, {{ui:Desa}}, {{ui:Importa}}, {{ui:Exporta}} (un menú de formats) |
| Dibuix | {{ui:Línia}} ({{key:L}}), {{ui:Rectangle}} ({{key:R}}), {{ui:Cercle}} ({{key:C}}), {{ui:Polígon}} ({{key:N}}) |
| Modifica | {{ui:Selecciona}} ({{key:Space}}), {{ui:Prem/Estira}} ({{key:P}}), {{ui:Mou}} ({{key:M}}), {{ui:Gira}} ({{key:Q}}), {{ui:Escala}} ({{key:S}}), {{ui:Esborrador}} ({{key:E}}), {{ui:Cinta}} ({{key:T}}) |
| Organitza | {{ui:Component}} ({{key:G}}), {{ui:Grup}} ({{key:Shift+G}}), {{ui:Descompon}} |
| Edita | {{ui:Desfés}} ({{key:Mod+Z}}), {{ui:Refés}} ({{key:Mod+Y}}), {{ui:Copia}} ({{key:Mod+C}}), {{ui:Enganxa}} ({{key:Mod+V}}), {{ui:Més}} (un menú: retalla, copia, enganxa, enganxa al mateix lloc {{key:Mod+Shift+V}}, duplica {{key:Mod+D}}, suprimeix, selecciona-ho tot, neteja la selecció, i l'estil de tecles) |
| Càmera | {{ui:Òrbita}} ({{key:O}}), {{ui:Desplaça}} ({{key:H}}), {{ui:Zoom}} ({{key:Z}}), {{ui:Extensió}} ({{key:Shift+Z}}), {{ui:Vistes}} (un menú) |

Les tecles que es mostren són les de prem/estira; amb l'estil Modelador triat a [la configuració de ModelCraft](topic:settings), els consells mostren aquelles tecles en lloc d'aquestes. L'eina que fas servir apareix premuda. En una pantalla estreta, la barra d'eines es desplaça lateralment.

El menú {{ui:Vistes}} té {{ui:Iso}}, {{ui:Superior}}, {{ui:Davant}}, {{ui:Dreta}}, {{ui:Darrere}}, {{ui:Esquerra}} i {{ui:Inferior}}, cadascun ajustat al model, i {{ui:Perspectiva}}, que canvia entre projecció en perspectiva i projecció paral·lela.

## La vista 3D

El mig de la pantalla. Les línies vermella, verda i blava són els eixos: la vermella i la verda es troben a terra, la blava apunta amunt, i el **nord és l'eix verd**. On es troben és l'origen.

- En començar, una targeta titulada "Comença a modelar" enumera les primeres tecles. Desapareix quan tries una eina de dibuix o fas clic a la vista.
- Mentre una eina treballa, la vista mostra **marcadors d'inferència**: petites formes de colors on el punter es fixa (un cercle verd en un extrem, un de cian en un punt mitjà, un quadrat vermell en una aresta, un rombe blau en una cara). Consulta [Inferència i referència a objectes](topic:inference).
- Les coses seleccionades es tornen blaves. Una cara vista des de darrere és de color blau-grisós.
- Quan obres un grup per editar-lo, tot el que és fora s'esvaeix, i els eixos es mouen als eixos propis del grup.
- Quan un model té escenes, apareix una fila de pestanyes d'escena a la part superior de la vista.
- Deixa un fitxer en qualsevol lloc de la vista per obrir-lo o importar-lo.

## Els taulers de l'esquerra

**{{ui:Esquema}}** llista els grups i components del model, imbricats com ho estan al model. Un component usat més d'una vegada mostra quants cops, com "Finestra (4)".

- Fes clic a un nom per seleccionar-lo. Fes doble clic per obrir-lo per editar.
- **Cerca pel nom** (es mostra quan hi ha dos o més grups) deixa només les files el nom de les quals coincideix, amb els grups on són. {{key:Esc}} la neteja.
- L'**ull** al final d'una fila amaga o mostra aquell grup o component (com fa {{ui:Edita}} › {{ui:Més}} › {{ui:Amaga}}). Una icona d'etiqueta vol dir que està amagat per la seva [etiqueta](topic:tags).
- **Canvia el nom al lloc:** fes clic a una fila, després prem {{key:F2}}, escriu, i prem {{key:Enter}} ({{key:Esc}} manté el nom antic).
- **Arrossega una fila** sobre la part central de la fila d'un altre grup per moure-la dins d'aquell grup; sobre la vora superior o inferior d'una fila per posar-la just abans o després d'aquella fila; o sobre la capçalera de {{ui:Esquema}} per moure-la al nivell superior. Es queda on és al model, i conserva el seu color, la seva etiqueta i el seu nom. Un grup no pot anar dins de si mateix. Cada moviment és un pas per desfer. Consulta [Reordena a l'Esquema](topic:groups-components#rearrange-in-the-outliner).
- Mentre edites dins d'un grup, una línia diu "Editant: Model › …", i apareix un botó {{ui:Tanca el grup}}. Tanca tots els nivells oberts de cop.

**{{ui:Components}}** llista cada definició de component amb quantes còpies s'han col·locat ("3×") i un botó {{ui:Col·loca}} que afegeix una altra còpia on facis clic.

## Els taulers de la dreta

**{{ui:Informació de l'entitat}}** descriu el que està seleccionat. La seva capçalera canvia per dir què és:

| Capçalera | Mostra | Botons |
|---|---|---|
| Model (res seleccionat) | Cares, arestes, grups, components i quants se n'han col·locat, guies, mida global | {{ui:Suprimeix totes les guies}} (quan hi ha guies) |
| Cara | Àrea, nombre de forats | {{ui:Inverteix la cara}} |
| Aresta | Longitud | cap |
| Grup o component | Nom (escriu per canviar-lo), quantes vegades s'ha col·locat, si és un sòlid tancat, el seu volum, la seva mida | {{ui:Edita}}, {{ui:Descompon}}, {{ui:Feu-lo únic}} (un component col·locat més d'una vegada), {{ui:Crea un component}} (un grup) |
| Punt de guia o línia de guia | res | {{ui:Suprimeix}} |
| Diverses coses | Quantes cares, arestes, grups i guies, l'àrea total de les cares | {{ui:Crea un component (G)}}, {{ui:Crea un grup (Shift+G)}} |

**{{ui:Estil}}** defineix com es dibuixa el model: {{ui:Cares}} ({{ui:Ombrejat}}, {{ui:Línia oculta}}, {{ui:Filferro}}, {{ui:Raigs X}}), {{ui:Mostra les arestes}}, i {{ui:Ombres del sol}} amb la data, l'hora i el lloc del sol. Consulta [Estils i ombres del sol](topic:styles-shadows).

**{{ui:Escenes}}** desa vistes: {{ui:Afegeix una escena}}, la llista d'escenes, i {{ui:Anterior}}, {{ui:Reprodueix}} i {{ui:Següent}}. Consulta [Desa vistes com a escenes](topic:scenes).

## La barra d'estat

Al llarg de la part inferior, d'esquerra a dreta:

1. **La pista**: què vol l'eina a continuació, o a què s'està enganxant el punter ("Extrem", "Sobre l'eix vermell").
2. **Missatges**: què acaba de passar ("S'ha desfet prem/estira.", "S'ha importat site.dxf: 1697 arestes a terra, en un grup.") o per què alguna cosa no ha funcionat.
3. **La caixa de valor**: la seva etiqueta canvia amb l'eina ({{ui:Longitud}}, {{ui:Dimensions}}, {{ui:Radi}}, {{ui:Costats}}, {{ui:Distància}}, {{ui:Angle}}, {{ui:Escala}}, {{ui:Desfasament}}). Mostra la mida en viu mentre treballes, i accepta el que escriguis. Consulta [Escriu mides exactes a la caixa de valor](topic:value-box).
4. **L'estil de tecles**: {{ui:Tecles: Prem/Estira}} o {{ui:Tecles: Modelador}} canvia alhora les dreceres de teclat i els botons del ratolí (igual que a [la configuració de ModelCraft](topic:settings)).
5. **{{ui:Pas}} i {{ui:Col·lisió}}**: el pas als punts, les arestes i els eixos, i els sòlids que s'aturen quan es toquen. Ratllat = desactivat. Fes clic per canviar-ho. Consulta [La configuració de ModelCraft](topic:settings).
6. **El selector d'unitats**: en quines unitats es mostren les longituds. Consulta [Comença: comprova les unitats](topic:getting-started#check-the-units-first).

## En una pantalla estreta

Per sota d'uns 760 píxels d'amplada (un telèfon, o una finestra estreta), la vista 3D ocupa tota la pantalla. La barra d'eines és una sola fila que es desplaça lateralment, i els taulers s'obren com a fulls des de la barra de la part inferior de la pantalla.
