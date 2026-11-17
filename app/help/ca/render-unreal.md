---
title: Envia l'escena a un motor de joc
summary: Studio pot escriure l'escena en un projecte d'Unreal Engine i mantenir-la sincronitzada a cada enviament; les vostres edicions viuen en una capa que CadCraft mai no escriu. El complement que l'obre encara no està publicat.
keywords: unreal, unreal engine, motor de joc, enllaç, envia, escenari usd, projecte, sincronització, càmera de cinema, cua de renderització de pel·lícules
from: 9a765cc2
---

A CadCraft Studio, la llista de motors pot contenir un **enllaç** a un projecte d'Unreal Engine. Només en un sentit: de CadCraft a Unreal.

## Envia l'escena

1. Trieu l'entrada d'Unreal a la llista de motors. La primera vegada, Studio us demana que trieu la carpeta del vostre projecte (la que conté el fitxer `.uproject`); la recorda.
2. Feu clic a {{ui:Envia}}. Studio escriu `CadCraft/<file name>/` dins del projecte: l'escena com a fitxer USD, el fitxer de configuració, els perfils de llum i dos fitxers de capa petits.
3. Canvieu el model, deseu-lo i torneu a enviar-lo. Només es reemplacen l'escena i el fitxer de configuració.

## Les vostres edicions estan segures

L'escenari que obre Unreal és una capa arrel petita, creada una sola vegada, amb dues capes a sota: **la vostra** a dalt (`<name>.user.usda`, buida al principi, que CadCraft mai no reescriu) i l'escena de CadCraft a sota. Les edicions que deseu a la vostra capa es mantenen quan l'escena es torna a enviar. Les llums i altres actors que col·loqueu al nivell d'Unreal són fora de l'escenari i tampoc no es toquen.

## Sense Studio

Al navegador, o en un ordinador on Studio no troba Unreal, trieu **Carpeta del projecte d'Unreal (.zip)** a la llista de motors i feu clic a {{ui:Renderitza}}. Desa la mateixa carpeta com a zip: descomprimiu-lo a la carpeta `CadCraft` del projecte. Deixeu {{ui:Inclou els fitxers d'escenari}} activat la primera vegada; desactiveu-lo per als desaments següents, perquè el zip només contingui l'escena i el fitxer de configuració i la vostra capa mai no es reemplaci.

:::note
El complement d'Unreal que obre l'escenari, aplica el sol, les llums, les càmeres i l'exposició, segueix cada enviament i renderitza una càmera **encara no està publicat** i no s'ha executat a Unreal. Mentre no ho estigui, {{ui:Envia}} posa els fitxers al projecte i les eines USD pròpies d'Unreal els poden obrir. Windows és el primer sistema; macOS el seguirà.
:::
