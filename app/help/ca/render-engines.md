---
title: Tria quin programa dibuixa la imatge
summary: La opció Motor del diàleg Renderitza: els nostres dos motors, altres programes a CadCraft Studio, i què fa la web en el seu lloc.
keywords: renderitza, motor, renderitzador, motor de renderitzat, complement, plugin, studio, programa extern, dibuixat per, cua, motor de complement
from: be4b056a
---

{{ui:Renderitza una imatge…}} té una opció **Motor** sobre el Mode. Els nostres dos motors sempre hi són i funcionen a tot arreu; els complements n'hi poden afegir més, i a CadCraft Studio la llista també conté els programes que s'emporten l'escena.

| Motor | Què fa | On funciona |
|---|---|---|
| Integrat: Ràpid | La imatge fixa ràpida: llum de dia, ombres suaus, aspectes de vidre i metall, en segons | El navegador i Studio |
| Integrat: Traçador de camins | La llum que rebota entre superfícies a la targeta gràfica o al processador, la cua de renderitzat i els altres ordinadors de la xarxa | El navegador i Studio |
| Un motor d'un complement | Dibuixa la imatge i la retorna: vegeu [Dibuixa la imatge amb un altre programa](topic:render-other-program) | El navegador (un motor escrit en JavaScript) o Studio (un motor que executa un programa) |
| Un programa que s'emporta l'escena | Studio posa l'escena a la seva carpeta i la manté al dia | Studio |
| Obre a … | Desa l'escena i l'obre en un programa; no torna res: vegeu [Obre l'escena en un altre programa](topic:render-open-in) | La web desa el fitxer |

## Com es comporta la tria

- En triar Ràpid o el Traçador de camins, el Mode canvia amb ell, i a l'inrevés. Res més del diàleg canvia per a qui mai no fa servir un altre motor.
- Un motor que no és disponible es queda a la llista amb el motiu ("no trobat", "cal una versió més nova"); no el podeu triar. Al navegador, un motor que només funciona a Studio mostra "desa un fitxer": {{ui:Renderitza una imatge…}} llavors desa l'escena i la seva configuració en un fitxer que porteu a aquell programa.
- La tria es desa amb la configuració de renderitzat del fitxer, i el motor que vau triar per últim és el motor inicial per als fitxers que no tenen cap tria pròpia.
- Una imatge d'un altre programa indica quin programa l'ha dibuixada i la seva versió, al diàleg i a la cua de renderitzat. Les promeses de la pàgina [Renderitza](topic:render) només cobreixen **els nostres** motors: un altre programa il·lumina, ajusta el to i mostreja a la seva manera, de manera que dues imatges d'una mateixa escena són iguals en càmera, sol, llums i exposició, però no píxel a píxel.

## Què rep cada motor

L'escena va a un altre programa com un **paquet**: el model com a fitxer USD (el mateix fitxer que escriu [Anomena i desa com a USD](topic:usd)), i un fitxer de configuració que conté el que un importador USD no pot dur de manera fiable: els valors exactes dels materials, els llums encesos amb la seva potència i els seus perfils de llum, el sol, el cel, l'exposició i la càmera tal com la dibuixaria el diàleg. No es puja res a cap lloc.

## La cua de renderitzat

Una imatge o una animació per a un altre programa pot esperar a [la cua de renderitzat](topic:render#the-render-queue) com les nostres; la seva tasca recorda per a quin motor és. Una animació va al programa en una sola execució.
