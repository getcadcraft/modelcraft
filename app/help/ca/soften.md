---
title: Suavitza i alisa arestes
summary: Amagueu les arestes entre cares que es troben en un angle poc pronunciat, perquè les formes corbes es vegin com una sola superfície suau, a ModelCraft i als fitxers exportats.
keywords: suavitza, alisa, arestes suaus, ombrejat suau, amaga arestes, facetes, amb facetes, corbat, normals, endureix, angle
from: 52d32453
---

Una forma corba a ModelCraft està feta de cares planes. Les arestes **suaus** entre aquestes cares no es dibuixen, i les cares que uneixen s'ombregen com una sola superfície suau, de manera que un cilindre de 24 cares sembla rodó.

Quan aixequeu un cercle amb {{ui:Prem/Estira}}, els seus costats es suavitzen automàticament. Per a altres formes, suavitzeu per angle.

## Suavitza per angle

1. Seleccioneu què suavitzar: cares i arestes, o un grup o component (totes les seves arestes).
2. A {{ui:Informació de l'entitat}}, escriviu un angle a {{ui:Suavitza fins a}}, com `20`, i feu clic a {{ui:Suavitza}}.

Totes les arestes de la selecció les dues cares de les quals giren aquest angle o menys esdevenen suaus; les arestes amb un gir més pronunciat esdevenen dures. Els costats d'un prisma de 12 cares giren 30°, i les seves vores 90°, així que `31` suavitza només els costats.

{{ui:Endureix-ho tot}} torna dures totes les arestes de la selecció. Cada acció és un sol pas de desfer.

## Coses a saber

- Només se suavitzen les arestes entre exactament dues cares. Les arestes soltes es queden com són.
- L'ombrejat suau només funciona a través d'arestes suaus: una cara sense cap aresta suau s'ombreja plana.
- Les arestes suaus es guarden al fitxer de ModelCraft. Les exportacions **glTF (.glb)** i **OBJ** porten l'ombrejat suau (una normal per cantonada), de manera que altres programes mostren la mateixa superfície. Collada i STL exporten cares planes.
- Les arestes suaus s'amaguen amb tots els estils de cara, també {{ui:Raigs X}} i {{ui:Filferro}}. Per veure-les, seleccioneu la forma i feu clic a {{ui:Endureix-ho tot}}; desfer-ho torna a aplicar la suavització.
