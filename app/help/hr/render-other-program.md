---
title: Crtanje slike drugim programom
summary: Naš vlastiti path tracer crta sliku Renderiraj; drugi program može je nacrtati samo preko dodatka motora za renderiranje u CadCraft Studiju. Što se prenosi i zašto se neki programi nikad ne nude.
keywords: render, motor, vanjski program, dodatak motora, studio, pozadina, red, usd, gltf, nacrtao, blender, gpl
from: 150f94f1
---

Sliku u {{ui:Renderiraj sliku…}} crtaju **naši vlastiti motori**: Brzo i Path tracer, u pregledniku i u CadCraft Studiju. Drugi program može je nacrtati samo kad je donosi **dodatak motora za renderiranje**: vidi [Dodavanje motora za renderiranje dodatkom](topic:render-engine-addons). Da scenu odnesete drugom programu i nastavite raditi tamo, koristite [Otvaranje scene u drugom programu](topic:render-open-in) ili [Slanje scene u pogonski motor za igre](topic:render-unreal).

## Nacrtajte sliku motorom dodatka

1. Uključite dodatak u Postavke › Dodaci. Njegov motor pojavljuje se na popisu Motor od {{ui:Renderiraj sliku…}}.
2. Odaberite ga. Njegove vlastite postavke prikazuju se ispod popisa Motor.
3. Kliknite {{ui:Renderiraj}}. U Studiju, prvi put kad dodatak pokrene program, Studio vas pita u vlastitom dijalogu. Napredak se prikazuje dok crta; {{ui:Zaustavi}} ga prekida. Slika se pojavljuje označena motorom koji ju je nacrtao.

Motor napisan u JavaScriptu radi i u pregledniku. Motor koji pokreće program na ovom računalu radi samo u Studiju; u pregledniku se prikazuje kao datoteka za spremanje.

## Što se prenosi

Motor dobiva **paket**: model kao USD datoteku (i glTF datoteku kad je traži), te datoteku postavki s točnim vrijednostima materijala, suncem i nebom, svakom svjetiljkom koja je uključena s njezinom snagom i profilom svjetla, kamerom i ekspozicijom. Svaki program osvjetljava, tonira i uzorkuje na svoj način, pa su slike slične po kameri, suncu, svjetiljkama i ekspoziciji, a ne piksel po piksel.

## Programi koje CadCraft nikad ne pokreće

CadCraft nikad ne pokreće program pod licencom GNU GPL i nikad ga ne navodi kao motor ni kao cilj **Otvori u**. Blender je jedan od njih, pa nije na popisu Motor. USD ili glTF datoteka spremljena iz {{ui:Renderiraj sliku…}} i dalje se otvara u njemu kao i u svakom programu koji čita te datoteke.

:::note
Panoramske i stereo kamere te slika neba (koriste se boje neba) ne prenose se drugom programu. Ništa učinjeno u drugom programu ne vraća se u model.
:::
