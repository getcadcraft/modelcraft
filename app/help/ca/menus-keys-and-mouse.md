---
title: Menús, tecles i ratolí
summary: Trieu un estil de menú que coincideixi amb el modelador que ja coneixeu, doneu a qualsevol ordre la vostra pròpia tecla, moveu ordres entre menús, i definiu què fan la roda i els botons central i dret del ratolí.
keywords: estil de menú, menús, barra de menús, barra d'eines, dreceres de teclat, dreceres, tecles, estil de tecles, mapa de tecles, personalitza, reassigna, reassignar, ratolí, roda, invertir, direcció del zoom, botó central, botó dret, orbita, desplaça, exporta, importa, canvi, familiar, prem/estira, modelador
from: e56fce3d
---

Les eines de ModelCraft són les mateixes per on hi arribeu. Un **estil de menú** decideix on es troben a la pantalla, com es diuen allà i quines tecles les executen. Trieu-ne un a {{ui:Settings}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Menus, keys and mouse}}; el canvi és immediat, i aquest navegador el recorda.

## Els estils

| Estil | Què obteniu |
|---|---|
| {{ui:ModelCraft}} | La barra d'eines pròpia de ModelCraft (Fitxer, Dibuixa, Modifica, Organitza, Edita, Càmera) i les seves tecles d'una lletra: {{key:L}} línia, {{key:R}} rectangle, {{key:P}} prem/estira, {{key:M}} mou, {{key:Q}} gira, {{key:S}} escala, {{key:E}} esborrador, {{key:O}} orbita. El punt de partida. |
| {{ui:Push-pull}} | Una barra de menús (Fitxer, Edita, Visualitza, Càmera, Dibuixa, Eines, Finestra) sobre una fila de les eines principals, amb les mateixes tecles d'una lletra. |
| {{ui:Modeler}} | Una barra de menús a la capçalera (Fitxer, Edita, Visualitza, Selecciona, Afegeix, Objecte, Malla) i les tecles dels modeladors de malles: {{key:W}} selecciona, {{key:G}} agafa, {{key:R}} gira i {{key:S}} escala la selecció alhora ({{key:X}}, {{key:Y}} o {{key:Z}} bloqueja un eix mentre es mou), {{key:E}} prem/estira, {{key:B}} rectangle, {{key:X}} suprimeix, {{key:A}} selecciona-ho tot, {{key:Alt+A}} res, {{key:Shift+D}} duplica, {{key:Mod+G}} grup, {{key:H}} amaga. El botó central orbita; {{key:Shift}} i el botó central desplacen; {{key:Mod}} i el botó central fan zoom; el botó dret cancel·la el que fa una eina. |
| {{ui:Beginner}} | Una cinta on la pestanya {{ui:Make}} és uns quants botons grans: formes per col·locar, forats, mou, gira i mida, alinea, {{ui:Group}} (els forats es retallen a les formes) i la comprovació per a impressió 3D; totes les altres eines són a la pestanya {{ui:More tools}}. El botó dret orbita, el botó central desplaça. Vegeu [L'estil Principiant](topic:beginner). |

La tria d'estil de tecles que potser coneixeu de {{ui:Keys}} a la part inferior dreta de la vista, i de {{ui:Edit}} › {{ui:More}}, és la mateixa: triar les tecles del modelador allà tria l'estil {{ui:Modeler}}, i triar les tecles de prem/estira el deixa a l'estil {{ui:ModelCraft}}. Si havíeu triat les tecles del modelador en una versió anterior, ModelCraft s'obre una vegada, per si sol, en l'estil {{ui:Modeler}}.

:::tip
Una tecla que pertany a les tecles de prem/estira però que el vostre estil assigna a una altra ordre no fa res, i la línia d'estat indica on ha anat la seva ordre ("Al Modelador, Prem/estira és E"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i les fletxes conserven sempre el seu significat, els números van sempre a la caixa de valor, i mentre una eina mou alguna cosa, les seves pròpies tecles guanyen.
:::

## Fes-la teva

1. Trieu l'estil més proper al que voleu, i després feu clic a {{ui:Customize…}}.
2. A {{ui:Keys and menus}}, cerqueu una ordre (el quadre de cerca ajuda). Feu clic a {{ui:Add a key}} i premeu la tecla. Feu clic a una tecla per treure-la.
3. Amb una barra de menús, {{ui:Where it sits}} mou l'ordre a un altre menú, o a {{ui:Keys only}}.
4. A {{ui:Mouse}}, definiu la roda i què fan els botons a la vista 3D.
5. Doneu-li un nom i feu clic a {{ui:Save}}.

Desar un estil integrat crea una còpia pròpia ("My Modeler"); l'integrat no canvia mai. La vostra còpia llegeix les tecles igual que l'estil del qual parteix: una feta a partir de {{ui:Modeler}} manté les tecles d'agafar, girar i escalar funcionant alhora.

## Ratolí

- **Roda del ratolí**: {{ui:Scroll up zooms in}} (el punt de partida) o {{ui:Scroll up zooms out}}, i a quina velocitat. Un pinçament al coixinet tàctil sempre fa zoom segons es mouen els dits.
- **Arrossegament a la vista 3D**: {{ui:Each view's own}} manté els botons de ModelCraft (el botó central orbita, el botó dret o {{key:Shift}} i el botó central desplacen). O bé definiu els botons central i dret per orbitar, desplaçar, fer zoom o no fer res; {{key:Shift}} amb el botó intercanvia orbitar i desplaçar. El botó esquerre sempre pertany a l'eina en ús.
- **Coixinets tàctils**: {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Scrolling}} encara decideix si dos dits orbiten (coixinet tàctil) o fan zoom (ratolí). Vegeu [Orbita, desplaça i fes zoom](topic:orbit-pan-zoom).

## Emporteu-la

{{ui:Export}} desa l'estil en ús com a un petit fitxer `.ccinput.json`; {{ui:Import…}} n'afegeix un, des d'un altre ordinador o d'un company. Un fitxer importat només pot apuntar a les ordres pròpies de ModelCraft: tot el que hi hagi a més queda fora i es compta a la línia d'estat. {{ui:Delete this style}} elimina un dels vostres.

:::note
Aquests ajustaments es mantenen en aquest navegador. {{ui:Use this style in every app}} sota les targetes d'estil fa que cada aplicació s'obri amb el seu estil corresponent: {{ui:Push-pull}} va amb els estils de barra de menús de les altres aplicacions. {{ui:Modeler}} no té equivalent a les altres aplicacions, així que es queda com a opció de ModelCraft.
:::

Relacionats: [Tecles i accions del ratolí](topic:keyboard) · [Configuració de ModelCraft](topic:settings) · [Des d'altres modeladors](topic:coming-from)
