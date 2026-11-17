---
title: Võrgud
summary: Muuda grupp või komponent võrguks, objektiks, millega 3D-sisutööriistad modelleerivad, ja tagasi push/pull-geomeetriaks.
keywords: võrk, võrgud, polügoon, polügoonid, n-gon, nelinurk, nelinurgad, tipud, poolserv, half-edge, uv, uv-d, teisenda, teisenda võrguks, teisenda geomeetriaks, alamjaotus, skulptimine, modelleerimine, 3D-sisu
from: e32363e8
---

ModelCraftil on kahte liiki geomeetriat. **Push/pull-geomeetria** on see, mida joonistad: lamedad tahud, mis kleepuvad kokku, lõikavad üksteist ja parandavad end. **Võrk** on objekt, millega 3D-sisutööriistad modelleerivad: tahud, millel on suvaline arv nurki, kus igal nurgal võib olla oma tekstuurikoordinaadid (UV-d), normaalid ja värvid ning igal tipul väärtused, näiteks kaalud. Võrku paigutatakse nagu gruppi või komponenti ja see asub push/pull-geomeetria kõrval samas mudelis.

## Grupi või komponendi teisendamine võrguks

1. Vali grupp või komponent.
2. Jaotises {{ui:Entity info}} klõpsa {{ui:Convert to mesh}}.

Tema tahud saavad võrgu tahkudeks (auguga tahk tuleb sisse kolmnurkadena), kõvad servad jäävad teravaks, pehmed servad varjutatakse sujuvalt, ja värv, materjalid ning imporditud tekstuurid jäävad oma tahkudele. Grupid ja komponendid selle sees ühendatakse üheks võrguks. Lahtised servad jäetakse välja: võrk säilitab tahud. Iga komponendi paigutus näitab võrku. See on üks tagasivõtmise samm.

## Mida Entity info näitab

Vali võrk, et näha selle tahke, tippe ja servi, kas see on suletud tahkkeha (ja selle maht) ning selle suurust paigutatuna. Avatud servadega võrk ütleb, mitu neid on.

## Võrgu teisendamine tagasi push/pull-geomeetriaks

Vali võrk ja klõpsa {{ui:Convert to geometry}}. Lamedad tahud tulevad tagasi nagu nad olid; tahk, mille nurgad ei asu ühel tasapinnal, tuleb tagasi kolmnurkadena. Teravad servad on kõvad, teised pehmed. {{ui:Explode}} paneb võrgu tahud otse ümbritsevasse gruppi.

## Mida tasub teada

- Topeltklõps võrgul [muudab selle tippe, servi ja tahke](topic:mesh-edit) Võrgu tööruumis. Teisenda see geomeetriaks, et muuta seda push/pull-iga; teisalda, pööra, mõõtkava, kopeeri, värvi, peida ja sildista seda nagu iga gruppi.
- Eksport, 3D-printimine, renderdused ja VR näevad võrku selle tahkudena.
- Võrku sisaldav fail salvestatakse `.modelcraft`-faili uuema versioonina, nii et ModelCraft 0.6 ja vanemad seda avada ei saa; ilma võrguta failid avanevad neis nagu varem. Teisenda võrgud enne geomeetriaks, et jagada faili kellegagi, kellel on vanem versioon.
- Tagasivõtmine võrgul säilitab ainult selle, mida iga samm muutis, nii et isegi väga suur võrk taastub kiiresti.

Vaata ka [Grupid ja komponendid](topic:groups-components) ja [Veel pole valmis](topic:not-built-yet).
