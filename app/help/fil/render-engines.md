---
title: Piliin kung aling program ang gumuguhit ng larawan
summary: Ang pagpipiliang Engine sa Render dialog: ang sarili nating dalawang engine, ibang program sa CadCraft Studio, at ang ginagawa ng web sa halip.
keywords: render, engine, renderer, render engine, plug-in, plugin, studio, ibang program, iginuhit ng, queue, add-on engine
from: be4b056a
---

Ang {{ui:I-render ang larawan…}} ay may pagpipiliang **Engine** sa itaas ng Mode. Laging nandiyan ang sarili nating dalawang engine at gumagana kahit saan; maaaring magdagdag ang mga add-on ng higit pa, at sa CadCraft Studio, kasama rin sa listahan ang mga program na umaako sa eksena.

| Engine | Ano ang ginagawa nito | Saan |
|---|---|---|
| Built-in: Fast | Mabilis na still: liwanag ng araw, malalambot na anino, itsura ng salamin at metal, sa loob ng ilang segundo | Browser at Studio |
| Built-in: Path tracer | Liwanag na tumatalbog sa pagitan ng mga surface sa graphics card o processor mo, ang render queue at ang iba pang computer sa network mo | Browser at Studio |
| Engine ng add-on | Gumuguhit at ibinabalik ang larawan: tingnan ang [Iguhit ang larawan gamit ang ibang program](topic:render-other-program) | Ang browser (engine na nakasulat sa JavaScript) o Studio (engine na nagpapatakbo ng program) |
| Program na umaako sa eksena | Inilalagay ng Studio ang eksena sa folder nito at pinananatiling nakasabay ito | Studio |
| Buksan sa … | Sine-save ang eksena at binubuksan sa isang program; walang bumabalik: tingnan ang [Buksan ang eksena sa ibang program](topic:render-open-in) | Sine-save ng web ang file |

## Paano gumagana ang pagpipilian

- Ang pagpili ng Fast o ng Path tracer ay nagpapalit ng Mode kasama nito, at ganoon din sa kabilang direksyon. Walang ibang nagbabago sa dialog para sa mga taong hindi gumagamit ng ibang engine.
- Ang engine na hindi available ay nananatili sa listahan kasama ang dahilan ("hindi nahanap", "kailangan ng mas bagong bersyon"); hindi mo ito mapipili. Sa browser, ang engine na tumatakbo lang sa Studio ay nagpapakita ng "nagse-save ng file": pagkatapos, ise-save ng {{ui:I-render ang larawan…}} ang eksena at ang mga setting nito sa isang file na dadalhin mo sa program na iyon.
- Naka-save ang pagpipilian kasama ng render settings ng file, at ang engine na huli mong pinili ang nagiging panimulang engine para sa mga file na walang sariling pagpipilian.
- Ang larawang galing sa ibang program ay nagsasabi kung aling program ang gumuhit dito at ang bersyon nito, sa dialog at sa render queue. Ang mga pangako ng pahina ng [Render](topic:render) ay para lang sa **sarili nating** engine: nagliliwanag, nagtatono at nagsa-sample ang ibang program sa sarili nitong paraan, kaya magkakatulad sa camera, araw, lamp at exposure ang dalawang larawan ng iisang eksena, pero hindi pixel sa pixel.

## Ano ang ibinibigay sa bawat engine

Napupunta ang eksena sa ibang program bilang **package**: ang model bilang USD file (kaparehong file na isinusulat ng [Save as USD](topic:usd)), at isang settings file na naglalaman ng mga bagay na hindi mapagkakatiwalaan ng USD importer: ang eksaktong halaga ng materyal, ang mga lamp na naka-on kasama ang lakas at light profile nila, ang araw, ang langit, ang exposure at ang camera gaya ng pagguhit ng dialog. Walang ina-upload kahit saan.

## Ang render queue

Maaaring maghintay ang larawan o animation para sa ibang program sa [render queue](topic:render#the-render-queue) gaya ng sarili nating; naaalala ng job nito kung aling engine ang para dito. Ipinapadala ang animation sa program sa isang takbo lang.
