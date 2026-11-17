---
title: Padalyti kraštinę ar kreivę lygiomis dalimis
summary: Perskirti liniją į lygias dalis arba lankui ar apskritimui nustatyti naują segmentų skaičių įrankiu Padalyti.
keywords: padalyti, padalyti kraštinę, lygios dalys, lygūs segmentai, perskirti kraštinę, segmentai, padalyti kraštines, lanko segmentai, apskritimo segmentai, taškai palei liniją
from: 5c3ce3ed
---

{{ui:Padalyti}} padalija kraštinę į lygias dalis, o kiekvienoje dalies riboje atsiranda kampas. Kampais galima prisitraukti, nuo jų pradėti linijas arba stumti ir traukti paviršiaus dalis.

## Kraštinės padalijimas

1. Spustelėkite {{ui:Padalyti}} įrankių juostoje arba pasirinkite kraštinę ir spustelėkite {{ui:Dalyti…}} skydelyje {{ui:Objekto informacija}}.
2. Nukreipkite žymeklį į kraštinę. Žymos rodo, kur bus padalijimo vietos: virš kraštinės vidurio bus dvi dalys; kad būtų daugiau, perkelkite žymeklį arčiau galo.
3. Spustelėkite, kad kraštinė būtų padalyta į rodomas dalis. Arba įveskite skaičių, pavyzdžiui `5` (arba `5s`, arba `/5`), ir paspauskite {{key:Enter}}: kraštinė padalijama iš karto.

Gautos dalys lieka pažymėtos, o tai yra vienas anuliavimo žingsnis. Paviršius, kuriam priklauso kraštinė, išlaiko savo formą ir įgyja naujus kampus.

## Lanko ar apskritimo padalijimas

Nukreipkite žymeklį į bet kurį lanko ar apskritimo segmentą: padalijamas visas lankas arba apskritimas.

- Lankas arba apskritimas, kurio kampų niekas kitas nenaudoja ir kuris guli plokščiai savo paviršiuje, **perbraižomas su tiek segmentų** tikrąja lanko forma. Jo galai lieka vietoje, ir jis lieka viena kreive, todėl galite jį vis tiek pasirinkti vienu spustelėjimu ir pakeisti jo spindulį skydelyje {{ui:Objekto informacija}}. 24 kraštinių apskritimas, padalytas į 8, tampa aštuonkampiu.
- Bet kuri kita kreivė – įtempto cilindro kraštas, kreivė, nubraižyta su {{ui:Kreivė}}, lankas su prie kampų prijungtomis linijomis – gauna naujus kampus lygiais ilgiais palei ją, o niekas nepajuda.

## Su modeliavimo klavišais

Įrankis tas pats ir su modeliavimo klavišais (Parametrai › ModelCraft › Klavišai arba meniu stilius „Modeler“), kur jis yra meniu {{ui:Tinklelis}} kaip {{ui:Padalyti kraštines}}.

## Verta žinoti

- Įvedami skaičiai gali būti nuo 2 iki 1000; judinant žymeklį galima gauti iki 100.
- Kreivė, nubraižyta su {{ui:Kreivė}}, išlaiko savo taškus: po {{ui:Redaguoti taškus}} ji perbraižoma pagal juos, o nauji kampai išnyksta.

Taip pat žr. [Braižyti paviršius linijomis, stačiakampiais, apskritimais ir lankais](topic:draw-faces) ir [Tikslių dydžių įvedimas reikšmių lauke](topic:value-box).
