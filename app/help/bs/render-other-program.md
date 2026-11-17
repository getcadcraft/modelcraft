---
title: Nacrtaj sliku drugim programom
summary: Naši vlastiti motori crtaju sliku za renderovanje; drugi program je može nacrtati samo kroz dodatak motora za renderovanje u CadCraft Studiju. Šta se prenosi i zašto neki programi nikad nisu ponuđeni.
keywords: render, motor, vanjski program, dodatak motora, studio, pozadina, red, usd, gltf, nacrtao, blender, gpl
from: 150f94f1
---

Slika u {{ui:Renderuj sliku…}} crta **naš vlastiti motor**: Brzi i Praćenje putanje, u pregledniku i u CadCraft Studiju. Drugi program je može nacrtati samo kad je donese **dodatak motora za renderovanje**: vidi [Dodaj motor za renderovanje dodatkom](topic:render-engine-addons). Da odneseš scenu drugom programu i nastaviš tamo, koristi [Otvori scenu u drugom programu](topic:render-open-in) ili [Pošalji scenu motoru za igre](topic:render-unreal).

## Nacrtaj sliku motorom dodatka

1. Uključi dodatak u Postavke › Dodaci. Njegov motor se pojavljuje u listi Motor u {{ui:Renderuj sliku…}}.
2. Izaberi ga. Njegove vlastite postavke se prikazuju ispod liste Motor.
3. Klikni {{ui:Renderuj}}. U Studiju, prvi put kad dodatak pokrene program, Studio te pita u svom vlastitom dijalogu. Napredak se prikazuje dok crta; {{ui:Zaustavi}} ga prekida. Slika se pojavljuje označena motorom koji ju je nacrtao.

Motor napisan u JavaScriptu radi i u pregledniku. Motor koji pokreće program na ovom računaru radi samo u Studiju; u pregledniku se prikazuje kao datoteka za snimanje.

## Šta se prenosi

Motor dobija **paket**: model kao USD datoteku (i glTF datoteku kad je traži), i datoteku postavki sa tačnim vrijednostima materijala, suncem i nebom, svakom lampom koja je uključena sa svojom snagom i profilom svjetla, kamerom i ekspozicijom. Svaki program osvjetljava, tonira i uzorkuje na svoj način, pa su slike slične po kameri, suncu, lampama i ekspoziciji, ali ne piksel po piksel.

## Programi koje CadCraft nikad ne pokreće

CadCraft nikad ne pokreće program pod licencom GNU GPL, i nikad ga ne navodi kao motor ili kao cilj Otvori u. Blender je jedan od njih, pa nije u listi Motor. USD ili glTF datoteka snimljena iz {{ui:Renderuj sliku…}} i dalje se otvara u njemu kao u svakom programu koji čita te datoteke.

:::note
Panoramske i stereo kamere i slika neba (koriste se boje neba) se ne prenose drugom programu. Ništa urađeno u drugom programu se ne vraća u model.
:::
