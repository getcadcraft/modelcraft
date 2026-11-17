---
title: Tinkleliai
summary: Paverskite grupę ar komponentą tinkleliu – tokio tipo objektu, kuriuo modeliuoja 3D turinio įrankiai – ir atgal į stumiamo-traukiamo modeliavimo geometriją.
keywords: tinklelis, tinkleliai, daugiakampis, daugiakampiai, n-kampis, keturkampis, keturkampiai, viršūnės, pusė-briauna, uv, uvs, konvertuoti, konvertuoti į tinklelį, konvertuoti į geometriją, padalijimas, skulptūra, modeliavimas, 3D turinys
from: e32363e8
---

ModelCraft turi dviejų rūšių geometriją. **Stumiamo-traukiamo modeliavimo geometrija** yra tai, ką braižote: plokšti paviršiai, kurie susijungia, kerta vienas kitą ir susiglaisto. **Tinklelis** yra tokio tipo objektas, kuriuo modeliuoja 3D turinio įrankiai: paviršiai su bet kokiu kampų skaičiumi, kiekvienas kampas gali turėti savo tekstūros koordinates (UV), normales ir spalvas, o kiekviena viršūnė – tokias reikšmes kaip svoriai. Tinklelis dedamas kaip grupė ar komponentas ir stovi šalia stumiamo-traukiamo modeliavimo geometrijos tame pačiame modelyje.

## Grupės ar komponento pavertimas tinkleliu

1. Pasirinkite grupę ar komponentą.
2. {{ui:Objekto informacija}} spustelėkite {{ui:Konvertuoti į tinklelį}}.

Jo paviršiai tampa tinklelio paviršiais (paviršius su skylėmis įeina kaip trikampiai), kietos briaunos lieka aštrios, minkštos briaunos šešėliuojamos sklandžiai, o dažai, medžiagos ir importuotos tekstūros lieka ant savo paviršių. Grupės ir komponentai jame sujungiami į vieną tinklelį. Laisvos briaunos praleidžiamos: tinklelis išlaiko paviršius. Kiekvienas komponento išdėstymas rodo tinklelį. Tai vienas anuliavimo žingsnis.

## Ką rodo Objekto informacija

Pasirinkite tinklelį, kad pamatytumėte jo paviršius, viršūnes ir briaunas, ar jis uždarytas kietas kūnas (ir jo tūrį) bei jo dydį išdėstytą. Tinklelis su atviromis briaunomis nurodo, kiek jų yra.

## Tinklelio pavertimas atgal į stumiamo-traukiamo modeliavimo geometriją

Pasirinkite tinklelį ir spustelėkite {{ui:Konvertuoti į geometriją}}. Plokšti paviršiai grįžta tokie, kokie buvo; paviršius, kurio kampai nėra vienoje plokštumoje, grįžta kaip trikampiai. Aštrios briaunos lieka kietos, kitos – minkštos. {{ui:Suskaidyti}} tinklelio paviršius tiesiai perkelia į aplink jį esančią grupę.

## Verta žinoti

- Dukart spustelėkite tinklelį, kad [redaguotumėte jo viršūnes, briaunas ir paviršius](topic:mesh-edit) Tinklelio darbo srityje. Paverskite jį geometrija, kad redaguotumėte stumiant-traukiant; perkelkite, sukite, keiskite mastelį, kopijuokite, dažykite, slėpkite ir žymėkite jį kaip bet kurią grupę.
- Eksportai, 3D spausdinimas, atvaizdavimai ir VR tinklelį mato kaip jo paviršius.
- Failas, kuriame yra tinklelis, įrašomas kaip naujesnė `.modelcraft` failo versija, todėl ModelCraft 0.6 ir senesnės versijos jo neatidaro; failai be tinklelių senesnėse versijose atsidaro kaip anksčiau. Prieš dalydamiesi failu su senesnės versijos naudotoju, pirmiausia paverskite tinklelius geometrija.
- Anuliavimas tinklelyje išsaugo tik tai, ką kiekvienas žingsnis pakeitė, todėl net labai didelis tinklelis anuliuojamas greitai.

Taip pat žr. [Grupės ir komponentai](topic:groups-components) ir [Dar neįgyvendinta](topic:not-built-yet).
