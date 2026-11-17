---
title: Vali, milline programm pildi joonistab
summary: Mootori valik renderdamisdialoogis: meie enda kaks mootorit, teised programmid CadCraft Studios ja mida teeb veeb.
keywords: renderda, mootor, renderdaja, renderdusmootor, pistikprogramm, plugin, studio, väline programm, joonistab, järjekord, lisandmooduli mootor
from: be4b056a
---

{{ui:Renderda pilt…}} on valik **Mootor** režiimi kohal. Meie enda kaks mootorit on alati olemas ja töötavad kõikjal; lisandmoodulid võivad lisada veel, ning CadCraft Studios sisaldab loend ka programme, mis stseeni üle võtavad.

| Mootor | Mida see teeb | Kus |
|---|---|---|
| Sisseehitatud: Kiire | Kiire pilt: päevavalgus, pehmed varjud, klaasi ja metalli välimus, sekunditega | Brauser ja Studio |
| Sisseehitatud: Kiirteejälgija | Valgus põrkub pindade vahel sinu graafikakaardil või protsessoril, renderdamise järjekorras ja su võrgu teistes arvutites | Brauser ja Studio |
| Lisandmooduli mootor | See joonistab pildi ja annab selle tagasi: vaata [Joonista pilt teise programmiga](topic:render-other-program) | Brauser (JavaScriptis kirjutatud mootor) või Studio (mootor, mis käivitab programmi) |
| Programm, mis võtab stseeni üle | Studio paneb stseeni oma kausta ja hoiab seda sünkroonis | Studio |
| Ava programmis … | Salvestab stseeni ja avab selle programmis; midagi ei tule tagasi: vaata [Ava stseen teises programmis](topic:render-open-in) | Veeb salvestab faili |

## Kuidas valik toimib

- Kiire või Kiirteejälgija valimine muudab ka režiimi ja vastupidi. Ükski muu dialoogi osa ei muutu neile, kes teisi mootoreid ei kasuta.
- Mootor, mis pole saadaval, jääb loendisse koos põhjusega („ei leitud“, „vajab uuemat versiooni“); seda ei saa valida. Brauseris kuvatakse Studios töötav mootor tekstiga „salvestab faili“: {{ui:Renderda pilt…}} salvestab siis stseeni ja selle sätted failina, mille viid sellesse programmi.
- Valik salvestatakse koos faili renderdussätetega ning viimati valitud mootor on algmootor failidele, millel pole oma valikut.
- Teise programmi pilt ütleb, milline programm selle joonistas ja mis versioonis, nii dialoogis kui renderdamise järjekorras. [Renderda](topic:render) lehe lubadused katavad ainult **meie enda** mootoreid: teine programm valgustab, toonib ja proovib omal moel, nii et kahe pildi puhul on kaamera, päike, lambid ja säritus sarnased, mitte piksel-piksli kaupa.

## Mida iga mootor saab

Stseen läheb teise programmi **paketina**: mudel USD-failina (sama fail, mida kirjutab [USD-na salvestamine](topic:usd)) ning sätete fail, mis hoiab seda, mida USD-importija ei saa usaldada: täpsed materjali väärtused, sisselülitatud lambid koos võimsuse ja valgusprofiilidega, päike, taevas, säritus ja kaamera nii, nagu dialoog seda joonistaks. Midagi ei laadita kuhugi üles.

## Renderdamise järjekord

Teise programmi pilt või animatsioon võib oodata [renderdamise järjekorras](topic:render#the-render-queue) nagu meie enda, ning selle töö mäletab, millise mootori jaoks ta on. Animatsioon läheb programmi ühe käiguga.
