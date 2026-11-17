---
title: Preluarea unui amplasament din CivilCraft
summary: Deschideți fișierul de amplasament creat de CivilCraft din adresă și adăugați clădirile și parcela din jur ca volume și o linie de amplasament, doar pe cele bifate.
keywords: amplasament, civilcraft, adresă, parcelă, clădiri vecine, volume, context, ccsite, date deschise, openstreetmap
from: f28e4a3b
---

CivilCraft poate căuta o adresă și poate salva ce știu sursele de date deschise în jurul ei: clădirile vecine, parcela și contururile inundațiilor, zonificării și solului. ModelCraft preia fișierul ca sugestii. Nu se adaugă nimic până nu decideți.

## Aducerea fișierului

1. În CivilCraft, trimiteți amplasamentul către ModelCraft sau salvați fișierul (se termină în `.ccsite.json`).
2. În ModelCraft, deschideți sau trageți fișierul în aplicație. Se deschide o listă cu o casetă de bifare pentru fiecare clădire și pentru parcelă.
3. Introduceți o înălțime pentru clădirile pentru care sursa nu a dat niciuna. Lângă fiecare rând apare o linie care spune de unde vine înălțimea lui: numărul de niveluri înmulțit cu 3 m fiecare, sau înălțimea pe care ați introdus-o.
4. Apăsați {{ui:Adăugare a celor bifate}}.

Clădirile bifate devin volume extrudate într-o singură componentă, iar parcela devine o linie în jurul amplasamentului. Totul este un singur pas de anulare. Punctul de adresă se află în origine, la metri spre est și spre nord de el.

Inundațiile, zonificarea și contururile solului sunt listate doar informativ; nu sunt desenate.

Datele provin din surse deschise și își au atribuirea în partea de jos a listei. Înălțimile care nu au fost date sunt presupuneri, așa că verificați-le înainte să vă bazați pe ele.
