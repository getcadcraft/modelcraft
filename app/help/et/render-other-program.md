---
title: Joonista pilt teise programmiga
summary: Meie enda kiirteejälgija joonistab renderdamise pildi; teine programm saab joonistada ainult renderdusmootori lisandmooduli kaudu CadCraft Studios. Mis kaasa läheb ja miks mõnda programmi kunagi ei pakuta.
keywords: renderda, mootor, väline programm, lisandmooduli mootor, studio, taust, järjekord, usd, gltf, joonistab, blender, gpl
from: 150f94f1
---

Pildi {{ui:Renderda pilt…}} joonistavad **meie enda mootorid**: Kiire ja Kiirteejälgija, brauseris ja CadCraft Studios. Teine programm saab seda joonistada ainult siis, kui **renderdusmootori lisandmoodul** selle toob: vaata [Renderdusmootori lisamine lisandmooduliga](topic:render-engine-addons). Stseeni teise programmi viimiseks ja seal töötamise jätkamiseks kasuta [Ava stseen teises programmis](topic:render-open-in) või [Saada stseen mängumootorisse](topic:render-unreal).

## Joonista pilt lisandmooduli mootoriga

1. Lülita lisandmoodul sisse jaotises Sätted › Lisandmoodulid. Selle mootor ilmub {{ui:Renderda pilt…}} mootorite loendisse.
2. Vali see. Selle enda sätted kuvatakse mootorite loendi all.
3. Klõpsa {{ui:Renderda}}. Studios küsib Studio esimesel korral, kui lisandmoodul käivitab programmi, oma dialoogis. Edenemine kuvatakse joonistamise ajal; {{ui:Peata}} lõpetab selle. Pilt ilmub märgituna mootoriga, mis selle joonistas.

JavaScriptis kirjutatud mootor töötab ka brauseris. Mootor, mis käivitab programmi selles arvutis, töötab ainult Studios; brauseris näidatakse seda failina, mis salvestada.

## Mis kaasa läheb

Mootor saab **paketi**: mudeli USD-failina (ja glTF-faili, kui see seda küsib) ning sätete faili täpsete materjali väärtuste, päikese ja taevaga, iga sisselülitatud lambiga koos selle võimsuse ja valgusprofiiliga, kaamera ja särituse. Iga programm valgustab, toonib ja proovib omal moel, nii et pildid on kaamera, päikese, lampide ja särituse poolest sarnased, mitte piksel-piksli kaupa.

## Programmid, mida CadCraft kunagi ei käivita

CadCraft ei käivita kunagi programmi GNU GPL litsentsi all ega loetle seda kunagi mootorina ega sihtkohana jaotises Ava programmis. Blender on üks neist, seega see ei ole mootorite loendis. USD- või glTF-fail, mis salvestatakse {{ui:Renderda pilt…}} kaudu, avaneb selles siiski nagu igas programmis, mis neid faile loeb.

:::note
Panoraam- ja stereokaamerad ning taevapilt (kasutatakse hoopis taeva värve) ei lähe teise programmi kaasa. Teises programmis tehtu ei tule mudelisse tagasi.
:::
