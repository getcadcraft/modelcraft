---
title: Kreivių objektai
summary: Piešti Bézier, NURBS ir tiesių atkarpų kreives, suteikti joms storį, plotį ar susiaurėjimą, užpildyti plokščias, nustatyti tekstą kaip kreivę ir paversti jas tinklais.
keywords: kreivė, kreivės, bezier, nurbs, splainas, splainai, kelias, vamzdis, kabelis, virvė, nuožulna, ekstruzija, susiaurėjimas, posvyris, spindulys, užpildymas, profilis, tekstas, raidės, logotipas, kreivė į tinklą
from: 602bf077
---

**Kreivės objektas** – tai kreivė, kuri sukuria formą: vamzdis išilgai jos (nuožulna), juosta (ekstruzija), susiaurėjantis ragas (susiaurėjimas) arba – kai ji plokščia ir uždara – užpildyta plokštė ar raidės. Forma seka kreivę: perkelkite tašką ir vamzdis juda kartu su juo. Kai forma tinkama, paverskite ją tinklu.

## Kreivės pridėjimas

Darbo sričių sąraše pasirinkite {{ui:Kreivė}} ir spustelėkite {{ui:Pridėti}}:

| Rūšis | Kas tai |
| --- | --- |
| Bézier kreivė, Bézier apskritimas | Eina per savo taškus; kiekvienas taškas turi dvi rankenėles, nustatančias kreivės kryptį |
| NURBS kreivė, NURBS apskritimas, Kelias | Sklandi, braižoma link savo taškų (prasideda ir baigiasi savo galiniais taškais); kiekvienas taškas turi svorį |
| Tekstas | Jūsų tekstas kaip plokštūs, užpildyti raidžių kontūrai |

Nauja kreivė gauna plonytį vamzdelį, kad ją būtų galima matyti ir pasirinkti; norėdami gauti nuogą kreivę, nustatykite jos nuožulnos gylį į 0.

Taip pat galite pradėti nuo nubrėžto: modelio darbo srityje pasirinkite lanką, apskritimą, daugiakampį ar nubrėžtą kreivę ir {{ui:Objekto informacija}} skiltyje spustelėkite {{ui:Sukurti kreivės objektą}}. Nubrėžtos linijos lieka.

## Taškų redagavimas

Dukart spustelėkite kreivės objektą (arba pasirinkite jį ir {{ui:Kreivė}}), kad jį redaguotumėte.

- Spustelėkite tašką ar rankenėlę ({{key:Shift}} prideda arba pašalina); vilkite, kad perkeltumėte. Vilkite tuščioje vietoje, kad pasirinktumėte langeliu.
- {{ui:Ištęsti}} ({{key:E}} arba {{key:Ctrl}}+spustelėjimas) prideda tašką po pasirinkto galo, žymeklio vietoje.
- {{ui:Padalinti}} ({{key:W}}) deda tašką tarp kiekvienos pasirinktų kaimyninių porų; Bézier išlaiko savo formą.
- {{ui:Perkelti}}, {{ui:Pasukti}}, {{ui:Mastelis}} perkelia pasirinktus taškus pagal žymeklį (modeliuotojo klavišai {{key:G}} {{key:R}} {{key:S}}, stumti/traukti klavišai {{key:M}} {{key:Q}} {{key:S}}); spustelėkite, kad išsaugotumėte, {{key:Esc}} – atšaukti.
- {{ui:Uždaryti}} ({{key:C}}) uždaro atvirą splainą arba atidaro uždarytą; {{ui:Apversti}} ({{key:Shift+R}}) paleidžia jį priešinga kryptimi.
- Bézier rankenėlės: {{ui:Lyginti}} ({{key:V}}) jas padeda sklandžiai kreivei, {{ui:Kampas}} ({{key:Shift+V}}) nukreipia jas į kaimynus, {{ui:Laisva}} ({{key:Alt+V}}) palieka ten, kur padėjote. Vilkiant rankenėlę ji tampa laisva.
- {{ui:Bézier}}, {{ui:NURBS}} ir {{ui:Poly}} pakeičia pasirinktų splainų tipą, išlaikydami taškus.

Kiekvienas pakeitimas – vienas anuliavimo žingsnis.

## Forma

Nustatymai yra skydelyje (ir modelio darbo srityje – {{ui:Objekto informacija}}):

- **Forma:** 3D kreivės gali eiti bet kuria kryptimi; plokščia kreivė lieka savo plokštumoje ir gali būti užpildyta.
- **Užpildyti uždarus splainus** (plokščius): kontūrai tampa plokšte; kontūras, esantis kito kontūro viduje, yra skylė, todėl raidės išlaiko savo skyles.
- **Ekstruzija:** pusė juostos pločio (atviroms ar 3D kreivėms) arba pusė plokštės storio (užpildytoms).
- **Nuožulnos gylis** ir **apvalumas:** apvalus vamzdis išilgai kreivės (su ekstruzija: suapvalinta juosta); užpildytoje formoje – suapvalinta briauna.
- **Uždaryti galus:** dangteliai atvirame vamzdyje.
- **Susiaurėjimas išilgai:** tolygiai keičia mastelį išilgai kiekvieno splaino, pavyzdžiui, `1, 0.2` ragui, `0, 1, 0` verpstei.
- **Sklandumas** ir, NURBS atveju, **eilė**: kaip smulkiai ji braižoma ir kaip sklandi (2 – tiesi … 6 – sklandžiausia).
- Pasirinkus taškus: **spindulys** (vamzdžio storis toje vietoje, padaugintas iš nuožulnos), **posvyris** (pasuka juostą apie kreivę) ir, NURBS atveju, **svoris**.

Modifikatoriai veikia kreivės objekto viršuje, kaip ir ant tinklo: Array išilgai jo, Mirror, Subdivision surface. Žr. [Modifikatoriai ant tinklo](topic:modifiers).

## Pavertimas į tinklą

{{ui:Į tinklą}} (kreivės darbo srityje arba {{ui:Objekto informacija}} skiltyje {{ui:Kreivė į tinklą}}) paverčia kreivės objektą tinklu, kokį jis rodo dabar; jo modifikatoriai lieka viršuje. Tada redaguokite jį tinklo darbo srityje. Anuliavimas grąžina jį atgal.

Taip pat žr. [Tinklai](topic:meshes) ir [Tinklo redagavimas](topic:mesh-edit).
