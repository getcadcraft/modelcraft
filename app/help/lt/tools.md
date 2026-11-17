---
title: Įrankių sąrašas
summary: Kiekvienas ModelCraft įrankis su klavišu, ką daro kiekvienas spustelėjimas ir ką galite įvesti į reikšmės laukelį, kol įrankis veikia.
keywords: įrankiai, įrankių juosta, komandos, sąrašas, linija, stačiakampis, apskritimas, daugiakampis, poslinkis, lankas, kreivė, splainas, sek mane, lankas per 2 taškus, lankas iš centro, pasirinkti, stumti traukti, perkelti, sukti, keisti mastelį, trintukas, matavimo juosta, matmuo, sukti vaizdą, slinkti, įdėti komponentą
from: e08a274f
---

Būsenos juostos patarimas visada nurodo, ko dabartinis įrankis tikisi toliau. {{key:Esc}} atšaukia tai, ką įrankis daro vidury.

## Braižymo įrankiai

| Įrankis | Klavišas | Spustelėjimai | Įveskite reikšmės laukelyje |
|---|---|---|---|
| {{ui:Linija}} | {{key:L}} | Pradžia, tada kiekvienas kitas taškas. Sustoja, kai užsidaro paviršius, arba su {{key:Esc}} | Ilgis iki žymeklio; `[x,y,z]` taškas; `<dx,dy,dz>` poslinkis ({{ui:Ilgis}}) |
| {{ui:Stačiakampis}} | {{key:R}} | Pirmas kampas (ant žemės ar paviršiaus), priešingas kampas | Plotis ir gylis: `4m,3m` ({{ui:Matmenys}}) |
| {{ui:Apskritimas}} | {{key:C}} | Centras (ant žemės ar paviršiaus), taškas ant kraštinės | Prieš pirmą spustelėjimą: kraštinės, `24s` arba `24` ({{ui:Kraštinės}}). Po to: spindulys ({{ui:Spindulys}}) |
| {{ui:Daugiakampis}} | {{key:N}} | Centras, kampas | Kaip ir Apskritimas; pradžioje 6 kraštinės |
| {{ui:Lankas}} | {{key:A}} | Pradžia, pabaiga, tada išlinkimas | Jungiamosios linijos ilgis po pradžios ({{ui:Ilgis}}); išlinkimas po pabaigos ({{ui:Išlinkimas}}); `12s` atkarpoms |
| {{ui:Kampamatis}} | — | Centras, 0° taškas, tada kampas | Kampas laipsniais ({{ui:Kampas}}) |
| {{ui:Sek mane}} | — | Pasirinkite kelią, tada spustelėkite paviršių (arba spustelėkite paviršių, tada kelio briauną) | — |
| {{ui:Dažyti}} | {{key:B}} | Paviršius, grupė ar komponentas | — ({{key:Ctrl}} susijusius, {{key:Shift}} visus tos pačios spalvos, {{key:Alt}} paimti spalvą) |
| {{ui:Poslinkis}} | {{key:F}} | Paviršius (arba pirmiausia pasirinkite paviršių ar briaunas), tada pusė ir atstumas | Atstumas ({{ui:Atstumas}}); į paviršių – į vidų |
| {{ui:Kreivė}} | — | Taškai, per kuriuos eina kreivė; {{key:Enter}} arba dukart spustelėjimas baigia | Ilgis palei žymeklį, `[x,y,z]` arba `<dx,dy,dz>` kitam taškui |
| {{ui:Lankas iš centro}} | — | Centras, pradžia, tada pabaiga | Spindulys po centro; kampas laipsniais po pradžios; `12s` atkarpoms |

## Redagavimo įrankiai

