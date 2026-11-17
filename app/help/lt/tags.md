---
title: Žymės: rodyti ir slėpti daiktų rinkinius
summary: Suteikite grupėms ir komponentams žymę, pavyzdžiui, Baldai arba Sienos, ir vienu metu paslėpkite arba parodykite visus daiktus su ta žyme.
keywords: žymės, žymė, sluoksniai, sluoksnis, rodyti, slėpti, matomumas, tvarkyti, baldai, sienos, be žymės, pervadinti žymę, ištrinti žymę
from: c1a95a05
---

Žymė yra vardas, kurį suteikiate grupėms ir komponentams, pavyzdžiui, **Baldai**, **Sienos** ar **Sklypas**, kad vienu metu galėtumėte paslėpti arba parodyti viską su ta žyme. Žymės yra tai, ką CAD programos vadina sluoksniais. Norėdami slėpti po vieną daiktą, žr. [Slėpti, izoliuoti ir rodyti](topic:hide-isolate).

## Sukurkite žymę

1. Dešinėje esančioje srityje {{ui:Žymės}} spustelėkite {{ui:Pridėti žymę}}.
2. Įveskite jos pavadinimą ir paspauskite {{key:Enter}}.

Norėdami pervadinti žymę, spustelėkite jos pavadinimą srityje {{ui:Žymės}}, įveskite naują pavadinimą ir paspauskite {{key:Enter}}. Dvi žymės negali turėti to paties pavadinimo.

## Žymėkite grupes ir komponentus

1. Pasirinkite vieną ar daugiau grupių ar komponentų.
2. Srityje {{ui:Objekto informacija}} pasirinkite žymę lauke {{ui:Žymė}}. {{ui:Nauja žymė…}} sukuria naują žymę ir ja pažymi pasirinkimą.

{{ui:Be žymės}} pašalina žymę. Skaičius šalia kiekvienos žymės srityje {{ui:Žymės}} parodo, kiek grupių ir komponentų ją turi.

Žymėkite grupes ir komponentus, o ne laisvus paviršius ir briaunas: pirmiausia nubraižykite norimus žymėti daiktus kaip grupes (pasirinkite juos ir paspauskite {{key:Shift+G}}).

## Rodyti ir slėpti

Spustelėkite akį šalia žymės. Visi daiktai su ta žyme nebesimato, kur jie bebūtų modelyje (taip pat ir kitų grupių viduje), o spustelėjimai ir prisikabinimai pro juos praeina. Dar kartą spustelėkite akį, kad juos parodytumėte. Daiktai be žymės visada rodomi.

Jei redaguojate grupės viduje, kurios žymę slepiate, grupė užsidaro.

## Naikinti žymę

Spustelėkite šiukšlinę šalia jos. Daiktai, turėję tą žymę, tampa {{ui:Be žymės}} ir rodomi.

## Kas svarbu

- Žymės, jų pavadinimai ir tai, kurios iš jų paslėptos, įrašomi ModelCraft faile. Nukopijavus pažymėtą grupę į kitą modelį, su ja nukeliauja ir jos žymė.
- Žymės slėpimas ir rodymas bei visi kiti žymių pakeitimai yra vienas atšaukiamas veiksmas.
- Eksportuojama viskas, įskaitant paslėptas žymes, kaip ir paslėpti daiktai.
- Sluoksniai DWG ir DXF sklypo planuose kol kas nepatenka kaip žymės: visas brėžinys importuojamas kaip viena grupė.
