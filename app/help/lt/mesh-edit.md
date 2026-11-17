---
title: Redaguoti tinklelį tinklelio darbo srityje
summary: Pasirinkite tinklelio viršūnes, briaunas ir paviršius, perkelkite juos ir ištraukite, įgilinkite, nuskelkite, pjaukite, jungkite, užpildykite bei sujunkite juos, naudodami bet kurį klavišų stilių.
keywords: tinklelis, redagavimo režimas, tinklelio darbo sritis, viršūnė, viršūnės, briauna, briaunos, paviršius, paviršiai, ištraukti, įgilinti, nuskelti, kontūro pjūvis, peilis, dalinti, sukinėti, sujungti, ištirpinti, užpildyti, tinklelio užpildas, tiltas, padalinti, slinkti, proporcingas redagavimas, slopinimas, darbo sritis
from: 92a372dd
---

**Tinklelio** darbo sritis redaguoja [tinklelį](topic:meshes) taškas po taško: jo viršūnes, briaunas ir paviršius. Stumiamo-traukiamo modeliavimo geometrija lieka **Modelio** darbo srityje.

## Atidarymas

- Įrankių juostos kairėje esančiame {{ui:Darbo sritis}} sąraše pasirinkite {{ui:Tinklelis}}. Pasirinktas tinklelis atsidaro redagavimui; pasirinkta grupė ar komponentas pirmiausia paverčiami tinkleliu (vienas anuliavimo žingsnis).
- Arba du kartus spustelėkite tinklelį, arba, su modeliuotojo klavišais, pasirinkite jį ir paspauskite {{key:Tab}}.
- Jei nieko nepasirinkta, skydelyje siūlomi tinkleliai pridėti: plokštuma, tinklinė plokštuma, kubas, apskritimas, cilindras, kūgis, sfera, ikosfera ir toras. Naujas tinklelis dedamas ten, kur žiūri vaizdas, ir atsidaro redagavimui.

{{ui:Atgal į Modelį}} (arba sąraše, {{key:Tab}} su modeliuotojo klavišais, {{key:Esc}} nieko nepasirinkus su stumti/traukti klavišais) grįžta į Modelį su pasirinktu tinkleliu. Kol atidaryta tinklelio darbo sritis, likusi modelio dalis išblunka, o Modelio braižymo įrankiai paslepiami.

## Pasirinkimas

| Veiksmas | Ką daro |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Pasirinkti viršūnes, briaunas ar paviršius |
| Spustelėjimas | Pasirinkti vieną; {{key:Shift}}+spustelėjimas prideda arba pašalina |
| Vilkti langelį | Pasirinkti tai, kas viduje ir matoma; {{key:Shift}} prideda, {{key:Ctrl}} pašalina |
| {{key:Alt}}+spustelėjimas briaunai arba dvigubas spustelėjimas | Jos briaunų kontūras (paviršių kontūras paviršių režime; visas kraštas atviroje briaunoje) |
| {{key:Ctrl}}+{{key:Alt}}+spustelėjimas briaunai | Jos briaunų žiedas |
| Trigubas spustelėjimas | Viskas, prijungta prie jo |

Grupėje {{ui:Pasirinkti}} taip pat yra {{ui:Visi}}, {{ui:Susietos}}, {{ui:Kontūras}}, {{ui:Žiedas}}, {{ui:Daugiau}} ir {{ui:Mažiau}}.

## Perkėlimas, sukimas, mastelis

