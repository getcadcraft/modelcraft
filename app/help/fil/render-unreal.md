---
title: Ipadala ang scene sa game engine
summary: Maisusulat ng Studio ang scene sa proyekto ng Unreal Engine at mananatiling naka-sync sa bawat pagpapadala; ang sarili mong mga edit ay nasa layer na hindi kailanman isinusulat ng CadCraft. Hindi pa nailalabas ang plug-in na magbubukas nito.
keywords: unreal, unreal engine, game engine, link, ipadala, usd stage, proyekto, live, cine camera, movie render queue
from: 9a765cc2
---

Sa CadCraft Studio, ang Engine list ay maaaring maglaman ng **link** sa isang proyekto ng Unreal Engine. Isang direksyon lang: mula sa CadCraft papunta sa Unreal.

## Ipadala ang scene

1. Piliin ang Unreal na entry sa Engine list. Sa unang beses, hihilingin ng Studio na piliin mo ang folder ng iyong proyekto (ang may `.uproject` file); naaalala na nito ito.
2. I-click ang {{ui:Ipadala}}. Gagawa ang Studio ng `CadCraft/<file name>/` sa loob ng proyekto: ang scene bilang USD file, ang settings file, mga light profile, at dalawang maliit na layer file.
3. Baguhin ang model, i-save, at ipadala ulit. Ang scene at ang settings file lang ang napapalitan.

## Ligtas ang sarili mong mga edit

Ang stage na binubuksan ng Unreal ay isang maliit na root layer na ginagawa minsan, na may dalawang layer sa ilalim nito: **sa iyo** sa itaas (`<name>.user.usda`, walang laman sa simula, hindi kailanman isinusulat muli ng CadCraft) at ang scene ng CadCraft sa ibaba. Nananatili ang mga edit na i-save mo sa sarili mong layer kahit ipadala ulit ang scene. Ang mga ilaw at iba pang actor na ilalagay mo sa Unreal level ay nasa labas ng stage at hindi rin ginagalaw.

## Kung walang Studio

Sa browser, o sa computer kung saan hindi nakikita ng Studio ang Unreal, piliin ang **Unreal project folder (.zip)** sa Engine list at i-click ang {{ui:I-render}}. Ise-save nito ang parehong folder bilang zip: i-unzip ito sa folder na `CadCraft` ng iyong proyekto. Iwanang naka-on ang **Include the stage files** sa unang beses; i-off ito para sa mga susunod na save, para ang zip ay maglalaman lang ng scene at ng settings file, at hindi kailanman mapapalitan ang sarili mong layer.

:::note
Ang Unreal plug-in na nagbubukas ng stage, naglalapat ng araw, mga lampara, camera at exposure, sumusunod sa bawat pagpapadala at nagre-render ng camera ay **hindi pa nailalabas** at hindi pa napapatakbo sa Unreal. Hanggang hindi pa ito, ilalagay ng Ipadala ang mga file sa proyekto at mabubuksan ng sariling USD tools ng Unreal ang mga ito. Windows ang unang system; susunod ang macOS.
:::
