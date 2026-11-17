---
title: Impordi SKP-mudel
summary: Impordi .skp-fail koos gruppide, komponentide, värvide, tekstuuride, siltide ja pehmete servadega, vaata, mis tuli sisse ja mis mitte, ning jätka modelleerimist.
keywords: skp, impordi, ava skp, komponendid, grupid, sildid, kihid, materjalid, värvid, tekstuurid, peidetud, pehmed servad, 3D Warehouse, migreerimine, üleminek
from: 325d3c81
---

ModelCraft loeb SketchUpi faile (`.skp`) oma lugejaga, lehel endal. Midagi ei laadita üles ja see töötab võrguta, nii alati kui ModelCraft ise. Failid SketchUpi versioonidest 3 kuni 2026 on testitud.

## Faili importimine

1. Klõpsa rühmas {{ui:Fail}} nuppu {{ui:Impordi}} (või lohista `.skp`-fail 3D-vaatele).
2. Vali fail.

   Olekuriba ütleb „Loeb faili house.skp…“, seejärel, mis tuli sisse, näiteks „Imporditud house.skp (SketchUp 25.0.575): 1240 tahku, 6 komponenti, ühes grupis.“

Kogu mudel tuleb ühe grupina, mis on nimetatud faili järgi, valitud, ja vaade suumib sinna. Üks {{key:Mod+Z}} viib selle kõik uuesti ära, koos siltidega.

:::tip
Lahuta importgrupp ({{ui:Objekti teave}} › {{ui:Lahuta}}), kui tahad, et selle sisu oleks sinu mudelis lahtine, mitte ühes grupis.
:::

## Mis tuleb sisse

- **Tahud** koos oma aukudega ja **servad**, mis ei ole tahu osa.
- **Grupid** tulevad gruppidena ja **komponendid** komponentidena: iga komponendi koopia on ühe definitsiooni paigutus, nii et ühe koopia muutmine muudab kõiki, nagu SketchUpis. Nimed tulevad kaasa.
- **Värvid.** Tahu enda materjal annab talle värvi. Grupile või komponendile värvitud materjal muutub selle paigutuse värviks, nii et seal sees olevad tahud, millel pole oma värvi, võtavad selle, nagu SketchUpis. Komponent, mis on ühes kohas punaseks ja teises siniseks värvitud, jääb üheks komponendiks.
- **Tekstuurid.** Tekstuurmaterjaliga värvitud tahk tuleb sisse oma tekstuuriga, mis on tahu peale paigutatud nagu failis, ja stiil {{ui:Varjutatud}} näitab seda. Pilt jääb ModelCraft-faili alles, kui salvestad, ja [renderdatud pilt](topic:render) näitab seda samuti. Tekstuurmaterjal, mis on värvitud kogu grupile või komponendile, annab selle koopiale ainult materjali värvi.
- **Sildid.** SketchUpi sildil olev grupp või komponent saab ModelCraft-sildi samanimelisena, mis on nähtav nimekirjas {{ui:Sildid}}, ja on nähtav või peidetud nagu SketchUpis. Kui su mudelil on juba sama nimega silt, kasutatakse seda.
- **Peidetud asjad tulevad peidetuna:** tahud, servad, grupid ja komponendid ning tahud ja servad peidetud sildil. Näed seda, mida SketchUp näitas, ja midagi ei lähe kaotsi: {{ui:Redigeeri}} › {{ui:Rohkem}} › {{ui:Näita kõiki}} näitab need. Vt [Peitmine, isoleerimine ja näitamine](topic:hide-isolate).
- **Pehmed ja siledad servad** jäävad pehmeks, nii et kõverad pinnad näevad endiselt siledad välja.
- **Suurused** tulevad õigesti ükskõik millises ühikus: SketchUpi failid on sees tollides ja ModelCraft teisendab need.

## Mis ei tule sisse

Olekuriba ütleb, mis jäeti välja, koos arvudega.

- **Mõned tekstuurid** jätavad alles ainult oma materjali värvi: tekstuur, mis failis puudub, pilt vormingus, mida brauserid ei näita (näiteks Photoshopi fail), või tekstuur ilma suuruseta. Projitseeritud tekstuuriga tahud tulevad sisse ligikaudu paigutatud tekstuuriga.
- **Sildid lahtistel tahkudel ja servadel.** ModelCraft märgib silti ainult gruppidele ja komponentidele, nii et tahk või serv oma sildiga tuleb sisse ilma sildita ja olekuriba loeb need. Tee sellised tahud grupiks ({{key:Shift+G}}) ja märgi grupp sildiga.
- **Mudelisse paigutatud pildid**, tekst, mõõdud, abijooned, lõiketasandid, stseenid ja stiilid.

## Probleemid

- „See ei ole SketchUpi fail.“ või „See SketchUpi fail on kahjustatud: …“: fail on katki või on midagi muud, millel on `.skp`-nimi. Salvesta see SketchUpis uuesti või küsi värske koopia.
- Fail SketchUpi versioonist, mis on uuem kui ModelCraft tunneb, lükatakse tagasi ja öeldakse, milline versioon leiti.
- Mudel, mis koosneb ainult piltidest, tekstist või mõõtudest, ütleb, et tal pole midagi näidata.

## Mudeli tagasivõtmine

ModelCraft ei saa salvestada `.skp`-faile. Ekspordi Collada ({{ui:Ekspordi}} › `.dae`) ja impordi see SketchUpis: grupid, komponendid ja värvid lähevad üle; tekstuurid lähevad üle kui nende materjali värv. Vt [Ekspordi oma mudel](topic:export-model).