{{ui:Perkelti}}, {{ui:Sukti}} ir {{ui:Mastelis}} prasideda nuo žymeklio: judinkite jį, tada spustelėkite arba paspauskite {{key:Enter}}, kad padėtumėte pasirinkimą, arba {{key:Esc}}, kad atšauktumėte. {{key:X}}, {{key:Y}} arba {{key:Z}} (arba rodyklių klavišai) užfiksuoja ašį. Tiksliam rezultatui įveskite atstumą, kampą ar koeficientą – veikia ir [skaičiavimai](topic:value-box#calculations).

**Proporcingas redagavimas** ({{ui:Proporcingas}} arba skydelis): viršūnės šalia pasirinkimo seka perkėlimą, tuo mažiau, kuo toliau jos yra, iki jūsų nustatyto nuotolio, su pasirinktu slopinimu. Įjunkite {{ui:Tik palei tinklelį}}, kad matavimas vyktų palei briaunas, o ne tiesiai.

{{ui:Slinkti}} perkelia pasirinktą briaunų kontūrą palei greta esančias briaunas.

## Keisti formą

| Įrankis | Ką daro |
|---|---|
| {{ui:Ištraukti}} | Ištraukia pasirinktus paviršius išilgai jų normalės su naujais šoniniais paviršiais (arba sukuria paviršius iš atvirų kraštinių briaunų). Įveskite atstumą |
| {{ui:Įgilinti}} | Juosta pasirinktų paviršių kontūro viduje; kiekvienam paviršiui atskirai {{key:I}} spauskite dar kartą |
| {{ui:Nuskelti}} | Nuskelia pasirinktas briaunas (arba, {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, viršūnes) nurodytu plotiu; ratukas arba pliuso ir minuso klavišai prideda segmentų apvalinamai briaunai |
| {{ui:Kontūro pjūvis}} | Nukreipkite į briauną: nauji kontūrai per keturkampių paviršių žiedą; ratukas nustato, kiek; spustelėkite pjūviui |
| {{ui:Peilis}} | Spustelėkite taškus ant briaunų ar kampų; {{key:Enter}} pjauna tiesiai per paviršius tarp jų, kaip matote |
| {{ui:Dalinti}} | Nubrėžkite liniją ekrane: pasirinkti paviršiai (arba visi) pjaunami palei ją |
| {{ui:Sukinėti}} | Sukasi pasirinkti paviršiai ar atviros briaunos apie mėlyną ašį žingsniais (ratukas nustato juos); pilnas apsisukimas uždaro |
| {{ui:Padalinti}} | Perpjauna pasirinktas briaunas per pusę; visi paviršiai tampa tinklu |
| {{ui:Sujungti}} | Pasirinktos viršūnės tampa viena, jų centre |
| {{ui:Ištirpinti}} | Pašalina pasirinkimą, bet palieka paviršių: paviršiai susijungia |
| {{ui:Užpildyti}} | Paviršius per pasirinktą atvirą kraštą (arba tarp dviejų atvirų briaunų) |
| {{ui:Tinklelio užpildas}} | Užpildo atvirą kraštą su lyginiu briaunų skaičiumi keturkampių tinklu |
| {{ui:Tiltas}} | Sujungia dvi pasirinktas atviras briaunų kilpas paviršiais |
| {{ui:Raukšlė}} | Kokios aštrios lieka pasirinktos briaunos, kai tinklelis išlyginamas padalijimo paviršiumi: judinkite nuo centro, naudokite ratuką (0.1 žingsniais) arba įveskite nuo 0 iki 1. Skydelyje rodoma pasirinktų briaunų raukšlė, taip pat galima įvesti reikšmę. Raukšlių briaunos nupiešiamos magenta spalva |
| {{ui:Apversti}}, {{ui:Lyginti}}, {{ui:Naikinti}} | Apverčia paviršius; lygina viršūnes link kaimyninių; naikina pagal pasirinkimo režimą |

Kiekvienas yra vienas anuliavimo žingsnis. Tekstūros koordinatės, spalvos ir svoriai perkeliami į naujus paviršius ir viršūnes.

## Perkurti tinklą

{{ui:Perkurti tinklą}} sukuria visą tinklelį iš naujo kaip vienodo dydžio lygius trikampius, pagal tai, ką nurodote paspaudę (mažesnis – smulkesnis ir lėtesnis). Jis uždaro skyles, sujungia persidengiančias dalis ir išlygina tinklelį, kurį tempė skulptūravimas. Aštrios briaunos lieka itin lengvai suapvalintos. UV, dažai ir raukšlės prasideda iš naujo. Vienas anuliavimo žingsnis.

## Retopologija

Norėdami sukurti naują, švaresnį tinklelį ant detalaus (skulptūros, skenavimo), skydelyje pasirinkite detalų tinklelį {{ui:Retopologija}} › **Kurti ant** ir tada:

- **Prilipdyti perkeltus taškus prie jo:** taškai, kuriuos perkeliate, ir briaunos, kurias ištraukiate, atsiduria jo paviršiuje.
- **Uždėti pasirinktus taškus ant jo** dabar perkelia pasirinktus taškus ant jo (vienas anuliavimo žingsnis).
- **Rodyti šio tinklelio briaunas priekyje** nupiešia kuriamą tinklelį virš paviršiaus, kad jį matytumėte.

## Koreguoti paskutinę operaciją

Po {{ui:Įgilinti}}, {{ui:Nuskelti}}, {{ui:Kontūro pjūvis}}, {{ui:Padalinti}}, {{ui:Lyginti}}, {{ui:Tinklelio užpildas}} ar {{ui:Sukinėti}} skydelyje rodomi jos nustatymai (plotis, segmentai, profilis, pjūviai …). Pakeitus vieną, operacija atliekama iš naujo nuo pradžios, ir tai vis tiek vienas anuliavimo žingsnis.

## Klavišai

| | Stumti/traukti klavišai | Modeliuotojo klavišai |
|---|---|---|
| Perkelti, sukti, mastelis | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} du kartus slenka) |
| Ištraukti, įgilinti | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Naikinti | {{key:E}} arba {{key:Delete}} | {{key:X}} arba {{key:Delete}} |
| Raukšlė | {{key:Shift+C}} | {{key:Shift+E}} |
| Pasirinkti viską, nieko, apversti pasirinkimą | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Abiem | {{key:Ctrl+B}} nuskelti, {{key:Ctrl+R}} kontūro pjūvis, {{key:K}} peilis | tas pats, ir {{key:F}} užpildyti, {{key:M}} sujungti, {{key:Ctrl+X}} ištirpinti, {{key:L}} / {{key:Ctrl+L}} susieta, {{key:Alt+N}} apversti, {{key:O}} proporcingas, {{key:Shift+V}} viršūnės slinkimas |

Taip pat žr. [Tinkleliai](topic:meshes), [Modifikatoriai ant tinklelio](topic:modifiers) ir [Dar neįgyvendinta](topic:not-built-yet).
