---
title: Modelio eksportas kitoms programoms
summary: Pasirinkite tinkamą eksportą atvaizdavimui, internetui, 3D spausdinimui, BIM ir BimCraft bei patikrinkite, ką kiekvienas išsaugo.
keywords: spausdinti, 3mf, pdf, popierius, vaizdas, png, paveikslėlis, ekrano kopija, atvaizduoti, įrašyti vaizdą, eksportuoti, bendrinti, atvaizdavimas, gltf, glb, collada, dae, obj, stl, 3D spausdinimas, ifc, bim, bimcraft, siųsti, kitos programos
from: 9e13e80d
---

Eksportas sukuria modelio kopiją kitu formatu. Taip pat išsaugokite savo `.modelcraft` failą: tai vienintelis failas, kuriame išlieka viskas, ir vienintelis, kurį ModelCraft atidaro tiesiogiai.

## Eksportavimas

1. Pirmiausia įrašykite ({{key:Mod+S}}), kad darbinis failas būtų saugus.
2. Spustelėkite {{ui:Eksportuoti}} grupėje {{ui:Failas}}.
3. Pasirinkite formatą. Naršyklė parsisiunčia failą, pavadintą kaip modelis.

Eksportuojamas visas modelis. Norėdami eksportuoti vieną dalį, įrašykite, ištrinkite likusią dalį, eksportuokite, tada anuliuokite arba iš naujo atidarykite.

## Kuris formatas

| Norite | Pasirinkite | Pastabos |
|---|---|---|
| Atidaryti jį kitame 3D modeliavimo įrankyje | {{ui:Collada (.dae)}} | Išsaugo grupes, įdėtas grupes, komponentus (bendrus, nekopijuojamus), pavadinimus ir spalvas. Z aukštyn, metrais. |
| Atvaizduoti jį arba naudoti vizualizacijos programoje | {{ui:OBJ (.obj)}} arba {{ui:glTF dvejetainis (.glb)}} | OBJ skaitomas plačiausiai; jis kiekvieną grupės išdėstymą įrašo kaip atskirą objektą, bet neturi spalvų ir bendrų komponentų. glTF išsaugo komponentus ir spalvas. |
| Įkelti į internetą, žaidimų variklį ar papildytąją realybę (AR) | {{ui:glTF dvejetainis (.glb)}} | Vienas failas, kuriame yra viskas. |
| Spausdinti 3D | {{ui:Tikrinti, ar tinka 3D spausdinimui (STL arba 3MF)…}} | Patikrina, ar modelis uždarytas ir ar paviršiai nukreipti teisingai, tada įrašo STL arba 3MF milimetrais. Žr. [Paruošti modelį 3D spausdinimui](topic:print-3d). {{ui:STL spausdinimui (.stl, milimetrais)}} įrašo visą modelį be patikros. |
| Atidaryti jį BimCraft ar kitoje BIM programoje | {{ui:IFC BimCraft (.ifc)}} | Kiekviena aukščiausio lygio grupė ar komponentas tampa vienu statybiniu elementu. |

Būsenos juosta patvirtina kiekvieną eksportą, pavyzdžiui: „Eksportuota House.stl (milimetrais).“ arba „Eksportuota House.dae (Collada 1.4.1, Z aukštyn, metrais; komponentai lieka bendri).“

## Prieš eksportuojant

