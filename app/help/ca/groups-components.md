---
title: Grups i components
summary: Evita que les coses s'enganxin entre elles, edita una còpia per canviar-les totes i fes servir els tauler Esquema i Components.
keywords: grup, component, crea un grup, crea un component, descompon, feu-lo únic, esquema, instàncies, còpies, bloc, niat, edita el grup, col·loca
from: 7cb925f3
---

La geometria solta a ModelCraft s'enganxa: les línies que es toquen es parteixen mútuament, i les cares que comparteixen una aresta es mouen juntes. Això fa que funcioni el dibuix sobre cares, però també vol dir que un cub dibuixat contra un altre s'hi fusiona. Els **grups** i els **components** mantenen les coses separades.

- Un **grup** agrupa una geometria perquè actuï com un sol objecte. Res de fora no s'hi pot enganxar.
- Un **component** és un grup que es pot col·locar moltes vegades. Totes les còpies comparteixen el mateix contingut: si n'edites una, canvien totes. Fes servir components per a qualsevol cosa que es repeteixi: finestres, pilars, taules, arbres.

## Crea un grup o un component

1. Selecciona la geometria. Un triple clic sobre una cara selecciona tot l'objecte connectat; un arrossegament amb finestra selecciona tot el que hi ha dins del quadre.
2. Prem {{key:Shift+G}} per a un grup, o {{key:G}} per a un component. També pots fer clic a {{ui:Grup}} o {{ui:Component}} al grup {{ui:Organitza}} de la barra d'eines, o a {{ui:Crea un grup (Shift+G)}} o {{ui:Crea un component (G)}} dins d'{{ui:Informació de l'entitat}}.

   La barra d'estat diu "Agrupat com a Group#1." o "Component creat: Component#1.", el nou objecte queda seleccionat i apareix a {{ui:Esquema}}.

3. Per posar-li un nom, escriu-lo al camp {{ui:Nom}} d'{{ui:Informació de l'entitat}} i prem {{key:Enter}} o fes clic fora.

Seleccionar una cara en porta les arestes. Si no hi ha res seleccionat, la barra d'estat diu "Primer selecciona alguna geometria (arrossega una finestra, o fes triple clic per seleccionar tot el connectat)."

També pots agrupar grups: selecciona'n diversos i prem {{key:Shift+G}}. {{ui:Esquema}} mostra el niat.

:::note
Les lletres de les tecles coincideixen amb els valors per defecte de SketchUp: {{key:G}} crea un component, {{key:Shift+G}} un grup.
:::

## Edita dins d'un grup o component

1. Fes doble clic (a la vista o a {{ui:Esquema}}), o selecciona'l i fes clic a {{ui:Edita}} dins d'{{ui:Informació de l'entitat}}.

   La resta del model s'esvaeix, els eixos passen als eixos propis del grup, i {{ui:Esquema}} diu "Editant: Model › Group#1". La barra d'estat diu "Editant Group#1. Esc o un doble clic fora el tanquen."

2. Dibuixa, fes push/pull, mou i esborra com de costum. Tot el que facis es queda dins del grup.
3. Tanca'l: prem {{key:Esc}} (dues vegades si hi ha alguna cosa seleccionada), fes doble clic en un espai buit, o fes clic a {{ui:Tanca el grup}} dins d'{{ui:Esquema}}.

Mentre un component és obert, cada còpia seva canvia a mesura que hi treballes.

## Col·loca més còpies d'un component

- Copia'l amb {{ui:Mou}} i {{key:Ctrl}} (vegeu [Mou i copia](topic:move-copy)). Cada còpia és una altra col·locació del mateix component.
- O fes clic a {{ui:Col·loca}} al costat seu al tauler {{ui:Components}}, i després fes clic on ha d'anar. El seu origen, la cantonada més baixa del quadre que envolta el que vas seleccionar en crear-lo, es posa on facis clic. Després l'eina torna a {{ui:Selecciona}}.

{{ui:Components}} mostra quantes còpies hi ha col·locades ("4×"), i {{ui:Esquema}} mostra el recompte després del nom.

## Reordena a l'Esquema

Arrossega una fila d'{{ui:Esquema}} per canviar on pertany. No es mou res a la vista: un grup manté el seu lloc al model.

- **Dins d'un grup:** deixa-la al mig de la fila d'un grup (la fila es marca amb un contorn discontinu). Entra al final.
- **En un altre ordre:** deixa-la a la vora superior o inferior d'una fila (hi apareix una línia). Queda just abans o just després d'aquella fila, dins del mateix grup que aquella fila, de manera que també la pots posar dins d'un grup en el lloc que triïs.
- **Cap al nivell superior:** deixa-la sobre la capçalera d'{{ui:Esquema}}. Entra al final.

Cada deixada és un sol pas: {{key:Mod+Z}} la torna enrere. {{key:Esc}} durant un arrossegament no deixa res. Un grup no es pot posar dins de si mateix ni dins d'un grup que ell mateix conté. L'arrossegament està desactivat mentre {{ui:Cerca pel nom}} té text.

:::touch
Mantén un dit sobre una fila una estona i després arrossega-la. Un lliscament ràpid desplaça la llista.
:::

## Fes diferent una còpia

Selecciona la còpia i fes clic a {{ui:Feu-lo únic}} dins d'{{ui:Informació de l'entitat}} (es mostra quan el component està col·locat més d'una vegada). Aquella còpia rep una definició pròpia, amb el nom de l'original i un número nou. Edita-la sense tocar les altres.

## Converteix un grup en component

Selecciona el grup i fes clic a {{ui:Crea un component}} dins d'{{ui:Informació de l'entitat}}. Rep un nom nou, com Component#2, encara que hagis posat un nom al grup; escriu-lo de nou a {{ui:Nom}}.

## Descompon

Selecciona un grup o un component i fes clic a {{ui:Descompon}} (a la barra d'eines o dins d'{{ui:Informació de l'entitat}}). El seu contingut es converteix en geometria solta al lloc on era, i s'enganxa a allò que toca. Els grups que hi ha dins es mantenen com a grups.

## Sòlid i volum

Quan selecciones un grup o un component, {{ui:Informació de l'entitat}} mostra **Sòlid: Sí** si les seves cares es tanquen sense buits (cada aresta és compartida exactament per dues cares) i no hi ha grups niats dins. Aleshores també mostra el **volum**. Un cub, un mur amb una finestra retallada i un cilindre estirat són sòlids; un cub amb la part superior esborrada no ho és.

## Quan se n'va l'última còpia

Esborrar l'última còpia d'un component també el treu del tauler {{ui:Components}}. {{key:Mod+Z}} el torna a posar.

## Coses a tenir en compte

- Les còpies d'un **grup** fetes amb {{ui:Mou}} comparteixen el contingut en aquesta versió, igual que les còpies de components: editar-ne una canvia les altres. Per fer-ne una d'independent, fes clic a {{ui:Crea un component}} i després a {{ui:Feu-lo únic}}. Vegeu [Resolució de problemes](topic:troubleshooting#editing-one-group-changed-another).
- Els components no fan obertures als murs ni s'enganxen a les cares, i no hi ha cap biblioteca de components fets. Els fas tu mateix, o els importes.
- Els fitxers importats arriben com a grup. Els fitxers Collada mantenen els seus propis grups i components dins d'aquest grup.
