---
title: Apšviesti modelį lempomis
summary: Įdėkite į modelį lempas, prožektorius ir šviesos panelės, kad atvaizduotuose paveikslėliuose kambariai matytųsi naktį ar apšviesti, su švelniais šešėliais.
keywords: šviesa, šviesos, lempa, lempos, apšvietimas, lemputė, lubų šviestuvas, prožektorius, žemyn krypstantis šviestuvas, šviesos panelė, plotinė šviesa, liumenai, ryškumas, spalvos temperatūra, šilta, naktis, interjeras, atvaizdavimas
from: c8d72cbc
---

Lempos apšviečia [atvaizduotus paveikslėlius](topic:render). Jos nekeičia 3D vaizdo, kuriame kiekviena lempa rodoma kaip mažas ženklas jos spalva.

## Pridėti lempą

1. Dešinėje, skyriuje {{ui:Šviesos}}, spustelėkite {{ui:Lempa}}, {{ui:Prožektorius}} arba {{ui:Šviesos panelė}}.
2. Spustelėkite, kur ji turi būti. Prilipimas prie taškų veikia kaip piešiant.
   - Ant lubų ar sienos **lempa** kabo 25 cm atstumu nuo paviršiaus, žiūrimoje pusėje; **šviesos panelė** guli ant paviršiaus ir šviečia nuo jo.
   - **Prožektoriui** reikia dviejų spustelėjimų: pirma, kur jis stovi, paskui, į ką jis nukreiptas.

Nauja lempa pasirenkama skiltyje {{ui:Šviesos}}, paruošta keisti.

## Keisti lempą

Spustelėkite lempos pavadinimą skiltyje {{ui:Šviesos}} arba jos ženklą vaizde su {{ui:Pasirinkti}}. Tada:

| Nustatymas | Ką daro |
|---|---|
| {{ui:Ryškumas (liumenais)}} | Kiek šviesos ji skleidžia. Buitinė lemputė – apie 800 liumenų; ryški lubų panelė – 3000 |
| {{ui:Spalva}} | {{ui:Šilta}} (buitinė lemputė), {{ui:Neutrali}} arba {{ui:Dienos šviesa}}, arba bet kokia spalva |
| {{ui:Spindulys (laipsniais)}} | Prožektoriaus kūgis nuo krašto iki krašto |
| {{ui:Lemputės dydis}}, {{ui:Plotis}}, {{ui:Gylis}} | Didesnės lemputės ir panelės suteikia švelnesnius šešėlius |
| {{ui:Raudona (x)}}, {{ui:Žalia (y)}}, {{ui:Aukštis}} | Kur ji yra |

Varnelė prie lempos pavadinimo ją įjungia arba išjungia. {{ui:Ištrinti šviesą}} ją pašalina. Kiekvienas pakeitimas yra vienas žingsnis: {{key:Ctrl+Z}} jį anuliuoja. Lempos įrašomos `.modelcraft` faile.

## Naktiniai paveikslėliai

Dialoge {{ui:Atvaizduoti paveikslėlį…}} pažymėkite {{ui:Šiam paveikslėliui naudoti kitą datą ir laiką}} ir pasirinkite vakaro valandą. Saulei nusileidus dangus tamsėja, o modelį apšviečia tik lempos. Jei paveikslėlis per tamsus, dialoge padidinkite {{ui:Ryškumas}} arba pridėkite lempų.

:::tip
Kambariui, matomam iš vidaus, įdėkite kamerą į kambarį (sukite ir artinkite vaizdą arba naudokite [sceną](topic:scenes)), pridėkite lempą ant lubų ir atvaizduokite naktį. Režimu {{ui:Greitas}} kampai toli nuo lempos lieka tamsesni nei nuotraukoje; [aukštos kokybės režimas](topic:render#high-quality) leidžia šviesai atsimušti nuo sienų.
:::
