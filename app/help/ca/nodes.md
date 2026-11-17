---
title: Nodes: construir un model connectant
summary: Connectar nombres a punts, punts a corbes i corbes a superfícies. Si canvieu un nombre, tot el que en depèn es reconstrueix. Cada node també és una línia de CraftScript, i el graf es desa al fitxer.
keywords: nodes, editor de nodes, programació visual, paramètric, graf, connexions, ports, forma lliure, nurbs, loft, extrudeix, revolució, cercle, corba, superfície, sèrie, rang, aleatori, llista, script, craftscript, grasshopper
from: 9c8e254f
---

L'editor de **Nodes** construeix geometria connectant caixes. Cada caixa (un node) fa una feina petita: crea un nombre, un punt, un cercle, un loft. Connecteu el resultat d'un a l'entrada del següent, i el model segueix els canvis quan modifiqueu un nombre de l'inici.

Obriu-lo des del tauler de la dreta: {{ui:Nodes}} › {{ui:Nodes…}}. Un fitxer que ja té un graf l'obre sol. És una finestra sobre la vista 3D: arrossegueu la seva barra de títol per moure-la, i arrossegueu-ne la cantonada per canviar-ne la mida.

## Connectar

1. Trieu un node de la llista de l'esquerra (escriviu a la caixa de cerca per reduir-la; <kbd>Enter</kbd> afegeix la primera coincidència). Apareix al mig del llenç.
2. Arrossegueu des d'un punt **sortida** rodó a la dreta d'un node fins a un punt **entrada** rodó a l'esquerra d'un altre. El punt es torna verd quan encaixa i vermell quan no; apunteu-hi per veure'n la raó.
3. Una entrada sense res connectat mostra una caixa per a un valor escrit. Escriviu un nombre i premeu <kbd>Tab</kbd>: el resultat es reconstrueix.
4. El petit cercle de la barra de títol d'un node és el seu **ull**. Un node amb l'ull activat es dibuixa a la vista 3D: com a línies per a les corbes, ombrejat per a les superfícies, i punts per als punts.

Arrossegueu un node per la seva barra de títol. Arrossegueu el fons per desplaçar-vos, i feu girar la roda per fer zoom. <kbd>Delete</kbd> suprimeix el node seleccionat. {{ui:Ordena}} col·loca els nodes en columnes, {{ui:Ajusta}} els porta tots a la vista, i {{ui:Desfés}} i {{ui:Refés}} recorren les vostres edicions.

## Tipus i unitats

Els ports tenen un tipus: nombre, sí/no, punt, vector, corba, superfície, malla, sòlid, o "geometria" per a qualsevol d'aquests. Un punt pot alimentar una entrada de vector i a la inversa. Els nombres porten unitats: una **longitud** és en mil·límetres i un **angle** és en graus. Una longitud no pot alimentar un angle, i una longitud per una longitud (una àrea) es rebutja, de manera que un cable erroni s'atura en el moment de fer-lo.

Un punt quadrat és una **llista**. Quan una llista arriba a una entrada d'un sol valor, el node s'executa una vegada per cada element, i el seu resultat és una llista. La llista més curta repeteix el seu últim element. Per exemple, una **Sèrie** d'alçades connectada a **Mou** fa una pila de còpies.

## Sòlids i booleanes com a nodes

El grup **Sòlids** crea cossos tancats a partir de les mateixes superfícies exactes que el tauler de Superfícies: **Sòlid caixa**, **Sòlid cilindre** i **Sòlid esfera** (mides en mm), **Unió**, **Resta** i **Interseca** (el segon sòlid es pren del primer; la tolerància és quant poden allunyar-se els triangles del motor de sòlids de les superfícies exactes), **Arrodoniment entre cares** (les cares pel seu número dins del sòlid, 1 per a la primera; un radi i, si és superior a 0, un radi al final), **Volum del sòlid** (mm³) i **Sòlid a malla** (per veure'l o cuir-lo). Un sòlid té el seu propi tipus de port: no es pot connectar un punt ni un nombre a una entrada de sòlid, i el punt es queda vermell. Els nodes Booleà i Arrodoniment fan servir el motor de sòlids propi del programa, que es carrega la primera vegada que s'obre l'editor.

## Errors

Un node que no pot fer la seva feina diu el motiu sota el seu nom, en vermell ("El radi ha de ser superior a zero."), i els nodes següents esperen. El mateix missatge és un Problema al tauler de Problemes, de manera que el podeu trobar des d'allà.

## Cada node és una línia de script

Premeu {{ui:Script}} per veure el graf com a CraftScript: una línia per node, com `n3 = nd_circle(n2, n1, [0 0 1]);`. Editeu el text i premeu {{ui:Crea el graf a partir d'aquest script}} per tornar-lo a convertir en graf. Les mateixes funcions `nd_` funcionen en un CraftScript a PartCraft, de manera que un graf es pot executar, repetir o provar allà. Els nombres aleatoris sempre prenen una **llavor**, de manera que el mateix graf dona el mateix resultat a tots els ordinadors.

## Desat amb el fitxer

El graf es desa al fitxer del model. Els nodes fan corbes, superfícies i malles pròpies: no canvien les cares del model fins que ho demanau.

## Converteix al model

Activeu l'ull d'un node que fa una superfície o una malla, i després premeu {{ui:Converteix al model}} a la finestra de Nodes. Cada superfície o malla visible es converteix en un grup de cares del model, en metres, que podeu editar com qualsevol altre. És un sol pas del Desfés. El graf es conserva, però la còpia ja no el segueix: si canvieu un nombre, torneu a convertir per obtenir-ne una de nova. Els punts i les corbes no són sòlids, de manera que se'n deixen fora, i el missatge diu quants n'hi ha.
