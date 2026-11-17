---
title: Siųsti mases į BimCraft
summary: Perduokite stumiamo-traukiamo modeliavimo mases BimCraft kaip masės variantus, su aukštais, pėdsaku, bendruoju grindų plotu ir tūriu, apskaičiuotais iš kiekvieno kieto kūno.
keywords: masė, masės, konceptas, variantai, bimcraft, ifc, bim, stumti traukti, grindys, aukštai, bendras grindų plotas, pėdsakas, tūris, siųsti, perduoti, pastato masė, 2 etapas
from: 73c51f3f
---

## Ką darysite

Paverskite blokus, kuriuos modeliavote stumdami ir traukdami, į masės variantus, kuriuos supranta BimCraft, kad konceptas būtų tęsiamas kaip pastato modelis.

## Prieš pradedant

Kiekvieną masę padarykite **grupe** arba **komponentu** ir pavadinkite. Kiekviena taps vienu variantu. Laisva geometrija nesiunčiama.

## Siuntimas

1. Pasirinkite grupes, kurias siųsti. Jei nieko nepasirinkta, siunčiamos visos aukščiausio lygio grupės ir komponentai.
2. Pasirinkite {{ui:Eksportuoti}}, tada {{ui:Mases į BimCraft…}}.
3. Įveskite {{ui:Variantų rinkinio pavadinimas}} ir {{ui:Aukšto aukštis}}.
4. Patikrinkite sąrašą: kiekvieno varianto aukštus, pėdsaką, bendrąjį grindų plotą ir tūrį.
5. Pasirinkite **Siųsti į BimCraft**, kad BimCraft atsidarytų naujame skirtuke su variantais, arba {{ui:Įrašyti kaip IFC}}, kad atsisiųstumėte failą ir atidarytumėte jį patys.

BimCraft variantai išvardyti skiltyje „Masės variantai modelyje“, kur vieną galima padaryti dabartiniu variantu ir išplėtoti į sienas bei grindis.

## Kaip kietas kūnas tampa mase

- **Aukštai** – kieto kūno aukštis, padalytas iš aukšto aukščio, suapvalintas, bet ne mažiau nei vienas. Tada aukštai lygiai dalija kieto kūno aukštį, todėl 10 m blokas, kurio aukštas 3 m, turi 3 aukštus po 3.33 m.
- **Aukšto plotas** – paties kieto kūno horizontalaus pjūvio plotas to aukšto lygyje. Blokas, kuris susitraukia, turi mažesnius viršutinius aukštus, o bendrasis grindų plotas yra jų suma.
- **Pėdsakas** – pjūvio, esančio tik virš kieto kūno pagrindo, kontūras.
- **Tūris** – paties kieto kūno.

IFC faile kiekvienas variantas yra building element proxy (pėdsakas, pakeltas iki kieto kūno aukščio), su po vieną erdvę kiekvienam aukštui, kurioje nurodytas to aukšto bendrasis plotas. Visi variantai priklauso vienam pastatui, turinčiam tiek aukštų, kiek turi aukščiausias variantas.

## Supaprastintos formos

Paprastas stačias blokas perkeliamas tiksliai taip, kaip modeliuotas. Visa kita vis tiek siunčiama, o sąraše nurodoma, kodėl forma supaprastinta:

- **Jos aukštai nėra visi pagrindo dydžio** (susitraukia arba nuožulnūs): masė BimCraft yra pagrindo kontūras, pakeltas iki viso aukščio, bet aukštų plotai ir tūris yra paties kieto kūno.
- **Kietas kūnas neuždarytas**: aukštai, kurių pjūvio nepavyksta uždaryti, nematuojami ir skaičiuojami kaip nulis. Uždarykite kietą kūną ({{ui:Objekto informacija}} rodo „Kietas kūnas: Taip“), kad gautumėte pilnus rodiklius.
- **Jo pagrindas turi daugiau nei vieną kontūrą**: pėdsakui naudojamas didžiausias.

## Verta žinoti

- {{ui:IFC BimCraft (.ifc)}} yra kitoks eksportas: siunčiamos tik formos ir pavadinimai, be aukštų ar plotų.
- Į internetą nieko neįkeliama. Failas perduodamas BimCraft skirtukui šiame kompiuteryje.
