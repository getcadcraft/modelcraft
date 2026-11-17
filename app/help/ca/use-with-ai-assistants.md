---
title: Usa ModelCraft amb un assistent d'IA
summary: Deixeu que el vostre propi assistent d'IA o script miri el model i construeixi sòlids senzills: permisos, connexió a través de CadCraft Studio i el registre d'activitat.
keywords: ia, assistent, agent, mcp, model context protocol, script, automatització, modelatge, caixa, cilindre, renderitza, cua de renderització, permisos, desconnecta, activitat
from: 629cd0b7
---

## Què aprendreu

Com deixar que un assistent d'IA (o un script que hàgiu escrit) treballi amb ModelCraft, i com decidir què pot tocar.

ModelCraft **no té IA pròpia** i no envia res enlloc. Vosaltres porteu l'assistent: qualsevol programa que parli el Model Context Protocol (MCP). ModelCraft només li dona eines, i vosaltres en trieu quines.

## Activeu-la

1. Obriu {{ui:Configuració}} (la roda dentada de la barra de l'aplicació, o {{key:Mod+,}}) i aneu a la pestanya {{ui:ModelCraft}}.
2. Sota {{ui:Assistents}}, marqueu **Permet que els assistents d'IA i els scripts usin ModelCraft**. Està desactivat fins que ho feu.
3. Trieu què pot fer: **Lectura** està marcada en començar; marqueu **Edita**, **Desa** o **Exporta** només quan les necessiteu.

Les eines fora dels permisos que heu marcat no s'ofereixen a l'assistent, i si n'hi demana una igualment, ModelCraft la refusa i ho anota al registre d'activitat. Desactivar l'interruptor tanca totes les connexions de cop; {{ui:Restableix la configuració de ModelCraft}} també el desactiva.

## Connecteu l'assistent

Els assistents es connecten a través de **CadCraft Studio** del vostre ordinador: Studio executa un servidor petit que només aquest ordinador pot assolir, protegit per un token que genera cada vegada que s'inicia. A Studio, trieu {{ui:Connecta un assistent}} i copieu l'adreça i el token a l'assistent (Studio mostra la configuració exacta per enganxar). No compartiu mai el token.

:::note
Una pestanya del navegador no pot obrir una connexió per a un assistent: a les aplicacions del navegador l'interruptor no té efecte fins que useu CadCraft Studio al vostre ordinador.
:::

## Vosaltres mantingueu el control

- **Cada canvi és un pas de desfer**, amb el nom de l'assistent com a etiqueta (per exemple, "Assistent: caixa"). {{key:Mod+Z}} desfà de cop l'últim canvi de l'assistent.
- **Sabeu quan n'hi ha un de connectat.** Un botó de la barra de l'aplicació indica el nom de l'assistent mentre és connectat; feu-hi clic per veure què pot fer, o per **Desconnecta'l**.
- **Activitat.** {{ui:Configuració}} › {{ui:ModelCraft}} › {{ui:Assistents}} › {{ui:Activitat}} llista cada crida: quan, quina eina, feta o refusada. {{ui:Desa el registre}} en guarda una còpia.

## Què pot demanar un assistent

| Eina | Permís | Què fa |
|---|---|---|
| `app_info`, `model_describe` | Lectura | La unitat i la mida del model, i cada grup i component amb la seva posició, si és un sòlid tancat i el seu volum |
| `view_screenshot` | Lectura | Una imatge de la vista 3D tal com es mostra |
| `box_add`, `cylinder_add` | Edita | Una caixa o un cilindre com a grup nou, en un lloc i amb una mida que doneu vosaltres o l'assistent ("3m", "10'" o un número en la unitat del model) |
| `instance_move`, `instances_erase` | Edita | Mou o esborra grups i components |
| `faces_list`, `materials_list` | Lectura | Les cares d'un grup o de la geometria solta (la direcció, l'àrea i el centre de cadascuna); els materials i colors amb què pot pintar |
| `push_pull` | Edita | Empeny o estira una cara, com ho fa {{ui:Prem/Estira}} |
| `paint` | Edita | Pinta cares o un grup sencer amb un color o un material |
| `group_make` | Edita | Fa un grup o un component amb cares i grups solts |
| `scene_add`, `scene_show` | Edita | Desa la vista com a escena; va a una escena desada |
| `mesh_add` | Edita | Un objecte de malla per començar (cub, esfera, cilindre…), tal com l'afegeix l'espai de treball Malla |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Lectura / Edita | La pila de modificadors d'una malla: simetria, matriu, subdivisió, bisellat i la resta; no s'aplica res de manera definitiva |
| `usd_export` | Exporta | El model com a OpenUSD (.usda, .usdc o .usdz), tal com el desa la funció de desar el model com a USD ([USD](topic:usd)); a una carpeta que hàgiu permès a Studio, o si no, una baixada |
| `render_still` | Exporta | Una imatge renderitzada de la vista o d'una escena desada, tal com la fa el botó {{ui:Renderitza}} del diàleg {{ui:Renderitza}}, amb la vostra configuració de renderització tret que en demani unes altres (un predefinit d'escena: exterior, interior, secció, nit o automàtic; ràpid o alta qualitat, mida, mostres, cel); un PNG que pugui mirar, o un PNG, EXR o fitxer de render en una carpeta que hàgiu permès a Studio ([Renderitza una imatge](topic:render)) |
| `render_queue` | Exporta | Afegeix imatges d'alta qualitat al diàleg Renderitza (la vista, o escenes desades) i executa la cua; les imatges acabades van a una carpeta que hàgiu permès, o es queden al diàleg Renderitza a la {{ui:Cua de renderització}} per a vosaltres. Necessita WebGPU |
| `link_push` | Edita | Actualitza un model enllaçat des d'un altre programa (vegeu [Manteniu un model .3dm en directe](topic:live-3dm-link)) |
| `link_status` | Lectura | Diu si un model enllaçat encara hi és i quan es va actualitzar per última vegada |
| `undo` | Edita | Desfà els seus propis passos |

Els sòlids que fa un assistent entren com a grups, de manera que mai no es fonen amb el que heu dibuixat. No hi ha cap eina que desi el model: desar-lo continua essent cosa vostra, i exportar o renderitzar requereix tenir marcat **Exporta**. Una renderització no canvia res del model; renderitzar una escena desada mou la vista cap a ella, igual que ho fa {{ui:Escenes}}.

## Si alguna cosa no funciona

- **L'assistent no veu cap eina de ModelCraft:** comproveu que l'interruptor estigui activat en aquesta finestra i que la finestra sigui oberta a Studio.
- **"necessita el permís d'edició":** marqueu **Edita** sota {{ui:Assistents}} i torneu a demanar-ho.
- **Errors "401" o "token":** el token ha canviat (Studio s'ha reiniciat, o {{ui:Nou token}}). Copieu el nou a la configuració de l'assistent.

## Vegeu també

- [Receptes per a assistents d'IA](common:assistants-recipes): exemples resolts, cadascun amb les eines que crida.
