---
title: Įrašyti vaizdus kaip scenas
summary: Įrašykite kamerą ir stilių kaip sceną, atnaujinkite ir pervardykite ją, žingsniuokite ar leiskite scenas, kad pristatytumėte projektą.
keywords: scena, scenos, vaizdas, įrašytas vaizdas, kamera, pristatymas, animacija, leisti, skaidrių demonstravimas, page up, page down, skirtukai, apėjimas
from: 38680d6e
---

**Scena** prisimena kameros padėtį, stilių ir tai, kas paslėpta: iš kur žiūrite, perspektyvą ar lygiagretumą, paviršių stilių, briaunas, saulės nustatymus, paslėptas grupes, išjungtas žymas ir pjūvį. Scenos įrašomos `.modelcraft` faile.

## Pridėti sceną

1. Nustatykite vaizdą: pasukite, keiskite mastelį, pasirinkite stilių, nustatykite saulę.
2. Dešiniajame {{ui:Scenos}} skydelyje spustelėkite {{ui:Pridėti sceną}}.

   Scena atsiranda sąraše, pavadinta „Scena 1“, „Scena 2“ ir t. t., ir kaip skirtukas viršuje virš 3D vaizdo. Būsenos juostoje rašoma „Scena 1 įrašyta: ši kamera, stilius ir tai, kas paslėpta.“

## Pereiti į sceną

- Spustelėkite jos skirtuką virš 3D vaizdo arba jos pavadinimą {{ui:Scenos}} sąraše.
- Arba paspauskite {{key:PageDown}} kitai scenai ir {{key:PageUp}} ankstesnei. {{ui:Kita}} ir {{ui:Ankstesnė}} po sąrašu daro tą patį.

Kamera nuslysta į sceną šiek tiek daugiau nei per pusę sekundės. Jei kompiuteris nustatytas mažinti judesį, ji tiesiog peršoka.

## Keisti, pervardyti ar naikinti sceną

Kiekviena sąrašo scena turi tris mažus mygtukus po pavadinimu:

- **Atnaujinti** (apskritimo rodyklės): įrašo dabartinę kamerą, stilių ir tai, kas paslėpta, į tą sceną. „Scena 2 atnaujinta.“
- **Pervadinti** (pieštukas): atidaro dialogą „Pervadinti sceną“. Įveskite naują pavadinimą ir spustelėkite {{ui:Įrašyti}}.
- **Naikinti** (šiukšlių dėžė): pašalina sceną. „Scena 2 ištrinta. Ctrl+Z ją grąžina.“

Scenų pridėjimas, atnaujinimas, pervadinimas ir naikinimas yra anuliavimo žingsniai, kaip ir modelio pakeitimai.

## Užrakinti scenos kamerą

Kai keičiant projektą vis atvaizduojate tą patį vaizdą, užrakinkite tos scenos kamerą, kad vaizdas niekada nepasislinktų atsitiktinai.

1. {{ui:Scenos}} sąraše spustelėkite **užrakto** mygtuką (atviras spynelė) po scenos pavadinimu. Jis užsidaro, o scenos skirtukas virš 3D vaizdo rodo mažą spynelę. Būsenos juostoje rašoma „Scena 2: kamera užrakinta.“
2. Pereikite į sceną, kai norite atvaizduoti: kamera grįžta tiksliai į įrašytą vaizdą, todėl iš jo sukurti paveikslėliai sutampa su ankstesniais.

Kol kamera užrakinta, **Atnaujinti** vis dar įrašo stilių ir tai, kas paslėpta, į sceną, bet kamera lieka kur buvo, net jei jau pasukote. Spustelėkite spynelę dar kartą, kad atrakintumėte; tada Atnaujinti vėl įrašo dabartinį vaizdą. Užrakinimas ir atrakinimas yra anuliavimo žingsniai, o užraktas įrašomas `.modelcraft` faile.

## Pristatymas

1. Pridėkite dvi ar daugiau scenų.
2. Spustelėkite {{ui:Groti}} po sąrašu. ModelCraft kas kelias sekundes pereina prie kitos scenos ir po paskutinės grįžta į pirmą.
3. Spustelėkite {{ui:Stabdyti}} (tą patį mygtuką) arba paspauskite {{key:Esc}}, kad sustabdytumėte.

Saulės tyrimui pridėkite po sceną kiekvienai valandai, keisdami tik {{ui:Laikas}}, ir tada jas paleiskite. Žr. [Stiliai ir saulės šešėliai](topic:styles-shadows#a-sun-study).

Kad pristatytumėte be juostų, du kartus paspauskite {{key:Ctrl+Shift+F}}: pilnas ekranas, tada pilnas ekranas su paslėptomis juostomis. Scenų skirtukai lieka virš vaizdo.

## Ką rodo scena

Scena prisimena, kas buvo paslėpta, kai ją įrašėte: grupes ir komponentus, kuriuos [paslėpėte](topic:hide-isolate), [žymas](topic:tags), kurias išjungėte, ir kurie [pjūvio plokštumos](topic:sections) pjauna. Pereinant į sceną jie vėl paslepiami ir rodomi. Taigi viena scena gali rodyti visą namą, kita namą su išjungta stogo žyma, o dar kita – per jį einantį pjūvį.

Paslėpti laisvi paviršiai ir briaunos nėra scenų dalis. Pereinant į sceną nesukuriamas anuliavimo žingsnis. Scenos, įrašytos ankstesne ModelCraft versija, palieka paslėptus dalykus kaip yra; spustelėkite Atnaujinti, kad juos įrašytumėte į jas.

## Eksportuoti animaciją

{{ui:Eksportuoti animaciją}}, po sąrašu, leidžia scenas nuo pirmos iki paskutinės, sklandžiai perkeldama kamerą tarp jų, ir įrašo filmą kaip **WebM** vaizdo įrašą (kiekvienai scenai – dviejų sekundžių judesys ir trumpa pauzė). Jis įrašo vaizdą taip, kaip matote, jo dydžiu ekrane, [pristatymo vaizde](topic:styles-shadows#presentation-view) (be ašių, vedlių ar pažymėjimo). Paspauskite {{key:Esc}} arba spustelėkite mygtuką dar kartą, kad sustabdytumėte be įrašymo. WebM leidžiamas naršyklėse ir VLC, o vaizdo redaktoriai jį konvertuoja.

Atvaizduotam apėjimui (dangus, saulė, šešėliai, medžiagos) pasirinktu dydžiu naudokite {{ui:Atvaizduoti vaizdo įrašą…}}: be animacijos raktų jis paima scenas tvarka kaip kameros kelią. Žr. [Animuokite kamerą ir objektus](topic:animation).

## Ką reikia žinoti

- Keičiant stilių ar judinant kamerą po perėjimo į sceną, scena nepasikeičia, kol nespustelėsite Atnaujinti.
- Scenos neeksportuojamos į Collada, OBJ, glTF, STL ar IFC.
