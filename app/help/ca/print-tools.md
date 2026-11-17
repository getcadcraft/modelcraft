---
title: Suports, gruix de paret, buidatge i reparació
summary: Mireu on una impressió necessita suports i quants més o menys, trobeu les parets massa primes per imprimir, buideu una peça fins a un gruix de paret amb forats de drenatge i repareu una malla amb cada correcció llistada.
keywords: impressió 3D, suports, vista prèvia de suports, voladís, suports en arbre, suports en columna, gruix de paret, parets fines, massa fina, broquet, buida, buidatge, closca, forat de drenatge, resina, reparació, repara la malla, no mànifold, cares invertides, forats, petites closques, autointersecció, solapament, uneix
from: 286bde26
---

Quatre eines per preparar un model per a una impressora 3D. Obriu {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}}; la línia **Eines d'impressió** del diàleg té {{ui:Vista prèvia dels suports}}, {{ui:Gruix de paret}}, {{ui:Buida}} i {{ui:Repara}}. Cada una s'obre com una targeta sobre la vista; {{ui:Tanca}} (la creu) la treu juntament amb les seves marques. Només es mostra una targeta alhora.

Cada eina treballa sobre el que s'imprimeix: la selecció, o tot el que es mostra si no hi ha res seleccionat. {{ui:Buida}} i {{ui:Repara}} necessiten un grup, un component o una malla seleccionats, perquè els canvien.

## Vista prèvia dels suports

Les cares que s'inclinen més que l'**angle de voladís** respecte a la vertical es pinten en vermell, i els suports simples es dibuixen des d'elles (en taronja) fins al llit, o fins a la part del model que hi ha sota.

- **Angle de voladís**: 45° és el que la majoria de les impressores fan sense suport. Augmenteu-lo per a una impressora que faci bé els ponts.
- **Columnes**: una columna recta cada 3 mm sota cada voladís. L'estimació les compta com un patró de suport del 15 %.
- **Arbre**: els punts propers s'uneixen en un tronc sota el seu punt mitjà; cap branca no s'inclina més de 45°. Els arbres solen gastar menys material i toquen el llit en menys punts.

La targeta diu quanta superfície necessita suport, quants punts de suport hi ha i quant material aproximadament ocupen. Els suports que es recolzen sobre el model (no sobre el llit) es comptin: deixen marques allà. Amb un llit d'impressora triat a {{ui:Configuració}}, el llit es dibuixa sota el model.

:::note
Això és una vista prèvia, no un laminador: el vostre laminador decideix els suports reals. En un voladís molt gran els punts de suport s'estenen més perquè la vista prèvia vagi ràpida; la targeta ho diu.
:::

## Gruix de paret

Cada cara es mesura en línia recta a través del sòlid fins a l'altra banda. Les parets per sota del **gruix mínim de paret permès** es veuen en vermell, i les que són per sota d'una vegada i mitja aquest valor, en taronja: s'imprimeixen, però poden sortir febles.

Les àrees primes es llisten, la més fina primer, amb el gruix i la mida de cadascuna. {{ui:Mostra}} porta la càmera fins a elles.

Una impressora no pot fer una paret més fina que unes dues amplades del seu broquet: 0.8 mm per al broquet comú de 0.4 mm (el valor inicial). Les impressores de resina en fan menys; consulteu la guia de la vostra impressora.

En un model molt gran només algunes cares llancen un raig, i les altres prenen el gruix de les veïnes; la targeta diu quantes es van mesurar.

## Buida

Buidar manté l'exterior tal com és i en treu l'interior, deixant parets tan gruixudes com demaneu. Les impressions de resina gasten menys resina i fan menys força sobre la placa de construcció; les impressions de filament gasten menys plàstic que el que gastaria el farciment.

