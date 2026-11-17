---
title: Exporta un model per a altres programes
summary: Tria l'exportació adequada per renderitzar, per a la web, per a la impressió 3D, per a BIM i BimCraft, i comprova què conserva cadascuna.
keywords: imprimeix, 3mf, pdf, paper, imatge, png, figura, captura de pantalla, renderitza, desa la vista, exporta, comparteix, renderització, gltf, glb, collada, dae, obj, stl, impressió 3D, ifc, bim, bimcraft, envia, altres programes
from: 9e13e80d
---

L'exportació fa una còpia del model en un altre format. Guardeu també el fitxer `.modelcraft`: és l'únic fitxer que ho conserva tot, i l'únic que ModelCraft obre directament.

## Exporta

1. Desa primer ({{key:Mod+S}}), perquè el fitxer de treball quedi a salvo.
2. Feu clic a {{ui:Exporta}} del grup {{ui:Fitxer}}.
3. Trieu el format. El navegador el baixa, amb el nom del model.

Tot el model s'exporta. Per exportar-ne una part, desa, esborra la resta, exporta, i després desfés o torna a obrir el fitxer.

## Quin format

| Voleu | Trieu | Notes |
|---|---|---|
| Obrir-lo en un altre modelador 3D | {{ui:Collada (.dae)}} | Conserva grups, grups imbricats, components (compartits, no copiats), noms i colors. Z amunt, metres. |
| Renderitzar-lo, o usar-lo en un programa de visualització | {{ui:OBJ (.obj)}} o {{ui:glTF binary (.glb)}} | OBJ és el més llegit; escriu cada col·locació de grup com un objecte separat, però no té colors ni components compartits. glTF conserva components i colors. |
| Publicar-lo a la web, en un motor de jocs o en RA | {{ui:glTF binary (.glb)}} | Un sol fitxer amb tot a dins. |
| Imprimir-lo en 3D | {{ui:Comprova la impressió 3D (STL o 3MF)…}} | Comprova que el model és tancat i que les cares miren en la direcció correcta, i després escriu STL o 3MF en mil·límetres. Vegeu [Prepara un model per a la impressió 3D](topic:print-3d). {{ui:STL per a impressió (.stl, mil·límetres)}} escriu tot el model sense la comprovació. |
| Obrir-lo en BimCraft o en un altre programa BIM | {{ui:IFC per a BimCraft (.ifc)}} | Cada grup o component de nivell superior esdevé un element de l'edifici. |

La barra d'estat confirma cada exportació, per exemple "Exportat House.stl (mil·límetres)." o "Exportat House.dae (Collada 1.4.1, Z amunt, metres; els components continuen compartits)."

## Abans d'exportar

- **Agrupeu els objectes.** Collada, glTF i IFC mantenen els grups i els components com a objectes separats. La geometria solta surt com un sol bloc; en IFC esdevé un element anomenat "Geometria solta".
- **Doneu-los un nom.** Els noms de grup i de component passen a Collada i IFC, de manera que una paret anomenada "North wall" arriba com a "North wall".
- **Comproveu la direcció de les cares.** Les cares que es mostren en gris blavós a l'exterior apuntaran cap a dins a l'exportació. Corregiu-les amb {{ui:Inverteix la cara}} (vegeu [Esborra i neteja](topic:erase#a-face-facing-the-wrong-way)).
- **Per a la impressió,** feu que les peces siguin sòlids tancats: seleccioneu cada grup i comproveu que {{ui:Informació de l'entitat}} diu "Sòlid: Sí". Després escaleu el model a la mida impresa, o escaleu-lo en el programa de la impressora.

## Envia un model a BimCraft

1. Feu que cada part de l'edifici sigui un grup o un component i doneu-li un nom.
2. Trieu {{ui:Exporta}}, i després {{ui:IFC per a BimCraft (.ifc)}}.
3. Obriu el fitxer `.ifc` descarregat a BimCraft.

Per a una volumetria conceptual, utilitzeu {{ui:Exporta}} › {{ui:Volumetria a BimCraft…}} en lloc d'això: cada grup va com una opció de volumetria amb plantes, àrees de planta i volum. Vegeu [Envia la volumetria a BimCraft](topic:massing-to-bimcraft).

L'exportació IFC simple no té cap enllaç directe entre les dues aplicacions. L'IFC té una sola planta, i cada element és un element genèric de tipus proxy sense tipus ni propietats: només porta forma i nom. Els grups tancats esdevenen formes sòlides; els oberts, superfícies.

## Línies sense cares

Les arestes que no formen part de cap cara (línies tipus guia, un plànol de situació importat) van a OBJ i Collada com a línies. glTF i STL no tenen lloc per a elles i les deixen fora. Les guies i les escenes no s'exporten a cap format.

## Desa la vista com a imatge

{{ui:Exporta}} › {{ui:Imatge de la vista (.png)}} desa exactament el que mostra la vista 3D, a la mida que té a la pantalla. {{ui:Imatge al doble de mida (.png)}} la desa el doble d'ampla i el doble d'alta (per a impressió o una diapositiva nítida), amb les cotes i les marques redibuixades a aquella mida i no estirades.

Per a una imatge que sembli de llum natural (cel, sol, ombres suaus, vidre), utilitzeu {{ui:Exporta}} › {{ui:Renderitza una imatge…}} en lloc d'això: vegeu [Renderitza una imatge](topic:render).

Per a una imatge neta, activeu primer [la vista de presentació](topic:styles-shadows#presentation-view) ({{key:Shift+P}}): s'amaguen els eixos, les guies, els contorns de secció i la selecció. Configureu la càmera, l'estil i les ombres com vulgueu, o aneu a una [escena](topic:scenes); per desar una pel·lícula amb les vostres escenes, utilitzeu {{ui:Exporta l'animació}} al tauler {{ui:Escenes}}.

## Imprimeix la vista, o desa-la com a PDF

- {{ui:Exporta}} › {{ui:PDF de la vista (.pdf)}} desa un PDF d'una sola pàgina: la vista al doble de la seva mida a la pantalla, amb les seves cotes, en una pàgina A4 (Letter quan el model és en peus i polzades), apaisada, amb una línia a sota que indica el nom del fitxer, la data i la unitat.
- {{ui:Exporta}} › {{ui:Imprimeix la vista…}} posa la mateixa pàgina davant del diàleg d'impressió del navegador. Trieu una impressora, o "Desa com a PDF".

La pàgina mostra la vista tal com és: no hi ha escala en una vista en perspectiva. Per a un dibuix a escala, desactiveu {{ui:Perspectiva}} i mireu des de {{ui:Superior}} o {{ui:Davant}}, i afegiu [cotes](topic:dimensions) per a les mides que importen. [La vista de presentació](topic:styles-shadows#presentation-view) deixa fora els eixos, les guies i la selecció; les cotes es mantenen.
