---
title: Importa un model SKP
summary: Importa un fitxer .skp amb els seus grups, components, colors, textures, etiquetes i arestes suaus; mira què ha entrat i què no, i continua modelant.
keywords: skp, importa, obre skp, components, grups, etiquetes, capes, materials, colors, textures, amagat, arestes suaus, 3D Warehouse, migra, canvi
from: 325d3c81
---

ModelCraft llegeix els fitxers de SketchUp (`.skp`) amb el seu propi lector, a la pàgina. No es puja res, i funciona sense connexió sempre que ho faci ModelCraft. S'han provat fitxers de SketchUp des de la versió 3 fins a la 2026.

## Importa el fitxer

1. Fes clic a {{ui:Importa}} dins del grup {{ui:Fitxer}} (o deixa anar el fitxer `.skp` a la vista 3D).
2. Tria el fitxer.

   La barra d'estat diu "Llegint house.skp…" mentre el llegeix, i després què ha entrat, per exemple "Importat house.skp (SketchUp 25.0.575): 1240 cares, 6 components, en un grup."

El model complet arriba com un sol grup amb el nom del fitxer, seleccionat, i la vista fa zoom sobre ell. Un {{key:Mod+Z}} se'l porta de nou, incloses les etiquetes.

:::tip
Descompon el grup importat ({{ui:Informació de l'entitat}} › {{ui:Descompon}}) quan vulguis que el contingut quedi solt al model en lloc de dins d'un sol grup.
:::

## Què entra

- **Cares** amb els seus forats, i **arestes** que no formen part d'una cara.
- **Grups** entren com a grups, i **components** com a components: cada còpia d'un component és una col·locació d'una mateixa definició, de manera que editar una còpia les canvia totes, igual que a SketchUp. Els noms entren amb ells.
- **Colors.** El material propi d'una cara li dona el color. Un material pintat sobre un grup o component esdevé la pintura d'aquella col·locació, de manera que les cares de dins que no tenen color propi l'agafen, igual que a SketchUp. Un component pintat de vermell en un lloc i de blau en un altre es queda com un sol component.
- **Textures.** Una cara pintada amb un material amb textura entra amb la seva textura, aplicada a la cara tal com és al fitxer, i l'estil {{ui:Ombrejat}} la mostra. La imatge es conserva al fitxer de ModelCraft quan el deses, i també la mostra una [imatge renderitzada](topic:render). Un material amb textura pintat sobre un grup o component sencer només dona a aquella còpia el color del material.
- **Etiquetes.** Un grup o component en una etiqueta de SketchUp rep una etiqueta de ModelCraft del mateix nom, que apareix a {{ui:Etiquetes}}, i es mostra o s'amaga tal com estava a SketchUp. Si el model ja té una etiqueta amb aquest nom, s'utilitza aquella.
- **Les coses amagades entren amagades:** cares, arestes, grups i components, i cares i arestes en una etiqueta amagada. Veus el que mostrava SketchUp, i no es perd res: {{ui:Edita}} › {{ui:Més}} › {{ui:Mostra-ho tot}} els mostra. Vegeu [Amaga, aïlla i mostra](topic:hide-isolate).
- **Les arestes suaus i les llises** es mantenen com a tals, de manera que les superfícies corbes continuen semblant llises.
- **Les mides són correctes en qualsevol unitat:** els fitxers de SketchUp són en polzades per dins, i ModelCraft les converteix.

## Què no entra

La barra d'estat indica què s'ha deixat fora, amb els recomptes.

- **Algunes textures** només conserven el color del seu material: una textura que falta al fitxer, una imatge en un format que els navegadors no poden mostrar (com un fitxer de Photoshop), o una textura sense mida. Les cares amb una textura projectada entren amb la textura col·locada de manera aproximada.
- **Etiquetes en cares i arestes soltes.** ModelCraft només etiqueta grups i components, de manera que una cara o aresta amb etiqueta pròpia entra sense etiqueta, i la barra d'estat les compta. Converteix aquestes cares en un grup ({{key:Shift+G}}) i etiqueta el grup.
- **Imatges** col·locades al model, text, cotes, guies, plans de secció, escenes i estils.

## Problemes

- "Això no és un fitxer de SketchUp." o "Aquest fitxer de SketchUp està malmès: …": el fitxer està tallat o és una altra cosa amb extensió `.skp`. Torna'l a desar des de SketchUp, o demana'n una còpia nova.
- Un fitxer d'una versió de SketchUp més nova que la que coneix ModelCraft es refusa, i s'indica la versió que ha trobat.
- Un model que és només imatges, text o cotes indica que no té res per mostrar.

## Take the model back

ModelCraft no pot desar fitxers `.skp`. Exporta Collada ({{ui:Exporta}} › `.dae`) i importa'l a SketchUp: els grups, components i colors hi passen; les textures hi passen com el color del seu material. Vegeu [Exporta el model](topic:export-model).
