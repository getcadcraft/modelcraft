---
title: Adoucir et lisser les arêtes
summary: Masquez les arêtes entre faces qui se rencontrent sous un faible angle, pour que les formes courbes se lisent comme une surface lisse, dans ModelCraft et dans les fichiers exportés.
keywords: adoucir, lisser, arêtes douces, ombrage lisse, masquer les arêtes, facettes, à facettes, courbe, normales, durcir, angle
from: 52d32453
---

Une forme courbe dans ModelCraft est faite de faces planes. Les arêtes **douces** entre ces faces ne sont pas dessinées, et les faces qu'elles relient sont ombrées comme une seule surface lisse, de sorte qu'un cylindre à 24 côtés paraît rond.

Lorsque vous tirez un cercle avec {{ui:Push/pull}}, ses côtés sont adoucis pour vous. Pour les autres formes, adoucissez par angle.

## Adoucir par angle

1. Sélectionnez ce qu'il faut adoucir : des faces et des arêtes, ou un groupe ou un composant (toutes ses arêtes).
2. Dans {{ui:Entity info}}, saisissez un angle dans {{ui:Soften up to}}, par exemple `20`, puis cliquez sur {{ui:Soften}}.

Chaque arête de la sélection dont les deux faces tournent de cet angle ou moins devient douce ; les arêtes à virage plus marqué restent dures. Les côtés d'un prisme à 12 côtés tournent de 30° et ses bords de 90°, donc `31` n'adoucit que les côtés.

{{ui:Harden all}} rend de nouveau dures toutes les arêtes de la sélection. Chaque action est une étape d'annulation.

## Points à connaître

- Seules les arêtes situées entre exactement deux faces sont adoucies. Les arêtes libres restent inchangées.
- L'ombrage lisse ne fonctionne qu'à travers les arêtes douces : une face sans arête douce est ombrée à plat.
- Les arêtes douces sont conservées dans le fichier ModelCraft. Les exports **glTF (.glb)** et **OBJ** conservent l'ombrage lisse (une normale par coin), pour que les autres programmes affichent la même surface. Les exports Collada et STL exportent les faces planes.
- Les arêtes douces sont masquées dans tous les styles de faces, y compris {{ui:X-ray}} et {{ui:Wireframe}}. Pour les voir, sélectionnez la forme et cliquez sur {{ui:Harden all}} ; l'annulation rétablit l'adoucissement.
