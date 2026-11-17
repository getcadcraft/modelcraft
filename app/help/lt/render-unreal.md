---
title: Siųsti sceną į žaidimų variklį
summary: Studio gali įrašyti sceną į Unreal Engine projektą ir ją atnaujinti kiekvieną kartą siunčiant; jūsų pakeitimai laikomi sluoksnyje, kurio CadCraft niekada neperrašo. Įskiepis, kuris ją atidaro, dar neišleistas.
keywords: unreal, unreal engine, žaidimų variklis, nuoroda, siųsti, usd stage, projektas, tiesiogiai, cine camera, movie render queue
from: 9a765cc2
---

CadCraft Studio variklių sąraše gali būti **nuoroda** į Unreal Engine projektą. Tik viena kryptimi: iš CadCraft į Unreal.

## Siųsti sceną

1. Variklio sąraše pasirinkite Unreal įrašą. Pirmąjį kartą Studio paprašys nurodyti projekto aplanką (tą, kuriame yra `.uproject` failas); jis bus įsimenamas.
2. Spustelėkite {{ui:Siųsti}}. Studio projekto viduje įrašys `CadCraft/<file name>/`: sceną kaip USD failą, parametrų failą, šviestuvų profilius ir du mažus sluoksnių failus.
3. Pakeiskite modelį, įrašykite jį ir vėl siųskite. Keičiami tik scena ir parametrų failas.

## Jūsų pakeitimai saugūs

Unreal atidaroma scena yra vienas mažas šakninis sluoksnis, sukurtas vieną kartą, ir du sluoksniai po juo: **jūsų** viršuje (`<name>.user.usda`, iš pradžių tuščias, CadCraft jo niekada neperrašo) ir CadCraft scena apačioje. Pakeitimai, kuriuos įrašote į savo sluoksnį, išlieka, kai scena vėl siunčiama. Šviestuvai ir kiti aktoriai, kuriuos dedate į Unreal lygį, yra už scenos ribų, todėl taip pat nekeičiami.

## Be Studio

Naršyklėje arba kompiuteryje, kuriame Studio neranda Unreal, Variklio sąraše pasirinkite **Unreal projekto aplankas (.zip)** ir spustelėkite {{ui:Atvaizduoti}}. Jis įrašo tą patį aplanką kaip zip archyvą: išskleiskite jį į savo projekto aplanką `CadCraft`. Pirmą kartą palikite įjungtą **Įtraukti scenos failus**; vėlesniems įrašymams išjunkite, kad zip archyve būtų tik scena ir parametrų failas, o jūsų sluoksnis niekada nebūtų pakeistas.

:::note
Unreal įskiepis, kuris atidaro sceną, pritaiko saulę, šviestuvus, kameras ir ekspoziciją, seka kiekvieną siuntimą ir atvaizduoja kamerą, dar **neišleistas** ir Unreal dar nebuvo paleistas. Kol jis neišleistas, Siųsti įdeda failus į projektą, o Unreal savieji USD įrankiai gali juos atidaryti. Pirmoji sistema – Windows, po jos – macOS.
:::
