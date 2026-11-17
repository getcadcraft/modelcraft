---
title: Įkelti SKP modelį
summary: Importuokite .skp failą su jo grupėmis, komponentais, spalvomis, tekstūromis, žymėmis ir minkštomis briaunomis, pamatykite, kas atkeliavo ir kas ne, ir tęskite modeliavimą.
keywords: skp, importuoti, atidaryti skp, komponentai, grupės, žymės, sluoksniai, medžiagos, spalvos, tekstūros, paslėpta, minkštos briaunos, 3D Warehouse, migruoti, perjungimas
from: 325d3c81
---

ModelCraft skaito SketchUp failus (`.skp`) savo skaitytuvu, puslapyje. Nieko neįkeliama į serverį, ir failas veikia neprisijungus, kai veikia ir ModelCraft. Buvo išbandyti failai nuo SketchUp 3 iki 2026.

## Importuokite failą

1. Spustelėkite {{ui:Importuoti}} grupėje {{ui:Failas}} (arba įmeskite `.skp` failą į 3D vaizdą).
2. Pasirinkite failą.

   Būsenos juostoje rašoma „Skaitomas house.skp…“, kol skaitoma, o paskui – kas atkeliavo, pavyzdžiui: „Importuota house.skp (SketchUp 25.0.575): 1240 paviršių, 6 komponentai, vienoje grupėje.“

Visas modelis atkeliauja kaip viena grupė, pavadinta pagal failą, pasirinkta, o vaizdas priartėja prie jos. Vienas {{key:Mod+Z}} viską pašalina, įskaitant žymes.

:::tip
Suskaidykite importo grupę ({{ui:Objekto informacija}} › {{ui:Suskaidyti}}), kai norite, kad jos turinys būtų laisvas jūsų modelyje, o ne vienoje grupėje.
:::

## Kas atkeliauja

- **Paviršiai** su savo skylėmis ir **briaunos**, kurios nėra paviršiaus dalis.
- **Grupės** atkeliauja kaip grupės, o **komponentai** kaip komponentai: kiekviena komponento kopija yra vieno apibrėžimo vieta, todėl redaguojant vieną kopiją pasikeičia visos, kaip SketchUp. Pavadinimai atkeliauja kartu.
- **Spalvos.** Paviršiaus paties medžiaga suteikia jam spalvą. Grupei ar komponentui nudažyta medžiaga tampa tos vietos dažu, todėl paviršiai viduje be savos spalvos ją perima, kaip SketchUp. Komponentas, nudažytas raudonai vienoje vietoje ir mėlynai kitoje, lieka vienu komponentu.
- **Tekstūros.** Paviršius, nudažytas tekstūrine medžiaga, atkeliauja su tekstūra, uždėta ant paviršiaus, kaip faile, ir ją rodo {{ui:Shaded}} stilius. Vaizdas išsaugomas ModelCraft faile, kai įrašote, ir [atvaizduotas paveikslas](topic:render) jį taip pat rodo. Tekstūrine medžiaga nudažyta visa grupė ar komponentas tai kopijai suteikia tik medžiagos spalvą.
- **Žymės.** Grupė ar komponentas su SketchUp žymė gauna ModelCraft žymę tuo pačiu pavadinimu, rodomą sąraše {{ui:Žymės}}, ir ji rodoma arba paslepiama taip, kaip buvo SketchUp. Jei jūsų modelyje jau yra žymė tuo pavadinimu, naudojama ji.
- **Paslėpti daiktai atkeliauja paslėpti:** paviršiai, briaunos, grupės ir komponentai, taip pat paviršiai ir briaunos paslėptoje žymėje. Matote tai, ką rodė SketchUp, ir nieko nepraradote: {{ui:Redagavimas}} › {{ui:Daugiau}} › {{ui:Rodyti visus}} juos parodo. Žr. [Slėpti, izoliuoti ir rodyti](topic:hide-isolate).
- **Minkštos ir lygios briaunos** lieka minkštos, todėl lenkti paviršiai atrodo lygūs.
- **Dydžiai** atkeliauja teisingi bet kokiais vienetais: SketchUp failai viduje naudoja colius, o ModelCraft juos konvertuoja.

## Kas neatkeliauja

Būsenos juostoje rašoma, kas praleista, su kiekiais.

- **Kai kurios tekstūros** palieka tik savo medžiagos spalvą: tekstūra, kurios nėra faile, vaizdas formatu, kurio naršyklės nerodo (pavyzdžiui, Photoshop failas), arba tekstūra be dydžio. Paviršiai su projektuota tekstūra atkeliauja su tekstūra, maždaug išdėstyta.
- **Žymės ant laisvų paviršių ir briaunų.** ModelCraft žymi tik grupes ir komponentus, todėl paviršius ar briauna su savo žymė atkeliauja be žymės, o būsenos juosta juos suskaičiuoja. Padarykite tokius paviršius grupe ({{key:Shift+G}}) ir pažymėkite grupę.
- **Vaizdai**, įdėti į modelį, tekstas, matmenys, pagalbinės linijos, pjūvio plokštumos, scenos ir stiliai.

## Problemos

- „Tai nėra SketchUp failas.“ arba „Šis SketchUp failas sugadintas: …“: failas nukirstas arba tai kažkas kita su `.skp` pavadinimu. Įrašykite jį iš naujo iš SketchUp arba paprašykite naujos kopijos.
- Failas iš SketchUp versijos, naujesnės nei ModelCraft žino, atmetamas, ir nurodoma rasta versija.
- Modelis, kurį sudaro vien vaizdai, tekstas ar matmenys, praneša, kad nėra ko rodyti.

## Perkelkite modelį atgal

ModelCraft negali įrašyti `.skp` failų. Eksportuokite Collada ({{ui:Eksportuoti}} › `.dae`) ir importuokite jį SketchUp: grupės, komponentai ir spalvos perkeliami; tekstūros perkeliamos kaip jų medžiagos spalva. Žr. [Modelio eksportavimas](topic:export-model).
