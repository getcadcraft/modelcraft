---
title: Crtanje slike drugim programom
summary: Naši sopstveni engine-i crtaju sliku za Renderovanje; drugi program može da je nacrta samo preko dodatka engine-a za renderovanje u CadCraft Studio-u. Šta se prenosi i zašto neki programi nikad nisu ponuđeni.
keywords: renderovanje, engine, spoljni program, engine dodatka, studio, pozadina, red, usd, gltf, nacrtao, blender, gpl
from: 150f94f1
---

Slika u {{ui:Renderuj sliku…}} crta **naš sopstveni engine**: Fast i Path tracer, u pregledaču i u CadCraft Studio-u. Drugi program je može nacrtati samo kad je donese **dodatak engine-a za renderovanje**: vidi [Dodavanje engine-a za renderovanje dodatkom](topic:render-engine-addons). Da scenu odnesete drugom programu i nastavite rad tamo, koristite [Otvaranje scene u drugom programu](topic:render-open-in) ili [Slanje scene u engine za igre](topic:render-unreal).

## Crtanje slike engine-om dodatka

1. Uključite dodatak u Podešavanja › Dodaci. Njegov engine se pojavljuje na listi Engine u {{ui:Renderuj sliku…}}.
2. Izaberite ga. Njegova podešavanja se prikazuju ispod liste Engine.
3. Kliknite {{ui:Renderuj}}. U Studio-u, prvi put kad dodatak pokrene program, Studio vas pita u sopstvenom dijalogu. Napredak se prikazuje dok crta; {{ui:Zaustavi}} ga prekida. Slika se pojavljuje označena engine-om koji ju je nacrtao.

Engine napisan u JavaScript-u radi i u pregledaču. Engine koji pokreće program na ovom računaru radi samo u Studio-u; u pregledaču se prikazuje kao datoteka za čuvanje.

## Šta se prenosi

Engine dobija **paket**: model kao USD datoteku (i glTF datoteku kad je traži), i datoteku podešavanja sa tačnim vrednostima materijala, suncem i nebom, svakom lampom koja je uključena sa svojom snagom i profilom svetlosti, kamerom i ekspozicijom. Svaki program osvetljava, tonira i uzorkuje na svoj način, pa su slike slične po kameri, suncu, lampama i ekspoziciji, ali ne piksel po piksel.

## Programi koje CadCraft nikad ne pokreće

CadCraft nikad ne pokreće program pod licencom GNU GPL i nikad ga ne navodi kao engine ili cilj za Otvori u. Blender je jedan od njih, pa nije na listi Engine. USD ili glTF datoteka sačuvana iz {{ui:Renderuj sliku…}} i dalje se otvara u njemu kao u svakom programu koji čita te datoteke.

:::note
Panoramske i stereo kamere i slika neba (umesto nje koriste se boje neba) se ne prenose drugom programu. Ništa urađeno u drugom programu se ne vraća u model.
:::
