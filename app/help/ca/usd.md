---
title: Desa, obre i exporta USD
summary: Deseu tot el model com a USD (.usda, .usdc o .usdz) sense perdre res, torneu-lo a obrir, i importeu escenes USD d'altres programes 3D.
keywords: usd, usda, usdc, usdz, openusd, descripció universal d'escenes, desa com a, exporta, importa, muntatge d'escena, archviz, openpbr, materialx, paquet
from: 73d299f9
---

USD és un format d'escena que comparteixen molts programes 3D, de renderització i d'arquitectura visual. ModelCraft l'escriu i el llegeix. `.modelcraft` continua sent el format que escriu {{ui:Desa}}; USD és una opció a {{ui:Desa com a}}.

## Desa com a USD

1. Trieu {{ui:Desa com a}} al grup {{ui:Fitxer}} (o premeu {{key:Mod+Shift+S}}).
2. Trieu el format: {{ui:Text (.usda)}} (llegible, bo per al control de versions), {{ui:Binari (.usdc)}} (el més petit i ràpid) o {{ui:Paquet (.usdz)}} (un sol fitxer amb les textures dins).
3. El fitxer es baixa (a l'aplicació d'escriptori trieu on es desa).

Les mateixes opcions són a {{ui:Exporta}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## No es perd res

Obriu un fitxer USD que ModelCraft ha desat i recupereu el model exactament: cares amb els seus forats, arestes suaus i ocultes, corbes, grups i components, etiquetes, escenes, cotes, guies, plans de secció, llums, textures importades i la vista. Altres programes veuen el mateix model com a malles, grups, prototips per als components, materials, llums i càmeres.

:::note
Si un altre programa canvia la geometria d'un grup o component, ModelCraft obre aquella part com una malla amb el canvi conservat, i indica quantes parts ha llegit d'aquesta manera. Una col·locació que un altre programa ha mogut o eliminat es manté movuda o eliminada.
:::

## Obre o importa USD d'altri

- {{ui:Obre}} un fitxer `.usd`, `.usda`, `.usdc` o `.usdz` per començar un model a partir d'ell.
- {{ui:Importa}} un fitxer per afegir-lo al model obert. Deixeu els fitxers als quals fa referència (altres capes, textures) juntament amb ell.

Les malles entren amb les seves normals, coordenades UV i colors; la geometria compartida, com a components; els materials, com a colors de pintura; els llums, com a llums; i les càmeres, com a escenes, en metres amb Z amunt, siguin quines siguin les unitats i l'eix vertical del fitxer.

## Encara no

Les animacions, els esquelets i els grafs de nodes de MaterialX encara no es llegeixen ni s'escriuen com a USD. Les animacions i els materials de nodes propis de ModelCraft es conserven en un fitxer USD que ha desat, perquè ModelCraft els torni a obrir, però altres programes no els veuen. Les capes a les quals fa referència un fitxer i que ModelCraft no pot llegir (per exemple, un document MaterialX) s'exclouen, amb una nota.