1. Seleccioneu el grup, el component o la malla, després obriu {{ui:Buida}}.
2. Definiu el **gruix** de paret (2 mm per començar) i l'amplada dels **forats de drenatge**.
3. Per a una impressió de resina, feu clic a {{ui:Col·loca un forat de drenatge}}, després feu clic a l'exterior del model on ha d'anar: a baix, a prop de la placa de construcció, perquè la resina líquida pugui sortir. Col·loqueu tants com calgui; cadascun es mostra com un cercle blau i es llista amb {{ui:Elimina}}.
4. {{ui:Vista prèvia}} diu quant material treu el buidatge.
5. {{ui:Buida-ho}} fa el canvi: un sol pas que {{key:Mod+Z}} desfà.

El resultat és un sòlid tancat que la comprovació d'impressió 3D accepta: ModelCraft ho comprova primer i no canvia res si no passaria. On el model és més fi que dues parets, es queda sòlid. El resultat és un grup les cares planes del qual són cares úniques, de manera que el podeu seguir modelant amb {{ui:Prem/Estira}}; una peça corba buidada amb la graella fina sol tenir massa cares per a això i esdevé una malla, i la línia d'estat indica quin dels dos ha passat.

:::tip
Per a la majoria de formes, l'interior és l'exterior desplaçat cap a dins exactament el gruix de la paret. Quan les cantonades o les peces fines ho fan impossible, ModelCraft segueix l'exterior a la distància de la paret en una graella fina; la targeta llavors diu com d'a prop és (amb una precisió de fracció de mil·límetre).
:::

## Repara

{{ui:Repara}} mira la peça seleccionada com ho farà el laminador d'una impressora, arregla el que pot arreglar amb seguretat i llista cada correcció:

| Arregla | Què vol dir |
|---|---|
| Triangles sense àrea | s'eliminen |
| Un triangle dibuixat dos cops | es manté una còpia; una cara dibuixada d'esquena amb si mateixa (sense gruix) s'elimina |
| Peces soltes de menys de 0.5 mm | s'eliminen |
| Triangles que miren en sentit contrari | es giren per coincidir amb els veïns |
| Forats, plans o no | es tanquen amb un ventall de triangles nous des del centre de cada forat |
| Una peça del revés | es gira cap a fora (un buit dins d'una altra peça es deixa tal com és, perquè s'hi pretén que miri cap a dins) |

{{ui:Arregla els que són segurs}} fa totes en un sol pas que {{key:Mod+Z}} desfà, i la línia d'estat llista cada correcció. La peça reparada es converteix en un grup les cares planes del qual són cares úniques. Si encara no es tanca (queda alguna cosa sota **Deixat per a vosaltres**), o tindria massa cares per a un grup, esdevé una malla: les seves cares segueixen sent triangles, i les cares planes encara semblen planes. La línia d'estat ho indica. {{ui:Uneix les peces superposades}} funciona igual.

Allò que no es pot arreglar amb seguretat es llista sota **Deixat per a vosaltres** i es marca en porpra a la vista, amb {{ui:Mostra}}:

- **Arestes on es troben tres cares o més**: decidiu quina cara és la bona i esborreu les altres.
- **Una peça que travessa si mateixa**: mogueu o redibuixeu aquella part. Vegeu [Interseca cares](topic:intersect).
- **Forats massa grans o massa embolicats per tancar-se**: dibuixeu cares que els travessin.
- **Peces separades que se superposen**: els laminadors les fusionen de totes maneres. {{ui:Uneix les peces superposades}} en fa un sòlid tancat (reconstrueix les cares on es troben; per això és un botó a part i mai no es fa automàticament).

Per als grups de {{ui:Prem/Estira}} també podeu arreglar-ne un de cada cop a {{ui:Informació de l'entitat}} › {{ui:Mostra els problemes}} / {{ui:Repara}}, que conserva les cares que heu dibuixat. Vegeu [Eines de sòlids](topic:solids).

Relacionat: [Prepara un model per a la impressió 3D](topic:print-3d) · [L'estil principiant](topic:beginner) · [Encara no implementat](topic:not-built-yet#3d-printing)