| Įrankis | Klavišas | Spustelėjimai | Įveskite reikšmės laukelyje |
|---|---|---|---|
| {{ui:Pasirinkti}} | {{key:Space}} | Spustelėjimas, dukart spustelėjimas, trigubas spustelėjimas, langelio vilkimas. Žr. [Daiktų pasirinkimas](topic:select) | Pasirinkus vieną matmenį ar briauną: naujas ilgis, kuris keičia modelio dydį |
| {{ui:Stumti/traukti}} | {{key:P}} | Paviršius, tada atstumas. Dukart spustelėkite paviršių, kad pakartotumėte paskutinį atstumą | Atstumas; neigiama reikšmė eina kita kryptimi ({{ui:Atstumas}}) |
| {{ui:Perkelti}} | {{key:M}} | Iš taško į tašką. Laikykite {{key:Ctrl}} arba {{key:Alt}}, kad kopijuotumėte | Atstumas link žymeklio, `<dx,dy,dz>` arba `[x,y,z]` ({{ui:Atstumas}}). Po kopijavimo: `3x` arba `/3` |
| {{ui:Sukti}} | {{key:Q}} | Centras (ant paviršiaus – sukti jo plokštumoje), pradžios kryptis, pabaigos kryptis | Kampas laipsniais ({{ui:Kampas}}) |
| {{ui:Keisti mastelį}} | {{key:S}} | Taškas, kuris lieka vietoje, atskaitos taškas, naujas dydis | Koeficientas: `2`, `0.5` ({{ui:Keisti mastelį}}) |
| {{ui:Trintukas}} | {{key:E}} | Spustelėkite arba vilkite per briaunas, grupes, pagalbines linijas ir matmenis | nieko |
| {{ui:Matavimo juosta}} | {{key:T}} | Iš briaunos: lygiagreti pagalbinė linija. Iš taško: išmatuoja ir palieka pagalbinį tašką | Poslinkis ({{ui:Poslinkis}}) arba atstumas ({{ui:Ilgis}}) |
| {{ui:Matmuo}} | {{key:D}} | Du kampai (arba viena briauna), tada kur eina matmens linija. Žr. [Matmuo ir keitimas](topic:dimensions) | Poslinkis ({{ui:Poslinkis}}). Iš karto po to: naujas ilgis, kuris keičia modelio dydį |

{{ui:Perkelti}}, {{ui:Sukti}} ir {{ui:Keisti mastelį}} veikia su pasirinkimu. Jei nieko nepasirinkta, jie pirmiausia paima tai, ką spustelite (paviršius atsineša savo briaunas).

## Kameros įrankiai

| Įrankis | Klavišas | Vilkite, kad |
|---|---|---|
| {{ui:Sukti vaizdą}} | {{key:O}} | Sukasi aplink modelio dalį po žymekliu ({{key:Shift}} slenka) |
| {{ui:Slinkti}} | {{key:H}} | Pastumia vaizdą |
| {{ui:Keisti mastelį}} | {{key:Z}} | Keičia mastelį: aukštyn – artina, žemyn – tolina |
| {{ui:Visi objektai}} | {{key:Shift+Z}} | (mygtukas, ne įrankis) Pritaiko visą modelį ekrane |

Su pele šių beveik nereikia: vilkimas vidurio mygtuku sukasi, vilkimas dešiniuoju mygtuku slenka, o ratukas keičia mastelį su bet kuriuo įrankiu. Žr. [Sukimas, slinkimas ir mastelio keitimas](topic:orbit-pan-zoom).

## Tvarkymas

| Mygtukas | Klavišas | Ką daro |
|---|---|---|
| {{ui:Komponentas}} | {{key:G}} | Pasirinkimą paverčia komponentu |
| {{ui:Grupė}} | {{key:Shift+G}} | Pasirinkimą paverčia grupe |
| {{ui:Suskaidyti}} | nėra | Pasirinktas grupes ir komponentus paverčia atgal laisva geometrija |

## Įdėti komponentą

Nėra įrankių juostoje: spustelėkite {{ui:Dėti}} šalia komponento {{ui:Komponentai}} skydelyje. Vieną kartą spustelėkite ten, kur turi būti komponento pradžios taškas; tada įrankis grįžta prie {{ui:Pasirinkti}}.
