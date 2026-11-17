---
title: Dažymas spalvomis ir medžiagomis
summary: Suteikite paviršiams, grupėms ir komponentams vientisą spalvą arba medžiagą, pavyzdžiui, plytas, dailylentes, čerpes ar medieną, ir išsaugokite jas eksportuodami.
keywords: dažyti, spalva, spalvos, medžiaga, medžiagos, tekstūra, tekstūros, plytos, dailylentės, čerpės, stogo dengimas, mediena, akmuo, plytelės, betonas, tinkas, žolė, žvyras, stiklas, metalas, dažymo kibirėlis, užpildymas, pavyzdys, pipetė, numatytoji, glb, obj, mtl, collada
from: b1500523
---

Spalvos padeda atskirti modelio dalis, o **medžiagos** (plytos, dailylentės, stogo dengimas, mediena, akmuo, plytelės, betonas, tinkas, žolė, stiklas, metalas) padaro modelį panašų į tai, iš ko jis pastatytas. Abi dažomos vienodai.

## Spalvos pasirinkimas

Skyriuje {{ui:Colors}}, dešinėje, rodoma vientisų spalvų eilutė, {{ui:Default}} (ta, kurią kerta linija: jokios spalvos) ir {{ui:+}} pavyzdys bet kuriai kitai spalvai. Spustelėkite vieną, kad ji taptų dabartine spalva. Dažymo įrankis pradeda su ja.

## Dažyti

1. Paspauskite {{key:B}} ({{ui:Paint}}) arba, kai nieko nepasirinkta, spustelėkite spalvą. (Kai kažkas pasirinkta, spustelėjus spalvą pasirinkimas iškart nudažomas.)
2. Spustelėkite paviršių, kad jį nudažytumėte.
3. Spustelėkite grupę ar komponentą, kad nudažytumėte tą kopiją: jos paviršiai, neturintys savos spalvos, perima šią spalvą. Paviršiai, kuriuos nudažėte viduje, išlaiko savąsias.

Norėdami nudažyti kelis objektus vienu metu, pirmiausia juos pasirinkite, tada spustelėkite spalvą arba spustelėkite bet kurį iš jų su {{ui:Paint}}. Tai yra vienas atšaukimo žingsnis.

| Laikyti | Ir spustelėti paviršių | Kas nudažoma |
|---|---|---|
| — | | Tą paviršių |
| {{key:Ctrl}} | | Kiekvieną su juo sujungtą paviršių, turintį tą pačią spalvą |
| {{key:Shift}} | | Kiekvieną tos spalvos paviršių grupėje, su kuria dirbate |
| {{key:Alt}} | | Nieko: vietoj to paimate tą spalvą |

Norėdami paviršių grąžinti be spalvos, pasirinkite {{ui:Default}} ir spustelėkite jį.

## Dažyti medžiaga

Skyriuje {{ui:Materials}}, po {{ui:Colors}}, išvardijama medžiagų biblioteka pagal rūšį: plytos ir blokeliai, dailylentės, stogo dengimas, mediena, akmuo, plytelės, betonas, tinkas, žemė, stiklas ir metalas. Užveskite pelę ant pavyzdžio, kad pamatytumėte jo pavadinimą. Spustelėkite vieną, tada dažykite ja kaip spalva: {{key:B}}, spustelėkite paviršius, grupes ar komponentus; arba pirmiausia pasirinkite ir spustelėkite medžiagą.

- **Shaded** stiliuje paviršiai rodo medžiagos tekstūrą. Paslėptos linijos, karkasas ir rentgenas rodo jos spalvą.
- Tekstūros **ištisinės kiekvieno paviršiaus išilgai** ir **aukštyn**: plytų eilės išlieka horizontalios ant kiekvienos sienos, čerpės eina per stogo šlaitą, lentos grindyse seka raudonąją ašį. Jos yra tikru dydžiu (plyta maždaug 215 mm ilgio), todėl atrodo teisingai bet kokiu atstumu.
- [Atvaizduotame paveikslėlyje](topic:render) medžiagos išlaiko savo tekstūrą, šiurkštumą ir, stiklui bei metalui, blizgesį.
- {{key:Alt}} spustelėjimas su {{ui:Paint}} paima ir paviršiaus medžiagą.

Tekstūras nupiešia pati ModelCraft, todėl jos veikia neprisijungus ir yra nemokamos naudoti bet kam (CC0).

## Komponentai ir spalvos

Spalva, nudažyta paviršiui **komponento viduje**, rodoma kiekvienoje kopijoje, nes kopijos naudoja vieną apibrėžimą. Spalva, nudažyta **kopijai** iš išorės (kai komponentas uždarytas), priklauso tik tai kopijai, todėl dvi to paties komponento kopijos gali turėti skirtingas spalvas. {{ui:Entity info}} rodo pasirinkto paviršiaus, grupės ar komponento spalvą.

## Spalvos failuose

- ModelCraft failas išsaugo kiekvieną spalvą ir kiekvieną medžiagą.
- Kiti formatai vietoj tekstūros gauna **medžiagos spalvą** (jos vaizdą iš tolo): glTF, Collada, OBJ, DWG ir DXF, bei 3D spausdinimo patikrinimą. glTF, Collada ir OBJ medžiaga išlaiko savo pavadinimą, pavyzdžiui, `Material_brick-red`.
- **glTF (.glb)** ir **Collada (.dae)**: kiekviena spalva tampa medžiaga. Komponentas, rodomas skirtingomis spalvomis, įrašomas po vieną kartą kiekvienai spalvai. glTF taip pat įrašo importuotas tekstūras kaip tekstūras.
- **OBJ**: eksportuojant atsisiunčiami du failai: `.obj` ir `.mtl` medžiagų failas su spalvomis. Laikykite juos tame pačiame aplanke. Su importuotomis tekstūromis `.obj`, `.mtl` ir paveikslėliai atsisiunčiami kaip vienas `.zip`.
- **DWG** išsaugo tikslias spalvas; **DXF** naudoja artimiausią iš 255 standartinių CAD spalvų.
- **STL** ir **PLY** perneša spalvas: STL pagal VisCAM / SolidView konvenciją (programos, kurios jos neskaito, ją ignoruoja), PLY – kaip spalvą kiekviename taške. Žr. [Failų formatai išsamiai](topic:formats).

:::tip
Norėdami modeliuoti ekraną, nudažykite rėmą anglies pilka spalva, o stiklą mėlyna – po to, kai priekinį paviršių [poslinkite](topic:draw-faces).
:::
