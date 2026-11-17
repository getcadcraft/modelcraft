---
title: Mantén un model .3dm en directe
summary: Modifiqueu un model al programa que l'ha creat i veieu-lo canviar aquí, des de Rhino 8 o d'una definició de Grasshopper, sense desar-lo ni tornar-lo a importar.
keywords: rhino, grasshopper, enllaç en directe, connexió en directe, 3dm, nurbs, paramètric, enllaç, sincronització, script, model de referència, envia
from: 331b0a7e
---

Seguiu modelant on modeleu i useu aquí el resultat: per renderitzar-lo, il·luminar-lo o compondre una escena al seu voltant. Cada canvi a l'altre programa actualitza un grup a ModelCraft.

:::note
L'enllaç necessita **CadCraft Studio** al mateix ordinador. Una pestanya del navegador no pot establir la connexió. Res no passa per internet: l'script parla amb Studio a l'adreça pròpia d'aquest ordinador, amb un testimoni (token).
:::

:::warning
Aquest enllaç s'ha provat amb l'escriptor de fitxers de l'script i amb un substitut de l'altre programa, encara no dins de Rhino ni de Grasshopper. Si alguna cosa falla allà, digueu-nos quin missatge ha donat.
:::

## Configura-ho

1. A Studio, obriu ModelCraft. A {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Assistants}}, marqueu **Permet que els assistents d'IA i els scripts usin ModelCraft**, i després **{{ui:Edit}}**.
2. A Studio, trieu {{ui:Connect an assistant}}. Mostra l'adreça i el testimoni que enganxareu més avall.
3. Baixeu l'script: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Des de Rhino

1. Executeu `cadcraft_link.py` a l'editor de scripts de Rhino (Python 3 a Rhino 8).
2. La primera vegada, enganxeu l'adreça i el testimoni. Es guarden a `.cadcraft-link.json` a la carpeta d'inici, mai al model. Studio crea un testimoni nou cada vegada que s'inicia, així que aleshores l'script el torna a demanar.

El model sencer arriba com un sol grup amb el nom del document, per exemple "chair (linked)". Després, cada canvi arriba quan feu una pausa breu, i només s'envien els objectes que han canviat. Torneu a executar l'script per aturar-ho.

## Des de Grasshopper

Executeu primer l'script una vegada a Rhino, perquè es desin l'adreça i el testimoni.

1. Afegiu un component Script (Python 3) i enganxeu-hi tot el contingut de `cadcraft_link.py`.
2. Doneu-li aquestes entrades: `G` (la geometria, amb accés de llista), `N` (un nom, opcional), `On` (un interruptor booleà) i `Target` (opcional: `model` o `part`, si hi ha les dues aplicacions obertes).
3. Poseu `On` a true.

Cada resolució envia `G` i substitueix el que el component va enviar l'última vegada, així que arrossegar un control lliscant actualitza el grup aquí. La seva sortida `a` indica què ha passat. Cada component té el seu propi grup.

## Què podeu fer amb el grup

- **Mogueu-lo, etiqueteu-lo, construïu al seu voltant.** On poseu el grup i la seva etiqueta es mantenen en cada actualització, i també tot el que hi ha al costat.
- **No editeu dins.** Cada actualització substitueix el contingut del grup. Els objectes són de l'altre programa.
- **Desfés.** Les actualitzacions separades per menys de dos segons comparteixen un sol pas de desfer, així que {{key:Mod+Z}} desfà un arrossegament sencer. La següent actualització torna a deixar el model igual que l'original.
- **Desa.** El fitxer desat conserva l'enllaç. Torneu a executar l'script després de reobrir-lo, i el mateix grup s'actualitzarà.

## Què arriba

Malles, polisuperfícies, superfícies i extrusions com la malla que veieu a la pantalla; SubD com la seva malla; corbes com a arestes; blocs com a objectes separats on són (no com a components); capes com a etiquetes, colors i unitats. Vegeu [Importa un model .3dm](topic:import-3dm-files) per saber com apareixen aquí.

Queden fora, amb un recompte a l'altre programa: punts, text, cotes, llums i similars.

**Només en un sentit.** Els canvis aquí no tornen a l'altre programa.

## Si alguna cosa falla

- **"Cap finestra de ModelCraft o PartCraft ho permet":** feu el pas 1 de la configuració.
- **"Studio ha rebutjat el testimoni":** Studio s'ha reiniciat. Copieu el testimoni nou i torneu a executar l'script. Per a Grasshopper, executeu-lo abans a Rhino.
- **"No es pot connectar amb CadCraft Studio":** Studio no s'està executant, o l'adreça ha canviat.
