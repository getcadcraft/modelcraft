---
title: Maapind: pinnas samakõrgusjoontest ja selle modelleerimine
summary: Tee pinnas samakõrgusjoontest või ruudustikuna ning tõsta ja langeta seda pehme pintsliga.
keywords: maapind, maastik, pinnas, topograafia, samakõrgusjooned, kõrgusjooned, krunt, kalle, mägi, küngas, liivakast, smoove, modelleerimine, vertikaalplaneerimine, TIN
from: 407652b3
---

Maapind on kolmnurkadest koosnev pinnas, nii et see võib järgida igasugust kuju. See on grupp: topeltklõps sellel avab selle muutmiseks.

## Samakõrgusjoontest

1. Hangi samakõrgusjooned nende kõrgustes: joonista need või [impordi krundiplaan](topic:site-plan) ja tõsta iga samakõrgusjoon oma tasemele.
2. Vali need (kõigi samakõrgusjoonte kõik servad).
3. {{ui:Redigeeri}} › {{ui:Rohkem}} › {{ui:Maastik valitud samakõrgusjoontest}}.

ModelCraft ühendab samakõrgusjoonte punktid kolmnurkadega (TIN) ja pehmendab iga sisemist serva, nii et pinnas varjutub siledalt. Jooned ise jäävad alles; kustuta või peida need, kui neid enam ei vaja. Väga tihedad samakõrgusjooned lihtsustatakse 8 000 punktini.

## Ruudustik modelleerimiseks

{{ui:Redigeeri}} › {{ui:Rohkem}} › {{ui:Maastikuruudustik…}} küsib laiust, sügavust ja ruudu suurust ning paigutab lameda kolmnurkade ruudustiku sinna, kuhu klõpsad selle nurga. Väiksemad ruudud modelleeruvad siledamalt, kuid tekitavad rohkem tahke (kõige rohkem 200 × 200 ruutu).

## Modelleerimine: pinnase tõstmine ja langetamine

1. Topeltklõpsa maapinnal, et see avada.
2. {{ui:Redigeeri}} › {{ui:Rohkem}} › {{ui:Modelleeri maastikku}}. Ring näitab pintslit pinnal kursori all.
3. Lohista üles, et tõsta pintsli all olevat pinda, või alla, et seda langetada. Keskpunkt liigub kõige rohkem ja pind taandub ringi servas nullini, nii et künkad ja lohud tulevad siledad.

Kindla kõrgusega küngaste tegemiseks klõpsa üks kord, sisesta siis kõrgus, näiteks `1.5m` (miinus langetab), ja vajuta {{key:Enter}}. Pintsli muutmiseks sisesta enne klõpsamist pikkus: `5m` annab pintslile raadiuse 5 m.

Iga modelleerimine on üks tagasivõtmise samm.

## Mida tuleb teada

- Modelleerimine liigutab ainult kolmnurkseid tahke, nii et iga tahk jääb lamedaks. Käsitsi joonistatud tahud (ristkülikud, hulknurgad) ei ole maapind: tööriist ütleb seda.
- Modelleerimine liigutab punkte ainult üles ja alla; see ei lisa punkte. Täpsema detaili jaoks tee ruudustik väiksemate ruutudega.
- Maapind ekspordib nagu iga teine grupp. IFC-s on see ehitiselemendi proxy, nagu kõik muu.
