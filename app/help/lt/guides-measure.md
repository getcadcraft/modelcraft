---
title: Matuoti ir išdėstyti pagalbines linijas
summary: Skaitykite ilgius ir plotus, matuokite tarp dviejų taškų matavimo juosta ir išdėstykite pagalbines linijas bei taškus, prie kurių piešti.
keywords: matuoti, matavimo juosta, kampamatis, kampas, kampinė pagalbinė linija, pagalbinė linija, konstrukcinė linija, atstumas, matmuo, ilgis, plotas, poslinkis, išdėstymas, pagalbinis taškas
from: de6d04d9
---

## Skaitykite dydžius nematuodami

Pasirinkite ką nors ir pažvelkite į {{ui:Objekto informacija}}:

- Briauna rodo jos **ilgį**.
- Paviršius rodo savo **plotą** ir kiek jame yra skylių.
- Keli paviršiai rodo bendrą **plotą**.
- Grupė arba komponentas rodo savo **dydį** (apibrėžiančios dėžės plotis × gylis × aukštis) ir, jei tai uždaras vientisas kūnas, jo **tūrį**.
- Nieko nepasirinkus, {{ui:Objekto informacija}} rodo visos modelio dydį.

Ilgiai ir plotai naudoja vienetą iš rinkiklio apačioje dešinėje. Milimetrų modelis rodo 0.01 m² ir didesnius plotus kvadratiniais metrais (4 × 3 m kambarys rodo „12 m²“).

Piešiant vertės langelis rodo tiesioginį ilgį, dydį, spindulį ar atstumą, todėl po to retai reikia matuoti.

Norėdami pakeisti dydį nubrėžus, pasirinkite briauną arba grupę ir {{ui:Objekto informacija}} iš naujo įveskite jos ilgį ar dydį. Arba įdėkite [matmenį](topic:dimensions) ir įveskite naują ilgį.

## Matuokite tarp dviejų taškų

1. Paspauskite {{key:T}} matavimo juostai {{ui:Matavimo juosta}}.
2. Spustelėkite tašką: kampą, vidurio tašką, tašką ant paviršiaus arba žemę. (Spustelėjus briauną veikia kitaip; žr. žemiau.)
3. Perkelkite į antrą tašką. Rodyklė ir vertės langelis ({{ui:Ilgis}}) rodo atstumą. Jis prisitraukia prie taškų ir prie raudonos, žalios bei mėlynos krypčių.
4. Spustelėkite. Būsenos juostoje rašoma „Išmatuota 4' 6".“, o antrame taške lieka **pagalbinis taškas**.

Norėdami palikti pagalbinį tašką tiksliu atstumu, įveskite jį po pirmo spustelėjimo ir paspauskite {{key:Enter}}: jis bus ta kryptimi, kuria nukreiptas žymeklis.

## Nubrėžkite pagalbinę liniją

Pagalbinė linija yra begalinė brūkšninė linija, lygiagreti briaunai, nutolusi nuo jos pasirinktu atstumu. Pagalbinėmis linijomis išdėliokite atitraukimą, aukšto aukštį arba vietą, kur prasideda langas.

1. Paspauskite {{key:T}}.
2. Spustelėkite ant **briaunos** (ne jos galo). Užuomina sako „Ant briaunos“.
3. Nutolkite nuo briaunos į tą pusę, kurioje turi būti pagalbinė linija. Brūkšninė linija seka lygiagrečiai briaunai, o vertės langelis ({{ui:Poslinkis}}) rodo atstumą.
4. Spustelėkite arba įveskite poslinkį ir paspauskite {{key:Enter}}: `1.5m`, `5'`.

   Būsenos juostoje rašoma „Pagalbinė linija 1.5 m nuo briaunos.“

Pradėjus nuo esamos pagalbinės linijos, sukuriama kita, lygiagreti jai, todėl tinklelį galite išdėstyti nuo vienos pagalbinės linijos.

Jei įvedate poslinkį nenutolę nuo briaunos, ModelCraft negali nustatyti, kurią pusę turite omenyje: „Pirmiausia nutolkite nuo briaunos, kad parodytumėte pusę.“

## Pagalbinė linija kampu: kampamatis

1. Spustelėkite {{ui:Kampamatis}} grupėje {{ui:Keitimas}}.
2. Spustelėkite centrą: tašką, per kurį eina pagalbinė linija. Ant paviršiaus kampamatis guli ant to paviršiaus; kitur – plokščiai. Po šio spustelėjimo {{key:Right}}, {{key:Left}} arba {{key:Up}} jį pastato statmenai raudonai, žaliai arba mėlynai (paspauskite dar kartą, kad atšauktumėte).
3. Spustelėkite tašką, kuris nustato 0°, pavyzdžiui, palei briauną.
4. Perkelkite į norimą kampą ir spustelėkite: jis prisitraukia 15° žingsniais. Arba įveskite kampą laipsniais, pavyzdžiui `22.5`, ir paspauskite {{key:Enter}}; pagalbinė linija eina į tą pusę, kurioje yra žymeklis.

Pagalbinė linija eina per centrą tuo kampu. Brėžkite palei ją įrankiu {{ui:Linija}} stogo nuolydžiui, nuožulniam kampui arba įstrižai sienai.

## Piešti pagal pagalbines linijas

Piešimo įrankiai prisitraukia prie pagalbinių linijų („Ant pagalbinės linijos“) ir pagalbinių taškų („Pagalbinis taškas“), taip pat prie vietos, kur pagalbinė linija kerta ašies kryptį. Stačiakampį pradėkite tame taške, kur susikerta dvi pagalbinės linijos, kad jis būtų tiksliai ten.

## Pašalinkite pagalbines linijas

- Viena pagalbinė linija: spustelėkite ją įrankiu {{ui:Pasirinkti}} ir paspauskite {{key:Delete}}, arba spustelėkite ją {{ui:Trintukas}}.
- Visos pagalbinės linijos: nieko nepasirinkę, spustelėkite {{ui:Ištrinti visas pagalbines linijas}} skydelyje {{ui:Objekto informacija}}.

Pagalbinės linijos išsaugomos `.modelcraft` faile. Jos neeksportuojamos į kitus formatus.