- **Sugrupuokite objektus.** Collada, glTF ir IFC išsaugo grupes ir komponentus kaip atskirus objektus. Laisva geometrija išeina kaip vienas gabalas; IFC ji tampa vienu elementu pavadinimu „Laisva geometrija“.
- **Pavadinkite juos.** Grupių ir komponentų pavadinimai patenka į Collada ir IFC, todėl siena, pavadinta „North wall“, atkeliauja kaip „North wall“.
- **Patikrinkite paviršių kryptį.** Paviršiai, kurie išorėje rodo mėlynai pilką, eksporte bus nukreipti į vidų. Ištaisykite juos su {{ui:Apversti paviršių}} (žr. [Trynimas ir valymas](topic:erase#a-face-facing-the-wrong-way)).
- **Spausdinimui** padarykite dalis uždarais kūnais: pasirinkite kiekvieną grupę ir patikrinkite, ar {{ui:Objekto informacija}} rodo „Uždaras kūnas: Taip“. Tada pakeiskite modelio dydį iki spausdinamo arba pakeiskite jį spausdintuvo programinėje įrangoje.

## Modelio siuntimas į BimCraft

1. Padarykite kiekvieną statinio dalį grupe ar komponentu ir pavadinkite ją.
2. Pasirinkite {{ui:Eksportuoti}}, tada {{ui:IFC BimCraft (.ifc)}}.
3. Atidarykite parsisiųstą `.ifc` failą BimCraft.

Koncepcinei masei naudokite {{ui:Eksportuoti}} › {{ui:Mases į BimCraft…}}: kiekviena grupė eina kaip masės variantas su aukštais, aukštų plotais ir tūriu. Žr. [Siųsti masę į BimCraft](topic:massing-to-bimcraft).

Paprastas IFC eksportas nesukuria tiesioginio ryšio tarp dviejų programų. IFC turi vieną aukštą, o kiekvienas elementas yra bendras statybinio elemento atstovas (proxy) be tipo ar savybių: jame yra tik forma ir pavadinimas. Uždarosios grupės tampa tūriniais kūnais, atviros – paviršiais.

## Linijos be paviršių

Kraštinės, nepriklausančios jokiam paviršiui (kreipiamosioms linijoms panašios linijos, importuotas situacijos planas), eksportuojamos į OBJ ir Collada kaip linijos. glTF ir STL jom vietos neturi, todėl jas praleidžia. Kreipiamosios linijos ir scenos neeksportuojamos į jokį formatą.

## Vaizdo įrašymas kaip paveikslėlis

{{ui:Eksportuoti}} › {{ui:Vaizdo paveikslėlis (.png)}} įrašo tiksliai tai, ką rodo 3D vaizdas, tokio dydžio, koks jis ekrane. {{ui:Paveikslėlis dvigubu dydžiu (.png)}} įrašo jį dvigubai platesnį ir dvigubai aukštesnį (spausdinimui ar ryškiai skaidrei), o matmenys ir žymos perbraižomos tokiu dydžiu, o ne ištempiamos.

Norint paveikslėlio, panašaus į dienos šviesą (dangus, saulė, švelnūs šešėliai, stiklas), naudokite {{ui:Eksportuoti}} › {{ui:Atvaizduoti paveikslėlį…}}: žr. [Atvaizduoti paveikslėlį](topic:render).

Norėdami švaraus paveikslėlio, pirmiausia įjunkite [pristatymo vaizdą](topic:styles-shadows#presentation-view) ({{key:Shift+P}}): ašys, kreipiamosios linijos, pjūvių kontūrai ir pasirinkimas paliekami. Nustatykite kamerą, stilių ir šešėlius, kaip norite, arba eikite į [sceną](topic:scenes); norėdami įrašyti judantį scenų filmą, naudokite {{ui:Eksportuoti animaciją}} skydelyje {{ui:Scenos}}.

## Vaizdo spausdinimas arba įrašymas kaip PDF

- {{ui:Eksportuoti}} › {{ui:PDF vaizdo (.pdf)}} įrašo vieno puslapio PDF: vaizdas dvigubu ekrano dydžiu su matmenimis, A4 puslapyje (Letter, kai modelis pėdomis ir coliais), gulsčias, o apačioje – linija su failo pavadinimu, data ir vienetu.
- {{ui:Eksportuoti}} › {{ui:Spausdinti vaizdą…}} atveria tą patį puslapį naršyklės spausdinimo langui. Pasirinkite spausdintuvą arba „Įrašyti kaip PDF“.

Puslapyje vaizdas rodomas toks, koks yra: perspektyvos vaizde mastelio nėra. Norėdami gauti mastelį, išjunkite {{ui:Perspektyva}} ir žiūrėkite iš {{ui:Viršus}} arba {{ui:Priekis}}, ir pridėkite [matmenis](topic:dimensions) svarbiems dydžiams. [Pristatymo vaizdas](topic:styles-shadows#presentation-view) palieka ašis, kreipiamąsias linijas ir pasirinkimą; matmenys lieka.
