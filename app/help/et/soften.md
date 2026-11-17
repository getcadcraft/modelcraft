---
title: Pehmenda ja silu servad
summary: Peida servad tahkude vahel, mis kohtuvad madala nurga all, nii et kumerad kujud loevad ühtlase pinnana, ModelCraftis ja eksporditud failides.
keywords: pehmenda, silu, pehmed servad, silutud varjutus, peida servad, tahud, tahuline, kumer, normaalid, karasta, nurk
from: 52d32453
---

Kõver kuju ModelCraftis koosneb tasastest tahkudest. **Pehmed** servad nende tahkude vahel ei ole joonistatud ning tahud, mida nad ühendavad, varjutatakse ühtlase pinnana, nii et 24-nurkne silinder näeb ümmargune välja.

Kui tõmbad ringi {{ui:Lükka/tõmba}}-ga üles, pehmendatakse selle küljed sinu eest. Muude kujude puhul pehmenda nurga järgi.

## Pehmenda nurga järgi

1. Vali, mida pehmendada: tahud ja servad, või grupp või komponent (kõik selle servad).
2. {{ui:Objekti teave}} sees sisesta nurk väljale {{ui:Pehmenda kuni}}, näiteks `20`, ja klõpsa {{ui:Pehmenda}}.

Iga serv valikus, mille kahe tahu pööre on selle nurga või väiksem, muutub pehmeks; teravama pöördega servad jäävad kõvaks. 12-nurkse prisma küljed pöörduvad 30° ja servade ääred 90° võrra, nii et `31` pehmendab ainult küljed.

{{ui:Karasta kõik}} muudab valikus olevad servad jälle kõvaks. Iga on üks tagasivõtmise samm.

## Mida tasub teada

- Pehmendatakse ainult servi, mis on täpselt kahe tahu vahel. Üksikud servad jäävad nagu on.
- Silutud varjutus töötab ainult pehmete servade üle: tahk ilma pehme servata varjutatakse tasaselt.
- Pehmed servad säilivad ModelCraftis failis. **glTF (.glb)** ja **OBJ** eksport kannavad silutud varjutust (normaal iga nurga kohta), nii et teised programmid näitavad sama pinda. Collada ja STL eksportivad tasased tahud.
- Pehmed servad on peidetud kõigis tahkude stiilides, ka {{ui:Röntgen}}-is ja {{ui:Traatmudel}}-is. Et neid näha, vali kuju ja klõpsa {{ui:Karasta kõik}}; tagasivõtmine toob pehmendamise tagasi.
