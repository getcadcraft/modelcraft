---
title: Verzag en gladmaak van rande
summary: Verberg die rande tussen vlakke wat in 'n vlak hoek ontmoet, sodat geboë vorms as een gladde oppervlak lees, in ModelCraft en in uitgevoerde lêers.
keywords: verzag, gladmaak, sagte rande, gladde skakering, verberg rande, fasette, gefasetteer, geboë, normale, verhard, hoek
from: 52d32453
---

'n Geboë vorm in ModelCraft bestaan uit plat vlakke. **Sagte** rande tussen daardie vlakke word nie geteken nie, en die vlakke wat hulle verbind, word as een gladde oppervlak geskakeer, sodat 'n 24-sydige silinder rond lyk.

Wanneer jy 'n sirkel met {{ui:Push/pull}} optrek, word sy sye vir jou verzag. Vir ander vorms, verzag volgens hoek.

## Verzag volgens hoek

1. Kies wat om te verzag: vlakke en rande, of 'n groep of komponent (al sy rande).
2. In {{ui:Entity info}}, tik 'n hoek in {{ui:Soften up to}}, soos `20`, en klik {{ui:Soften}}.

Elke rand in die seleksie waarvan die twee vlakke met daardie hoek of minder draai, word sag; rande met 'n skerper draai word hard. 'n Prisma met 12 sye se sye draai met 30° en sy rande met 90°, so `31` verzag net die sye.

{{ui:Harden all}} maak elke rand in die seleksie weer hard. Elkeen is een ontdoenstap.

## Goed om te weet

- Net rande tussen presies twee vlakke word verzag. Losse rande bly soos hulle is.
- Gladde skakering werk net oor sagte rande: 'n vlak sonder 'n sagte rand skakeer plat.
- Sagte rande word in die ModelCraft-lêer bewaar. **glTF (.glb)**- en **OBJ**-uitvoere dra die gladde skakering ('n normaal per hoek), sodat ander programme dieselfde oppervlak wys. Collada en STL voer plat vlakke uit.
- Sagte rande is verborge in elke vlakstyl, ook {{ui:X-ray}} en {{ui:Wireframe}}. Om hulle te sien, kies die vorm en klik {{ui:Harden all}}; ontdoen bring die verzaging terug.
