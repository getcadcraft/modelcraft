---
title: Komponentai, kuriuos galima tempti
summary: Padarykite vieno komponento kopiją platesnę, gilesnę arba aukštesnę, o jo dalys išlaiko savo dydžius: ilgesnis stalas su tomis pačiomis kojomis, aukštesnė knygų lentyna su išskirstytomis lentynomis, turėklas, kurio stulpeliai kartojasi.
keywords: dinaminis komponentas, tempimas, keisti komponento dydį, parametrinis, pavadinti dydžiai, kartoti, masyvas, kojos, lentynos, turėklas, taisyklės, kintamieji
from: b4c40f43
---

Komponento mastelio keitimas padaro viską jame didesnį, įskaitant kojas ir sijas. **Ištempti šią kopiją** keičia komponento plotį, gylį ar aukštį, o kiekviena dalis seka taisyklę: stalviršis didėja, o jo kojos išlaiko storį ir lieka prie galų.

Tai veikia komponentams, sudarytiems iš dalių, t. y. grupių ar komponentų komponento viduje, kaip ir kiekvienas [pradinės bibliotekos](topic:starter) daiktas.

## Ištempti kopiją

1. Pasirinkite komponentą.
2. {{ui:Objekto informacija}} srityje spustelėkite {{ui:Ištempti šią kopiją…}}.
3. Įveskite naują {{ui:Plotis (raudona)}}, {{ui:Gylis (žalia)}} ir {{ui:Aukštis (mėlyna)}} reikšmes ir spustelėkite {{ui:Tempimas}}.

Keičiasi tik ta viena kopija: ji tampa savarankišku komponentu, kuris prisimena originalą, iš kurio buvo sukurtas. Bet kada galite ją vėl ištempti, ir ji bus apskaičiuojama iš naujo pagal originalą, todėl nieko nenukrypsta. Kitos originalo kopijos lieka tokios, kokios buvo.

## Taisyklės

Atidarykite komponentą (dukart spustelėkite jį) ir pasirinkite vieną iš jo dalių. {{ui:Objekto informacija}} rodo {{ui:Kai komponentas tempiamas}} su taisykle pagal raudoną, žalią ir mėlyną ašis:

| Taisyklė | Ką daro dalis | Pavyzdys |
|---|---|---|
| {{ui:Tempimas}} | Didėja kartu su komponentu; atstumai iki abiejų pusių išlieka | Stalviršis |
| {{ui:Likti pradžioje}} / {{ui:Likti pabaigoje}} | Išlaiko savo dydį ir atstumą iki tos pusės | Kojos |
| {{ui:Perkelti proporcingai}} | Išlaiko savo dydį; jos vidurys juda proporcingai | Lentynos, durų rankena |
| {{ui:Keisti mastelį proporcingai}} | Ir vieta, ir dydis keičiasi proporcingai | Laiptų pakopos |
| {{ui:Kartoti}} | Jos kopijos kas tam tikrą atstumą ({{ui:Kas}}) nuo pradžios iki tolimos pusės | Turėklo stulpeliai |

{{ui:Automatinės}} (pradžioje nustatyta reikšmė) pačios parenka taisyklę ir parodo, kuri ji yra: {{ui:Tempimas}}, kai dalis apima visą komponentą, {{ui:Perkelti proporcingai}}, kai ji yra apytiksliai viduryje, o kitu atveju ji lieka ta puse, prie kurios yra arčiau.

## Kas svarbu

- Dalių pačios formos yra bendros, todėl ištempta kopija yra lengva. Redaguojant dalį, ji pasikeičia visose kopijose.
- Ištempta kopija nesekia vėlesnių originalo taisyklių ar išdėstymo pakeitimų: ištempkite ją dar kartą, kad jie būtų įtraukti.
- Laisvai komponente nubraižyti paviršiai (ne dalyje) išlaiko savo dydį; padarykite juos dalimi, kad jie sektų.
- Taisyklės ir tai, iš ko buvo ištempta kiekviena kopija, įrašomi ModelCraft faile.
