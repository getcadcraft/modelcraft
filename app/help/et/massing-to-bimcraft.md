---
title: Mahumudeli saatmine BimCraftile
summary: Saada push/pull-meetodil tehtud mahud BimCraftile mahuvariantidena, kus korrused, jalajälg, brutopind ja maht arvutatakse igast tahkkehast.
keywords: mahumudel, mass, kontseptsioon, variandid, bimcraft, ifc, bim, push/pull, korrused, brutopind, jalajälg, maht, saatmine, üleandmine, hoone mass, etapp 2
from: 73c51f3f
---

## Mida sa teed

Muuda push/pull-meetodil modelleeritud plokid BimCraftile arusaadavateks mahuvariantideks, et kontseptsioon jätkuks hoonemudelina.

## Enne alustamist

Tee iga mass **grupiks** või **komponendiks** ja nimeta see. Igast saab üks variant. Lahtine geomeetria ei lähe kaasa.

## Saatmine

1. Vali saadetavad grupid. Kui midagi pole valitud, lähevad kõik ülemise taseme grupid ja komponendid.
2. Vali {{ui:Export}}, seejärel {{ui:Massing to BimCraft…}}.
3. Sisesta {{ui:Name of the option set}} ja {{ui:Floor height}}.
4. Kontrolli nimekirja: iga variandi korrused, jalajälg, brutopind ja maht.
5. Vali **Saada BimCraftile**, et avada BimCraft uues vahekaardis variantidega, või {{ui:Save as IFC}}, et fail alla laadida ja seal ise avada.

BimCraftis on variandid nimekirjas „Mahuvariandid mudelis“, kus ühe saab teha praeguseks variandiks ja arendada seinteks ja põrandateks.

## Kuidas tahkkehast saab mass

- **Korrused** on tahkkeha kõrgus jagatud korruse kõrgusega, ümardatud ja vähemalt üks. Korrused jagavad seejärel tahkkeha kõrguse võrdselt, nii et 10 m plokk 3 m korrustega on 3 korrust, igaüks 3,33 m.
- **Korruse pindala** on tahkkeha enda horisontaalse lõike pindala selle korruse tasemel. Plokk, mis astub tagasi, on ülemised korrused väiksemad ning brutopind on nende summa.
- **Jalajälg** on lõike ääris vahetult tahkkeha aluse kohal.
- **Maht** on tahkkeha enda oma.

IFC-failis on iga variant hoone elemendi proksi (jalajälg tõstetud tahkkeha kõrguseni), kus on igal korrusel üks ruum, mis kannab korruse brutopinda. Kõik variandid jagavad ühte hoonet, mille korruseid on sama palju kui kõige kõrgemal variandil.

## Lihtsustatud kujud

Lihtne püsti seisev plokk läheb üle täpselt sellisena, nagu see on modelleeritud. Kõik muu saadetakse ikka, ja nimekiri ütleb, miks kuju on lihtsustatud:

- **Kõik korrused pole aluse suurused** (kuju astub tagasi või kaldub): BimCraftis on mass aluse ääris tõstetud täiskõrguseni, kuid korruste pindalad ja maht on tahkkeha enda omad.
- **Tahkkeha pole suletud**: korruseid, mille lõiget ei saa sulgeda, ei mõõdeta ja need loetakse nulliks. Sule tahkkeha ({{ui:Entity info}} ütleb „Tahke: Jah“), et saada täielikud andmed.
- **Selle alusel on rohkem kui üks ääris**: kasutatakse suurimat jalajäljena.

## Hea teada

- {{ui:IFC for BimCraft (.ifc)}} on eraldi eksport: see saadab ainult kujud ja nimed, ilma korrusteta ja pindalata.
- Midagi ei laadita üles. Fail antakse üle BimCraftiga vahekaardile selles arvutis.
